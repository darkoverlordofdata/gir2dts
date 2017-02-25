/**
 * gio.d.ts
 * 
 * Gio 2.0 declarations for typescript
 */
declare module "Gio" {
    import * as GObject from "GObject"
    import * as GLib from "GLib"

    export function action_name_is_valid(action_name: string):boolean
    export function action_parse_detailed_name(detailed_name: string, action_name: string, target_value: any):boolean
    export function action_print_detailed_name(action_name: string, target_value: any):string
    export function app_info_create_from_commandline(commandline: string, application_name: string, flags: AppInfoCreateFlags):any
    export function app_info_get_all():any
    export function app_info_get_all_for_type(content_type: string):any
    export function app_info_get_default_for_type(content_type: string, must_support_uris: boolean):any
    export function app_info_get_default_for_uri_scheme(uri_scheme: string):any
    export function app_info_get_fallback_for_type(content_type: string):any
    export function app_info_get_recommended_for_type(content_type: string):any
    export function app_info_launch_default_for_uri(uri: string, launch_context: AppLaunchContext):boolean
    export function app_info_reset_type_associations(content_type: string):void
    export function async_initable_newv_async(object_type: number, n_parameters: number, parameters: any, io_priority: number, cancellable: Cancellable, callback: any, user_data: any):void
    export function bus_get(bus_type: BusType, cancellable: Cancellable, callback: any, user_data: any):void
    export function bus_get_finish(res: any):any
    export function bus_get_sync(bus_type: BusType, cancellable: Cancellable):any
    export function bus_own_name(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_handler: any, name_acquired_handler: any, name_lost_handler: any, user_data: any, user_data_free_func: any):number
    export function bus_own_name_on_connection(connection: any, name: string, flags: BusNameOwnerFlags, name_acquired_handler: any, name_lost_handler: any, user_data: any, user_data_free_func: any):number
    export function bus_own_name_on_connection_with_closures(connection: any, name: string, flags: BusNameOwnerFlags, name_acquired_closure: any, name_lost_closure: any):number
    export function bus_own_name_with_closures(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_closure: any, name_acquired_closure: any, name_lost_closure: any):number
    export function bus_unown_name(owner_id: number):void
    export function bus_unwatch_name(watcher_id: number):void
    export function bus_watch_name(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_handler: any, name_vanished_handler: any, user_data: any, user_data_free_func: any):number
    export function bus_watch_name_on_connection(connection: any, name: string, flags: BusNameWatcherFlags, name_appeared_handler: any, name_vanished_handler: any, user_data: any, user_data_free_func: any):number
    export function bus_watch_name_on_connection_with_closures(connection: any, name: string, flags: BusNameWatcherFlags, name_appeared_closure: any, name_vanished_closure: any):number
    export function bus_watch_name_with_closures(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_closure: any, name_vanished_closure: any):number
    export function content_type_can_be_executable(type: string):boolean
    export function content_type_equals(type1: string, type2: string):boolean
    export function content_type_from_mime_type(mime_type: string):string
    export function content_type_get_description(type: string):string
    export function content_type_get_generic_icon_name(type: string):string
    export function content_type_get_icon(type: string):any
    export function content_type_get_mime_type(type: string):string
    export function content_type_get_symbolic_icon(type: string):any
    export function content_type_guess(filename: string, data: number[], data_size: number, result_uncertain: boolean):string
    export function content_type_guess_for_tree(root: File):string[]
    export function content_type_is_a(type: string, supertype: string):boolean
    export function content_type_is_unknown(type: string):boolean
    export function content_types_get_registered():any
    export function dbus_address_escape_value(string: string):string
    export function dbus_address_get_for_bus_sync(bus_type: BusType, cancellable: Cancellable):string
    export function dbus_address_get_stream(address: string, cancellable: Cancellable, callback: any, user_data: any):void
    export function dbus_address_get_stream_finish(res: any, out_guid: string):any
    export function dbus_address_get_stream_sync(address: string, out_guid: string, cancellable: Cancellable):any
    export function dbus_annotation_info_lookup(annotations: any[], name: string):string
    export function dbus_error_encode_gerror(error: any):string
    export function dbus_error_get_remote_error(error: any):string
    export function dbus_error_is_remote_error(error: any):boolean
    export function dbus_error_new_for_dbus_error(dbus_error_name: string, dbus_error_message: string):any
    export function dbus_error_quark():any
    export function dbus_error_register_error(error_domain: any, error_code: number, dbus_error_name: string):boolean
    export function dbus_error_register_error_domain(error_domain_quark_name: string, quark_volatile: number, entries: any, num_entries: number):void
    export function dbus_error_strip_remote_error(error: any):boolean
    export function dbus_error_unregister_error(error_domain: any, error_code: number, dbus_error_name: string):boolean
    export function dbus_generate_guid():string
    export function dbus_gvalue_to_gvariant(gvalue: any, type: any):any
    export function dbus_gvariant_to_gvalue(value: any, out_gvalue: any):void
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
    export function file_new_tmp(tmpl: string, iostream: any):File
    export function file_parse_name(parse_name: string):File
    export function icon_deserialize(value: any):any
    export function icon_hash(icon: any):number
    export function icon_new_for_string(str: string):any
    export function initable_newv(object_type: number, n_parameters: number, parameters: any[], cancellable: Cancellable):GObject.Object
    export function io_error_from_errno(err_no: number):IOErrorEnum
    export function io_error_quark():any
    export function io_extension_point_implement(extension_point_name: string, type: number, extension_name: string, priority: number):any
    export function io_extension_point_lookup(name: string):any
    export function io_extension_point_register(name: string):any
    export function io_modules_load_all_in_directory(dirname: string):any
    export function io_modules_load_all_in_directory_with_scope(dirname: string, scope: any):any
    export function io_modules_scan_all_in_directory(dirname: string):void
    export function io_modules_scan_all_in_directory_with_scope(dirname: string, scope: any):void
    export function io_scheduler_cancel_all_jobs():void
    export function io_scheduler_push_job(job_func: any, user_data: any, notify: any, io_priority: number, cancellable: Cancellable):void
    export function network_monitor_get_default():any
    export function networking_init():void
    export function pollable_source_new(pollable_stream: GObject.Object):any
    export function pollable_source_new_full(pollable_stream: GObject.Object, child_source: any, cancellable: Cancellable):any
    export function pollable_stream_read(stream: any, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable):number
    export function pollable_stream_write(stream: any, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable):number
    export function pollable_stream_write_all(stream: any, buffer: number[], count: number, blocking: boolean, bytes_written: number, cancellable: Cancellable):boolean
    export function proxy_get_default_for_protocol(protocol: string):any
    export function proxy_resolver_get_default():any
    export function resolver_error_quark():any
    export function resource_error_quark():any
    export function resource_load(filename: string):any
    export function resources_enumerate_children(path: string, lookup_flags: ResourceLookupFlags):string[]
    export function resources_get_info(path: string, lookup_flags: ResourceLookupFlags, size: number, flags: number):boolean
    export function resources_lookup_data(path: string, lookup_flags: ResourceLookupFlags):any
    export function resources_open_stream(path: string, lookup_flags: ResourceLookupFlags):any
    export function resources_register(resource: any):void
    export function resources_unregister(resource: any):void
    export function settings_schema_source_get_default():any
    export function simple_async_report_error_in_idle(object: GObject.Object, callback: any, user_data: any, domain: any, code: number, format: string, ...args: any[]):void
    export function simple_async_report_gerror_in_idle(object: GObject.Object, callback: any, user_data: any, error: any):void
    export function simple_async_report_take_gerror_in_idle(object: GObject.Object, callback: any, user_data: any, error: any):void
    export function srv_target_list_sort(targets: any):any
    export function tls_backend_get_default():any
    export function tls_client_connection_new(base_io_stream: any, server_identity: any):any
    export function tls_error_quark():any
    export function tls_file_database_new(anchors: string):any
    export function tls_server_connection_new(base_io_stream: any, certificate: any):any
    export function unix_is_mount_path_system_internal(mount_path: string):boolean
    export function unix_mount_at(mount_path: string, time_read: number):any
    export function unix_mount_compare(mount1: any, mount2: any):number
    export function unix_mount_free(mount_entry: any):void
    export function unix_mount_get_device_path(mount_entry: any):string
    export function unix_mount_get_fs_type(mount_entry: any):string
    export function unix_mount_get_mount_path(mount_entry: any):string
    export function unix_mount_guess_can_eject(mount_entry: any):boolean
    export function unix_mount_guess_icon(mount_entry: any):any
    export function unix_mount_guess_name(mount_entry: any):string
    export function unix_mount_guess_should_display(mount_entry: any):boolean
    export function unix_mount_guess_symbolic_icon(mount_entry: any):any
    export function unix_mount_is_readonly(mount_entry: any):boolean
    export function unix_mount_is_system_internal(mount_entry: any):boolean
    export function unix_mount_points_changed_since(time: number):boolean
    export function unix_mount_points_get(time_read: number):any
    export function unix_mounts_changed_since(time: number):boolean
    export function unix_mounts_get(time_read: number):any
    
