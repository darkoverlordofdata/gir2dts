/**
 * Gio.d.ts
 * 
 */
declare module "Gio" {
  export function action_name_is_valid(action_name: string):boolean
  export function action_parse_detailed_name(detailed_name: string, action_name: string, target_value: GLib.Variant):boolean
  export function action_print_detailed_name(action_name: string, target_value: GLib.Variant):string
  export function app_info_create_from_commandline(commandline: string, application_name: string, flags: AppInfoCreateFlags):AppInfo
  export function app_info_get_all():GLib.List
  export function app_info_get_all_for_type(content_type: string):GLib.List
  export function app_info_get_default_for_type(content_type: string, must_support_uris: boolean):AppInfo
  export function app_info_get_default_for_uri_scheme(uri_scheme: string):AppInfo
  export function app_info_get_fallback_for_type(content_type: string):GLib.List
  export function app_info_get_recommended_for_type(content_type: string):GLib.List
  export function app_info_launch_default_for_uri(uri: string, launch_context: AppLaunchContext):boolean
  export function app_info_reset_type_associations(content_type: string):void
  export function async_initable_newv_async(object_type: number, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
  export function bus_get(bus_type: BusType, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
  export function bus_get_finish(res: AsyncResult):DBusConnection
  export function bus_get_sync(bus_type: BusType, cancellable: Cancellable):DBusConnection
  export function bus_own_name(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_handler: BusAcquiredCallback, name_acquired_handler: BusNameAcquiredCallback, name_lost_handler: BusNameLostCallback, user_data: any, user_data_free_func: GLib.DestroyNotify):number
  export function bus_own_name_on_connection(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_handler: BusNameAcquiredCallback, name_lost_handler: BusNameLostCallback, user_data: any, user_data_free_func: GLib.DestroyNotify):number
  export function bus_own_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_closure: GObject.Closure, name_lost_closure: GObject.Closure):number
  export function bus_own_name_with_closures(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_closure: GObject.Closure, name_acquired_closure: GObject.Closure, name_lost_closure: GObject.Closure):number
  export function bus_unown_name(owner_id: number):void
  export function bus_unwatch_name(watcher_id: number):void
  export function bus_watch_name(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_handler: BusNameAppearedCallback, name_vanished_handler: BusNameVanishedCallback, user_data: any, user_data_free_func: GLib.DestroyNotify):number
  export function bus_watch_name_on_connection(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_handler: BusNameAppearedCallback, name_vanished_handler: BusNameVanishedCallback, user_data: any, user_data_free_func: GLib.DestroyNotify):number
  export function bus_watch_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_closure: GObject.Closure, name_vanished_closure: GObject.Closure):number
  export function bus_watch_name_with_closures(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_closure: GObject.Closure, name_vanished_closure: GObject.Closure):number
  export function content_type_can_be_executable(type: string):boolean
  export function content_type_equals(type1: string, type2: string):boolean
  export function content_type_from_mime_type(mime_type: string):string
  export function content_type_get_description(type: string):string
  export function content_type_get_generic_icon_name(type: string):string
  export function content_type_get_icon(type: string):Icon
  export function content_type_get_mime_type(type: string):string
  export function content_type_get_symbolic_icon(type: string):Icon
  export function content_type_guess(filename: string, data: number[], data_size: number, result_uncertain: boolean):string
  export function content_type_guess_for_tree(root: File):string[]
  export function content_type_is_a(type: string, supertype: string):boolean
  export function content_type_is_unknown(type: string):boolean
  export function content_types_get_registered():GLib.List
  export function dbus_address_escape_value(string: string):string
  export function dbus_address_get_for_bus_sync(bus_type: BusType, cancellable: Cancellable):string
  export function dbus_address_get_stream(address: string, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
  export function dbus_address_get_stream_finish(res: AsyncResult, out_guid: string):IOStream
  export function dbus_address_get_stream_sync(address: string, out_guid: string, cancellable: Cancellable):IOStream
  export function dbus_annotation_info_lookup(annotations: DBusAnnotationInfo[], name: string):string
  export function dbus_error_encode_gerror(error: GLib.Error):string
  export function dbus_error_get_remote_error(error: GLib.Error):string
  export function dbus_error_is_remote_error(error: GLib.Error):boolean
  export function dbus_error_new_for_dbus_error(dbus_error_name: string, dbus_error_message: string):GLib.Error
  export function dbus_error_quark():GLib.Quark
  export function dbus_error_register_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string):boolean
  export function dbus_error_register_error_domain(error_domain_quark_name: string, quark_volatile: number, entries: DBusErrorEntry, num_entries: number):void
  export function dbus_error_strip_remote_error(error: GLib.Error):boolean
  export function dbus_error_unregister_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string):boolean
  export function dbus_generate_guid():string
  export function dbus_gvalue_to_gvariant(gvalue: GObject.Value, type: GLib.VariantType):GLib.Variant
  export function dbus_gvariant_to_gvalue(value: GLib.Variant, out_gvalue: GObject.Value):void
  export function dbus_is_address(string: string):boolean
  export function dbus_is_guid(string: string):boolean
  export function dbus_is_interface_name(string: string):boolean
  export function dbus_is_member_name(string: string):boolean
  export function dbus_is_name(string: string):boolean
  export function dbus_is_supported_address(string: string):boolean
  export function dbus_is_unique_name(string: string):boolean
  export function file_new_for_commandline_arg(arg: string):File
  export function file_new_for_commandline_arg_and_cwd(arg: string, cwd: string):File
  export function file_new_for_path(path: string):File
  export function file_new_for_uri(uri: string):File
  export function file_new_tmp(tmpl: filename, iostream: FileIOStream):File
  export function file_parse_name(parse_name: string):File
  export function icon_deserialize(value: GLib.Variant):Icon
  export function icon_hash(icon: any):number
  export function icon_new_for_string(str: string):Icon
  export function initable_newv(object_type: number, n_parameters: number, parameters: GObject.Parameter[], cancellable: Cancellable):GObject.Object
  export function io_error_from_errno(err_no: number):IOErrorEnum
  export function io_error_quark():GLib.Quark
  export function io_extension_point_implement(extension_point_name: string, type: number, extension_name: string, priority: number):IOExtension
  export function io_extension_point_lookup(name: string):IOExtensionPoint
  export function io_extension_point_register(name: string):IOExtensionPoint
  export function io_modules_load_all_in_directory(dirname: string):GLib.List
  export function io_modules_load_all_in_directory_with_scope(dirname: string, scope: IOModuleScope):GLib.List
  export function io_modules_scan_all_in_directory(dirname: string):void
  export function io_modules_scan_all_in_directory_with_scope(dirname: string, scope: IOModuleScope):void
  export function io_scheduler_cancel_all_jobs():void
  export function io_scheduler_push_job(job_func: IOSchedulerJobFunc, user_data: any, notify: GLib.DestroyNotify, io_priority: number, cancellable: Cancellable):void
  export function network_monitor_get_default():NetworkMonitor
  export function networking_init():void
  export function pollable_source_new(pollable_stream: GObject.Object):GLib.Source
  export function pollable_source_new_full(pollable_stream: GObject.Object, child_source: GLib.Source, cancellable: Cancellable):GLib.Source
  export function pollable_stream_read(stream: InputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable):number
  export function pollable_stream_write(stream: OutputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable):number
  export function pollable_stream_write_all(stream: OutputStream, buffer: number[], count: number, blocking: boolean, bytes_written: number, cancellable: Cancellable):boolean
  export function proxy_get_default_for_protocol(protocol: string):Proxy
  export function proxy_resolver_get_default():ProxyResolver
  export function resolver_error_quark():GLib.Quark
  export function resource_error_quark():GLib.Quark
  export function resource_load(filename: filename):Resource
  export function resources_enumerate_children(path: string, lookup_flags: ResourceLookupFlags):string[]
  export function resources_get_info(path: string, lookup_flags: ResourceLookupFlags, size: number, flags: guint32):boolean
  export function resources_lookup_data(path: string, lookup_flags: ResourceLookupFlags):GLib.Bytes
  export function resources_open_stream(path: string, lookup_flags: ResourceLookupFlags):InputStream
  export function resources_register(resource: Resource):void
  export function resources_unregister(resource: Resource):void
  export function settings_schema_source_get_default():SettingsSchemaSource
  export function simple_async_report_error_in_idle(object: GObject.Object, callback: AsyncReadyCallback, user_data: any, domain: GLib.Quark, code: number, format: string, ...args: any[]):void
  export function simple_async_report_gerror_in_idle(object: GObject.Object, callback: AsyncReadyCallback, user_data: any, error: GLib.Error):void
  export function simple_async_report_take_gerror_in_idle(object: GObject.Object, callback: AsyncReadyCallback, user_data: any, error: GLib.Error):void
  export function srv_target_list_sort(targets: GLib.List):GLib.List
  export function tls_backend_get_default():TlsBackend
  export function tls_client_connection_new(base_io_stream: IOStream, server_identity: SocketConnectable):TlsClientConnection
  export function tls_error_quark():GLib.Quark
  export function tls_file_database_new(anchors: string):TlsFileDatabase
  export function tls_server_connection_new(base_io_stream: IOStream, certificate: TlsCertificate):TlsServerConnection
  export function unix_is_mount_path_system_internal(mount_path: string):boolean
  export function unix_mount_at(mount_path: string, time_read: number):UnixMountEntry
  export function unix_mount_compare(mount1: UnixMountEntry, mount2: UnixMountEntry):number
  export function unix_mount_free(mount_entry: UnixMountEntry):void
  export function unix_mount_get_device_path(mount_entry: UnixMountEntry):string
  export function unix_mount_get_fs_type(mount_entry: UnixMountEntry):string
  export function unix_mount_get_mount_path(mount_entry: UnixMountEntry):string
  export function unix_mount_guess_can_eject(mount_entry: UnixMountEntry):boolean
  export function unix_mount_guess_icon(mount_entry: UnixMountEntry):Icon
  export function unix_mount_guess_name(mount_entry: UnixMountEntry):string
  export function unix_mount_guess_should_display(mount_entry: UnixMountEntry):boolean
  export function unix_mount_guess_symbolic_icon(mount_entry: UnixMountEntry):Icon
  export function unix_mount_is_readonly(mount_entry: UnixMountEntry):boolean
  export function unix_mount_is_system_internal(mount_entry: UnixMountEntry):boolean
  export function unix_mount_points_changed_since(time: number):boolean
  export function unix_mount_points_get(time_read: number):GLib.List
  export function unix_mounts_changed_since(time: number):boolean
  export function unix_mounts_get(time_read: number):GLib.List
  export enum BusType{
    STARTER,
    NONE,
    SYSTEM,
    SESSION,
  }
  export enum ConverterResult{
    ERROR,
    CONVERTED,
    FINISHED,
    FLUSHED,
  }
  export enum CredentialsType{
    INVALID,
    LINUX_UCRED,
    FREEBSD_CMSGCRED,
    OPENBSD_SOCKPEERCRED,
    SOLARIS_UCRED,
    NETBSD_UNPCBID,
  }
  export enum DBusError{
    FAILED,
    NO_MEMORY,
    SERVICE_UNKNOWN,
    NAME_HAS_NO_OWNER,
    NO_REPLY,
    IO_ERROR,
    BAD_ADDRESS,
    NOT_SUPPORTED,
    LIMITS_EXCEEDED,
    ACCESS_DENIED,
    AUTH_FAILED,
    NO_SERVER,
    TIMEOUT,
    NO_NETWORK,
    ADDRESS_IN_USE,
    DISCONNECTED,
    INVALID_ARGS,
    FILE_NOT_FOUND,
    FILE_EXISTS,
    UNKNOWN_METHOD,
    TIMED_OUT,
    MATCH_RULE_NOT_FOUND,
    MATCH_RULE_INVALID,
    SPAWN_EXEC_FAILED,
    SPAWN_FORK_FAILED,
    SPAWN_CHILD_EXITED,
    SPAWN_CHILD_SIGNALED,
    SPAWN_FAILED,
    SPAWN_SETUP_FAILED,
    SPAWN_CONFIG_INVALID,
    SPAWN_SERVICE_INVALID,
    SPAWN_SERVICE_NOT_FOUND,
    SPAWN_PERMISSIONS_INVALID,
    SPAWN_FILE_INVALID,
    SPAWN_NO_MEMORY,
    UNIX_PROCESS_ID_UNKNOWN,
    INVALID_SIGNATURE,
    INVALID_FILE_CONTENT,
    SELINUX_SECURITY_CONTEXT_UNKNOWN,
    ADT_AUDIT_DATA_UNKNOWN,
    OBJECT_PATH_IN_USE,
    UNKNOWN_OBJECT,
    UNKNOWN_INTERFACE,
    UNKNOWN_PROPERTY,
    PROPERTY_READ_ONLY,
  }
  export enum DBusMessageByteOrder{
    BIG_ENDIAN,
    LITTLE_ENDIAN,
  }
  export enum DBusMessageHeaderField{
    INVALID,
    PATH,
    INTERFACE,
    MEMBER,
    ERROR_NAME,
    REPLY_SERIAL,
    DESTINATION,
    SENDER,
    SIGNATURE,
    NUM_UNIX_FDS,
  }
  export enum DBusMessageType{
    INVALID,
    METHOD_CALL,
    METHOD_RETURN,
    ERROR,
    SIGNAL,
  }
  export enum DataStreamByteOrder{
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    HOST_ENDIAN,
  }
  export enum DataStreamNewlineType{
    LF,
    CR,
    CR_LF,
    ANY,
  }
  export enum DriveStartStopType{
    UNKNOWN,
    SHUTDOWN,
    NETWORK,
    MULTIDISK,
    PASSWORD,
  }
  export enum EmblemOrigin{
    UNKNOWN,
    DEVICE,
    LIVEMETADATA,
    TAG,
  }
  export enum FileAttributeStatus{
    UNSET,
    SET,
    ERROR_SETTING,
  }
  export enum FileAttributeType{
    INVALID,
    STRING,
    BYTE_STRING,
    BOOLEAN,
    UINT32,
    INT32,
    UINT64,
    INT64,
    OBJECT,
    STRINGV,
  }
  export enum FileMonitorEvent{
    CHANGED,
    CHANGES_DONE_HINT,
    DELETED,
    CREATED,
    ATTRIBUTE_CHANGED,
    PRE_UNMOUNT,
    UNMOUNTED,
    MOVED,
    RENAMED,
    MOVED_IN,
    MOVED_OUT,
  }
  export enum FileType{
    UNKNOWN,
    REGULAR,
    DIRECTORY,
    SYMBOLIC_LINK,
    SPECIAL,
    SHORTCUT,
    MOUNTABLE,
  }
  export enum FilesystemPreviewType{
    IF_ALWAYS,
    IF_LOCAL,
    NEVER,
  }
  export enum IOErrorEnum{
    FAILED,
    NOT_FOUND,
    EXISTS,
    IS_DIRECTORY,
    NOT_DIRECTORY,
    NOT_EMPTY,
    NOT_REGULAR_FILE,
    NOT_SYMBOLIC_LINK,
    NOT_MOUNTABLE_FILE,
    FILENAME_TOO_LONG,
    INVALID_FILENAME,
    TOO_MANY_LINKS,
    NO_SPACE,
    INVALID_ARGUMENT,
    PERMISSION_DENIED,
    NOT_SUPPORTED,
    NOT_MOUNTED,
    ALREADY_MOUNTED,
    CLOSED,
    CANCELLED,
    PENDING,
    READ_ONLY,
    CANT_CREATE_BACKUP,
    WRONG_ETAG,
    TIMED_OUT,
    WOULD_RECURSE,
    BUSY,
    WOULD_BLOCK,
    HOST_NOT_FOUND,
    WOULD_MERGE,
    FAILED_HANDLED,
    TOO_MANY_OPEN_FILES,
    NOT_INITIALIZED,
    ADDRESS_IN_USE,
    PARTIAL_INPUT,
    INVALID_DATA,
    DBUS_ERROR,
    HOST_UNREACHABLE,
    NETWORK_UNREACHABLE,
    CONNECTION_REFUSED,
    PROXY_FAILED,
    PROXY_AUTH_FAILED,
    PROXY_NEED_AUTH,
    PROXY_NOT_ALLOWED,
    BROKEN_PIPE,
    CONNECTION_CLOSED,
    NOT_CONNECTED,
    MESSAGE_TOO_LARGE,
  }
  export enum IOModuleScopeFlags{
    NONE,
    BLOCK_DUPLICATES,
  }
  export enum MountOperationResult{
    HANDLED,
    ABORTED,
    UNHANDLED,
  }
  export enum NetworkConnectivity{
    LOCAL,
    LIMITED,
    PORTAL,
    FULL,
  }
  export enum NotificationPriority{
    NORMAL,
    LOW,
    HIGH,
    URGENT,
  }
  export enum PasswordSave{
    NEVER,
    FOR_SESSION,
    PERMANENTLY,
  }
  export enum ResolverError{
    NOT_FOUND,
    TEMPORARY_FAILURE,
    INTERNAL,
  }
  export enum ResolverRecordType{
    SRV,
    MX,
    TXT,
    SOA,
    NS,
  }
  export enum ResourceError{
    NOT_FOUND,
    INTERNAL,
  }
  export enum SocketClientEvent{
    RESOLVING,
    RESOLVED,
    CONNECTING,
    CONNECTED,
    PROXY_NEGOTIATING,
    PROXY_NEGOTIATED,
    TLS_HANDSHAKING,
    TLS_HANDSHAKED,
    COMPLETE,
  }
  export enum SocketFamily{
    INVALID,
    UNIX,
    IPV4,
    IPV6,
  }
  export enum SocketListenerEvent{
    BINDING,
    BOUND,
    LISTENING,
    LISTENED,
  }
  export enum SocketProtocol{
    UNKNOWN,
    DEFAULT,
    TCP,
    UDP,
    SCTP,
  }
  export enum SocketType{
    INVALID,
    STREAM,
    DATAGRAM,
    SEQPACKET,
  }
  export enum TlsAuthenticationMode{
    NONE,
    REQUESTED,
    REQUIRED,
  }
  export enum TlsCertificateRequestFlags{
    NONE,
  }
  export enum TlsDatabaseLookupFlags{
    NONE,
    KEYPAIR,
  }
  export enum TlsError{
    UNAVAILABLE,
    MISC,
    BAD_CERTIFICATE,
    NOT_TLS,
    HANDSHAKE,
    CERTIFICATE_REQUIRED,
    EOF,
  }
  export enum TlsInteractionResult{
    UNHANDLED,
    HANDLED,
    FAILED,
  }
  export enum TlsRehandshakeMode{
    NEVER,
    SAFELY,
    UNSAFELY,
  }
  export enum UnixSocketAddressType{
    INVALID,
    ANONYMOUS,
    PATH,
    ABSTRACT,
    ABSTRACT_PADDED,
  }
  export enum ZlibCompressorFormat{
    ZLIB,
    GZIP,
    RAW,
  }
  export enum AppInfoCreateFlags{
    NONE,
    NEEDS_TERMINAL,
    SUPPORTS_URIS,
    SUPPORTS_STARTUP_NOTIFICATION,
  }
  export enum ApplicationFlags{
    FLAGS_NONE,
    IS_SERVICE,
    IS_LAUNCHER,
    HANDLES_OPEN,
    HANDLES_COMMAND_LINE,
    SEND_ENVIRONMENT,
    NON_UNIQUE,
  }
  export enum AskPasswordFlags{
    NEED_PASSWORD,
    NEED_USERNAME,
    NEED_DOMAIN,
    SAVING_SUPPORTED,
    ANONYMOUS_SUPPORTED,
  }
  export enum BusNameOwnerFlags{
    NONE,
    ALLOW_REPLACEMENT,
    REPLACE,
  }
  export enum BusNameWatcherFlags{
    NONE,
    AUTO_START,
  }
  export enum ConverterFlags{
    NONE,
    INPUT_AT_END,
    FLUSH,
  }
  export enum DBusCallFlags{
    NONE,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
  }
  export enum DBusCapabilityFlags{
    NONE,
    UNIX_FD_PASSING,
  }
  export enum DBusConnectionFlags{
    NONE,
    AUTHENTICATION_CLIENT,
    AUTHENTICATION_SERVER,
    AUTHENTICATION_ALLOW_ANONYMOUS,
    MESSAGE_BUS_CONNECTION,
    DELAY_MESSAGE_PROCESSING,
  }
  export enum DBusInterfaceSkeletonFlags{
    NONE,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD,
  }
  export enum DBusMessageFlags{
    NONE,
    NO_REPLY_EXPECTED,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
  }
  export enum DBusObjectManagerClientFlags{
    NONE,
    DO_NOT_AUTO_START,
  }
  export enum DBusPropertyInfoFlags{
    NONE,
    READABLE,
    WRITABLE,
  }
  export enum DBusProxyFlags{
    NONE,
    DO_NOT_LOAD_PROPERTIES,
    DO_NOT_CONNECT_SIGNALS,
    DO_NOT_AUTO_START,
    GET_INVALIDATED_PROPERTIES,
    DO_NOT_AUTO_START_AT_CONSTRUCTION,
  }
  export enum DBusSendMessageFlags{
    NONE,
    PRESERVE_SERIAL,
  }
  export enum DBusServerFlags{
    NONE,
    RUN_IN_THREAD,
    AUTHENTICATION_ALLOW_ANONYMOUS,
  }
  export enum DBusSignalFlags{
    NONE,
    NO_MATCH_RULE,
    MATCH_ARG0_NAMESPACE,
    MATCH_ARG0_PATH,
  }
  export enum DBusSubtreeFlags{
    NONE,
    DISPATCH_TO_UNENUMERATED_NODES,
  }
  export enum DriveStartFlags{
    NONE,
  }
  export enum FileAttributeInfoFlags{
    NONE,
    COPY_WITH_FILE,
    COPY_WHEN_MOVED,
  }
  export enum FileCopyFlags{
    NONE,
    OVERWRITE,
    BACKUP,
    NOFOLLOW_SYMLINKS,
    ALL_METADATA,
    NO_FALLBACK_FOR_MOVE,
    TARGET_DEFAULT_PERMS,
  }
  export enum FileCreateFlags{
    NONE,
    PRIVATE,
    REPLACE_DESTINATION,
  }
  export enum FileMeasureFlags{
    NONE,
    REPORT_ANY_ERROR,
    APPARENT_SIZE,
    NO_XDEV,
  }
  export enum FileMonitorFlags{
    NONE,
    WATCH_MOUNTS,
    SEND_MOVED,
    WATCH_HARD_LINKS,
    WATCH_MOVES,
  }
  export enum FileQueryInfoFlags{
    NONE,
    NOFOLLOW_SYMLINKS,
  }
  export enum IOStreamSpliceFlags{
    NONE,
    CLOSE_STREAM1,
    CLOSE_STREAM2,
    WAIT_FOR_BOTH,
  }
  export enum MountMountFlags{
    NONE,
  }
  export enum MountUnmountFlags{
    NONE,
    FORCE,
  }
  export enum OutputStreamSpliceFlags{
    NONE,
    CLOSE_SOURCE,
    CLOSE_TARGET,
  }
  export enum ResourceFlags{
    NONE,
    COMPRESSED,
  }
  export enum ResourceLookupFlags{
    NONE,
  }
  export enum SettingsBindFlags{
    DEFAULT,
    GET,
    SET,
    NO_SENSITIVITY,
    GET_NO_CHANGES,
    INVERT_BOOLEAN,
  }
  export enum SocketMsgFlags{
    NONE,
    OOB,
    PEEK,
    DONTROUTE,
  }
  export enum SubprocessFlags{
    NONE,
    STDIN_PIPE,
    STDIN_INHERIT,
    STDOUT_PIPE,
    STDOUT_SILENCE,
    STDERR_PIPE,
    STDERR_SILENCE,
    STDERR_MERGE,
    INHERIT_FDS,
  }
  export enum TestDBusFlags{
    NONE,
  }
  export enum TlsCertificateFlags{
    UNKNOWN_CA,
    BAD_IDENTITY,
    NOT_ACTIVATED,
    EXPIRED,
    REVOKED,
    INSECURE,
    GENERIC_ERROR,
    VALIDATE_ALL,
  }
  export enum TlsDatabaseVerifyFlags{
    NONE,
  }
  export enum TlsPasswordFlags{
    NONE,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
  }
  export class AppInfoMonitor extends GObject.Object {
  }
  export class AppLaunchContext extends GObject.Object {
    get_display(info: AppInfo, files: GLib.List):string
    get_environment():string[]
    get_startup_notify_id(info: AppInfo, files: GLib.List):string
    launch_failed(startup_notify_id: string):void
    setenv(variable: string, value: string):void
    unsetenv(variable: string):void
  }
  export class Application extends GObject.Object {
    constructor(application_id: string, flags: ApplicationFlags)
    activate():void
    add_main_option(long_name: string, short_name: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, arg_description: string):void
    add_main_option_entries(entries: GLib.OptionEntry[]):void
    add_option_group(group: GLib.OptionGroup):void
    bind_busy_property(object: GObject.Object, property: string):void
    get_application_id():string
    get_dbus_connection():DBusConnection
    get_dbus_object_path():string
    get_flags():ApplicationFlags
    get_inactivity_timeout():number
    get_is_busy():boolean
    get_is_registered():boolean
    get_is_remote():boolean
    get_resource_base_path():string
    hold():void
    mark_busy():void
    open(files: File[], n_files: number, hint: string):void
    quit():void
    register(cancellable: Cancellable):boolean
    release():void
    run(argc: number, argv: string[]):number
    send_notification(id: string, notification: Notification):void
    set_action_group(action_group: ActionGroup):void
    set_application_id(application_id: string):void
    set_default():void
    set_flags(flags: ApplicationFlags):void
    set_inactivity_timeout(inactivity_timeout: number):void
    set_resource_base_path(resource_path: string):void
    unbind_busy_property(object: GObject.Object, property: string):void
    unmark_busy():void
    withdraw_notification(id: string):void
  }
  export class ApplicationCommandLine extends GObject.Object {
    create_file_for_arg(arg: string):File
    get_arguments(argc: number):string[]
    get_cwd():string
    get_environ():string[]
    get_exit_status():number
    get_is_remote():boolean
    get_options_dict():GLib.VariantDict
    get_platform_data():GLib.Variant
    get_stdin():InputStream
    getenv(name: string):string
    print(format: string, ...args: any[]):void
    printerr(format: string, ...args: any[]):void
    set_exit_status(exit_status: number):void
  }
  export class BufferedInputStream extends FilterInputStream {
    constructor(base_stream: InputStream)
    constructor(base_stream: InputStream, size: number)
    fill(count: number, cancellable: Cancellable):number
    fill_async(count: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    fill_finish(result: AsyncResult):number
    get_available():number
    get_buffer_size():number
    peek(buffer: number[], offset: number, count: number):number
    peek_buffer(count: number):number[]
    read_byte(cancellable: Cancellable):number
    set_buffer_size(size: number):void
  }
  export class BufferedOutputStream extends FilterOutputStream {
    constructor(base_stream: OutputStream)
    constructor(base_stream: OutputStream, size: number)
    get_auto_grow():boolean
    get_buffer_size():number
    set_auto_grow(auto_grow: boolean):void
    set_buffer_size(size: number):void
  }
  export class BytesIcon extends GObject.Object {
    constructor(bytes: GLib.Bytes)
    get_bytes():GLib.Bytes
  }
  export class Cancellable extends GObject.Object {
    cancel():void
    connect(callback: GObject.Callback, data: any, data_destroy_func: GLib.DestroyNotify):number
    disconnect(handler_id: number):void
    get_fd():number
    is_cancelled():boolean
    make_pollfd(pollfd: GLib.PollFD):boolean
    pop_current():void
    push_current():void
    release_fd():void
    reset():void
    set_error_if_cancelled():boolean
    source_new():GLib.Source
  }
  export class CharsetConverter extends GObject.Object {
    constructor(to_charset: string, from_charset: string)
    get_num_fallbacks():number
    get_use_fallback():boolean
    set_use_fallback(use_fallback: boolean):void
  }
  export class ConverterInputStream extends FilterInputStream {
    constructor(base_stream: InputStream, converter: Converter)
    get_converter():Converter
  }
  export class ConverterOutputStream extends FilterOutputStream {
    constructor(base_stream: OutputStream, converter: Converter)
    get_converter():Converter
  }
  export class Credentials extends GObject.Object {
    get_native(native_type: CredentialsType):object
    get_unix_pid():number
    get_unix_user():number
    is_same_user(other_credentials: Credentials):boolean
    set_native(native_type: CredentialsType, native: any):void
    set_unix_user(uid: number):boolean
    to_string():string
  }
  export class DBusActionGroup extends GObject.Object {
  }
  export class DBusAuthObserver extends GObject.Object {
    allow_mechanism(mechanism: string):boolean
    authorize_authenticated_peer(stream: IOStream, credentials: Credentials):boolean
  }
  export class DBusConnection extends GObject.Object {
    constructor(res: AsyncResult)
    constructor(res: AsyncResult)
    constructor(address: string, flags: DBusConnectionFlags, observer: DBusAuthObserver, cancellable: Cancellable)
    constructor(stream: IOStream, guid: string, flags: DBusConnectionFlags, observer: DBusAuthObserver, cancellable: Cancellable)
    add_filter(filter_function: DBusMessageFilterFunction, user_data: any, user_data_free_func: GLib.DestroyNotify):number
    call(bus_name: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, reply_type: GLib.VariantType, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    call_finish(res: AsyncResult):GLib.Variant
    call_sync(bus_name: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, reply_type: GLib.VariantType, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable):GLib.Variant
    call_with_unix_fd_list(bus_name: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, reply_type: GLib.VariantType, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    call_with_unix_fd_list_finish(out_fd_list: UnixFDList, res: AsyncResult):GLib.Variant
    call_with_unix_fd_list_sync(bus_name: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, reply_type: GLib.VariantType, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList, out_fd_list: UnixFDList, cancellable: Cancellable):GLib.Variant
    close(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    close_finish(res: AsyncResult):boolean
    close_sync(cancellable: Cancellable):boolean
    emit_signal(destination_bus_name: string, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant):boolean
    export_action_group(object_path: string, action_group: ActionGroup):number
    export_menu_model(object_path: string, menu: MenuModel):number
    flush(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    flush_finish(res: AsyncResult):boolean
    flush_sync(cancellable: Cancellable):boolean
    get_capabilities():DBusCapabilityFlags
    get_exit_on_close():boolean
    get_guid():string
    get_last_serial():guint32
    get_peer_credentials():Credentials
    get_stream():IOStream
    get_unique_name():string
    is_closed():boolean
    register_object(object_path: string, interface_info: DBusInterfaceInfo, vtable: DBusInterfaceVTable, user_data: any, user_data_free_func: GLib.DestroyNotify):number
    register_object_with_closures(object_path: string, interface_info: DBusInterfaceInfo, method_call_closure: GObject.Closure, get_property_closure: GObject.Closure, set_property_closure: GObject.Closure):number
    register_subtree(object_path: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, user_data: any, user_data_free_func: GLib.DestroyNotify):number
    remove_filter(filter_id: number):void
    send_message(message: DBusMessage, flags: DBusSendMessageFlags, out_serial: guint32):boolean
    send_message_with_reply(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, out_serial: guint32, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    send_message_with_reply_finish(res: AsyncResult):DBusMessage
    send_message_with_reply_sync(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, out_serial: guint32, cancellable: Cancellable):DBusMessage
    set_exit_on_close(exit_on_close: boolean):void
    signal_subscribe(sender: string, interface_name: string, member: string, object_path: string, arg0: string, flags: DBusSignalFlags, callback: DBusSignalCallback, user_data: any, user_data_free_func: GLib.DestroyNotify):number
    signal_unsubscribe(subscription_id: number):void
    start_message_processing():void
    unexport_action_group(export_id: number):void
    unexport_menu_model(export_id: number):void
    unregister_object(registration_id: number):boolean
    unregister_subtree(registration_id: number):boolean
  }
  export class DBusInterfaceSkeleton extends GObject.Object {
    export(connection: DBusConnection, object_path: string):boolean
    flush():void
    get_connection():DBusConnection
    get_connections():GLib.List
    get_flags():DBusInterfaceSkeletonFlags
    get_info():DBusInterfaceInfo
    get_object_path():string
    get_properties():GLib.Variant
    get_vtable():DBusInterfaceVTable
    has_connection(connection: DBusConnection):boolean
    set_flags(flags: DBusInterfaceSkeletonFlags):void
    unexport():void
    unexport_from_connection(connection: DBusConnection):void
  }
  export class DBusMenuModel extends MenuModel {
  }
  export class DBusMessage extends GObject.Object {
    constructor(blob: number[], blob_len: number, capabilities: DBusCapabilityFlags)
    constructor(name: string, path: string, interface_: string, method: string)
    constructor(path: string, interface_: string, signal: string)
    copy():DBusMessage
    get_arg0():string
    get_body():GLib.Variant
    get_byte_order():DBusMessageByteOrder
    get_destination():string
    get_error_name():string
    get_flags():DBusMessageFlags
    get_header(header_field: DBusMessageHeaderField):GLib.Variant
    get_header_fields():number[]
    get_interface():string
    get_locked():boolean
    get_member():string
    get_message_type():DBusMessageType
    get_num_unix_fds():guint32
    get_path():string
    get_reply_serial():guint32
    get_sender():string
    get_serial():guint32
    get_signature():string
    get_unix_fd_list():UnixFDList
    lock():void
    new_method_error(error_name: string, error_message_format: string, ...args: any[]):DBusMessage
    new_method_error_literal(error_name: string, error_message: string):DBusMessage
    new_method_error_valist(error_name: string, error_message_format: string, var_args: any):DBusMessage
    new_method_reply():DBusMessage
    print(indent: number):string
    set_body(body: GLib.Variant):void
    set_byte_order(byte_order: DBusMessageByteOrder):void
    set_destination(value: string):void
    set_error_name(value: string):void
    set_flags(flags: DBusMessageFlags):void
    set_header(header_field: DBusMessageHeaderField, value: GLib.Variant):void
    set_interface(value: string):void
    set_member(value: string):void
    set_message_type(type: DBusMessageType):void
    set_num_unix_fds(value: guint32):void
    set_path(value: string):void
    set_reply_serial(value: guint32):void
    set_sender(value: string):void
    set_serial(serial: guint32):void
    set_signature(value: string):void
    set_unix_fd_list(fd_list: UnixFDList):void
    to_blob(out_size: number, capabilities: DBusCapabilityFlags):number[]
    to_gerror():boolean
  }
  export class DBusMethodInvocation extends GObject.Object {
    get_connection():DBusConnection
    get_interface_name():string
    get_message():DBusMessage
    get_method_info():DBusMethodInfo
    get_method_name():string
    get_object_path():string
    get_parameters():GLib.Variant
    get_property_info():DBusPropertyInfo
    get_sender():string
    get_user_data():object
    return_dbus_error(error_name: string, error_message: string):void
    return_error(domain: GLib.Quark, code: number, format: string, ...args: any[]):void
    return_error_literal(domain: GLib.Quark, code: number, message: string):void
    return_error_valist(domain: GLib.Quark, code: number, format: string, var_args: any):void
    return_gerror(error: GLib.Error):void
    return_value(parameters: GLib.Variant):void
    return_value_with_unix_fd_list(parameters: GLib.Variant, fd_list: UnixFDList):void
    take_error(error: GLib.Error):void
  }
  export class DBusObjectManagerClient extends GObject.Object {
    constructor(res: AsyncResult)
    constructor(res: AsyncResult)
    constructor(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc, get_proxy_type_user_data: any, get_proxy_type_destroy_notify: GLib.DestroyNotify, cancellable: Cancellable)
    constructor(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc, get_proxy_type_user_data: any, get_proxy_type_destroy_notify: GLib.DestroyNotify, cancellable: Cancellable)
    get_connection():DBusConnection
    get_flags():DBusObjectManagerClientFlags
    get_name():string
    get_name_owner():string
  }
  export class DBusObjectManagerServer extends GObject.Object {
    constructor(object_path: string)
    export(object: DBusObjectSkeleton):void
    export_uniquely(object: DBusObjectSkeleton):void
    get_connection():DBusConnection
    is_exported(object: DBusObjectSkeleton):boolean
    set_connection(connection: DBusConnection):void
    unexport(object_path: string):boolean
  }
  export class DBusObjectProxy extends GObject.Object {
    constructor(connection: DBusConnection, object_path: string)
    get_connection():DBusConnection
  }
  export class DBusObjectSkeleton extends GObject.Object {
    constructor(object_path: string)
    add_interface(interface_: DBusInterfaceSkeleton):void
    flush():void
    remove_interface(interface_: DBusInterfaceSkeleton):void
    remove_interface_by_name(interface_name: string):void
    set_object_path(object_path: string):void
  }
  export class DBusProxy extends GObject.Object {
    constructor(res: AsyncResult)
    constructor(res: AsyncResult)
    constructor(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo, name: string, object_path: string, interface_name: string, cancellable: Cancellable)
    constructor(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo, name: string, object_path: string, interface_name: string, cancellable: Cancellable)
    call(method_name: string, parameters: GLib.Variant, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    call_finish(res: AsyncResult):GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable):GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    call_with_unix_fd_list_finish(out_fd_list: UnixFDList, res: AsyncResult):GLib.Variant
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList, out_fd_list: UnixFDList, cancellable: Cancellable):GLib.Variant
    get_cached_property(property_name: string):GLib.Variant
    get_cached_property_names():string[]
    get_connection():DBusConnection
    get_default_timeout():number
    get_flags():DBusProxyFlags
    get_interface_info():DBusInterfaceInfo
    get_interface_name():string
    get_name():string
    get_name_owner():string
    get_object_path():string
    set_cached_property(property_name: string, value: GLib.Variant):void
    set_default_timeout(timeout_msec: number):void
    set_interface_info(info: DBusInterfaceInfo):void
  }
  export class DBusServer extends GObject.Object {
    constructor(address: string, flags: DBusServerFlags, guid: string, observer: DBusAuthObserver, cancellable: Cancellable)
    get_client_address():string
    get_flags():DBusServerFlags
    get_guid():string
    is_active():boolean
    start():void
    stop():void
  }
  export class DataInputStream extends BufferedInputStream {
    constructor(base_stream: InputStream)
    get_byte_order():DataStreamByteOrder
    get_newline_type():DataStreamNewlineType
    read_byte(cancellable: Cancellable):number
    read_int16(cancellable: Cancellable):gint16
    read_int32(cancellable: Cancellable):gint32
    read_int64(cancellable: Cancellable):number
    read_line(length: number, cancellable: Cancellable):number[]
    read_line_async(io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    read_line_finish(result: AsyncResult, length: number):number[]
    read_line_finish_utf8(result: AsyncResult, length: number):string
    read_line_utf8(length: number, cancellable: Cancellable):string
    read_uint16(cancellable: Cancellable):guint16
    read_uint32(cancellable: Cancellable):guint32
    read_uint64(cancellable: Cancellable):number
    read_until(stop_chars: string, length: number, cancellable: Cancellable):string
    read_until_async(stop_chars: string, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    read_until_finish(result: AsyncResult, length: number):string
    read_upto(stop_chars: string, stop_chars_len: number, length: number, cancellable: Cancellable):string
    read_upto_async(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    read_upto_finish(result: AsyncResult, length: number):string
    set_byte_order(order: DataStreamByteOrder):void
    set_newline_type(type: DataStreamNewlineType):void
  }
  export class DataOutputStream extends FilterOutputStream {
    constructor(base_stream: OutputStream)
    get_byte_order():DataStreamByteOrder
    put_byte(data: number, cancellable: Cancellable):boolean
    put_int16(data: gint16, cancellable: Cancellable):boolean
    put_int32(data: gint32, cancellable: Cancellable):boolean
    put_int64(data: number, cancellable: Cancellable):boolean
    put_string(str: string, cancellable: Cancellable):boolean
    put_uint16(data: guint16, cancellable: Cancellable):boolean
    put_uint32(data: guint32, cancellable: Cancellable):boolean
    put_uint64(data: number, cancellable: Cancellable):boolean
    set_byte_order(order: DataStreamByteOrder):void
  }
  export class DesktopAppInfo extends GObject.Object {
    constructor(desktop_id: string)
    constructor(filename: string)
    constructor(key_file: GLib.KeyFile)
    get_action_name(action_name: string):string
    get_boolean(key: string):boolean
    get_categories():string
    get_filename():string
    get_generic_name():string
    get_is_hidden():boolean
    get_keywords():string[]
    get_nodisplay():boolean
    get_show_in(desktop_env: string):boolean
    get_startup_wm_class():string
    get_string(key: string):string
    has_key(key: string):boolean
    launch_action(action_name: string, launch_context: AppLaunchContext):void
    launch_uris_as_manager(uris: GLib.List, launch_context: AppLaunchContext, spawn_flags: GLib.SpawnFlags, user_setup: GLib.SpawnChildSetupFunc, user_setup_data: any, pid_callback: DesktopAppLaunchCallback, pid_callback_data: any):boolean
    list_actions():string[]
  }
  export class Emblem extends GObject.Object {
    constructor(icon: Icon)
    constructor(icon: Icon, origin: EmblemOrigin)
    get_icon():Icon
    get_origin():EmblemOrigin
  }
  export class EmblemedIcon extends GObject.Object {
    constructor(icon: Icon, emblem: Emblem)
    add_emblem(emblem: Emblem):void
    clear_emblems():void
    get_emblems():GLib.List
    get_icon():Icon
  }
  export class FileEnumerator extends GObject.Object {
    close(cancellable: Cancellable):boolean
    close_async(io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    close_finish(result: AsyncResult):boolean
    get_child(info: FileInfo):File
    get_container():File
    has_pending():boolean
    is_closed():boolean
    iterate(out_info: FileInfo, out_child: File, cancellable: Cancellable):boolean
    next_file(cancellable: Cancellable):FileInfo
    next_files_async(num_files: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    next_files_finish(result: AsyncResult):GLib.List
    set_pending(pending: boolean):void
  }
  export class FileIOStream extends IOStream {
    get_etag():string
    query_info(attributes: string, cancellable: Cancellable):FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    query_info_finish(result: AsyncResult):FileInfo
  }
  export class FileIcon extends GObject.Object {
    constructor(file: File)
    get_file():File
  }
  export class FileInfo extends GObject.Object {
    clear_status():void
    copy_into(dest_info: FileInfo):void
    dup():FileInfo
    get_attribute_as_string(attribute: string):string
    get_attribute_boolean(attribute: string):boolean
    get_attribute_byte_string(attribute: string):string
    get_attribute_data(attribute: string, type: FileAttributeType, value_pp: any, status: FileAttributeStatus):boolean
    get_attribute_int32(attribute: string):gint32
    get_attribute_int64(attribute: string):number
    get_attribute_object(attribute: string):GObject.Object
    get_attribute_status(attribute: string):FileAttributeStatus
    get_attribute_string(attribute: string):string
    get_attribute_stringv(attribute: string):string[]
    get_attribute_type(attribute: string):FileAttributeType
    get_attribute_uint32(attribute: string):guint32
    get_attribute_uint64(attribute: string):number
    get_content_type():string
    get_deletion_date():GLib.DateTime
    get_display_name():string
    get_edit_name():string
    get_etag():string
    get_file_type():FileType
    get_icon():Icon
    get_is_backup():boolean
    get_is_hidden():boolean
    get_is_symlink():boolean
    get_modification_time(result: GLib.TimeVal):void
    get_name():string
    get_size():number
    get_sort_order():gint32
    get_symbolic_icon():Icon
    get_symlink_target():string
    has_attribute(attribute: string):boolean
    has_namespace(name_space: string):boolean
    list_attributes(name_space: string):string[]
    remove_attribute(attribute: string):void
    set_attribute(attribute: string, type: FileAttributeType, value_p: any):void
    set_attribute_boolean(attribute: string, attr_value: boolean):void
    set_attribute_byte_string(attribute: string, attr_value: string):void
    set_attribute_int32(attribute: string, attr_value: gint32):void
    set_attribute_int64(attribute: string, attr_value: number):void
    set_attribute_mask(mask: FileAttributeMatcher):void
    set_attribute_object(attribute: string, attr_value: GObject.Object):void
    set_attribute_status(attribute: string, status: FileAttributeStatus):boolean
    set_attribute_string(attribute: string, attr_value: string):void
    set_attribute_stringv(attribute: string, attr_value: string[]):void
    set_attribute_uint32(attribute: string, attr_value: guint32):void
    set_attribute_uint64(attribute: string, attr_value: number):void
    set_content_type(content_type: string):void
    set_display_name(display_name: string):void
    set_edit_name(edit_name: string):void
    set_file_type(type: FileType):void
    set_icon(icon: Icon):void
    set_is_hidden(is_hidden: boolean):void
    set_is_symlink(is_symlink: boolean):void
    set_modification_time(mtime: GLib.TimeVal):void
    set_name(name: string):void
    set_size(size: number):void
    set_sort_order(sort_order: gint32):void
    set_symbolic_icon(icon: Icon):void
    set_symlink_target(symlink_target: string):void
    unset_attribute_mask():void
  }
  export class FileInputStream extends InputStream {
    query_info(attributes: string, cancellable: Cancellable):FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    query_info_finish(result: AsyncResult):FileInfo
  }
  export class FileMonitor extends GObject.Object {
    cancel():boolean
    emit_event(child: File, other_file: File, event_type: FileMonitorEvent):void
    is_cancelled():boolean
    set_rate_limit(limit_msecs: number):void
  }
  export class FileOutputStream extends OutputStream {
    get_etag():string
    query_info(attributes: string, cancellable: Cancellable):FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    query_info_finish(result: AsyncResult):FileInfo
  }
  export class FilenameCompleter extends GObject.Object {
    get_completion_suffix(initial_text: string):string
    get_completions(initial_text: string):string[]
    set_dirs_only(dirs_only: boolean):void
  }
  export class FilterInputStream extends InputStream {
    get_base_stream():InputStream
    get_close_base_stream():boolean
    set_close_base_stream(close_base: boolean):void
  }
  export class FilterOutputStream extends OutputStream {
    get_base_stream():OutputStream
    get_close_base_stream():boolean
    set_close_base_stream(close_base: boolean):void
  }
  export class IOModule extends GObject.TypeModule {
    constructor(filename: string)
    load():void
    unload():void
  }
  export class IOStream extends GObject.Object {
    clear_pending():void
    close(cancellable: Cancellable):boolean
    close_async(io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    close_finish(result: AsyncResult):boolean
    get_input_stream():InputStream
    get_output_stream():OutputStream
    has_pending():boolean
    is_closed():boolean
    set_pending():boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
  }
  export class InetAddress extends GObject.Object {
    constructor(family: SocketFamily)
    constructor(bytes: number[], family: SocketFamily)
    constructor(string: string)
    constructor(family: SocketFamily)
    equal(other_address: InetAddress):boolean
    get_family():SocketFamily
    get_is_any():boolean
    get_is_link_local():boolean
    get_is_loopback():boolean
    get_is_mc_global():boolean
    get_is_mc_link_local():boolean
    get_is_mc_node_local():boolean
    get_is_mc_org_local():boolean
    get_is_mc_site_local():boolean
    get_is_multicast():boolean
    get_is_site_local():boolean
    get_native_size():number
    to_bytes():number
    to_string():string
  }
  export class InetAddressMask extends GObject.Object {
    constructor(addr: InetAddress, length: number)
    constructor(mask_string: string)
    equal(mask2: InetAddressMask):boolean
    get_address():InetAddress
    get_family():SocketFamily
    get_length():number
    matches(address: InetAddress):boolean
    to_string():string
  }
  export class InetSocketAddress extends SocketAddress {
    constructor(address: InetAddress, port: guint16)
    constructor(address: string, port: number)
    get_address():InetAddress
    get_flowinfo():guint32
    get_port():guint16
    get_scope_id():guint32
  }
  export class InputStream extends GObject.Object {
    clear_pending():void
    close(cancellable: Cancellable):boolean
    close_async(io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    close_finish(result: AsyncResult):boolean
    has_pending():boolean
    is_closed():boolean
    read(buffer: number[], count: number, cancellable: Cancellable):number
    read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable):boolean
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    read_all_finish(result: AsyncResult, bytes_read: number):boolean
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    read_bytes(count: number, cancellable: Cancellable):GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    read_bytes_finish(result: AsyncResult):GLib.Bytes
    read_finish(result: AsyncResult):number
    set_pending():boolean
    skip(count: number, cancellable: Cancellable):number
    skip_async(count: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    skip_finish(result: AsyncResult):number
  }
  export class ListStore extends GObject.Object {
    constructor(item_type: number)
    append(item: GObject.Object):void
    insert(position: number, item: GObject.Object):void
    insert_sorted(item: GObject.Object, compare_func: GLib.CompareDataFunc, user_data: any):number
    remove(position: number):void
    remove_all():void
    sort(compare_func: GLib.CompareDataFunc, user_data: any):void
    splice(position: number, n_removals: number, additions: GObject.Object[], n_additions: number):void
  }
  export class MemoryInputStream extends InputStream {
    constructor(bytes: GLib.Bytes)
    constructor(data: number[], len: number, destroy: GLib.DestroyNotify)
    add_bytes(bytes: GLib.Bytes):void
    add_data(data: number[], len: number, destroy: GLib.DestroyNotify):void
  }
  export class MemoryOutputStream extends OutputStream {
    constructor(data: any, size: number, realloc_function: ReallocFunc, destroy_function: GLib.DestroyNotify)
    get_data():object
    get_data_size():number
    get_size():number
    steal_as_bytes():GLib.Bytes
    steal_data():object
  }
  export class Menu extends MenuModel {
    append(label: string, detailed_action: string):void
    append_item(item: MenuItem):void
    append_section(label: string, section: MenuModel):void
    append_submenu(label: string, submenu: MenuModel):void
    freeze():void
    insert(position: number, label: string, detailed_action: string):void
    insert_item(position: number, item: MenuItem):void
    insert_section(position: number, label: string, section: MenuModel):void
    insert_submenu(position: number, label: string, submenu: MenuModel):void
    prepend(label: string, detailed_action: string):void
    prepend_item(item: MenuItem):void
    prepend_section(label: string, section: MenuModel):void
    prepend_submenu(label: string, submenu: MenuModel):void
    remove(position: number):void
    remove_all():void
  }
  export class MenuAttributeIter extends GObject.Object {
    get_name():string
    get_next(out_name: string, value: GLib.Variant):boolean
    get_value():GLib.Variant
    next():boolean
  }
  export class MenuItem extends GObject.Object {
    constructor(label: string, detailed_action: string)
    constructor(model: MenuModel, item_index: number)
    constructor(label: string, section: MenuModel)
    constructor(label: string, submenu: MenuModel)
    get_attribute(attribute: string, format_string: string, ...args: any[]):boolean
    get_attribute_value(attribute: string, expected_type: GLib.VariantType):GLib.Variant
    get_link(link: string):MenuModel
    set_action_and_target(action: string, format_string: string, ...args: any[]):void
    set_action_and_target_value(action: string, target_value: GLib.Variant):void
    set_attribute(attribute: string, format_string: string, ...args: any[]):void
    set_attribute_value(attribute: string, value: GLib.Variant):void
    set_detailed_action(detailed_action: string):void
    set_icon(icon: Icon):void
    set_label(label: string):void
    set_link(link: string, model: MenuModel):void
    set_section(section: MenuModel):void
    set_submenu(submenu: MenuModel):void
  }
  export class MenuLinkIter extends GObject.Object {
    get_name():string
    get_next(out_link: string, value: MenuModel):boolean
    get_value():MenuModel
    next():boolean
  }
  export class MenuModel extends GObject.Object {
    get_item_attribute(item_index: number, attribute: string, format_string: string, ...args: any[]):boolean
    get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType):GLib.Variant
    get_item_link(item_index: number, link: string):MenuModel
    get_n_items():number
    is_mutable():boolean
    items_changed(position: number, removed: number, added: number):void
    iterate_item_attributes(item_index: number):MenuAttributeIter
    iterate_item_links(item_index: number):MenuLinkIter
  }
  export class MountOperation extends GObject.Object {
    get_anonymous():boolean
    get_choice():number
    get_domain():string
    get_password():string
    get_password_save():PasswordSave
    get_username():string
    reply(result: MountOperationResult):void
    set_anonymous(anonymous: boolean):void
    set_choice(choice: number):void
    set_domain(domain: string):void
    set_password(password: string):void
    set_password_save(save: PasswordSave):void
    set_username(username: string):void
  }
  export class NativeVolumeMonitor extends VolumeMonitor {
  }
  export class NetworkAddress extends GObject.Object {
    constructor(hostname: string, port: guint16)
    constructor(port: guint16)
    get_hostname():string
    get_port():guint16
    get_scheme():string
  }
  export class NetworkService extends GObject.Object {
    constructor(service: string, protocol: string, domain: string)
    get_domain():string
    get_protocol():string
    get_scheme():string
    get_service():string
    set_scheme(scheme: string):void
  }
  export class Notification extends GObject.Object {
    constructor(title: string)
    add_button(label: string, detailed_action: string):void
    add_button_with_target(label: string, action: string, target_format: string, ...args: any[]):void
    add_button_with_target_value(label: string, action: string, target: GLib.Variant):void
    set_body(body: string):void
    set_default_action(detailed_action: string):void
    set_default_action_and_target(action: string, target_format: string, ...args: any[]):void
    set_default_action_and_target_value(action: string, target: GLib.Variant):void
    set_icon(icon: Icon):void
    set_priority(priority: NotificationPriority):void
    set_title(title: string):void
    set_urgent(urgent: boolean):void
  }
  export class OutputStream extends GObject.Object {
    clear_pending():void
    close(cancellable: Cancellable):boolean
    close_async(io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    close_finish(result: AsyncResult):boolean
    flush(cancellable: Cancellable):boolean
    flush_async(io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    flush_finish(result: AsyncResult):boolean
    has_pending():boolean
    is_closed():boolean
    is_closing():boolean
    printf(bytes_written: number, cancellable: Cancellable, error: GLib.Error, format: string, ...args: any[]):boolean
    set_pending():boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable):number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    splice_finish(result: AsyncResult):number
    vprintf(bytes_written: number, cancellable: Cancellable, error: GLib.Error, format: string, args: any):boolean
    write(buffer: number[], count: number, cancellable: Cancellable):number
    write_all(buffer: number[], count: number, bytes_written: number, cancellable: Cancellable):boolean
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    write_all_finish(result: AsyncResult, bytes_written: number):boolean
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable):number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    write_bytes_finish(result: AsyncResult):number
    write_finish(result: AsyncResult):number
  }
  export class Permission extends GObject.Object {
    acquire(cancellable: Cancellable):boolean
    acquire_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    acquire_finish(result: AsyncResult):boolean
    get_allowed():boolean
    get_can_acquire():boolean
    get_can_release():boolean
    impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean):void
    release(cancellable: Cancellable):boolean
    release_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    release_finish(result: AsyncResult):boolean
  }
  export class PropertyAction extends GObject.Object {
    constructor(name: string, object: GObject.Object, property_name: string)
  }
  export class ProxyAddress extends InetSocketAddress {
    constructor(inetaddr: InetAddress, port: guint16, protocol: string, dest_hostname: string, dest_port: guint16, username: string, password: string)
    get_destination_hostname():string
    get_destination_port():guint16
    get_destination_protocol():string
    get_password():string
    get_protocol():string
    get_uri():string
    get_username():string
  }
  export class ProxyAddressEnumerator extends SocketAddressEnumerator {
  }
  export class Resolver extends GObject.Object {
    lookup_by_address(address: InetAddress, cancellable: Cancellable):string
    lookup_by_address_async(address: InetAddress, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    lookup_by_address_finish(result: AsyncResult):string
    lookup_by_name(hostname: string, cancellable: Cancellable):GLib.List
    lookup_by_name_async(hostname: string, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    lookup_by_name_finish(result: AsyncResult):GLib.List
    lookup_records(rrname: string, record_type: ResolverRecordType, cancellable: Cancellable):GLib.List
    lookup_records_async(rrname: string, record_type: ResolverRecordType, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    lookup_records_finish(result: AsyncResult):GLib.List
    lookup_service(service: string, protocol: string, domain: string, cancellable: Cancellable):GLib.List
    lookup_service_async(service: string, protocol: string, domain: string, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    lookup_service_finish(result: AsyncResult):GLib.List
    set_default():void
  }
  export class Settings extends GObject.Object {
    constructor(schema_id: string)
    constructor(schema: SettingsSchema, backend: SettingsBackend, path: string)
    constructor(schema_id: string, backend: SettingsBackend)
    constructor(schema_id: string, backend: SettingsBackend, path: string)
    constructor(schema_id: string, path: string)
    apply():void
    bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags):void
    bind_with_mapping(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags, get_mapping: SettingsBindGetMapping, set_mapping: SettingsBindSetMapping, user_data: any, destroy: GLib.DestroyNotify):void
    bind_writable(key: string, object: GObject.Object, property: string, inverted: boolean):void
    create_action(key: string):Action
    delay():void
    get(key: string, format: string, ...args: any[]):void
    get_boolean(key: string):boolean
    get_child(name: string):Settings
    get_default_value(key: string):GLib.Variant
    get_double(key: string):number
    get_enum(key: string):number
    get_flags(key: string):number
    get_has_unapplied():boolean
    get_int(key: string):number
    get_mapped(key: string, mapping: SettingsGetMapping, user_data: any):object
    get_range(key: string):GLib.Variant
    get_string(key: string):string
    get_strv(key: string):string[]
    get_uint(key: string):number
    get_user_value(key: string):GLib.Variant
    get_value(key: string):GLib.Variant
    is_writable(name: string):boolean
    list_children():string[]
    list_keys():string[]
    range_check(key: string, value: GLib.Variant):boolean
    reset(key: string):void
    revert():void
    set(key: string, format: string, ...args: any[]):boolean
    set_boolean(key: string, value: boolean):boolean
    set_double(key: string, value: number):boolean
    set_enum(key: string, value: number):boolean
    set_flags(key: string, value: number):boolean
    set_int(key: string, value: number):boolean
    set_string(key: string, value: string):boolean
    set_strv(key: string, value: string[]):boolean
    set_uint(key: string, value: number):boolean
    set_value(key: string, value: GLib.Variant):boolean
  }
  export class SimpleAction extends GObject.Object {
    constructor(name: string, parameter_type: GLib.VariantType)
    constructor(name: string, parameter_type: GLib.VariantType, state: GLib.Variant)
    set_enabled(enabled: boolean):void
    set_state(value: GLib.Variant):void
    set_state_hint(state_hint: GLib.Variant):void
  }
  export class SimpleActionGroup extends GObject.Object {
    add_entries(entries: ActionEntry[], n_entries: number, user_data: any):void
    insert(action: Action):void
    lookup(action_name: string):Action
    remove(action_name: string):void
  }
  export class SimpleAsyncResult extends GObject.Object {
    constructor(source_object: GObject.Object, callback: AsyncReadyCallback, user_data: any, source_tag: any)
    constructor(source_object: GObject.Object, callback: AsyncReadyCallback, user_data: any, domain: GLib.Quark, code: number, format: string, ...args: any[])
    constructor(source_object: GObject.Object, callback: AsyncReadyCallback, user_data: any, error: GLib.Error)
    constructor(source_object: GObject.Object, callback: AsyncReadyCallback, user_data: any, error: GLib.Error)
    complete():void
    complete_in_idle():void
    get_op_res_gboolean():boolean
    get_op_res_gpointer():object
    get_op_res_gssize():number
    get_source_tag():object
    propagate_error():boolean
    run_in_thread(func: SimpleAsyncThreadFunc, io_priority: number, cancellable: Cancellable):void
    set_check_cancellable(check_cancellable: Cancellable):void
    set_error(domain: GLib.Quark, code: number, format: string, ...args: any[]):void
    set_error_va(domain: GLib.Quark, code: number, format: string, args: any):void
    set_from_error(error: GLib.Error):void
    set_handle_cancellation(handle_cancellation: boolean):void
    set_op_res_gboolean(op_res: boolean):void
    set_op_res_gpointer(op_res: any, destroy_op_res: GLib.DestroyNotify):void
    set_op_res_gssize(op_res: number):void
    take_error(error: GLib.Error):void
  }
  export class SimpleIOStream extends IOStream {
    constructor(input_stream: InputStream, output_stream: OutputStream)
  }
  export class SimplePermission extends Permission {
    constructor(allowed: boolean)
  }
  export class SimpleProxyResolver extends GObject.Object {
    set_default_proxy(default_proxy: string):void
    set_ignore_hosts(ignore_hosts: string):void
    set_uri_proxy(uri_scheme: string, proxy: string):void
  }
  export class Socket extends GObject.Object {
    constructor(family: SocketFamily, type: SocketType, protocol: SocketProtocol)
    constructor(fd: number)
    accept(cancellable: Cancellable):Socket
    bind(address: SocketAddress, allow_reuse: boolean):boolean
    check_connect_result():boolean
    close():boolean
    condition_check(condition: GLib.IOCondition):GLib.IOCondition
    condition_timed_wait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable):boolean
    condition_wait(condition: GLib.IOCondition, cancellable: Cancellable):boolean
    connect(address: SocketAddress, cancellable: Cancellable):boolean
    connection_factory_create_connection():SocketConnection
    create_source(condition: GLib.IOCondition, cancellable: Cancellable):GLib.Source
    get_available_bytes():number
    get_blocking():boolean
    get_broadcast():boolean
    get_credentials():Credentials
    get_family():SocketFamily
    get_fd():number
    get_keepalive():boolean
    get_listen_backlog():number
    get_local_address():SocketAddress
    get_multicast_loopback():boolean
    get_multicast_ttl():number
    get_option(level: number, optname: number, value: number):boolean
    get_protocol():SocketProtocol
    get_remote_address():SocketAddress
    get_socket_type():SocketType
    get_timeout():number
    get_ttl():number
    is_closed():boolean
    is_connected():boolean
    join_multicast_group(group: InetAddress, source_specific: boolean, iface: string):boolean
    leave_multicast_group(group: InetAddress, source_specific: boolean, iface: string):boolean
    listen():boolean
    receive(buffer: number[], size: number, cancellable: Cancellable):number
    receive_from(address: SocketAddress, buffer: number[], size: number, cancellable: Cancellable):number
    receive_message(address: SocketAddress, vectors: InputVector[], num_vectors: number, messages: SocketControlMessage[], num_messages: number, flags: number, cancellable: Cancellable):number
    receive_messages(messages: InputMessage, num_messages: number, flags: number, cancellable: Cancellable):number
    receive_with_blocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable):number
    send(buffer: number[], size: number, cancellable: Cancellable):number
    send_message(address: SocketAddress, vectors: OutputVector[], num_vectors: number, messages: SocketControlMessage[], num_messages: number, flags: number, cancellable: Cancellable):number
    send_messages(messages: OutputMessage[], num_messages: number, flags: number, cancellable: Cancellable):number
    send_to(address: SocketAddress, buffer: number[], size: number, cancellable: Cancellable):number
    send_with_blocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable):number
    set_blocking(blocking: boolean):void
    set_broadcast(broadcast: boolean):void
    set_keepalive(keepalive: boolean):void
    set_listen_backlog(backlog: number):void
    set_multicast_loopback(loopback: boolean):void
    set_multicast_ttl(ttl: number):void
    set_option(level: number, optname: number, value: number):boolean
    set_timeout(timeout: number):void
    set_ttl(ttl: number):void
    shutdown(shutdown_read: boolean, shutdown_write: boolean):boolean
    speaks_ipv4():boolean
  }
  export class SocketAddress extends GObject.Object {
    constructor(native: any, len: number)
    get_family():SocketFamily
    get_native_size():number
    to_native(dest: any, destlen: number):boolean
  }
  export class SocketAddressEnumerator extends GObject.Object {
    next(cancellable: Cancellable):SocketAddress
    next_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    next_finish(result: AsyncResult):SocketAddress
  }
  export class SocketClient extends GObject.Object {
    add_application_proxy(protocol: string):void
    connect(connectable: SocketConnectable, cancellable: Cancellable):SocketConnection
    connect_async(connectable: SocketConnectable, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    connect_finish(result: AsyncResult):SocketConnection
    connect_to_host(host_and_port: string, default_port: guint16, cancellable: Cancellable):SocketConnection
    connect_to_host_async(host_and_port: string, default_port: guint16, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    connect_to_host_finish(result: AsyncResult):SocketConnection
    connect_to_service(domain: string, service: string, cancellable: Cancellable):SocketConnection
    connect_to_service_async(domain: string, service: string, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    connect_to_service_finish(result: AsyncResult):SocketConnection
    connect_to_uri(uri: string, default_port: guint16, cancellable: Cancellable):SocketConnection
    connect_to_uri_async(uri: string, default_port: guint16, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    connect_to_uri_finish(result: AsyncResult):SocketConnection
    get_enable_proxy():boolean
    get_family():SocketFamily
    get_local_address():SocketAddress
    get_protocol():SocketProtocol
    get_proxy_resolver():ProxyResolver
    get_socket_type():SocketType
    get_timeout():number
    get_tls():boolean
    get_tls_validation_flags():TlsCertificateFlags
    set_enable_proxy(enable: boolean):void
    set_family(family: SocketFamily):void
    set_local_address(address: SocketAddress):void
    set_protocol(protocol: SocketProtocol):void
    set_proxy_resolver(proxy_resolver: ProxyResolver):void
    set_socket_type(type: SocketType):void
    set_timeout(timeout: number):void
    set_tls(tls: boolean):void
    set_tls_validation_flags(flags: TlsCertificateFlags):void
  }
  export class SocketConnection extends IOStream {
    connect(address: SocketAddress, cancellable: Cancellable):boolean
    connect_async(address: SocketAddress, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    connect_finish(result: AsyncResult):boolean
    get_local_address():SocketAddress
    get_remote_address():SocketAddress
    get_socket():Socket
    is_connected():boolean
  }
  export class SocketControlMessage extends GObject.Object {
    get_level():number
    get_msg_type():number
    get_size():number
    serialize(data: any):void
  }
  export class SocketListener extends GObject.Object {
    accept(source_object: GObject.Object, cancellable: Cancellable):SocketConnection
    accept_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    accept_finish(result: AsyncResult, source_object: GObject.Object):SocketConnection
    accept_socket(source_object: GObject.Object, cancellable: Cancellable):Socket
    accept_socket_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    accept_socket_finish(result: AsyncResult, source_object: GObject.Object):Socket
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object, effective_address: SocketAddress):boolean
    add_any_inet_port(source_object: GObject.Object):guint16
    add_inet_port(port: guint16, source_object: GObject.Object):boolean
    add_socket(socket: Socket, source_object: GObject.Object):boolean
    close():void
    set_backlog(listen_backlog: number):void
  }
  export class SocketService extends SocketListener {
    is_active():boolean
    start():void
    stop():void
  }
  export class Subprocess extends GObject.Object {
    constructor(flags: SubprocessFlags, error: GLib.Error, argv0: string, ...args: any[])
    constructor(argv: string[], flags: SubprocessFlags)
    communicate(stdin_buf: GLib.Bytes, cancellable: Cancellable, stdout_buf: GLib.Bytes, stderr_buf: GLib.Bytes):boolean
    communicate_async(stdin_buf: GLib.Bytes, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    communicate_finish(result: AsyncResult, stdout_buf: GLib.Bytes, stderr_buf: GLib.Bytes):boolean
    communicate_utf8(stdin_buf: string, cancellable: Cancellable, stdout_buf: string, stderr_buf: string):boolean
    communicate_utf8_async(stdin_buf: string, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    communicate_utf8_finish(result: AsyncResult, stdout_buf: string, stderr_buf: string):boolean
    force_exit():void
    get_exit_status():number
    get_identifier():string
    get_if_exited():boolean
    get_if_signaled():boolean
    get_status():number
    get_stderr_pipe():InputStream
    get_stdin_pipe():OutputStream
    get_stdout_pipe():InputStream
    get_successful():boolean
    get_term_sig():number
    send_signal(signal_num: number):void
    wait(cancellable: Cancellable):boolean
    wait_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    wait_check(cancellable: Cancellable):boolean
    wait_check_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    wait_check_finish(result: AsyncResult):boolean
    wait_finish(result: AsyncResult):boolean
  }
  export class SubprocessLauncher extends GObject.Object {
    constructor(flags: SubprocessFlags)
    getenv(variable: string):string
    set_child_setup(child_setup: GLib.SpawnChildSetupFunc, user_data: any, destroy_notify: GLib.DestroyNotify):void
    set_cwd(cwd: string):void
    set_environ(env: string):void
    set_flags(flags: SubprocessFlags):void
    set_stderr_file_path(path: string):void
    set_stdin_file_path(path: string):void
    set_stdout_file_path(path: string):void
    setenv(variable: string, value: string, overwrite: boolean):void
    spawn(error: GLib.Error, argv0: string, ...args: any[]):Subprocess
    spawnv(argv: string[]):Subprocess
    take_fd(source_fd: number, target_fd: number):void
    take_stderr_fd(fd: number):void
    take_stdin_fd(fd: number):void
    take_stdout_fd(fd: number):void
    unsetenv(variable: string):void
  }
  export class Task extends GObject.Object {
    constructor(source_object: GObject.Object, cancellable: Cancellable, callback: AsyncReadyCallback, callback_data: any)
    attach_source(source: GLib.Source, callback: GLib.SourceFunc):void
    get_cancellable():Cancellable
    get_check_cancellable():boolean
    get_completed():boolean
    get_context():GLib.MainContext
    get_priority():number
    get_return_on_cancel():boolean
    get_source_object():GObject.Object
    get_source_tag():object
    get_task_data():object
    had_error():boolean
    propagate_boolean():boolean
    propagate_int():number
    propagate_pointer():object
    return_boolean(result: boolean):void
    return_error(error: GLib.Error):void
    return_error_if_cancelled():boolean
    return_int(result: number):void
    return_new_error(domain: GLib.Quark, code: number, format: string, ...args: any[]):void
    return_pointer(result: any, result_destroy: GLib.DestroyNotify):void
    run_in_thread(task_func: TaskThreadFunc):void
    run_in_thread_sync(task_func: TaskThreadFunc):void
    set_check_cancellable(check_cancellable: boolean):void
    set_priority(priority: number):void
    set_return_on_cancel(return_on_cancel: boolean):boolean
    set_source_tag(source_tag: any):void
    set_task_data(task_data: any, task_data_destroy: GLib.DestroyNotify):void
  }
  export class TcpConnection extends SocketConnection {
    get_graceful_disconnect():boolean
    set_graceful_disconnect(graceful_disconnect: boolean):void
  }
  export class TcpWrapperConnection extends TcpConnection {
    constructor(base_io_stream: IOStream, socket: Socket)
    get_base_io_stream():IOStream
  }
  export class TestDBus extends GObject.Object {
    constructor(flags: TestDBusFlags)
    add_service_dir(path: string):void
    down():void
    get_bus_address():string
    get_flags():TestDBusFlags
    stop():void
    up():void
  }
  export class ThemedIcon extends GObject.Object {
    constructor(iconname: string)
    constructor(iconnames: string[], len: number)
    constructor(iconname: string)
    append_name(iconname: string):void
    get_names():string[]
    prepend_name(iconname: string):void
  }
  export class ThreadedSocketService extends SocketService {
    constructor(max_threads: number)
  }
  export class TlsCertificate extends GObject.Object {
    constructor(file: string)
    constructor(cert_file: string, key_file: string)
    constructor(data: string, length: number)
    get_issuer():TlsCertificate
    is_same(cert_two: TlsCertificate):boolean
    verify(identity: SocketConnectable, trusted_ca: TlsCertificate):TlsCertificateFlags
  }
  export class TlsConnection extends IOStream {
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags):boolean
    get_certificate():TlsCertificate
    get_database():TlsDatabase
    get_interaction():TlsInteraction
    get_peer_certificate():TlsCertificate
    get_peer_certificate_errors():TlsCertificateFlags
    get_rehandshake_mode():TlsRehandshakeMode
    get_require_close_notify():boolean
    get_use_system_certdb():boolean
    handshake(cancellable: Cancellable):boolean
    handshake_async(io_priority: number, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    handshake_finish(result: AsyncResult):boolean
    set_certificate(certificate: TlsCertificate):void
    set_database(database: TlsDatabase):void
    set_interaction(interaction: TlsInteraction):void
    set_rehandshake_mode(mode: TlsRehandshakeMode):void
    set_require_close_notify(require_close_notify: boolean):void
    set_use_system_certdb(use_system_certdb: boolean):void
  }
  export class TlsDatabase extends GObject.Object {
    create_certificate_handle(certificate: TlsCertificate):string
    lookup_certificate_for_handle(handle: string, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable):TlsCertificate
    lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    lookup_certificate_for_handle_finish(result: AsyncResult):TlsCertificate
    lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable):TlsCertificate
    lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    lookup_certificate_issuer_finish(result: AsyncResult):TlsCertificate
    lookup_certificates_issued_by(issuer_raw_dn: number[], interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable):GLib.List
    lookup_certificates_issued_by_async(issuer_raw_dn: number[], interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    lookup_certificates_issued_by_finish(result: AsyncResult):GLib.List
    verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable, interaction: TlsInteraction, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable):TlsCertificateFlags
    verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable, interaction: TlsInteraction, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    verify_chain_finish(result: AsyncResult):TlsCertificateFlags
  }
  export class TlsInteraction extends GObject.Object {
    ask_password(password: TlsPassword, cancellable: Cancellable):TlsInteractionResult
    ask_password_async(password: TlsPassword, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    ask_password_finish(result: AsyncResult):TlsInteractionResult
    invoke_ask_password(password: TlsPassword, cancellable: Cancellable):TlsInteractionResult
    invoke_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable):TlsInteractionResult
    request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable):TlsInteractionResult
    request_certificate_async(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    request_certificate_finish(result: AsyncResult):TlsInteractionResult
  }
  export class TlsPassword extends GObject.Object {
    constructor(flags: TlsPasswordFlags, description: string)
    get_description():string
    get_flags():TlsPasswordFlags
    get_value(length: number):number
    get_warning():string
    set_description(description: string):void
    set_flags(flags: TlsPasswordFlags):void
    set_value(value: number, length: number):void
    set_value_full(value: number, length: number, destroy: GLib.DestroyNotify):void
    set_warning(warning: string):void
  }
  export class UnixConnection extends SocketConnection {
    receive_credentials(cancellable: Cancellable):Credentials
    receive_credentials_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    receive_credentials_finish(result: AsyncResult):Credentials
    receive_fd(cancellable: Cancellable):number
    send_credentials(cancellable: Cancellable):boolean
    send_credentials_async(cancellable: Cancellable, callback: AsyncReadyCallback, user_data: any):void
    send_credentials_finish(result: AsyncResult):boolean
    send_fd(fd: number, cancellable: Cancellable):boolean
  }
  export class UnixCredentialsMessage extends SocketControlMessage {
    constructor(credentials: Credentials)
    get_credentials():Credentials
  }
  export class UnixFDList extends GObject.Object {
    constructor(fds: number[], n_fds: number)
    append(fd: number):number
    get(index_: number):number
    get_length():number
    peek_fds(length: number):number[]
    steal_fds(length: number):number[]
  }
  export class UnixFDMessage extends SocketControlMessage {
    constructor(fd_list: UnixFDList)
    append_fd(fd: number):boolean
    get_fd_list():UnixFDList
    steal_fds(length: number):number[]
  }
  export class UnixInputStream extends InputStream {
    constructor(fd: number, close_fd: boolean)
    get_close_fd():boolean
    get_fd():number
    set_close_fd(close_fd: boolean):void
  }
  export class UnixMountMonitor extends GObject.Object {
    set_rate_limit(limit_msec: number):void
  }
  export class UnixOutputStream extends OutputStream {
    constructor(fd: number, close_fd: boolean)
    get_close_fd():boolean
    get_fd():number
    set_close_fd(close_fd: boolean):void
  }
  export class UnixSocketAddress extends SocketAddress {
    constructor(path: string)
    constructor(path: number[], path_len: number)
    constructor(path: number[], path_len: number, type: UnixSocketAddressType)
    get_address_type():UnixSocketAddressType
    get_is_abstract():boolean
    get_path():string
    get_path_len():number
  }
  export class Vfs extends GObject.Object {
    get_file_for_path(path: string):File
    get_file_for_uri(uri: string):File
    get_supported_uri_schemes():string[]
    is_active():boolean
    parse_name(parse_name: string):File
  }
  export class VolumeMonitor extends GObject.Object {
    get_connected_drives():GLib.List
    get_mount_for_uuid(uuid: string):Mount
    get_mounts():GLib.List
    get_volume_for_uuid(uuid: string):Volume
    get_volumes():GLib.List
  }
  export class ZlibCompressor extends GObject.Object {
    constructor(format: ZlibCompressorFormat, level: number)
    get_file_info():FileInfo
    set_file_info(file_info: FileInfo):void
  }
  export class ZlibDecompressor extends GObject.Object {
    constructor(format: ZlibCompressorFormat)
    get_file_info():FileInfo
  }
}