# gir2dts #

Generated *.d.ts files for using Gir with Typescript 

## install
```
cd myproject
npm install --save-dev gir2dts
```
then include in tsconfig.json

## example

example tsconfig: (from https://github.com/darkoverlordofdata/bosco-player)
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

also, see https://github.com/darkoverlordofdata/ouroboros, uses WebKit and Soup

## rules
Conversion is iterative

* numeric typedefs are replaced with 'number'
* constructors are replaced with default having one optional hash table parameter
* only constants, functions, enums, and classes
* anything else, not defined in this group of modules, gets replaced with 'any'
* as dicovered:
    * fix with add/patch entries in gir2dts.json



## differences

The original javascript uses
```
this.text.buffer.text = text
```

In typescript, you may either:
```
this.text.get_buffer().set_text(text, text.length)
this.text['buffer'] = text
```


