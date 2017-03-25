    export class File extends GObject.Object {
        query_exists(obj:any): boolean
        load_contents(obj:any): any
        make_directory(obj:any): boolean
        delete(obj:any): boolean
        create(flags:any, obj: any): any
        get_basename(): string
        get_path(): string
        get_parent():File
        static new_for_path(path: string): File
    }

