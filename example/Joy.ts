import * as Gtk from 'Gtk'
import * as Gio from 'Gio'
import * as Soup from 'Soup'
import * as GLib from 'GLib'
import * as callable from 'callable'
const Route = require('Route')

/**
 * Request Object
 * 
 * this wraps all the handler parameters
 */
class Request {
    srv: Soup.Server
    msg: Soup.Message
    path: string
    query: any
    client: any
    constructor(srv: Soup.Server, msg: Soup.Message, path: string, query: any, client: any) {
        this.srv = srv
        this.msg = msg
        this.path = path
        this.query = query
        this.client = client
    }
    /**
     * True if the route matches this request path & method
     * @param route 
     */
    match(route):boolean {
        if (route.method !== this.msg['method']) return false
        if (route.path === '/*') return true
        if (route.path === this.path) return true
        if (route.pattern.match(this.path)) return true
        return false
    }
}

/**
 * Response Object Implementation
 * 
 * this wraps the output from the session
 */
class ResponseImpl {
    request: Request
    constructor(request: Request) {
        this.request = request
    }
    /**
     * Default response behavior - send the string
     * @param text 
     */
    __call__(text: string) {
        this.request.msg.set_response("text/html", Soup.MemoryUse.COPY, text, text.length)
        this.request.msg.set_status(200)
    }
    redirect(url:string) {
        this.request.msg.set_redirect(302, url)
    }
    code(statusCode:string) {
        this.request.msg['status-code'] = statusCode
    }
}

/**
 * Callable proxy for the Response Implementation
 * 
 * const reply = new Response(request)
 * reply('hello world')
 * reply.file('index.html')
 * 
 */
const Response = callable.factory(ResponseImpl)

/**
 * Hapi style plugin wrapper for Soup.Server
 */
export class Server {
    app: Gtk.Application
    srv: Soup.Server
    info: any
    routes: any[]
    engines: any
    plugins: any[]
    constructor() {
        this.info = {}
        this.routes = []
        this.plugins = []
        this.engines = {}
    }
    /**
     * Set connection options
     * @param options 
     */
    connection(options:any) {
        for (let key in options) 
            this.info[key] = options[key]
    }
    /**
     * Define Route
     * @param options 
     */
    route(options:any): Server {
        if (Array.isArray(options)) {
            for (let i in options) {
                this.route(options[i])
            }
            return
        }

        options.pattern = new Route(options.path)
        this.routes.push(options)
        return this
    }
    /**
     * abstract method
     * @param options 
     */
    views(options:any) {}
    /**
     * Register plugin
     * @param plugin 
     * @param next 
     */
    register(plugin:any, next:Function) {
        if (!Array.isArray(plugin)) plugin = [plugin]
        for (let i in plugin) {
            this.plugins.push(plugin[i])
            plugin[i].register.register(this, plugin[i].options)
        }
        next(false)
    }
    /**
     * Extend a server component from plugin
     * @param type 
     * @param property 
     * @param method 
     */
    decorate(type: string, property: string, method: Function) {
        switch(type) {
            case 'server':  Server.prototype[property] = method; return
            case 'request': Request.prototype[property] = method; return
            case 'reply':   ResponseImpl.prototype[property] = method; return
        }
    }

    /**
     * Start serving
     * @param next 
     */
    start(next:Function) {
        this.app = new Gtk.Application({application_id: this.info.application_id, flags: Gio.ApplicationFlags.FLAGS_NONE})
        this.app.connect('activate', () => {
            this.srv = new Soup.Server()        
            this.srv.add_handler(null, (srv, msg, path, query, client) => {
                const request = new Request(srv, msg, path, query, client)
                for (let i in this.routes) {
                    const route = this.routes[i]
                    if (request.match(route)) {
                        const reply = new Response(request)
                        route.handler.call(this, request, reply)
                        return
                    }
                }
            }, null, null)
            next(!this.srv.listen_all(this.info.port, 0))
        })
        this.app.run(null)
    }
}
