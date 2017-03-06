import * as Gtk from 'Gtk'
import * as Gio from 'Gio'
import * as Soup from 'Soup'
import * as GLib from 'GLib'
import {mimetypes} from 'mimetypes'

/**
 * Static Plugin
 * 
 * serve static content
 */
export const Static = { /** plugin - serve static content */
    register(server, options) {
        const cache = {}

        server.decorate('reply', 'file', function(path) {
            const key = `${options.base}/${path}`
            if (cache[key]) {
                let data = cache[key] 
                this.request.msg.set_response(data.mimetype, Soup.MemoryUse.COPY, data.data, data.length)
                this.request.msg.set_status(200)
                return
            }
            const file = Gio.file_new_for_path(key)
            if (file.query_exists(null)) {
                let [success, data, length] = file.load_contents(null)
                if (success) {

                    let mimetype = "text/html"
                    let i = this.request.path.lastIndexOf('.')
                    let ext = this.request.path.substr(i+1)
                    if (mimetypes[ext])
                        mimetype = typeof mimetypes[ext] === 'string' ? mimetypes[ext] : mimetypes[ext][0]

                    cache[key] = {mimetype: mimetype, data:data, length: length}

                    this.request.msg.set_response(mimetype, Soup.MemoryUse.COPY, data, length)
                    this.request.msg.set_status(200)
                }
            }
        })
    }
}
/**
 * Registration data
 */
Static.register['attributes'] = {
    name: 'Static',
    version: '0.0.1'
}

