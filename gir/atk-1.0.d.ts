/**
 * Atk.d.ts
 * 
 */
declare module "Atk" {
  export function add_focus_tracker(focus_tracker: EventListener):number
  export function add_global_event_listener(listener: GObject.SignalEmissionHook, event_type: string):number
  export function add_key_event_listener(listener: KeySnoopFunc, data: any):number
  export function attribute_set_free(attrib_set: AttributeSet):void
  export function focus_tracker_init(init: EventListenerInit):void
  export function focus_tracker_notify(object: Object):void
  export function get_binary_age():number
  export function get_default_registry():Registry
  export function get_focus_object():Object
  export function get_interface_age():number
  export function get_major_version():number
  export function get_micro_version():number
  export function get_minor_version():number
  export function get_root():Object
  export function get_toolkit_name():string
  export function get_toolkit_version():string
  export function get_version():string
  export function relation_type_for_name(name: string):RelationType
  export function relation_type_get_name(type: RelationType):string
  export function relation_type_register(name: string):RelationType
  export function remove_focus_tracker(tracker_id: number):void
  export function remove_global_event_listener(listener_id: number):void
  export function remove_key_event_listener(listener_id: number):void
  export function role_for_name(name: string):Role
  export function role_get_localized_name(role: Role):string
  export function role_get_name(role: Role):string
  export function role_register(name: string):Role
  export function state_type_for_name(name: string):StateType
  export function state_type_get_name(type: StateType):string
  export function state_type_register(name: string):StateType
  export function text_attribute_for_name(name: string):TextAttribute
  export function text_attribute_get_name(attr: TextAttribute):string
  export function text_attribute_get_value(attr: TextAttribute, index_: number):string
  export function text_attribute_register(name: string):TextAttribute
  export function text_free_ranges(ranges: TextRange[]):void
  export function value_type_get_localized_name(value_type: ValueType):string
  export function value_type_get_name(value_type: ValueType):string
  export enum CoordType{
    SCREEN,
    WINDOW,
  }
  export enum KeyEventType{
    PRESS,
    RELEASE,
    LAST_DEFINED,
  }
  export enum Layer{
    INVALID,
    BACKGROUND,
    CANVAS,
    WIDGET,
    MDI,
    POPUP,
    OVERLAY,
    WINDOW,
  }
  export enum RelationType{
    NULL,
    CONTROLLED_BY,
    CONTROLLER_FOR,
    LABEL_FOR,
    LABELLED_BY,
    MEMBER_OF,
    NODE_CHILD_OF,
    FLOWS_TO,
    FLOWS_FROM,
    SUBWINDOW_OF,
    EMBEDS,
    EMBEDDED_BY,
    POPUP_FOR,
    PARENT_WINDOW_OF,
    DESCRIBED_BY,
    DESCRIPTION_FOR,
    NODE_PARENT_OF,
    LAST_DEFINED,
  }
  export enum Role{
    INVALID,
    ACCELERATOR_LABEL,
    ALERT,
    ANIMATION,
    ARROW,
    CALENDAR,
    CANVAS,
    CHECK_BOX,
    CHECK_MENU_ITEM,
    COLOR_CHOOSER,
    COLUMN_HEADER,
    COMBO_BOX,
    DATE_EDITOR,
    DESKTOP_ICON,
    DESKTOP_FRAME,
    DIAL,
    DIALOG,
    DIRECTORY_PANE,
    DRAWING_AREA,
    FILE_CHOOSER,
    FILLER,
    FONT_CHOOSER,
    FRAME,
    GLASS_PANE,
    HTML_CONTAINER,
    ICON,
    IMAGE,
    INTERNAL_FRAME,
    LABEL,
    LAYERED_PANE,
    LIST,
    LIST_ITEM,
    MENU,
    MENU_BAR,
    MENU_ITEM,
    OPTION_PANE,
    PAGE_TAB,
    PAGE_TAB_LIST,
    PANEL,
    PASSWORD_TEXT,
    POPUP_MENU,
    PROGRESS_BAR,
    PUSH_BUTTON,
    RADIO_BUTTON,
    RADIO_MENU_ITEM,
    ROOT_PANE,
    ROW_HEADER,
    SCROLL_BAR,
    SCROLL_PANE,
    SEPARATOR,
    SLIDER,
    SPLIT_PANE,
    SPIN_BUTTON,
    STATUSBAR,
    TABLE,
    TABLE_CELL,
    TABLE_COLUMN_HEADER,
    TABLE_ROW_HEADER,
    TEAR_OFF_MENU_ITEM,
    TERMINAL,
    TEXT,
    TOGGLE_BUTTON,
    TOOL_BAR,
    TOOL_TIP,
    TREE,
    TREE_TABLE,
    UNKNOWN,
    VIEWPORT,
    WINDOW,
    HEADER,
    FOOTER,
    PARAGRAPH,
    RULER,
    APPLICATION,
    AUTOCOMPLETE,
    EDIT_BAR,
    EMBEDDED,
    ENTRY,
    CHART,
    CAPTION,
    DOCUMENT_FRAME,
    HEADING,
    PAGE,
    SECTION,
    REDUNDANT_OBJECT,
    FORM,
    LINK,
    INPUT_METHOD_WINDOW,
    TABLE_ROW,
    TREE_ITEM,
    DOCUMENT_SPREADSHEET,
    DOCUMENT_PRESENTATION,
    DOCUMENT_TEXT,
    DOCUMENT_WEB,
    DOCUMENT_EMAIL,
    COMMENT,
    LIST_BOX,
    GROUPING,
    IMAGE_MAP,
    NOTIFICATION,
    INFO_BAR,
    LEVEL_BAR,
    TITLE_BAR,
    BLOCK_QUOTE,
    AUDIO,
    VIDEO,
    DEFINITION,
    ARTICLE,
    LANDMARK,
    LOG,
    MARQUEE,
    MATH,
    RATING,
    TIMER,
    DESCRIPTION_LIST,
    DESCRIPTION_TERM,
    DESCRIPTION_VALUE,
    STATIC,
    MATH_FRACTION,
    MATH_ROOT,
    SUBSCRIPT,
    SUPERSCRIPT,
    LAST_DEFINED,
  }
  export enum StateType{
    INVALID,
    ACTIVE,
    ARMED,
    BUSY,
    CHECKED,
    DEFUNCT,
    EDITABLE,
    ENABLED,
    EXPANDABLE,
    EXPANDED,
    FOCUSABLE,
    FOCUSED,
    HORIZONTAL,
    ICONIFIED,
    MODAL,
    MULTI_LINE,
    MULTISELECTABLE,
    OPAQUE,
    PRESSED,
    RESIZABLE,
    SELECTABLE,
    SELECTED,
    SENSITIVE,
    SHOWING,
    SINGLE_LINE,
    STALE,
    TRANSIENT,
    VERTICAL,
    VISIBLE,
    MANAGES_DESCENDANTS,
    INDETERMINATE,
    TRUNCATED,
    REQUIRED,
    INVALID_ENTRY,
    SUPPORTS_AUTOCOMPLETION,
    SELECTABLE_TEXT,
    DEFAULT,
    ANIMATED,
    VISITED,
    CHECKABLE,
    HAS_POPUP,
    HAS_TOOLTIP,
    READ_ONLY,
    LAST_DEFINED,
  }
  export enum TextAttribute{
    INVALID,
    LEFT_MARGIN,
    RIGHT_MARGIN,
    INDENT,
    INVISIBLE,
    EDITABLE,
    PIXELS_ABOVE_LINES,
    PIXELS_BELOW_LINES,
    PIXELS_INSIDE_WRAP,
    BG_FULL_HEIGHT,
    RISE,
    UNDERLINE,
    STRIKETHROUGH,
    SIZE,
    SCALE,
    WEIGHT,
    LANGUAGE,
    FAMILY_NAME,
    BG_COLOR,
    FG_COLOR,
    BG_STIPPLE,
    FG_STIPPLE,
    WRAP_MODE,
    DIRECTION,
    JUSTIFICATION,
    STRETCH,
    VARIANT,
    STYLE,
    LAST_DEFINED,
  }
  export enum TextBoundary{
    CHAR,
    WORD_START,
    WORD_END,
    SENTENCE_START,
    SENTENCE_END,
    LINE_START,
    LINE_END,
  }
  export enum TextClipType{
    NONE,
    MIN,
    MAX,
    BOTH,
  }
  export enum TextGranularity{
    CHAR,
    WORD,
    SENTENCE,
    LINE,
    PARAGRAPH,
  }
  export enum ValueType{
    VERY_WEAK,
    WEAK,
    ACCEPTABLE,
    STRONG,
    VERY_STRONG,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    VERY_BAD,
    BAD,
    GOOD,
    VERY_GOOD,
    BEST,
    LAST_DEFINED,
  }
  export enum HyperlinkStateFlags{
    INLINE,
  }
  export class GObjectAccessible extends Object {
    get_object():GObject.Object
  }
  export class Hyperlink extends GObject.Object {
    get_end_index():number
    get_n_anchors():number
    get_object(i: number):Object
    get_start_index():number
    get_uri(i: number):string
    is_inline():boolean
    is_selected_link():boolean
    is_valid():boolean
  }
  export class Misc extends GObject.Object {
    threads_enter():void
    threads_leave():void
  }
  export class NoOpObject extends Object {
    constructor(obj: GObject.Object)
  }
  export class NoOpObjectFactory extends ObjectFactory {
  }
  export class Object extends GObject.Object {
    add_relationship(relationship: RelationType, target: Object):boolean
    connect_property_change_handler(handler: PropertyChangeHandler):number
    get_attributes():AttributeSet
    get_description():string
    get_index_in_parent():number
    get_layer():Layer
    get_mdi_zorder():number
    get_n_accessible_children():number
    get_name():string
    get_object_locale():string
    get_parent():Object
    get_role():Role
    initialize(data: any):void
    notify_state_change(state: State, value: boolean):void
    peek_parent():Object
    ref_accessible_child(i: number):Object
    ref_relation_set():RelationSet
    ref_state_set():StateSet
    remove_property_change_handler(handler_id: number):void
    remove_relationship(relationship: RelationType, target: Object):boolean
    set_description(description: string):void
    set_name(name: string):void
    set_parent(parent: Object):void
    set_role(role: Role):void
  }
  export class ObjectFactory extends GObject.Object {
    create_accessible(obj: GObject.Object):Object
    get_accessible_type():number
    invalidate():void
  }
  export class Plug extends Object {
    get_id():string
  }
  export class Registry extends GObject.Object {
    get_factory(type: number):ObjectFactory
    get_factory_type(type: number):number
    set_factory_type(type: number, factory_type: number):void
  }
  export class Relation extends GObject.Object {
    constructor(targets: Object[], n_targets: number, relationship: RelationType)
    add_target(target: Object):void
    get_relation_type():RelationType
    get_target():Object[]
    remove_target(target: Object):boolean
  }
  export class RelationSet extends GObject.Object {
    add(relation: Relation):void
    add_relation_by_type(relationship: RelationType, target: Object):void
    contains(relationship: RelationType):boolean
    contains_target(relationship: RelationType, target: Object):boolean
    get_n_relations():number
    get_relation(i: number):Relation
    get_relation_by_type(relationship: RelationType):Relation
    remove(relation: Relation):void
  }
  export class Socket extends Object {
    embed(plug_id: string):void
    is_occupied():boolean
  }
  export class StateSet extends GObject.Object {
    add_state(type: StateType):boolean
    add_states(types: StateType[], n_types: number):void
    and_sets(compare_set: StateSet):StateSet
    clear_states():void
    contains_state(type: StateType):boolean
    contains_states(types: StateType[], n_types: number):boolean
    is_empty():boolean
    or_sets(compare_set: StateSet):StateSet
    remove_state(type: StateType):boolean
    xor_sets(compare_set: StateSet):StateSet
  }
  export class Util extends GObject.Object {
  }
}