# gir2dts #

Create Gtk applications written with TypeScript

Provides normalized access to amd, commonjs and gjs imports

wip - not yet fully automated. The current payload had to be manually scrubbed before release.


example tsconfig usage:
```
{
    "compilerOptions": {
        "target": "es5",                    // es5 compatability for gjs
        "module": "amd",                    // pack using amd module format
        "rootDir": "src",                   // module names based from src
        "outFile": "bin/bosco-player",      // the target executable
        "allowJs": true 
    },
    "files": [
        "node_modules/gir2dts/gjs.d.ts",     // Gjs
        "node_modules/gir2dts/gobject.d.ts", // GObject
        "node_modules/gir2dts/atk.d.ts",     // Atk
        "node_modules/gir2dts/glib.d.ts",    // GLib
        "node_modules/gir2dts/gio.d.ts",     // Gio
        "node_modules/gir2dts/gdk.d.ts",     // Gdk
        "node_modules/gir2dts/gtk.d.ts",     // Gtk
        "node_modules/gir2dts/pango.d.ts",   // Pango
        "node_modules/gir2dts/gjs.js",       // module loader/helper
        
        "src/common.d.ts",                  // nodejs: xml2js
        "src/common.js",                    // browserify bundle
        "src/main.ts"                       // main program entry point
        
    ]
}
```