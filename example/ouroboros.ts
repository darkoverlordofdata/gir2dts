import * as Gtk from 'Gtk'
import * as Gio from 'Gio'
import * as GLib from 'GLib'
import * as Soup from 'Soup'
import * as WebKit from 'WebKit'
import * as Liquid from 'Liquid'
import * as Simple from 'Simple'
import {ProuctsFilter, data} from 'test_data'


Gtk.init(null)

Liquid.Template.registerFilter(ProuctsFilter)

let app = new Simple.Server()

app.set('views', './example/views')

app.engine('liquid', (src, data={}) => Liquid.Template.parse(src).render(data))

app.use(app.static('./example/web'))

app.get(/\/menu\b/, (req, res) => {
    res.render('menu.html')
})

app.get(/\/test\b/, (req, res) => {
    res.render('test.liquid', data)
})

app.get('*', (req, res) => {
    
    print(JSON.stringify(req.query, null, 2))
    res.render('404.liquid', {msg: `unable to locate ${req.path}`})
})

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
// configure main window
window.set_default_size(1024, 720)
window.set_resizable(true)
window.connect('destroy', () => Gtk.main_quit())
window.connect('delete_event', () => false)
window.add(vbox)
window.show_all()

app.listen(0xd16a, () => {
    webView.load_uri(`http://0.0.0.0:${app.port}/app.html`)
})

Gtk.main()

