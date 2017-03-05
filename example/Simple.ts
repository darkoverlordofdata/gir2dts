import * as Gtk from 'Gtk'
import * as Gio from 'Gio'
import * as Soup from 'Soup'
import * as GLib from 'GLib'
import * as Liquid from 'Liquid'
import {mimetypes} from 'mimetypes'

/**
 * Express style middleware 
 */
export type Handler = (req: Request, res: Response) => void

/**
 * path controller
 */
export class Controller {
    path: string
    re: RegExp
    useRe: boolean
    handler: Handler
    method: string
    constructor(path: string | RegExp, fn: Handler, method: string='use') {
        if (typeof path === 'string') {
            this.path = path
            this.re = null
            this.useRe = false
        } else {
            if (path == null) {
                this.path = null
                this.re = null
                this.useRe = false
            } else {
                this.path = null
                this.re = path
                this.useRe = true
            }
        }
        this.handler = fn
        this.method = method
    }
    /**
     * Check if this middleware controller is a match
     * @param path 
     * @param method
     */
    match(method: string, path:string) {
        if (this.method === 'get'    && method !== 'GET') return false
        if (this.method === 'put'    && method !== 'PUT') return false
        if (this.method === 'post'   && method !== 'POST') return false
        if (this.method === 'delete' && method !== 'DELETE') return false
        if (this.method === 'get'    && this.path === '*') return true
        if (this.method === 'use'    && this.path == null) return this.handler != null
        return this.useRe ? this.re.test(path) : this.path === path 
    }
}

/**
 * pseudo Request
 */
export class Request {
    
    srv: Soup.Server
    path:string
    query: any
    client: any
    method: string
    baseUrl: string

    constructor(srv: Soup.Server,  msg: Soup.Message, path:string, query, client) {
        this.srv = srv
        this.path = path
        this.query = query
        this.client = client
        this.method = msg['method']
    }
}

/**
 * pseudo Response
 */
export class Response {
    app: Server
    msg: Soup.Message
    completed: boolean

    constructor(app: Server, msg: Soup.Message) {
        this.app = app
        this.msg = msg
        this.completed = false
    }
    send(body:string) {
        this.msg.set_response("text/html", Soup.MemoryUse.COPY, body, body.length)
        this.msg.set_status(200)
        this.completed = true
    }
    render(view: string, locals: any={}) {
        const file = Gio.file_new_for_path(`${this.app.settings.views}/${view}`)
        if (file.query_exists(null)) {
            let [success, tmp, length] = file.load_contents(null)
            if (success) {
                const ext = view.split('.').pop()
                const page = this.app.engines[ext] ? this.app.engines[ext](String(tmp), locals) : String(tmp)
                this.msg.set_response("text/html", Soup.MemoryUse.COPY, page, page.length)
                this.msg.set_status(200)
                this.completed = true
            }
        }

    }
    redirect(status: number | string,  url?: string) {
        if (typeof url === 'undefined') [status, url] = [302, String(status)]
        this.msg.set_redirect(Number(status), url)
    }
}
/**
 * Express style interface
 * with naive routing
 */
export class Server {
    app: Gtk.Application
    srv: Soup.Server
    port: number = 8080
    base: string
    stack: Controller[]
    cache: any
    callback: Function
    settings: any
    engines: any
    constructor() {
        this.stack = []
        this.cache = {}
        this.settings = {}
        this.engines = {}
        this.app = new Gtk.Application({application_id: 'com.d16a.sample', flags: Gio.ApplicationFlags.FLAGS_NONE})
        this.app.connect('activate', () => {
            this.srv = new Soup.Server()        
            this.srv.add_handler(null, (srv, msg, path, query, client) => {
                const req = new Request(srv, msg, path, query, client)
                const res = new Response(this, msg)
                req.baseUrl = this.base
                this.handler(req, res)                
            }, null, null)
            this.srv.listen_all(this.port, 0)
            this.callback()
        })
    }
    /**
     * Property settings
     * @param name 
     * @param value 
     */
    set(name: string, value: any) {
        this.settings[name] = value
    }

    /**
     * Template engine
     * @param ext - registered extension
     * @param fn  - renderer
     */
    engine(ext: string, fn: Function) {
        this.engines[ext] = fn
    }
    /**
     * Add method to the stack
     * 
     * @param path 
     * @param fn 
     */
    get(path: string | RegExp, fn:Handler) {
        this.stack.push(new Controller(path, fn, 'get'))
    }
    put(path: string | RegExp, fn:Handler) {
        this.stack.push(new Controller(path, fn, 'put'))
    }
    post(path: string | RegExp, fn:Handler) {
        this.stack.push(new Controller(path, fn, 'post'))
    }
    delete(path: string | RegExp, fn:Handler) {
        this.stack.push(new Controller(path, fn, 'delete'))
    }
    all(path: string | RegExp, fn:Handler) {
        this.stack.push(new Controller(path, fn, 'all'))
    }

    /**
     * Add middleware to the stack
     * 
     * @param path 
     * @param fn 
     */
    use(path: string | RegExp | Handler, fn?:Handler) {
        if (typeof path === 'string')
            this.stack.push(new Controller(path, fn))
        else if (path instanceof RegExp)
            this.stack.push(new Controller(path, fn))
        else
            this.stack.push(new Controller(null, path))
        
    }

    /**
     * @param port to listen on
     * @param callback when ready
     */
    listen(port:number, callback:Function) {
        this.port = port
        this.callback = callback
        this.app.run(null)
    }
    /**
     * Top level handler. Go thru the stack and find a match
     * visit all the middleware on the way
     * 
     * @param req 
     * @param res 
     */
    handler(req: Request, res: Response) {
        for (let controller of this.stack) {
            if (controller.match(req.method, req.path)) {
                controller.handler(req, res)
                if (res.completed) return
            }
        }
    }

    /**
     * set static base middleware
     * @param path 
     */
    static(base: string) {
        this.base = base
        return (req: Request, res: Response) => {
            const key = `${base}${req.path}`
            if (this.cache[key]) {
                let cache = this.cache[key] 
                res.msg.set_response(cache.mimetype, Soup.MemoryUse.COPY, cache.data, cache.length)
                res.msg.set_status(200)
                res.completed = true
                return
            }

            const file = Gio.file_new_for_path(key)
            if (file.query_exists(null)) {
                let [success, data, length] = file.load_contents(null)
                if (success) {

                    let mimetype = "text/html"
                    let i = req.path.lastIndexOf('.')
                    let ext = req.path.substr(i+1)
                    if (mimetypes[ext])
                        mimetype = typeof mimetypes[ext] === 'string' ? mimetypes[ext] : mimetypes[ext][0]

                    this.cache[key] = {mimetype: mimetype, data:data, length: length}

                    res.msg.set_response(mimetype, Soup.MemoryUse.COPY, data, length)
                    res.msg.set_status(200)
                    res.completed = true
                }
            }
        }
    }

}
        
