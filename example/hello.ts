import * as Gtk from 'Gtk'
import * as Gio from 'Gio'
import * as Joy from 'Joy'
import * as Liquid from 'Liquid'
import * as WebKit from 'WebKit'
import {View} from 'View'
import {Static} from 'Static'
import {ProuctsFilter, data} from 'test_data'

/**
 * Routes
 */
const routes = [{
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply.file('app.html')
    }
},{ 
    method: 'GET',
    path: '/test',
    handler: function(request, reply) {
        reply.view('test.liquid', data)
    }  
},{
    method: 'GET',
    path: '/*',
    handler: function(request, reply) {
        reply.file(request.path)
    }
}]

Gtk.init(null)
const server = new Joy.Server()
server.connection({
    port: 8088, 
    host: '0.0.0.0', 
    application_id: 'com.d16a.sample' 
})
server.route(routes)
server.register([ 
    /**
     * plugins:
     */
    {register: Static,  options: {base: './example/web'} }, 
    {register: View,    options: {} }
], (err) => {
    if (err) throw err
    
    Liquid.Template.registerFilter(ProuctsFilter)
    /** 
     * initialize the templating engine 
     */
    server.views({  
        path: './example/views',
        engines: {
            liquid: (src, data={}) => Liquid.Template.parse(src).render(data) 
        }
    })
    
    /** 
     * start the server 
     */
    server.start((err) => { 
        if (err) throw err

        let gtkSettings = Gtk.Settings.get_default()
        gtkSettings.gtk_application_prefer_dark_theme = true

        let webView = new WebKit.WebView()
        let scrollWindow = new Gtk.ScrolledWindow({})
        let vbox = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL})
        scrollWindow.add(webView)
        vbox.pack_start(scrollWindow, true, true, 0)

        let window = new Gtk.Window({
            title: 'Orobouros',
            type : Gtk.WindowType.TOPLEVEL,
            window_position: Gtk.WindowPosition.CENTER
        })
        // configure client window
        window.set_default_size(1024, 720)
        window.set_resizable(true)
        window.connect('destroy', () => Gtk.main_quit())
        window.connect('delete_event', () => false)
        window.add(vbox)
        window.show_all()
        // print(`Server running at: http://${server.info.host}:${server.info.port}/`)
        webView.load_uri(`http://${server.info.host}:${server.info.port}/`)
    })
})

Gtk.main()
