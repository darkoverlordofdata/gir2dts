/**
 * gobject.d.ts
 * 
 * Gjs 2.0 declarations for typescript
 */
declare module "GObject" {
    var TYPE_STRING: number
    type Handler = (...args) => void
    export class Object {
        constructor()
        connect(signal: string, handler: Handler)
    }
    export class InitiallyUnowned extends Object {
    }
}
