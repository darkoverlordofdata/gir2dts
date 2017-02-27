/**
 * GObject.d.ts
 *
 */
declare module 'GObject' {
    export const TYPE_STRING: number

    export const PARAM_MASK:number
    export const PARAM_STATIC_STRINGS:number
    export const PARAM_USER_SHIFT:number
    export const SIGNAL_FLAGS_MASK:number
    export const SIGNAL_MATCH_MASK:number
    export const TYPE_FLAG_RESERVED_ID_BIT:any
    export const TYPE_FUNDAMENTAL_MAX:number
    export const TYPE_FUNDAMENTAL_SHIFT:number
    export const TYPE_RESERVED_BSE_FIRST:number
    export const TYPE_RESERVED_BSE_LAST:number
    export const TYPE_RESERVED_GLIB_FIRST:number
    export const TYPE_RESERVED_GLIB_LAST:number
    export const TYPE_RESERVED_USER_FIRST:number
    export const VALUE_COLLECT_FORMAT_MAX_LENGTH:number
    export const VALUE_NOCOPY_CONTENTS:number
    export function boxed_copy(boxed_type: any, src_boxed: any):any
    export function boxed_free(boxed_type: any, boxed: any):void
    export function boxed_type_register_static(name: string, boxed_copy: any, boxed_free: any):any
    export function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_BOOLEAN__FLAGS(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_STRING__OBJECT_POINTER(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__BOOLEAN(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__BOXED(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__CHAR(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__DOUBLE(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__ENUM(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__FLAGS(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__FLOAT(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__INT(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__LONG(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__OBJECT(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__PARAM(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__POINTER(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__STRING(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__UCHAR(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__UINT(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__UINT_POINTER(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__ULONG(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__VARIANT(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_VOID__VOID(closure: any, return_value: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_marshal_generic(closure: any, return_gvalue: any, n_param_values: number, param_values: any, invocation_hint: any, marshal_data: any):void
    export function cclosure_new(callback_func: any, user_data: any, destroy_data: any):any
    export function cclosure_new_object(callback_func: any, object: Object):any
    export function cclosure_new_object_swap(callback_func: any, object: Object):any
    export function cclosure_new_swap(callback_func: any, user_data: any, destroy_data: any):any
    export function clear_object(object_ptr: Object):void
    export function enum_complete_type_info(g_enum_type: any, info: any, const_values: any):void
    export function enum_get_value(enum_class: any, value: number):any
    export function enum_get_value_by_name(enum_class: any, name: string):any
    export function enum_get_value_by_nick(enum_class: any, nick: string):any
    export function enum_register_static(name: string, const_static_values: any):any
    export function flags_complete_type_info(g_flags_type: any, info: any, const_values: any):void
    export function flags_get_first_value(flags_class: any, value: number):any
    export function flags_get_value_by_name(flags_class: any, name: string):any
    export function flags_get_value_by_nick(flags_class: any, nick: string):any
    export function flags_register_static(name: string, const_static_values: any):any
    export function gtype_get_type():any
    export function param_spec_boolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags):ParamSpec
    export function param_spec_boxed(name: string, nick: string, blurb: string, boxed_type: any, flags: ParamFlags):ParamSpec
    export function param_spec_char(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: any, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_flags(name: string, nick: string, blurb: string, flags_type: any, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_float(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_gtype(name: string, nick: string, blurb: string, is_a_type: any, flags: ParamFlags):ParamSpec
    export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_int64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_long(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_object(name: string, nick: string, blurb: string, object_type: any, flags: ParamFlags):ParamSpec
    export function param_spec_override(name: string, overridden: ParamSpec):ParamSpec
    export function param_spec_param(name: string, nick: string, blurb: string, param_type: any, flags: ParamFlags):ParamSpec
    export function param_spec_pointer(name: string, nick: string, blurb: string, flags: ParamFlags):ParamSpec
    export function param_spec_pool_new(type_prefixing: boolean):any
    export function param_spec_string(name: string, nick: string, blurb: string, default_value: string, flags: ParamFlags):ParamSpec
    export function param_spec_uchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_uint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_uint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_ulong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_unichar(name: string, nick: string, blurb: string, default_value: number, flags: ParamFlags):ParamSpec
    export function param_spec_value_array(name: string, nick: string, blurb: string, element_spec: ParamSpec, flags: ParamFlags):ParamSpec
    export function param_spec_variant(name: string, nick: string, blurb: string, type: any, default_value: any, flags: ParamFlags):ParamSpec
    export function param_type_register_static(name: string, pspec_info: any):any
    export function param_value_convert(pspec: ParamSpec, src_value: any, dest_value: any, strict_validation: boolean):boolean
    export function param_value_defaults(pspec: ParamSpec, value: any):boolean
    export function param_value_set_default(pspec: ParamSpec, value: any):void
    export function param_value_validate(pspec: ParamSpec, value: any):boolean
    export function param_values_cmp(pspec: ParamSpec, value1: any, value2: any):number
    export function pointer_type_register_static(name: string):any
    export function signal_accumulator_first_wins(ihint: any, return_accu: any, handler_return: any, dummy: any):boolean
    export function signal_accumulator_true_handled(ihint: any, return_accu: any, handler_return: any, dummy: any):boolean
    export function signal_add_emission_hook(signal_id: number, detail: any, hook_func: any, hook_data: any, data_destroy: any):number
    export function signal_chain_from_overridden(instance_and_params: any[], return_value: any):void
    export function signal_chain_from_overridden_handler(instance: any, ...args: any[]):void
    export function signal_connect_closure(instance: Object, detailed_signal: string, closure: any, after: boolean):number
    export function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: any, closure: any, after: boolean):number
    export function signal_connect_data(instance: Object, detailed_signal: string, c_handler: any, data: any, destroy_data: any, connect_flags: ConnectFlags):number
    export function signal_connect_object(instance: any, detailed_signal: string, c_handler: any, gobject: any, connect_flags: ConnectFlags):number
    export function signal_emit(instance: Object, signal_id: number, detail: any, ...args: any[]):void
    export function signal_emit_by_name(instance: Object, detailed_signal: string, ...args: any[]):void
    export function signal_emit_valist(instance: any, signal_id: number, detail: any, var_args: any):void
    export function signal_emitv(instance_and_params: any[], signal_id: number, detail: any, return_value: any):void
    export function signal_get_invocation_hint(instance: Object):any
    export function signal_handler_block(instance: Object, handler_id: number):void
    export function signal_handler_disconnect(instance: Object, handler_id: number):void
    export function signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: any, closure: any, func: any, data: any):number
    export function signal_handler_is_connected(instance: Object, handler_id: number):boolean
    export function signal_handler_unblock(instance: Object, handler_id: number):void
    export function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: any, closure: any, func: any, data: any):number
    export function signal_handlers_destroy(instance: Object):void
    export function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: any, closure: any, func: any, data: any):number
    export function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: any, closure: any, func: any, data: any):number
    export function signal_has_handler_pending(instance: Object, signal_id: number, detail: any, may_be_blocked: boolean):boolean
    export function signal_list_ids(itype: any, n_ids: number):number[]
    export function signal_lookup(name: string, itype: any):number
    export function signal_name(signal_id: number):string
    export function signal_new(signal_name: string, itype: any, signal_flags: SignalFlags, class_offset: number, accumulator: any, accu_data: any, c_marshaller: any, return_type: any, n_params: number, ...args: any[]):number
    export function signal_new_class_handler(signal_name: string, itype: any, signal_flags: SignalFlags, class_handler: any, accumulator: any, accu_data: any, c_marshaller: any, return_type: any, n_params: number, ...args: any[]):number
    export function signal_new_valist(signal_name: string, itype: any, signal_flags: SignalFlags, class_closure: any, accumulator: any, accu_data: any, c_marshaller: any, return_type: any, n_params: number, args: any):number
    export function signal_newv(signal_name: string, itype: any, signal_flags: SignalFlags, class_closure: any, accumulator: any, accu_data: any, c_marshaller: any, return_type: any, n_params: number, param_types: any[]):number
    export function signal_override_class_closure(signal_id: number, instance_type: any, class_closure: any):void
    export function signal_override_class_handler(signal_name: string, instance_type: any, class_handler: any):void
    export function signal_parse_name(detailed_signal: string, itype: any, signal_id_p: number, detail_p: any, force_detail_quark: boolean):boolean
    export function signal_query(signal_id: number, query: any):void
    export function signal_remove_emission_hook(signal_id: number, hook_id: number):void
    export function signal_set_va_marshaller(signal_id: number, instance_type: any, va_marshaller: any):void
    export function signal_stop_emission(instance: Object, signal_id: number, detail: any):void
    export function signal_stop_emission_by_name(instance: Object, detailed_signal: string):void
    export function signal_type_cclosure_new(itype: any, struct_offset: number):any
    export function source_set_closure(source: any, closure: any):void
    export function source_set_dummy_callback(source: any):void
    export function strdup_value_contents(value: any):string
    export function type_add_class_cache_func(cache_data: any, cache_func: any):void
    export function type_add_class_private(class_type: any, private_size: number):void
    export function type_add_instance_private(class_type: any, private_size: number):number
    export function type_add_interface_check(check_data: any, check_func: any):void
    export function type_add_interface_dynamic(instance_type: any, interface_type: any, plugin: any):void
    export function type_add_interface_static(instance_type: any, interface_type: any, info: any):void
    export function type_check_class_cast(g_class: any, is_a_type: any):any
    export function type_check_class_is_a(g_class: any, is_a_type: any):boolean
    export function type_check_instance(instance: any):boolean
    export function type_check_instance_cast(instance: any, iface_type: any):any
    export function type_check_instance_is_a(instance: any, iface_type: any):boolean
    export function type_check_instance_is_fundamentally_a(instance: any, fundamental_type: any):boolean
    export function type_check_is_value_type(type: any):boolean
    export function type_check_value(value: any):boolean
    export function type_check_value_holds(value: any, type: any):boolean
    export function type_children(type: any, n_children: number):any[]
    export function type_class_add_private(g_class: any, private_size: number):void
    export function type_class_adjust_private_offset(g_class: any, private_size_or_offset: number):void
    export function type_class_get_instance_private_offset(g_class: any):number
    export function type_class_peek(type: any):any
    export function type_class_peek_static(type: any):any
    export function type_class_ref(type: any):any
    export function type_create_instance(type: any):any
    export function type_default_interface_peek(g_type: any):any
    export function type_default_interface_ref(g_type: any):any
    export function type_default_interface_unref(g_iface: any):void
    export function type_depth(type: any):number
    export function type_ensure(type: any):void
    export function type_free_instance(instance: any):void
    export function type_from_name(name: string):any
    export function type_fundamental(type_id: any):any
    export function type_fundamental_next():any
    export function type_get_instance_count(type: any):number
    export function type_get_plugin(type: any):any
    export function type_get_qdata(type: any, quark: any):any
    export function type_get_type_registration_serial():number
    export function type_init():void
    export function type_init_with_debug_flags(debug_flags: TypeDebugFlags):void
    export function type_interface_add_prerequisite(interface_type: any, prerequisite_type: any):void
    export function type_interface_get_plugin(instance_type: any, interface_type: any):any
    export function type_interface_peek(instance_class: any, iface_type: any):any
    export function type_interface_prerequisites(interface_type: any, n_prerequisites: number):any[]
    export function type_interfaces(type: any, n_interfaces: number):any[]
    export function type_is_a(type: any, is_a_type: any):boolean
    export function type_name(type: any):string
    export function type_name_from_class(g_class: any):string
    export function type_name_from_instance(instance: any):string
    export function type_next_base(leaf_type: any, root_type: any):any
    export function type_parent(type: any):any
    export function type_qname(type: any):any
    export function type_query(type: any, query: any):void
    export function type_register_dynamic(parent_type: any, type_name: string, plugin: any, flags: TypeFlags):any
    export function type_register_fundamental(type_id: any, type_name: string, info: any, finfo: any, flags: TypeFlags):any
    export function type_register_static(parent_type: any, type_name: string, info: any, flags: TypeFlags):any
    export function type_register_static_simple(parent_type: any, type_name: string, class_size: number, class_init: any, instance_size: number, instance_init: any, flags: TypeFlags):any
    export function type_remove_class_cache_func(cache_data: any, cache_func: any):void
    export function type_remove_interface_check(check_data: any, check_func: any):void
    export function type_set_qdata(type: any, quark: any, data: any):void
    export function type_test_flags(type: any, flags: number):boolean
    export function type_value_table_peek(type: any):any
    export function value_register_transform_func(src_type: any, dest_type: any, transform_func: any):void
    export function value_type_compatible(src_type: any, dest_type: any):boolean
    export function value_type_transformable(src_type: any, dest_type: any):boolean
    export enum BindingFlags{
        DEFAULT,
        BIDIRECTIONAL,
        SYNC_CREATE,
        INVERT_BOOLEAN,
    }
    export enum ConnectFlags{
        AFTER,
        SWAPPED,
    }
    export enum ParamFlags{
        READABLE,
        WRITABLE,
        READWRITE,
        CONSTRUCT,
        CONSTRUCT_ONLY,
        LAX_VALIDATION,
        STATIC_NAME,
        PRIVATE,
        STATIC_NICK,
        STATIC_BLURB,
        EXPLICIT_NOTIFY,
        DEPRECATED,
    }
    export enum SignalFlags{
        RUN_FIRST,
        RUN_LAST,
        RUN_CLEANUP,
        NO_RECURSE,
        DETAILED,
        ACTION,
        NO_HOOKS,
        MUST_COLLECT,
        DEPRECATED,
    }
    export enum SignalMatchType{
        ID,
        DETAIL,
        CLOSURE,
        FUNC,
        DATA,
        UNBLOCKED,
    }
    export enum TypeDebugFlags{
        NONE,
        OBJECTS,
        SIGNALS,
        INSTANCE_COUNT,
        MASK,
    }
    export enum TypeFlags{
        ABSTRACT,
        VALUE_ABSTRACT,
    }
    export enum TypeFundamentalFlags{
        CLASSED,
        INSTANTIATABLE,
        DERIVABLE,
        DEEP_DERIVABLE,
    }
    export class Binding extends Object {
        get_flags():BindingFlags
        get_source():Object
        get_source_property():string
        get_target():Object
        get_target_property():string
        unbind():void
    }
    export class InitiallyUnowned extends Object {
    }
    export class Object {
        static compat_control(what: number, data: any):number
        static connect(object: any, signal_spec: string, ...args: any[]):any
        static disconnect(object: any, signal_spec: string, ...args: any[]):void
        static get(object: any, first_property_name: string, ...args: any[]):void
        static interface_find_property(g_iface: any, property_name: string):ParamSpec
        static interface_install_property(g_iface: any, pspec: ParamSpec):void
        static interface_list_properties(g_iface: any, n_properties_p: number):ParamSpec[]
        static set(object: any, first_property_name: string, ...args: any[]):void
        constructor(config?: any)
        static new_valist(object_type: any, first_property_name: string, var_args: any):Object
        static newv(object_type: any, n_parameters: number, parameters: any[]):Object
        connect(...args: any[]):any
        get_valist(...args: any[]):void
        get_property(...args: any[]):any
        static newv(...args: any[]):Object
        replace_data(...args: any[]):any
        set_property(...args: any[]):void
        set_valist(...args: any[]):void
        add_toggle_ref(notify: any, data: any):void
        add_weak_pointer(weak_pointer_location: any):void
        bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags):Binding
        bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: any, transform_from: any, user_data: any, notify: any):Binding
        bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: any, transform_from: any):Binding
        dup_data(key: string, dup_func: any, user_data: any):any
        dup_qdata(quark: any, dup_func: any, user_data: any):any
        force_floating():void
        freeze_notify():void
        get_data(key: string):any
        get_property(property_name: string, value: any):void
        get_qdata(quark: any):any
        get_valist(first_property_name: string, var_args: any):void
        is_floating():boolean
        notify(property_name: string):void
        notify_by_pspec(pspec: ParamSpec):void
        ref():Object
        ref_sink():Object
        remove_toggle_ref(notify: any, data: any):void
        remove_weak_pointer(weak_pointer_location: any):void
        replace_data(key: string, oldval: any, newval: any, destroy: any, old_destroy: any):boolean
        replace_qdata(quark: any, oldval: any, newval: any, destroy: any, old_destroy: any):boolean
        run_dispose():void
        set_data(key: string, data: any):void
        set_data_full(key: string, data: any, destroy: any):void
        set_property(property_name: string, value: any):void
        set_qdata(quark: any, data: any):void
        set_qdata_full(quark: any, data: any, destroy: any):void
        set_valist(first_property_name: string, var_args: any):void
        steal_data(key: string):any
        steal_qdata(quark: any):any
        thaw_notify():void
        unref():void
        watch_closure(closure: any):void
        weak_ref(notify: any, data: any):void
        weak_unref(notify: any, data: any):void
    }
    export class ParamSpec {
        static internal(param_type: any, name: string, nick: string, blurb: string, flags: ParamFlags):any
        get_blurb():string
        get_default_value():any
        get_name():string
        get_name_quark():any
        get_nick():string
        get_qdata(quark: any):any
        get_redirect_target():ParamSpec
        ref():ParamSpec
        ref_sink():ParamSpec
        set_qdata(quark: any, data: any):void
        set_qdata_full(quark: any, data: any, destroy: any):void
        sink():void
        steal_qdata(quark: any):any
        unref():void
    }
    export class ParamSpecBoolean extends ParamSpec {
    }
    export class ParamSpecBoxed extends ParamSpec {
    }
    export class ParamSpecChar extends ParamSpec {
    }
    export class ParamSpecDouble extends ParamSpec {
    }
    export class ParamSpecEnum extends ParamSpec {
    }
    export class ParamSpecFlags extends ParamSpec {
    }
    export class ParamSpecFloat extends ParamSpec {
    }
    export class ParamSpecGType extends ParamSpec {
    }
    export class ParamSpecInt extends ParamSpec {
    }
    export class ParamSpecInt64 extends ParamSpec {
    }
    export class ParamSpecLong extends ParamSpec {
    }
    export class ParamSpecObject extends ParamSpec {
    }
    export class ParamSpecOverride extends ParamSpec {
    }
    export class ParamSpecParam extends ParamSpec {
    }
    export class ParamSpecPointer extends ParamSpec {
    }
    export class ParamSpecString extends ParamSpec {
    }
    export class ParamSpecUChar extends ParamSpec {
    }
    export class ParamSpecUInt extends ParamSpec {
    }
    export class ParamSpecUInt64 extends ParamSpec {
    }
    export class ParamSpecULong extends ParamSpec {
    }
    export class ParamSpecUnichar extends ParamSpec {
    }
    export class ParamSpecValueArray extends ParamSpec {
    }
    export class ParamSpecVariant extends ParamSpec {
    }
    export class TypeModule extends Object {
        add_interface(instance_type: any, interface_type: any, interface_info: any):void
        register_enum(name: string, const_static_values: any):any
        register_flags(name: string, const_static_values: any):any
        register_type(parent_type: any, type_name: string, type_info: any, flags: TypeFlags):any
        set_name(name: string):void
        unuse():void
        use():boolean
    }
}