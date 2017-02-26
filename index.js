/**
 *  Copyright 2017 darkoverlordofdata
 *
 * Module loader/gjs helper
 * normalized access to amd, commonjs and gjs imports
 *
 */
Object.defineProperties(window, {
    define: { value: (function (modules) {
            return function (name, deps, callback) {
                if (typeof name !== 'string') {
                    var bundle = deps();
                    for (name in bundle)
                        modules[name] = { id: name, exports: bundle[name] };
                }
                else {
                    modules[name] = { id: name, exports: {} };
                    var args = [function (name) { return modules[name] ? modules[name].exports : imports[name]; },
                        modules[name].exports];
                    for (var i = 2; i < deps.length; i++)
                        args.push(modules[deps[i]].exports);
                    callback.apply(modules[name].exports, args);
                }
            };
        }({
            Lang: { id: 'Lang', exports: imports.lang },
            Gio: { id: 'Gio', exports: imports.gi.Gio },
            Atk: { id: 'Atk', exports: imports.gi.Atk },
            Gdk: { id: 'Gdk', exports: imports.gi.Gdk },
            Gtk: { id: 'Gtk', exports: imports.gi.Gtk },
            GLib: { id: 'GLib', exports: imports.gi.GLib },
            Pango: { id: 'Pango', exports: imports.gi.Pango },
            WebKit: { id: 'WebKit', exports: imports.gi.WebKit },
            GObject: { id: 'GObject', exports: imports.gi.GObject }
        })) },
    _: { value: imports.gettext.gettext }
});
Object.defineProperties(define, {
    amd: { value: true },
    version: { value: '0.0.1' },
    path: { value: function (path) { return imports.searchPath.unshift(path); } },
    plugin: { value: function (name, context) { return imports[name].attach(context); } }
});
Object.defineProperties(String.prototype, {
    format: { value: imports.format.format }
});
define("example/browser", ["require", "exports", "Gtk", "WebKit"], function (require, exports, Gtk, WebKit) {
    "use strict";
    print("Hello!");
    var argv = ARGV;
    Gtk.init(null);
    var window = new Gtk.Window({
        title: 'jsGtk+ browser',
        type: Gtk.WindowType.TOPLEVEL,
        window_position: Gtk.WindowPosition.CENTER
    });
    var webView = new WebKit.WebView();
    var toolbar = new Gtk.Toolbar();
    // buttons to go back, go forward, or refresh
    var button = {
        back: Gtk.ToolButton.new_from_stock(Gtk.STOCK_GO_BACK),
        forward: Gtk.ToolButton.new_from_stock(Gtk.STOCK_GO_FORWARD),
        refresh: Gtk.ToolButton.new_from_stock(Gtk.STOCK_REFRESH)
    };
    // where the URL is written and shown
    var urlBar = new Gtk.Entry();
    // the browser container, so that's scrollable
    var scrollWindow = new Gtk.ScrolledWindow({});
    // horizontal and vertical boxes
    var hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL });
    var vbox = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL });
    // Setting up optional Dark theme (gotta love it!)
    // ./browser.js google.com --dark
    if (argv.some(function (info) { return info === '--dark'; })) {
        var gtkSettings = Gtk.Settings.get_default();
        gtkSettings.gtk_application_prefer_dark_theme = true;
        gtkSettings.gtk_theme_name = 'Adwaita';
    }
    else if (argv.some(function (info) { return info === '--light'; })) {
        var gtkSettings = Gtk.Settings.get_default();
        gtkSettings.gtk_application_prefer_dark_theme = false;
        gtkSettings.gtk_theme_name = 'Adwaita';
    }
    // open first argument or Google
    webView.load_uri(url(argv.filter(function (url) { return '-' !== url[0]; })[0] || 'darkoverlordofdata.com/spaceship-warrior-ts/'));
    //whenever a new page is loaded ...
    // webView.connect('load-changed', (widget, loadEvent, data) => {
    //     switch (loadEvent) {
    //       case 2: // XXX: where is WEBKIT_LOAD_COMMITTED ?
    //         // ... update the URL bar with the current adress
    //         urlBar.set_text(widget.get_uri());
    //         button.back.set_sensitive(webView.can_go_back());
    //         button.forward.set_sensitive(webView.can_go_forward());
    //         break;
    //     }
    // });
    // configure buttons actions
    button.back.connect('clicked', function () { return webView.go_back(); });
    button.forward.connect('clicked', function () { return webView.go_forward(); });
    button.refresh.connect('clicked', function () { return webView.reload(); });
    // enrich the toolbar
    toolbar.add(button.back);
    toolbar.add(button.forward);
    toolbar.add(button.refresh);
    // define "enter" / call-to-action event
    // whenever the url changes on the bar
    urlBar.connect('activate', function () {
        var href = url(urlBar.get_text());
        urlBar.set_text(href);
        webView.load_uri(href);
    });
    // make the container scrollable
    scrollWindow.add(webView);
    // pack horizontally toolbar and url bar
    hbox.pack_start(toolbar, false, false, 0);
    hbox.pack_start(urlBar, true, true, 8);
    // pack vertically top bar (hbox) and scrollable window
    vbox.pack_start(hbox, false, true, 0);
    vbox.pack_start(scrollWindow, true, true, 0);
    // configure main window
    window.set_default_size(1024, 720);
    window.set_resizable(true);
    window.connect('show', function () {
        // bring it on top in OSX
        window.set_keep_above(true);
        Gtk.main();
    });
    window.connect('destroy', function () { return Gtk.main_quit(); });
    window.connect('delete_event', function () { return false; });
    // add vertical ui and show them all
    window.add(vbox);
    window.show_all();
    // little helper
    // if link doesn't have a protocol, prefixes it via http://
    function url(href) {
        return /^([a-z]{2,}):/.test(href) ? href : ('http://' + href);
    }
});
