/**
 * Gtk.d.ts
 *
 */
declare module 'Gtk' {
    import * as GObject from "GObject"
    import * as GLib from "GLib"
    import * as Gio from "Gio"
    import * as Gdk from "Gdk"
    import * as Atk from "Atk"
    import * as Pango from "Pango"
    export const BINARY_AGE:number
    export const INPUT_ERROR:number
    export const INTERFACE_AGE:number
    export const LEVEL_BAR_OFFSET_HIGH:string
    export const LEVEL_BAR_OFFSET_LOW:string
    export const MAJOR_VERSION:number
    export const MAX_COMPOSE_LEN:number
    export const MICRO_VERSION:number
    export const MINOR_VERSION:number
    export const PAPER_NAME_A3:string
    export const PAPER_NAME_A4:string
    export const PAPER_NAME_A5:string
    export const PAPER_NAME_B5:string
    export const PAPER_NAME_EXECUTIVE:string
    export const PAPER_NAME_LEGAL:string
    export const PAPER_NAME_LETTER:string
    export const PATH_PRIO_MASK:number
    export const PRINT_SETTINGS_COLLATE:string
    export const PRINT_SETTINGS_DEFAULT_SOURCE:string
    export const PRINT_SETTINGS_DITHER:string
    export const PRINT_SETTINGS_DUPLEX:string
    export const PRINT_SETTINGS_FINISHINGS:string
    export const PRINT_SETTINGS_MEDIA_TYPE:string
    export const PRINT_SETTINGS_NUMBER_UP:string
    export const PRINT_SETTINGS_NUMBER_UP_LAYOUT:string
    export const PRINT_SETTINGS_N_COPIES:string
    export const PRINT_SETTINGS_ORIENTATION:string
    export const PRINT_SETTINGS_OUTPUT_BASENAME:string
    export const PRINT_SETTINGS_OUTPUT_BIN:string
    export const PRINT_SETTINGS_OUTPUT_DIR:string
    export const PRINT_SETTINGS_OUTPUT_FILE_FORMAT:string
    export const PRINT_SETTINGS_OUTPUT_URI:string
    export const PRINT_SETTINGS_PAGE_RANGES:string
    export const PRINT_SETTINGS_PAGE_SET:string
    export const PRINT_SETTINGS_PAPER_FORMAT:string
    export const PRINT_SETTINGS_PAPER_HEIGHT:string
    export const PRINT_SETTINGS_PAPER_WIDTH:string
    export const PRINT_SETTINGS_PRINTER:string
    export const PRINT_SETTINGS_PRINTER_LPI:string
    export const PRINT_SETTINGS_PRINT_PAGES:string
    export const PRINT_SETTINGS_QUALITY:string
    export const PRINT_SETTINGS_RESOLUTION:string
    export const PRINT_SETTINGS_RESOLUTION_X:string
    export const PRINT_SETTINGS_RESOLUTION_Y:string
    export const PRINT_SETTINGS_REVERSE:string
    export const PRINT_SETTINGS_SCALE:string
    export const PRINT_SETTINGS_USE_COLOR:string
    export const PRINT_SETTINGS_WIN32_DRIVER_EXTRA:string
    export const PRINT_SETTINGS_WIN32_DRIVER_VERSION:string
    export const PRIORITY_RESIZE:number
    export const STOCK_ABOUT:string
    export const STOCK_ADD:string
    export const STOCK_APPLY:string
    export const STOCK_BOLD:string
    export const STOCK_CANCEL:string
    export const STOCK_CAPS_LOCK_WARNING:string
    export const STOCK_CDROM:string
    export const STOCK_CLEAR:string
    export const STOCK_CLOSE:string
    export const STOCK_COLOR_PICKER:string
    export const STOCK_CONNECT:string
    export const STOCK_CONVERT:string
    export const STOCK_COPY:string
    export const STOCK_CUT:string
    export const STOCK_DELETE:string
    export const STOCK_DIALOG_AUTHENTICATION:string
    export const STOCK_DIALOG_ERROR:string
    export const STOCK_DIALOG_INFO:string
    export const STOCK_DIALOG_QUESTION:string
    export const STOCK_DIALOG_WARNING:string
    export const STOCK_DIRECTORY:string
    export const STOCK_DISCARD:string
    export const STOCK_DISCONNECT:string
    export const STOCK_DND:string
    export const STOCK_DND_MULTIPLE:string
    export const STOCK_EDIT:string
    export const STOCK_EXECUTE:string
    export const STOCK_FILE:string
    export const STOCK_FIND:string
    export const STOCK_FIND_AND_REPLACE:string
    export const STOCK_FLOPPY:string
    export const STOCK_FULLSCREEN:string
    export const STOCK_GOTO_BOTTOM:string
    export const STOCK_GOTO_FIRST:string
    export const STOCK_GOTO_LAST:string
    export const STOCK_GOTO_TOP:string
    export const STOCK_GO_BACK:string
    export const STOCK_GO_DOWN:string
    export const STOCK_GO_FORWARD:string
    export const STOCK_GO_UP:string
    export const STOCK_HARDDISK:string
    export const STOCK_HELP:string
    export const STOCK_HOME:string
    export const STOCK_INDENT:string
    export const STOCK_INDEX:string
    export const STOCK_INFO:string
    export const STOCK_ITALIC:string
    export const STOCK_JUMP_TO:string
    export const STOCK_JUSTIFY_CENTER:string
    export const STOCK_JUSTIFY_FILL:string
    export const STOCK_JUSTIFY_LEFT:string
    export const STOCK_JUSTIFY_RIGHT:string
    export const STOCK_LEAVE_FULLSCREEN:string
    export const STOCK_MEDIA_FORWARD:string
    export const STOCK_MEDIA_NEXT:string
    export const STOCK_MEDIA_PAUSE:string
    export const STOCK_MEDIA_PLAY:string
    export const STOCK_MEDIA_PREVIOUS:string
    export const STOCK_MEDIA_RECORD:string
    export const STOCK_MEDIA_REWIND:string
    export const STOCK_MEDIA_STOP:string
    export const STOCK_MISSING_IMAGE:string
    export const STOCK_NETWORK:string
    export const STOCK_NEW:string
    export const STOCK_NO:string
    export const STOCK_OK:string
    export const STOCK_OPEN:string
    export const STOCK_ORIENTATION_LANDSCAPE:string
    export const STOCK_ORIENTATION_PORTRAIT:string
    export const STOCK_ORIENTATION_REVERSE_LANDSCAPE:string
    export const STOCK_ORIENTATION_REVERSE_PORTRAIT:string
    export const STOCK_PAGE_SETUP:string
    export const STOCK_PASTE:string
    export const STOCK_PREFERENCES:string
    export const STOCK_PRINT:string
    export const STOCK_PRINT_ERROR:string
    export const STOCK_PRINT_PAUSED:string
    export const STOCK_PRINT_PREVIEW:string
    export const STOCK_PRINT_REPORT:string
    export const STOCK_PRINT_WARNING:string
    export const STOCK_PROPERTIES:string
    export const STOCK_QUIT:string
    export const STOCK_REDO:string
    export const STOCK_REFRESH:string
    export const STOCK_REMOVE:string
    export const STOCK_REVERT_TO_SAVED:string
    export const STOCK_SAVE:string
    export const STOCK_SAVE_AS:string
    export const STOCK_SELECT_ALL:string
    export const STOCK_SELECT_COLOR:string
    export const STOCK_SELECT_FONT:string
    export const STOCK_SORT_ASCENDING:string
    export const STOCK_SORT_DESCENDING:string
    export const STOCK_SPELL_CHECK:string
    export const STOCK_STOP:string
    export const STOCK_STRIKETHROUGH:string
    export const STOCK_UNDELETE:string
    export const STOCK_UNDERLINE:string
    export const STOCK_UNDO:string
    export const STOCK_UNINDENT:string
    export const STOCK_YES:string
    export const STOCK_ZOOM_100:string
    export const STOCK_ZOOM_FIT:string
    export const STOCK_ZOOM_IN:string
    export const STOCK_ZOOM_OUT:string
    export const STYLE_CLASS_ACCELERATOR:string
    export const STYLE_CLASS_ARROW:string
    export const STYLE_CLASS_BACKGROUND:string
    export const STYLE_CLASS_BOTTOM:string
    export const STYLE_CLASS_BUTTON:string
    export const STYLE_CLASS_CALENDAR:string
    export const STYLE_CLASS_CELL:string
    export const STYLE_CLASS_CHECK:string
    export const STYLE_CLASS_COMBOBOX_ENTRY:string
    export const STYLE_CLASS_CONTEXT_MENU:string
    export const STYLE_CLASS_CSD:string
    export const STYLE_CLASS_CURSOR_HANDLE:string
    export const STYLE_CLASS_DEFAULT:string
    export const STYLE_CLASS_DESTRUCTIVE_ACTION:string
    export const STYLE_CLASS_DIM_LABEL:string
    export const STYLE_CLASS_DND:string
    export const STYLE_CLASS_DOCK:string
    export const STYLE_CLASS_ENTRY:string
    export const STYLE_CLASS_ERROR:string
    export const STYLE_CLASS_EXPANDER:string
    export const STYLE_CLASS_FLAT:string
    export const STYLE_CLASS_FRAME:string
    export const STYLE_CLASS_GRIP:string
    export const STYLE_CLASS_HEADER:string
    export const STYLE_CLASS_HIGHLIGHT:string
    export const STYLE_CLASS_HORIZONTAL:string
    export const STYLE_CLASS_IMAGE:string
    export const STYLE_CLASS_INFO:string
    export const STYLE_CLASS_INLINE_TOOLBAR:string
    export const STYLE_CLASS_INSERTION_CURSOR:string
    export const STYLE_CLASS_LABEL:string
    export const STYLE_CLASS_LEFT:string
    export const STYLE_CLASS_LEVEL_BAR:string
    export const STYLE_CLASS_LINKED:string
    export const STYLE_CLASS_LIST:string
    export const STYLE_CLASS_LIST_ROW:string
    export const STYLE_CLASS_MARK:string
    export const STYLE_CLASS_MENU:string
    export const STYLE_CLASS_MENUBAR:string
    export const STYLE_CLASS_MENUITEM:string
    export const STYLE_CLASS_MESSAGE_DIALOG:string
    export const STYLE_CLASS_MONOSPACE:string
    export const STYLE_CLASS_NEEDS_ATTENTION:string
    export const STYLE_CLASS_NOTEBOOK:string
    export const STYLE_CLASS_OSD:string
    export const STYLE_CLASS_OVERSHOOT:string
    export const STYLE_CLASS_PANE_SEPARATOR:string
    export const STYLE_CLASS_PAPER:string
    export const STYLE_CLASS_POPOVER:string
    export const STYLE_CLASS_POPUP:string
    export const STYLE_CLASS_PRIMARY_TOOLBAR:string
    export const STYLE_CLASS_PROGRESSBAR:string
    export const STYLE_CLASS_PULSE:string
    export const STYLE_CLASS_QUESTION:string
    export const STYLE_CLASS_RADIO:string
    export const STYLE_CLASS_RAISED:string
    export const STYLE_CLASS_READ_ONLY:string
    export const STYLE_CLASS_RIGHT:string
    export const STYLE_CLASS_RUBBERBAND:string
    export const STYLE_CLASS_SCALE:string
    export const STYLE_CLASS_SCALE_HAS_MARKS_ABOVE:string
    export const STYLE_CLASS_SCALE_HAS_MARKS_BELOW:string
    export const STYLE_CLASS_SCROLLBAR:string
    export const STYLE_CLASS_SCROLLBARS_JUNCTION:string
    export const STYLE_CLASS_SEPARATOR:string
    export const STYLE_CLASS_SIDEBAR:string
    export const STYLE_CLASS_SLIDER:string
    export const STYLE_CLASS_SPINBUTTON:string
    export const STYLE_CLASS_SPINNER:string
    export const STYLE_CLASS_STATUSBAR:string
    export const STYLE_CLASS_SUBTITLE:string
    export const STYLE_CLASS_SUGGESTED_ACTION:string
    export const STYLE_CLASS_TITLE:string
    export const STYLE_CLASS_TITLEBAR:string
    export const STYLE_CLASS_TOOLBAR:string
    export const STYLE_CLASS_TOOLTIP:string
    export const STYLE_CLASS_TOP:string
    export const STYLE_CLASS_TOUCH_SELECTION:string
    export const STYLE_CLASS_TROUGH:string
    export const STYLE_CLASS_UNDERSHOOT:string
    export const STYLE_CLASS_VERTICAL:string
    export const STYLE_CLASS_VIEW:string
    export const STYLE_CLASS_WARNING:string
    export const STYLE_CLASS_WIDE:string
    export const STYLE_PROPERTY_BACKGROUND_COLOR:string
    export const STYLE_PROPERTY_BACKGROUND_IMAGE:string
    export const STYLE_PROPERTY_BORDER_COLOR:string
    export const STYLE_PROPERTY_BORDER_RADIUS:string
    export const STYLE_PROPERTY_BORDER_STYLE:string
    export const STYLE_PROPERTY_BORDER_WIDTH:string
    export const STYLE_PROPERTY_COLOR:string
    export const STYLE_PROPERTY_FONT:string
    export const STYLE_PROPERTY_MARGIN:string
    export const STYLE_PROPERTY_PADDING:string
    export const STYLE_PROVIDER_PRIORITY_APPLICATION:number
    export const STYLE_PROVIDER_PRIORITY_FALLBACK:number
    export const STYLE_PROVIDER_PRIORITY_SETTINGS:number
    export const STYLE_PROVIDER_PRIORITY_THEME:number
    export const STYLE_PROVIDER_PRIORITY_USER:number
    export const STYLE_REGION_COLUMN:string
    export const STYLE_REGION_COLUMN_HEADER:string
    export const STYLE_REGION_ROW:string
    export const STYLE_REGION_TAB:string
    export const TEXT_VIEW_PRIORITY_VALIDATE:number
    export const TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID:number
    export const TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID:number
    export function accel_groups_activate(object: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType):boolean
    export function accel_groups_from_object(object: GObject.Object):any
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
    export function binding_entry_add_signal_from_string(binding_set: any, signal_desc: string):GLib.TokenType
    export function binding_entry_add_signall(binding_set: any, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, binding_args: any):void
    export function binding_entry_remove(binding_set: any, keyval: number, modifiers: Gdk.ModifierType):void
    export function binding_entry_skip(binding_set: any, keyval: number, modifiers: Gdk.ModifierType):void
    export function binding_set_by_class(object_class: any):any
    export function binding_set_find(set_name: string):any
    export function binding_set_new(set_name: string):any
    export function bindings_activate(object: GObject.Object, keyval: number, modifiers: Gdk.ModifierType):boolean
    export function bindings_activate_event(object: GObject.Object, event: any):boolean
    export function builder_error_quark():any
    export function cairo_should_draw_window(cr: any, window: Gdk.Window):boolean
    export function cairo_transform_to_window(cr: any, widget: Widget, window: Gdk.Window):void
    export function check_version(required_major: number, required_minor: number, required_micro: number):string
    export function css_provider_error_quark():any
    export function device_grab_add(widget: Widget, device: Gdk.Device, block_others: boolean):void
    export function device_grab_remove(widget: Widget, device: Gdk.Device):void
    export function disable_setlocale():void
    export function distribute_natural_allocation(extra_space: number, n_requested_sizes: number, sizes: any):number
    export function drag_cancel(context: Gdk.DragContext):void
    export function drag_finish(context: Gdk.DragContext, success: boolean, del: boolean, time_: number):void
    export function drag_get_source_widget(context: Gdk.DragContext):Widget
    export function drag_set_icon_default(context: Gdk.DragContext):void
    export function drag_set_icon_gicon(context: Gdk.DragContext, icon: any, hot_x: number, hot_y: number):void
    export function drag_set_icon_name(context: Gdk.DragContext, icon_name: string, hot_x: number, hot_y: number):void
    export function drag_set_icon_pixbuf(context: Gdk.DragContext, pixbuf: any, hot_x: number, hot_y: number):void
    export function drag_set_icon_stock(context: Gdk.DragContext, stock_id: string, hot_x: number, hot_y: number):void
    export function drag_set_icon_surface(context: Gdk.DragContext, surface: any):void
    export function drag_set_icon_widget(context: Gdk.DragContext, widget: Widget, hot_x: number, hot_y: number):void
    export function draw_insertion_cursor(widget: Widget, cr: any, location: any, is_primary: boolean, direction: TextDirection, draw_arrow: boolean):void
    export function events_pending():boolean
    export function false_():boolean
    export function file_chooser_error_quark():any
    export function get_binary_age():number
    export function get_current_event():any
    export function get_current_event_device():Gdk.Device
    export function get_current_event_state(state: Gdk.ModifierType):boolean
    export function get_current_event_time():number
    export function get_debug_flags():number
    export function get_default_language():any
    export function get_event_widget(event: any):Widget
    export function get_interface_age():number
    export function get_locale_direction():TextDirection
    export function get_major_version():number
    export function get_micro_version():number
    export function get_minor_version():number
    export function get_option_group(open_default_display: boolean):any
    export function grab_get_current():Widget
    export function icon_size_from_name(name: string):number
    export function icon_size_get_name(size: number):string
    export function icon_size_lookup(size: number, width: number, height: number):boolean
    export function icon_size_lookup_for_settings(settings: Settings, size: number, width: number, height: number):boolean
    export function icon_size_register(name: string, width: number, height: number):number
    export function icon_size_register_alias(alias: string, target: number):void
    export function icon_theme_error_quark():any
    export function init(argv:string[]):void
    export function init_check(argv:string[]):boolean
    export function init_with_args(argv:string[], parameter_string: string, entries: any[], translation_domain: string):boolean
    export function key_snooper_install(snooper: any, func_data: any):number
    export function key_snooper_remove(snooper_handler_id: number):void
    export function main():void
    export function main_do_event(event: any):void
    export function main_iteration():boolean
    export function main_iteration_do(blocking: boolean):boolean
    export function main_level():number
    export function main_quit():void
    export function paint_arrow(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number):void
    export function paint_box(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
    export function paint_box_gap(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number):void
    export function paint_check(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
    export function paint_diamond(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
    export function paint_expander(style: Style, cr: any, state_type: StateType, widget: Widget, detail: string, x: number, y: number, expander_style: ExpanderStyle):void
    export function paint_extension(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType):void
    export function paint_flat_box(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
    export function paint_focus(style: Style, cr: any, state_type: StateType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
    export function paint_handle(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation):void
    export function paint_hline(style: Style, cr: any, state_type: StateType, widget: Widget, detail: string, x1: number, x2: number, y: number):void
    export function paint_layout(style: Style, cr: any, state_type: StateType, use_text: boolean, widget: Widget, detail: string, x: number, y: number, layout: Pango.Layout):void
    export function paint_option(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
    export function paint_resize_grip(style: Style, cr: any, state_type: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number):void
    export function paint_shadow(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
    export function paint_shadow_gap(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number):void
    export function paint_slider(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation):void
    export function paint_spinner(style: Style, cr: any, state_type: StateType, widget: Widget, detail: string, step: number, x: number, y: number, width: number, height: number):void
    export function paint_tab(style: Style, cr: any, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number):void
    export function paint_vline(style: Style, cr: any, state_type: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number):void
    export function paper_size_get_default():string
    export function paper_size_get_paper_sizes(include_custom: boolean):any
    export function parse_args(argv:string[]):boolean
    export function print_error_quark():any
    export function print_run_page_setup_dialog(parent: Window, page_setup: PageSetup, settings: PrintSettings):PageSetup
    export function print_run_page_setup_dialog_async(parent: Window, page_setup: PageSetup, settings: PrintSettings, done_cb: any, data: any):void
    export function propagate_event(widget: Widget, event: any):void
    export function rc_add_default_file(filename: any):void
    export function rc_find_module_in_path(module_file: string):any
    export function rc_find_pixmap_in_path(settings: Settings, scanner: any, pixmap_file: string):any
    export function rc_get_default_files():any[]
    export function rc_get_im_module_file():any
    export function rc_get_im_module_path():any
    export function rc_get_module_dir():any
    export function rc_get_style(widget: Widget):Style
    export function rc_get_style_by_paths(settings: Settings, widget_path: string, class_path: string, type: any):Style
    export function rc_get_theme_dir():string
    export function rc_parse(filename: string):void
    export function rc_parse_color(scanner: any, color: any):number
    export function rc_parse_color_full(scanner: any, style: RcStyle, color: any):number
    export function rc_parse_priority(scanner: any, priority: PathPriorityType):number
    export function rc_parse_state(scanner: any, state: StateType):number
    export function rc_parse_string(rc_string: string):void
    export function rc_property_parse_border(pspec: GObject.ParamSpec, gstring: any, property_value: any):boolean
    export function rc_property_parse_color(pspec: GObject.ParamSpec, gstring: any, property_value: any):boolean
    export function rc_property_parse_enum(pspec: GObject.ParamSpec, gstring: any, property_value: any):boolean
    export function rc_property_parse_flags(pspec: GObject.ParamSpec, gstring: any, property_value: any):boolean
    export function rc_property_parse_requisition(pspec: GObject.ParamSpec, gstring: any, property_value: any):boolean
    export function rc_reparse_all():boolean
    export function rc_reparse_all_for_settings(settings: Settings, force_load: boolean):boolean
    export function rc_reset_styles(settings: Settings):void
    export function rc_scanner_new():any
    export function rc_set_default_files(filenames: any[]):void
    export function recent_chooser_error_quark():any
    export function recent_manager_error_quark():any
    export function render_activity(context: StyleContext, cr: any, x: number, y: number, width: number, height: number):void
    export function render_arrow(context: StyleContext, cr: any, angle: number, x: number, y: number, size: number):void
    export function render_background(context: StyleContext, cr: any, x: number, y: number, width: number, height: number):void
    export function render_check(context: StyleContext, cr: any, x: number, y: number, width: number, height: number):void
    export function render_expander(context: StyleContext, cr: any, x: number, y: number, width: number, height: number):void
    export function render_extension(context: StyleContext, cr: any, x: number, y: number, width: number, height: number, gap_side: PositionType):void
    export function render_focus(context: StyleContext, cr: any, x: number, y: number, width: number, height: number):void
    export function render_frame(context: StyleContext, cr: any, x: number, y: number, width: number, height: number):void
    export function render_frame_gap(context: StyleContext, cr: any, x: number, y: number, width: number, height: number, gap_side: PositionType, xy0_gap: number, xy1_gap: number):void
    export function render_handle(context: StyleContext, cr: any, x: number, y: number, width: number, height: number):void
    export function render_icon(context: StyleContext, cr: any, pixbuf: any, x: number, y: number):void
    export function render_icon_pixbuf(context: StyleContext, source: any, size: number):any
    export function render_icon_surface(context: StyleContext, cr: any, surface: any, x: number, y: number):void
    export function render_insertion_cursor(context: StyleContext, cr: any, x: number, y: number, layout: Pango.Layout, index: number, direction: Pango.Direction):void
    export function render_layout(context: StyleContext, cr: any, x: number, y: number, layout: Pango.Layout):void
    export function render_line(context: StyleContext, cr: any, x0: number, y0: number, x1: number, y1: number):void
    export function render_option(context: StyleContext, cr: any, x: number, y: number, width: number, height: number):void
    export function render_slider(context: StyleContext, cr: any, x: number, y: number, width: number, height: number, orientation: Orientation):void
    export function rgb_to_hsv(r: number, g: number, b: number, h: number, s: number, v: number):void
    export function selection_add_target(widget: Widget, selection: any, target: any, info: number):void
    export function selection_add_targets(widget: Widget, selection: any, targets: any[], ntargets: number):void
    export function selection_clear_targets(widget: Widget, selection: any):void
    export function selection_convert(widget: Widget, selection: any, target: any, time_: number):boolean
    export function selection_owner_set(widget: Widget, selection: any, time_: number):boolean
    export function selection_owner_set_for_display(display: Gdk.Display, widget: Widget, selection: any, time_: number):boolean
    export function selection_remove_all(widget: Widget):void
    export function set_debug_flags(flags: number):void
    export function show_about_dialog(parent: Window, first_property_name: string, ...args: any[]):void
    export function show_uri(screen: Gdk.Screen, uri: string, timestamp: number):boolean
    export function stock_add(items: any[], n_items: number):void
    export function stock_add_static(items: any[], n_items: number):void
    export function stock_list_ids():any
    export function stock_lookup(stock_id: string, item: any):boolean
    export function stock_set_translate_func(domain: string, func: any, data: any, notify: any):void
    export function target_table_free(targets: any[], n_targets: number):void
    export function target_table_new_from_list(list: any, n_targets: number):any[]
    export function targets_include_image(targets: any[], n_targets: number, writable: boolean):boolean
    export function targets_include_rich_text(targets: any[], n_targets: number, buffer: TextBuffer):boolean
    export function targets_include_text(targets: any[], n_targets: number):boolean
    export function targets_include_uri(targets: any[], n_targets: number):boolean
    export function test_create_simple_window(window_title: string, dialog_text: string):Widget
    export function test_create_widget(widget_type: any, first_property_name: string, ...args: any[]):Widget
    export function test_display_button_window(window_title: string, dialog_text: string, ...args: any[]):Widget
    export function test_find_label(widget: Widget, label_pattern: string):Widget
    export function test_find_sibling(base_widget: Widget, widget_type: any):Widget
    export function test_find_widget(widget: Widget, label_pattern: string, widget_type: any):Widget
    export function test_init(argcp: number, argvp: string[], ...args: any[]):void
    export function test_list_all_types(n_types: number):any[]
    export function test_register_all_types():void
    export function test_slider_get_value(widget: Widget):number
    export function test_slider_set_perc(widget: Widget, percentage: number):void
    export function test_spin_button_click(spinner: SpinButton, button: number, upwards: boolean):boolean
    export function test_text_get(widget: Widget):string
    export function test_text_set(widget: Widget, string: string):void
    export function test_widget_click(widget: Widget, button: number, modifiers: Gdk.ModifierType):boolean
    export function test_widget_send_key(widget: Widget, keyval: number, modifiers: Gdk.ModifierType):boolean
    export function test_widget_wait_for_draw(widget: Widget):void
    export function tree_get_row_drag_data(selection_data: any, tree_model: any, path: any):boolean
    export function tree_row_reference_deleted(proxy: GObject.Object, path: any):void
    export function tree_row_reference_inserted(proxy: GObject.Object, path: any):void
    export function tree_row_reference_reordered(proxy: GObject.Object, path: any, iter: any, new_order: number[]):void
    export function tree_set_row_drag_data(selection_data: any, tree_model: any, path: any):boolean
    export function true_():boolean
    export enum Align {
        FILL,
        START,
        END,
        CENTER,
        BASELINE,
    }
    export enum ArrowPlacement {
        BOTH,
        START,
        END,
    }
    export enum ArrowType {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        NONE,
    }
    export enum AssistantPageType {
        CONTENT,
        INTRO,
        CONFIRM,
        SUMMARY,
        PROGRESS,
        CUSTOM,
    }
    export enum BaselinePosition {
        TOP,
        CENTER,
        BOTTOM,
    }
    export enum BorderStyle {
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
    export enum BuilderError {
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
    export enum ButtonBoxStyle {
        SPREAD,
        EDGE,
        START,
        END,
        CENTER,
        EXPAND,
    }
    export enum ButtonRole {
        NORMAL,
        CHECK,
        RADIO,
    }
    export enum ButtonsType {
        NONE,
        OK,
        CLOSE,
        CANCEL,
        YES_NO,
        OK_CANCEL,
    }
    export enum CellRendererAccelMode {
        GTK,
        OTHER,
        MODIFIER_TAP,
    }
    export enum CellRendererMode {
        INERT,
        ACTIVATABLE,
        EDITABLE,
    }
    export enum CornerType {
        TOP_LEFT,
        BOTTOM_LEFT,
        TOP_RIGHT,
        BOTTOM_RIGHT,
    }
    export enum CssProviderError {
        FAILED,
        SYNTAX,
        IMPORT,
        NAME,
        DEPRECATED,
        UNKNOWN_VALUE,
    }
    export enum CssSectionType {
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
    export enum DeleteType {
        CHARS,
        WORD_ENDS,
        WORDS,
        DISPLAY_LINES,
        DISPLAY_LINE_ENDS,
        PARAGRAPH_ENDS,
        PARAGRAPHS,
        WHITESPACE,
    }
    export enum DirectionType {
        TAB_FORWARD,
        TAB_BACKWARD,
        UP,
        DOWN,
        LEFT,
        RIGHT,
    }
    export enum DragResult {
        SUCCESS,
        NO_TARGET,
        USER_CANCELLED,
        TIMEOUT_EXPIRED,
        GRAB_BROKEN,
        ERROR,
    }
    export enum EntryIconPosition {
        PRIMARY,
        SECONDARY,
    }
    export enum EventSequenceState {
        NONE,
        CLAIMED,
        DENIED,
    }
    export enum ExpanderStyle {
        COLLAPSED,
        SEMI_COLLAPSED,
        SEMI_EXPANDED,
        EXPANDED,
    }
    export enum FileChooserAction {
        OPEN,
        SAVE,
        SELECT_FOLDER,
        CREATE_FOLDER,
    }
    export enum FileChooserConfirmation {
        CONFIRM,
        ACCEPT_FILENAME,
        SELECT_AGAIN,
    }
    export enum FileChooserError {
        NONEXISTENT,
        BAD_FILENAME,
        ALREADY_EXISTS,
        INCOMPLETE_HOSTNAME,
    }
    export enum IMPreeditStyle {
        NOTHING,
        CALLBACK,
        NONE,
    }
    export enum IMStatusStyle {
        NOTHING,
        CALLBACK,
        NONE,
    }
    export enum IconSize {
        INVALID,
        MENU,
        SMALL_TOOLBAR,
        LARGE_TOOLBAR,
        BUTTON,
        DND,
        DIALOG,
    }
    export enum IconThemeError {
        NOT_FOUND,
        FAILED,
    }
    export enum IconViewDropPosition {
        NO_DROP,
        DROP_INTO,
        DROP_LEFT,
        DROP_RIGHT,
        DROP_ABOVE,
        DROP_BELOW,
    }
    export enum ImageType {
        EMPTY,
        PIXBUF,
        STOCK,
        ICON_SET,
        ANIMATION,
        ICON_NAME,
        GICON,
        SURFACE,
    }
    export enum InputPurpose {
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
    export enum Justification {
        LEFT,
        RIGHT,
        CENTER,
        FILL,
    }
    export enum LevelBarMode {
        CONTINUOUS,
        DISCRETE,
    }
    export enum License {
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
    export enum MenuDirectionType {
        PARENT,
        CHILD,
        NEXT,
        PREV,
    }
    export enum MessageType {
        INFO,
        WARNING,
        QUESTION,
        ERROR,
        OTHER,
    }
    export enum MovementStep {
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
    export enum NotebookTab {
        FIRST,
        LAST,
    }
    export enum NumberUpLayout {
        LRTB,
        LRBT,
        RLTB,
        RLBT,
        TBLR,
        TBRL,
        BTLR,
        BTRL,
    }
    export enum Orientation {
        HORIZONTAL,
        VERTICAL,
    }
    export enum PackDirection {
        LTR,
        RTL,
        TTB,
        BTT,
    }
    export enum PackType {
        START,
        END,
    }
    export enum PageOrientation {
        PORTRAIT,
        LANDSCAPE,
        REVERSE_PORTRAIT,
        REVERSE_LANDSCAPE,
    }
    export enum PageSet {
        ALL,
        EVEN,
        ODD,
    }
    export enum PanDirection {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }
    export enum PathPriorityType {
        LOWEST,
        GTK,
        APPLICATION,
        THEME,
        RC,
        HIGHEST,
    }
    export enum PathType {
        WIDGET,
        WIDGET_CLASS,
        CLASS,
    }
    export enum PolicyType {
        ALWAYS,
        AUTOMATIC,
        NEVER,
        EXTERNAL,
    }
    export enum PositionType {
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
    }
    export enum PrintDuplex {
        SIMPLEX,
        HORIZONTAL,
        VERTICAL,
    }
    export enum PrintError {
        GENERAL,
        INTERNAL_ERROR,
        NOMEM,
        INVALID_FILE,
    }
    export enum PrintOperationAction {
        PRINT_DIALOG,
        PRINT,
        PREVIEW,
        EXPORT,
    }
    export enum PrintOperationResult {
        ERROR,
        APPLY,
        CANCEL,
        IN_PROGRESS,
    }
    export enum PrintPages {
        ALL,
        CURRENT,
        RANGES,
        SELECTION,
    }
    export enum PrintQuality {
        LOW,
        NORMAL,
        HIGH,
        DRAFT,
    }
    export enum PrintStatus {
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
    export enum PropagationPhase {
        NONE,
        CAPTURE,
        BUBBLE,
        TARGET,
    }
    export enum RcTokenType {
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
    export enum RecentChooserError {
        NOT_FOUND,
        INVALID_URI,
    }
    export enum RecentManagerError {
        NOT_FOUND,
        INVALID_URI,
        INVALID_ENCODING,
        NOT_REGISTERED,
        READ,
        WRITE,
        UNKNOWN,
    }
    export enum RecentSortType {
        NONE,
        MRU,
        LRU,
        CUSTOM,
    }
    export enum ReliefStyle {
        NORMAL,
        HALF,
        NONE,
    }
    export enum ResizeMode {
        PARENT,
        QUEUE,
        IMMEDIATE,
    }
    export enum ResponseType {
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
    export enum RevealerTransitionType {
        NONE,
        CROSSFADE,
        SLIDE_RIGHT,
        SLIDE_LEFT,
        SLIDE_UP,
        SLIDE_DOWN,
    }
    export enum ScrollStep {
        STEPS,
        PAGES,
        ENDS,
        HORIZONTAL_STEPS,
        HORIZONTAL_PAGES,
        HORIZONTAL_ENDS,
    }
    export enum ScrollType {
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
    export enum ScrollablePolicy {
        MINIMUM,
        NATURAL,
    }
    export enum SelectionMode {
        NONE,
        SINGLE,
        BROWSE,
        MULTIPLE,
    }
    export enum SensitivityType {
        AUTO,
        ON,
        OFF,
    }
    export enum ShadowType {
        NONE,
        IN,
        OUT,
        ETCHED_IN,
        ETCHED_OUT,
    }
    export enum SizeGroupMode {
        NONE,
        HORIZONTAL,
        VERTICAL,
        BOTH,
    }
    export enum SizeRequestMode {
        HEIGHT_FOR_WIDTH,
        WIDTH_FOR_HEIGHT,
        CONSTANT_SIZE,
    }
    export enum SortType {
        ASCENDING,
        DESCENDING,
    }
    export enum SpinButtonUpdatePolicy {
        ALWAYS,
        IF_VALID,
    }
    export enum SpinType {
        STEP_FORWARD,
        STEP_BACKWARD,
        PAGE_FORWARD,
        PAGE_BACKWARD,
        HOME,
        END,
        USER_DEFINED,
    }
    export enum StackTransitionType {
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
    export enum StateType {
        NORMAL,
        ACTIVE,
        PRELIGHT,
        SELECTED,
        INSENSITIVE,
        INCONSISTENT,
        FOCUSED,
    }
    export enum TextBufferTargetInfo {
        BUFFER_CONTENTS,
        RICH_TEXT,
        TEXT,
    }
    export enum TextDirection {
        NONE,
        LTR,
        RTL,
    }
    export enum TextExtendSelection {
        WORD,
        LINE,
    }
    export enum TextViewLayer {
        BELOW,
        ABOVE,
    }
    export enum TextWindowType {
        PRIVATE,
        WIDGET,
        TEXT,
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
    }
    export enum ToolbarSpaceStyle {
        EMPTY,
        LINE,
    }
    export enum ToolbarStyle {
        ICONS,
        TEXT,
        BOTH,
        BOTH_HORIZ,
    }
    export enum TreeViewColumnSizing {
        GROW_ONLY,
        AUTOSIZE,
        FIXED,
    }
    export enum TreeViewDropPosition {
        BEFORE,
        AFTER,
        INTO_OR_BEFORE,
        INTO_OR_AFTER,
    }
    export enum TreeViewGridLines {
        NONE,
        HORIZONTAL,
        VERTICAL,
        BOTH,
    }
    export enum Unit {
        NONE,
        POINTS,
        INCH,
        MM,
    }
    export enum WidgetHelpType {
        TOOLTIP,
        WHATS_THIS,
    }
    export enum WindowPosition {
        NONE,
        CENTER,
        MOUSE,
        CENTER_ALWAYS,
        CENTER_ON_PARENT,
    }
    export enum WindowType {
        TOPLEVEL,
        POPUP,
    }
    export enum WrapMode {
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
        constructor(config?: any)
        add_credit_section(section_name: string, people: string[]):void
        get_artists():string[]
        get_authors():string[]
        get_comments():string
        get_copyright():string
        get_documenters():string[]
        get_license():string
        get_license_type():License
        get_logo():any
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
        set_logo(logo: any):void
        set_logo_icon_name(icon_name: string):void
        set_program_name(name: string):void
        set_translator_credits(translator_credits: string):void
        set_version(version: string):void
        set_website(website: string):void
        set_website_label(website_label: string):void
        set_wrap_license(wrap_license: boolean):void
    }
    export class AccelGroup extends GObject.Object {
        static from_accel_closure(closure: any):AccelGroup
        constructor(config?: any)
        activate(accel_quark: any, acceleratable: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType):boolean
        connect(accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags, closure: any):void
        connect_by_path(accel_path: string, closure: any):void
        disconnect(closure: any):boolean
        disconnect_key(accel_key: number, accel_mods: Gdk.ModifierType):boolean
        find(find_func: any, data: any):any
        get_is_locked():boolean
        get_modifier_mask():Gdk.ModifierType
        lock():void
        query(accel_key: number, accel_mods: Gdk.ModifierType, n_entries: number):any[]
        unlock():void
    }
    export class AccelLabel extends Label {
        constructor(config?: any)
        get_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType):void
        get_accel_widget():Widget
        get_accel_width():number
        refetch():boolean
        set_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType):void
        set_accel_closure(accel_closure: any):void
        set_accel_widget(accel_widget: Widget):void
    }
    export class AccelMap extends GObject.Object {
        static add_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType):void
        static add_filter(filter_pattern: string):void
        static change_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType, replace: boolean):boolean
        static foreach(data: any, foreach_func: any):void
        static foreach_unfiltered(data: any, foreach_func: any):void
        static get():AccelMap
        static load(file_name: any):void
        static load_fd(fd: number):void
        static load_scanner(scanner: any):void
        static lock_path(accel_path: string):void
        static lookup_entry(accel_path: string, key: any):boolean
        static save(file_name: any):void
        static save_fd(fd: number):void
        static unlock_path(accel_path: string):void
    }
    export class Accessible extends Atk.Object {
        connect_widget_destroyed():void
        get_widget():Widget
        set_widget(widget: Widget):void
    }
    export class Action extends GObject.Object {
        constructor(config?: any)
        activate():void
        block_activate():void
        connect_accelerator():void
        create_icon(icon_size: number):Widget
        create_menu():Widget
        create_menu_item():Widget
        create_tool_item():Widget
        disconnect_accelerator():void
        get_accel_closure():any
        get_accel_path():string
        get_always_show_image():boolean
        get_gicon():any
        get_icon_name():string
        get_is_important():boolean
        get_label():string
        get_name():string
        get_proxies():any
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
        set_gicon(icon: any):void
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
        constructor(config?: any)
        get_center_widget():Widget
        pack_end(child: Widget):void
        pack_start(child: Widget):void
        set_center_widget(center_widget: Widget):void
    }
    export class ActionGroup extends GObject.Object {
        constructor(config?: any)
        add_action(action: Action):void
        add_action_with_accel(action: Action, accelerator: string):void
        add_actions(entries: any[], n_entries: number, user_data: any):void
        add_actions_full(entries: any[], n_entries: number, user_data: any, destroy: any):void
        add_radio_actions(entries: any[], n_entries: number, value: number, on_change: any, user_data: any):void
        add_radio_actions_full(entries: any[], n_entries: number, value: number, on_change: any, user_data: any, destroy: any):void
        add_toggle_actions(entries: any[], n_entries: number, user_data: any):void
        add_toggle_actions_full(entries: any[], n_entries: number, user_data: any, destroy: any):void
        get_accel_group():AccelGroup
        get_action(action_name: string):Action
        get_name():string
        get_sensitive():boolean
        get_visible():boolean
        list_actions():any
        remove_action(action: Action):void
        set_accel_group(accel_group: AccelGroup):void
        set_sensitive(sensitive: boolean):void
        set_translate_func(func: any, data: any, notify: any):void
        set_translation_domain(domain: string):void
        set_visible(visible: boolean):void
        translate_string(string: string):string
    }
    export class Adjustment extends GObject.InitiallyUnowned {
        constructor(config?: any)
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
        constructor(config?: any)
        get_padding(padding_top: number, padding_bottom: number, padding_left: number, padding_right: number):void
        set(xalign: number, yalign: number, xscale: number, yscale: number):void
        set_padding(padding_top: number, padding_bottom: number, padding_left: number, padding_right: number):void
    }
    export class AppChooserButton extends ComboBox {
        constructor(config?: any)
        append_custom_item(name: string, label: string, icon: any):void
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
        constructor(config?: any)
        static new_for_content_type(parent: Window, flags: DialogFlags, content_type: string):AppChooserDialog
        get_heading():string
        get_widget():Widget
        set_heading(heading: string):void
    }
    export class AppChooserWidget extends Box {
        constructor(config?: any)
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
        constructor(config?: any)
        add_action(action: any)
        add_accelerator(accelerator: string, action_name: string, parameter: any):void
        add_window(window: Window):void
        get_accels_for_action(detailed_action_name: string):string[]
        get_actions_for_accel(accel: string):string[]
        get_active_window():Window
        get_app_menu():Gio.MenuModel
        get_menu_by_id(id: string):Gio.Menu
        get_menubar():Gio.MenuModel
        get_window_by_id(id: number):Window
        get_windows():any
        inhibit(window: Window, flags: ApplicationInhibitFlags, reason: string):number
        is_inhibited(flags: ApplicationInhibitFlags):boolean
        list_action_descriptions():string[]
        prefers_app_menu():boolean
        remove_accelerator(action_name: string, parameter: any):void
        remove_window(window: Window):void
        set_accels_for_action(detailed_action_name: string, accels: string[]):void
        set_app_menu(app_menu: Gio.MenuModel):void
        set_menubar(menubar: Gio.MenuModel):void
        uninhibit(cookie: number):void
    }
    export class ApplicationWindow extends Window {
        constructor(config?: any)
        get_id():number
        get_show_menubar():boolean
        set_show_menubar(show_menubar: boolean):void
    }
    export class Arrow extends Misc {
        constructor(config?: any)
        set(arrow_type: ArrowType, shadow_type: ShadowType):void
    }
    export class ArrowAccessible extends WidgetAccessible {
    }
    export class AspectFrame extends Frame {
        constructor(config?: any)
        set(xalign: number, yalign: number, ratio: number, obey_child: boolean):void
    }
    export class Assistant extends Window {
        constructor(config?: any)
        add_action_widget(child: Widget):void
        append_page(page: Widget):number
        commit():void
        get_current_page():number
        get_n_pages():number
        get_nth_page(page_num: number):Widget
        get_page_complete(page: Widget):boolean
        get_page_has_padding(page: Widget):boolean
        get_page_header_image(page: Widget):any
        get_page_side_image(page: Widget):any
        get_page_title(page: Widget):string
        get_page_type(page: Widget):AssistantPageType
        insert_page(page: Widget, position: number):number
        next_page():void
        prepend_page(page: Widget):number
        previous_page():void
        remove_action_widget(child: Widget):void
        remove_page(page_num: number):void
        set_current_page(page_num: number):void
        set_forward_page_func(page_func: any, data: any, destroy: any):void
        set_page_complete(page: Widget, complete: boolean):void
        set_page_has_padding(page: Widget, has_padding: boolean):void
        set_page_header_image(page: Widget, pixbuf: any):void
        set_page_side_image(page: Widget, pixbuf: any):void
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
        constructor(config?: any)
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
        constructor(config?: any)
        static new_from_file(filename: string):Builder
        static new_from_resource(resource_path: string):Builder
        static new_from_string(string: string, length: number):Builder
        add_callback_symbol(callback_name: string, callback_symbol: any):void
        add_callback_symbols(first_callback_name: string, first_callback_symbol: any, ...args: any[]):void
        add_from_file(filename: string):number
        add_from_resource(resource_path: string):number
        add_from_string(buffer: string, length: number):number
        add_objects_from_file(filename: string, object_ids: string[]):number
        add_objects_from_resource(resource_path: string, object_ids: string[]):number
        add_objects_from_string(buffer: string, length: number, object_ids: string[]):number
        connect_signals(user_data: any):void
        connect_signals_full(func: any, user_data: any):void
        expose_object(name: string, object: GObject.Object):void
        get_application():Application
        get_object(name: string):GObject.Object
        get_objects():any
        get_translation_domain():string
        get_type_from_name(type_name: string):any
        lookup_callback_symbol(callback_name: string):any
        set_application(application: Application):void
        set_translation_domain(domain: string):void
        value_from_string(pspec: GObject.ParamSpec, string: string, value: any):boolean
        value_from_string_type(type: any, string: string, value: any):boolean
    }
    export class Button extends Bin {
        constructor(config?: any)
        static new_from_icon_name(icon_name: string, size: number):Button
        static new_from_stock(stock_id: string):Button
        static new_with_label(label: string):Button
        static new_with_mnemonic(label: string):Button
        clicked():void
        enter():void
        get_alignment(xalign: number, yalign: number):void
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
        set_alignment(xalign: number, yalign: number):void
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
        constructor(config?: any)
        get_child_non_homogeneous(child: Widget):boolean
        get_child_secondary(child: Widget):boolean
        get_layout():ButtonBoxStyle
        set_child_non_homogeneous(child: Widget, non_homogeneous: boolean):void
        set_child_secondary(child: Widget, is_secondary: boolean):void
        set_layout(layout_style: ButtonBoxStyle):void
    }
    export class Calendar extends Widget {
        constructor(config?: any)
        clear_marks():void
        get_date(year: number, month: number, day: number):void
        get_day_is_marked(day: number):boolean
        get_detail_height_rows():number
        get_detail_width_chars():number
        get_display_options():CalendarDisplayOptions
        mark_day(day: number):void
        select_day(day: number):void
        select_month(month: number, year: number):void
        set_detail_func(func: any, data: any, destroy: any):void
        set_detail_height_rows(rows: number):void
        set_detail_width_chars(chars: number):void
        set_display_options(flags: CalendarDisplayOptions):void
        unmark_day(day: number):void
    }
    export class CellAccessible extends Accessible {
    }
    export class CellArea extends GObject.InitiallyUnowned {
        activate(context: CellAreaContext, widget: Widget, cell_area: any, flags: CellRendererState, edit_only: boolean):boolean
        activate_cell(widget: Widget, renderer: CellRenderer, event: any, cell_area: any, flags: CellRendererState):boolean
        add(renderer: CellRenderer):void
        add_focus_sibling(renderer: CellRenderer, sibling: CellRenderer):void
        add_with_properties(renderer: CellRenderer, first_prop_name: string, ...args: any[]):void
        apply_attributes(tree_model: any, iter: any, is_expander: boolean, is_expanded: boolean):void
        attribute_connect(renderer: CellRenderer, attribute: string, column: number):void
        attribute_disconnect(renderer: CellRenderer, attribute: string):void
        attribute_get_column(renderer: CellRenderer, attribute: string):number
        cell_get(renderer: CellRenderer, first_prop_name: string, ...args: any[]):void
        cell_get_property(renderer: CellRenderer, property_name: string, value: any):void
        cell_get_valist(renderer: CellRenderer, first_property_name: string, var_args: any):void
        cell_set(renderer: CellRenderer, first_prop_name: string, ...args: any[]):void
        cell_set_property(renderer: CellRenderer, property_name: string, value: any):void
        cell_set_valist(renderer: CellRenderer, first_property_name: string, var_args: any):void
        copy_context(context: CellAreaContext):CellAreaContext
        create_context():CellAreaContext
        event(context: CellAreaContext, widget: Widget, event: any, cell_area: any, flags: CellRendererState):number
        focus(direction: DirectionType):boolean
        foreach(callback: any, callback_data: any):void
        foreach_alloc(context: CellAreaContext, widget: Widget, cell_area: any, background_area: any, callback: any, callback_data: any):void
        get_cell_allocation(context: CellAreaContext, widget: Widget, renderer: CellRenderer, cell_area: any, allocation: any):void
        get_cell_at_position(context: CellAreaContext, widget: Widget, cell_area: any, x: number, y: number, alloc_area: any):CellRenderer
        get_current_path_string():string
        get_edit_widget():any
        get_edited_cell():CellRenderer
        get_focus_cell():CellRenderer
        get_focus_from_sibling(renderer: CellRenderer):CellRenderer
        get_focus_siblings(renderer: CellRenderer):any
        get_preferred_height(context: CellAreaContext, widget: Widget, minimum_height: number, natural_height: number):void
        get_preferred_height_for_width(context: CellAreaContext, widget: Widget, width: number, minimum_height: number, natural_height: number):void
        get_preferred_width(context: CellAreaContext, widget: Widget, minimum_width: number, natural_width: number):void
        get_preferred_width_for_height(context: CellAreaContext, widget: Widget, height: number, minimum_width: number, natural_width: number):void
        get_request_mode():SizeRequestMode
        has_renderer(renderer: CellRenderer):boolean
        inner_cell_area(widget: Widget, cell_area: any, inner_area: any):void
        is_activatable():boolean
        is_focus_sibling(renderer: CellRenderer, sibling: CellRenderer):boolean
        remove(renderer: CellRenderer):void
        remove_focus_sibling(renderer: CellRenderer, sibling: CellRenderer):void
        render(context: CellAreaContext, widget: Widget, cr: any, background_area: any, cell_area: any, flags: CellRendererState, paint_focus: boolean):void
        request_renderer(renderer: CellRenderer, orientation: Orientation, widget: Widget, for_size: number, minimum_size: number, natural_size: number):void
        set_focus_cell(renderer: CellRenderer):void
        stop_editing(canceled: boolean):void
    }
    export class CellAreaBox extends CellArea {
        constructor(config?: any)
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
        activate(event: any, widget: Widget, path: string, background_area: any, cell_area: any, flags: CellRendererState):boolean
        get_aligned_area(widget: Widget, flags: CellRendererState, cell_area: any, aligned_area: any):void
        get_alignment(xalign: number, yalign: number):void
        get_fixed_size(width: number, height: number):void
        get_padding(xpad: number, ypad: number):void
        get_preferred_height(widget: Widget, minimum_size: number, natural_size: number):void
        get_preferred_height_for_width(widget: Widget, width: number, minimum_height: number, natural_height: number):void
        get_preferred_size(widget: Widget, minimum_size: any, natural_size: any):void
        get_preferred_width(widget: Widget, minimum_size: number, natural_size: number):void
        get_preferred_width_for_height(widget: Widget, height: number, minimum_width: number, natural_width: number):void
        get_request_mode():SizeRequestMode
        get_sensitive():boolean
        get_size(widget: Widget, cell_area: any, x_offset: number, y_offset: number, width: number, height: number):void
        get_state(widget: Widget, cell_state: CellRendererState):StateFlags
        get_visible():boolean
        is_activatable():boolean
        render(cr: any, widget: Widget, background_area: any, cell_area: any, flags: CellRendererState):void
        set_alignment(xalign: number, yalign: number):void
        set_fixed_size(width: number, height: number):void
        set_padding(xpad: number, ypad: number):void
        set_sensitive(sensitive: boolean):void
        set_visible(visible: boolean):void
        start_editing(event: any, widget: Widget, path: string, background_area: any, cell_area: any, flags: CellRendererState):any
        stop_editing(canceled: boolean):void
    }
    export class CellRendererAccel extends CellRendererText {
        constructor(config?: any)
    }
    export class CellRendererCombo extends CellRendererText {
        constructor(config?: any)
    }
    export class CellRendererPixbuf extends CellRenderer {
        constructor(config?: any)
    }
    export class CellRendererProgress extends CellRenderer {
        constructor(config?: any)
    }
    export class CellRendererSpin extends CellRendererText {
        constructor(config?: any)
    }
    export class CellRendererSpinner extends CellRenderer {
        constructor(config?: any)
    }
    export class CellRendererText extends CellRenderer {
        constructor(config?: any)
        set_fixed_height_from_font(number_of_rows: number):void
    }
    export class CellRendererToggle extends CellRenderer {
        constructor(config?: any)
        get_activatable():boolean
        get_active():boolean
        get_radio():boolean
        set_activatable(setting: boolean):void
        set_active(setting: boolean):void
        set_radio(radio: boolean):void
    }
    export class CellView extends Widget {
        constructor(config?: any)
        static new_with_context(area: CellArea, context: CellAreaContext):CellView
        static new_with_markup(markup: string):CellView
        static new_with_pixbuf(pixbuf: any):CellView
        static new_with_text(text: string):CellView
        get_displayed_row():any
        get_draw_sensitive():boolean
        get_fit_model():boolean
        get_model():any
        get_size_of_row(path: any, requisition: any):boolean
        set_background_color(color: any):void
        set_background_rgba(rgba: any):void
        set_displayed_row(path: any):void
        set_draw_sensitive(draw_sensitive: boolean):void
        set_fit_model(fit_model: boolean):void
        set_model(model: any):void
    }
    export class CheckButton extends ToggleButton {
        constructor(config?: any)
        static new_with_label(...args: any[]):CheckButton

        static new_with_mnemonic(label: string):CheckButton
    }
    export class CheckMenuItem extends MenuItem {
        constructor(config?: any)
        static new_with_label(...args: any[]):CheckMenuItem

        static new_with_mnemonic(label: string):CheckMenuItem
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
        static get(selection: any):Clipboard
        static get_default(display: Gdk.Display):Clipboard
        static get_for_display(display: Gdk.Display, selection: any):Clipboard
        clear():void
        get_display():Gdk.Display
        get_owner():GObject.Object
        request_contents(target: any, callback: any, user_data: any):void
        request_image(callback: any, user_data: any):void
        request_rich_text(buffer: TextBuffer, callback: any, user_data: any):void
        request_targets(callback: any, user_data: any):void
        request_text(callback: any, user_data: any):void
        request_uris(callback: any, user_data: any):void
        set_can_store(targets: any[], n_targets: number):void
        set_image(pixbuf: any):void
        set_text(text: string, len: number):void
        set_with_data(targets: any[], n_targets: number, get_func: any, clear_func: any, user_data: any):boolean
        set_with_owner(targets: any[], n_targets: number, get_func: any, clear_func: any, owner: GObject.Object):boolean
        store():void
        wait_for_contents(target: any):any
        wait_for_image():any
        wait_for_rich_text(buffer: TextBuffer, format: any, length: number):number[]
        wait_for_targets(targets: any[], n_targets: number):boolean
        wait_for_text():string
        wait_for_uris():string[]
        wait_is_image_available():boolean
        wait_is_rich_text_available(buffer: TextBuffer):boolean
        wait_is_target_available(target: any):boolean
        wait_is_text_available():boolean
        wait_is_uris_available():boolean
    }
    export class ColorButton extends Button {
        constructor(config?: any)
        static new_with_color(color: any):ColorButton
        static new_with_rgba(rgba: any):ColorButton
        get_alpha():number
        get_color(color: any):void
        get_rgba(rgba: any):void
        get_title():string
        get_use_alpha():boolean
        set_alpha(alpha: number):void
        set_color(color: any):void
        set_rgba(rgba: any):void
        set_title(title: string):void
        set_use_alpha(use_alpha: boolean):void
    }
    export class ColorChooserDialog extends Dialog {
        constructor(config?: any)
    }
    export class ColorChooserWidget extends Box {
        constructor(config?: any)
    }
    export class ColorSelection extends Box {
        static palette_from_string(str: string, colors: any[], n_colors: number):boolean
        static palette_to_string(colors: any[], n_colors: number):string
        static set_change_palette_with_screen_hook(func: any):any
        constructor(config?: any)
        get_current_alpha():number
        get_current_color(color: any):void
        get_current_rgba(rgba: any):void
        get_has_opacity_control():boolean
        get_has_palette():boolean
        get_previous_alpha():number
        get_previous_color(color: any):void
        get_previous_rgba(rgba: any):void
        is_adjusting():boolean
        set_current_alpha(alpha: number):void
        set_current_color(color: any):void
        set_current_rgba(rgba: any):void
        set_has_opacity_control(has_opacity: boolean):void
        set_has_palette(has_palette: boolean):void
        set_previous_alpha(alpha: number):void
        set_previous_color(color: any):void
        set_previous_rgba(rgba: any):void
    }
    export class ColorSelectionDialog extends Dialog {
        constructor(config?: any)
        get_color_selection():Widget
    }
    export class ComboBox extends Bin {
        constructor(config?: any)
        static new_with_area(area: CellArea):ComboBox
        static new_with_area_and_entry(area: CellArea):ComboBox
        static new_with_entry():ComboBox
        static new_with_model(model: any):ComboBox
        static new_with_model_and_entry(model: any):ComboBox
        get_active():number
        get_active_id():string
        get_active_iter(iter: any):boolean
        get_add_tearoffs():boolean
        get_button_sensitivity():SensitivityType
        get_column_span_column():number
        get_entry_text_column():number
        get_focus_on_click():boolean
        get_has_entry():boolean
        get_id_column():number
        get_model():any
        get_popup_accessible():Atk.Object
        get_popup_fixed_width():boolean
        get_row_separator_func():any
        get_row_span_column():number
        get_title():string
        get_wrap_width():number
        popdown():void
        popup():void
        popup_for_device(device: Gdk.Device):void
        set_active(index_: number):void
        set_active_id(active_id: string):boolean
        set_active_iter(iter: any):void
        set_add_tearoffs(add_tearoffs: boolean):void
        set_button_sensitivity(sensitivity: SensitivityType):void
        set_column_span_column(column_span: number):void
        set_entry_text_column(text_column: number):void
        set_focus_on_click(focus_on_click: boolean):void
        set_id_column(id_column: number):void
        set_model(model: any):void
        set_popup_fixed_width(fixed: boolean):void
        set_row_separator_func(func: any, data: any, destroy: any):void
        set_row_span_column(row_span: number):void
        set_title(title: string):void
        set_wrap_width(width: number):void
    }
    export class ComboBoxAccessible extends ContainerAccessible {
    }
    export class ComboBoxText extends ComboBox {
        constructor(config?: any)
        static new_with_entry():ComboBoxText
        append(id: string, text: string):void
        append_text(text: string):void
        get_active_text():string
        insert(position: number, id: string, text: string):void
        insert_text(position: number, text: string):void
        prepend(id: string, text: string):void
        prepend_text(text: string):void
        remove(...args: any[]):void

        remove_all():void
    }
    export class Container extends Widget {
        add(widget: Widget):void
        add_with_properties(widget: Widget, first_prop_name: string, ...args: any[]):void
        check_resize():void
        child_get(child: Widget, first_prop_name: string, ...args: any[]):void
        child_get_property(child: Widget, property_name: string, value: any):void
        child_get_valist(child: Widget, first_property_name: string, var_args: any):void
        child_notify(...args: any[]):void

        child_notify_by_pspec(child: Widget, pspec: GObject.ParamSpec):void
        child_set(child: Widget, first_prop_name: string, ...args: any[]):void
        child_set_property(child: Widget, property_name: string, value: any):void
        child_set_valist(child: Widget, first_property_name: string, var_args: any):void
        child_type():any
        forall(callback: any, callback_data: any):void
        foreach(callback: any, callback_data: any):void
        get_border_width():number
        get_children():any
        get_focus_chain(focusable_widgets: any):boolean
        get_focus_child():Widget
        get_focus_hadjustment():Adjustment
        get_focus_vadjustment():Adjustment
        get_path_for_child(child: Widget):any
        get_resize_mode():ResizeMode
        propagate_draw(child: Widget, cr: any):void
        remove(...args: any[]):void

        resize_children():void
        set_border_width(border_width: number):void
        set_focus_chain(focusable_widgets: any):void
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
        constructor(config?: any)
        add_child(child: CellAccessible):void
        get_children():any
        remove_child(child: CellAccessible):void
    }
    export class CssProvider extends GObject.Object {
        static get_default():CssProvider
        static get_named(name: string, variant: string):CssProvider
        constructor(config?: any)
        load_from_data(...args:any[]):boolean

        load_from_file(file: any):boolean
        load_from_path(path: string):boolean
        load_from_resource(resource_path: string):void
        to_string():string
    }
    export class Dialog extends Window {
        constructor(config?: any)
        static new_with_buttons(title: string, parent: Window, flags: DialogFlags, first_button_text: string, ...args: any[]):Dialog
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
        constructor(config?: any)
    }
    export class Entry extends Widget {
        constructor(config?: any)
        static new_with_buffer(buffer: EntryBuffer):Entry
        get_activates_default():boolean
        get_alignment():number
        get_attributes():any
        get_buffer():EntryBuffer
        get_completion():EntryCompletion
        get_current_icon_drag_source():number
        get_cursor_hadjustment():Adjustment
        get_has_frame():boolean
        get_icon_activatable(icon_pos: EntryIconPosition):boolean
        get_icon_area(icon_pos: EntryIconPosition, icon_area: any):void
        get_icon_at_pos(x: number, y: number):number
        get_icon_gicon(icon_pos: EntryIconPosition):any
        get_icon_name(icon_pos: EntryIconPosition):string
        get_icon_pixbuf(icon_pos: EntryIconPosition):any
        get_icon_sensitive(icon_pos: EntryIconPosition):boolean
        get_icon_stock(icon_pos: EntryIconPosition):string
        get_icon_storage_type(icon_pos: EntryIconPosition):ImageType
        get_icon_tooltip_markup(icon_pos: EntryIconPosition):string
        get_icon_tooltip_text(icon_pos: EntryIconPosition):string
        get_inner_border():any
        get_input_hints():InputHints
        get_input_purpose():InputPurpose
        get_invisible_char():number
        get_layout():Pango.Layout
        get_layout_offsets(x: number, y: number):void
        get_max_length():number
        get_max_width_chars():number
        get_overwrite_mode():boolean
        get_placeholder_text():string
        get_progress_fraction():number
        get_progress_pulse_step():number
        get_tabs():any
        get_text():string
        get_text_area(text_area: any):void
        get_text_length():number
        get_visibility():boolean
        get_width_chars():number
        grab_focus_without_selecting():void
        im_context_filter_keypress(event: any):boolean
        layout_index_to_text_index(layout_index: number):number
        progress_pulse():void
        reset_im_context():void
        set_activates_default(setting: boolean):void
        set_alignment(xalign: number):void
        set_attributes(attrs: any):void
        set_buffer(buffer: EntryBuffer):void
        set_completion(completion: EntryCompletion):void
        set_cursor_hadjustment(adjustment: Adjustment):void
        set_has_frame(setting: boolean):void
        set_icon_activatable(icon_pos: EntryIconPosition, activatable: boolean):void
        set_icon_drag_source(icon_pos: EntryIconPosition, target_list: any, actions: Gdk.DragAction):void
        set_icon_from_gicon(icon_pos: EntryIconPosition, icon: any):void
        set_icon_from_icon_name(icon_pos: EntryIconPosition, icon_name: string):void
        set_icon_from_pixbuf(icon_pos: EntryIconPosition, pixbuf: any):void
        set_icon_from_stock(icon_pos: EntryIconPosition, stock_id: string):void
        set_icon_sensitive(icon_pos: EntryIconPosition, sensitive: boolean):void
        set_icon_tooltip_markup(icon_pos: EntryIconPosition, tooltip: string):void
        set_icon_tooltip_text(icon_pos: EntryIconPosition, tooltip: string):void
        set_inner_border(border: any):void
        set_input_hints(hints: InputHints):void
        set_input_purpose(purpose: InputPurpose):void
        set_invisible_char(ch: number):void
        set_max_length(max: number):void
        set_max_width_chars(n_chars: number):void
        set_overwrite_mode(overwrite: boolean):void
        set_placeholder_text(text: string):void
        set_progress_fraction(fraction: number):void
        set_progress_pulse_step(fraction: number):void
        set_tabs(tabs: any):void
        set_text(text: string):void
        set_visibility(visible: boolean):void
        set_width_chars(n_chars: number):void
        text_index_to_layout_index(text_index: number):number
        unset_invisible_char():void
    }
    export class EntryAccessible extends WidgetAccessible {
    }
    export class EntryBuffer extends GObject.Object {
        constructor(config?: any)
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
        constructor(config?: any)
        static new_with_area(area: CellArea):EntryCompletion
        complete():void
        compute_prefix(key: string):string
        delete_action(index_: number):void
        get_completion_prefix():string
        get_entry():Widget
        get_inline_completion():boolean
        get_inline_selection():boolean
        get_minimum_key_length():number
        get_model():any
        get_popup_completion():boolean
        get_popup_set_width():boolean
        get_popup_single_match():boolean
        get_text_column():number
        insert_action_markup(index_: number, markup: string):void
        insert_action_text(index_: number, text: string):void
        insert_prefix():void
        set_inline_completion(inline_completion: boolean):void
        set_inline_selection(inline_selection: boolean):void
        set_match_func(func: any, func_data: any, func_notify: any):void
        set_minimum_key_length(length: number):void
        set_model(model: any):void
        set_popup_completion(popup_completion: boolean):void
        set_popup_set_width(popup_set_width: boolean):void
        set_popup_single_match(popup_single_match: boolean):void
        set_text_column(column: number):void
    }
    export class EntryIconAccessible extends Atk.Object {
    }
    export class EventBox extends Bin {
        constructor(config?: any)
        get_above_child():boolean
        get_visible_window():boolean
        set_above_child(above_child: boolean):void
        set_visible_window(visible_window: boolean):void
    }
    export class EventController extends GObject.Object {
        get_propagation_phase():PropagationPhase
        get_widget():Widget
        handle_event(event: any):boolean
        reset():void
        set_propagation_phase(phase: PropagationPhase):void
    }
    export class Expander extends Bin {
        constructor(config?: any)
        static new_with_mnemonic(label: string):Expander
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
        constructor(config?: any)
        static new_with_dialog(dialog: Dialog):FileChooserButton
        get_focus_on_click():boolean
        get_title():string
        get_width_chars():number
        set_focus_on_click(focus_on_click: boolean):void
        set_title(title: string):void
        set_width_chars(n_chars: number):void
    }
    export class FileChooserDialog extends Dialog {
        constructor(config?: any)
        set_select_multiple(select: boolean)
    }
    export class FileChooserWidget extends Box {
        constructor(config?: any)
    }
    export class FileFilter extends GObject.InitiallyUnowned {
        constructor(config?: any)
        add_custom(needed: FileFilterFlags, func: any, data: any, notify: any):void
        add_mime_type(mime_type: string):void
        add_pattern(pattern: string):void
        add_pixbuf_formats():void
        filter(filter_info: any):boolean
        get_name():string
        get_needed():FileFilterFlags
        set_name(name: string):void
    }
    export class Fixed extends Container {
        constructor(config?: any)
        move(widget: Widget, x: number, y: number):void
        put(widget: Widget, x: number, y: number):void
    }
    export class FlowBox extends Container {
        constructor(config?: any)
        bind_model(model: any, create_widget_func: any, user_data: any, user_data_free_func: any):void
        get_activate_on_single_click():boolean
        get_child_at_index(idx: number):FlowBoxChild
        get_column_spacing():number
        get_homogeneous():boolean
        get_max_children_per_line():number
        get_min_children_per_line():number
        get_row_spacing():number
        get_selected_children():any
        get_selection_mode():SelectionMode
        insert(widget: Widget, position: number):void
        invalidate_filter():void
        invalidate_sort():void
        select_all():void
        select_child(child: FlowBoxChild):void
        selected_foreach(func: any, data: any):void
        set_activate_on_single_click(single: boolean):void
        set_column_spacing(spacing: number):void
        set_filter_func(filter_func: any, user_data: any, destroy: any):void
        set_hadjustment(adjustment: Adjustment):void
        set_homogeneous(homogeneous: boolean):void
        set_max_children_per_line(n_children: number):void
        set_min_children_per_line(n_children: number):void
        set_row_spacing(spacing: number):void
        set_selection_mode(mode: SelectionMode):void
        set_sort_func(sort_func: any, user_data: any, destroy: any):void
        set_vadjustment(adjustment: Adjustment):void
        unselect_all():void
        unselect_child(child: FlowBoxChild):void
    }
    export class FlowBoxAccessible extends ContainerAccessible {
    }
    export class FlowBoxChild extends Bin {
        constructor(config?: any)
        changed():void
        get_index():number
        is_selected():boolean
    }
    export class FlowBoxChildAccessible extends ContainerAccessible {
    }
    export class FontButton extends Button {
        constructor(config?: any)
        static new_with_font(fontname: string):FontButton
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
        constructor(config?: any)
    }
    export class FontChooserWidget extends Box {
        constructor(config?: any)
    }
    export class FontSelection extends Box {
        constructor(config?: any)
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
        constructor(config?: any)
        get_cancel_button():Widget
        get_font_name():string
        get_font_selection():Widget
        get_ok_button():Widget
        get_preview_text():string
        set_font_name(fontname: string):boolean
        set_preview_text(text: string):void
    }
    export class Frame extends Bin {
        constructor(config?: any)
        get_label():string
        get_label_align(xalign: number, yalign: number):void
        get_label_widget():Widget
        get_shadow_type():ShadowType
        set_label(label: string):void
        set_label_align(xalign: number, yalign: number):void
        set_label_widget(label_widget: Widget):void
        set_shadow_type(type: ShadowType):void
    }
    export class FrameAccessible extends ContainerAccessible {
    }
    export class GLArea extends Widget {
        constructor(config?: any)
        attach_buffers():void
        get_auto_render():boolean
        get_context():Gdk.GLContext
        get_error():any
        get_has_alpha():boolean
        get_has_depth_buffer():boolean
        get_has_stencil_buffer():boolean
        get_required_version(major: number, minor: number):void
        make_current():void
        queue_render():void
        set_auto_render(auto_render: boolean):void
        set_error(error: any):void
        set_has_alpha(has_alpha: boolean):void
        set_has_depth_buffer(has_depth_buffer: boolean):void
        set_has_stencil_buffer(has_stencil_buffer: boolean):void
        set_required_version(major: number, minor: number):void
    }
    export class Gesture extends EventController {
        get_bounding_box(rect: any):boolean
        get_bounding_box_center(x: number, y: number):boolean
        get_device():Gdk.Device
        get_group():any
        get_last_event(sequence: any):any
        get_last_updated_sequence():any
        get_point(sequence: any, x: number, y: number):boolean
        get_sequence_state(sequence: any):EventSequenceState
        get_sequences():any
        get_window():Gdk.Window
        group(gesture: Gesture):void
        handles_sequence(sequence: any):boolean
        is_active():boolean
        is_grouped_with(other: Gesture):boolean
        is_recognized():boolean
        set_sequence_state(sequence: any, state: EventSequenceState):boolean
        set_state(state: EventSequenceState):boolean
        set_window(window: Gdk.Window):void
        ungroup():void
    }
    export class GestureDrag extends GestureSingle {
        constructor(config?: any)
        get_offset(x: number, y: number):boolean
        get_start_point(x: number, y: number):boolean
    }
    export class GestureLongPress extends GestureSingle {
        constructor(config?: any)
    }
    export class GestureMultiPress extends GestureSingle {
        constructor(config?: any)
        get_area(rect: any):boolean
        set_area(rect: any):void
    }
    export class GesturePan extends GestureDrag {
        constructor(config?: any)
        get_orientation():Orientation
        set_orientation(orientation: Orientation):void
    }
    export class GestureRotate extends Gesture {
        constructor(config?: any)
        get_angle_delta():number
    }
    export class GestureSingle extends Gesture {
        get_button():number
        get_current_button():number
        get_current_sequence():any
        get_exclusive():boolean
        get_touch_only():boolean
        set_button(button: number):void
        set_exclusive(exclusive: boolean):void
        set_touch_only(touch_only: boolean):void
    }
    export class GestureSwipe extends GestureSingle {
        constructor(config?: any)
        get_velocity(velocity_x: number, velocity_y: number):boolean
    }
    export class GestureZoom extends Gesture {
        constructor(config?: any)
        get_scale_delta():number
    }
    export class Grid extends Container {
        constructor(config?: any)
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
        constructor(config?: any)
    }
    export class HButtonBox extends ButtonBox {
        constructor(config?: any)
    }
    export class HPaned extends Paned {
        constructor(config?: any)
    }
    export class HSV extends Widget {
        static to_rgb(h: number, s: number, v: number, r: number, g: number, b: number):void
        constructor(config?: any)
        get_color(h: number, s: number, v: number):void
        get_metrics(size: number, ring_width: number):void
        is_adjusting():boolean
        set_color(h: number, s: number, v: number):void
        set_metrics(size: number, ring_width: number):void
    }
    export class HScale extends Scale {
        constructor(config?: any)
        static new_with_range(min: number, max: number, step: number):HScale
    }
    export class HScrollbar extends Scrollbar {
        constructor(config?: any)
    }
    export class HSeparator extends Separator {
        constructor(config?: any)
    }
    export class HandleBox extends Bin {
        constructor(config?: any)
        get_child_detached():boolean
        get_handle_position():PositionType
        get_shadow_type():ShadowType
        get_snap_edge():PositionType
        set_handle_position(position: PositionType):void
        set_shadow_type(type: ShadowType):void
        set_snap_edge(edge: PositionType):void
    }
    export class HeaderBar extends Container {
        constructor(config?: any)
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
        filter_keypress(event: any):boolean
        focus_in():void
        focus_out():void
        get_preedit_string(str: string, attrs: any, cursor_pos: number):void
        get_surrounding(text: string, cursor_index: number):boolean
        reset():void
        set_client_window(window: Gdk.Window):void
        set_cursor_location(area: any):void
        set_surrounding(text: string, len: number, cursor_index: number):void
        set_use_preedit(use_preedit: boolean):void
    }
    export class IMContextSimple extends IMContext {
        constructor(config?: any)
        add_table(data: number[], max_seq_len: number, n_seqs: number):void
    }
    export class IMMulticontext extends IMContext {
        constructor(config?: any)
        append_menuitems(menushell: MenuShell):void
        get_context_id():string
        set_context_id(context_id: string):void
    }
    export class IconFactory extends GObject.Object {
        static lookup_default(stock_id: string):any
        constructor(config?: any)
        add(stock_id: string, icon_set: any):void
        add_default():void
        lookup(stock_id: string):any
        remove_default():void
    }
    export class IconInfo extends GObject.Object {
        constructor(config?: any)
        static new_for_pixbuf(icon_theme: IconTheme, pixbuf: any):IconInfo
        copy():IconInfo
        free():void
        get_attach_points(points: any[], n_points: number):boolean
        get_base_scale():number
        get_base_size():number
        get_builtin_pixbuf():any
        get_display_name():string
        get_embedded_rect(rectangle: any):boolean
        get_filename():any
        is_symbolic():boolean
        load_icon():any
        load_icon_async(cancellable: Gio.Cancellable, callback: any, user_data: any):void
        load_icon_finish(res: any):any
        load_surface(for_window: Gdk.Window):any
        load_symbolic(fg: any, success_color: any, warning_color: any, error_color: any, was_symbolic: boolean):any
        load_symbolic_async(fg: any, success_color: any, warning_color: any, error_color: any, cancellable: Gio.Cancellable, callback: any, user_data: any):void
        load_symbolic_finish(res: any, was_symbolic: boolean):any
        load_symbolic_for_context(context: StyleContext, was_symbolic: boolean):any
        load_symbolic_for_context_async(context: StyleContext, cancellable: Gio.Cancellable, callback: any, user_data: any):void
        load_symbolic_for_context_finish(res: any, was_symbolic: boolean):any
        load_symbolic_for_style(style: Style, state: StateType, was_symbolic: boolean):any
        set_raw_coordinates(raw_coordinates: boolean):void
    }
    export class IconTheme extends GObject.Object {
        static add_builtin_icon(icon_name: string, size: number, pixbuf: any):void
        static get_default():IconTheme
        static get_for_screen(screen: Gdk.Screen):IconTheme
        constructor(config?: any)
        add_resource_path(path: string):void
        append_search_path(path: any):void
        choose_icon(icon_names: string[], size: number, flags: IconLookupFlags):IconInfo
        choose_icon_for_scale(icon_names: string[], size: number, scale: number, flags: IconLookupFlags):IconInfo
        get_example_icon_name():string
        get_icon_sizes(icon_name: string):number[]
        get_search_path(path: any[], n_elements: number):void
        has_icon(icon_name: string):boolean
        list_contexts():any
        list_icons(context: string):any
        load_icon(icon_name: string, size: number, flags: IconLookupFlags):any
        load_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags):any
        load_surface(icon_name: string, size: number, scale: number, for_window: Gdk.Window, flags: IconLookupFlags):any
        lookup_by_gicon(icon: any, size: number, flags: IconLookupFlags):IconInfo
        lookup_by_gicon_for_scale(icon: any, size: number, scale: number, flags: IconLookupFlags):IconInfo
        lookup_icon(icon_name: string, size: number, flags: IconLookupFlags):IconInfo
        lookup_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags):IconInfo
        prepend_search_path(path: any):void
        rescan_if_needed():boolean
        set_custom_theme(theme_name: string):void
        set_screen(screen: Gdk.Screen):void
        set_search_path(path: any[], n_elements: number):void
    }
    export class IconView extends Container {
        constructor(config?: any)
        static new_with_area(area: CellArea):IconView
        static new_with_model(model: any):IconView
        convert_widget_to_bin_window_coords(wx: number, wy: number, bx: number, by: number):void
        create_drag_icon(path: any):any
        enable_model_drag_dest(targets: any[], n_targets: number, actions: Gdk.DragAction):void
        enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: any[], n_targets: number, actions: Gdk.DragAction):void
        get_activate_on_single_click():boolean
        get_cell_rect(path: any, cell: CellRenderer, rect: any):boolean
        get_column_spacing():number
        get_columns():number
        get_cursor(path: any, cell: CellRenderer):boolean
        get_dest_item_at_pos(drag_x: number, drag_y: number, path: any, pos: IconViewDropPosition):boolean
        get_drag_dest_item(path: any, pos: IconViewDropPosition):void
        get_item_at_pos(x: number, y: number, path: any, cell: CellRenderer):boolean
        get_item_column(path: any):number
        get_item_orientation():Orientation
        get_item_padding():number
        get_item_row(path: any):number
        get_item_width():number
        get_margin():number
        get_markup_column():number
        get_model():any
        get_path_at_pos(x: number, y: number):any
        get_pixbuf_column():number
        get_reorderable():boolean
        get_row_spacing():number
        get_selected_items():any
        get_selection_mode():SelectionMode
        get_spacing():number
        get_text_column():number
        get_tooltip_column():number
        get_tooltip_context(x: number, y: number, keyboard_tip: boolean, model: any, path: any, iter: any):boolean
        get_visible_range(start_path: any, end_path: any):boolean
        item_activated(path: any):void
        path_is_selected(path: any):boolean
        scroll_to_path(path: any, use_align: boolean, row_align: number, col_align: number):void
        select_all():void
        select_path(path: any):void
        selected_foreach(func: any, data: any):void
        set_activate_on_single_click(single: boolean):void
        set_column_spacing(column_spacing: number):void
        set_columns(columns: number):void
        set_cursor(path: any, cell: CellRenderer, start_editing: boolean):void
        set_drag_dest_item(path: any, pos: IconViewDropPosition):void
        set_item_orientation(orientation: Orientation):void
        set_item_padding(item_padding: number):void
        set_item_width(item_width: number):void
        set_margin(margin: number):void
        set_markup_column(column: number):void
        set_model(model: any):void
        set_pixbuf_column(column: number):void
        set_reorderable(reorderable: boolean):void
        set_row_spacing(row_spacing: number):void
        set_selection_mode(mode: SelectionMode):void
        set_spacing(spacing: number):void
        set_text_column(column: number):void
        set_tooltip_cell(tooltip: Tooltip, path: any, cell: CellRenderer):void
        set_tooltip_column(column: number):void
        set_tooltip_item(tooltip: Tooltip, path: any):void
        unselect_all():void
        unselect_path(path: any):void
        unset_model_drag_dest():void
        unset_model_drag_source():void
    }
    export class IconViewAccessible extends ContainerAccessible {
    }
    export class Image extends Misc {
        constructor(config?: any)
        static new_from_animation(animation: any):Image
        static new_from_file(filename: any):Image
        static new_from_gicon(icon: any, size: number):Image
        static new_from_icon_name(icon_name: string, size: number):Image
        static new_from_icon_set(icon_set: any, size: number):Image
        static new_from_pixbuf(pixbuf: any):Image
        static new_from_resource(resource_path: string):Image
        static new_from_stock(stock_id: string, size: number):Image
        static new_from_surface(surface: any):Image
        clear():void
        get_animation():any
        get_gicon(gicon: any, size: number):void
        get_icon_name(icon_name: string, size: number):void
        get_icon_set(icon_set: any, size: number):void
        get_pixbuf():any
        get_pixel_size():number
        get_stock(stock_id: string, size: number):void
        get_storage_type():ImageType
        set_from_animation(animation: any):void
        set_from_file(filename: any):void
        set_from_gicon(icon: any, size: number):void
        set_from_icon_name(icon_name: string, size: number):void
        set_from_icon_set(icon_set: any, size: number):void
        set_from_pixbuf(pixbuf: any):void
        set_from_resource(resource_path: string):void
        set_from_stock(stock_id: string, size: number):void
        set_from_surface(surface: any):void
        set_pixel_size(pixel_size: number):void
    }
    export class ImageAccessible extends WidgetAccessible {
    }
    export class ImageCellAccessible extends RendererCellAccessible {
    }
    export class ImageMenuItem extends MenuItem {
        constructor(config?: any)
        static new_from_stock(stock_id: string, accel_group: AccelGroup):ImageMenuItem
        static new_with_label(label: string):ImageMenuItem
        static new_with_mnemonic(label: string):ImageMenuItem
        get_always_show_image():boolean
        get_image():Widget
        get_use_stock():boolean
        set_accel_group(accel_group: AccelGroup):void
        set_always_show_image(always_show: boolean):void
        set_image(image: Widget):void
        set_use_stock(use_stock: boolean):void
    }
    export class InfoBar extends Box {
        constructor(config?: any)
        static new_with_buttons(first_button_text: string, ...args: any[]):InfoBar
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
        constructor(config?: any)
        static new_for_screen(screen: Gdk.Screen):Invisible
        get_screen():Gdk.Screen
        set_screen(screen: Gdk.Screen):void
    }
    export class Label extends Misc {
        constructor(config?: any)
        static new_with_mnemonic(str: string):Label
        get_angle():number
        get_attributes():any
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
        get_xalign():number
        get_yalign():number
        select_region(start_offset: number, end_offset: number):void
        set_angle(angle: number):void
        set_attributes(attrs: any):void
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
        set_xalign(xalign: number):void
        set_yalign(yalign: number):void
    }
    export class LabelAccessible extends WidgetAccessible {
    }
    export class Layout extends Container {
        constructor(config?: any)
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
        constructor(config?: any)
        static new_for_interval(min_value: number, max_value: number):LevelBar
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
        constructor(config?: any)
        static new_with_label(...args: any[]):LinkButton

        get_uri():string
        get_visited():boolean
        set_uri(uri: string):void
        set_visited(visited: boolean):void
    }
    export class LinkButtonAccessible extends ButtonAccessible {
    }
    export class ListBox extends Container {
        constructor(config?: any)
        bind_model(model: any, create_widget_func: any, user_data: any, user_data_free_func: any):void
        drag_highlight_row(row: ListBoxRow):void
        drag_unhighlight_row():void
        get_activate_on_single_click():boolean
        get_adjustment():Adjustment
        get_row_at_index(index_: number):ListBoxRow
        get_row_at_y(y: number):ListBoxRow
        get_selected_row():ListBoxRow
        get_selected_rows():any
        get_selection_mode():SelectionMode
        insert(child: Widget, position: number):void
        invalidate_filter():void
        invalidate_headers():void
        invalidate_sort():void
        prepend(child: Widget):void
        select_all():void
        select_row(row: ListBoxRow):void
        selected_foreach(func: any, data: any):void
        set_activate_on_single_click(single: boolean):void
        set_adjustment(adjustment: Adjustment):void
        set_filter_func(filter_func: any, user_data: any, destroy: any):void
        set_header_func(update_header: any, user_data: any, destroy: any):void
        set_placeholder(placeholder: Widget):void
        set_selection_mode(mode: SelectionMode):void
        set_sort_func(sort_func: any, user_data: any, destroy: any):void
        unselect_all():void
        unselect_row(row: ListBoxRow):void
    }
    export class ListBoxAccessible extends ContainerAccessible {
    }
    export class ListBoxRow extends Bin {
        constructor(config?: any)
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
        constructor(config?: any)
        static newv(...args: any[]):ListStore

        get_value(iter: any, index: number): any
        append():any

        clear():void
        insert(iter: any, position: number):void
        insert_after(iter: any, sibling: any):void
        insert_before(iter: any, sibling: any):void
        insert_with_values(iter: any, position: number, ...args: any[]):void
        insert_with_valuesv(iter: any, position: number, columns: number[], values: any[], n_values: number):void
        iter_is_valid(iter: any):boolean
        move_after(iter: any, position: any):void
        move_before(iter: any, position: any):void
        prepend(iter: any):void
        remove(iter: any):boolean
        reorder(new_order: number[]):void
        set(iter: any, ...args: any[]):void
        set_column_types(types: number[]):void

        set_valist(iter: any, var_args: any):void
        set_value(iter: any, column: number, value: any):void
        set_valuesv(iter: any, columns: number[], values: any[], n_values: number):void
        swap(a: any, b: any):void
    }
    export class LockButton extends Button {
        constructor(config?: any)
        get_permission():Gio.Permission
        set_permission(permission: Gio.Permission):void
    }
    export class LockButtonAccessible extends ButtonAccessible {
    }
    export class Menu extends MenuShell {
        static get_for_attach_widget(widget: Widget):any
        constructor(config?: any)
        static new_from_model(model: Gio.MenuModel):Menu
        attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number):void
        attach_to_widget(attach_widget: Widget, detacher: any):void
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
        popup(parent_menu_shell: Widget, parent_menu_item: Widget, func: any, data: any, button: number, activate_time: number):void
        popup_for_device(device: Gdk.Device, parent_menu_shell: Widget, parent_menu_item: Widget, func: any, data: any, destroy: any, button: number, activate_time: number):void
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
        constructor(config?: any)
        static new_from_model(model: Gio.MenuModel):MenuBar
        get_child_pack_direction():PackDirection
        get_pack_direction():PackDirection
        set_child_pack_direction(child_pack_dir: PackDirection):void
        set_pack_direction(pack_dir: PackDirection):void
    }
    export class MenuButton extends ToggleButton {
        constructor(config?: any)
        get_align_widget():Widget
        get_direction(): number

        get_menu_model():Gio.MenuModel
        get_popover():Popover
        get_popup():Menu
        get_use_popover():boolean
        set_align_widget(align_widget: Widget):void
        set_direction(dir: number):void

        set_menu_model(menu_model: Gio.MenuModel):void
        set_popover(popover: Widget):void
        set_popup(menu: Widget):void
        set_use_popover(use_popover: boolean):void
    }
    export class MenuButtonAccessible extends ToggleButtonAccessible {
    }
    export class MenuItem extends Bin {
        constructor(config?: any)
        static new_with_label(label: string):MenuItem
        static new_with_mnemonic(label: string):MenuItem
        activate():any

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
        constructor(config?: any)
        static new_from_stock(stock_id: string):MenuToolButton
        get_menu():Widget
        set_arrow_tooltip_markup(markup: string):void
        set_arrow_tooltip_text(text: string):void
        set_menu(menu: Widget):void
    }
    export class MessageDialog extends Dialog {
        constructor(config?: any)
        static new_with_markup(parent: Window, flags: DialogFlags, type: MessageType, buttons: ButtonsType, message_format: string, ...args: any[]):MessageDialog
        format_secondary_markup(message_format: string, ...args: any[]):void
        format_secondary_text(message_format: string, ...args: any[]):void
        get_image():Widget
        get_message_area():Widget
        set_image(image: Widget):void
        set_markup(str: string):void
    }
    export class Misc extends Widget {
        get_alignment(xalign: number, yalign: number):void
        get_padding(xpad: number, ypad: number):void
        set_alignment(xalign: number, yalign: number):void
        set_padding(xpad: number, ypad: number):void
    }
    export class ModelButton extends Button {
        constructor(config?: any)
    }
    export class MountOperation extends Gio.MountOperation {
        constructor(config?: any)
        get_parent():Window
        get_screen():Gdk.Screen
        is_showing():boolean
        set_parent(parent: Window):void
        set_screen(screen: Gdk.Screen):void
    }
    export class Notebook extends Container {
        constructor(config?: any)
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
        get_tab_hborder():number
        get_tab_label(child: Widget):Widget
        get_tab_label_text(child: Widget):string
        get_tab_pos():PositionType
        get_tab_reorderable(child: Widget):boolean
        get_tab_vborder():number
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
        constructor(config?: any)
        invalidate():void
    }
    export class NumerableIcon extends Gio.EmblemedIcon {
        static new_with_style_context(base_icon: any, context: StyleContext):any
        get_background_gicon():any
        get_background_icon_name():string
        get_count():number
        get_label():string
        get_style_context():StyleContext
        set_background_gicon(icon: any):void
        set_background_icon_name(icon_name: string):void
        set_count(count: number):void
        set_label(label: string):void
        set_style_context(style: StyleContext):void
    }
    export class OffscreenWindow extends Window {
        constructor(config?: any)
        get_pixbuf():any
        get_surface():any
    }
    export class Overlay extends Bin {
        constructor(config?: any)
        add_overlay(widget: Widget):void
        get_overlay_pass_through(widget: Widget):boolean
        reorder_overlay(child: Widget, position: number):void
        set_overlay_pass_through(widget: Widget, pass_through: boolean):void
    }
    export class PageSetup extends GObject.Object {
        constructor(config?: any)
        static new_from_file(file_name: any):PageSetup
        static new_from_key_file(key_file: any, group_name: string):PageSetup
        copy():PageSetup
        get_bottom_margin(unit: Unit):number
        get_left_margin(unit: Unit):number
        get_orientation():PageOrientation
        get_page_height(unit: Unit):number
        get_page_width(unit: Unit):number
        get_paper_height(unit: Unit):number
        get_paper_size():any
        get_paper_width(unit: Unit):number
        get_right_margin(unit: Unit):number
        get_top_margin(unit: Unit):number
        load_file(file_name: any):boolean
        load_key_file(key_file: any, group_name: string):boolean
        set_bottom_margin(margin: number, unit: Unit):void
        set_left_margin(margin: number, unit: Unit):void
        set_orientation(orientation: PageOrientation):void
        set_paper_size(size: any):void
        set_paper_size_and_default_margins(size: any):void
        set_right_margin(margin: number, unit: Unit):void
        set_top_margin(margin: number, unit: Unit):void
        to_file(file_name: any):boolean
        to_key_file(key_file: any, group_name: string):void
    }
    export class Paned extends Container {
        constructor(config?: any)
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
        constructor(config?: any)
        add_shortcut(location: any):void
        get_local_only():boolean
        get_location():any
        get_nth_bookmark(n: number):any
        get_open_flags():PlacesOpenFlags
        get_show_connect_to_server():boolean
        get_show_desktop():boolean
        get_show_enter_location():boolean
        get_show_other_locations():boolean
        get_show_recent():boolean
        get_show_trash():boolean
        list_shortcuts():any
        remove_shortcut(location: any):void
        set_drop_targets_visible(visible: boolean, context: Gdk.DragContext):void
        set_local_only(local_only: boolean):void
        set_location(location: any):void
        set_open_flags(flags: PlacesOpenFlags):void
        set_show_connect_to_server(show_connect_to_server: boolean):void
        set_show_desktop(show_desktop: boolean):void
        set_show_enter_location(show_enter_location: boolean):void
        set_show_other_locations(show_other_locations: boolean):void
        set_show_recent(show_recent: boolean):void
        set_show_trash(show_trash: boolean):void
    }
    export class Plug extends Window {
        constructor(config?: any)
        static new_for_display(display: Gdk.Display, socket_id: any):Plug
        construct(socket_id: any):void
        construct_for_display(display: Gdk.Display, socket_id: any):void
        get_embedded():boolean
        get_id():any
        get_socket_window():Gdk.Window
    }
    export class Popover extends Bin {
        constructor(config?: any)
        static new_from_model(relative_to: Widget, model: Gio.MenuModel):Popover
        bind_model(model: Gio.MenuModel, action_namespace: string):void
        get_default_widget():Widget
        get_modal():boolean
        get_pointing_to(rect: any):boolean
        get_position():PositionType
        get_relative_to():Widget
        get_transitions_enabled():boolean
        set_default_widget(widget: Widget):void
        set_modal(modal: boolean):void
        set_pointing_to(rect: any):void
        set_position(position: PositionType):void
        set_relative_to(relative_to: Widget):void
        set_transitions_enabled(transitions_enabled: boolean):void
    }
    export class PopoverAccessible extends ContainerAccessible {
    }
    export class PopoverMenu extends Popover {
        constructor(config?: any)
        open_submenu(name: string):void
    }
    export class PrintContext extends GObject.Object {
        create_pango_context():Pango.Context
        create_pango_layout():Pango.Layout
        get_cairo_context():any
        get_dpi_x():number
        get_dpi_y():number
        get_hard_margins(top: number, bottom: number, left: number, right: number):boolean
        get_height():number
        get_page_setup():PageSetup
        get_pango_fontmap():Pango.FontMap
        get_width():number
        set_cairo_context(cr: any, dpi_x: number, dpi_y: number):void
    }
    export class PrintOperation extends GObject.Object {
        constructor(config?: any)
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
        set_export_filename(filename: any):void
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
        constructor(config?: any)
        static new_from_file(file_name: any):PrintSettings
        static new_from_key_file(key_file: any, group_name: string):PrintSettings
        copy():PrintSettings
        foreach(func: any, user_data: any):void
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
        get_page_ranges(num_ranges: number):any[]
        get_page_set():PageSet
        get_paper_height(unit: Unit):number
        get_paper_size():any
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
        load_file(file_name: any):boolean
        load_key_file(key_file: any, group_name: string):boolean
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
        set_page_ranges(page_ranges: any[], num_ranges: number):void
        set_page_set(page_set: PageSet):void
        set_paper_height(height: number, unit: Unit):void
        set_paper_size(paper_size: any):void
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
        to_file(file_name: any):boolean
        to_key_file(key_file: any, group_name: string):void
        unset(key: string):void
    }
    export class ProgressBar extends Widget {
        constructor(config?: any)
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
        constructor(config?: any)
        get_current_value():number
        get_group():any
        join_group(group_source: RadioAction):void
        set_current_value(current_value: number):void
        set_group(group: any):void
    }
    export class RadioButton extends CheckButton {
        constructor(config?: any)
        static new_from_widget(radio_group_member: RadioButton):RadioButton
        static new_with_label(...args: any[]):RadioButton

        static new_with_label_from_widget(radio_group_member: RadioButton, label: string):RadioButton
        static new_with_mnemonic(...args: any[]):RadioButton

        static new_with_mnemonic_from_widget(radio_group_member: RadioButton, label: string):RadioButton
        get_group():any
        join_group(group_source: RadioButton):void
        set_group(group: any):void
    }
    export class RadioButtonAccessible extends ToggleButtonAccessible {
    }
    export class RadioMenuItem extends CheckMenuItem {
        constructor(config?: any)
        static new_from_widget(group: RadioMenuItem):RadioMenuItem
        static new_with_label(...args: any[]):RadioMenuItem

        static new_with_label_from_widget(group: RadioMenuItem, label: string):RadioMenuItem
        static new_with_mnemonic(...args: any[]):RadioMenuItem

        static new_with_mnemonic_from_widget(group: RadioMenuItem, label: string):RadioMenuItem
        get_group():any
        join_group(group_source: RadioMenuItem):void
        set_group(group: any):void
    }
    export class RadioMenuItemAccessible extends CheckMenuItemAccessible {
    }
    export class RadioToolButton extends ToggleToolButton {
        constructor(config?: any)
        static new_from_stock(...args: any[]):RadioToolButton

        static new_from_widget(group: RadioToolButton):RadioToolButton
        static new_with_stock_from_widget(group: RadioToolButton, stock_id: string):RadioToolButton
        get_group():any
        set_group(group: any):void
    }
    export class Range extends Widget {
        get_adjustment():Adjustment
        get_fill_level():number
        get_flippable():boolean
        get_inverted():boolean
        get_lower_stepper_sensitivity():SensitivityType
        get_min_slider_size():number
        get_range_rect(range_rect: any):void
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
        constructor(config?: any)
        copy():RcStyle
    }
    export class RecentAction extends Action {
        constructor(config?: any)
        static new_for_manager(name: string, label: string, tooltip: string, stock_id: string, manager: RecentManager):RecentAction
        get_show_numbers():boolean
        set_show_numbers(show_numbers: boolean):void
    }
    export class RecentChooserDialog extends Dialog {
        constructor(config?: any)
        static new_for_manager(title: string, parent: Window, manager: RecentManager, first_button_text: string, ...args: any[]):RecentChooserDialog
    }
    export class RecentChooserMenu extends Menu {
        constructor(config?: any)
        static new_for_manager(manager: RecentManager):RecentChooserMenu
        get_show_numbers():boolean
        set_show_numbers(show_numbers: boolean):void
    }
    export class RecentChooserWidget extends Box {
        constructor(config?: any)
        static new_for_manager(manager: RecentManager):RecentChooserWidget
    }
    export class RecentFilter extends GObject.InitiallyUnowned {
        constructor(config?: any)
        add_age(days: number):void
        add_application(application: string):void
        add_custom(needed: RecentFilterFlags, func: any, data: any, data_destroy: any):void
        add_group(group: string):void
        add_mime_type(mime_type: string):void
        add_pattern(pattern: string):void
        add_pixbuf_formats():void
        filter(filter_info: any):boolean
        get_name():string
        get_needed():RecentFilterFlags
        set_name(name: string):void
    }
    export class RecentManager extends GObject.Object {
        static get_default():RecentManager
        constructor(config?: any)
        add_full(uri: string, recent_data: any):boolean
        add_item(uri: string):boolean
        get_items():any
        has_item(uri: string):boolean
        lookup_item(uri: string):any
        move_item(uri: string, new_uri: string):boolean
        purge_items():number
        remove_item(uri: string):boolean
    }
    export class RendererCellAccessible extends CellAccessible {
        constructor(config?: any)
    }
    export class Revealer extends Bin {
        constructor(config?: any)
        get_child_revealed():boolean
        get_reveal_child():boolean
        get_transition_duration():number
        get_transition_type():RevealerTransitionType
        set_reveal_child(reveal_child: boolean):void
        set_transition_duration(duration: number):void
        set_transition_type(transition: RevealerTransitionType):void
    }
    export class Scale extends Range {
        constructor(config?: any)
        static new_with_range(orientation: Orientation, min: number, max: number, step: number):Scale
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
        constructor(config?: any)
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
        constructor(config?: any)
    }
    export class ScrolledWindow extends Bin {
        constructor(config?: any)
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
        constructor(config?: any)
        connect_entry(entry: Entry):void
        get_search_mode():boolean
        get_show_close_button():boolean
        handle_event(event: any):boolean
        set_search_mode(search_mode: boolean):void
        set_show_close_button(visible: boolean):void
    }
    export class SearchEntry extends Entry {
        constructor(config?: any)
        handle_event(event: any):boolean
    }
    export class Separator extends Widget {
        constructor(config?: any)
    }
    export class SeparatorMenuItem extends MenuItem {
        constructor(config?: any)
    }
    export class SeparatorToolItem extends ToolItem {
        constructor(config?: any)
        get_draw():boolean
        set_draw(draw: boolean):void
    }
    export class Settings extends GObject.Object {
        static get_default():Settings
        static get_for_screen(screen: Gdk.Screen):Settings
        static install_property(pspec: GObject.ParamSpec):void
        static install_property_parser(pspec: GObject.ParamSpec, parser: any):void
        gtk_application_prefer_dark_theme: boolean
        gtk_theme_name: string
        set_double_property(name: string, v_double: number, origin: string):void
        set_long_property(name: string, v_long: number, origin: string):void
        set_property_value(name: string, svalue: any):void
        set_string_property(name: string, v_string: string, origin: string):void
    }
    export class SizeGroup extends GObject.Object {
        constructor(config?: any)
        add_widget(widget: Widget):void
        get_ignore_hidden():boolean
        get_mode():SizeGroupMode
        get_widgets():any
        remove_widget(widget: Widget):void
        set_ignore_hidden(ignore_hidden: boolean):void
        set_mode(mode: SizeGroupMode):void
    }
    export class Socket extends Container {
        constructor(config?: any)
        add_id(window: any):void
        get_id():any
        get_plug_window():Gdk.Window
    }
    export class SpinButton extends Entry {
        constructor(config?: any)
        static new_with_range(min: number, max: number, step: number):SpinButton
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
        constructor(config?: any)
        start():void
        stop():void
    }
    export class SpinnerAccessible extends WidgetAccessible {
    }
    export class Stack extends Container {
        constructor(config?: any)
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
        constructor(config?: any)
        get_stack():Stack
        set_stack(stack: Stack):void
    }
    export class StackSwitcher extends Box {
        constructor(config?: any)
        get_stack():Stack
        set_stack(stack: Stack):void
    }
    export class StatusIcon extends GObject.Object {
        static position_menu(menu: Menu, x: number, y: number, push_in: boolean, user_data: StatusIcon):void
        constructor(config?: any)
        static new_from_file(filename: any):StatusIcon
        static new_from_gicon(icon: any):StatusIcon
        static new_from_icon_name(icon_name: string):StatusIcon
        static new_from_pixbuf(pixbuf: any):StatusIcon
        static new_from_stock(stock_id: string):StatusIcon
        get_geometry(screen: Gdk.Screen, area: any, orientation: Orientation):boolean
        get_gicon():any
        get_has_tooltip():boolean
        get_icon_name():string
        get_pixbuf():any
        get_screen():Gdk.Screen
        get_size():number
        get_stock():string
        get_storage_type():ImageType
        get_title():string
        get_tooltip_markup():string
        get_tooltip_text():string
        get_visible():boolean
        get_x11_window_id():number
        is_embedded():boolean
        set_from_file(filename: any):void
        set_from_gicon(icon: any):void
        set_from_icon_name(icon_name: string):void
        set_from_pixbuf(pixbuf: any):void
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
        constructor(config?: any)
        get_context_id(context_description: string):number
        get_message_area():Box
        pop(context_id: number):void
        push(context_id: number, text: string):number
        remove(...args: any[]):void

        remove_all(context_id: number):void
    }
    export class StatusbarAccessible extends ContainerAccessible {
    }
    export class Style extends GObject.Object {
        constructor(config?: any)
        apply_default_background(cr: any, window: Gdk.Window, state_type: StateType, x: number, y: number, width: number, height: number):void
        attach(window: Gdk.Window):Style
        copy():Style
        detach():void
        get(widget_type: any, first_property_name: string, ...args: any[]):void
        get_style_property(widget_type: any, property_name: string, value: any):void
        get_valist(...args: any[]):void

        has_context():boolean
        lookup_color(color_name: string, color: any):boolean
        lookup_icon_set(stock_id: string):any
        render_icon(source: any, direction: TextDirection, state: StateType, size: number, widget: Widget, detail: string):any
        set_background(window: Gdk.Window, state_type: StateType):void
    }
    export class StyleContext extends GObject.Object {
        static add_provider_for_screen(screen: Gdk.Screen, provider: any, priority: number):void
        static remove_provider_for_screen(screen: Gdk.Screen, provider: any):void
        static reset_widgets(screen: Gdk.Screen):void
        constructor(config?: any)
        add_class(class_name: string):void
        add_provider(provider: any, priority: number):void
        add_region(region_name: string, flags: RegionFlags):void
        cancel_animations(region_id: any):void
        get(state: StateFlags, ...args: any[]):void
        get_background_color(state: StateFlags, color: any):void
        get_border(state: StateFlags, border: any):void
        get_border_color(state: StateFlags, color: any):void
        get_color(state: StateFlags, color: any):void
        get_direction():TextDirection
        get_font(state: StateFlags):any
        get_frame_clock():Gdk.FrameClock
        get_junction_sides():JunctionSides
        get_margin(state: StateFlags, margin: any):void
        get_padding(state: StateFlags, padding: any):void
        get_parent():StyleContext
        get_path():any
        get_property(...args: any[]):any

        get_scale():number
        get_screen():Gdk.Screen
        get_section(property: string):any
        get_state():StateFlags
        get_style(...args: any[]):void
        get_style_property(property_name: string, value: any):void
        get_style_valist(args: any):void
        get_valist(...args: any[]):void

        has_class(class_name: string):boolean
        has_region(region_name: string, flags_return: RegionFlags):boolean
        invalidate():void
        list_classes():any
        list_regions():any
        lookup_color(color_name: string, color: any):boolean
        lookup_icon_set(stock_id: string):any
        notify_state_change(window: Gdk.Window, region_id: any, state: StateType, state_value: boolean):void
        pop_animatable_region():void
        push_animatable_region(region_id: any):void
        remove_class(class_name: string):void
        remove_provider(provider: any):void
        remove_region(region_name: string):void
        restore():void
        save():void
        scroll_animations(window: Gdk.Window, dx: number, dy: number):void
        set_background(window: Gdk.Window):void
        set_direction(direction: TextDirection):void
        set_frame_clock(frame_clock: Gdk.FrameClock):void
        set_junction_sides(sides: JunctionSides):void
        set_parent(parent: StyleContext):void
        set_path(path: any):void
        set_scale(scale: number):void
        set_screen(screen: Gdk.Screen):void
        set_state(flags: StateFlags):void
        state_is_running(state: StateType, progress: number):boolean
    }
    export class StyleProperties extends GObject.Object {
        static lookup_property(property_name: string, parse_func: any, pspec: GObject.ParamSpec):boolean
        static register_property(parse_func: any, pspec: GObject.ParamSpec):void
        constructor(config?: any)
        clear():void
        get(state: StateFlags, ...args: any[]):void
        get_property(...args: any[]):any

        get_valist(...args: any[]):void

        lookup_color(name: string):any
        map_color(name: string, color: any):void
        merge(props_to_merge: StyleProperties, replace: boolean):void
        set(state: StateFlags, ...args: any[]):void
        set_property(...args: any[]):void

        set_valist(...args: any[]):void

        unset_property(property: string, state: StateFlags):void
    }
    export class Switch extends Widget {
        constructor(config?: any)
        get_active():boolean
        get_state():number

        set_active(is_active: boolean):void
        set_state(state: number)

    }
    export class SwitchAccessible extends WidgetAccessible {
    }
    export class Table extends Container {
        constructor(config?: any)
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
        constructor(config?: any)
    }
    export class TextBuffer extends GObject.Object {
        constructor(config?: any)
        add_mark(mark: TextMark, where: any):void
        add_selection_clipboard(clipboard: Clipboard):void
        apply_tag(tag: TextTag, start: any, end: any):void
        apply_tag_by_name(name: string, start: any, end: any):void
        backspace(iter: any, interactive: boolean, default_editable: boolean):boolean
        begin_user_action():void
        copy_clipboard(clipboard: Clipboard):void
        create_child_anchor(iter: any):TextChildAnchor
        create_mark(mark_name: string, where: any, left_gravity: boolean):TextMark
        create_tag(tag_name: string, first_property_name: string, ...args: any[]):TextTag
        cut_clipboard(clipboard: Clipboard, default_editable: boolean):void
        delete(start: any, end: any):void
        delete_interactive(start_iter: any, end_iter: any, default_editable: boolean):boolean
        delete_mark(mark: TextMark):void
        delete_mark_by_name(name: string):void
        delete_selection(interactive: boolean, default_editable: boolean):boolean
        deserialize(content_buffer: TextBuffer, format: any, iter: any, data: number[], length: number):boolean
        deserialize_get_can_create_tags(format: any):boolean
        deserialize_set_can_create_tags(format: any, can_create_tags: boolean):void
        end_user_action():void
        get_bounds(start: any, end: any):void
        get_char_count():number
        get_copy_target_list():any
        get_deserialize_formats(n_formats: number):any[]
        get_end_iter(iter: any):void
        get_has_selection():boolean
        get_insert():TextMark
        get_iter_at_child_anchor(iter: any, anchor: TextChildAnchor):void
        get_iter_at_line(iter: any, line_number: number):void
        get_iter_at_line_index(iter: any, line_number: number, byte_index: number):void
        get_iter_at_line_offset(iter: any, line_number: number, char_offset: number):void
        get_iter_at_mark(iter: any, mark: TextMark):void
        get_iter_at_offset(iter: any, char_offset: number):void
        get_line_count():number
        get_mark(name: string):TextMark
        get_modified():boolean
        get_paste_target_list():any
        get_selection_bound():TextMark
        get_selection_bounds(start: any, end: any):boolean
        get_serialize_formats(n_formats: number):any[]
        get_slice(start: any, end: any, include_hidden_chars: boolean):string
        get_start_iter(iter: any):void
        get_tag_table():TextTagTable
        get_text(start: any, end: any, include_hidden_chars: boolean):string
        insert(iter: any, text: string, len: number):void
        insert_at_cursor(text: string, len: number):void
        insert_child_anchor(iter: any, anchor: TextChildAnchor):void
        insert_interactive(iter: any, text: string, len: number, default_editable: boolean):boolean
        insert_interactive_at_cursor(text: string, len: number, default_editable: boolean):boolean
        insert_markup(iter: any, markup: string, len: number):void
        insert_pixbuf(iter: any, pixbuf: any):void
        insert_range(iter: any, start: any, end: any):void
        insert_range_interactive(iter: any, start: any, end: any, default_editable: boolean):boolean
        insert_with_tags(iter: any, text: string, len: number, first_tag: TextTag, ...args: any[]):void
        insert_with_tags_by_name(iter: any, text: string, len: number, first_tag_name: string, ...args: any[]):void
        move_mark(mark: TextMark, where: any):void
        move_mark_by_name(name: string, where: any):void
        paste_clipboard(clipboard: Clipboard, override_location: any, default_editable: boolean):void
        place_cursor(where: any):void
        register_deserialize_format(mime_type: string, function_: any, user_data: any, user_data_destroy: any):any
        register_deserialize_tagset(tagset_name: string):any
        register_serialize_format(mime_type: string, function_: any, user_data: any, user_data_destroy: any):any
        register_serialize_tagset(tagset_name: string):any
        remove_all_tags(start: any, end: any):void
        remove_selection_clipboard(clipboard: Clipboard):void
        remove_tag(tag: TextTag, start: any, end: any):void
        remove_tag_by_name(name: string, start: any, end: any):void
        select_range(ins: any, bound: any):void
        serialize(content_buffer: TextBuffer, format: any, start: any, end: any, length: number):number[]
        set_modified(setting: boolean):void
        set_text(text: string, len: number):void
        unregister_deserialize_format(format: any):void
        unregister_serialize_format(format: any):void
    }
    export class TextCellAccessible extends RendererCellAccessible {
    }
    export class TextChildAnchor extends GObject.Object {
        constructor(config?: any)
        get_deleted():boolean
        get_widgets():any
    }
    export class TextMark extends GObject.Object {
        constructor(config?: any)
        get_buffer():TextBuffer
        get_deleted():boolean
        get_left_gravity():boolean
        get_name():string
        get_visible():boolean
        set_visible(setting: boolean):void
    }
    export class TextTag extends GObject.Object {
        constructor(config?: any)
        event(event_object: GObject.Object, event: any, iter: any):boolean
        get_priority():number
        set_priority(priority: number):void
    }
    export class TextTagTable extends GObject.Object {
        constructor(config?: any)
        add(tag: TextTag):boolean
        foreach(func: any, data: any):void
        get_size():number
        lookup(name: string):TextTag
        remove(tag: TextTag):void
    }
    export class TextView extends Container {
        constructor(config?: any)
        static new_with_buffer(buffer: TextBuffer):TextView
        add_child_at_anchor(child: Widget, anchor: TextChildAnchor):void
        add_child_in_window(child: Widget, which_window: TextWindowType, xpos: number, ypos: number):void
        backward_display_line(iter: any):boolean
        backward_display_line_start(iter: any):boolean
        buffer_to_window_coords(win: TextWindowType, buffer_x: number, buffer_y: number, window_x: number, window_y: number):void
        forward_display_line(iter: any):boolean
        forward_display_line_end(iter: any):boolean
        get_accepts_tab():boolean
        get_border_window_size(type: TextWindowType):number
        get_bottom_margin():number
        get_buffer():TextBuffer
        get_cursor_locations(iter: any, strong: any, weak: any):void
        get_cursor_visible():boolean
        get_default_attributes():any
        get_editable():boolean
        get_hadjustment():Adjustment
        get_indent():number
        get_input_hints():InputHints
        get_input_purpose():InputPurpose
        get_iter_at_location(iter: any, x: number, y: number):void
        get_iter_at_position(iter: any, trailing: number, x: number, y: number):void
        get_iter_location(iter: any, location: any):void
        get_justification():Justification
        get_left_margin():number
        get_line_at_y(target_iter: any, y: number, line_top: number):void
        get_line_yrange(iter: any, y: number, height: number):void
        get_monospace():boolean
        get_overwrite():boolean
        get_pixels_above_lines():number
        get_pixels_below_lines():number
        get_pixels_inside_wrap():number
        get_right_margin():number
        get_tabs():any
        get_top_margin():number
        get_vadjustment():Adjustment
        get_visible_rect(visible_rect: any):void
        get_window(win?: number):Gdk.Window

        get_window_type(window: Gdk.Window):TextWindowType
        get_wrap_mode():WrapMode
        im_context_filter_keypress(event: any):boolean
        move_child(child: Widget, xpos: number, ypos: number):void
        move_mark_onscreen(mark: TextMark):boolean
        move_visually(iter: any, count: number):boolean
        place_cursor_onscreen():boolean
        reset_im_context():void
        scroll_mark_onscreen(mark: TextMark):void
        scroll_to_iter(iter: any, within_margin: number, use_align: boolean, xalign: number, yalign: number):boolean
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
        set_tabs(tabs: any):void
        set_top_margin(top_margin: number):void
        set_wrap_mode(wrap_mode: WrapMode):void
        starts_display_line(iter: any):boolean
        window_to_buffer_coords(win: TextWindowType, window_x: number, window_y: number, buffer_x: number, buffer_y: number):void
    }
    export class TextViewAccessible extends ContainerAccessible {
    }
    export class ThemingEngine extends GObject.Object {
        static load(name: string):ThemingEngine
        static register_property(name_space: string, parse_func: any, pspec: GObject.ParamSpec):void
        get(state: StateFlags, ...args: any[]):void
        get_background_color(state: StateFlags, color: any):void
        get_border(state: StateFlags, border: any):void
        get_border_color(state: StateFlags, color: any):void
        get_color(state: StateFlags, color: any):void
        get_direction():TextDirection
        get_font(state: StateFlags):any
        get_junction_sides():JunctionSides
        get_margin(state: StateFlags, margin: any):void
        get_padding(state: StateFlags, padding: any):void
        get_path():any
        get_property(...args: any[]):any

        get_screen():Gdk.Screen
        get_state():StateFlags
        get_style(...args: any[]):void
        get_style_property(property_name: string, value: any):void
        get_style_valist(args: any):void
        get_valist(...args: any[]):void

        has_class(style_class: string):boolean
        has_region(style_region: string, flags: RegionFlags):boolean
        lookup_color(color_name: string, color: any):boolean
        state_is_running(state: StateType, progress: number):boolean
    }
    export class ToggleAction extends Action {
        constructor(config?: any)
        get_active():boolean
        get_draw_as_radio():boolean
        set_active(is_active: boolean):void
        set_draw_as_radio(draw_as_radio: boolean):void
        toggled():void
    }
    export class ToggleButton extends Button {
        constructor(config?: any)
        static new_with_label(label: string):ToggleButton
        static new_with_mnemonic(label: string):ToggleButton
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
        constructor(config?: any)
        static new_from_stock(...args: any[]):ToggleToolButton

        get_active():boolean
        set_active(is_active: boolean):void
    }
    export class ToolButton extends ToolItem {
        constructor(config?: any)
        static new_from_stock(stock_id: string):ToolButton
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
        constructor(config?: any)
        get_ellipsize_mode():Pango.EllipsizeMode
        get_expand():boolean
        get_homogeneous():boolean
        get_icon_size():number
        get_is_important():boolean
        get_orientation():Orientation
        get_proxy_menu_item(menu_item_id: string):Widget
        get_relief_style():ReliefStyle
        get_text_alignment():number
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
        constructor(config?: any)
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
        static get_drag_target_group():any
        static get_drag_target_item():any
        constructor(config?: any)
        add_drag_dest(widget: Widget, flags: DestDefaults, targets: ToolPaletteDragTargets, actions: Gdk.DragAction):void
        get_drag_item(selection: any):Widget
        get_drop_group(x: number, y: number):ToolItemGroup
        get_drop_item(x: number, y: number):ToolItem
        get_exclusive(group: ToolItemGroup):boolean
        get_expand(group: ToolItemGroup):boolean
        get_group_position(group: ToolItemGroup):number
        get_hadjustment():Adjustment
        get_icon_size():number
        get_style():number

        get_vadjustment():Adjustment
        set_drag_source(targets: ToolPaletteDragTargets):void
        set_exclusive(group: ToolItemGroup, exclusive: boolean):void
        set_expand(group: ToolItemGroup, expand: boolean):void
        set_group_position(group: ToolItemGroup, position: number):void
        set_icon_size(icon_size: number):void
        set_style(style: number)

        unset_icon_size():void
        unset_style():void
    }
    export class Toolbar extends Container {
        constructor(config?: any)
        get_drop_index(x: number, y: number):number
        get_icon_size():IconSize
        get_item_index(item: ToolItem):number
        get_n_items():number
        get_nth_item(n: number):ToolItem
        get_relief_style():ReliefStyle
        get_show_arrow():boolean
        get_style():number

        insert(item: ToolItem, pos: number):void
        set_drop_highlight_item(tool_item: ToolItem, index_: number):void
        set_icon_size(icon_size: IconSize):void
        set_show_arrow(show_arrow: boolean):void
        set_style(style: number)

        unset_icon_size():void
        unset_style():void
    }
    export class Tooltip extends GObject.Object {
        static trigger_tooltip_query(display: Gdk.Display):void
        set_custom(custom_widget: Widget):void
        set_icon(pixbuf: any):void
        set_icon_from_gicon(gicon: any, size: number):void
        set_icon_from_icon_name(icon_name: string, size: number):void
        set_icon_from_stock(stock_id: string, size: number):void
        set_markup(markup: string):void
        set_text(text: string):void
        set_tip_area(rect: any):void
    }
    export class ToplevelAccessible extends Atk.Object {
        get_children():any
    }
    export class TreeModelFilter extends GObject.Object {
        clear_cache():void
        convert_child_iter_to_iter(filter_iter: any, child_iter: any):boolean
        convert_child_path_to_path(child_path: any):any
        convert_iter_to_child_iter(child_iter: any, filter_iter: any):void
        convert_path_to_child_path(filter_path: any):any
        get_model():any
        refilter():void
        set_modify_func(n_columns: number, types: any[], func: any, data: any, destroy: any):void
        set_visible_column(column: number):void
        set_visible_func(func: any, data: any, destroy: any):void
    }
    export class TreeModelSort extends GObject.Object {
        clear_cache():void
        convert_child_iter_to_iter(sort_iter: any, child_iter: any):boolean
        convert_child_path_to_path(child_path: any):any
        convert_iter_to_child_iter(child_iter: any, sorted_iter: any):void
        convert_path_to_child_path(sorted_path: any):any
        get_model():any
        iter_is_valid(iter: any):boolean
        reset_default_sort_func():void
    }
    export class TreeSelection extends GObject.Object {
        count_selected_rows():number
        get_mode():SelectionMode
        get_select_function():any
        get_selected():any

        get_selected_rows(model: any):any
        get_tree_view():TreeView
        get_user_data():any
        iter_is_selected(iter: any):boolean
        path_is_selected(path: any):boolean
        select_all():void
        select_iter(iter: any):void
        select_path(path: any):void
        select_range(start_path: any, end_path: any):void
        selected_foreach(func: any, data: any):void
        set_mode(type: SelectionMode):void
        set_select_function(func: any, data: any, destroy: any):void
        unselect_all():void
        unselect_iter(iter: any):void
        unselect_path(path: any):void
        unselect_range(start_path: any, end_path: any):void
    }
    export class TreeStore extends GObject.Object {
        constructor(config?: any)
        static newv(...args: any[]):TreeStore

        append(iter: any, parent: any):void
        clear():void
        insert(iter: any, parent: any, position: number):void
        insert_after(iter: any, parent: any, sibling: any):void
        insert_before(iter: any, parent: any, sibling: any):void
        insert_with_values(iter: any, parent: any, position: number, ...args: any[]):void
        insert_with_valuesv(iter: any, parent: any, position: number, columns: number[], values: any[], n_values: number):void
        is_ancestor(iter: any, descendant: any):boolean
        iter_depth(iter: any):number
        iter_is_valid(iter: any):boolean
        move_after(iter: any, position: any):void
        move_before(iter: any, position: any):void
        prepend(iter: any, parent: any):void
        remove(iter: any):boolean
        reorder(parent: any, new_order: number[]):void
        set(iter: any, ...args: any[]):void
        set_column_types(n_columns: number, types: any[]):void
        set_valist(iter: any, var_args: any):void
        set_value(iter: any, column: number, value: any):void
        set_valuesv(iter: any, columns: number[], values: any[], n_values: number):void
        swap(a: any, b: any):void
    }
    export class TreeView extends Container {
        constructor(config?: any)
        static new_with_model(model: any):TreeView
        append_column(column: TreeViewColumn):number
        collapse_all():void
        collapse_row(path: any):boolean
        columns_autosize():void
        convert_bin_window_to_tree_coords(bx: number, by: number, tx: number, ty: number):void
        convert_bin_window_to_widget_coords(bx: number, by: number, wx: number, wy: number):void
        convert_tree_to_bin_window_coords(tx: number, ty: number, bx: number, by: number):void
        convert_tree_to_widget_coords(tx: number, ty: number, wx: number, wy: number):void
        convert_widget_to_bin_window_coords(wx: number, wy: number, bx: number, by: number):void
        convert_widget_to_tree_coords(wx: number, wy: number, tx: number, ty: number):void
        create_row_drag_icon(path: any):any
        enable_model_drag_dest(targets: any[], n_targets: number, actions: Gdk.DragAction):void
        enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: any[], n_targets: number, actions: Gdk.DragAction):void
        expand_all():void
        expand_row(path: any, open_all: boolean):boolean
        expand_to_path(path: any):void
        get_activate_on_single_click():boolean
        get_background_area(path: any, column: TreeViewColumn, rect: any):void
        get_bin_window():Gdk.Window
        get_cell_area(path: any, column: TreeViewColumn, rect: any):void
        get_column(n: number):TreeViewColumn
        get_columns():any
        get_cursor(path: any, focus_column: TreeViewColumn):void
        get_dest_row_at_pos(drag_x: number, drag_y: number, path: any, pos: TreeViewDropPosition):boolean
        get_drag_dest_row(path: any, pos: TreeViewDropPosition):void
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
        get_model():any
        get_n_columns():number
        get_path_at_pos(x: number, y: number, path: any, column: TreeViewColumn, cell_x: number, cell_y: number):boolean
        get_reorderable():boolean
        get_row_separator_func():any
        get_rubber_banding():boolean
        get_rules_hint():boolean
        get_search_column():number
        get_search_entry():Entry
        get_search_equal_func():any
        get_search_position_func():any
        get_selection():TreeSelection
        get_show_expanders():boolean
        get_tooltip_column():number
        get_tooltip_context(x: number, y: number, keyboard_tip: boolean, model: any, path: any, iter: any):boolean
        get_vadjustment():Adjustment
        get_visible_range(start_path: any, end_path: any):boolean
        get_visible_rect(visible_rect: any):void
        insert_column(column: TreeViewColumn, position: number):number
        insert_column_with_attributes(position: number, title: string, cell: CellRenderer, ...args: any[]):number
        insert_column_with_data_func(position: number, title: string, cell: CellRenderer, func: any, data: any, dnotify: any):number
        is_blank_at_pos(x: number, y: number, path: any, column: TreeViewColumn, cell_x: number, cell_y: number):boolean
        is_rubber_banding_active():boolean
        map_expanded_rows(func: any, data: any):void
        move_column_after(column: TreeViewColumn, base_column: TreeViewColumn):void
        remove_column(column: TreeViewColumn):number
        row_activated(path: any, column: TreeViewColumn):void
        row_expanded(path: any):boolean
        scroll_to_cell(path: any, column: TreeViewColumn, use_align: boolean, row_align: number, col_align: number):void
        scroll_to_point(tree_x: number, tree_y: number):void
        set_activate_on_single_click(single: boolean):void
        set_column_drag_function(func: any, user_data: any, destroy: any):void
        set_cursor(path: any, focus_column: TreeViewColumn, start_editing: boolean):void
        set_cursor_on_cell(path: any, focus_column: TreeViewColumn, focus_cell: CellRenderer, start_editing: boolean):void
        set_destroy_count_func(func: any, data: any, destroy: any):void
        set_drag_dest_row(path: any, pos: TreeViewDropPosition):void
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
        set_model(model: any):void
        set_reorderable(reorderable: boolean):void
        set_row_separator_func(func: any, data: any, destroy: any):void
        set_rubber_banding(enable: boolean):void
        set_rules_hint(setting: boolean):void
        set_search_column(column: number):void
        set_search_entry(entry: Entry):void
        set_search_equal_func(search_equal_func: any, search_user_data: any, search_destroy: any):void
        set_search_position_func(func: any, data: any, destroy: any):void
        set_show_expanders(enabled: boolean):void
        set_tooltip_cell(tooltip: Tooltip, path: any, column: TreeViewColumn, cell: CellRenderer):void
        set_tooltip_column(column: number):void
        set_tooltip_row(tooltip: Tooltip, path: any):void
        set_vadjustment(adjustment: Adjustment):void
        unset_rows_drag_dest():void
        unset_rows_drag_source():void
    }
    export class TreeViewAccessible extends ContainerAccessible {
    }
    export class TreeViewColumn extends GObject.InitiallyUnowned {
        constructor(config?: any)
        static new_with_area(area: CellArea):TreeViewColumn
        static new_with_attributes(title: string, cell: CellRenderer, ...args: any[]):TreeViewColumn
        add_attribute(cell_renderer: CellRenderer, attribute: string, column: number):void
        cell_get_position(cell_renderer: CellRenderer, x_offset: number, width: number):boolean
        cell_get_size(cell_area: any, x_offset: number, y_offset: number, width: number, height: number):void
        cell_is_visible():boolean
        cell_set_cell_data(tree_model: any, iter: any, is_expander: boolean, is_expanded: boolean):void
        clear():void
        clear_attributes(cell_renderer: CellRenderer):void
        clicked():void
        focus_cell(cell: CellRenderer):void
        get_alignment():number
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
        set_alignment(xalign: number):void
        set_attributes(cell_renderer: CellRenderer, ...args: any[]):void
        set_cell_data_func(cell_renderer: CellRenderer, func: any, func_data: any, destroy: any):void
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
        constructor(config?: any)
        add_ui(merge_id: number, path: string, name: string, action: string, type: UIManagerItemType, top: boolean):void
        add_ui_from_file(filename: any):number
        add_ui_from_resource(resource_path: string):number
        add_ui_from_string(buffer: string, length: number):number
        ensure_update():void
        get_accel_group():AccelGroup
        get_action(path: string):Action
        get_action_groups():any
        get_add_tearoffs():boolean
        get_toplevels(types: UIManagerItemType):any
        get_ui():string
        get_widget(path: string):Widget
        insert_action_group(action_group: ActionGroup, pos: number):void
        new_merge_id():number
        remove_action_group(action_group: ActionGroup):void
        remove_ui(merge_id: number):void
        set_add_tearoffs(add_tearoffs: boolean):void
    }
    export class VBox extends Box {
        constructor(config?: any)
    }
    export class VButtonBox extends ButtonBox {
        constructor(config?: any)
    }
    export class VPaned extends Paned {
        constructor(config?: any)
    }
    export class VScale extends Scale {
        constructor(config?: any)
        static new_with_range(min: number, max: number, step: number):VScale
    }
    export class VScrollbar extends Scrollbar {
        constructor(config?: any)
    }
    export class VSeparator extends Separator {
        constructor(config?: any)
    }
    export class Viewport extends Bin {
        constructor(config?: any)
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
        constructor(config?: any)
    }
    export class Widget extends GObject.InitiallyUnowned {
        static get_default_direction():TextDirection
        static get_default_style():Style
        static pop_composite_child():void
        static push_composite_child():void
        static set_default_direction(dir: TextDirection):void
        constructor(config?: any)
        activate():any

        add_accelerator(accel_signal: string, accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags):void
        add_device_events(device: Gdk.Device, events: Gdk.EventMask):void
        add_events(events: number):void
        add_mnemonic_label(label: Widget):void
        add_tick_callback(callback: any, user_data: any, notify: any):number
        can_activate_accel(signal_id: number):boolean
        child_focus(direction: DirectionType):boolean
        child_notify(...args: any[]):void

        class_path(path_length: number, path: string, path_reversed: string):void
        compute_expand(orientation: Orientation):boolean
        create_pango_context():Pango.Context
        create_pango_layout(text: string):Pango.Layout
        destroy():void
        destroyed(widget_pointer: Widget):void
        device_is_shadowed(device: Gdk.Device):boolean
        drag_begin(targets: any, actions: Gdk.DragAction, button: number, event: any):Gdk.DragContext
        drag_begin_with_coordinates(targets: any, actions: Gdk.DragAction, button: number, event: any, x: number, y: number):Gdk.DragContext
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number):boolean
        drag_dest_add_image_targets():void
        drag_dest_add_text_targets():void
        drag_dest_add_uri_targets():void
        drag_dest_find_target(context: Gdk.DragContext, target_list: any):any
        drag_dest_get_target_list():any
        drag_dest_get_track_motion():boolean
        drag_dest_set(flags: DestDefaults, targets: any[], n_targets: number, actions: Gdk.DragAction):void
        drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean):void
        drag_dest_set_target_list(target_list: any):void
        drag_dest_set_track_motion(track_motion: boolean):void
        drag_dest_unset():void
        drag_get_data(context: Gdk.DragContext, target: any, time_: number):void
        drag_highlight():void
        drag_source_add_image_targets():void
        drag_source_add_text_targets():void
        drag_source_add_uri_targets():void
        drag_source_get_target_list():any
        drag_source_set(start_button_mask: Gdk.ModifierType, targets: any[], n_targets: number, actions: Gdk.DragAction):void
        drag_source_set_icon_gicon(icon: any):void
        drag_source_set_icon_name(icon_name: string):void
        drag_source_set_icon_pixbuf(pixbuf: any):void
        drag_source_set_icon_stock(stock_id: string):void
        drag_source_set_target_list(target_list: any):void
        drag_source_unset():void
        drag_unhighlight():void
        draw(cr: any):void
        ensure_style():void
        error_bell():void
        event(event: any):boolean
        freeze_child_notify():void
        get_accessible():Atk.Object
        get_action_group(prefix: string):any
        get_allocated_baseline():number
        get_allocated_height():number
        get_allocated_width():number
        get_allocation(allocation: any):void
        get_ancestor(widget_type: any):Widget
        get_app_paintable():boolean
        get_can_default():boolean
        get_can_focus():boolean
        get_child_requisition(requisition: any):void
        get_child_visible():boolean
        get_clip(clip: any):void
        get_clipboard(selection: any):Clipboard
        get_composite_name():string
        get_device_enabled(device: Gdk.Device):boolean
        get_device_events(device: Gdk.Device):Gdk.EventMask
        get_direction(): number

        get_display():Gdk.Display
        get_double_buffered():boolean
        get_events():number
        get_font_map():Pango.FontMap
        get_font_options():any
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
        get_path():any
        get_pointer(x: number, y: number):void
        get_preferred_height(minimum_height: number, natural_height: number):void
        get_preferred_height_and_baseline_for_width(width: number, minimum_height: number, natural_height: number, minimum_baseline: number, natural_baseline: number):void
        get_preferred_height_for_width(width: number, minimum_height: number, natural_height: number):void
        get_preferred_size(minimum_size: any, natural_size: any):void
        get_preferred_width(minimum_width: number, natural_width: number):void
        get_preferred_width_for_height(height: number, minimum_width: number, natural_width: number):void
        get_realized():boolean
        get_receives_default():boolean
        get_request_mode():SizeRequestMode
        get_requisition(requisition: any):void
        get_root_window():Gdk.Window
        get_scale_factor():number
        get_screen():Gdk.Screen
        get_sensitive():boolean
        get_settings():any

        get_size_request(width: number, height: number):void
        get_state():number

        get_state_flags():StateFlags
        get_style():number

        get_style_context():StyleContext
        get_support_multidevice():boolean
        get_template_child(widget_type: any, name: string):GObject.Object
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
        get_window(win?: number):Gdk.Window

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
        input_shape_combine_region(region: any):void
        insert_action_group(name: string, group: any):void
        intersect(area: any, intersection: any):boolean
        is_ancestor(ancestor: Widget):boolean
        is_composited():boolean
        is_drawable():boolean
        is_focus():boolean
        is_sensitive():boolean
        is_toplevel():boolean
        is_visible():boolean
        keynav_failed(direction: DirectionType):boolean
        list_accel_closures():any
        list_action_prefixes():string[]
        list_mnemonic_labels():any
        map():void
        mnemonic_activate(group_cycling: boolean):boolean
        modify_base(state: StateType, color: any):void
        modify_bg(state: StateType, color: any):void
        modify_cursor(primary: any, secondary: any):void
        modify_fg(state: StateType, color: any):void
        modify_font(font_desc: any):void
        modify_style(style: RcStyle):void
        modify_text(state: StateType, color: any):void
        override_background_color(state: StateFlags, color: any):void
        override_color(state: StateFlags, color: any):void
        override_cursor(cursor: any, secondary_cursor: any):void
        override_font(font_desc: any):void
        override_symbolic_color(name: string, color: any):void
        path(path_length: number, path: string, path_reversed: string):void
        queue_compute_expand():void
        queue_draw():void
        queue_draw_area(x: number, y: number, width: number, height: number):void
        queue_draw_region(region: any):void
        queue_resize():void
        queue_resize_no_redraw():void
        realize():void
        region_intersect(region: any):any
        register_window(window: Gdk.Window):void
        remove_accelerator(accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType):boolean
        remove_mnemonic_label(label: Widget):void
        remove_tick_callback(id: number):void
        render_icon(stock_id: string, size: number, detail: string):any
        render_icon_pixbuf(stock_id: string, size: number):any
        reparent(new_parent: Widget):void
        reset_rc_styles():void
        reset_style():void
        send_expose(event: any):number
        send_focus_change(event: any):boolean
        set_accel_path(accel_path: string, accel_group: AccelGroup):void
        set_allocation(allocation: any):void
        set_app_paintable(app_paintable: boolean):void
        set_can_default(can_default: boolean):void
        set_can_focus(can_focus: boolean):void
        set_child_visible(is_visible: boolean):void
        set_clip(clip: any):void
        set_composite_name(name: string):void
        set_device_enabled(device: Gdk.Device, enabled: boolean):void
        set_device_events(device: Gdk.Device, events: Gdk.EventMask):void
        set_direction(dir: number):void

        set_double_buffered(double_buffered: boolean):void
        set_events(events: number):void
        set_font_map(font_map: Pango.FontMap):void
        set_font_options(options: any):void
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
        set_state(state: number)

        set_state_flags(flags: StateFlags, clear: boolean):void
        set_style(style: number)

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
        shape_combine_region(region: any):void
        show():void
        show_all():void
        show_now():void
        size_allocate(allocation: any):void
        size_allocate_with_baseline(allocation: any, baseline: number):void
        size_request(requisition: any):void
        style_attach():void
        style_get(first_property_name: string, ...args: any[]):void
        style_get_property(property_name: string, value: any):void
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
        static get_default_icon_list():any
        static get_default_icon_name():string
        static list_toplevels():any
        static set_auto_startup_notification(setting: boolean):void
        static set_default_icon(icon: any):void
        static set_default_icon_from_file(filename: any):boolean
        static set_default_icon_list(list: any):void
        static set_default_icon_name(name: string):void
        static set_interactive_debugging(enable: boolean):void
        constructor(config?: any)
        activate_default():boolean
        activate_focus():boolean
        activate_key(event: any):boolean
        add_accel_group(accel_group: AccelGroup):void
        add_mnemonic(keyval: number, target: Widget):void
        begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number):void
        begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number):void
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
        get_icon():any
        get_icon_list():any
        get_icon_name():string
        get_mnemonic_modifier():Gdk.ModifierType
        get_mnemonics_visible():boolean
        get_modal():boolean
        get_opacity():number
        get_position(root_x: number, root_y: number):void
        get_resizable():boolean
        get_resize_grip_area(rect: any):boolean
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
        mnemonic_activate(...args: any[]):boolean

        move(x: number, y: number):void
        parse_geometry(geometry: string):boolean
        present():void
        present_with_time(timestamp: number):void
        propagate_key_event(event: any):boolean
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
        set_geometry_hints(geometry_widget: Widget, geometry: any, geom_mask: Gdk.WindowHints):void
        set_gravity(gravity: Gdk.Gravity):void
        set_has_resize_grip(value: boolean):void
        set_has_user_ref_count(setting: boolean):void
        set_hide_titlebar_when_maximized(setting: boolean):void
        set_icon(icon: any):void
        set_icon_from_file(filename: any):boolean
        set_icon_list(list: any):void
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
        constructor(config?: any)
        add_window(window: Window):void
        get_current_device_grab(device: Gdk.Device):Widget
        get_current_grab():Widget
        list_windows():any
        remove_window(window: Window):void
    }
}