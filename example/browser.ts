
import * as Gtk from 'Gtk'
import * as WebKit from 'WebKit'

let argv = ARGV

Gtk.init(null)
let window = new Gtk.Window({
    title: 'jsGtk+ browser',
    type : Gtk.WindowType.TOPLEVEL,
    window_position: Gtk.WindowPosition.CENTER
})
let  webView = new WebKit.WebView()

let toolbar = new Gtk.Toolbar()
// buttons to go back, go forward, or refresh
let button = {
    back: Gtk.ToolButton.new_from_stock(Gtk.STOCK_GO_BACK),
    forward: Gtk.ToolButton.new_from_stock(Gtk.STOCK_GO_FORWARD),
    refresh: Gtk.ToolButton.new_from_stock(Gtk.STOCK_REFRESH)
}
// where the URL is written and shown
let urlBar = new Gtk.Entry()
// the browser container, so that's scrollable
let scrollWindow = new Gtk.ScrolledWindow({})
// horizontal and vertical boxes
let hbox = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL})
let vbox = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL})

let gtkSettings = Gtk.Settings.get_default()
gtkSettings.gtk_application_prefer_dark_theme = true
//gtkSettings.gtk_theme_name = 'Adwaita'

//Setting up optional Dark theme (gotta love it!)
//./browser.js google.com --dark
if (argv.some(info => info === '--dark')) {
    let gtkSettings = Gtk.Settings.get_default()
    gtkSettings.gtk_application_prefer_dark_theme = true
    gtkSettings.gtk_theme_name = 'Adwaita'
} else if(argv.some(info => info === '--light')) {
    let gtkSettings = Gtk.Settings.get_default()
    gtkSettings.gtk_application_prefer_dark_theme = false

    gtkSettings.gtk_theme_name = 'Adwaita'
}

// open first argument or shameless plug

webView.load_uri(url(argv.filter(url => '-' !== url[0])[0] || 'https://darkoverlordofdata.com'))

// can't change to new page until this gets fixed
//whenever a new page is loaded ...
webView.connect('document-load-finished', (widget, loadEvent, data) => {
    switch (loadEvent) {
      case 2: // XXX: where is WEBKIT_LOAD_COMMITTED ?
        // ... update the URL bar with the current adress
        urlBar.set_text(widget.get_uri())
        button.back.set_sensitive(webView.can_go_back())
        button.forward.set_sensitive(webView.can_go_forward())
        break
    }
})

// configure buttons actions
button.back.connect('clicked', () => webView.go_back())
button.forward.connect('clicked', () => webView.go_forward())
button.refresh.connect('clicked', () => webView.reload())

// enrich the toolbar
toolbar.add(button.back)
toolbar.add(button.forward)
toolbar.add(button.refresh)

// define "enter" / call-to-action event
// whenever the url changes on the bar
urlBar.connect('activate', () => {
    let href = url(urlBar.get_text())
    urlBar.set_text(href)
    webView.load_uri(href)
})

// make the container scrollable
scrollWindow.add(webView)

// pack horizontally toolbar and url bar
hbox.pack_start(toolbar, false, false, 0)
hbox.pack_start(urlBar, true, true, 8)

// pack vertically top bar (hbox) and scrollable window
vbox.pack_start(hbox, false, true, 0)
vbox.pack_start(scrollWindow, true, true, 0)

// configure main window
window.set_default_size(1024, 720)
window.set_resizable(true)
window.connect('show', () => {
    // bring it on top in OSX
    window.set_keep_above(true)
    Gtk.main()
})
window.connect('destroy', () => Gtk.main_quit())
window.connect('delete_event', () => false)

// add vertical ui and show them all
window.add(vbox)
window.show_all()

// little helper
// if link doesn't have a protocol, prefixes it via http://
function url(href) {
    return /^([a-z]{2,}):/.test(href) ? href : ('https://' + href)
}
