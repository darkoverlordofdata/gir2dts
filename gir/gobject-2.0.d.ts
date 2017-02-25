/**
 * GObject.d.ts
 * 
 */
declare module "GObject" {
  export function boxed_copy(boxed_type: number, src_boxed: any):object
  export function boxed_free(boxed_type: number, boxed: any):void
  export function boxed_type_register_static(name: string, boxed_copy: BoxedCopyFunc, boxed_free: BoxedFreeFunc):number
  export function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__BOOLEAN(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__CHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__DOUBLE(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__ENUM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__FLOAT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__INT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__LONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__OBJECT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__PARAM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__STRING(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__UCHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__UINT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__ULONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__VARIANT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_VOID__VOID(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_marshal_generic(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any):void
  export function cclosure_new(callback_func: Callback, user_data: any, destroy_data: ClosureNotify):Closure
  export function cclosure_new_object(callback_func: Callback, object: Object):Closure
  export function cclosure_new_object_swap(callback_func: Callback, object: Object):Closure
  export function cclosure_new_swap(callback_func: Callback, user_data: any, destroy_data: ClosureNotify):Closure
  export function clear_object(object_ptr: Object):void
  export function enum_complete_type_info(g_enum_type: number, info: TypeInfo, const_values: EnumValue):void
  export function enum_get_value(enum_class: EnumClass, value: number):EnumValue
  export function enum_get_value_by_name(enum_class: EnumClass, name: string):EnumValue
  export function enum_get_value_by_nick(enum_class: EnumClass, nick: string):EnumValue
  export function enum_register_static(name: string, const_static_values: EnumValue):number
  export function flags_complete_type_info(g_flags_type: number, info: TypeInfo, const_values: FlagsValue):void
  export function flags_get_first_value(flags_class: FlagsClass, value: number):FlagsValue
  export function flags_get_value_by_name(flags_class: FlagsClass, name: string):FlagsValue
  export function flags_get_value_by_nick(flags_class: FlagsClass, nick: string):FlagsValue
  export function flags_register_static(name: string, const_static_values: FlagsValue):number
  export function gtype_get_type():number
  export function param_spec_boolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags):ParamSpec
  export function param_spec_boxed(name: string, nick: string, blurb: string, boxed_type: number, flags: ParamFlags):ParamSpec
  export function param_spec_char(name: string, nick: string, blurb: string, minimum: gint8, maximum: gint8, default_value: gint8, flags: ParamFlags):ParamSpec
  export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_flags(name: string, nick: string, blurb: string, flags_type: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_float(name: string, nick: string, blurb: string, minimum: gfloat, maximum: gfloat, default_value: gfloat, flags: ParamFlags):ParamSpec
  export function param_spec_gtype(name: string, nick: string, blurb: string, is_a_type: number, flags: ParamFlags):ParamSpec
  export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_int64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_long(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_object(name: string, nick: string, blurb: string, object_type: number, flags: ParamFlags):ParamSpec
  export function param_spec_override(name: string, overridden: ParamSpec):ParamSpec
  export function param_spec_param(name: string, nick: string, blurb: string, param_type: number, flags: ParamFlags):ParamSpec
  export function param_spec_pointer(name: string, nick: string, blurb: string, flags: ParamFlags):ParamSpec
  export function param_spec_pool_new(type_prefixing: boolean):ParamSpecPool
  export function param_spec_string(name: string, nick: string, blurb: string, default_value: string, flags: ParamFlags):ParamSpec
  export function param_spec_uchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_uint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_uint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_ulong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags):ParamSpec
  export function param_spec_unichar(name: string, nick: string, blurb: string, default_value: gunichar, flags: ParamFlags):ParamSpec
  export function param_spec_value_array(name: string, nick: string, blurb: string, element_spec: ParamSpec, flags: ParamFlags):ParamSpec
  export function param_spec_variant(name: string, nick: string, blurb: string, type: GLib.VariantType, default_value: GLib.Variant, flags: ParamFlags):ParamSpec
  export function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo):number
  export function param_value_convert(pspec: ParamSpec, src_value: Value, dest_value: Value, strict_validation: boolean):boolean
  export function param_value_defaults(pspec: ParamSpec, value: Value):boolean
  export function param_value_set_default(pspec: ParamSpec, value: Value):void
  export function param_value_validate(pspec: ParamSpec, value: Value):boolean
  export function param_values_cmp(pspec: ParamSpec, value1: Value, value2: Value):number
  export function pointer_type_register_static(name: string):number
  export function signal_accumulator_first_wins(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy: any):boolean
  export function signal_accumulator_true_handled(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy: any):boolean
  export function signal_add_emission_hook(signal_id: number, detail: GLib.Quark, hook_func: SignalEmissionHook, hook_data: any, data_destroy: GLib.DestroyNotify):number
  export function signal_chain_from_overridden(instance_and_params: Value[], return_value: Value):void
  export function signal_chain_from_overridden_handler(instance: any, ...args: any[]):void
  export function signal_connect_closure(instance: Object, detailed_signal: string, closure: Closure, after: boolean):number
  export function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: GLib.Quark, closure: Closure, after: boolean):number
  export function signal_connect_data(instance: Object, detailed_signal: string, c_handler: Callback, data: any, destroy_data: ClosureNotify, connect_flags: ConnectFlags):number
  export function signal_connect_object(instance: any, detailed_signal: string, c_handler: Callback, gobject: any, connect_flags: ConnectFlags):number
  export function signal_emit(instance: Object, signal_id: number, detail: GLib.Quark, ...args: any[]):void
  export function signal_emit_by_name(instance: Object, detailed_signal: string, ...args: any[]):void
  export function signal_emit_valist(instance: any, signal_id: number, detail: GLib.Quark, var_args: any):void
  export function signal_emitv(instance_and_params: Value[], signal_id: number, detail: GLib.Quark, return_value: Value):void
  export function signal_get_invocation_hint(instance: Object):SignalInvocationHint
  export function signal_handler_block(instance: Object, handler_id: number):void
  export function signal_handler_disconnect(instance: Object, handler_id: number):void
  export function signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure, func: any, data: any):number
  export function signal_handler_is_connected(instance: Object, handler_id: number):boolean
  export function signal_handler_unblock(instance: Object, handler_id: number):void
  export function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure, func: any, data: any):number
  export function signal_handlers_destroy(instance: Object):void
  export function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure, func: any, data: any):number
  export function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure, func: any, data: any):number
  export function signal_has_handler_pending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean):boolean
  export function signal_list_ids(itype: number, n_ids: number):number[]
  export function signal_lookup(name: string, itype: number):number
  export function signal_name(signal_id: number):string
  export function signal_new(signal_name: string, itype: number, signal_flags: SignalFlags, class_offset: number, accumulator: SignalAccumulator, accu_data: any, c_marshaller: SignalCMarshaller, return_type: number, n_params: number, ...args: any[]):number
  export function signal_new_class_handler(signal_name: string, itype: number, signal_flags: SignalFlags, class_handler: Callback, accumulator: SignalAccumulator, accu_data: any, c_marshaller: SignalCMarshaller, return_type: number, n_params: number, ...args: any[]):number
  export function signal_new_valist(signal_name: string, itype: number, signal_flags: SignalFlags, class_closure: Closure, accumulator: SignalAccumulator, accu_data: any, c_marshaller: SignalCMarshaller, return_type: number, n_params: number, args: any):number
  export function signal_newv(signal_name: string, itype: number, signal_flags: SignalFlags, class_closure: Closure, accumulator: SignalAccumulator, accu_data: any, c_marshaller: SignalCMarshaller, return_type: number, n_params: number, param_types: number[]):number
  export function signal_override_class_closure(signal_id: number, instance_type: number, class_closure: Closure):void
  export function signal_override_class_handler(signal_name: string, instance_type: number, class_handler: Callback):void
  export function signal_parse_name(detailed_signal: string, itype: number, signal_id_p: number, detail_p: GLib.Quark, force_detail_quark: boolean):boolean
  export function signal_query(signal_id: number, query: SignalQuery):void
  export function signal_remove_emission_hook(signal_id: number, hook_id: number):void
  export function signal_set_va_marshaller(signal_id: number, instance_type: number, va_marshaller: SignalCVaMarshaller):void
  export function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark):void
  export function signal_stop_emission_by_name(instance: Object, detailed_signal: string):void
  export function signal_type_cclosure_new(itype: number, struct_offset: number):Closure
  export function source_set_closure(source: GLib.Source, closure: Closure):void
  export function source_set_dummy_callback(source: GLib.Source):void
  export function strdup_value_contents(value: Value):string
  export function type_add_class_cache_func(cache_data: any, cache_func: TypeClassCacheFunc):void
  export function type_add_class_private(class_type: number, private_size: number):void
  export function type_add_instance_private(class_type: number, private_size: number):number
  export function type_add_interface_check(check_data: any, check_func: TypeInterfaceCheckFunc):void
  export function type_add_interface_dynamic(instance_type: number, interface_type: number, plugin: TypePlugin):void
  export function type_add_interface_static(instance_type: number, interface_type: number, info: InterfaceInfo):void
  export function type_check_class_cast(g_class: TypeClass, is_a_type: number):TypeClass
  export function type_check_class_is_a(g_class: TypeClass, is_a_type: number):boolean
  export function type_check_instance(instance: TypeInstance):boolean
  export function type_check_instance_cast(instance: TypeInstance, iface_type: number):TypeInstance
  export function type_check_instance_is_a(instance: TypeInstance, iface_type: number):boolean
  export function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: number):boolean
  export function type_check_is_value_type(type: number):boolean
  export function type_check_value(value: Value):boolean
  export function type_check_value_holds(value: Value, type: number):boolean
  export function type_children(type: number, n_children: number):number[]
  export function type_class_add_private(g_class: any, private_size: number):void
  export function type_class_adjust_private_offset(g_class: any, private_size_or_offset: number):void
  export function type_class_get_instance_private_offset(g_class: any):number
  export function type_class_peek(type: number):TypeClass
  export function type_class_peek_static(type: number):TypeClass
  export function type_class_ref(type: number):TypeClass
  export function type_create_instance(type: number):TypeInstance
  export function type_default_interface_peek(g_type: number):TypeInterface
  export function type_default_interface_ref(g_type: number):TypeInterface
  export function type_default_interface_unref(g_iface: TypeInterface):void
  export function type_depth(type: number):number
  export function type_ensure(type: number):void
  export function type_free_instance(instance: TypeInstance):void
  export function type_from_name(name: string):number
  export function type_fundamental(type_id: number):number
  export function type_fundamental_next():number
  export function type_get_instance_count(type: number):number
  export function type_get_plugin(type: number):TypePlugin
  export function type_get_qdata(type: number, quark: GLib.Quark):object
  export function type_get_type_registration_serial():number
  export function type_init():void
  export function type_init_with_debug_flags(debug_flags: TypeDebugFlags):void
  export function type_interface_add_prerequisite(interface_type: number, prerequisite_type: number):void
  export function type_interface_get_plugin(instance_type: number, interface_type: number):TypePlugin
  export function type_interface_peek(instance_class: TypeClass, iface_type: number):TypeInterface
  export function type_interface_prerequisites(interface_type: number, n_prerequisites: number):number[]
  export function type_interfaces(type: number, n_interfaces: number):number[]
  export function type_is_a(type: number, is_a_type: number):boolean
  export function type_name(type: number):string
  export function type_name_from_class(g_class: TypeClass):string
  export function type_name_from_instance(instance: TypeInstance):string
  export function type_next_base(leaf_type: number, root_type: number):number
  export function type_parent(type: number):number
  export function type_qname(type: number):GLib.Quark
  export function type_query(type: number, query: TypeQuery):void
  export function type_register_dynamic(parent_type: number, type_name: string, plugin: TypePlugin, flags: TypeFlags):number
  export function type_register_fundamental(type_id: number, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags):number
  export function type_register_static(parent_type: number, type_name: string, info: TypeInfo, flags: TypeFlags):number
  export function type_register_static_simple(parent_type: number, type_name: string, class_size: number, class_init: ClassInitFunc, instance_size: number, instance_init: InstanceInitFunc, flags: TypeFlags):number
  export function type_remove_class_cache_func(cache_data: any, cache_func: TypeClassCacheFunc):void
  export function type_remove_interface_check(check_data: any, check_func: TypeInterfaceCheckFunc):void
  export function type_set_qdata(type: number, quark: GLib.Quark, data: any):void
  export function type_test_flags(type: number, flags: number):boolean
  export function type_value_table_peek(type: number):TypeValueTable
  export function value_register_transform_func(src_type: number, dest_type: number, transform_func: ValueTransform):void
  export function value_type_compatible(src_type: number, dest_type: number):boolean
  export function value_type_transformable(src_type: number, dest_type: number):boolean
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
    constructor(object_type: number, first_property_name: string, var_args: any)
    constructor(object_type: number, n_parameters: number, parameters: Parameter[])
    add_toggle_ref(notify: ToggleNotify, data: any):void
    add_weak_pointer(weak_pointer_location: any):void
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags):Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc, transform_from: BindingTransformFunc, user_data: any, notify: GLib.DestroyNotify):Binding
    bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure):Binding
    dup_data(key: string, dup_func: GLib.DuplicateFunc, user_data: any):object
    dup_qdata(quark: GLib.Quark, dup_func: GLib.DuplicateFunc, user_data: any):object
    force_floating():void
    freeze_notify():void
    get_data(key: string):object
    get_property(property_name: string, value: Value):void
    get_qdata(quark: GLib.Quark):object
    get_valist(first_property_name: string, var_args: any):void
    is_floating():boolean
    notify(property_name: string):void
    notify_by_pspec(pspec: ParamSpec):void
    ref():Object
    ref_sink():Object
    remove_toggle_ref(notify: ToggleNotify, data: any):void
    remove_weak_pointer(weak_pointer_location: any):void
    replace_data(key: string, oldval: any, newval: any, destroy: GLib.DestroyNotify, old_destroy: GLib.DestroyNotify):boolean
    replace_qdata(quark: GLib.Quark, oldval: any, newval: any, destroy: GLib.DestroyNotify, old_destroy: GLib.DestroyNotify):boolean
    run_dispose():void
    set_data(key: string, data: any):void
    set_data_full(key: string, data: any, destroy: GLib.DestroyNotify):void
    set_property(property_name: string, value: Value):void
    set_qdata(quark: GLib.Quark, data: any):void
    set_qdata_full(quark: GLib.Quark, data: any, destroy: GLib.DestroyNotify):void
    set_valist(first_property_name: string, var_args: any):void
    steal_data(key: string):object
    steal_qdata(quark: GLib.Quark):object
    thaw_notify():void
    unref():void
    watch_closure(closure: Closure):void
    weak_ref(notify: WeakNotify, data: any):void
    weak_unref(notify: WeakNotify, data: any):void
  }
  export class ParamSpec {
    get_blurb():string
    get_default_value():Value
    get_name():string
    get_name_quark():GLib.Quark
    get_nick():string
    get_qdata(quark: GLib.Quark):object
    get_redirect_target():ParamSpec
    ref():ParamSpec
    ref_sink():ParamSpec
    set_qdata(quark: GLib.Quark, data: any):void
    set_qdata_full(quark: GLib.Quark, data: any, destroy: GLib.DestroyNotify):void
    sink():void
    steal_qdata(quark: GLib.Quark):object
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
    add_interface(instance_type: number, interface_type: number, interface_info: InterfaceInfo):void
    register_enum(name: string, const_static_values: EnumValue):number
    register_flags(name: string, const_static_values: FlagsValue):number
    register_type(parent_type: number, type_name: string, type_info: TypeInfo, flags: TypeFlags):number
    set_name(name: string):void
    unuse():void
    use():boolean
  }
}