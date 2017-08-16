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
```json
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

## Usage for compatible Libraries

This assumes you already have a single top level file `src/main.ts` that (re-)exports all public declarations.
Then, create a JavaScript file `exports.js` that exports the desired components by declaring them as top level constants (the name is arbitrary).
Example:

```typescript
// src/main.ts

export const foo = 42;
```

```javascript
// exports.js

const __LIBRARY__ = {}
define("__LIBRARY__", ["require", "exports", "src/main"], function (require, exports, main_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!__LIBRARY__.hasOwnProperty(p)) __LIBRARY__[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(main_1);
});

const foo = __LIBRARY__.foo;
// potentially mode gnome js "exports"
```

Finally, add this javascript file as last (!) entry to your tsconfig:

```json
{
    // ...
    "files": [
        // ...
        "src/main.ts",  // main library entry point
        "exports.js"    // exports for compatibility with non-typescript gjs apps
    ]
}
```

The compilated file can then be used for example in a gnome shell plugin by using

```javascript
const Me = imports.misc.extensionUtils.getCurrentExtension();
const foo = Me.imports.myExportedLibraryFile.foo; // => 42
```

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
```javascript
this.text.buffer.text = text
```

In typescript, you may either:
```typescript
this.text.get_buffer().set_text(text, text.length)
this.text['buffer'] = text
```


## why?

Why? I couldn't have said it better:

https://www.webreflection.co.uk/blog/2015/11/30/how-to-export-javascript-modules#the-curious-case-of-gjs-modules

