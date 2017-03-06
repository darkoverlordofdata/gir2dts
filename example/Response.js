import * as Soup from 'Soup'

export function createReply(request) {
    return new Response(request)
}

export function Response(request) {
    function instance(text) {
        request.msg.set_response("text/html", Soup.MemoryUse.COPY, text, text.length)
        request.msg.set_status(200)
        return instance
    }
    instance.__proto__ = Response.prototype
    instance.request = request
    return instance
}  

Response.prototype = Object.create(Function.prototype)

