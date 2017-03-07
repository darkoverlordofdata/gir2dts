import * as Gtk from 'Gtk'
import * as Gio from 'Gio'
import * as Soup from 'Soup'
import * as GLib from 'GLib'
import {mimetypes} from 'mimetypes'

/**
 * Views Plugin
 * 
 * serve templated content
 */
export const View = { /** plugin - serve templated content */
    register(server, options) {

        server.decorate('server', 'views', function(options:any) {
            server.root = options.path
            for (let key in options.engines) {
                this.engines[key] = options.engines[key]
            }
        })

        server.decorate('reply', 'view', function(view:string, locals:any={}) {
            const file = Gio.file_new_for_path(`${server.root}/${view}`)
            if (file.query_exists(null)) {
                let [success, text, length] = file.load_contents(null)
                if (success) {
                    const ext = view.split('.').pop()
                    const engine = server.engines[ext]
                    const page = engine ? engine(String(text), locals) : String(text)
                    this.request.msg.set_response("text/html", Soup.MemoryUse.COPY, page, page.length)
                    this.request.msg.set_status(200)
                }
            }
        })
    }
}
/**
 * Registration data
 */
View.register['attributes'] = {
    name: 'View',
    version: '0.0.1'
}

