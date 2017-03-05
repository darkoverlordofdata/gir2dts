# gir2dts #

Create Gtk applications with Gjs/TypeScript

Provides normalized access to amd, commonjs and gjs imports

## install
```
cd myproject
npm install --save-dev gir2dts
```

## dependancies
The following modules must be installed, this is needed for minimal Gtk support:

    imports.lang
    imports.gi.Gio
    imports.gi.Atk
    imports.gi.Gdk
    imports.gi.Gtk
    imports.gi.GLib
    imports.gi.Pango
    imports.gi.GObject

Additional modules may be declared per application; currently two additional module have been converted:
```
define.imports({
    Gda: imports.gi.Gda,
    WebKit: imports.gi.WebKit
})
```

## rules
Conversion is iterative

* numeric typedefs are replaced with 'number'
* constructirs are replaced with default one optional hash table parameter
* only functions, enums, and classes
* anything else, not defined in this group of modules, gets replaced with 'any'
* as dicovered:
    * fix with add/patch entries in gir2dts.json



## differences

The original javascript uses
```
this.text.buffer.text = text
```

In typescript, I follow the published gtk api:
```
this.text.get_buffer().set_text(text, text.length)
```

Where does gjs get .buffer from? Gir doesn't define any fields. 
Vapi's can, but the vapi for Gtk doesn't define this field.
Apparently, you have to look at the source code or a web page to know it's there. 


## example

example tsconfig usage: (from https://github.com/darkoverlordofdata/bosco-player)
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
        "node_modules/gir2dts/src/gjs.d.ts",            // Gjs
        "node_modules/gir2dts/src/gobject-2.0.d.ts",    // GObject
        "node_modules/gir2dts/src/atk-1.0.d.ts",        // Atk
        "node_modules/gir2dts/src/glib-2.0.d.ts",       // GLib
        "node_modules/gir2dts/src/gio-2.0.d.ts",        // Gio
        "node_modules/gir2dts/src/gdk-3.0.d.ts",        // Gdk
        "node_modules/gir2dts/src/gtk-3.0.d.ts",        // Gtk
        "node_modules/gir2dts/src/pango-1.0.d.ts",      // Pango
        "node_modules/gir2dts/src/gjs.js",              // module loader/helper
        
        "src/common.d.ts",                  // nodejs: xml2js
        "src/common.js",                    // browserify bundle
        "src/main.ts"                       // main program entry point
        
    ]
}
```

### example

usage combining different sources

```
import * as Gtk from 'Gtk'                      // From Gir
import {parseString} from 'xml2js'              // From nodejs via browserify
import {NotebookTab} from 'tabs/NotebookTab'    // From local project folder
/**
 *
 * GResource data view
 *
 */
export class ResourceTab extends NotebookTab {
...    
```

### todo?
file:///usr/share/gir-1.0/Gee-0.8.gir
file:///usr/share/gir-1.0/GdkPixbuf-2.0.gir
file:///usr/share/gir-1.0/GtkClutter-1.0.gir
file:///usr/share/gir-1.0/Soup-2.4.gir

             "args": ["/usr/bin/time browserify --standalone bundle src/lib.js -o src/common.js && /usr/bin/time tsc"]