    export class AppLaunchContext extends GObject.Object {
      get_display(info: any, files: any):string
      get_environment():string[]
      get_startup_notify_id(info: any, files: any):string
      launch_failed(startup_notify_id: string):void
      setenv(variable: string, value: string):void
      unsetenv(variable: string):void
    }
    export class Application extends GObject.Object {
        constructor(application_id: string, flags: ApplicationFlags)
        activate():void
        add_main_option(long_name: string, short_name: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, arg_description: string):void
        add_main_option_entries(entries: any[]):void
        add_option_group(group: any):void
        bind_busy_property(object: GObject.Object, property: string):void
        get_application_id():string
        get_dbus_connection():any
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
        set_action_group(action_group: any):void
        set_application_id(application_id: string):void
        set_default():void
        set_flags(flags: ApplicationFlags):void
        set_inactivity_timeout(inactivity_timeout: number):void
        set_resource_base_path(resource_path: string):void
        unbind_busy_property(object: GObject.Object, property: string):void
        unmark_busy():void
        withdraw_notification(id: string):void
    }
    export class Cancellable extends GObject.Object {
        cancel():void
        connect(...args: any[]):number
        disconnect(handler_id: number):void
        get_fd():number
        is_cancelled():boolean
        make_pollfd(pollfd: any):boolean
        pop_current():void
        push_current():void
        release_fd():void
        reset():void
        set_error_if_cancelled():boolean
        source_new():any
    }
    export class File extends GObject.Object {
        query_exists(obj:any): boolean
        load_contents(obj:any): any
        static new_for_path(path: string): File
    }
    // export class Menu extends GObject.Object {
    //     append(label: string, action: string)
    // }
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
        get_next(out_name: string, value: any):boolean
        get_value():any
        next():boolean
    }
    export class MenuItem extends GObject.Object {
        constructor(label: string, detailed_action: string)
        constructor(model: MenuModel, item_index: number)
        constructor(label: string, section: MenuModel)
        constructor(label: string, submenu: MenuModel)
        get_attribute(attribute: string, format_string: string, ...args: any[]):boolean
        get_attribute_value(attribute: string, expected_type: any):any
        get_link(link: string):MenuModel
        set_action_and_target(action: string, format_string: string, ...args: any[]):void
        set_action_and_target_value(action: string, target_value: any):void
        set_attribute(attribute: string, format_string: string, ...args: any[]):void
        set_attribute_value(attribute: string, value: any):void
        set_detailed_action(detailed_action: string):void
        set_icon(icon: any):void
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
        get_item_attribute_value(item_index: number, attribute: string, expected_type: any):any
        get_item_link(item_index: number, link: string):MenuModel
        get_n_items():number
        is_mutable():boolean
        items_changed(position: number, removed: number, added: number):void
        iterate_item_attributes(item_index: number):MenuAttributeIter
        iterate_item_links(item_index: number):MenuLinkIter
    }
    export class Notification extends GObject.Object {
        constructor(title: string)
        add_button(label: string, detailed_action: string):void
        add_button_with_target(label: string, action: string, target_format: string, ...args: any[]):void
        add_button_with_target_value(label: string, action: string, target: any):void
        set_body(body: string):void
        set_default_action(detailed_action: string):void
        set_default_action_and_target(action: string, target_format: string, ...args: any[]):void
        set_default_action_and_target_value(action: string, target: any):void
        set_icon(icon: any):void
        set_priority(priority: NotificationPriority):void
        set_title(title: string):void
        set_urgent(urgent: boolean):void
    }
    // export class SimpleAction extends GObject.Object {
    //     constructor(config: any)
    // }
    export class SimpleAction extends GObject.Object {
        constructor(config?: any)
        set_enabled(enabled: boolean):void
        set_state(value: any):void
        set_state_hint(state_hint: any):void
    }
    // export enum ApplicationFlags {
    //     FLAGS_NONE
    // }
    export function file_new_for_path(path: string): File

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
      
}

