/**
 *  Copyright 2017 darkoverlordofdata
 * 
 * Simple module loader/gjs helper
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
        Gdk:     { id: 'Gdk',     exports: imports.gi.Gdk },
        Gtk:     { id: 'Gtk',     exports: imports.gi.Gtk },
        GLib:    { id: 'GLib',    exports: imports.gi.GLib },
        Pango:   { id: 'Pango',   exports: imports.gi.Pango },
        GObject: { id: 'GObject', exports: imports.gi.GObject }
    }))},
    console: {value: {
        log()   { print.apply(null, arguments) },
        warn()  { print.apply(null, arguments) },
        error() { print.apply(null, arguments) },
        info()  { print.apply(null, arguments) }
    }},
    _: {value: imports.gettext.gettext }
})
Object.defineProperties(define, {
    amd:     { value: true },
    version: { value: '0.1.0' },
    path:    { value: (path) => imports.searchPath.unshift(path) },
    imports: { value: (libs) => define([], ()=> libs)}
})
Object.defineProperties(String.prototype, {
    printf: { value: imports.format.format } 
})
