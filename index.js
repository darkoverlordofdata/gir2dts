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
    Gtk.init(null);
    var win = new Gtk.Window({
        title: 'jsGtk+ browser',
        type: Gtk.WindowType.TOPLEVEL,
        window_position: Gtk.WindowPosition.CENTER
    });
    var webView = new WebKit.WebView();
    win.connect('delete-event', Gtk.main_quit);
    win.show_all();
    Gtk.main();
});
