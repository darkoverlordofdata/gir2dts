import * as Gtk from 'Gtk'
import * as Gio from 'Gio'
import * as GLib from 'GLib'
import * as Soup from 'Soup'
import * as Liquid from 'Liquid'
import * as Simple from 'Simple'
import {ProuctsFilter, data} from 'test_data'


Gtk.init(null)

Liquid.Template.registerFilter(ProuctsFilter)

let app = new Simple.Server()

app.set('views', './example/views')

app.engine('liquid', (src, data={}) => Liquid.Template.parse(src).render(data))

app.use(app.static(ARGV[0]))

app.get(/\/test\b/, (srv, msg, path, query, client) => {
    app.render(msg, 'test.liquid', data)
})

app.get('*', (srv, msg, path, query, client) => {
    app.render(msg, '404.liquid', {msg: `unable to locate ${path}`})
})

app.listen(0xd16a, () => {
    print(`started on http://localhost:${app.port}/index.html`)
})

Gtk.main()

