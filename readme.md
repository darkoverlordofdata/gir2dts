# gir2dts #

Create Gtk applications with Gjs/TypeScript

Provides normalized access to amd, commonjs and gjs imports

wip - not yet fully automated. The current payload had to be manually scrubbed before release.


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
        "node_modules/gir2dts/src/gjs.d.ts",     // Gjs
        "node_modules/gir2dts/src/gobject.d.ts", // GObject
        "node_modules/gir2dts/src/atk.d.ts",     // Atk
        "node_modules/gir2dts/src/glib.d.ts",    // GLib
        "node_modules/gir2dts/src/gio.d.ts",     // Gio
        "node_modules/gir2dts/src/gdk.d.ts",     // Gdk
        "node_modules/gir2dts/src/gtk.d.ts",     // Gtk
        "node_modules/gir2dts/src/pango.d.ts",   // Pango
        "node_modules/gir2dts/src/gjs.js",       // module loader/helper
        
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