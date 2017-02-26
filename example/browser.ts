import * as Gtk from 'Gtk'
import * as WebKit from 'WebKit'
print("Hello!")

Gtk.init(null)
let win = new Gtk.Window({
    title: 'jsGtk+ browser',
    type : Gtk.WindowType.TOPLEVEL,
    window_position: Gtk.WindowPosition.CENTER
})
let  webView = new WebKit.WebView()

win.connect('delete-event', Gtk.main_quit)
win.show_all()
Gtk.main()