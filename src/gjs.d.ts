/**
 * gjs.d.ts
 * 
 * Gjs basic declarations for typescript
 */
declare const ARGV: string[]
declare function print(...args: any[])
declare function require(name: string): any
declare function _(str:string): string
declare namespace imports {
    var gi: any
}
declare module "Lang" {
    import * as GObject from "GObject"
    export function Class(properties: any)
}
declare namespace define {
    export var version: string
    export function path(path: string)
    export function plugin(name: string, context: IPlugin)
    export function imports(libraries: any)
}
declare interface IPlugin {
    attach(any)
    detach()
}
declare interface String  {
    format(...args: any[]): string
}

