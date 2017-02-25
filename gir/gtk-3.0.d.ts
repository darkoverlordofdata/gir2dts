/**
 * Gtk.d.ts
 * 
 */
declare module "Gtk" {
  export function accel_groups_activate(object: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType):boolean
  export function accel_groups_from_object(object: GObject.Object):GLib.SList
  export function accelerator_get_default_mod_mask():Gdk.ModifierType
  export function accelerator_get_label(accelerator_key: number, accelerator_mods: Gdk.ModifierType):string
  export function accelerator_get_label_with_keycode(display: Gdk.Display, accelerator_key: number, keycode: number, accelerator_mods: Gdk.ModifierType):string
  export function accelerator_name(accelerator_key: number, accelerator_mods: Gdk.ModifierType):string
  export function accelerator_name_with_keycode(display: Gdk.Display, accelerator_key: number, keycode: number, accelerator_mods: Gdk.ModifierType):string
  export function accelerator_parse(accelerator: string, accelerator_key: number, accelerator_mods: Gdk.ModifierType):void
  export function accelerator_parse_with_keycode(accelerator: string, accelerator_key: number, accelerator_codes: number[], accelerator_mods: Gdk.ModifierType):void
  export function accelerator_set_default_mod_mask(default_mod_mask: Gdk.ModifierType):void
  export function accelerator_valid(keyval: number, modifiers: Gdk.ModifierType):boolean
  export function alternative_dialog_button_order(screen: Gdk.Screen):boolean
  export function binding_entry_add_signal_from_string(binding_set: BindingSet, signal_desc: string):GLib.TokenType
  export function binding_entry_add_signall(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, binding_args: GLib.SList):void
  export function binding_entry_remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType):void
  export function binding_entry_skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType):void
  export function binding_set_by_class(object_class: any):BindingSet
  export function binding_set_find(set_name: string):BindingSet
  export function binding_set_new(set_name: string):BindingSet
  export function bindings_activate(object: GObject.Object, keyval: number, modifiers: Gdk.ModifierType):boolean
  export function bindings_activate_event(object: GObject.Object, event: Gdk.EventKey):boolean
  export function builder_error_quark():GLib.Quark
  export function cairo_should_draw_window(cr: cairo.Context, window: Gdk.Window):boolean
  export function cairo_transform_to_window(cr: cairo.Context, widget: Widget, window: Gdk.Window):void
  export function check_version(required_major: number, required_minor: number, required_micro: number):string
  export function css_provider_error_quark():GLib.Quark
  export function device_grab_add(widget: Widget, device: Gdk.Device, block_others: boolean):void
  export function device_grab_remove(widget: Widget, device: Gdk.Device):void
  export function disable_setlocale():void
  export function distribute_natural_allocation(extra_space: number, n_requested_sizes: number, sizes: RequestedSize):number
  export function drag_cancel(context: Gdk.DragContext):void
  export function drag_finish(context: Gdk.DragContext, success: boolean, del: boolean, time_: guint32):void
  export function drag_get_source_widget(context: Gdk.DragContext):Widget
  export function drag_set_icon_default(context: Gdk.DragContext):void
  export function drag_set_icon_gicon(context: Gdk.DragContext, icon: Gio.Icon, hot_x: number, hot_y: number):void
  export function drag_set_icon_name(context: Gdk.DragContext, icon_name: string, hot_x: number, hot_y: number):void
  export function drag_set_icon_pixbuf(context: Gdk.DragContext, pixbuf: GdkPixbuf.Pixbuf, hot_x: number, hot_y: number):void
  export function drag_set_icon_stock(context: Gdk.DragContext, stock_id: string, hot_x: number, hot_y: number):void
  export function drag_set_icon_surface(context: Gdk.DragContext, surface: cairo.Surface):void
  export function drag_set_icon_widget(context: Gdk.DragContext, widget: Widget, hot_x: number, hot_y: number):void
  export function draw_insertion_cursor(widget: Widget, cr: cairo.Context, location: Gdk.Rectangle, is_primary: boolean, direction: TextDirection, draw_arrow: boolean):void
  export function events_pending():boolean
  export function _false():boolean
  export function file_chooser_error_quark():GLib.Quark
  export function get_binary_age():number
  export function get_current_event():Gdk.Event
  export function get_current_event_device():Gdk.Device
  export function get_current_event_state(state: Gdk.ModifierType):boolean
  export function get_current_event_time():guint32
  export function get_debug_flags():number
  export function get_default_language():Pango.Language
  export function get_event_widget(event: Gdk.Event):Widget
  export function get_interface_age():number
  export function get_locale_direction():TextDirection
  export function get_major_version():number
  export function get_micro_version():number
  export function get_minor_version():number
  export function get_option_group(open_default_display: boolean):GLib.OptionGroup
  export function grab_get_current():Widget
  export function icon_size_from_name(name: string):number
  export function icon_size_get_name(size: number):string
  export function icon_size_lookup(size: number, width: number, height: number):boolean
  export function icon_size_lookup_for_settings(settings: Settings, size: number, width: number, height: number):boolean
  export function icon_size_register(name: string, width: number, height: number):number
  export function icon_size_register_alias(alias: string, target: number):void
  export function icon_theme_error_quark():GLib.Quark
  export function init(argc: number, argv: string[]):void
  export function init_check(argc: number, argv: string[]):boolean
  export function init_with_args(argc: number, argv: string[], parameter_string: string, entries: GLib.OptionEntry[], translation_domain: string):boolean
  export function key_snooper_install(snooper: KeySnoopFunc, func_data: any):number
  export function key_snooper_remove(snooper_handler_id: number):void
  export function main():void
  export function main_do_event(event: Gdk.Event):void
  export function main_iteration():boolean
  export function main_iteration_do(blocking: boolean):boolean
  export function main_level():number
  export function main_quit():void
  export function paint_arrow(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number):void
  export function paint_box(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
  export function paint_box_gap(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number):void
  export function paint_check(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
  export function paint_diamond(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
  export function paint_expander(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, expander_style: ExpanderStyle):void
  export function paint_extension(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType):void
  export function paint_flat_box(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
  export function paint_focus(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
  export function paint_handle(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation):void
  export function paint_hline(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x1: number, x2: number, y: number):void
  export function paint_layout(style: Style, cr: cairo.Context, state_type: StateType, use_text: boolean, widget: Widget, detail: string, x: number, y: number, layout: Pango.Layout):void
  export function paint_option(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
  export function paint_resize_grip(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number):void
  export function paint_shadow(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
  export function paint_shadow_gap(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number):void
  export function paint_slider(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation):void
  export function paint_spinner(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, step: number, x: number, y: number, width: number, height: number):void
  export function paint_tab(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
  export function paint_vline(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number):void
  export function paper_size_get_default():string
  export function paper_size_get_paper_sizes(include_custom: boolean):GLib.List
  export function parse_args(argc: number, argv: string[]):boolean
  export function print_error_quark():GLib.Quark
  export function print_run_page_setup_dialog(parent: Window, page_setup: PageSetup, settings: PrintSettings):PageSetup
  export function print_run_page_setup_dialog_async(parent: Window, page_setup: PageSetup, settings: PrintSettings, done_cb: PageSetupDoneFunc, data: any):void
  export function propagate_event(widget: Widget, event: Gdk.Event):void
  export function rc_add_default_file(filename: filename):void
  export function rc_find_module_in_path(module_file: string):filename
  export function rc_find_pixmap_in_path(settings: Settings, scanner: GLib.Scanner, pixmap_file: string):filename
  export function rc_get_default_files():filename[]
  export function rc_get_im_module_file():filename
  export function rc_get_im_module_path():filename
  export function rc_get_module_dir():filename
  export function rc_get_style(widget: Widget):Style
  export function rc_get_style_by_paths(settings: Settings, widget_path: string, class_path: string, type: number):Style
  export function rc_get_theme_dir():string
  export function rc_parse(filename: string):void
  export function rc_parse_color(scanner: GLib.Scanner, color: Gdk.Color):number
  export function rc_parse_color_full(scanner: GLib.Scanner, style: RcStyle, color: Gdk.Color):number
  export function rc_parse_priority(scanner: GLib.Scanner, priority: PathPriorityType):number
  export function rc_parse_state(scanner: GLib.Scanner, state: StateType):number
  export function rc_parse_string(rc_string: string):void
  export function rc_property_parse_border(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value):boolean
  export function rc_property_parse_color(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value):boolean
  export function rc_property_parse_enum(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value):boolean
  export function rc_property_parse_flags(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value):boolean
  export function rc_property_parse_requisition(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value):boolean
  export function rc_reparse_all():boolean
  export function rc_reparse_all_for_settings(settings: Settings, force_load: boolean):boolean
  export function rc_reset_styles(settings: Settings):void
  export function rc_scanner_new():GLib.Scanner
  export function rc_set_default_files(filenames: filename[]):void
  export function recent_chooser_error_quark():GLib.Quark
  export function recent_manager_error_quark():GLib.Quark
  export function render_activity(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number):void
  export function render_arrow(context: StyleContext, cr: cairo.Context, angle: number, x: number, y: number, size: number):void
  export function render_background(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number):void
  export function render_check(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number):void
  export function render_expander(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number):void
  export function render_extension(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType):void
  export function render_focus(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number):void
  export function render_frame(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number):void
  export function render_frame_gap(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType, xy0_gap: number, xy1_gap: number):void
  export function render_handle(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number):void
  export function render_icon(context: StyleContext, cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number):void
  export function render_icon_pixbuf(context: StyleContext, source: IconSource, size: number):GdkPixbuf.Pixbuf
  export function render_icon_surface(context: StyleContext, cr: cairo.Context, surface: cairo.Surface, x: number, y: number):void
  export function render_insertion_cursor(context: StyleContext, cr: cairo.Context, x: number, y: number, layout: Pango.Layout, index: number, direction: Pango.Direction):void
  export function render_layout(context: StyleContext, cr: cairo.Context, x: number, y: number, layout: Pango.Layout):void
  export function render_line(context: StyleContext, cr: cairo.Context, x0: number, y0: number, x1: number, y1: number):void
  export function render_option(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number):void
  export function render_slider(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, orientation: Orientation):void
  export function rgb_to_hsv(r: number, g: number, b: number, h: number, s: number, v: number):void
  export function selection_add_target(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, info: number):void
  export function selection_add_targets(widget: Widget, selection: Gdk.Atom, targets: TargetEntry[], ntargets: number):void
  export function selection_clear_targets(widget: Widget, selection: Gdk.Atom):void
  export function selection_convert(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, time_: guint32):boolean
  export function selection_owner_set(widget: Widget, selection: Gdk.Atom, time_: guint32):boolean
  export function selection_owner_set_for_display(display: Gdk.Display, widget: Widget, selection: Gdk.Atom, time_: guint32):boolean
  export function selection_remove_all(widget: Widget):void
  export function set_debug_flags(flags: number):void
  export function show_about_dialog(parent: Window, first_property_name: string, ...args: any[]):void
  export function show_uri(screen: Gdk.Screen, uri: string, timestamp: guint32):boolean
  export function stock_add(items: StockItem[], n_items: number):void
  export function stock_add_static(items: StockItem[], n_items: number):void
  export function stock_list_ids():GLib.SList
  export function stock_lookup(stock_id: string, item: StockItem):boolean
  export function stock_set_translate_func(domain: string, func: TranslateFunc, data: any, notify: GLib.DestroyNotify):void
  export function target_table_free(targets: TargetEntry[], n_targets: number):void
  export function target_table_new_from_list(list: TargetList, n_targets: number):TargetEntry[]
  export function targets_include_image(targets: Gdk.Atom[], n_targets: number, writable: boolean):boolean
  export function targets_include_rich_text(targets: Gdk.Atom[], n_targets: number, buffer: TextBuffer):boolean
  export function targets_include_text(targets: Gdk.Atom[], n_targets: number):boolean
  export function targets_include_uri(targets: Gdk.Atom[], n_targets: number):boolean
  export function test_create_simple_window(window_title: string, dialog_text: string):Widget
  export function test_create_widget(widget_type: number, first_property_name: string, ...args: any[]):Widget
  export function test_display_button_window(window_title: string, dialog_text: string, ...args: any[]):Widget
  export function test_find_label(widget: Widget, label_pattern: string):Widget
  export function test_find_sibling(base_widget: Widget, widget_type: number):Widget
  export function test_find_widget(widget: Widget, label_pattern: string, widget_type: number):Widget
  export function test_init(argcp: number, argvp: string[], ...args: any[]):void
  export function test_list_all_types(n_types: number):number[]
  export function test_register_all_types():void
  export function test_slider_get_value(widget: Widget):number
  export function test_slider_set_perc(widget: Widget, percentage: number):void
  export function test_spin_button_click(spinner: SpinButton, button: number, upwards: boolean):boolean
  export function test_text_get(widget: Widget):string
  export function test_text_set(widget: Widget, string: string):void
  export function test_widget_click(widget: Widget, button: number, modifiers: Gdk.ModifierType):boolean
  export function test_widget_send_key(widget: Widget, keyval: number, modifiers: Gdk.ModifierType):boolean
  export function test_widget_wait_for_draw(widget: Widget):void
  export function tree_get_row_drag_data(selection_data: SelectionData, tree_model: TreeModel, path: TreePath):boolean
  export function tree_row_reference_deleted(proxy: GObject.Object, path: TreePath):void
  export function tree_row_reference_inserted(proxy: GObject.Object, path: TreePath):void
  export function tree_row_reference_reordered(proxy: GObject.Object, path: TreePath, iter: TreeIter, new_order: number[]):void
  export function tree_set_row_drag_data(selection_data: SelectionData, tree_model: TreeModel, path: TreePath):boolean
  export function _true():boolean
  export enum Align{
    FILL,
    START,
    END,
    CENTER,
    BASELINE,
  }
  export enum ArrowPlacement{
    BOTH,
    START,
    END,
  }
  export enum ArrowType{
    UP,
    DOWN,
    LEFT,
    RIGHT,
    NONE,
  }
  export enum AssistantPageType{
    CONTENT,
    INTRO,
    CONFIRM,
    SUMMARY,
    PROGRESS,
    CUSTOM,
  }
  export enum BaselinePosition{
    TOP,
    CENTER,
    BOTTOM,
  }
  export enum BorderStyle{
    NONE,
    SOLID,
    INSET,
    OUTSET,
    HIDDEN,
    DOTTED,
    DASHED,
    DOUBLE,
    GROOVE,
    RIDGE,
  }
  export enum BuilderError{
    INVALID_TYPE_FUNCTION,
    UNHANDLED_TAG,
    MISSING_ATTRIBUTE,
    INVALID_ATTRIBUTE,
    INVALID_TAG,
    MISSING_PROPERTY_VALUE,
    INVALID_VALUE,
    VERSION_MISMATCH,
    DUPLICATE_ID,
    OBJECT_TYPE_REFUSED,
    TEMPLATE_MISMATCH,
    INVALID_PROPERTY,
    INVALID_SIGNAL,
    INVALID_ID,
  }
  export enum ButtonBoxStyle{
    SPREAD,
    EDGE,
    START,
    END,
    CENTER,
    EXPAND,
  }
  export enum ButtonRole{
    NORMAL,
    CHECK,
    RADIO,
  }
  export enum ButtonsType{
    NONE,
    OK,
    CLOSE,
    CANCEL,
    YES_NO,
    OK_CANCEL,
  }
  export enum CellRendererAccelMode{
    GTK,
    OTHER,
    MODIFIER_TAP,
  }
  export enum CellRendererMode{
    INERT,
    ACTIVATABLE,
    EDITABLE,
  }
  export enum CornerType{
    TOP_LEFT,
    BOTTOM_LEFT,
    TOP_RIGHT,
    BOTTOM_RIGHT,
  }
  export enum CssProviderError{
    FAILED,
    SYNTAX,
    IMPORT,
    NAME,
    DEPRECATED,
    UNKNOWN_VALUE,
  }
  export enum CssSectionType{
    DOCUMENT,
    IMPORT,
    COLOR_DEFINITION,
    BINDING_SET,
    RULESET,
    SELECTOR,
    DECLARATION,
    VALUE,
    KEYFRAMES,
  }
  export enum DeleteType{
    CHARS,
    WORD_ENDS,
    WORDS,
    DISPLAY_LINES,
    DISPLAY_LINE_ENDS,
    PARAGRAPH_ENDS,
    PARAGRAPHS,
    WHITESPACE,
  }
  export enum DirectionType{
    TAB_FORWARD,
    TAB_BACKWARD,
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }
  export enum DragResult{
    SUCCESS,
    NO_TARGET,
    USER_CANCELLED,
    TIMEOUT_EXPIRED,
    GRAB_BROKEN,
    ERROR,
  }
  export enum EntryIconPosition{
    PRIMARY,
    SECONDARY,
  }
  export enum EventSequenceState{
    NONE,
    CLAIMED,
    DENIED,
  }
  export enum ExpanderStyle{
    COLLAPSED,
    SEMI_COLLAPSED,
    SEMI_EXPANDED,
    EXPANDED,
  }
  export enum FileChooserAction{
    OPEN,
    SAVE,
    SELECT_FOLDER,
    CREATE_FOLDER,
  }
  export enum FileChooserConfirmation{
    CONFIRM,
    ACCEPT_FILENAME,
    SELECT_AGAIN,
  }
  export enum FileChooserError{
    NONEXISTENT,
    BAD_FILENAME,
    ALREADY_EXISTS,
    INCOMPLETE_HOSTNAME,
  }
  export enum IMPreeditStyle{
    NOTHING,
    CALLBACK,
    NONE,
  }
  export enum IMStatusStyle{
    NOTHING,
    CALLBACK,
    NONE,
  }
  export enum IconSize{
    INVALID,
    MENU,
    SMALL_TOOLBAR,
    LARGE_TOOLBAR,
    BUTTON,
    DND,
    DIALOG,
  }
  export enum IconThemeError{
    NOT_FOUND,
    FAILED,
  }
  export enum IconViewDropPosition{
    NO_DROP,
    DROP_INTO,
    DROP_LEFT,
    DROP_RIGHT,
    DROP_ABOVE,
    DROP_BELOW,
  }
  export enum ImageType{
    EMPTY,
    PIXBUF,
    STOCK,
    ICON_SET,
    ANIMATION,
    ICON_NAME,
    GICON,
    SURFACE,
  }
  export enum InputPurpose{
    FREE_FORM,
    ALPHA,
    DIGITS,
    NUMBER,
    PHONE,
    URL,
    EMAIL,
    NAME,
    PASSWORD,
    PIN,
  }
  export enum Justification{
    LEFT,
    RIGHT,
    CENTER,
    FILL,
  }
  export enum LevelBarMode{
    CONTINUOUS,
    DISCRETE,
  }
  export enum License{
    UNKNOWN,
    CUSTOM,
    GPL_2_0,
    GPL_3_0,
    LGPL_2_1,
    LGPL_3_0,
    BSD,
    MIT_X11,
    ARTISTIC,
    GPL_2_0_ONLY,
    GPL_3_0_ONLY,
    LGPL_2_1_ONLY,
    LGPL_3_0_ONLY,
  }
  export enum MenuDirectionType{
    PARENT,
    CHILD,
    NEXT,
    PREV,
  }
  export enum MessageType{
    INFO,
    WARNING,
    QUESTION,
    ERROR,
    OTHER,
  }
  export enum MovementStep{
    LOGICAL_POSITIONS,
    VISUAL_POSITIONS,
    WORDS,
    DISPLAY_LINES,
    DISPLAY_LINE_ENDS,
    PARAGRAPHS,
    PARAGRAPH_ENDS,
    PAGES,
    BUFFER_ENDS,
    HORIZONTAL_PAGES,
  }
  export enum NotebookTab{
    FIRST,
    LAST,
  }
  export enum NumberUpLayout{
    LRTB,
    LRBT,
    RLTB,
    RLBT,
    TBLR,
    TBRL,
    BTLR,
    BTRL,
  }
  export enum Orientation{
    HORIZONTAL,
    VERTICAL,
  }
  export enum PackDirection{
    LTR,
    RTL,
    TTB,
    BTT,
  }
  export enum PackType{
    START,
    END,
  }
  export enum PageOrientation{
    PORTRAIT,
    LANDSCAPE,
    REVERSE_PORTRAIT,
    REVERSE_LANDSCAPE,
  }
  export enum PageSet{
    ALL,
    EVEN,
    ODD,
  }
  export enum PanDirection{
    LEFT,
    RIGHT,
    UP,
    DOWN,
  }
  export enum PathPriorityType{
    LOWEST,
    GTK,
    APPLICATION,
    THEME,
    RC,
    HIGHEST,
  }
  export enum PathType{
    WIDGET,
    WIDGET_CLASS,
    CLASS,
  }
  export enum PolicyType{
    ALWAYS,
    AUTOMATIC,
    NEVER,
    EXTERNAL,
  }
  export enum PositionType{
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
  }
  export enum PrintDuplex{
    SIMPLEX,
    HORIZONTAL,
    VERTICAL,
  }
  export enum PrintError{
    GENERAL,
    INTERNAL_ERROR,
    NOMEM,
    INVALID_FILE,
  }
  export enum PrintOperationAction{
    PRINT_DIALOG,
    PRINT,
    PREVIEW,
    EXPORT,
  }
  export enum PrintOperationResult{
    ERROR,
    APPLY,
    CANCEL,
    IN_PROGRESS,
  }
  export enum PrintPages{
    ALL,
    CURRENT,
    RANGES,
    SELECTION,
  }
  export enum PrintQuality{
    LOW,
    NORMAL,
    HIGH,
    DRAFT,
  }
  export enum PrintStatus{
    INITIAL,
    PREPARING,
    GENERATING_DATA,
    SENDING_DATA,
    PENDING,
    PENDING_ISSUE,
    PRINTING,
    FINISHED,
    FINISHED_ABORTED,
  }
  export enum PropagationPhase{
    NONE,
    CAPTURE,
    BUBBLE,
    TARGET,
  }
  export enum RcTokenType{
    INVALID,
    INCLUDE,
    NORMAL,
    ACTIVE,
    PRELIGHT,
    SELECTED,
    INSENSITIVE,
    FG,
    BG,
    TEXT,
    BASE,
    XTHICKNESS,
    YTHICKNESS,
    FONT,
    FONTSET,
    FONT_NAME,
    BG_PIXMAP,
    PIXMAP_PATH,
    STYLE,
    BINDING,
    BIND,
    WIDGET,
    WIDGET_CLASS,
    CLASS,
    LOWEST,
    GTK,
    APPLICATION,
    THEME,
    RC,
    HIGHEST,
    ENGINE,
    MODULE_PATH,
    IM_MODULE_PATH,
    IM_MODULE_FILE,
    STOCK,
    LTR,
    RTL,
    COLOR,
    UNBIND,
    LAST,
  }
  export enum RecentChooserError{
    NOT_FOUND,
    INVALID_URI,
  }
  export enum RecentManagerError{
    NOT_FOUND,
    INVALID_URI,
    INVALID_ENCODING,
    NOT_REGISTERED,
    READ,
    WRITE,
    UNKNOWN,
  }
  export enum RecentSortType{
    NONE,
    MRU,
    LRU,
    CUSTOM,
  }
  export enum ReliefStyle{
    NORMAL,
    HALF,
    NONE,
  }
  export enum ResizeMode{
    PARENT,
    QUEUE,
    IMMEDIATE,
  }
  export enum ResponseType{
    NONE,
    REJECT,
    ACCEPT,
    DELETE_EVENT,
    OK,
    CANCEL,
    CLOSE,
    YES,
    NO,
    APPLY,
    HELP,
  }
  export enum RevealerTransitionType{
    NONE,
    CROSSFADE,
    SLIDE_RIGHT,
    SLIDE_LEFT,
    SLIDE_UP,
    SLIDE_DOWN,
  }
  export enum ScrollStep{
    STEPS,
    PAGES,
    ENDS,
    HORIZONTAL_STEPS,
    HORIZONTAL_PAGES,
    HORIZONTAL_ENDS,
  }
  export enum ScrollType{
    NONE,
    JUMP,
    STEP_BACKWARD,
    STEP_FORWARD,
    PAGE_BACKWARD,
    PAGE_FORWARD,
    STEP_UP,
    STEP_DOWN,
    PAGE_UP,
    PAGE_DOWN,
    STEP_LEFT,
    STEP_RIGHT,
    PAGE_LEFT,
    PAGE_RIGHT,
    START,
    END,
  }
  export enum ScrollablePolicy{
    MINIMUM,
    NATURAL,
  }
  export enum SelectionMode{
    NONE,
    SINGLE,
    BROWSE,
    MULTIPLE,
  }
  export enum SensitivityType{
    AUTO,
    ON,
    OFF,
  }
  export enum ShadowType{
    NONE,
    IN,
    OUT,
    ETCHED_IN,
    ETCHED_OUT,
  }
  export enum SizeGroupMode{
    NONE,
    HORIZONTAL,
    VERTICAL,
    BOTH,
  }
  export enum SizeRequestMode{
    HEIGHT_FOR_WIDTH,
    WIDTH_FOR_HEIGHT,
    CONSTANT_SIZE,
  }
  export enum SortType{
    ASCENDING,
    DESCENDING,
  }
  export enum SpinButtonUpdatePolicy{
    ALWAYS,
    IF_VALID,
  }
  export enum SpinType{
    STEP_FORWARD,
    STEP_BACKWARD,
    PAGE_FORWARD,
    PAGE_BACKWARD,
    HOME,
    END,
    USER_DEFINED,
  }
  export enum StackTransitionType{
    NONE,
    CROSSFADE,
    SLIDE_RIGHT,
    SLIDE_LEFT,
    SLIDE_UP,
    SLIDE_DOWN,
    SLIDE_LEFT_RIGHT,
    SLIDE_UP_DOWN,
    OVER_UP,
    OVER_DOWN,
    OVER_LEFT,
    OVER_RIGHT,
    UNDER_UP,
    UNDER_DOWN,
    UNDER_LEFT,
    UNDER_RIGHT,
    OVER_UP_DOWN,
    OVER_DOWN_UP,
    OVER_LEFT_RIGHT,
    OVER_RIGHT_LEFT,
  }
  export enum StateType{
    NORMAL,
    ACTIVE,
    PRELIGHT,
    SELECTED,
    INSENSITIVE,
    INCONSISTENT,
    FOCUSED,
  }
  export enum TextBufferTargetInfo{
    BUFFER_CONTENTS,
    RICH_TEXT,
    TEXT,
  }
  export enum TextDirection{
    NONE,
    LTR,
    RTL,
  }
  export enum TextExtendSelection{
    WORD,
    LINE,
  }
  export enum TextViewLayer{
    BELOW,
    ABOVE,
  }
  export enum TextWindowType{
    PRIVATE,
    WIDGET,
    TEXT,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
  }
  export enum ToolbarSpaceStyle{
    EMPTY,
    LINE,
  }
  export enum ToolbarStyle{
    ICONS,
    TEXT,
    BOTH,
    BOTH_HORIZ,
  }
  export enum TreeViewColumnSizing{
    GROW_ONLY,
    AUTOSIZE,
    FIXED,
  }
  export enum TreeViewDropPosition{
    BEFORE,
    AFTER,
    INTO_OR_BEFORE,
    INTO_OR_AFTER,
  }
  export enum TreeViewGridLines{
    NONE,
    HORIZONTAL,
    VERTICAL,
    BOTH,
  }
  export enum Unit{
    NONE,
    POINTS,
    INCH,
    MM,
  }
  export enum WidgetHelpType{
    TOOLTIP,
    WHATS_THIS,
  }
  export enum WindowPosition{
    NONE,
    CENTER,
    MOUSE,
    CENTER_ALWAYS,
    CENTER_ON_PARENT,
  }
  export enum WindowType{
    TOPLEVEL,
    POPUP,
  }
  export enum WrapMode{
    NONE,
    CHAR,
    WORD,
    WORD_CHAR,
  }
  export enum AccelFlags{
    VISIBLE,
    LOCKED,
    MASK,
  }
  export enum ApplicationInhibitFlags{
    LOGOUT,
    SWITCH,
    SUSPEND,
    IDLE,
  }
  export enum AttachOptions{
    EXPAND,
    SHRINK,
    FILL,
  }
  export enum CalendarDisplayOptions{
    SHOW_HEADING,
    SHOW_DAY_NAMES,
    NO_MONTH_CHANGE,
    SHOW_WEEK_NUMBERS,
    SHOW_DETAILS,
  }
  export enum CellRendererState{
    SELECTED,
    PRELIT,
    INSENSITIVE,
    SORTED,
    FOCUSED,
    EXPANDABLE,
    EXPANDED,
  }
  export enum DebugFlag{
    MISC,
    PLUGSOCKET,
    TEXT,
    TREE,
    UPDATES,
    KEYBINDINGS,
    MULTIHEAD,
    MODULES,
    GEOMETRY,
    ICONTHEME,
    PRINTING,
    BUILDER,
    SIZE_REQUEST,
    NO_CSS_CACHE,
    BASELINES,
    PIXEL_CACHE,
    NO_PIXEL_CACHE,
    INTERACTIVE,
    TOUCHSCREEN,
    ACTIONS,
  }
  export enum DestDefaults{
    MOTION,
    HIGHLIGHT,
    DROP,
    ALL,
  }
  export enum DialogFlags{
    MODAL,
    DESTROY_WITH_PARENT,
    USE_HEADER_BAR,
  }
  export enum FileFilterFlags{
    FILENAME,
    URI,
    DISPLAY_NAME,
    MIME_TYPE,
  }
  export enum IconLookupFlags{
    NO_SVG,
    FORCE_SVG,
    USE_BUILTIN,
    GENERIC_FALLBACK,
    FORCE_SIZE,
    FORCE_REGULAR,
    FORCE_SYMBOLIC,
    DIR_LTR,
    DIR_RTL,
  }
  export enum InputHints{
    NONE,
    SPELLCHECK,
    NO_SPELLCHECK,
    WORD_COMPLETION,
    LOWERCASE,
    UPPERCASE_CHARS,
    UPPERCASE_WORDS,
    UPPERCASE_SENTENCES,
    INHIBIT_OSK,
    VERTICAL_WRITING,
  }
  export enum JunctionSides{
    NONE,
    CORNER_TOPLEFT,
    CORNER_TOPRIGHT,
    CORNER_BOTTOMLEFT,
    CORNER_BOTTOMRIGHT,
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
  }
  export enum PlacesOpenFlags{
    NORMAL,
    NEW_TAB,
    NEW_WINDOW,
  }
  export enum RcFlags{
    FG,
    BG,
    TEXT,
    BASE,
  }
  export enum RecentFilterFlags{
    URI,
    DISPLAY_NAME,
    MIME_TYPE,
    APPLICATION,
    GROUP,
    AGE,
  }
  export enum RegionFlags{
    EVEN,
    ODD,
    FIRST,
    LAST,
    ONLY,
    SORTED,
  }
  export enum StateFlags{
    NORMAL,
    ACTIVE,
    PRELIGHT,
    SELECTED,
    INSENSITIVE,
    INCONSISTENT,
    FOCUSED,
    BACKDROP,
    DIR_LTR,
    DIR_RTL,
    LINK,
    VISITED,
    CHECKED,
  }
  export enum TargetFlags{
    SAME_APP,
    SAME_WIDGET,
    OTHER_APP,
    OTHER_WIDGET,
  }
  export enum TextSearchFlags{
    VISIBLE_ONLY,
    TEXT_ONLY,
    CASE_INSENSITIVE,
  }
  export enum ToolPaletteDragTargets{
    ITEMS,
    GROUPS,
  }
  export enum TreeModelFlags{
    ITERS_PERSIST,
    LIST_ONLY,
  }
  export enum UIManagerItemType{
    AUTO,
    MENUBAR,
    MENU,
    TOOLBAR,
    PLACEHOLDER,
    POPUP,
    MENUITEM,
    TOOLITEM,
    SEPARATOR,
    ACCELERATOR,
    POPUP_WITH_ACCELS,
  }
  export class AboutDialog extends Dialog {
    add_credit_section(section_name: string, people: string[]):void
    get_artists():string[]
    get_authors():string[]
    get_comments():string
    get_copyright():string
    get_documenters():string[]
    get_license():string
    get_license_type():License
    get_logo():GdkPixbuf.Pixbuf
    get_logo_icon_name():string
    get_program_name():string
    get_translator_credits():string
    get_version():string
    get_website():string
    get_website_label():string
    get_wrap_license():boolean
    set_artists(artists: string[]):void
    set_authors(authors: string[]):void
    set_comments(comments: string):void
    set_copyright(copyright: string):void
    set_documenters(documenters: string[]):void
    set_license(license: string):void
    set_license_type(license_type: License):void
    set_logo(logo: GdkPixbuf.Pixbuf):void
    set_logo_icon_name(icon_name: string):void
    set_program_name(name: string):void
    set_translator_credits(translator_credits: string):void
    set_version(version: string):void
    set_website(website: string):void
    set_website_label(website_label: string):void
    set_wrap_license(wrap_license: boolean):void
  }
  export class AccelGroup extends GObject.Object {
    activate(accel_quark: GLib.Quark, acceleratable: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType):boolean
    connect(accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags, closure: GObject.Closure):void
    connect_by_path(accel_path: string, closure: GObject.Closure):void
    disconnect(closure: GObject.Closure):boolean
    disconnect_key(accel_key: number, accel_mods: Gdk.ModifierType):boolean
    find(find_func: AccelGroupFindFunc, data: any):AccelKey
    get_is_locked():boolean
    get_modifier_mask():Gdk.ModifierType
    lock():void
    query(accel_key: number, accel_mods: Gdk.ModifierType, n_entries: number):AccelGroupEntry[]
    unlock():void
  }
  export class AccelLabel extends Label {
    constructor(string: string)
    get_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType):void
    get_accel_widget():Widget
    get_accel_width():number
    refetch():boolean
    set_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType):void
    set_accel_closure(accel_closure: GObject.Closure):void
    set_accel_widget(accel_widget: Widget):void
  }
  export class AccelMap extends GObject.Object {
  }
  export class Accessible extends Atk.Object {
    connect_widget_destroyed():void
    get_widget():Widget
    set_widget(widget: Widget):void
  }
  export class Action extends GObject.Object {
    constructor(name: string, label: string, tooltip: string, stock_id: string)
    activate():void
    block_activate():void
    connect_accelerator():void
    create_icon(icon_size: number):Widget
    create_menu():Widget
    create_menu_item():Widget
    create_tool_item():Widget
    disconnect_accelerator():void
    get_accel_closure():GObject.Closure
    get_accel_path():string
    get_always_show_image():boolean
    get_gicon():Gio.Icon
    get_icon_name():string
    get_is_important():boolean
    get_label():string
    get_name():string
    get_proxies():GLib.SList
    get_sensitive():boolean
    get_short_label():string
    get_stock_id():string
    get_tooltip():string
    get_visible():boolean
    get_visible_horizontal():boolean
    get_visible_vertical():boolean
    is_sensitive():boolean
    is_visible():boolean
    set_accel_group(accel_group: AccelGroup):void
    set_accel_path(accel_path: string):void
    set_always_show_image(always_show: boolean):void
    set_gicon(icon: Gio.Icon):void
    set_icon_name(icon_name: string):void
    set_is_important(is_important: boolean):void
    set_label(label: string):void
    set_sensitive(sensitive: boolean):void
    set_short_label(short_label: string):void
    set_stock_id(stock_id: string):void
    set_tooltip(tooltip: string):void
    set_visible(visible: boolean):void
    set_visible_horizontal(visible_horizontal: boolean):void
    set_visible_vertical(visible_vertical: boolean):void
    unblock_activate():void
  }
  export class ActionBar extends Bin {
    get_center_widget():Widget
    pack_end(child: Widget):void
    pack_start(child: Widget):void
    set_center_widget(center_widget: Widget):void
  }
  export class ActionGroup extends GObject.Object {
    constructor(name: string)
    add_action(action: Action):void
    add_action_with_accel(action: Action, accelerator: string):void
    add_actions(entries: ActionEntry[], n_entries: number, user_data: any):void
    add_actions_full(entries: ActionEntry[], n_entries: number, user_data: any, destroy: GLib.DestroyNotify):void
    add_radio_actions(entries: RadioActionEntry[], n_entries: number, value: number, on_change: GObject.Callback, user_data: any):void
    add_radio_actions_full(entries: RadioActionEntry[], n_entries: number, value: number, on_change: GObject.Callback, user_data: any, destroy: GLib.DestroyNotify):void
    add_toggle_actions(entries: ToggleActionEntry[], n_entries: number, user_data: any):void
    add_toggle_actions_full(entries: ToggleActionEntry[], n_entries: number, user_data: any, destroy: GLib.DestroyNotify):void
    get_accel_group():AccelGroup
    get_action(action_name: string):Action
    get_name():string
    get_sensitive():boolean
    get_visible():boolean
    list_actions():GLib.List
    remove_action(action: Action):void
    set_accel_group(accel_group: AccelGroup):void
    set_sensitive(sensitive: boolean):void
    set_translate_func(func: TranslateFunc, data: any, notify: GLib.DestroyNotify):void
    set_translation_domain(domain: string):void
    set_visible(visible: boolean):void
    translate_string(string: string):string
  }
  export class Adjustment extends GObject.InitiallyUnowned {
    constructor(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number)
    changed():void
    clamp_page(lower: number, upper: number):void
    configure(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number):void
    get_lower():number
    get_minimum_increment():number
    get_page_increment():number
    get_page_size():number
    get_step_increment():number
    get_upper():number
    get_value():number
    set_lower(lower: number):void
    set_page_increment(page_increment: number):void
    set_page_size(page_size: number):void
    set_step_increment(step_increment: number):void
    set_upper(upper: number):void
    set_value(value: number):void
    value_changed():void
  }
  export class Alignment extends Bin {
    constructor(xalign: gfloat, yalign: gfloat, xscale: gfloat, yscale: gfloat)
    get_padding(padding_top: number, padding_bottom: number, padding_left: number, padding_right: number):void
    set(xalign: gfloat, yalign: gfloat, xscale: gfloat, yscale: gfloat):void
    set_padding(padding_top: number, padding_bottom: number, padding_left: number, padding_right: number):void
  }
  export class AppChooserButton extends ComboBox {
    constructor(content_type: string)
    append_custom_item(name: string, label: string, icon: Gio.Icon):void
    append_separator():void
    get_heading():string
    get_show_default_item():boolean
    get_show_dialog_item():boolean
    set_active_custom_item(name: string):void
    set_heading(heading: string):void
    set_show_default_item(setting: boolean):void
    set_show_dialog_item(setting: boolean):void
  }
  export class AppChooserDialog extends Dialog {
    constructor(parent: Window, flags: DialogFlags, file: Gio.File)
    constructor(parent: Window, flags: DialogFlags, content_type: string)
    get_heading():string
    get_widget():Widget
    set_heading(heading: string):void
  }
  export class AppChooserWidget extends Box {
    constructor(content_type: string)
    get_default_text():string
    get_show_all():boolean
    get_show_default():boolean
    get_show_fallback():boolean
    get_show_other():boolean
    get_show_recommended():boolean
    set_default_text(text: string):void
    set_show_all(setting: boolean):void
    set_show_default(setting: boolean):void
    set_show_fallback(setting: boolean):void
    set_show_other(setting: boolean):void
    set_show_recommended(setting: boolean):void
  }
  export class Application extends Gio.Application {
    constructor(application_id: string, flags: Gio.ApplicationFlags)
    add_accelerator(accelerator: string, action_name: string, parameter: GLib.Variant):void
    add_window(window: Window):void
    get_accels_for_action(detailed_action_name: string):string[]
    get_actions_for_accel(accel: string):string[]
    get_active_window():Window
    get_app_menu():Gio.MenuModel
    get_menu_by_id(id: string):Gio.Menu
    get_menubar():Gio.MenuModel
    get_window_by_id(id: number):Window
    get_windows():GLib.List
    inhibit(window: Window, flags: ApplicationInhibitFlags, reason: string):number
    is_inhibited(flags: ApplicationInhibitFlags):boolean
    list_action_descriptions():string[]
    prefers_app_menu():boolean
    remove_accelerator(action_name: string, parameter: GLib.Variant):void
    remove_window(window: Window):void
    set_accels_for_action(detailed_action_name: string, accels: string[]):void
    set_app_menu(app_menu: Gio.MenuModel):void
    set_menubar(menubar: Gio.MenuModel):void
    uninhibit(cookie: number):void
  }
  export class ApplicationWindow extends Window {
    constructor(application: Application)
    get_id():number
    get_show_menubar():boolean
    set_show_menubar(show_menubar: boolean):void
  }
  export class Arrow extends Misc {
    constructor(arrow_type: ArrowType, shadow_type: ShadowType)
    set(arrow_type: ArrowType, shadow_type: ShadowType):void
  }
  export class ArrowAccessible extends WidgetAccessible {
  }
  export class AspectFrame extends Frame {
    constructor(label: string, xalign: gfloat, yalign: gfloat, ratio: gfloat, obey_child: boolean)
    set(xalign: gfloat, yalign: gfloat, ratio: gfloat, obey_child: boolean):void
  }
  export class Assistant extends Window {
    add_action_widget(child: Widget):void
    append_page(page: Widget):number
    commit():void
    get_current_page():number
    get_n_pages():number
    get_nth_page(page_num: number):Widget
    get_page_complete(page: Widget):boolean
    get_page_has_padding(page: Widget):boolean
    get_page_header_image(page: Widget):GdkPixbuf.Pixbuf
    get_page_side_image(page: Widget):GdkPixbuf.Pixbuf
    get_page_title(page: Widget):string
    get_page_type(page: Widget):AssistantPageType
    insert_page(page: Widget, position: number):number
    next_page():void
    prepend_page(page: Widget):number
    previous_page():void
    remove_action_widget(child: Widget):void
    remove_page(page_num: number):void
    set_current_page(page_num: number):void
    set_forward_page_func(page_func: AssistantPageFunc, data: any, destroy: GLib.DestroyNotify):void
    set_page_complete(page: Widget, complete: boolean):void
    set_page_has_padding(page: Widget, has_padding: boolean):void
    set_page_header_image(page: Widget, pixbuf: GdkPixbuf.Pixbuf):void
    set_page_side_image(page: Widget, pixbuf: GdkPixbuf.Pixbuf):void
    set_page_title(page: Widget, title: string):void
    set_page_type(page: Widget, type: AssistantPageType):void
    update_buttons_state():void
  }
  export class Bin extends Container {
    get_child():Widget
  }
  export class BooleanCellAccessible extends RendererCellAccessible {
  }
  export class Box extends Container {
    constructor(orientation: Orientation, spacing: number)
    get_baseline_position():BaselinePosition
    get_center_widget():Widget
    get_homogeneous():boolean
    get_spacing():number
    pack_end(child: Widget, expand: boolean, fill: boolean, padding: number):void
    pack_start(child: Widget, expand: boolean, fill: boolean, padding: number):void
    query_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType):void
    reorder_child(child: Widget, position: number):void
    set_baseline_position(position: BaselinePosition):void
    set_center_widget(widget: Widget):void
    set_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType):void
    set_homogeneous(homogeneous: boolean):void
    set_spacing(spacing: number):void
  }
  export class Builder extends GObject.Object {
    constructor(filename: string)
    constructor(resource_path: string)
    constructor(string: string, length: number)
    add_callback_symbol(callback_name: string, callback_symbol: GObject.Callback):void
    add_callback_symbols(first_callback_name: string, first_callback_symbol: GObject.Callback, ...args: any[]):void
    add_from_file(filename: string):number
    add_from_resource(resource_path: string):number
    add_from_string(buffer: string, length: number):number
    add_objects_from_file(filename: string, object_ids: string[]):number
    add_objects_from_resource(resource_path: string, object_ids: string[]):number
    add_objects_from_string(buffer: string, length: number, object_ids: string[]):number
    connect_signals(user_data: any):void
    connect_signals_full(func: BuilderConnectFunc, user_data: any):void
    expose_object(name: string, object: GObject.Object):void
    get_application():Application
    get_object(name: string):GObject.Object
    get_objects():GLib.SList
    get_translation_domain():string
    get_type_from_name(type_name: string):number
    lookup_callback_symbol(callback_name: string):GObject.Callback
    set_application(application: Application):void
    set_translation_domain(domain: string):void
    value_from_string(pspec: GObject.ParamSpec, string: string, value: GObject.Value):boolean
    value_from_string_type(type: number, string: string, value: GObject.Value):boolean
  }
  export class Button extends Bin {
    constructor(icon_name: string, size: number)
    constructor(stock_id: string)
    constructor(label: string)
    constructor(label: string)
    clicked():void
    enter():void
    get_alignment(xalign: gfloat, yalign: gfloat):void
    get_always_show_image():boolean
    get_event_window():Gdk.Window
    get_focus_on_click():boolean
    get_image():Widget
    get_image_position():PositionType
    get_label():string
    get_relief():ReliefStyle
    get_use_stock():boolean
    get_use_underline():boolean
    leave():void
    pressed():void
    released():void
    set_alignment(xalign: gfloat, yalign: gfloat):void
    set_always_show_image(always_show: boolean):void
    set_focus_on_click(focus_on_click: boolean):void
    set_image(image: Widget):void
    set_image_position(position: PositionType):void
    set_label(label: string):void
    set_relief(relief: ReliefStyle):void
    set_use_stock(use_stock: boolean):void
    set_use_underline(use_underline: boolean):void
  }
  export class ButtonAccessible extends ContainerAccessible {
  }
  export class ButtonBox extends Box {
    constructor(orientation: Orientation)
    get_child_non_homogeneous(child: Widget):boolean
    get_child_secondary(child: Widget):boolean
    get_layout():ButtonBoxStyle
    set_child_non_homogeneous(child: Widget, non_homogeneous: boolean):void
    set_child_secondary(child: Widget, is_secondary: boolean):void
    set_layout(layout_style: ButtonBoxStyle):void
  }
  export class Calendar extends Widget {
    clear_marks():void
    get_date(year: number, month: number, day: number):void
    get_day_is_marked(day: number):boolean
    get_detail_height_rows():number
    get_detail_width_chars():number
    get_display_options():CalendarDisplayOptions
    mark_day(day: number):void
    select_day(day: number):void
    select_month(month: number, year: number):void
    set_detail_func(func: CalendarDetailFunc, data: any, destroy: GLib.DestroyNotify):void
    set_detail_height_rows(rows: number):void
    set_detail_width_chars(chars: number):void
    set_display_options(flags: CalendarDisplayOptions):void
    unmark_day(day: number):void
  }
  export class CellAccessible extends Accessible {
  }
  export class CellArea extends GObject.InitiallyUnowned {
    activate(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, flags: CellRendererState, edit_only: boolean):boolean
    activate_cell(widget: Widget, renderer: CellRenderer, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState):boolean
    add(renderer: CellRenderer):void
    add_focus_sibling(renderer: CellRenderer, sibling: CellRenderer):void
    add_with_properties(renderer: CellRenderer, first_prop_name: string, ...args: any[]):void
    apply_attributes(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean):void
    attribute_connect(renderer: CellRenderer, attribute: string, column: number):void
    attribute_disconnect(renderer: CellRenderer, attribute: string):void
    attribute_get_column(renderer: CellRenderer, attribute: string):number
    cell_get(renderer: CellRenderer, first_prop_name: string, ...args: any[]):void
    cell_get_property(renderer: CellRenderer, property_name: string, value: GObject.Value):void
    cell_get_valist(renderer: CellRenderer, first_property_name: string, var_args: any):void
    cell_set(renderer: CellRenderer, first_prop_name: string, ...args: any[]):void
    cell_set_property(renderer: CellRenderer, property_name: string, value: GObject.Value):void
    cell_set_valist(renderer: CellRenderer, first_property_name: string, var_args: any):void
    copy_context(context: CellAreaContext):CellAreaContext
    create_context():CellAreaContext
    event(context: CellAreaContext, widget: Widget, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState):number
    focus(direction: DirectionType):boolean
    foreach(callback: CellCallback, callback_data: any):void
    foreach_alloc(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, background_area: Gdk.Rectangle, callback: CellAllocCallback, callback_data: any):void
    get_cell_allocation(context: CellAreaContext, widget: Widget, renderer: CellRenderer, cell_area: Gdk.Rectangle, allocation: Gdk.Rectangle):void
    get_cell_at_position(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, x: number, y: number, alloc_area: Gdk.Rectangle):CellRenderer
    get_current_path_string():string
    get_edit_widget():CellEditable
    get_edited_cell():CellRenderer
    get_focus_cell():CellRenderer
    get_focus_from_sibling(renderer: CellRenderer):CellRenderer
    get_focus_siblings(renderer: CellRenderer):GLib.List
    get_preferred_height(context: CellAreaContext, widget: Widget, minimum_height: number, natural_height: number):void
    get_preferred_height_for_width(context: CellAreaContext, widget: Widget, width: number, minimum_height: number, natural_height: number):void
    get_preferred_width(context: CellAreaContext, widget: Widget, minimum_width: number, natural_width: number):void
    get_preferred_width_for_height(context: CellAreaContext, widget: Widget, height: number, minimum_width: number, natural_width: number):void
    get_request_mode():SizeRequestMode
    has_renderer(renderer: CellRenderer):boolean
    inner_cell_area(widget: Widget, cell_area: Gdk.Rectangle, inner_area: Gdk.Rectangle):void
    is_activatable():boolean
    is_focus_sibling(renderer: CellRenderer, sibling: CellRenderer):boolean
    remove(renderer: CellRenderer):void
    remove_focus_sibling(renderer: CellRenderer, sibling: CellRenderer):void
    render(context: CellAreaContext, widget: Widget, cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState, paint_focus: boolean):void
    request_renderer(renderer: CellRenderer, orientation: Orientation, widget: Widget, for_size: number, minimum_size: number, natural_size: number):void
    set_focus_cell(renderer: CellRenderer):void
    stop_editing(canceled: boolean):void
  }
  export class CellAreaBox extends CellArea {
    get_spacing():number
    pack_end(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean):void
    pack_start(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean):void
    set_spacing(spacing: number):void
  }
  export class CellAreaContext extends GObject.Object {
    allocate(width: number, height: number):void
    get_allocation(width: number, height: number):void
    get_area():CellArea
    get_preferred_height(minimum_height: number, natural_height: number):void
    get_preferred_height_for_width(width: number, minimum_height: number, natural_height: number):void
    get_preferred_width(minimum_width: number, natural_width: number):void
    get_preferred_width_for_height(height: number, minimum_width: number, natural_width: number):void
    push_preferred_height(minimum_height: number, natural_height: number):void
    push_preferred_width(minimum_width: number, natural_width: number):void
    reset():void
  }
  export class CellRenderer extends GObject.InitiallyUnowned {
    activate(event: Gdk.Event, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState):boolean
    get_aligned_area(widget: Widget, flags: CellRendererState, cell_area: Gdk.Rectangle, aligned_area: Gdk.Rectangle):void
    get_alignment(xalign: gfloat, yalign: gfloat):void
    get_fixed_size(width: number, height: number):void
    get_padding(xpad: number, ypad: number):void
    get_preferred_height(widget: Widget, minimum_size: number, natural_size: number):void
    get_preferred_height_for_width(widget: Widget, width: number, minimum_height: number, natural_height: number):void
    get_preferred_size(widget: Widget, minimum_size: Requisition, natural_size: Requisition):void
    get_preferred_width(widget: Widget, minimum_size: number, natural_size: number):void
    get_preferred_width_for_height(widget: Widget, height: number, minimum_width: number, natural_width: number):void
    get_request_mode():SizeRequestMode
    get_sensitive():boolean
    get_size(widget: Widget, cell_area: Gdk.Rectangle, x_offset: number, y_offset: number, width: number, height: number):void
    get_state(widget: Widget, cell_state: CellRendererState):StateFlags
    get_visible():boolean
    is_activatable():boolean
    render(cr: cairo.Context, widget: Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState):void
    set_alignment(xalign: gfloat, yalign: gfloat):void
    set_fixed_size(width: number, height: number):void
    set_padding(xpad: number, ypad: number):void
    set_sensitive(sensitive: boolean):void
    set_visible(visible: boolean):void
    start_editing(event: Gdk.Event, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState):CellEditable
    stop_editing(canceled: boolean):void
  }
  export class CellRendererAccel extends CellRendererText {
  }
  export class CellRendererCombo extends CellRendererText {
  }
  export class CellRendererPixbuf extends CellRenderer {
  }
  export class CellRendererProgress extends CellRenderer {
  }
  export class CellRendererSpin extends CellRendererText {
  }
  export class CellRendererSpinner extends CellRenderer {
  }
  export class CellRendererText extends CellRenderer {
    set_fixed_height_from_font(number_of_rows: number):void
  }
  export class CellRendererToggle extends CellRenderer {
    get_activatable():boolean
    get_active():boolean
    get_radio():boolean
    set_activatable(setting: boolean):void
    set_active(setting: boolean):void
    set_radio(radio: boolean):void
  }
  export class CellView extends Widget {
    constructor(area: CellArea, context: CellAreaContext)
    constructor(markup: string)
    constructor(pixbuf: GdkPixbuf.Pixbuf)
    constructor(text: string)
    get_displayed_row():TreePath
    get_draw_sensitive():boolean
    get_fit_model():boolean
    get_model():TreeModel
    get_size_of_row(path: TreePath, requisition: Requisition):boolean
    set_background_color(color: Gdk.Color):void
    set_background_rgba(rgba: Gdk.RGBA):void
    set_displayed_row(path: TreePath):void
    set_draw_sensitive(draw_sensitive: boolean):void
    set_fit_model(fit_model: boolean):void
    set_model(model: TreeModel):void
  }
  export class CheckButton extends ToggleButton {
    constructor(label: string)
    constructor(label: string)
  }
  export class CheckMenuItem extends MenuItem {
    constructor(label: string)
    constructor(label: string)
    get_active():boolean
    get_draw_as_radio():boolean
    get_inconsistent():boolean
    set_active(is_active: boolean):void
    set_draw_as_radio(draw_as_radio: boolean):void
    set_inconsistent(setting: boolean):void
    toggled():void
  }
  export class CheckMenuItemAccessible extends MenuItemAccessible {
  }
  export class Clipboard extends GObject.Object {
    clear():void
    get_display():Gdk.Display
    get_owner():GObject.Object
    request_contents(target: Gdk.Atom, callback: ClipboardReceivedFunc, user_data: any):void
    request_image(callback: ClipboardImageReceivedFunc, user_data: any):void
    request_rich_text(buffer: TextBuffer, callback: ClipboardRichTextReceivedFunc, user_data: any):void
    request_targets(callback: ClipboardTargetsReceivedFunc, user_data: any):void
    request_text(callback: ClipboardTextReceivedFunc, user_data: any):void
    request_uris(callback: ClipboardURIReceivedFunc, user_data: any):void
    set_can_store(targets: TargetEntry[], n_targets: number):void
    set_image(pixbuf: GdkPixbuf.Pixbuf):void
    set_text(text: string, len: number):void
    set_with_data(targets: TargetEntry[], n_targets: number, get_func: ClipboardGetFunc, clear_func: ClipboardClearFunc, user_data: any):boolean
    set_with_owner(targets: TargetEntry[], n_targets: number, get_func: ClipboardGetFunc, clear_func: ClipboardClearFunc, owner: GObject.Object):boolean
    store():void
    wait_for_contents(target: Gdk.Atom):SelectionData
    wait_for_image():GdkPixbuf.Pixbuf
    wait_for_rich_text(buffer: TextBuffer, format: Gdk.Atom, length: number):number[]
    wait_for_targets(targets: Gdk.Atom[], n_targets: number):boolean
    wait_for_text():string
    wait_for_uris():string[]
    wait_is_image_available():boolean
    wait_is_rich_text_available(buffer: TextBuffer):boolean
    wait_is_target_available(target: Gdk.Atom):boolean
    wait_is_text_available():boolean
    wait_is_uris_available():boolean
  }
  export class ColorButton extends Button {
    constructor(color: Gdk.Color)
    constructor(rgba: Gdk.RGBA)
    get_alpha():guint16
    get_color(color: Gdk.Color):void
    get_rgba(rgba: Gdk.RGBA):void
    get_title():string
    get_use_alpha():boolean
    set_alpha(alpha: guint16):void
    set_color(color: Gdk.Color):void
    set_rgba(rgba: Gdk.RGBA):void
    set_title(title: string):void
    set_use_alpha(use_alpha: boolean):void
  }
  export class ColorChooserDialog extends Dialog {
    constructor(title: string, parent: Window)
  }
  export class ColorChooserWidget extends Box {
  }
  export class ColorSelection extends Box {
    get_current_alpha():guint16
    get_current_color(color: Gdk.Color):void
    get_current_rgba(rgba: Gdk.RGBA):void
    get_has_opacity_control():boolean
    get_has_palette():boolean
    get_previous_alpha():guint16
    get_previous_color(color: Gdk.Color):void
    get_previous_rgba(rgba: Gdk.RGBA):void
    is_adjusting():boolean
    set_current_alpha(alpha: guint16):void
    set_current_color(color: Gdk.Color):void
    set_current_rgba(rgba: Gdk.RGBA):void
    set_has_opacity_control(has_opacity: boolean):void
    set_has_palette(has_palette: boolean):void
    set_previous_alpha(alpha: guint16):void
    set_previous_color(color: Gdk.Color):void
    set_previous_rgba(rgba: Gdk.RGBA):void
  }
  export class ColorSelectionDialog extends Dialog {
    constructor(title: string)
    get_color_selection():Widget
  }
  export class ComboBox extends Bin {
    constructor(area: CellArea)
    constructor(area: CellArea)
    constructor(model: TreeModel)
    constructor(model: TreeModel)
    get_active():number
    get_active_id():string
    get_active_iter(iter: TreeIter):boolean
    get_add_tearoffs():boolean
    get_button_sensitivity():SensitivityType
    get_column_span_column():number
    get_entry_text_column():number
    get_focus_on_click():boolean
    get_has_entry():boolean
    get_id_column():number
    get_model():TreeModel
    get_popup_accessible():Atk.Object
    get_popup_fixed_width():boolean
    get_row_separator_func():TreeViewRowSeparatorFunc
    get_row_span_column():number
    get_title():string
    get_wrap_width():number
    popdown():void
    popup():void
    popup_for_device(device: Gdk.Device):void
    set_active(index_: number):void
    set_active_id(active_id: string):boolean
    set_active_iter(iter: TreeIter):void
    set_add_tearoffs(add_tearoffs: boolean):void
    set_button_sensitivity(sensitivity: SensitivityType):void
    set_column_span_column(column_span: number):void
    set_entry_text_column(text_column: number):void
    set_focus_on_click(focus_on_click: boolean):void
    set_id_column(id_column: number):void
    set_model(model: TreeModel):void
    set_popup_fixed_width(fixed: boolean):void
    set_row_separator_func(func: TreeViewRowSeparatorFunc, data: any, destroy: GLib.DestroyNotify):void
    set_row_span_column(row_span: number):void
    set_title(title: string):void
    set_wrap_width(width: number):void
  }
  export class ComboBoxAccessible extends ContainerAccessible {
  }
  export class ComboBoxText extends ComboBox {
    append(id: string, text: string):void
    append_text(text: string):void
    get_active_text():string
    insert(position: number, id: string, text: string):void
    insert_text(position: number, text: string):void
    prepend(id: string, text: string):void
    prepend_text(text: string):void
    remove(position: number):void
    remove_all():void
  }
  export class Container extends Widget {
    add(widget: Widget):void
    add_with_properties(widget: Widget, first_prop_name: string, ...args: any[]):void
    check_resize():void
    child_get(child: Widget, first_prop_name: string, ...args: any[]):void
    child_get_property(child: Widget, property_name: string, value: GObject.Value):void
    child_get_valist(child: Widget, first_property_name: string, var_args: any):void
    child_notify(child: Widget, child_property: string):void
    child_notify_by_pspec(child: Widget, pspec: GObject.ParamSpec):void
    child_set(child: Widget, first_prop_name: string, ...args: any[]):void
    child_set_property(child: Widget, property_name: string, value: GObject.Value):void
    child_set_valist(child: Widget, first_property_name: string, var_args: any):void
    child_type():number
    forall(callback: Callback, callback_data: any):void
    foreach(callback: Callback, callback_data: any):void
    get_border_width():number
    get_children():GLib.List
    get_focus_chain(focusable_widgets: GLib.List):boolean
    get_focus_child():Widget
    get_focus_hadjustment():Adjustment
    get_focus_vadjustment():Adjustment
    get_path_for_child(child: Widget):WidgetPath
    get_resize_mode():ResizeMode
    propagate_draw(child: Widget, cr: cairo.Context):void
    remove(widget: Widget):void
    resize_children():void
    set_border_width(border_width: number):void
    set_focus_chain(focusable_widgets: GLib.List):void
    set_focus_child(child: Widget):void
    set_focus_hadjustment(adjustment: Adjustment):void
    set_focus_vadjustment(adjustment: Adjustment):void
    set_reallocate_redraws(needs_redraws: boolean):void
    set_resize_mode(resize_mode: ResizeMode):void
    unset_focus_chain():void
  }
  export class ContainerAccessible extends WidgetAccessible {
  }
  export class ContainerCellAccessible extends CellAccessible {
    add_child(child: CellAccessible):void
    get_children():GLib.List
    remove_child(child: CellAccessible):void
  }
  export class CssProvider extends GObject.Object {
    load_from_data(data: number[], length: number):boolean
    load_from_file(file: Gio.File):boolean
    load_from_path(path: string):boolean
    load_from_resource(resource_path: string):void
    to_string():string
  }
  export class Dialog extends Window {
    constructor(title: string, parent: Window, flags: DialogFlags, first_button_text: string, ...args: any[])
    add_action_widget(child: Widget, response_id: number):void
    add_button(button_text: string, response_id: number):Widget
    add_buttons(first_button_text: string, ...args: any[]):void
    get_action_area():Widget
    get_content_area():Box
    get_header_bar():Widget
    get_response_for_widget(widget: Widget):number
    get_widget_for_response(response_id: number):Widget
    response(response_id: number):void
    run():number
    set_alternative_button_order(first_response_id: number, ...args: any[]):void
    set_alternative_button_order_from_array(n_params: number, new_order: number[]):void
    set_default_response(response_id: number):void
    set_response_sensitive(response_id: number, setting: boolean):void
  }
  export class DrawingArea extends Widget {
  }
  export class Entry extends Widget {
    constructor(buffer: EntryBuffer)
    get_activates_default():boolean
    get_alignment():gfloat
    get_attributes():Pango.AttrList
    get_buffer():EntryBuffer
    get_completion():EntryCompletion
    get_current_icon_drag_source():number
    get_cursor_hadjustment():Adjustment
    get_has_frame():boolean
    get_icon_activatable(icon_pos: EntryIconPosition):boolean
    get_icon_area(icon_pos: EntryIconPosition, icon_area: Gdk.Rectangle):void
    get_icon_at_pos(x: number, y: number):number
    get_icon_gicon(icon_pos: EntryIconPosition):Gio.Icon
    get_icon_name(icon_pos: EntryIconPosition):string
    get_icon_pixbuf(icon_pos: EntryIconPosition):GdkPixbuf.Pixbuf
    get_icon_sensitive(icon_pos: EntryIconPosition):boolean
    get_icon_stock(icon_pos: EntryIconPosition):string
    get_icon_storage_type(icon_pos: EntryIconPosition):ImageType
    get_icon_tooltip_markup(icon_pos: EntryIconPosition):string
    get_icon_tooltip_text(icon_pos: EntryIconPosition):string
    get_inner_border():Border
    get_input_hints():InputHints
    get_input_purpose():InputPurpose
    get_invisible_char():gunichar
    get_layout():Pango.Layout
    get_layout_offsets(x: number, y: number):void
    get_max_length():number
    get_max_width_chars():number
    get_overwrite_mode():boolean
    get_placeholder_text():string
    get_progress_fraction():number
    get_progress_pulse_step():number
    get_tabs():Pango.TabArray
    get_text():string
    get_text_area(text_area: Gdk.Rectangle):void
    get_text_length():guint16
    get_visibility():boolean
    get_width_chars():number
    grab_focus_without_selecting():void
    im_context_filter_keypress(event: Gdk.EventKey):boolean
    layout_index_to_text_index(layout_index: number):number
    progress_pulse():void
    reset_im_context():void
    set_activates_default(setting: boolean):void
    set_alignment(xalign: gfloat):void
    set_attributes(attrs: Pango.AttrList):void
    set_buffer(buffer: EntryBuffer):void
    set_completion(completion: EntryCompletion):void
    set_cursor_hadjustment(adjustment: Adjustment):void
    set_has_frame(setting: boolean):void
    set_icon_activatable(icon_pos: EntryIconPosition, activatable: boolean):void
    set_icon_drag_source(icon_pos: EntryIconPosition, target_list: TargetList, actions: Gdk.DragAction):void
    set_icon_from_gicon(icon_pos: EntryIconPosition, icon: Gio.Icon):void
    set_icon_from_icon_name(icon_pos: EntryIconPosition, icon_name: string):void
    set_icon_from_pixbuf(icon_pos: EntryIconPosition, pixbuf: GdkPixbuf.Pixbuf):void
    set_icon_from_stock(icon_pos: EntryIconPosition, stock_id: string):void
    set_icon_sensitive(icon_pos: EntryIconPosition, sensitive: boolean):void
    set_icon_tooltip_markup(icon_pos: EntryIconPosition, tooltip: string):void
    set_icon_tooltip_text(icon_pos: EntryIconPosition, tooltip: string):void
    set_inner_border(border: Border):void
    set_input_hints(hints: InputHints):void
    set_input_purpose(purpose: InputPurpose):void
    set_invisible_char(ch: gunichar):void
    set_max_length(max: number):void
    set_max_width_chars(n_chars: number):void
    set_overwrite_mode(overwrite: boolean):void
    set_placeholder_text(text: string):void
    set_progress_fraction(fraction: number):void
    set_progress_pulse_step(fraction: number):void
    set_tabs(tabs: Pango.TabArray):void
    set_text(text: string):void
    set_visibility(visible: boolean):void
    set_width_chars(n_chars: number):void
    text_index_to_layout_index(text_index: number):number
    unset_invisible_char():void
  }
  export class EntryAccessible extends WidgetAccessible {
  }
  export class EntryBuffer extends GObject.Object {
    constructor(initial_chars: string, n_initial_chars: number)
    delete_text(position: number, n_chars: number):number
    emit_deleted_text(position: number, n_chars: number):void
    emit_inserted_text(position: number, chars: string, n_chars: number):void
    get_bytes():number
    get_length():number
    get_max_length():number
    get_text():string
    insert_text(position: number, chars: string, n_chars: number):number
    set_max_length(max_length: number):void
    set_text(chars: string, n_chars: number):void
  }
  export class EntryCompletion extends GObject.Object {
    constructor(area: CellArea)
    complete():void
    compute_prefix(key: string):string
    delete_action(index_: number):void
    get_completion_prefix():string
    get_entry():Widget
    get_inline_completion():boolean
    get_inline_selection():boolean
    get_minimum_key_length():number
    get_model():TreeModel
    get_popup_completion():boolean
    get_popup_set_width():boolean
    get_popup_single_match():boolean
    get_text_column():number
    insert_action_markup(index_: number, markup: string):void
    insert_action_text(index_: number, text: string):void
    insert_prefix():void
    set_inline_completion(inline_completion: boolean):void
    set_inline_selection(inline_selection: boolean):void
    set_match_func(func: EntryCompletionMatchFunc, func_data: any, func_notify: GLib.DestroyNotify):void
    set_minimum_key_length(length: number):void
    set_model(model: TreeModel):void
    set_popup_completion(popup_completion: boolean):void
    set_popup_set_width(popup_set_width: boolean):void
    set_popup_single_match(popup_single_match: boolean):void
    set_text_column(column: number):void
  }
  export class EntryIconAccessible extends Atk.Object {
  }
  export class EventBox extends Bin {
    get_above_child():boolean
    get_visible_window():boolean
    set_above_child(above_child: boolean):void
    set_visible_window(visible_window: boolean):void
  }
  export class EventController extends GObject.Object {
    get_propagation_phase():PropagationPhase
    get_widget():Widget
    handle_event(event: Gdk.Event):boolean
    reset():void
    set_propagation_phase(phase: PropagationPhase):void
  }
  export class Expander extends Bin {
    constructor(label: string)
    constructor(label: string)
    get_expanded():boolean
    get_label():string
    get_label_fill():boolean
    get_label_widget():Widget
    get_resize_toplevel():boolean
    get_spacing():number
    get_use_markup():boolean
    get_use_underline():boolean
    set_expanded(expanded: boolean):void
    set_label(label: string):void
    set_label_fill(label_fill: boolean):void
    set_label_widget(label_widget: Widget):void
    set_resize_toplevel(resize_toplevel: boolean):void
    set_spacing(spacing: number):void
    set_use_markup(use_markup: boolean):void
    set_use_underline(use_underline: boolean):void
  }
  export class ExpanderAccessible extends ContainerAccessible {
  }
  export class FileChooserButton extends Box {
    constructor(title: string, action: FileChooserAction)
    constructor(dialog: Dialog)
    get_focus_on_click():boolean
    get_title():string
    get_width_chars():number
    set_focus_on_click(focus_on_click: boolean):void
    set_title(title: string):void
    set_width_chars(n_chars: number):void
  }
  export class FileChooserDialog extends Dialog {
    constructor(title: string, parent: Window, action: FileChooserAction, first_button_text: string, ...args: any[])
  }
  export class FileChooserWidget extends Box {
    constructor(action: FileChooserAction)
  }
  export class FileFilter extends GObject.InitiallyUnowned {
    add_custom(needed: FileFilterFlags, func: FileFilterFunc, data: any, notify: GLib.DestroyNotify):void
    add_mime_type(mime_type: string):void
    add_pattern(pattern: string):void
    add_pixbuf_formats():void
    filter(filter_info: FileFilterInfo):boolean
    get_name():string
    get_needed():FileFilterFlags
    set_name(name: string):void
  }
  export class Fixed extends Container {
    move(widget: Widget, x: number, y: number):void
    put(widget: Widget, x: number, y: number):void
  }
  export class FlowBox extends Container {
    bind_model(model: Gio.ListModel, create_widget_func: FlowBoxCreateWidgetFunc, user_data: any, user_data_free_func: GLib.DestroyNotify):void
    get_activate_on_single_click():boolean
    get_child_at_index(idx: number):FlowBoxChild
    get_column_spacing():number
    get_homogeneous():boolean
    get_max_children_per_line():number
    get_min_children_per_line():number
    get_row_spacing():number
    get_selected_children():GLib.List
    get_selection_mode():SelectionMode
    insert(widget: Widget, position: number):void
    invalidate_filter():void
    invalidate_sort():void
    select_all():void
    select_child(child: FlowBoxChild):void
    selected_foreach(func: FlowBoxForeachFunc, data: any):void
    set_activate_on_single_click(single: boolean):void
    set_column_spacing(spacing: number):void
    set_filter_func(filter_func: FlowBoxFilterFunc, user_data: any, destroy: GLib.DestroyNotify):void
    set_hadjustment(adjustment: Adjustment):void
    set_homogeneous(homogeneous: boolean):void
    set_max_children_per_line(n_children: number):void
    set_min_children_per_line(n_children: number):void
    set_row_spacing(spacing: number):void
    set_selection_mode(mode: SelectionMode):void
    set_sort_func(sort_func: FlowBoxSortFunc, user_data: any, destroy: GLib.DestroyNotify):void
    set_vadjustment(adjustment: Adjustment):void
    unselect_all():void
    unselect_child(child: FlowBoxChild):void
  }
  export class FlowBoxAccessible extends ContainerAccessible {
  }
  export class FlowBoxChild extends Bin {
    changed():void
    get_index():number
    is_selected():boolean
  }
  export class FlowBoxChildAccessible extends ContainerAccessible {
  }
  export class FontButton extends Button {
    constructor(fontname: string)
    get_font_name():string
    get_show_size():boolean
    get_show_style():boolean
    get_title():string
    get_use_font():boolean
    get_use_size():boolean
    set_font_name(fontname: string):boolean
    set_show_size(show_size: boolean):void
    set_show_style(show_style: boolean):void
    set_title(title: string):void
    set_use_font(use_font: boolean):void
    set_use_size(use_size: boolean):void
  }
  export class FontChooserDialog extends Dialog {
    constructor(title: string, parent: Window)
  }
  export class FontChooserWidget extends Box {
  }
  export class FontSelection extends Box {
    get_face():Pango.FontFace
    get_face_list():Widget
    get_family():Pango.FontFamily
    get_family_list():Widget
    get_font_name():string
    get_preview_entry():Widget
    get_preview_text():string
    get_size():number
    get_size_entry():Widget
    get_size_list():Widget
    set_font_name(fontname: string):boolean
    set_preview_text(text: string):void
  }
  export class FontSelectionDialog extends Dialog {
    constructor(title: string)
    get_cancel_button():Widget
    get_font_name():string
    get_font_selection():Widget
    get_ok_button():Widget
    get_preview_text():string
    set_font_name(fontname: string):boolean
    set_preview_text(text: string):void
  }
  export class Frame extends Bin {
    constructor(label: string)
    get_label():string
    get_label_align(xalign: gfloat, yalign: gfloat):void
    get_label_widget():Widget
    get_shadow_type():ShadowType
    set_label(label: string):void
    set_label_align(xalign: gfloat, yalign: gfloat):void
    set_label_widget(label_widget: Widget):void
    set_shadow_type(type: ShadowType):void
  }
  export class FrameAccessible extends ContainerAccessible {
  }
  export class GLArea extends Widget {
    attach_buffers():void
    get_auto_render():boolean
    get_context():Gdk.GLContext
    get_error():GLib.Error
    get_has_alpha():boolean
    get_has_depth_buffer():boolean
    get_has_stencil_buffer():boolean
    get_required_version(major: number, minor: number):void
    make_current():void
    queue_render():void
    set_auto_render(auto_render: boolean):void
    set_error(error: GLib.Error):void
    set_has_alpha(has_alpha: boolean):void
    set_has_depth_buffer(has_depth_buffer: boolean):void
    set_has_stencil_buffer(has_stencil_buffer: boolean):void
    set_required_version(major: number, minor: number):void
  }
  export class Gesture extends EventController {
    get_bounding_box(rect: Gdk.Rectangle):boolean
    get_bounding_box_center(x: number, y: number):boolean
    get_device():Gdk.Device
    get_group():GLib.List
    get_last_event(sequence: Gdk.EventSequence):Gdk.Event
    get_last_updated_sequence():Gdk.EventSequence
    get_point(sequence: Gdk.EventSequence, x: number, y: number):boolean
    get_sequence_state(sequence: Gdk.EventSequence):EventSequenceState
    get_sequences():GLib.List
    get_window():Gdk.Window
    group(gesture: Gesture):void
    handles_sequence(sequence: Gdk.EventSequence):boolean
    is_active():boolean
    is_grouped_with(other: Gesture):boolean
    is_recognized():boolean
    set_sequence_state(sequence: Gdk.EventSequence, state: EventSequenceState):boolean
    set_state(state: EventSequenceState):boolean
    set_window(window: Gdk.Window):void
    ungroup():void
  }
  export class GestureDrag extends GestureSingle {
    constructor(widget: Widget)
    get_offset(x: number, y: number):boolean
    get_start_point(x: number, y: number):boolean
  }
  export class GestureLongPress extends GestureSingle {
    constructor(widget: Widget)
  }
  export class GestureMultiPress extends GestureSingle {
    constructor(widget: Widget)
    get_area(rect: Gdk.Rectangle):boolean
    set_area(rect: Gdk.Rectangle):void
  }
  export class GesturePan extends GestureDrag {
    constructor(widget: Widget, orientation: Orientation)
    get_orientation():Orientation
    set_orientation(orientation: Orientation):void
  }
  export class GestureRotate extends Gesture {
    constructor(widget: Widget)
    get_angle_delta():number
  }
  export class GestureSingle extends Gesture {
    get_button():number
    get_current_button():number
    get_current_sequence():Gdk.EventSequence
    get_exclusive():boolean
    get_touch_only():boolean
    set_button(button: number):void
    set_exclusive(exclusive: boolean):void
    set_touch_only(touch_only: boolean):void
  }
  export class GestureSwipe extends GestureSingle {
    constructor(widget: Widget)
    get_velocity(velocity_x: number, velocity_y: number):boolean
  }
  export class GestureZoom extends Gesture {
    constructor(widget: Widget)
    get_scale_delta():number
  }
  export class Grid extends Container {
    attach(child: Widget, left: number, top: number, width: number, height: number):void
    attach_next_to(child: Widget, sibling: Widget, side: PositionType, width: number, height: number):void
    get_baseline_row():number
    get_child_at(left: number, top: number):Widget
    get_column_homogeneous():boolean
    get_column_spacing():number
    get_row_baseline_position(row: number):BaselinePosition
    get_row_homogeneous():boolean
    get_row_spacing():number
    insert_column(position: number):void
    insert_next_to(sibling: Widget, side: PositionType):void
    insert_row(position: number):void
    remove_column(position: number):void
    remove_row(position: number):void
    set_baseline_row(row: number):void
    set_column_homogeneous(homogeneous: boolean):void
    set_column_spacing(spacing: number):void
    set_row_baseline_position(row: number, pos: BaselinePosition):void
    set_row_homogeneous(homogeneous: boolean):void
    set_row_spacing(spacing: number):void
  }
  export class HBox extends Box {
    constructor(homogeneous: boolean, spacing: number)
  }
  export class HButtonBox extends ButtonBox {
  }
  export class HPaned extends Paned {
  }
  export class HSV extends Widget {
    get_color(h: number, s: number, v: number):void
    get_metrics(size: number, ring_width: number):void
    is_adjusting():boolean
    set_color(h: number, s: number, v: number):void
    set_metrics(size: number, ring_width: number):void
  }
  export class HScale extends Scale {
    constructor(adjustment: Adjustment)
    constructor(min: number, max: number, step: number)
  }
  export class HScrollbar extends Scrollbar {
    constructor(adjustment: Adjustment)
  }
  export class HSeparator extends Separator {
  }
  export class HandleBox extends Bin {
    get_child_detached():boolean
    get_handle_position():PositionType
    get_shadow_type():ShadowType
    get_snap_edge():PositionType
    set_handle_position(position: PositionType):void
    set_shadow_type(type: ShadowType):void
    set_snap_edge(edge: PositionType):void
  }
  export class HeaderBar extends Container {
    get_custom_title():Widget
    get_decoration_layout():string
    get_has_subtitle():boolean
    get_show_close_button():boolean
    get_subtitle():string
    get_title():string
    pack_end(child: Widget):void
    pack_start(child: Widget):void
    set_custom_title(title_widget: Widget):void
    set_decoration_layout(layout: string):void
    set_has_subtitle(setting: boolean):void
    set_show_close_button(setting: boolean):void
    set_subtitle(subtitle: string):void
    set_title(title: string):void
  }
  export class IMContext extends GObject.Object {
    delete_surrounding(offset: number, n_chars: number):boolean
    filter_keypress(event: Gdk.EventKey):boolean
    focus_in():void
    focus_out():void
    get_preedit_string(str: string, attrs: Pango.AttrList, cursor_pos: number):void
    get_surrounding(text: string, cursor_index: number):boolean
    reset():void
    set_client_window(window: Gdk.Window):void
    set_cursor_location(area: Gdk.Rectangle):void
    set_surrounding(text: string, len: number, cursor_index: number):void
    set_use_preedit(use_preedit: boolean):void
  }
  export class IMContextSimple extends IMContext {
    add_table(data: guint16[], max_seq_len: number, n_seqs: number):void
  }
  export class IMMulticontext extends IMContext {
    append_menuitems(menushell: MenuShell):void
    get_context_id():string
    set_context_id(context_id: string):void
  }
  export class IconFactory extends GObject.Object {
    add(stock_id: string, icon_set: IconSet):void
    add_default():void
    lookup(stock_id: string):IconSet
    remove_default():void
  }
  export class IconInfo extends GObject.Object {
    constructor(icon_theme: IconTheme, pixbuf: GdkPixbuf.Pixbuf)
    copy():IconInfo
    free():void
    get_attach_points(points: Gdk.Point[], n_points: number):boolean
    get_base_scale():number
    get_base_size():number
    get_builtin_pixbuf():GdkPixbuf.Pixbuf
    get_display_name():string
    get_embedded_rect(rectangle: Gdk.Rectangle):boolean
    get_filename():filename
    is_symbolic():boolean
    load_icon():GdkPixbuf.Pixbuf
    load_icon_async(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, user_data: any):void
    load_icon_finish(res: Gio.AsyncResult):GdkPixbuf.Pixbuf
    load_surface(for_window: Gdk.Window):cairo.Surface
    load_symbolic(fg: Gdk.RGBA, success_color: Gdk.RGBA, warning_color: Gdk.RGBA, error_color: Gdk.RGBA, was_symbolic: boolean):GdkPixbuf.Pixbuf
    load_symbolic_async(fg: Gdk.RGBA, success_color: Gdk.RGBA, warning_color: Gdk.RGBA, error_color: Gdk.RGBA, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, user_data: any):void
    load_symbolic_finish(res: Gio.AsyncResult, was_symbolic: boolean):GdkPixbuf.Pixbuf
    load_symbolic_for_context(context: StyleContext, was_symbolic: boolean):GdkPixbuf.Pixbuf
    load_symbolic_for_context_async(context: StyleContext, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, user_data: any):void
    load_symbolic_for_context_finish(res: Gio.AsyncResult, was_symbolic: boolean):GdkPixbuf.Pixbuf
    load_symbolic_for_style(style: Style, state: StateType, was_symbolic: boolean):GdkPixbuf.Pixbuf
    set_raw_coordinates(raw_coordinates: boolean):void
  }
  export class IconTheme extends GObject.Object {
    add_resource_path(path: string):void
    append_search_path(path: filename):void
    choose_icon(icon_names: string[], size: number, flags: IconLookupFlags):IconInfo
    choose_icon_for_scale(icon_names: string[], size: number, scale: number, flags: IconLookupFlags):IconInfo
    get_example_icon_name():string
    get_icon_sizes(icon_name: string):number[]
    get_search_path(path: filename[], n_elements: number):void
    has_icon(icon_name: string):boolean
    list_contexts():GLib.List
    list_icons(context: string):GLib.List
    load_icon(icon_name: string, size: number, flags: IconLookupFlags):GdkPixbuf.Pixbuf
    load_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags):GdkPixbuf.Pixbuf
    load_surface(icon_name: string, size: number, scale: number, for_window: Gdk.Window, flags: IconLookupFlags):cairo.Surface
    lookup_by_gicon(icon: Gio.Icon, size: number, flags: IconLookupFlags):IconInfo
    lookup_by_gicon_for_scale(icon: Gio.Icon, size: number, scale: number, flags: IconLookupFlags):IconInfo
    lookup_icon(icon_name: string, size: number, flags: IconLookupFlags):IconInfo
    lookup_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags):IconInfo
    prepend_search_path(path: filename):void
    rescan_if_needed():boolean
    set_custom_theme(theme_name: string):void
    set_screen(screen: Gdk.Screen):void
    set_search_path(path: filename[], n_elements: number):void
  }
  export class IconView extends Container {
    constructor(area: CellArea)
    constructor(model: TreeModel)
    convert_widget_to_bin_window_coords(wx: number, wy: number, bx: number, by: number):void
    create_drag_icon(path: TreePath):cairo.Surface
    enable_model_drag_dest(targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction):void
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction):void
    get_activate_on_single_click():boolean
    get_cell_rect(path: TreePath, cell: CellRenderer, rect: Gdk.Rectangle):boolean
    get_column_spacing():number
    get_columns():number
    get_cursor(path: TreePath, cell: CellRenderer):boolean
    get_dest_item_at_pos(drag_x: number, drag_y: number, path: TreePath, pos: IconViewDropPosition):boolean
    get_drag_dest_item(path: TreePath, pos: IconViewDropPosition):void
    get_item_at_pos(x: number, y: number, path: TreePath, cell: CellRenderer):boolean
    get_item_column(path: TreePath):number
    get_item_orientation():Orientation
    get_item_padding():number
    get_item_row(path: TreePath):number
    get_item_width():number
    get_margin():number
    get_markup_column():number
    get_model():TreeModel
    get_path_at_pos(x: number, y: number):TreePath
    get_pixbuf_column():number
    get_reorderable():boolean
    get_row_spacing():number
    get_selected_items():GLib.List
    get_selection_mode():SelectionMode
    get_spacing():number
    get_text_column():number
    get_tooltip_column():number
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean, model: TreeModel, path: TreePath, iter: TreeIter):boolean
    get_visible_range(start_path: TreePath, end_path: TreePath):boolean
    item_activated(path: TreePath):void
    path_is_selected(path: TreePath):boolean
    scroll_to_path(path: TreePath, use_align: boolean, row_align: gfloat, col_align: gfloat):void
    select_all():void
    select_path(path: TreePath):void
    selected_foreach(func: IconViewForeachFunc, data: any):void
    set_activate_on_single_click(single: boolean):void
    set_column_spacing(column_spacing: number):void
    set_columns(columns: number):void
    set_cursor(path: TreePath, cell: CellRenderer, start_editing: boolean):void
    set_drag_dest_item(path: TreePath, pos: IconViewDropPosition):void
    set_item_orientation(orientation: Orientation):void
    set_item_padding(item_padding: number):void
    set_item_width(item_width: number):void
    set_margin(margin: number):void
    set_markup_column(column: number):void
    set_model(model: TreeModel):void
    set_pixbuf_column(column: number):void
    set_reorderable(reorderable: boolean):void
    set_row_spacing(row_spacing: number):void
    set_selection_mode(mode: SelectionMode):void
    set_spacing(spacing: number):void
    set_text_column(column: number):void
    set_tooltip_cell(tooltip: Tooltip, path: TreePath, cell: CellRenderer):void
    set_tooltip_column(column: number):void
    set_tooltip_item(tooltip: Tooltip, path: TreePath):void
    unselect_all():void
    unselect_path(path: TreePath):void
    unset_model_drag_dest():void
    unset_model_drag_source():void
  }
  export class IconViewAccessible extends ContainerAccessible {
  }
  export class Image extends Misc {
    constructor(animation: GdkPixbuf.PixbufAnimation)
    constructor(filename: filename)
    constructor(icon: Gio.Icon, size: number)
    constructor(icon_name: string, size: number)
    constructor(icon_set: IconSet, size: number)
    constructor(pixbuf: GdkPixbuf.Pixbuf)
    constructor(resource_path: string)
    constructor(stock_id: string, size: number)
    constructor(surface: cairo.Surface)
    clear():void
    get_animation():GdkPixbuf.PixbufAnimation
    get_gicon(gicon: Gio.Icon, size: number):void
    get_icon_name(icon_name: string, size: number):void
    get_icon_set(icon_set: IconSet, size: number):void
    get_pixbuf():GdkPixbuf.Pixbuf
    get_pixel_size():number
    get_stock(stock_id: string, size: number):void
    get_storage_type():ImageType
    set_from_animation(animation: GdkPixbuf.PixbufAnimation):void
    set_from_file(filename: filename):void
    set_from_gicon(icon: Gio.Icon, size: number):void
    set_from_icon_name(icon_name: string, size: number):void
    set_from_icon_set(icon_set: IconSet, size: number):void
    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf):void
    set_from_resource(resource_path: string):void
    set_from_stock(stock_id: string, size: number):void
    set_from_surface(surface: cairo.Surface):void
    set_pixel_size(pixel_size: number):void
  }
  export class ImageAccessible extends WidgetAccessible {
  }
  export class ImageCellAccessible extends RendererCellAccessible {
  }
  export class ImageMenuItem extends MenuItem {
    constructor(stock_id: string, accel_group: AccelGroup)
    constructor(label: string)
    constructor(label: string)
    get_always_show_image():boolean
    get_image():Widget
    get_use_stock():boolean
    set_accel_group(accel_group: AccelGroup):void
    set_always_show_image(always_show: boolean):void
    set_image(image: Widget):void
    set_use_stock(use_stock: boolean):void
  }
  export class InfoBar extends Box {
    constructor(first_button_text: string, ...args: any[])
    add_action_widget(child: Widget, response_id: number):void
    add_button(button_text: string, response_id: number):Button
    add_buttons(first_button_text: string, ...args: any[]):void
    get_action_area():Widget
    get_content_area():Widget
    get_message_type():MessageType
    get_show_close_button():boolean
    response(response_id: number):void
    set_default_response(response_id: number):void
    set_message_type(message_type: MessageType):void
    set_response_sensitive(response_id: number, setting: boolean):void
    set_show_close_button(setting: boolean):void
  }
  export class Invisible extends Widget {
    constructor(screen: Gdk.Screen)
    get_screen():Gdk.Screen
    set_screen(screen: Gdk.Screen):void
  }
  export class Label extends Misc {
    constructor(str: string)
    constructor(str: string)
    get_angle():number
    get_attributes():Pango.AttrList
    get_current_uri():string
    get_ellipsize():Pango.EllipsizeMode
    get_justify():Justification
    get_label():string
    get_layout():Pango.Layout
    get_layout_offsets(x: number, y: number):void
    get_line_wrap():boolean
    get_line_wrap_mode():Pango.WrapMode
    get_lines():number
    get_max_width_chars():number
    get_mnemonic_keyval():number
    get_mnemonic_widget():Widget
    get_selectable():boolean
    get_selection_bounds(start: number, end: number):boolean
    get_single_line_mode():boolean
    get_text():string
    get_track_visited_links():boolean
    get_use_markup():boolean
    get_use_underline():boolean
    get_width_chars():number
    get_xalign():gfloat
    get_yalign():gfloat
    select_region(start_offset: number, end_offset: number):void
    set_angle(angle: number):void
    set_attributes(attrs: Pango.AttrList):void
    set_ellipsize(mode: Pango.EllipsizeMode):void
    set_justify(jtype: Justification):void
    set_label(str: string):void
    set_line_wrap(wrap: boolean):void
    set_line_wrap_mode(wrap_mode: Pango.WrapMode):void
    set_lines(lines: number):void
    set_markup(str: string):void
    set_markup_with_mnemonic(str: string):void
    set_max_width_chars(n_chars: number):void
    set_mnemonic_widget(widget: Widget):void
    set_pattern(pattern: string):void
    set_selectable(setting: boolean):void
    set_single_line_mode(single_line_mode: boolean):void
    set_text(str: string):void
    set_text_with_mnemonic(str: string):void
    set_track_visited_links(track_links: boolean):void
    set_use_markup(setting: boolean):void
    set_use_underline(setting: boolean):void
    set_width_chars(n_chars: number):void
    set_xalign(xalign: gfloat):void
    set_yalign(yalign: gfloat):void
  }
  export class LabelAccessible extends WidgetAccessible {
  }
  export class Layout extends Container {
    constructor(hadjustment: Adjustment, vadjustment: Adjustment)
    get_bin_window():Gdk.Window
    get_hadjustment():Adjustment
    get_size(width: number, height: number):void
    get_vadjustment():Adjustment
    move(child_widget: Widget, x: number, y: number):void
    put(child_widget: Widget, x: number, y: number):void
    set_hadjustment(adjustment: Adjustment):void
    set_size(width: number, height: number):void
    set_vadjustment(adjustment: Adjustment):void
  }
  export class LevelBar extends Widget {
    constructor(min_value: number, max_value: number)
    add_offset_value(name: string, value: number):void
    get_inverted():boolean
    get_max_value():number
    get_min_value():number
    get_mode():LevelBarMode
    get_offset_value(name: string, value: number):boolean
    get_value():number
    remove_offset_value(name: string):void
    set_inverted(inverted: boolean):void
    set_max_value(value: number):void
    set_min_value(value: number):void
    set_mode(mode: LevelBarMode):void
    set_value(value: number):void
  }
  export class LevelBarAccessible extends WidgetAccessible {
  }
  export class LinkButton extends Button {
    constructor(uri: string)
    constructor(uri: string, label: string)
    get_uri():string
    get_visited():boolean
    set_uri(uri: string):void
    set_visited(visited: boolean):void
  }
  export class LinkButtonAccessible extends ButtonAccessible {
  }
  export class ListBox extends Container {
    bind_model(model: Gio.ListModel, create_widget_func: ListBoxCreateWidgetFunc, user_data: any, user_data_free_func: GLib.DestroyNotify):void
    drag_highlight_row(row: ListBoxRow):void
    drag_unhighlight_row():void
    get_activate_on_single_click():boolean
    get_adjustment():Adjustment
    get_row_at_index(index_: number):ListBoxRow
    get_row_at_y(y: number):ListBoxRow
    get_selected_row():ListBoxRow
    get_selected_rows():GLib.List
    get_selection_mode():SelectionMode
    insert(child: Widget, position: number):void
    invalidate_filter():void
    invalidate_headers():void
    invalidate_sort():void
    prepend(child: Widget):void
    select_all():void
    select_row(row: ListBoxRow):void
    selected_foreach(func: ListBoxForeachFunc, data: any):void
    set_activate_on_single_click(single: boolean):void
    set_adjustment(adjustment: Adjustment):void
    set_filter_func(filter_func: ListBoxFilterFunc, user_data: any, destroy: GLib.DestroyNotify):void
    set_header_func(update_header: ListBoxUpdateHeaderFunc, user_data: any, destroy: GLib.DestroyNotify):void
    set_placeholder(placeholder: Widget):void
    set_selection_mode(mode: SelectionMode):void
    set_sort_func(sort_func: ListBoxSortFunc, user_data: any, destroy: GLib.DestroyNotify):void
    unselect_all():void
    unselect_row(row: ListBoxRow):void
  }
  export class ListBoxAccessible extends ContainerAccessible {
  }
  export class ListBoxRow extends Bin {
    changed():void
    get_activatable():boolean
    get_header():Widget
    get_index():number
    get_selectable():boolean
    is_selected():boolean
    set_activatable(activatable: boolean):void
    set_header(header: Widget):void
    set_selectable(selectable: boolean):void
  }
  export class ListBoxRowAccessible extends ContainerAccessible {
  }
  export class ListStore extends GObject.Object {
    constructor(n_columns: number, ...args: any[])
    constructor(n_columns: number, types: number[])
    append(iter: TreeIter):void
    clear():void
    insert(iter: TreeIter, position: number):void
    insert_after(iter: TreeIter, sibling: TreeIter):void
    insert_before(iter: TreeIter, sibling: TreeIter):void
    insert_with_values(iter: TreeIter, position: number, ...args: any[]):void
    insert_with_valuesv(iter: TreeIter, position: number, columns: number[], values: GObject.Value[], n_values: number):void
    iter_is_valid(iter: TreeIter):boolean
    move_after(iter: TreeIter, position: TreeIter):void
    move_before(iter: TreeIter, position: TreeIter):void
    prepend(iter: TreeIter):void
    remove(iter: TreeIter):boolean
    reorder(new_order: number[]):void
    set(iter: TreeIter, ...args: any[]):void
    set_column_types(n_columns: number, types: number[]):void
    set_valist(iter: TreeIter, var_args: any):void
    set_value(iter: TreeIter, column: number, value: GObject.Value):void
    set_valuesv(iter: TreeIter, columns: number[], values: GObject.Value[], n_values: number):void
    swap(a: TreeIter, b: TreeIter):void
  }
  export class LockButton extends Button {
    constructor(permission: Gio.Permission)
    get_permission():Gio.Permission
    set_permission(permission: Gio.Permission):void
  }
  export class LockButtonAccessible extends ButtonAccessible {
  }
  export class Menu extends MenuShell {
    constructor(model: Gio.MenuModel)
    attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number):void
    attach_to_widget(attach_widget: Widget, detacher: MenuDetachFunc):void
    detach():void
    get_accel_group():AccelGroup
    get_accel_path():string
    get_active():Widget
    get_attach_widget():Widget
    get_monitor():number
    get_reserve_toggle_size():boolean
    get_tearoff_state():boolean
    get_title():string
    popdown():void
    popup(parent_menu_shell: Widget, parent_menu_item: Widget, func: MenuPositionFunc, data: any, button: number, activate_time: guint32):void
    popup_for_device(device: Gdk.Device, parent_menu_shell: Widget, parent_menu_item: Widget, func: MenuPositionFunc, data: any, destroy: GLib.DestroyNotify, button: number, activate_time: guint32):void
    reorder_child(child: Widget, position: number):void
    reposition():void
    set_accel_group(accel_group: AccelGroup):void
    set_accel_path(accel_path: string):void
    set_active(index: number):void
    set_monitor(monitor_num: number):void
    set_reserve_toggle_size(reserve_toggle_size: boolean):void
    set_screen(screen: Gdk.Screen):void
    set_tearoff_state(torn_off: boolean):void
    set_title(title: string):void
  }
  export class MenuAccessible extends MenuShellAccessible {
  }
  export class MenuBar extends MenuShell {
    constructor(model: Gio.MenuModel)
    get_child_pack_direction():PackDirection
    get_pack_direction():PackDirection
    set_child_pack_direction(child_pack_dir: PackDirection):void
    set_pack_direction(pack_dir: PackDirection):void
  }
  export class MenuButton extends ToggleButton {
    get_align_widget():Widget
    get_direction():ArrowType
    get_menu_model():Gio.MenuModel
    get_popover():Popover
    get_popup():Menu
    get_use_popover():boolean
    set_align_widget(align_widget: Widget):void
    set_direction(direction: ArrowType):void
    set_menu_model(menu_model: Gio.MenuModel):void
    set_popover(popover: Widget):void
    set_popup(menu: Widget):void
    set_use_popover(use_popover: boolean):void
  }
  export class MenuButtonAccessible extends ToggleButtonAccessible {
  }
  export class MenuItem extends Bin {
    constructor(label: string)
    constructor(label: string)
    activate():void
    deselect():void
    get_accel_path():string
    get_label():string
    get_reserve_indicator():boolean
    get_right_justified():boolean
    get_submenu():Widget
    get_use_underline():boolean
    select():void
    set_accel_path(accel_path: string):void
    set_label(label: string):void
    set_reserve_indicator(reserve: boolean):void
    set_right_justified(right_justified: boolean):void
    set_submenu(submenu: Menu):void
    set_use_underline(setting: boolean):void
    toggle_size_allocate(allocation: number):void
    toggle_size_request(requisition: number):void
  }
  export class MenuItemAccessible extends ContainerAccessible {
  }
  export class MenuShell extends Container {
    activate_item(menu_item: Widget, force_deactivate: boolean):void
    append(child: MenuItem):void
    bind_model(model: Gio.MenuModel, action_namespace: string, with_separators: boolean):void
    cancel():void
    deactivate():void
    deselect():void
    get_parent_shell():Widget
    get_selected_item():Widget
    get_take_focus():boolean
    insert(child: Widget, position: number):void
    prepend(child: Widget):void
    select_first(search_sensitive: boolean):void
    select_item(menu_item: Widget):void
    set_take_focus(take_focus: boolean):void
  }
  export class MenuShellAccessible extends ContainerAccessible {
  }
  export class MenuToolButton extends ToolButton {
    constructor(icon_widget: Widget, label: string)
    constructor(stock_id: string)
    get_menu():Widget
    set_arrow_tooltip_markup(markup: string):void
    set_arrow_tooltip_text(text: string):void
    set_menu(menu: Widget):void
  }
  export class MessageDialog extends Dialog {
    constructor(parent: Window, flags: DialogFlags, type: MessageType, buttons: ButtonsType, message_format: string, ...args: any[])
    constructor(parent: Window, flags: DialogFlags, type: MessageType, buttons: ButtonsType, message_format: string, ...args: any[])
    format_secondary_markup(message_format: string, ...args: any[]):void
    format_secondary_text(message_format: string, ...args: any[]):void
    get_image():Widget
    get_message_area():Widget
    set_image(image: Widget):void
    set_markup(str: string):void
  }
  export class Misc extends Widget {
    get_alignment(xalign: gfloat, yalign: gfloat):void
    get_padding(xpad: number, ypad: number):void
    set_alignment(xalign: gfloat, yalign: gfloat):void
    set_padding(xpad: number, ypad: number):void
  }
  export class ModelButton extends Button {
  }
  export class MountOperation extends Gio.MountOperation {
    constructor(parent: Window)
    get_parent():Window
    get_screen():Gdk.Screen
    is_showing():boolean
    set_parent(parent: Window):void
    set_screen(screen: Gdk.Screen):void
  }
  export class Notebook extends Container {
    append_page(child: Widget, tab_label: Widget):number
    append_page_menu(child: Widget, tab_label: Widget, menu_label: Widget):number
    detach_tab(child: Widget):void
    get_action_widget(pack_type: PackType):Widget
    get_current_page():number
    get_group_name():string
    get_menu_label(child: Widget):Widget
    get_menu_label_text(child: Widget):string
    get_n_pages():number
    get_nth_page(page_num: number):Widget
    get_scrollable():boolean
    get_show_border():boolean
    get_show_tabs():boolean
    get_tab_detachable(child: Widget):boolean
    get_tab_hborder():guint16
    get_tab_label(child: Widget):Widget
    get_tab_label_text(child: Widget):string
    get_tab_pos():PositionType
    get_tab_reorderable(child: Widget):boolean
    get_tab_vborder():guint16
    insert_page(child: Widget, tab_label: Widget, position: number):number
    insert_page_menu(child: Widget, tab_label: Widget, menu_label: Widget, position: number):number
    next_page():void
    page_num(child: Widget):number
    popup_disable():void
    popup_enable():void
    prepend_page(child: Widget, tab_label: Widget):number
    prepend_page_menu(child: Widget, tab_label: Widget, menu_label: Widget):number
    prev_page():void
    remove_page(page_num: number):void
    reorder_child(child: Widget, position: number):void
    set_action_widget(widget: Widget, pack_type: PackType):void
    set_current_page(page_num: number):void
    set_group_name(group_name: string):void
    set_menu_label(child: Widget, menu_label: Widget):void
    set_menu_label_text(child: Widget, menu_text: string):void
    set_scrollable(scrollable: boolean):void
    set_show_border(show_border: boolean):void
    set_show_tabs(show_tabs: boolean):void
    set_tab_detachable(child: Widget, detachable: boolean):void
    set_tab_label(child: Widget, tab_label: Widget):void
    set_tab_label_text(child: Widget, tab_text: string):void
    set_tab_pos(pos: PositionType):void
    set_tab_reorderable(child: Widget, reorderable: boolean):void
  }
  export class NotebookAccessible extends ContainerAccessible {
  }
  export class NotebookPageAccessible extends Atk.Object {
    constructor(notebook: NotebookAccessible, child: Widget)
    invalidate():void
  }
  export class NumerableIcon extends Gio.EmblemedIcon {
    get_background_gicon():Gio.Icon
    get_background_icon_name():string
    get_count():number
    get_label():string
    get_style_context():StyleContext
    set_background_gicon(icon: Gio.Icon):void
    set_background_icon_name(icon_name: string):void
    set_count(count: number):void
    set_label(label: string):void
    set_style_context(style: StyleContext):void
  }
  export class OffscreenWindow extends Window {
    get_pixbuf():GdkPixbuf.Pixbuf
    get_surface():cairo.Surface
  }
  export class Overlay extends Bin {
    add_overlay(widget: Widget):void
    get_overlay_pass_through(widget: Widget):boolean
    reorder_overlay(child: Widget, position: number):void
    set_overlay_pass_through(widget: Widget, pass_through: boolean):void
  }
  export class PageSetup extends GObject.Object {
    constructor(file_name: filename)
    constructor(key_file: GLib.KeyFile, group_name: string)
    copy():PageSetup
    get_bottom_margin(unit: Unit):number
    get_left_margin(unit: Unit):number
    get_orientation():PageOrientation
    get_page_height(unit: Unit):number
    get_page_width(unit: Unit):number
    get_paper_height(unit: Unit):number
    get_paper_size():PaperSize
    get_paper_width(unit: Unit):number
    get_right_margin(unit: Unit):number
    get_top_margin(unit: Unit):number
    load_file(file_name: filename):boolean
    load_key_file(key_file: GLib.KeyFile, group_name: string):boolean
    set_bottom_margin(margin: number, unit: Unit):void
    set_left_margin(margin: number, unit: Unit):void
    set_orientation(orientation: PageOrientation):void
    set_paper_size(size: PaperSize):void
    set_paper_size_and_default_margins(size: PaperSize):void
    set_right_margin(margin: number, unit: Unit):void
    set_top_margin(margin: number, unit: Unit):void
    to_file(file_name: filename):boolean
    to_key_file(key_file: GLib.KeyFile, group_name: string):void
  }
  export class Paned extends Container {
    constructor(orientation: Orientation)
    add1(child: Widget):void
    add2(child: Widget):void
    get_child1():Widget
    get_child2():Widget
    get_handle_window():Gdk.Window
    get_position():number
    get_wide_handle():boolean
    pack1(child: Widget, resize: boolean, shrink: boolean):void
    pack2(child: Widget, resize: boolean, shrink: boolean):void
    set_position(position: number):void
    set_wide_handle(wide: boolean):void
  }
  export class PanedAccessible extends ContainerAccessible {
  }
  export class PlacesSidebar extends ScrolledWindow {
    add_shortcut(location: Gio.File):void
    get_local_only():boolean
    get_location():Gio.File
    get_nth_bookmark(n: number):Gio.File
    get_open_flags():PlacesOpenFlags
    get_show_connect_to_server():boolean
    get_show_desktop():boolean
    get_show_enter_location():boolean
    get_show_other_locations():boolean
    get_show_recent():boolean
    get_show_trash():boolean
    list_shortcuts():GLib.SList
    remove_shortcut(location: Gio.File):void
    set_drop_targets_visible(visible: boolean, context: Gdk.DragContext):void
    set_local_only(local_only: boolean):void
    set_location(location: Gio.File):void
    set_open_flags(flags: PlacesOpenFlags):void
    set_show_connect_to_server(show_connect_to_server: boolean):void
    set_show_desktop(show_desktop: boolean):void
    set_show_enter_location(show_enter_location: boolean):void
    set_show_other_locations(show_other_locations: boolean):void
    set_show_recent(show_recent: boolean):void
    set_show_trash(show_trash: boolean):void
  }
  export class Plug extends Window {
    constructor(socket_id: xlib.Window)
    constructor(display: Gdk.Display, socket_id: xlib.Window)
    construct(socket_id: xlib.Window):void
    construct_for_display(display: Gdk.Display, socket_id: xlib.Window):void
    get_embedded():boolean
    get_id():xlib.Window
    get_socket_window():Gdk.Window
  }
  export class Popover extends Bin {
    constructor(relative_to: Widget)
    constructor(relative_to: Widget, model: Gio.MenuModel)
    bind_model(model: Gio.MenuModel, action_namespace: string):void
    get_default_widget():Widget
    get_modal():boolean
    get_pointing_to(rect: Gdk.Rectangle):boolean
    get_position():PositionType
    get_relative_to():Widget
    get_transitions_enabled():boolean
    set_default_widget(widget: Widget):void
    set_modal(modal: boolean):void
    set_pointing_to(rect: Gdk.Rectangle):void
    set_position(position: PositionType):void
    set_relative_to(relative_to: Widget):void
    set_transitions_enabled(transitions_enabled: boolean):void
  }
  export class PopoverAccessible extends ContainerAccessible {
  }
  export class PopoverMenu extends Popover {
    open_submenu(name: string):void
  }
  export class PrintContext extends GObject.Object {
    create_pango_context():Pango.Context
    create_pango_layout():Pango.Layout
    get_cairo_context():cairo.Context
    get_dpi_x():number
    get_dpi_y():number
    get_hard_margins(top: number, bottom: number, left: number, right: number):boolean
    get_height():number
    get_page_setup():PageSetup
    get_pango_fontmap():Pango.FontMap
    get_width():number
    set_cairo_context(cr: cairo.Context, dpi_x: number, dpi_y: number):void
  }
  export class PrintOperation extends GObject.Object {
    cancel():void
    draw_page_finish():void
    get_default_page_setup():PageSetup
    get_embed_page_setup():boolean
    get_error():void
    get_has_selection():boolean
    get_n_pages_to_print():number
    get_print_settings():PrintSettings
    get_status():PrintStatus
    get_status_string():string
    get_support_selection():boolean
    is_finished():boolean
    run(action: PrintOperationAction, parent: Window):PrintOperationResult
    set_allow_async(allow_async: boolean):void
    set_current_page(current_page: number):void
    set_custom_tab_label(label: string):void
    set_default_page_setup(default_page_setup: PageSetup):void
    set_defer_drawing():void
    set_embed_page_setup(embed: boolean):void
    set_export_filename(filename: filename):void
    set_has_selection(has_selection: boolean):void
    set_job_name(job_name: string):void
    set_n_pages(n_pages: number):void
    set_print_settings(print_settings: PrintSettings):void
    set_show_progress(show_progress: boolean):void
    set_support_selection(support_selection: boolean):void
    set_track_print_status(track_status: boolean):void
    set_unit(unit: Unit):void
    set_use_full_page(full_page: boolean):void
  }
  export class PrintSettings extends GObject.Object {
    constructor(file_name: filename)
    constructor(key_file: GLib.KeyFile, group_name: string)
    copy():PrintSettings
    foreach(func: PrintSettingsFunc, user_data: any):void
    get(key: string):string
    get_bool(key: string):boolean
    get_collate():boolean
    get_default_source():string
    get_dither():string
    get_double(key: string):number
    get_double_with_default(key: string, def: number):number
    get_duplex():PrintDuplex
    get_finishings():string
    get_int(key: string):number
    get_int_with_default(key: string, def: number):number
    get_length(key: string, unit: Unit):number
    get_media_type():string
    get_n_copies():number
    get_number_up():number
    get_number_up_layout():NumberUpLayout
    get_orientation():PageOrientation
    get_output_bin():string
    get_page_ranges(num_ranges: number):PageRange[]
    get_page_set():PageSet
    get_paper_height(unit: Unit):number
    get_paper_size():PaperSize
    get_paper_width(unit: Unit):number
    get_print_pages():PrintPages
    get_printer():string
    get_printer_lpi():number
    get_quality():PrintQuality
    get_resolution():number
    get_resolution_x():number
    get_resolution_y():number
    get_reverse():boolean
    get_scale():number
    get_use_color():boolean
    has_key(key: string):boolean
    load_file(file_name: filename):boolean
    load_key_file(key_file: GLib.KeyFile, group_name: string):boolean
    set(key: string, value: string):void
    set_bool(key: string, value: boolean):void
    set_collate(collate: boolean):void
    set_default_source(default_source: string):void
    set_dither(dither: string):void
    set_double(key: string, value: number):void
    set_duplex(duplex: PrintDuplex):void
    set_finishings(finishings: string):void
    set_int(key: string, value: number):void
    set_length(key: string, value: number, unit: Unit):void
    set_media_type(media_type: string):void
    set_n_copies(num_copies: number):void
    set_number_up(number_up: number):void
    set_number_up_layout(number_up_layout: NumberUpLayout):void
    set_orientation(orientation: PageOrientation):void
    set_output_bin(output_bin: string):void
    set_page_ranges(page_ranges: PageRange[], num_ranges: number):void
    set_page_set(page_set: PageSet):void
    set_paper_height(height: number, unit: Unit):void
    set_paper_size(paper_size: PaperSize):void
    set_paper_width(width: number, unit: Unit):void
    set_print_pages(pages: PrintPages):void
    set_printer(printer: string):void
    set_printer_lpi(lpi: number):void
    set_quality(quality: PrintQuality):void
    set_resolution(resolution: number):void
    set_resolution_xy(resolution_x: number, resolution_y: number):void
    set_reverse(reverse: boolean):void
    set_scale(scale: number):void
    set_use_color(use_color: boolean):void
    to_file(file_name: filename):boolean
    to_key_file(key_file: GLib.KeyFile, group_name: string):void
    unset(key: string):void
  }
  export class ProgressBar extends Widget {
    get_ellipsize():Pango.EllipsizeMode
    get_fraction():number
    get_inverted():boolean
    get_pulse_step():number
    get_show_text():boolean
    get_text():string
    pulse():void
    set_ellipsize(mode: Pango.EllipsizeMode):void
    set_fraction(fraction: number):void
    set_inverted(inverted: boolean):void
    set_pulse_step(fraction: number):void
    set_show_text(show_text: boolean):void
    set_text(text: string):void
  }
  export class ProgressBarAccessible extends WidgetAccessible {
  }
  export class RadioAction extends ToggleAction {
    constructor(name: string, label: string, tooltip: string, stock_id: string, value: number)
    get_current_value():number
    get_group():GLib.SList
    join_group(group_source: RadioAction):void
    set_current_value(current_value: number):void
    set_group(group: GLib.SList):void
  }
  export class RadioButton extends CheckButton {
    constructor(group: GLib.SList)
    constructor(radio_group_member: RadioButton)
    constructor(group: GLib.SList, label: string)
    constructor(radio_group_member: RadioButton, label: string)
    constructor(group: GLib.SList, label: string)
    constructor(radio_group_member: RadioButton, label: string)
    get_group():GLib.SList
    join_group(group_source: RadioButton):void
    set_group(group: GLib.SList):void
  }
  export class RadioButtonAccessible extends ToggleButtonAccessible {
  }
  export class RadioMenuItem extends CheckMenuItem {
    constructor(group: GLib.SList)
    constructor(group: RadioMenuItem)
    constructor(group: GLib.SList, label: string)
    constructor(group: RadioMenuItem, label: string)
    constructor(group: GLib.SList, label: string)
    constructor(group: RadioMenuItem, label: string)
    get_group():GLib.SList
    join_group(group_source: RadioMenuItem):void
    set_group(group: GLib.SList):void
  }
  export class RadioMenuItemAccessible extends CheckMenuItemAccessible {
  }
  export class RadioToolButton extends ToggleToolButton {
    constructor(group: GLib.SList)
    constructor(group: GLib.SList, stock_id: string)
    constructor(group: RadioToolButton)
    constructor(group: RadioToolButton, stock_id: string)
    get_group():GLib.SList
    set_group(group: GLib.SList):void
  }
  export class Range extends Widget {
    get_adjustment():Adjustment
    get_fill_level():number
    get_flippable():boolean
    get_inverted():boolean
    get_lower_stepper_sensitivity():SensitivityType
    get_min_slider_size():number
    get_range_rect(range_rect: Gdk.Rectangle):void
    get_restrict_to_fill_level():boolean
    get_round_digits():number
    get_show_fill_level():boolean
    get_slider_range(slider_start: number, slider_end: number):void
    get_slider_size_fixed():boolean
    get_upper_stepper_sensitivity():SensitivityType
    get_value():number
    set_adjustment(adjustment: Adjustment):void
    set_fill_level(fill_level: number):void
    set_flippable(flippable: boolean):void
    set_increments(step: number, page: number):void
    set_inverted(setting: boolean):void
    set_lower_stepper_sensitivity(sensitivity: SensitivityType):void
    set_min_slider_size(min_size: number):void
    set_range(min: number, max: number):void
    set_restrict_to_fill_level(restrict_to_fill_level: boolean):void
    set_round_digits(round_digits: number):void
    set_show_fill_level(show_fill_level: boolean):void
    set_slider_size_fixed(size_fixed: boolean):void
    set_upper_stepper_sensitivity(sensitivity: SensitivityType):void
    set_value(value: number):void
  }
  export class RangeAccessible extends WidgetAccessible {
  }
  export class RcStyle extends GObject.Object {
    copy():RcStyle
  }
  export class RecentAction extends Action {
    constructor(name: string, label: string, tooltip: string, stock_id: string)
    constructor(name: string, label: string, tooltip: string, stock_id: string, manager: RecentManager)
    get_show_numbers():boolean
    set_show_numbers(show_numbers: boolean):void
  }
  export class RecentChooserDialog extends Dialog {
    constructor(title: string, parent: Window, first_button_text: string, ...args: any[])
    constructor(title: string, parent: Window, manager: RecentManager, first_button_text: string, ...args: any[])
  }
  export class RecentChooserMenu extends Menu {
    constructor(manager: RecentManager)
    get_show_numbers():boolean
    set_show_numbers(show_numbers: boolean):void
  }
  export class RecentChooserWidget extends Box {
    constructor(manager: RecentManager)
  }
  export class RecentFilter extends GObject.InitiallyUnowned {
    add_age(days: number):void
    add_application(application: string):void
    add_custom(needed: RecentFilterFlags, func: RecentFilterFunc, data: any, data_destroy: GLib.DestroyNotify):void
    add_group(group: string):void
    add_mime_type(mime_type: string):void
    add_pattern(pattern: string):void
    add_pixbuf_formats():void
    filter(filter_info: RecentFilterInfo):boolean
    get_name():string
    get_needed():RecentFilterFlags
    set_name(name: string):void
  }
  export class RecentManager extends GObject.Object {
    add_full(uri: string, recent_data: RecentData):boolean
    add_item(uri: string):boolean
    get_items():GLib.List
    has_item(uri: string):boolean
    lookup_item(uri: string):RecentInfo
    move_item(uri: string, new_uri: string):boolean
    purge_items():number
    remove_item(uri: string):boolean
  }
  export class RendererCellAccessible extends CellAccessible {
    constructor(renderer: CellRenderer)
  }
  export class Revealer extends Bin {
    get_child_revealed():boolean
    get_reveal_child():boolean
    get_transition_duration():number
    get_transition_type():RevealerTransitionType
    set_reveal_child(reveal_child: boolean):void
    set_transition_duration(duration: number):void
    set_transition_type(transition: RevealerTransitionType):void
  }
  export class Scale extends Range {
    constructor(orientation: Orientation, adjustment: Adjustment)
    constructor(orientation: Orientation, min: number, max: number, step: number)
    add_mark(value: number, position: PositionType, markup: string):void
    clear_marks():void
    get_digits():number
    get_draw_value():boolean
    get_has_origin():boolean
    get_layout():Pango.Layout
    get_layout_offsets(x: number, y: number):void
    get_value_pos():PositionType
    set_digits(digits: number):void
    set_draw_value(draw_value: boolean):void
    set_has_origin(has_origin: boolean):void
    set_value_pos(pos: PositionType):void
  }
  export class ScaleAccessible extends RangeAccessible {
  }
  export class ScaleButton extends Button {
    constructor(size: number, min: number, max: number, step: number, icons: string[])
    get_adjustment():Adjustment
    get_minus_button():Button
    get_plus_button():Button
    get_popup():Widget
    get_value():number
    set_adjustment(adjustment: Adjustment):void
    set_icons(icons: string[]):void
    set_value(value: number):void
  }
  export class ScaleButtonAccessible extends ButtonAccessible {
  }
  export class Scrollbar extends Range {
    constructor(orientation: Orientation, adjustment: Adjustment)
  }
  export class ScrolledWindow extends Bin {
    constructor(hadjustment: Adjustment, vadjustment: Adjustment)
    add_with_viewport(child: Widget):void
    get_capture_button_press():boolean
    get_hadjustment():Adjustment
    get_hscrollbar():Widget
    get_kinetic_scrolling():boolean
    get_min_content_height():number
    get_min_content_width():number
    get_overlay_scrolling():boolean
    get_placement():CornerType
    get_policy(hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType):void
    get_shadow_type():ShadowType
    get_vadjustment():Adjustment
    get_vscrollbar():Widget
    set_capture_button_press(capture_button_press: boolean):void
    set_hadjustment(hadjustment: Adjustment):void
    set_kinetic_scrolling(kinetic_scrolling: boolean):void
    set_min_content_height(height: number):void
    set_min_content_width(width: number):void
    set_overlay_scrolling(overlay_scrolling: boolean):void
    set_placement(window_placement: CornerType):void
    set_policy(hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType):void
    set_shadow_type(type: ShadowType):void
    set_vadjustment(vadjustment: Adjustment):void
    unset_placement():void
  }
  export class ScrolledWindowAccessible extends ContainerAccessible {
  }
  export class SearchBar extends Bin {
    connect_entry(entry: Entry):void
    get_search_mode():boolean
    get_show_close_button():boolean
    handle_event(event: Gdk.Event):boolean
    set_search_mode(search_mode: boolean):void
    set_show_close_button(visible: boolean):void
  }
  export class SearchEntry extends Entry {
    handle_event(event: Gdk.Event):boolean
  }
  export class Separator extends Widget {
    constructor(orientation: Orientation)
  }
  export class SeparatorMenuItem extends MenuItem {
  }
  export class SeparatorToolItem extends ToolItem {
    get_draw():boolean
    set_draw(draw: boolean):void
  }
  export class Settings extends GObject.Object {
    set_double_property(name: string, v_double: number, origin: string):void
    set_long_property(name: string, v_long: number, origin: string):void
    set_property_value(name: string, svalue: SettingsValue):void
    set_string_property(name: string, v_string: string, origin: string):void
  }
  export class SizeGroup extends GObject.Object {
    constructor(mode: SizeGroupMode)
    add_widget(widget: Widget):void
    get_ignore_hidden():boolean
    get_mode():SizeGroupMode
    get_widgets():GLib.SList
    remove_widget(widget: Widget):void
    set_ignore_hidden(ignore_hidden: boolean):void
    set_mode(mode: SizeGroupMode):void
  }
  export class Socket extends Container {
    add_id(window: xlib.Window):void
    get_id():xlib.Window
    get_plug_window():Gdk.Window
  }
  export class SpinButton extends Entry {
    constructor(adjustment: Adjustment, climb_rate: number, digits: number)
    constructor(min: number, max: number, step: number)
    configure(adjustment: Adjustment, climb_rate: number, digits: number):void
    get_adjustment():Adjustment
    get_digits():number
    get_increments(step: number, page: number):void
    get_numeric():boolean
    get_range(min: number, max: number):void
    get_snap_to_ticks():boolean
    get_update_policy():SpinButtonUpdatePolicy
    get_value():number
    get_value_as_int():number
    get_wrap():boolean
    set_adjustment(adjustment: Adjustment):void
    set_digits(digits: number):void
    set_increments(step: number, page: number):void
    set_numeric(numeric: boolean):void
    set_range(min: number, max: number):void
    set_snap_to_ticks(snap_to_ticks: boolean):void
    set_update_policy(policy: SpinButtonUpdatePolicy):void
    set_value(value: number):void
    set_wrap(wrap: boolean):void
    spin(direction: SpinType, increment: number):void
    update():void
  }
  export class SpinButtonAccessible extends EntryAccessible {
  }
  export class Spinner extends Widget {
    start():void
    stop():void
  }
  export class SpinnerAccessible extends WidgetAccessible {
  }
  export class Stack extends Container {
    add_named(child: Widget, name: string):void
    add_titled(child: Widget, name: string, title: string):void
    get_child_by_name(name: string):Widget
    get_hhomogeneous():boolean
    get_homogeneous():boolean
    get_interpolate_size():boolean
    get_transition_duration():number
    get_transition_running():boolean
    get_transition_type():StackTransitionType
    get_vhomogeneous():boolean
    get_visible_child():Widget
    get_visible_child_name():string
    set_hhomogeneous(hhomogeneous: boolean):void
    set_homogeneous(homogeneous: boolean):void
    set_interpolate_size(interpolate_size: boolean):void
    set_transition_duration(duration: number):void
    set_transition_type(transition: StackTransitionType):void
    set_vhomogeneous(vhomogeneous: boolean):void
    set_visible_child(child: Widget):void
    set_visible_child_full(name: string, transition: StackTransitionType):void
    set_visible_child_name(name: string):void
  }
  export class StackSidebar extends Bin {
    get_stack():Stack
    set_stack(stack: Stack):void
  }
  export class StackSwitcher extends Box {
    get_stack():Stack
    set_stack(stack: Stack):void
  }
  export class StatusIcon extends GObject.Object {
    constructor(filename: filename)
    constructor(icon: Gio.Icon)
    constructor(icon_name: string)
    constructor(pixbuf: GdkPixbuf.Pixbuf)
    constructor(stock_id: string)
    get_geometry(screen: Gdk.Screen, area: Gdk.Rectangle, orientation: Orientation):boolean
    get_gicon():Gio.Icon
    get_has_tooltip():boolean
    get_icon_name():string
    get_pixbuf():GdkPixbuf.Pixbuf
    get_screen():Gdk.Screen
    get_size():number
    get_stock():string
    get_storage_type():ImageType
    get_title():string
    get_tooltip_markup():string
    get_tooltip_text():string
    get_visible():boolean
    get_x11_window_id():guint32
    is_embedded():boolean
    set_from_file(filename: filename):void
    set_from_gicon(icon: Gio.Icon):void
    set_from_icon_name(icon_name: string):void
    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf):void
    set_from_stock(stock_id: string):void
    set_has_tooltip(has_tooltip: boolean):void
    set_name(name: string):void
    set_screen(screen: Gdk.Screen):void
    set_title(title: string):void
    set_tooltip_markup(markup: string):void
    set_tooltip_text(text: string):void
    set_visible(visible: boolean):void
  }
  export class Statusbar extends Box {
    get_context_id(context_description: string):number
    get_message_area():Box
    pop(context_id: number):void
    push(context_id: number, text: string):number
    remove(context_id: number, message_id: number):void
    remove_all(context_id: number):void
  }
  export class StatusbarAccessible extends ContainerAccessible {
  }
  export class Style extends GObject.Object {
    apply_default_background(cr: cairo.Context, window: Gdk.Window, state_type: StateType, x: number, y: number, width: number, height: number):void
    attach(window: Gdk.Window):Style
    copy():Style
    detach():void
    get(widget_type: number, first_property_name: string, ...args: any[]):void
    get_style_property(widget_type: number, property_name: string, value: GObject.Value):void
    get_valist(widget_type: number, first_property_name: string, var_args: any):void
    has_context():boolean
    lookup_color(color_name: string, color: Gdk.Color):boolean
    lookup_icon_set(stock_id: string):IconSet
    render_icon(source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget, detail: string):GdkPixbuf.Pixbuf
    set_background(window: Gdk.Window, state_type: StateType):void
  }
  export class StyleContext extends GObject.Object {
    add_class(class_name: string):void
    add_provider(provider: StyleProvider, priority: number):void
    add_region(region_name: string, flags: RegionFlags):void
    cancel_animations(region_id: any):void
    get(state: StateFlags, ...args: any[]):void
    get_background_color(state: StateFlags, color: Gdk.RGBA):void
    get_border(state: StateFlags, border: Border):void
    get_border_color(state: StateFlags, color: Gdk.RGBA):void
    get_color(state: StateFlags, color: Gdk.RGBA):void
    get_direction():TextDirection
    get_font(state: StateFlags):Pango.FontDescription
    get_frame_clock():Gdk.FrameClock
    get_junction_sides():JunctionSides
    get_margin(state: StateFlags, margin: Border):void
    get_padding(state: StateFlags, padding: Border):void
    get_parent():StyleContext
    get_path():WidgetPath
    get_property(property: string, state: StateFlags, value: GObject.Value):void
    get_scale():number
    get_screen():Gdk.Screen
    get_section(property: string):CssSection
    get_state():StateFlags
    get_style(...args: any[]):void
    get_style_property(property_name: string, value: GObject.Value):void
    get_style_valist(args: any):void
    get_valist(state: StateFlags, args: any):void
    has_class(class_name: string):boolean
    has_region(region_name: string, flags_return: RegionFlags):boolean
    invalidate():void
    list_classes():GLib.List
    list_regions():GLib.List
    lookup_color(color_name: string, color: Gdk.RGBA):boolean
    lookup_icon_set(stock_id: string):IconSet
    notify_state_change(window: Gdk.Window, region_id: any, state: StateType, state_value: boolean):void
    pop_animatable_region():void
    push_animatable_region(region_id: any):void
    remove_class(class_name: string):void
    remove_provider(provider: StyleProvider):void
    remove_region(region_name: string):void
    restore():void
    save():void
    scroll_animations(window: Gdk.Window, dx: number, dy: number):void
    set_background(window: Gdk.Window):void
    set_direction(direction: TextDirection):void
    set_frame_clock(frame_clock: Gdk.FrameClock):void
    set_junction_sides(sides: JunctionSides):void
    set_parent(parent: StyleContext):void
    set_path(path: WidgetPath):void
    set_scale(scale: number):void
    set_screen(screen: Gdk.Screen):void
    set_state(flags: StateFlags):void
    state_is_running(state: StateType, progress: number):boolean
  }
  export class StyleProperties extends GObject.Object {
    clear():void
    get(state: StateFlags, ...args: any[]):void
    get_property(property: string, state: StateFlags, value: GObject.Value):boolean
    get_valist(state: StateFlags, args: any):void
    lookup_color(name: string):SymbolicColor
    map_color(name: string, color: SymbolicColor):void
    merge(props_to_merge: StyleProperties, replace: boolean):void
    set(state: StateFlags, ...args: any[]):void
    set_property(property: string, state: StateFlags, value: GObject.Value):void
    set_valist(state: StateFlags, args: any):void
    unset_property(property: string, state: StateFlags):void
  }
  export class Switch extends Widget {
    get_active():boolean
    get_state():boolean
    set_active(is_active: boolean):void
    set_state(state: boolean):void
  }
  export class SwitchAccessible extends WidgetAccessible {
  }
  export class Table extends Container {
    constructor(rows: number, columns: number, homogeneous: boolean)
    attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number, xoptions: AttachOptions, yoptions: AttachOptions, xpadding: number, ypadding: number):void
    attach_defaults(widget: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number):void
    get_col_spacing(column: number):number
    get_default_col_spacing():number
    get_default_row_spacing():number
    get_homogeneous():boolean
    get_row_spacing(row: number):number
    get_size(rows: number, columns: number):void
    resize(rows: number, columns: number):void
    set_col_spacing(column: number, spacing: number):void
    set_col_spacings(spacing: number):void
    set_homogeneous(homogeneous: boolean):void
    set_row_spacing(row: number, spacing: number):void
    set_row_spacings(spacing: number):void
  }
  export class TearoffMenuItem extends MenuItem {
  }
  export class TextBuffer extends GObject.Object {
    constructor(table: TextTagTable)
    add_mark(mark: TextMark, where: TextIter):void
    add_selection_clipboard(clipboard: Clipboard):void
    apply_tag(tag: TextTag, start: TextIter, end: TextIter):void
    apply_tag_by_name(name: string, start: TextIter, end: TextIter):void
    backspace(iter: TextIter, interactive: boolean, default_editable: boolean):boolean
    begin_user_action():void
    copy_clipboard(clipboard: Clipboard):void
    create_child_anchor(iter: TextIter):TextChildAnchor
    create_mark(mark_name: string, where: TextIter, left_gravity: boolean):TextMark
    create_tag(tag_name: string, first_property_name: string, ...args: any[]):TextTag
    cut_clipboard(clipboard: Clipboard, default_editable: boolean):void
    delete(start: TextIter, end: TextIter):void
    delete_interactive(start_iter: TextIter, end_iter: TextIter, default_editable: boolean):boolean
    delete_mark(mark: TextMark):void
    delete_mark_by_name(name: string):void
    delete_selection(interactive: boolean, default_editable: boolean):boolean
    deserialize(content_buffer: TextBuffer, format: Gdk.Atom, iter: TextIter, data: number[], length: number):boolean
    deserialize_get_can_create_tags(format: Gdk.Atom):boolean
    deserialize_set_can_create_tags(format: Gdk.Atom, can_create_tags: boolean):void
    end_user_action():void
    get_bounds(start: TextIter, end: TextIter):void
    get_char_count():number
    get_copy_target_list():TargetList
    get_deserialize_formats(n_formats: number):Gdk.Atom[]
    get_end_iter(iter: TextIter):void
    get_has_selection():boolean
    get_insert():TextMark
    get_iter_at_child_anchor(iter: TextIter, anchor: TextChildAnchor):void
    get_iter_at_line(iter: TextIter, line_number: number):void
    get_iter_at_line_index(iter: TextIter, line_number: number, byte_index: number):void
    get_iter_at_line_offset(iter: TextIter, line_number: number, char_offset: number):void
    get_iter_at_mark(iter: TextIter, mark: TextMark):void
    get_iter_at_offset(iter: TextIter, char_offset: number):void
    get_line_count():number
    get_mark(name: string):TextMark
    get_modified():boolean
    get_paste_target_list():TargetList
    get_selection_bound():TextMark
    get_selection_bounds(start: TextIter, end: TextIter):boolean
    get_serialize_formats(n_formats: number):Gdk.Atom[]
    get_slice(start: TextIter, end: TextIter, include_hidden_chars: boolean):string
    get_start_iter(iter: TextIter):void
    get_tag_table():TextTagTable
    get_text(start: TextIter, end: TextIter, include_hidden_chars: boolean):string
    insert(iter: TextIter, text: string, len: number):void
    insert_at_cursor(text: string, len: number):void
    insert_child_anchor(iter: TextIter, anchor: TextChildAnchor):void
    insert_interactive(iter: TextIter, text: string, len: number, default_editable: boolean):boolean
    insert_interactive_at_cursor(text: string, len: number, default_editable: boolean):boolean
    insert_markup(iter: TextIter, markup: string, len: number):void
    insert_pixbuf(iter: TextIter, pixbuf: GdkPixbuf.Pixbuf):void
    insert_range(iter: TextIter, start: TextIter, end: TextIter):void
    insert_range_interactive(iter: TextIter, start: TextIter, end: TextIter, default_editable: boolean):boolean
    insert_with_tags(iter: TextIter, text: string, len: number, first_tag: TextTag, ...args: any[]):void
    insert_with_tags_by_name(iter: TextIter, text: string, len: number, first_tag_name: string, ...args: any[]):void
    move_mark(mark: TextMark, where: TextIter):void
    move_mark_by_name(name: string, where: TextIter):void
    paste_clipboard(clipboard: Clipboard, override_location: TextIter, default_editable: boolean):void
    place_cursor(where: TextIter):void
    register_deserialize_format(mime_type: string, function_: TextBufferDeserializeFunc, user_data: any, user_data_destroy: GLib.DestroyNotify):Gdk.Atom
    register_deserialize_tagset(tagset_name: string):Gdk.Atom
    register_serialize_format(mime_type: string, function_: TextBufferSerializeFunc, user_data: any, user_data_destroy: GLib.DestroyNotify):Gdk.Atom
    register_serialize_tagset(tagset_name: string):Gdk.Atom
    remove_all_tags(start: TextIter, end: TextIter):void
    remove_selection_clipboard(clipboard: Clipboard):void
    remove_tag(tag: TextTag, start: TextIter, end: TextIter):void
    remove_tag_by_name(name: string, start: TextIter, end: TextIter):void
    select_range(ins: TextIter, bound: TextIter):void
    serialize(content_buffer: TextBuffer, format: Gdk.Atom, start: TextIter, end: TextIter, length: number):number[]
    set_modified(setting: boolean):void
    set_text(text: string, len: number):void
    unregister_deserialize_format(format: Gdk.Atom):void
    unregister_serialize_format(format: Gdk.Atom):void
  }
  export class TextCellAccessible extends RendererCellAccessible {
  }
  export class TextChildAnchor extends GObject.Object {
    get_deleted():boolean
    get_widgets():GLib.List
  }
  export class TextMark extends GObject.Object {
    constructor(name: string, left_gravity: boolean)
    get_buffer():TextBuffer
    get_deleted():boolean
    get_left_gravity():boolean
    get_name():string
    get_visible():boolean
    set_visible(setting: boolean):void
  }
  export class TextTag extends GObject.Object {
    constructor(name: string)
    event(event_object: GObject.Object, event: Gdk.Event, iter: TextIter):boolean
    get_priority():number
    set_priority(priority: number):void
  }
  export class TextTagTable extends GObject.Object {
    add(tag: TextTag):boolean
    foreach(func: TextTagTableForeach, data: any):void
    get_size():number
    lookup(name: string):TextTag
    remove(tag: TextTag):void
  }
  export class TextView extends Container {
    constructor(buffer: TextBuffer)
    add_child_at_anchor(child: Widget, anchor: TextChildAnchor):void
    add_child_in_window(child: Widget, which_window: TextWindowType, xpos: number, ypos: number):void
    backward_display_line(iter: TextIter):boolean
    backward_display_line_start(iter: TextIter):boolean
    buffer_to_window_coords(win: TextWindowType, buffer_x: number, buffer_y: number, window_x: number, window_y: number):void
    forward_display_line(iter: TextIter):boolean
    forward_display_line_end(iter: TextIter):boolean
    get_accepts_tab():boolean
    get_border_window_size(type: TextWindowType):number
    get_bottom_margin():number
    get_buffer():TextBuffer
    get_cursor_locations(iter: TextIter, strong: Gdk.Rectangle, weak: Gdk.Rectangle):void
    get_cursor_visible():boolean
    get_default_attributes():TextAttributes
    get_editable():boolean
    get_hadjustment():Adjustment
    get_indent():number
    get_input_hints():InputHints
    get_input_purpose():InputPurpose
    get_iter_at_location(iter: TextIter, x: number, y: number):void
    get_iter_at_position(iter: TextIter, trailing: number, x: number, y: number):void
    get_iter_location(iter: TextIter, location: Gdk.Rectangle):void
    get_justification():Justification
    get_left_margin():number
    get_line_at_y(target_iter: TextIter, y: number, line_top: number):void
    get_line_yrange(iter: TextIter, y: number, height: number):void
    get_monospace():boolean
    get_overwrite():boolean
    get_pixels_above_lines():number
    get_pixels_below_lines():number
    get_pixels_inside_wrap():number
    get_right_margin():number
    get_tabs():Pango.TabArray
    get_top_margin():number
    get_vadjustment():Adjustment
    get_visible_rect(visible_rect: Gdk.Rectangle):void
    get_window(win: TextWindowType):Gdk.Window
    get_window_type(window: Gdk.Window):TextWindowType
    get_wrap_mode():WrapMode
    im_context_filter_keypress(event: Gdk.EventKey):boolean
    move_child(child: Widget, xpos: number, ypos: number):void
    move_mark_onscreen(mark: TextMark):boolean
    move_visually(iter: TextIter, count: number):boolean
    place_cursor_onscreen():boolean
    reset_im_context():void
    scroll_mark_onscreen(mark: TextMark):void
    scroll_to_iter(iter: TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number):boolean
    scroll_to_mark(mark: TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number):void
    set_accepts_tab(accepts_tab: boolean):void
    set_border_window_size(type: TextWindowType, size: number):void
    set_bottom_margin(bottom_margin: number):void
    set_buffer(buffer: TextBuffer):void
    set_cursor_visible(setting: boolean):void
    set_editable(setting: boolean):void
    set_indent(indent: number):void
    set_input_hints(hints: InputHints):void
    set_input_purpose(purpose: InputPurpose):void
    set_justification(justification: Justification):void
    set_left_margin(left_margin: number):void
    set_monospace(monospace: boolean):void
    set_overwrite(overwrite: boolean):void
    set_pixels_above_lines(pixels_above_lines: number):void
    set_pixels_below_lines(pixels_below_lines: number):void
    set_pixels_inside_wrap(pixels_inside_wrap: number):void
    set_right_margin(right_margin: number):void
    set_tabs(tabs: Pango.TabArray):void
    set_top_margin(top_margin: number):void
    set_wrap_mode(wrap_mode: WrapMode):void
    starts_display_line(iter: TextIter):boolean
    window_to_buffer_coords(win: TextWindowType, window_x: number, window_y: number, buffer_x: number, buffer_y: number):void
  }
  export class TextViewAccessible extends ContainerAccessible {
  }
  export class ThemingEngine extends GObject.Object {
    get(state: StateFlags, ...args: any[]):void
    get_background_color(state: StateFlags, color: Gdk.RGBA):void
    get_border(state: StateFlags, border: Border):void
    get_border_color(state: StateFlags, color: Gdk.RGBA):void
    get_color(state: StateFlags, color: Gdk.RGBA):void
    get_direction():TextDirection
    get_font(state: StateFlags):Pango.FontDescription
    get_junction_sides():JunctionSides
    get_margin(state: StateFlags, margin: Border):void
    get_padding(state: StateFlags, padding: Border):void
    get_path():WidgetPath
    get_property(property: string, state: StateFlags, value: GObject.Value):void
    get_screen():Gdk.Screen
    get_state():StateFlags
    get_style(...args: any[]):void
    get_style_property(property_name: string, value: GObject.Value):void
    get_style_valist(args: any):void
    get_valist(state: StateFlags, args: any):void
    has_class(style_class: string):boolean
    has_region(style_region: string, flags: RegionFlags):boolean
    lookup_color(color_name: string, color: Gdk.RGBA):boolean
    state_is_running(state: StateType, progress: number):boolean
  }
  export class ToggleAction extends Action {
    constructor(name: string, label: string, tooltip: string, stock_id: string)
    get_active():boolean
    get_draw_as_radio():boolean
    set_active(is_active: boolean):void
    set_draw_as_radio(draw_as_radio: boolean):void
    toggled():void
  }
  export class ToggleButton extends Button {
    constructor(label: string)
    constructor(label: string)
    get_active():boolean
    get_inconsistent():boolean
    get_mode():boolean
    set_active(is_active: boolean):void
    set_inconsistent(setting: boolean):void
    set_mode(draw_indicator: boolean):void
    toggled():void
  }
  export class ToggleButtonAccessible extends ButtonAccessible {
  }
  export class ToggleToolButton extends ToolButton {
    constructor(stock_id: string)
    get_active():boolean
    set_active(is_active: boolean):void
  }
  export class ToolButton extends ToolItem {
    constructor(icon_widget: Widget, label: string)
    constructor(stock_id: string)
    get_icon_name():string
    get_icon_widget():Widget
    get_label():string
    get_label_widget():Widget
    get_stock_id():string
    get_use_underline():boolean
    set_icon_name(icon_name: string):void
    set_icon_widget(icon_widget: Widget):void
    set_label(label: string):void
    set_label_widget(label_widget: Widget):void
    set_stock_id(stock_id: string):void
    set_use_underline(use_underline: boolean):void
  }
  export class ToolItem extends Bin {
    get_ellipsize_mode():Pango.EllipsizeMode
    get_expand():boolean
    get_homogeneous():boolean
    get_icon_size():number
    get_is_important():boolean
    get_orientation():Orientation
    get_proxy_menu_item(menu_item_id: string):Widget
    get_relief_style():ReliefStyle
    get_text_alignment():gfloat
    get_text_orientation():Orientation
    get_text_size_group():SizeGroup
    get_toolbar_style():ToolbarStyle
    get_use_drag_window():boolean
    get_visible_horizontal():boolean
    get_visible_vertical():boolean
    rebuild_menu():void
    retrieve_proxy_menu_item():Widget
    set_expand(expand: boolean):void
    set_homogeneous(homogeneous: boolean):void
    set_is_important(is_important: boolean):void
    set_proxy_menu_item(menu_item_id: string, menu_item: Widget):void
    set_tooltip_markup(markup: string):void
    set_tooltip_text(text: string):void
    set_use_drag_window(use_drag_window: boolean):void
    set_visible_horizontal(visible_horizontal: boolean):void
    set_visible_vertical(visible_vertical: boolean):void
    toolbar_reconfigured():void
  }
  export class ToolItemGroup extends Container {
    constructor(label: string)
    get_collapsed():boolean
    get_drop_item(x: number, y: number):ToolItem
    get_ellipsize():Pango.EllipsizeMode
    get_header_relief():ReliefStyle
    get_item_position(item: ToolItem):number
    get_label():string
    get_label_widget():Widget
    get_n_items():number
    get_nth_item(index: number):ToolItem
    insert(item: ToolItem, position: number):void
    set_collapsed(collapsed: boolean):void
    set_ellipsize(ellipsize: Pango.EllipsizeMode):void
    set_header_relief(style: ReliefStyle):void
    set_item_position(item: ToolItem, position: number):void
    set_label(label: string):void
    set_label_widget(label_widget: Widget):void
  }
  export class ToolPalette extends Container {
    add_drag_dest(widget: Widget, flags: DestDefaults, targets: ToolPaletteDragTargets, actions: Gdk.DragAction):void
    get_drag_item(selection: SelectionData):Widget
    get_drop_group(x: number, y: number):ToolItemGroup
    get_drop_item(x: number, y: number):ToolItem
    get_exclusive(group: ToolItemGroup):boolean
    get_expand(group: ToolItemGroup):boolean
    get_group_position(group: ToolItemGroup):number
    get_hadjustment():Adjustment
    get_icon_size():number
    get_style():ToolbarStyle
    get_vadjustment():Adjustment
    set_drag_source(targets: ToolPaletteDragTargets):void
    set_exclusive(group: ToolItemGroup, exclusive: boolean):void
    set_expand(group: ToolItemGroup, expand: boolean):void
    set_group_position(group: ToolItemGroup, position: number):void
    set_icon_size(icon_size: number):void
    set_style(style: ToolbarStyle):void
    unset_icon_size():void
    unset_style():void
  }
  export class Toolbar extends Container {
    get_drop_index(x: number, y: number):number
    get_icon_size():IconSize
    get_item_index(item: ToolItem):number
    get_n_items():number
    get_nth_item(n: number):ToolItem
    get_relief_style():ReliefStyle
    get_show_arrow():boolean
    get_style():ToolbarStyle
    insert(item: ToolItem, pos: number):void
    set_drop_highlight_item(tool_item: ToolItem, index_: number):void
    set_icon_size(icon_size: IconSize):void
    set_show_arrow(show_arrow: boolean):void
    set_style(style: ToolbarStyle):void
    unset_icon_size():void
    unset_style():void
  }
  export class Tooltip extends GObject.Object {
    set_custom(custom_widget: Widget):void
    set_icon(pixbuf: GdkPixbuf.Pixbuf):void
    set_icon_from_gicon(gicon: Gio.Icon, size: number):void
    set_icon_from_icon_name(icon_name: string, size: number):void
    set_icon_from_stock(stock_id: string, size: number):void
    set_markup(markup: string):void
    set_text(text: string):void
    set_tip_area(rect: Gdk.Rectangle):void
  }
  export class ToplevelAccessible extends Atk.Object {
    get_children():GLib.List
  }
  export class TreeModelFilter extends GObject.Object {
    clear_cache():void
    convert_child_iter_to_iter(filter_iter: TreeIter, child_iter: TreeIter):boolean
    convert_child_path_to_path(child_path: TreePath):TreePath
    convert_iter_to_child_iter(child_iter: TreeIter, filter_iter: TreeIter):void
    convert_path_to_child_path(filter_path: TreePath):TreePath
    get_model():TreeModel
    refilter():void
    set_modify_func(n_columns: number, types: number[], func: TreeModelFilterModifyFunc, data: any, destroy: GLib.DestroyNotify):void
    set_visible_column(column: number):void
    set_visible_func(func: TreeModelFilterVisibleFunc, data: any, destroy: GLib.DestroyNotify):void
  }
  export class TreeModelSort extends GObject.Object {
    clear_cache():void
    convert_child_iter_to_iter(sort_iter: TreeIter, child_iter: TreeIter):boolean
    convert_child_path_to_path(child_path: TreePath):TreePath
    convert_iter_to_child_iter(child_iter: TreeIter, sorted_iter: TreeIter):void
    convert_path_to_child_path(sorted_path: TreePath):TreePath
    get_model():TreeModel
    iter_is_valid(iter: TreeIter):boolean
    reset_default_sort_func():void
  }
  export class TreeSelection extends GObject.Object {
    count_selected_rows():number
    get_mode():SelectionMode
    get_select_function():TreeSelectionFunc
    get_selected(model: TreeModel, iter: TreeIter):boolean
    get_selected_rows(model: TreeModel):GLib.List
    get_tree_view():TreeView
    get_user_data():object
    iter_is_selected(iter: TreeIter):boolean
    path_is_selected(path: TreePath):boolean
    select_all():void
    select_iter(iter: TreeIter):void
    select_path(path: TreePath):void
    select_range(start_path: TreePath, end_path: TreePath):void
    selected_foreach(func: TreeSelectionForeachFunc, data: any):void
    set_mode(type: SelectionMode):void
    set_select_function(func: TreeSelectionFunc, data: any, destroy: GLib.DestroyNotify):void
    unselect_all():void
    unselect_iter(iter: TreeIter):void
    unselect_path(path: TreePath):void
    unselect_range(start_path: TreePath, end_path: TreePath):void
  }
  export class TreeStore extends GObject.Object {
    constructor(n_columns: number, ...args: any[])
    constructor(n_columns: number, types: number[])
    append(iter: TreeIter, parent: TreeIter):void
    clear():void
    insert(iter: TreeIter, parent: TreeIter, position: number):void
    insert_after(iter: TreeIter, parent: TreeIter, sibling: TreeIter):void
    insert_before(iter: TreeIter, parent: TreeIter, sibling: TreeIter):void
    insert_with_values(iter: TreeIter, parent: TreeIter, position: number, ...args: any[]):void
    insert_with_valuesv(iter: TreeIter, parent: TreeIter, position: number, columns: number[], values: GObject.Value[], n_values: number):void
    is_ancestor(iter: TreeIter, descendant: TreeIter):boolean
    iter_depth(iter: TreeIter):number
    iter_is_valid(iter: TreeIter):boolean
    move_after(iter: TreeIter, position: TreeIter):void
    move_before(iter: TreeIter, position: TreeIter):void
    prepend(iter: TreeIter, parent: TreeIter):void
    remove(iter: TreeIter):boolean
    reorder(parent: TreeIter, new_order: number[]):void
    set(iter: TreeIter, ...args: any[]):void
    set_column_types(n_columns: number, types: number[]):void
    set_valist(iter: TreeIter, var_args: any):void
    set_value(iter: TreeIter, column: number, value: GObject.Value):void
    set_valuesv(iter: TreeIter, columns: number[], values: GObject.Value[], n_values: number):void
    swap(a: TreeIter, b: TreeIter):void
  }
  export class TreeView extends Container {
    constructor(model: TreeModel)
    append_column(column: TreeViewColumn):number
    collapse_all():void
    collapse_row(path: TreePath):boolean
    columns_autosize():void
    convert_bin_window_to_tree_coords(bx: number, by: number, tx: number, ty: number):void
    convert_bin_window_to_widget_coords(bx: number, by: number, wx: number, wy: number):void
    convert_tree_to_bin_window_coords(tx: number, ty: number, bx: number, by: number):void
    convert_tree_to_widget_coords(tx: number, ty: number, wx: number, wy: number):void
    convert_widget_to_bin_window_coords(wx: number, wy: number, bx: number, by: number):void
    convert_widget_to_tree_coords(wx: number, wy: number, tx: number, ty: number):void
    create_row_drag_icon(path: TreePath):cairo.Surface
    enable_model_drag_dest(targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction):void
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction):void
    expand_all():void
    expand_row(path: TreePath, open_all: boolean):boolean
    expand_to_path(path: TreePath):void
    get_activate_on_single_click():boolean
    get_background_area(path: TreePath, column: TreeViewColumn, rect: Gdk.Rectangle):void
    get_bin_window():Gdk.Window
    get_cell_area(path: TreePath, column: TreeViewColumn, rect: Gdk.Rectangle):void
    get_column(n: number):TreeViewColumn
    get_columns():GLib.List
    get_cursor(path: TreePath, focus_column: TreeViewColumn):void
    get_dest_row_at_pos(drag_x: number, drag_y: number, path: TreePath, pos: TreeViewDropPosition):boolean
    get_drag_dest_row(path: TreePath, pos: TreeViewDropPosition):void
    get_enable_search():boolean
    get_enable_tree_lines():boolean
    get_expander_column():TreeViewColumn
    get_fixed_height_mode():boolean
    get_grid_lines():TreeViewGridLines
    get_hadjustment():Adjustment
    get_headers_clickable():boolean
    get_headers_visible():boolean
    get_hover_expand():boolean
    get_hover_selection():boolean
    get_level_indentation():number
    get_model():TreeModel
    get_n_columns():number
    get_path_at_pos(x: number, y: number, path: TreePath, column: TreeViewColumn, cell_x: number, cell_y: number):boolean
    get_reorderable():boolean
    get_row_separator_func():TreeViewRowSeparatorFunc
    get_rubber_banding():boolean
    get_rules_hint():boolean
    get_search_column():number
    get_search_entry():Entry
    get_search_equal_func():TreeViewSearchEqualFunc
    get_search_position_func():TreeViewSearchPositionFunc
    get_selection():TreeSelection
    get_show_expanders():boolean
    get_tooltip_column():number
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean, model: TreeModel, path: TreePath, iter: TreeIter):boolean
    get_vadjustment():Adjustment
    get_visible_range(start_path: TreePath, end_path: TreePath):boolean
    get_visible_rect(visible_rect: Gdk.Rectangle):void
    insert_column(column: TreeViewColumn, position: number):number
    insert_column_with_attributes(position: number, title: string, cell: CellRenderer, ...args: any[]):number
    insert_column_with_data_func(position: number, title: string, cell: CellRenderer, func: TreeCellDataFunc, data: any, dnotify: GLib.DestroyNotify):number
    is_blank_at_pos(x: number, y: number, path: TreePath, column: TreeViewColumn, cell_x: number, cell_y: number):boolean
    is_rubber_banding_active():boolean
    map_expanded_rows(func: TreeViewMappingFunc, data: any):void
    move_column_after(column: TreeViewColumn, base_column: TreeViewColumn):void
    remove_column(column: TreeViewColumn):number
    row_activated(path: TreePath, column: TreeViewColumn):void
    row_expanded(path: TreePath):boolean
    scroll_to_cell(path: TreePath, column: TreeViewColumn, use_align: boolean, row_align: gfloat, col_align: gfloat):void
    scroll_to_point(tree_x: number, tree_y: number):void
    set_activate_on_single_click(single: boolean):void
    set_column_drag_function(func: TreeViewColumnDropFunc, user_data: any, destroy: GLib.DestroyNotify):void
    set_cursor(path: TreePath, focus_column: TreeViewColumn, start_editing: boolean):void
    set_cursor_on_cell(path: TreePath, focus_column: TreeViewColumn, focus_cell: CellRenderer, start_editing: boolean):void
    set_destroy_count_func(func: TreeDestroyCountFunc, data: any, destroy: GLib.DestroyNotify):void
    set_drag_dest_row(path: TreePath, pos: TreeViewDropPosition):void
    set_enable_search(enable_search: boolean):void
    set_enable_tree_lines(enabled: boolean):void
    set_expander_column(column: TreeViewColumn):void
    set_fixed_height_mode(enable: boolean):void
    set_grid_lines(grid_lines: TreeViewGridLines):void
    set_hadjustment(adjustment: Adjustment):void
    set_headers_clickable(setting: boolean):void
    set_headers_visible(headers_visible: boolean):void
    set_hover_expand(expand: boolean):void
    set_hover_selection(hover: boolean):void
    set_level_indentation(indentation: number):void
    set_model(model: TreeModel):void
    set_reorderable(reorderable: boolean):void
    set_row_separator_func(func: TreeViewRowSeparatorFunc, data: any, destroy: GLib.DestroyNotify):void
    set_rubber_banding(enable: boolean):void
    set_rules_hint(setting: boolean):void
    set_search_column(column: number):void
    set_search_entry(entry: Entry):void
    set_search_equal_func(search_equal_func: TreeViewSearchEqualFunc, search_user_data: any, search_destroy: GLib.DestroyNotify):void
    set_search_position_func(func: TreeViewSearchPositionFunc, data: any, destroy: GLib.DestroyNotify):void
    set_show_expanders(enabled: boolean):void
    set_tooltip_cell(tooltip: Tooltip, path: TreePath, column: TreeViewColumn, cell: CellRenderer):void
    set_tooltip_column(column: number):void
    set_tooltip_row(tooltip: Tooltip, path: TreePath):void
    set_vadjustment(adjustment: Adjustment):void
    unset_rows_drag_dest():void
    unset_rows_drag_source():void
  }
  export class TreeViewAccessible extends ContainerAccessible {
  }
  export class TreeViewColumn extends GObject.InitiallyUnowned {
    constructor(area: CellArea)
    constructor(title: string, cell: CellRenderer, ...args: any[])
    add_attribute(cell_renderer: CellRenderer, attribute: string, column: number):void
    cell_get_position(cell_renderer: CellRenderer, x_offset: number, width: number):boolean
    cell_get_size(cell_area: Gdk.Rectangle, x_offset: number, y_offset: number, width: number, height: number):void
    cell_is_visible():boolean
    cell_set_cell_data(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean):void
    clear():void
    clear_attributes(cell_renderer: CellRenderer):void
    clicked():void
    focus_cell(cell: CellRenderer):void
    get_alignment():gfloat
    get_button():Widget
    get_clickable():boolean
    get_expand():boolean
    get_fixed_width():number
    get_max_width():number
    get_min_width():number
    get_reorderable():boolean
    get_resizable():boolean
    get_sizing():TreeViewColumnSizing
    get_sort_column_id():number
    get_sort_indicator():boolean
    get_sort_order():SortType
    get_spacing():number
    get_title():string
    get_tree_view():Widget
    get_visible():boolean
    get_widget():Widget
    get_width():number
    get_x_offset():number
    pack_end(cell: CellRenderer, expand: boolean):void
    pack_start(cell: CellRenderer, expand: boolean):void
    queue_resize():void
    set_alignment(xalign: gfloat):void
    set_attributes(cell_renderer: CellRenderer, ...args: any[]):void
    set_cell_data_func(cell_renderer: CellRenderer, func: TreeCellDataFunc, func_data: any, destroy: GLib.DestroyNotify):void
    set_clickable(clickable: boolean):void
    set_expand(expand: boolean):void
    set_fixed_width(fixed_width: number):void
    set_max_width(max_width: number):void
    set_min_width(min_width: number):void
    set_reorderable(reorderable: boolean):void
    set_resizable(resizable: boolean):void
    set_sizing(type: TreeViewColumnSizing):void
    set_sort_column_id(sort_column_id: number):void
    set_sort_indicator(setting: boolean):void
    set_sort_order(order: SortType):void
    set_spacing(spacing: number):void
    set_title(title: string):void
    set_visible(visible: boolean):void
    set_widget(widget: Widget):void
  }
  export class UIManager extends GObject.Object {
    add_ui(merge_id: number, path: string, name: string, action: string, type: UIManagerItemType, top: boolean):void
    add_ui_from_file(filename: filename):number
    add_ui_from_resource(resource_path: string):number
    add_ui_from_string(buffer: string, length: number):number
    ensure_update():void
    get_accel_group():AccelGroup
    get_action(path: string):Action
    get_action_groups():GLib.List
    get_add_tearoffs():boolean
    get_toplevels(types: UIManagerItemType):GLib.SList
    get_ui():string
    get_widget(path: string):Widget
    insert_action_group(action_group: ActionGroup, pos: number):void
    new_merge_id():number
    remove_action_group(action_group: ActionGroup):void
    remove_ui(merge_id: number):void
    set_add_tearoffs(add_tearoffs: boolean):void
  }
  export class VBox extends Box {
    constructor(homogeneous: boolean, spacing: number)
  }
  export class VButtonBox extends ButtonBox {
  }
  export class VPaned extends Paned {
  }
  export class VScale extends Scale {
    constructor(adjustment: Adjustment)
    constructor(min: number, max: number, step: number)
  }
  export class VScrollbar extends Scrollbar {
    constructor(adjustment: Adjustment)
  }
  export class VSeparator extends Separator {
  }
  export class Viewport extends Bin {
    constructor(hadjustment: Adjustment, vadjustment: Adjustment)
    get_bin_window():Gdk.Window
    get_hadjustment():Adjustment
    get_shadow_type():ShadowType
    get_vadjustment():Adjustment
    get_view_window():Gdk.Window
    set_hadjustment(adjustment: Adjustment):void
    set_shadow_type(type: ShadowType):void
    set_vadjustment(adjustment: Adjustment):void
  }
  export class VolumeButton extends ScaleButton {
  }
  export class Widget extends GObject.InitiallyUnowned {
    constructor(type: number, first_property_name: string, ...args: any[])
    activate():boolean
    add_accelerator(accel_signal: string, accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags):void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask):void
    add_events(events: number):void
    add_mnemonic_label(label: Widget):void
    add_tick_callback(callback: TickCallback, user_data: any, notify: GLib.DestroyNotify):number
    can_activate_accel(signal_id: number):boolean
    child_focus(direction: DirectionType):boolean
    child_notify(child_property: string):void
    class_path(path_length: number, path: string, path_reversed: string):void
    compute_expand(orientation: Orientation):boolean
    create_pango_context():Pango.Context
    create_pango_layout(text: string):Pango.Layout
    destroy():void
    destroyed(widget_pointer: Widget):void
    device_is_shadowed(device: Gdk.Device):boolean
    drag_begin(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event):Gdk.DragContext
    drag_begin_with_coordinates(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event, x: number, y: number):Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number):boolean
    drag_dest_add_image_targets():void
    drag_dest_add_text_targets():void
    drag_dest_add_uri_targets():void
    drag_dest_find_target(context: Gdk.DragContext, target_list: TargetList):Gdk.Atom
    drag_dest_get_target_list():TargetList
    drag_dest_get_track_motion():boolean
    drag_dest_set(flags: DestDefaults, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction):void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean):void
    drag_dest_set_target_list(target_list: TargetList):void
    drag_dest_set_track_motion(track_motion: boolean):void
    drag_dest_unset():void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: guint32):void
    drag_highlight():void
    drag_source_add_image_targets():void
    drag_source_add_text_targets():void
    drag_source_add_uri_targets():void
    drag_source_get_target_list():TargetList
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction):void
    drag_source_set_icon_gicon(icon: Gio.Icon):void
    drag_source_set_icon_name(icon_name: string):void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf):void
    drag_source_set_icon_stock(stock_id: string):void
    drag_source_set_target_list(target_list: TargetList):void
    drag_source_unset():void
    drag_unhighlight():void
    draw(cr: cairo.Context):void
    ensure_style():void
    error_bell():void
    event(event: Gdk.Event):boolean
    freeze_child_notify():void
    get_accessible():Atk.Object
    get_action_group(prefix: string):Gio.ActionGroup
    get_allocated_baseline():number
    get_allocated_height():number
    get_allocated_width():number
    get_allocation(allocation: Allocation):void
    get_ancestor(widget_type: number):Widget
    get_app_paintable():boolean
    get_can_default():boolean
    get_can_focus():boolean
    get_child_requisition(requisition: Requisition):void
    get_child_visible():boolean
    get_clip(clip: Allocation):void
    get_clipboard(selection: Gdk.Atom):Clipboard
    get_composite_name():string
    get_device_enabled(device: Gdk.Device):boolean
    get_device_events(device: Gdk.Device):Gdk.EventMask
    get_direction():TextDirection
    get_display():Gdk.Display
    get_double_buffered():boolean
    get_events():number
    get_font_map():Pango.FontMap
    get_font_options():cairo.FontOptions
    get_frame_clock():Gdk.FrameClock
    get_halign():Align
    get_has_tooltip():boolean
    get_has_window():boolean
    get_hexpand():boolean
    get_hexpand_set():boolean
    get_mapped():boolean
    get_margin_bottom():number
    get_margin_end():number
    get_margin_left():number
    get_margin_right():number
    get_margin_start():number
    get_margin_top():number
    get_modifier_mask(intent: Gdk.ModifierIntent):Gdk.ModifierType
    get_modifier_style():RcStyle
    get_name():string
    get_no_show_all():boolean
    get_opacity():number
    get_pango_context():Pango.Context
    get_parent():Widget
    get_parent_window():Gdk.Window
    get_path():WidgetPath
    get_pointer(x: number, y: number):void
    get_preferred_height(minimum_height: number, natural_height: number):void
    get_preferred_height_and_baseline_for_width(width: number, minimum_height: number, natural_height: number, minimum_baseline: number, natural_baseline: number):void
    get_preferred_height_for_width(width: number, minimum_height: number, natural_height: number):void
    get_preferred_size(minimum_size: Requisition, natural_size: Requisition):void
    get_preferred_width(minimum_width: number, natural_width: number):void
    get_preferred_width_for_height(height: number, minimum_width: number, natural_width: number):void
    get_realized():boolean
    get_receives_default():boolean
    get_request_mode():SizeRequestMode
    get_requisition(requisition: Requisition):void
    get_root_window():Gdk.Window
    get_scale_factor():number
    get_screen():Gdk.Screen
    get_sensitive():boolean
    get_settings():Settings
    get_size_request(width: number, height: number):void
    get_state():StateType
    get_state_flags():StateFlags
    get_style():Style
    get_style_context():StyleContext
    get_support_multidevice():boolean
    get_template_child(widget_type: number, name: string):GObject.Object
    get_tooltip_markup():string
    get_tooltip_text():string
    get_tooltip_window():Window
    get_toplevel():Widget
    get_valign():Align
    get_valign_with_baseline():Align
    get_vexpand():boolean
    get_vexpand_set():boolean
    get_visible():boolean
    get_visual():Gdk.Visual
    get_window():Gdk.Window
    grab_add():void
    grab_default():void
    grab_focus():void
    grab_remove():void
    has_default():boolean
    has_focus():boolean
    has_grab():boolean
    has_rc_style():boolean
    has_screen():boolean
    has_visible_focus():boolean
    hide():void
    hide_on_delete():boolean
    in_destruction():boolean
    init_template():void
    input_shape_combine_region(region: cairo.Region):void
    insert_action_group(name: string, group: Gio.ActionGroup):void
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle):boolean
    is_ancestor(ancestor: Widget):boolean
    is_composited():boolean
    is_drawable():boolean
    is_focus():boolean
    is_sensitive():boolean
    is_toplevel():boolean
    is_visible():boolean
    keynav_failed(direction: DirectionType):boolean
    list_accel_closures():GLib.List
    list_action_prefixes():string[]
    list_mnemonic_labels():GLib.List
    map():void
    mnemonic_activate(group_cycling: boolean):boolean
    modify_base(state: StateType, color: Gdk.Color):void
    modify_bg(state: StateType, color: Gdk.Color):void
    modify_cursor(primary: Gdk.Color, secondary: Gdk.Color):void
    modify_fg(state: StateType, color: Gdk.Color):void
    modify_font(font_desc: Pango.FontDescription):void
    modify_style(style: RcStyle):void
    modify_text(state: StateType, color: Gdk.Color):void
    override_background_color(state: StateFlags, color: Gdk.RGBA):void
    override_color(state: StateFlags, color: Gdk.RGBA):void
    override_cursor(cursor: Gdk.RGBA, secondary_cursor: Gdk.RGBA):void
    override_font(font_desc: Pango.FontDescription):void
    override_symbolic_color(name: string, color: Gdk.RGBA):void
    path(path_length: number, path: string, path_reversed: string):void
    queue_compute_expand():void
    queue_draw():void
    queue_draw_area(x: number, y: number, width: number, height: number):void
    queue_draw_region(region: cairo.Region):void
    queue_resize():void
    queue_resize_no_redraw():void
    realize():void
    region_intersect(region: cairo.Region):cairo.Region
    register_window(window: Gdk.Window):void
    remove_accelerator(accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType):boolean
    remove_mnemonic_label(label: Widget):void
    remove_tick_callback(id: number):void
    render_icon(stock_id: string, size: number, detail: string):GdkPixbuf.Pixbuf
    render_icon_pixbuf(stock_id: string, size: number):GdkPixbuf.Pixbuf
    reparent(new_parent: Widget):void
    reset_rc_styles():void
    reset_style():void
    send_expose(event: Gdk.Event):number
    send_focus_change(event: Gdk.Event):boolean
    set_accel_path(accel_path: string, accel_group: AccelGroup):void
    set_allocation(allocation: Allocation):void
    set_app_paintable(app_paintable: boolean):void
    set_can_default(can_default: boolean):void
    set_can_focus(can_focus: boolean):void
    set_child_visible(is_visible: boolean):void
    set_clip(clip: Allocation):void
    set_composite_name(name: string):void
    set_device_enabled(device: Gdk.Device, enabled: boolean):void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask):void
    set_direction(dir: TextDirection):void
    set_double_buffered(double_buffered: boolean):void
    set_events(events: number):void
    set_font_map(font_map: Pango.FontMap):void
    set_font_options(options: cairo.FontOptions):void
    set_halign(align: Align):void
    set_has_tooltip(has_tooltip: boolean):void
    set_has_window(has_window: boolean):void
    set_hexpand(expand: boolean):void
    set_hexpand_set(set: boolean):void
    set_mapped(mapped: boolean):void
    set_margin_bottom(margin: number):void
    set_margin_end(margin: number):void
    set_margin_left(margin: number):void
    set_margin_right(margin: number):void
    set_margin_start(margin: number):void
    set_margin_top(margin: number):void
    set_name(name: string):void
    set_no_show_all(no_show_all: boolean):void
    set_opacity(opacity: number):void
    set_parent(parent: Widget):void
    set_parent_window(parent_window: Gdk.Window):void
    set_realized(realized: boolean):void
    set_receives_default(receives_default: boolean):void
    set_redraw_on_allocate(redraw_on_allocate: boolean):void
    set_sensitive(sensitive: boolean):void
    set_size_request(width: number, height: number):void
    set_state(state: StateType):void
    set_state_flags(flags: StateFlags, clear: boolean):void
    set_style(style: Style):void
    set_support_multidevice(support_multidevice: boolean):void
    set_tooltip_markup(markup: string):void
    set_tooltip_text(text: string):void
    set_tooltip_window(custom_window: Window):void
    set_valign(align: Align):void
    set_vexpand(expand: boolean):void
    set_vexpand_set(set: boolean):void
    set_visible(visible: boolean):void
    set_visual(visual: Gdk.Visual):void
    set_window(window: Gdk.Window):void
    shape_combine_region(region: cairo.Region):void
    show():void
    show_all():void
    show_now():void
    size_allocate(allocation: Allocation):void
    size_allocate_with_baseline(allocation: Allocation, baseline: number):void
    size_request(requisition: Requisition):void
    style_attach():void
    style_get(first_property_name: string, ...args: any[]):void
    style_get_property(property_name: string, value: GObject.Value):void
    style_get_valist(first_property_name: string, var_args: any):void
    thaw_child_notify():void
    translate_coordinates(dest_widget: Widget, src_x: number, src_y: number, dest_x: number, dest_y: number):boolean
    trigger_tooltip_query():void
    unmap():void
    unparent():void
    unrealize():void
    unregister_window(window: Gdk.Window):void
    unset_state_flags(flags: StateFlags):void
  }
  export class WidgetAccessible extends Accessible {
  }
  export class Window extends Bin {
    constructor(type: WindowType)
    activate_default():boolean
    activate_focus():boolean
    activate_key(event: Gdk.EventKey):boolean
    add_accel_group(accel_group: AccelGroup):void
    add_mnemonic(keyval: number, target: Widget):void
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: guint32):void
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: guint32):void
    close():void
    deiconify():void
    fullscreen():void
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number):void
    get_accept_focus():boolean
    get_application():Application
    get_attached_to():Widget
    get_decorated():boolean
    get_default_size(width: number, height: number):void
    get_default_widget():Widget
    get_deletable():boolean
    get_destroy_with_parent():boolean
    get_focus():Widget
    get_focus_on_map():boolean
    get_focus_visible():boolean
    get_gravity():Gdk.Gravity
    get_group():WindowGroup
    get_has_resize_grip():boolean
    get_hide_titlebar_when_maximized():boolean
    get_icon():GdkPixbuf.Pixbuf
    get_icon_list():GLib.List
    get_icon_name():string
    get_mnemonic_modifier():Gdk.ModifierType
    get_mnemonics_visible():boolean
    get_modal():boolean
    get_opacity():number
    get_position(root_x: number, root_y: number):void
    get_resizable():boolean
    get_resize_grip_area(rect: Gdk.Rectangle):boolean
    get_role():string
    get_screen():Gdk.Screen
    get_size(width: number, height: number):void
    get_skip_pager_hint():boolean
    get_skip_taskbar_hint():boolean
    get_title():string
    get_titlebar():Widget
    get_transient_for():Window
    get_type_hint():Gdk.WindowTypeHint
    get_urgency_hint():boolean
    get_window_type():WindowType
    has_group():boolean
    has_toplevel_focus():boolean
    iconify():void
    is_active():boolean
    is_maximized():boolean
    maximize():void
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType):boolean
    move(x: number, y: number):void
    parse_geometry(geometry: string):boolean
    present():void
    present_with_time(timestamp: guint32):void
    propagate_key_event(event: Gdk.EventKey):boolean
    remove_accel_group(accel_group: AccelGroup):void
    remove_mnemonic(keyval: number, target: Widget):void
    reshow_with_initial_size():void
    resize(width: number, height: number):void
    resize_grip_is_visible():boolean
    resize_to_geometry(width: number, height: number):void
    set_accept_focus(setting: boolean):void
    set_application(application: Application):void
    set_attached_to(attach_widget: Widget):void
    set_decorated(setting: boolean):void
    set_default(default_widget: Widget):void
    set_default_geometry(width: number, height: number):void
    set_default_size(width: number, height: number):void
    set_deletable(setting: boolean):void
    set_destroy_with_parent(setting: boolean):void
    set_focus(focus: Widget):void
    set_focus_on_map(setting: boolean):void
    set_focus_visible(setting: boolean):void
    set_geometry_hints(geometry_widget: Widget, geometry: Gdk.Geometry, geom_mask: Gdk.WindowHints):void
    set_gravity(gravity: Gdk.Gravity):void
    set_has_resize_grip(value: boolean):void
    set_has_user_ref_count(setting: boolean):void
    set_hide_titlebar_when_maximized(setting: boolean):void
    set_icon(icon: GdkPixbuf.Pixbuf):void
    set_icon_from_file(filename: filename):boolean
    set_icon_list(list: GLib.List):void
    set_icon_name(name: string):void
    set_keep_above(setting: boolean):void
    set_keep_below(setting: boolean):void
    set_mnemonic_modifier(modifier: Gdk.ModifierType):void
    set_mnemonics_visible(setting: boolean):void
    set_modal(modal: boolean):void
    set_opacity(opacity: number):void
    set_position(position: WindowPosition):void
    set_resizable(resizable: boolean):void
    set_role(role: string):void
    set_screen(screen: Gdk.Screen):void
    set_skip_pager_hint(setting: boolean):void
    set_skip_taskbar_hint(setting: boolean):void
    set_startup_id(startup_id: string):void
    set_title(title: string):void
    set_titlebar(titlebar: Widget):void
    set_transient_for(parent: Window):void
    set_type_hint(hint: Gdk.WindowTypeHint):void
    set_urgency_hint(setting: boolean):void
    set_wmclass(wmclass_name: string, wmclass_class: string):void
    stick():void
    unfullscreen():void
    unmaximize():void
    unstick():void
  }
  export class WindowAccessible extends ContainerAccessible {
  }
  export class WindowGroup extends GObject.Object {
    add_window(window: Window):void
    get_current_device_grab(device: Gdk.Device):Widget
    get_current_grab():Widget
    list_windows():GLib.List
    remove_window(window: Window):void
  }
}