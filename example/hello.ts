import * as Gtk from 'Gtk'
import * as Liquid from 'Liquid'
import * as Joy from 'Joy'
import {Static} from 'Static'

Gtk.init(null)

const server = new Joy.Server()
server.connection({port: 8088, host: '0.0.0.0' })

server.route({ 
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Hello World')
    }  
})

server.route({
    method: 'GET',
    path: '/app',
    handler: function (request, reply) {
        reply.file('app.html')
    }
})

server.route({
    method: 'GET',
    path: '/*',
    handler: function (request, reply) {
        reply.file(request.path)
    }
    
})


server.register([{
    register: Static, 
    options: {base: './example/web'}
}], (err) => {
    if (err) throw err
    server.start((err) => {
        if (err) throw err
        print(`Server running at: http://${server.info.host}:${server.info.port}/`)
    })
})


Gtk.main()
