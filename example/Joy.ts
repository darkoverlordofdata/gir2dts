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
        if (route.pattern.match(this.path)) {
            return true
        }       
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
     * Default response behavior
     * @param text 
     */
    __call__(text: string) {
        this.request.msg.set_response("text/html", Soup.MemoryUse.COPY, text, text.length)
        this.request.msg.set_status(200)
    }

}

/**
 * Callable proxy for the Response Implementation
 */
const Response = callable.factory(ResponseImpl)

/**
 *  
 */
export class Server {
    app: Gtk.Application
    srv: Soup.Server
    info: any
    routes: any[]
    plugins: any[]
    next: Function
    constructor() {
        this.info = {}
        this.routes = []
        this.plugins = []
        this.app = new Gtk.Application({application_id: 'com.d16a.sample', flags: Gio.ApplicationFlags.FLAGS_NONE})
        this.app.connect('activate', () => {
            this.srv = new Soup.Server()        
            this.srv.add_handler(null, (srv, msg, path, query, client) => {
                const request = new Request(srv, msg, path, query, client)
                for (let i in this.routes) {
                    let route = this.routes[i]
                    if (request.match(route)) {
                        let reply = new Response(request)
                        route.handler.call(request, request, reply)
                        return
                    }
                }
            
            }, null, null)
            this.next(!this.srv.listen_all(this.info.port, 0))
        })
    }

    /**
     * Set connection options
     * @param options 
     */
    connection(options:any) {
        for (let key in options) {
            this.info[key] = options[key]
        }
    }
    /**
     * Define Route
     * @param options 
     */
    route(options:any) {
        options.pattern = new Route(options.path)
        this.routes.push(options)
    }
    /**
     * Start serving
     * @param next 
     */
    start(next:Function) {
        this.next = next
        this.app.run(null)
    }
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
     * Extend a server component
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
    handler(name: string, method: Function) {

    }
}

