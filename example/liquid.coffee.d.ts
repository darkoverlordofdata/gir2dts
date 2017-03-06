declare module 'Liquid' {

    export const VERSION: string

    export function setPath(path: string)
    export function compile(template: string, options: any)

    export class Template {
        static fileSystem: any
        static tags: any
        static registerTag(name: string, klass: any)
        static registerFilter(mod: any)
        static parse(source: string): Template
        static tokenize(source: string): string[]
        constructor()
        parse(source: string): Template
        render(...args: any[]): string
        renderWithErrors(): string
    }
}

