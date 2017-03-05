/**
 * Soup.d.ts
 *
 */
declare module 'Soup' {
    import * as GObject from "GObject"
    import * as Gio from "Gio"
    import * as GLib from "GLib"
    export const ADDRESS_ANY_PORT:number
    export const ADDRESS_FAMILY:string
    export const ADDRESS_NAME:string
    export const ADDRESS_PHYSICAL:string
    export const ADDRESS_PORT:string
    export const ADDRESS_PROTOCOL:string
    export const ADDRESS_SOCKADDR:string
    export const AUTH_DOMAIN_ADD_PATH:string
    export const AUTH_DOMAIN_BASIC_AUTH_CALLBACK:string
    export const AUTH_DOMAIN_BASIC_AUTH_DATA:string
    export const AUTH_DOMAIN_BASIC_H:number
    export const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK:string
    export const AUTH_DOMAIN_DIGEST_AUTH_DATA:string
    export const AUTH_DOMAIN_DIGEST_H:number
    export const AUTH_DOMAIN_FILTER:string
    export const AUTH_DOMAIN_FILTER_DATA:string
    export const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK:string
    export const AUTH_DOMAIN_GENERIC_AUTH_DATA:string
    export const AUTH_DOMAIN_H:number
    export const AUTH_DOMAIN_PROXY:string
    export const AUTH_DOMAIN_REALM:string
    export const AUTH_DOMAIN_REMOVE_PATH:string
    export const AUTH_H:number
    export const AUTH_HOST:string
    export const AUTH_IS_AUTHENTICATED:string
    export const AUTH_IS_FOR_PROXY:string
    export const AUTH_MANAGER_H:number
    export const AUTH_REALM:string
    export const AUTH_SCHEME_NAME:string
    export const CACHE_H:number
    export const CHAR_HTTP_CTL:number
    export const CHAR_HTTP_SEPARATOR:number
    export const CHAR_URI_GEN_DELIMS:number
    export const CHAR_URI_PERCENT_ENCODED:number
    export const CHAR_URI_SUB_DELIMS:number
    export const CONTENT_DECODER_H:number
    export const CONTENT_SNIFFER_H:number
    export const COOKIE_H:number
    export const COOKIE_JAR_ACCEPT_POLICY:string
    export const COOKIE_JAR_DB_FILENAME:string
    export const COOKIE_JAR_DB_H:number
    export const COOKIE_JAR_H:number
    export const COOKIE_JAR_READ_ONLY:string
    export const COOKIE_JAR_TEXT_FILENAME:string
    export const COOKIE_JAR_TEXT_H:number
    export const COOKIE_MAX_AGE_ONE_DAY:number
    export const COOKIE_MAX_AGE_ONE_HOUR:number
    export const COOKIE_MAX_AGE_ONE_WEEK:number
    export const COOKIE_MAX_AGE_ONE_YEAR:number
    export const DATE_H:number
    export const FORM_H:number
    export const FORM_MIME_TYPE_MULTIPART:string
    export const FORM_MIME_TYPE_URLENCODED:string
    export const HEADERS_H:number
    export const LOGGER_H:number
    export const MESSAGE_BODY_H:number
    export const MESSAGE_FIRST_PARTY:string
    export const MESSAGE_FLAGS:string
    export const MESSAGE_H:number
    export const MESSAGE_HEADERS_H:number
    export const MESSAGE_HTTP_VERSION:string
    export const MESSAGE_METHOD:string
    export const MESSAGE_PRIORITY:string
    export const MESSAGE_REASON_PHRASE:string
    export const MESSAGE_REQUEST_BODY:string
    export const MESSAGE_REQUEST_BODY_DATA:string
    export const MESSAGE_REQUEST_HEADERS:string
    export const MESSAGE_RESPONSE_BODY:string
    export const MESSAGE_RESPONSE_BODY_DATA:string
    export const MESSAGE_RESPONSE_HEADERS:string
    export const MESSAGE_SERVER_SIDE:string
    export const MESSAGE_STATUS_CODE:string
    export const MESSAGE_TLS_CERTIFICATE:string
    export const MESSAGE_TLS_ERRORS:string
    export const MESSAGE_URI:string
    export const METHOD_H:number
    export const MISC_H:number
    export const MULTIPART_H:number
    export const MULTIPART_INPUT_STREAM_H:number
    export const PASSWORD_MANAGER_H:number
    export const PROXY_RESOLVER_DEFAULT_H:number
    export const PROXY_URI_RESOLVER_H:number
    export const REQUESTER_H:number
    export const REQUEST_DATA_H:number
    export const REQUEST_FILE_H:number
    export const REQUEST_H:number
    export const REQUEST_HTTP_H:number
    export const REQUEST_SESSION:string
    export const REQUEST_URI:string
    export const SERVER_ASYNC_CONTEXT:string
    export const SERVER_H:number
    export const SERVER_HTTPS_ALIASES:string
    export const SERVER_HTTP_ALIASES:string
    export const SERVER_INTERFACE:string
    export const SERVER_PORT:string
    export const SERVER_RAW_PATHS:string
    export const SERVER_SERVER_HEADER:string
    export const SERVER_SSL_CERT_FILE:string
    export const SERVER_SSL_KEY_FILE:string
    export const SERVER_TLS_CERTIFICATE:string
    export const SESSION_ACCEPT_LANGUAGE:string
    export const SESSION_ACCEPT_LANGUAGE_AUTO:string
    export const SESSION_ADD_FEATURE:string
    export const SESSION_ADD_FEATURE_BY_TYPE:string
    export const SESSION_ASYNC_CONTEXT:string
    export const SESSION_ASYNC_H:number
    export const SESSION_FEATURE_H:number
    export const SESSION_H:number
    export const SESSION_HTTPS_ALIASES:string
    export const SESSION_HTTP_ALIASES:string
    export const SESSION_IDLE_TIMEOUT:string
    export const SESSION_LOCAL_ADDRESS:string
    export const SESSION_MAX_CONNS:string
    export const SESSION_MAX_CONNS_PER_HOST:string
    export const SESSION_PROXY_RESOLVER:string
    export const SESSION_PROXY_URI:string
    export const SESSION_REMOVE_FEATURE_BY_TYPE:string
    export const SESSION_SSL_CA_FILE:string
    export const SESSION_SSL_STRICT:string
    export const SESSION_SSL_USE_SYSTEM_CA_FILE:string
    export const SESSION_SYNC_H:number
    export const SESSION_TIMEOUT:string
    export const SESSION_TLS_DATABASE:string
    export const SESSION_TLS_INTERACTION:string
    export const SESSION_USER_AGENT:string
    export const SESSION_USE_NTLM:string
    export const SESSION_USE_THREAD_CONTEXT:string
    export const SOCKET_ASYNC_CONTEXT:string
    export const SOCKET_FLAG_NONBLOCKING:string
    export const SOCKET_H:number
    export const SOCKET_IS_SERVER:string
    export const SOCKET_LOCAL_ADDRESS:string
    export const SOCKET_REMOTE_ADDRESS:string
    export const SOCKET_SSL_CREDENTIALS:string
    export const SOCKET_SSL_FALLBACK:string
    export const SOCKET_SSL_STRICT:string
    export const SOCKET_TIMEOUT:string
    export const SOCKET_TLS_CERTIFICATE:string
    export const SOCKET_TLS_ERRORS:string
    export const SOCKET_TRUSTED_CERTIFICATE:string
    export const SOCKET_USE_THREAD_CONTEXT:string
    export const STATUS_H:number
    export const TYPES_H:number
    export const URI_H:number
    export const VALUE_UTILS_H:number
    export const XMLRPC_H:number
    export const XMLRPC_OLD_H:number
    export function add_completion(async_context: any, function_: any, data: any):any
    export function add_idle(async_context: any, function_: any, data: any):any
    export function add_io_watch(async_context: any, chan: any, condition: GLib.IOCondition, function_: any, data: any):any
    export function add_timeout(async_context: any, interval: number, function_: any, data: any):any
    export function cookie_parse(header: string, origin: any):any
    export function cookies_free(cookies: any):void
    export function cookies_from_request(msg: Message):any
    export function cookies_from_response(msg: Message):any
    export function cookies_to_cookie_header(cookies: any):string
    export function cookies_to_request(cookies: any, msg: Message):void
    export function cookies_to_response(cookies: any, msg: Message):void
    export function form_decode(encoded_form: string):any
    export function form_decode_multipart(msg: Message, file_control_name: string, filename: string, content_type: string, file: any):any
    export function form_encode(first_field: string, ...args: any[]):string
    export function form_encode_datalist(form_data_set: any):string
    export function form_encode_hash(form_data_set: any):string
    export function form_encode_valist(first_field: string, args: any):string
    export function form_request_new(method: string, uri: string, first_field: string, ...args: any[]):Message
    export function form_request_new_from_datalist(method: string, uri: string, form_data_set: any):Message
    export function form_request_new_from_hash(method: string, uri: string, form_data_set: any):Message
    export function form_request_new_from_multipart(uri: string, multipart: any):Message
    export function header_contains(header: string, token: string):boolean
    export function header_free_list(list: any):void
    export function header_free_param_list(param_list: any):void
    export function header_g_string_append_param(string: any, name: string, value: string):void
    export function header_g_string_append_param_quoted(string: any, name: string, value: string):void
    export function header_parse_list(header: string):any
    export function header_parse_param_list(header: string):any
    export function header_parse_quality_list(header: string, unacceptable: any):any
    export function header_parse_semi_param_list(header: string):any
    export function headers_parse(str: string, len: number, dest: any):boolean
    export function headers_parse_request(str: string, len: number, req_headers: any, req_method: string, req_path: string, ver: HTTPVersion):number
    export function headers_parse_response(str: string, len: number, headers: any, ver: HTTPVersion, status_code: number, reason_phrase: string):boolean
    export function headers_parse_status_line(status_line: string, ver: HTTPVersion, status_code: number, reason_phrase: string):boolean
    export function http_error_quark():any
    export function message_headers_iter_init(iter: any, hdrs: any):void
    export function request_error_quark():any
    export function requester_error_quark():any
    export function status_get_phrase(status_code: number):string
    export function status_proxify(status_code: number):number
    export function str_case_equal(v1: any, v2: any):boolean
    export function str_case_hash(key: any):number
    export function tld_domain_is_public_suffix(domain: string):boolean
    export function tld_error_quark():any
    export function tld_get_base_domain(hostname: string):string
    export function uri_decode(part: string):string
    export function uri_encode(part: string, escape_extra: string):string
    export function uri_normalize(part: string, unescape_extra: string):string
    export function value_array_append(array: any, type: any, ...args: any[]):void
    export function value_array_append_vals(array: any, first_type: any, ...args: any[]):void
    export function value_array_from_args(args: any):any
    export function value_array_get_nth(array: any, index_: number, type: any, ...args: any[]):boolean
    export function value_array_insert(array: any, index_: number, type: any, ...args: any[]):void
    export function value_array_new():any
    export function value_array_new_with_vals(first_type: any, ...args: any[]):any
    export function value_array_to_args(array: any, args: any):boolean
    export function value_hash_insert(hash: any, key: string, type: any, ...args: any[]):void
    export function value_hash_insert_vals(hash: any, first_key: string, ...args: any[]):void
    export function value_hash_insert_value(hash: any, key: string, value: any):void
    export function value_hash_lookup(hash: any, key: string, type: any, ...args: any[]):boolean
    export function value_hash_lookup_vals(hash: any, first_key: string, ...args: any[]):boolean
    export function value_hash_new():any
    export function value_hash_new_with_vals(first_key: string, ...args: any[]):any
    export function websocket_client_prepare_handshake(msg: Message, origin: string, protocols: string[]):void
    export function websocket_client_verify_handshake(msg: Message):boolean
    export function websocket_error_get_quark():any
    export function websocket_server_check_handshake(msg: Message, origin: string, protocols: string[]):boolean
    export function websocket_server_process_handshake(msg: Message, expected_origin: string, protocols: string[]):boolean
    export function xmlrpc_build_fault(fault_code: number, fault_format: string, ...args: any[]):string
    export function xmlrpc_build_method_call(method_name: string, params: any[], n_params: number):string
    export function xmlrpc_build_method_response(value: any):string
    export function xmlrpc_build_request(method_name: string, params: any):string
    export function xmlrpc_build_response(value: any):string
    export function xmlrpc_error_quark():any
    export function xmlrpc_extract_method_call(method_call: string, length: number, method_name: string, ...args: any[]):boolean
    export function xmlrpc_extract_method_response(method_response: string, length: number, error: any, type: any, ...args: any[]):boolean
    export function xmlrpc_fault_quark():any
    export function xmlrpc_message_new(uri: string, method_name: string, params: any):Message
    export function xmlrpc_message_set_fault(msg: Message, fault_code: number, fault_format: string, ...args: any[]):void
    export function xmlrpc_message_set_response(msg: Message, value: any):boolean
    export function xmlrpc_parse_method_call(method_call: string, length: number, method_name: string, params: any):boolean
    export function xmlrpc_parse_method_response(method_response: string, length: number, value: any):boolean
    export function xmlrpc_parse_request(method_call: string, length: number, params: any):string
    export function xmlrpc_parse_response(method_response: string, length: number, signature: string):any
    export function xmlrpc_request_new(uri: string, method_name: string, ...args: any[]):Message
    export function xmlrpc_set_fault(msg: Message, fault_code: number, fault_format: string, ...args: any[]):void
    export function xmlrpc_set_response(msg: Message, type: any, ...args: any[]):void
    export function xmlrpc_variant_get_datetime(variant: any):any
    export function xmlrpc_variant_new_datetime(date: any):any
    export enum AddressFamily {
        INVALID,
        IPV4,
        IPV6,
    }
    export enum CacheResponse {
        FRESH,
        NEEDS_VALIDATION,
        STALE,
    }
    export enum CacheType {
        SINGLE_USER,
        SHARED,
    }
    export enum ConnectionState {
        NEW,
        CONNECTING,
        IDLE,
        IN_USE,
        REMOTE_DISCONNECTED,
        DISCONNECTED,
    }
    export enum CookieJarAcceptPolicy {
        ALWAYS,
        NEVER,
        NO_THIRD_PARTY,
    }
    export enum DateFormat {
        HTTP,
        COOKIE,
        RFC2822,
        ISO8601_COMPACT,
        ISO8601_FULL,
        ISO8601,
        ISO8601_XMLRPC,
    }
    export enum Encoding {
        UNRECOGNIZED,
        NONE,
        CONTENT_LENGTH,
        EOF,
        CHUNKED,
        BYTERANGES,
    }
    export enum HTTPVersion {
        HTTP_1_0,
        HTTP_1_1,
    }
    export enum KnownStatusCode {
        NONE,
        CANCELLED,
        CANT_RESOLVE,
        CANT_RESOLVE_PROXY,
        CANT_CONNECT,
        CANT_CONNECT_PROXY,
        SSL_FAILED,
        IO_ERROR,
        MALFORMED,
        TRY_AGAIN,
        TOO_MANY_REDIRECTS,
        TLS_FAILED,
        CONTINUE,
        SWITCHING_PROTOCOLS,
        PROCESSING,
        OK,
        CREATED,
        ACCEPTED,
        NON_AUTHORITATIVE,
        NO_CONTENT,
        RESET_CONTENT,
        PARTIAL_CONTENT,
        MULTI_STATUS,
        MULTIPLE_CHOICES,
        MOVED_PERMANENTLY,
        FOUND,
        MOVED_TEMPORARILY,
        SEE_OTHER,
        NOT_MODIFIED,
        USE_PROXY,
        NOT_APPEARING_IN_THIS_PROTOCOL,
        TEMPORARY_REDIRECT,
        BAD_REQUEST,
        UNAUTHORIZED,
        PAYMENT_REQUIRED,
        FORBIDDEN,
        NOT_FOUND,
        METHOD_NOT_ALLOWED,
        NOT_ACCEPTABLE,
        PROXY_AUTHENTICATION_REQUIRED,
        PROXY_UNAUTHORIZED,
        REQUEST_TIMEOUT,
        CONFLICT,
        GONE,
        LENGTH_REQUIRED,
        PRECONDITION_FAILED,
        REQUEST_ENTITY_TOO_LARGE,
        REQUEST_URI_TOO_LONG,
        UNSUPPORTED_MEDIA_TYPE,
        REQUESTED_RANGE_NOT_SATISFIABLE,
        INVALID_RANGE,
        EXPECTATION_FAILED,
        UNPROCESSABLE_ENTITY,
        LOCKED,
        FAILED_DEPENDENCY,
        INTERNAL_SERVER_ERROR,
        NOT_IMPLEMENTED,
        BAD_GATEWAY,
        SERVICE_UNAVAILABLE,
        GATEWAY_TIMEOUT,
        HTTP_VERSION_NOT_SUPPORTED,
        INSUFFICIENT_STORAGE,
        NOT_EXTENDED,
    }
    export enum LoggerLogLevel {
        NONE,
        MINIMAL,
        HEADERS,
        BODY,
    }
    export enum MemoryUse {
        STATIC,
        TAKE,
        COPY,
        TEMPORARY,
    }
    export enum MessageHeadersType {
        REQUEST,
        RESPONSE,
        MULTIPART,
    }
    export enum MessagePriority {
        VERY_LOW,
        LOW,
        NORMAL,
        HIGH,
        VERY_HIGH,
    }
    export enum RequestError {
        BAD_URI,
        UNSUPPORTED_URI_SCHEME,
        PARSING,
        ENCODING,
    }
    export enum RequesterError {
        BAD_URI,
        UNSUPPORTED_URI_SCHEME,
    }
    export enum SocketIOStatus {
        OK,
        WOULD_BLOCK,
        EOF,
        ERROR,
    }
    export enum Status {
        NONE,
        CANCELLED,
        CANT_RESOLVE,
        CANT_RESOLVE_PROXY,
        CANT_CONNECT,
        CANT_CONNECT_PROXY,
        SSL_FAILED,
        IO_ERROR,
        MALFORMED,
        TRY_AGAIN,
        TOO_MANY_REDIRECTS,
        TLS_FAILED,
        CONTINUE,
        SWITCHING_PROTOCOLS,
        PROCESSING,
        OK,
        CREATED,
        ACCEPTED,
        NON_AUTHORITATIVE,
        NO_CONTENT,
        RESET_CONTENT,
        PARTIAL_CONTENT,
        MULTI_STATUS,
        MULTIPLE_CHOICES,
        MOVED_PERMANENTLY,
        FOUND,
        MOVED_TEMPORARILY,
        SEE_OTHER,
        NOT_MODIFIED,
        USE_PROXY,
        NOT_APPEARING_IN_THIS_PROTOCOL,
        TEMPORARY_REDIRECT,
        BAD_REQUEST,
        UNAUTHORIZED,
        PAYMENT_REQUIRED,
        FORBIDDEN,
        NOT_FOUND,
        METHOD_NOT_ALLOWED,
        NOT_ACCEPTABLE,
        PROXY_AUTHENTICATION_REQUIRED,
        PROXY_UNAUTHORIZED,
        REQUEST_TIMEOUT,
        CONFLICT,
        GONE,
        LENGTH_REQUIRED,
        PRECONDITION_FAILED,
        REQUEST_ENTITY_TOO_LARGE,
        REQUEST_URI_TOO_LONG,
        UNSUPPORTED_MEDIA_TYPE,
        REQUESTED_RANGE_NOT_SATISFIABLE,
        INVALID_RANGE,
        EXPECTATION_FAILED,
        UNPROCESSABLE_ENTITY,
        LOCKED,
        FAILED_DEPENDENCY,
        INTERNAL_SERVER_ERROR,
        NOT_IMPLEMENTED,
        BAD_GATEWAY,
        SERVICE_UNAVAILABLE,
        GATEWAY_TIMEOUT,
        HTTP_VERSION_NOT_SUPPORTED,
        INSUFFICIENT_STORAGE,
        NOT_EXTENDED,
    }
    export enum TLDError {
        INVALID_HOSTNAME,
        IS_IP_ADDRESS,
        NOT_ENOUGH_DOMAINS,
        NO_BASE_DOMAIN,
    }
    export enum WebsocketCloseCode {
        NORMAL,
        GOING_AWAY,
        PROTOCOL_ERROR,
        UNSUPPORTED_DATA,
        NO_STATUS,
        ABNORMAL,
        BAD_DATA,
        POLICY_VIOLATION,
        TOO_BIG,
        NO_EXTENSION,
        SERVER_ERROR,
        TLS_HANDSHAKE,
    }
    export enum WebsocketConnectionType {
        UNKNOWN,
        CLIENT,
        SERVER,
    }
    export enum WebsocketDataType {
        TEXT,
        BINARY,
    }
    export enum WebsocketError {
        FAILED,
        NOT_WEBSOCKET,
        BAD_HANDSHAKE,
        BAD_ORIGIN,
    }
    export enum WebsocketState {
        OPEN,
        CLOSING,
        CLOSED,
    }
    export enum XMLRPCError {
        ARGUMENTS,
        RETVAL,
    }
    export enum XMLRPCFault {
        PARSE_ERROR_NOT_WELL_FORMED,
        PARSE_ERROR_UNSUPPORTED_ENCODING,
        PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING,
        SERVER_ERROR_INVALID_XML_RPC,
        SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND,
        SERVER_ERROR_INVALID_METHOD_PARAMETERS,
        SERVER_ERROR_INTERNAL_XML_RPC_ERROR,
        APPLICATION_ERROR,
        SYSTEM_ERROR,
        TRANSPORT_ERROR,
    }
    export enum Cacheability{
        CACHEABLE,
        UNCACHEABLE,
        INVALIDATES,
        VALIDATES,
    }
    export enum Expectation{
        UNRECOGNIZED,
        CONTINUE,
    }
    export enum MessageFlags{
        NO_REDIRECT,
        CAN_REBUILD,
        OVERWRITE_CHUNKS,
        CONTENT_DECODED,
        CERTIFICATE_TRUSTED,
        NEW_CONNECTION,
        IDEMPOTENT,
        IGNORE_CONNECTION_LIMITS,
    }
    export enum ServerListenOptions{
        HTTPS,
        IPV4_ONLY,
        IPV6_ONLY,
    }
    export class Address extends GObject.Object {
        constructor(config?: any)
        static new_any(family: AddressFamily, port: number):Address
        static new_from_sockaddr(sa: any, len: number):Address
        equal_by_ip(addr2: Address):boolean
        equal_by_name(addr2: Address):boolean
        get_gsockaddr():Gio.SocketAddress
        get_name():string
        get_physical():string
        get_port():number
        get_sockaddr(len: number):any
        hash_by_ip():number
        hash_by_name():number
        is_resolved():boolean
        resolve_async(async_context: any, cancellable: Gio.Cancellable, callback: any, user_data: any):void
        resolve_sync(cancellable: Gio.Cancellable):number
    }
    export class Auth extends GObject.Object {
        constructor(config?: any)
        authenticate(username: string, password: string):void
        free_protection_space(space: any):void
        get_authorization(msg: Message):string
        get_host():string
        get_info():string
        get_protection_space(source_uri: any):any
        get_realm():string
        get_saved_password(user: string):string
        get_saved_users():any
        get_scheme_name():string
        has_saved_password(username: string, password: string):void
        is_authenticated():boolean
        is_for_proxy():boolean
        is_ready(msg: Message):boolean
        save_password(username: string, password: string):void
        update(msg: Message, auth_header: string):boolean
    }
    export class AuthBasic extends Auth {
    }
    export class AuthDigest extends Auth {
    }
    export class AuthDomain extends GObject.Object {
        accepts(msg: Message):string
        add_path(path: string):void
        basic_set_auth_callback(callback: any, user_data: any, dnotify: any):void
        challenge(msg: Message):void
        check_password(msg: Message, username: string, password: string):boolean
        covers(msg: Message):boolean
        digest_set_auth_callback(callback: any, user_data: any, dnotify: any):void
        get_realm():string
        remove_path(path: string):void
        set_filter(filter: any, filter_data: any, dnotify: any):void
        set_generic_auth_callback(auth_callback: any, auth_data: any, dnotify: any):void
        try_generic_auth_callback(msg: Message, username: string):boolean
    }
    export class AuthDomainBasic extends AuthDomain {
        constructor(config?: any)
    }
    export class AuthDomainDigest extends AuthDomain {
        static encode_password(username: string, realm: string, password: string):string
        constructor(config?: any)
    }
    export class AuthManager extends GObject.Object {
        use_auth(uri: any, auth: Auth):void
    }
    export class AuthNTLM extends Auth {
    }
    export class Cache extends GObject.Object {
        constructor(config?: any)
        clear():void
        dump():void
        flush():void
        get_max_size():number
        load():void
        set_max_size(max_size: number):void
    }
    export class ContentDecoder extends GObject.Object {
    }
    export class ContentSniffer extends GObject.Object {
        constructor(config?: any)
        get_buffer_size():number
        sniff(msg: Message, buffer: any, params: any):string
    }
    export class CookieJar extends GObject.Object {
        constructor(config?: any)
        add_cookie(cookie: any):void
        add_cookie_with_first_party(first_party: any, cookie: any):void
        all_cookies():any
        delete_cookie(cookie: any):void
        get_accept_policy():CookieJarAcceptPolicy
        get_cookie_list(uri: any, for_http: boolean):any
        get_cookies(uri: any, for_http: boolean):string
        is_persistent():boolean
        save():void
        set_accept_policy(policy: CookieJarAcceptPolicy):void
        set_cookie(uri: any, cookie: string):void
        set_cookie_with_first_party(uri: any, first_party: any, cookie: string):void
    }
    export class CookieJarDB extends CookieJar {
        constructor(config?: any)
    }
    export class CookieJarText extends CookieJar {
        constructor(config?: any)
    }
    export class Logger extends GObject.Object {
        constructor(config?: any)
        attach(session: Session):void
        detach(session: Session):void
        set_printer(printer: any, printer_data: any, destroy: any):void
        set_request_filter(request_filter: any, filter_data: any, destroy: any):void
        set_response_filter(response_filter: any, filter_data: any, destroy: any):void
    }
    export class Message extends GObject.Object {
        constructor(config?: any)
        static new_from_uri(method: string, uri: any):Message
        add_header_handler(signal: string, header: string, callback: any, user_data: any):number
        add_status_code_handler(signal: string, status_code: number, callback: any, user_data: any):number
        content_sniffed(content_type: string, params: any):void
        disable_feature(feature_type: any):void
        finished():void
        get_address():Address
        get_first_party():any
        get_flags():MessageFlags
        get_http_version():HTTPVersion
        get_https_status(certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags):boolean
        get_priority():MessagePriority
        get_soup_request():Request
        get_uri():any
        got_body():void
        got_chunk(chunk: any):void
        got_headers():void
        got_informational():void
        is_keepalive():boolean
        restarted():void
        set_chunk_allocator(allocator: any, user_data: any, destroy_notify: any):void
        set_first_party(first_party: any):void
        set_flags(flags: MessageFlags):void
        set_http_version(version: HTTPVersion):void
        set_priority(priority: MessagePriority):void
        set_redirect(status_code: number, redirect_uri: string):void
        set_request(content_type: string, req_use: MemoryUse, req_body: number[], req_length: number):void
        set_response(content_type: string, resp_use: MemoryUse, resp_body: string, resp_length: number):void

