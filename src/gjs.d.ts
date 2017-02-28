/**
 * gjs.d.ts
 * 
 * Gjs basic declarations for typescript
 */

/**
 * Command line args
 */
declare const ARGV: string[]
/**
 * print to console
 */
declare function print(...args: any[])
/**
 * get module as value
 */
declare function require(name: string): any
/**
 * localization - imports.gettext.gettext
 */
declare function _(str:string): string

/** 
 * native imports
 */
declare namespace imports {
    var cairo: any
    var dbus: any
    var format: any
    var gettext: any
    var gi: any
    var jsUnit: any
    var lang: any
    var promise: any
    var misc: any
    var signals: any
    var ui: any
}

/**
 * define module
 * 
 * @param name of module
 * @param deps list of dependencies
 * @param callback definition
 * 
 */
declare namespace define {
    export var version: string
    export function path(path: string)
    export function plugin(name: string, context: IPlugin)
    export function imports(libraries: any)
}

/**
 * extend String with imports.format.format
 */
declare interface String  {
    format(...args: any[]): string
}

/**
 * Simple Plugin architecture
 */
declare interface IPlugin {
    attach(any)
    detach()
}

/**
 * Gnome class polyfills
 */
declare module "Lang" {
    export function Class(properties: any)
}
