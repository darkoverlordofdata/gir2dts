/**
 *  Copyright 2017 darkoverlordofdata
 * 
 * Module loader/gjs helper
 * normalized access to amd, commonjs and gjs imports
 * 
 */
Object.defineProperties(window, {
    define: { value: (function (modules) {
        return (name, deps, callback) => {
            if (typeof name !== 'string') { /* browserify bundle */
                const bundle = deps()
                for (name in bundle) 
                    modules[name] = { id: name, exports: bundle[name] }

            } else { /* amd module */
                modules[name] = { id: name, exports: {} }
                const args = [(name) => modules[name] ? modules[name].exports : imports[name], 
                            modules[name].exports]
                for (let i = 2; i < deps.length; i++)
                    args.push(modules[deps[i]].exports)
                callback.apply(modules[name].exports, args)
            }
        }
    }({          /* builtin modules */
        Lang:    { id: 'Lang',    exports: imports.lang },
        Gio:     { id: 'Gio',     exports: imports.gi.Gio },
        Atk:     { id: 'Atk',     exports: imports.gi.Atk },
        Gda:     { id: 'Gda',     exports: imports.gi.Gda },
        Gdk:     { id: 'Gdk',     exports: imports.gi.Gdk },
        Gtk:     { id: 'Gtk',     exports: imports.gi.Gtk },
        GLib:    { id: 'GLib',    exports: imports.gi.GLib },
        Pango:   { id: 'Pango',   exports: imports.gi.Pango },
        WebKit:  { id: 'WebKit',  exports: imports.gi.WebKit },
        GObject: { id: 'GObject', exports: imports.gi.GObject }
    }))},
    _: {value: imports.gettext.gettext }
})
Object.defineProperties(define, {
    amd:     { value: true },
    version: { value: '0.0.1' },
    path:    { value: (path) => imports.searchPath.unshift(path) },
    plugin:  { value: (name, context) => imports[name].attach(context) }
})
Object.defineProperties(String.prototype, {
    format: { value: imports.format.format } 
})