        set_status(status_code: number):void
        set_status_full(status_code: number, reason_phrase: string):void
        set_uri(uri: any):void
        starting():void
        wrote_body():void
        wrote_body_data(chunk: any):void
        wrote_chunk():void
        wrote_headers():void
        wrote_informational():void
    }
    export class MultipartInputStream extends Gio.FilterInputStream {
        constructor(config?: any)
        get_headers():any
        next_part(cancellable: Gio.Cancellable):Gio.InputStream
        next_part_async(io_priority: number, cancellable: Gio.Cancellable, callback: any, data: any):void
        next_part_finish(result: any):Gio.InputStream
    }
    export class ProxyResolverDefault extends GObject.Object {
    }
    export class Request extends GObject.Object {
        get_content_length():number
        get_content_type():string
        get_session():Session
        get_uri():any
        send(cancellable: Gio.Cancellable):Gio.InputStream
        send_async(cancellable: Gio.Cancellable, callback: any, user_data: any):void
        send_finish(result: any):Gio.InputStream
    }
    export class RequestData extends Request {
    }
    export class RequestFile extends Request {
        get_file():any
    }
    export class RequestHTTP extends Request {
        get_message():Message
    }
    export class Requester extends GObject.Object {
        constructor(config?: any)
        request(uri_string: string):Request
        request_uri(uri: any):Request
    }
    export class Server extends GObject.Object {
        constructor(config?: any)
        accept_iostream(stream: Gio.IOStream, local_addr: Gio.SocketAddress, remote_addr: Gio.SocketAddress):boolean
        add_auth_domain(auth_domain: AuthDomain):void
        add_early_handler(path: string, callback: any, user_data: any, destroy: any):void
        add_handler(path: string, callback: any, user_data: any, destroy: any):void
        add_websocket_handler(path: string, origin: string, protocols: string[], callback: any, user_data: any, destroy: any):void
        disconnect():void
        get_async_context():any
        get_listener():Socket
        get_listeners():any
        get_port():number
        get_uris():any
        is_https():boolean
        listen(address: Gio.SocketAddress, options: ServerListenOptions):boolean
        listen_all(port: number, options: ServerListenOptions):boolean
        listen_fd(fd: number, options: ServerListenOptions):boolean
        listen_local(port: number, options: ServerListenOptions):boolean
        listen_socket(socket: Gio.Socket, options: ServerListenOptions):boolean
        pause_message(msg: Message):void
        quit():void
        remove_auth_domain(auth_domain: AuthDomain):void
        remove_handler(path: string):void
        run():void
        run_async():void
        set_ssl_cert_file(ssl_cert_file: string, ssl_key_file: string):boolean
        unpause_message(msg: Message):void
    }
    export class Session extends GObject.Object {
        constructor(config?: any)
        static new_with_options(optname1: string, ...args: any[]):Session
        abort():void
        add_feature(feature: any):void
        add_feature_by_type(feature_type: any):void
        cancel_message(msg: Message, status_code: number):void
        get_async_context():any
        get_feature(feature_type: any):any
        get_feature_for_message(feature_type: any, msg: Message):any
        get_features(feature_type: any):any
        has_feature(feature_type: any):boolean
        pause_message(msg: Message):void
        prefetch_dns(hostname: string, cancellable: Gio.Cancellable, callback: any, user_data: any):void
        prepare_for_uri(uri: any):void
        queue_message(msg: Message, callback: any, user_data: any):void
        redirect_message(msg: Message):boolean
        remove_feature(feature: any):void
        remove_feature_by_type(feature_type: any):void
        request(uri_string: string):Request
        request_http(method: string, uri_string: string):RequestHTTP
        request_http_uri(method: string, uri: any):RequestHTTP
        request_uri(uri: any):Request
        requeue_message(msg: Message):void
        send(msg: Message, cancellable: Gio.Cancellable):Gio.InputStream
        send_async(msg: Message, cancellable: Gio.Cancellable, callback: any, user_data: any):void
        send_finish(result: any):Gio.InputStream
        send_message(msg: Message):number
        steal_connection(msg: Message):Gio.IOStream
        unpause_message(msg: Message):void
        websocket_connect_async(msg: Message, origin: string, protocols: string[], cancellable: Gio.Cancellable, callback: any, user_data: any):void
        websocket_connect_finish(result: any):WebsocketConnection
        would_redirect(msg: Message):boolean
    }
    export class SessionAsync extends Session {
        constructor(config?: any)
        static new_with_options(optname1: string, ...args: any[]):SessionAsync
    }
    export class SessionSync extends Session {
        constructor(config?: any)
        static new_with_options(optname1: string, ...args: any[]):SessionSync
    }
    export class Socket extends GObject.Object {
        constructor(config?: any)
        connect_async(cancellable: Gio.Cancellable, callback: any, user_data: any):void
        connect_sync(cancellable: Gio.Cancellable):number
        disconnect():void
        get_fd():number
        get_local_address():Address
        get_remote_address():Address
        is_connected():boolean
        is_ssl():boolean
        listen():boolean
        read(buffer: number[], len: number, nread: number, cancellable: Gio.Cancellable):SocketIOStatus
        read_until(buffer: number[], len: number, boundary: any, boundary_len: number, nread: number, got_boundary: boolean, cancellable: Gio.Cancellable):SocketIOStatus
        start_proxy_ssl(ssl_host: string, cancellable: Gio.Cancellable):boolean
        start_ssl(cancellable: Gio.Cancellable):boolean
        write(buffer: number[], len: number, nwrote: number, cancellable: Gio.Cancellable):SocketIOStatus
    }
    export class WebsocketConnection extends GObject.Object {
        constructor(config?: any)
        close(code: number, data: string):void
        get_close_code():number
        get_close_data():string
        get_connection_type():WebsocketConnectionType
        get_io_stream():Gio.IOStream
        get_origin():string
        get_protocol():string
        get_state():WebsocketState
        get_uri():any
        send_binary(data: number[], length: number):void
        send_text(text: string):void
    }
}