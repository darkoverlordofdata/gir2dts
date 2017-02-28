/**
 * GtkSource.d.ts
 *
 */
declare module 'GtkSource' {
    import * as GObject from "GObject"
    import * as Gio from "Gio"
    import * as Gdk from "Gdk"
    import * as Gtk from "Gtk"
    export function completion_error_quark():any
    export function encoding_get_all():any
    export function encoding_get_current():any
    export function encoding_get_default_candidates():any
    export function encoding_get_from_charset(charset: string):any
    export function encoding_get_utf8():any
    export function file_loader_error_quark():any
    export function file_saver_error_quark():any
    export function utils_escape_search_text(text: string):string
    export function utils_unescape_search_text(text: string):string
    export enum BackgroundPatternType {
        NONE,
        GRID,
    }
    export enum BracketMatchType {
        NONE,
        OUT_OF_RANGE,
        NOT_FOUND,
        FOUND,
    }
    export enum ChangeCaseType {
        LOWER,
        UPPER,
        TOGGLE,
        TITLE,
    }
    export enum CompletionError {
        ALREADY_BOUND,
        NOT_BOUND,
    }
    export enum CompressionType {
        NONE,
        GZIP,
    }
    export enum FileLoaderError {
        TOO_BIG,
        ENCODING_AUTO_DETECTION_FAILED,
        CONVERSION_FALLBACK,
    }
    export enum FileSaverError {
        INVALID_CHARS,
        EXTERNALLY_MODIFIED,
    }
    export enum GutterRendererAlignmentMode {
        CELL,
        FIRST,
        LAST,
    }
    export enum NewlineType {
        LF,
        CR,
        CR_LF,
    }
    export enum SmartHomeEndType {
        DISABLED,
        BEFORE,
        AFTER,
        ALWAYS,
    }
    export enum ViewGutterPosition {
        LINES,
        MARKS,
    }
    export enum CompletionActivation{
        NONE,
        INTERACTIVE,
        USER_REQUESTED,
    }
    export enum DrawSpacesFlags{
        SPACE,
        TAB,
        NEWLINE,
        NBSP,
        LEADING,
        TEXT,
        TRAILING,
        ALL,
    }
    export enum FileSaverFlags{
        NONE,
        IGNORE_INVALID_CHARS,
        IGNORE_MODIFICATION_TIME,
        CREATE_BACKUP,
    }
    export enum GutterRendererState{
        NORMAL,
        CURSOR,
        PRELIT,
        SELECTED,
    }
    export enum SortFlags{
        NONE,
        CASE_SENSITIVE,
        REVERSE_ORDER,
        REMOVE_DUPLICATES,
    }
    export class Buffer extends Gtk.TextBuffer {
        constructor(config?: any)
        static new_with_language(language: Language):Buffer
        backward_iter_to_source_mark(iter: any, category: string):boolean
        begin_not_undoable_action():void
        can_redo():boolean
        can_undo():boolean
        change_case(case_type: ChangeCaseType, start: any, end: any):void
        create_source_mark(name: string, category: string, where: any):Mark
        end_not_undoable_action():void
        ensure_highlight(start: any, end: any):void
        forward_iter_to_source_mark(iter: any, category: string):boolean
        get_context_classes_at_iter(iter: any):string[]
        get_highlight_matching_brackets():boolean
        get_highlight_syntax():boolean
        get_implicit_trailing_newline():boolean
        get_language():Language
        get_max_undo_levels():number
        get_source_marks_at_iter(iter: any, category: string):any
        get_source_marks_at_line(line: number, category: string):any
        get_style_scheme():StyleScheme
        get_undo_manager():any
        iter_backward_to_context_class_toggle(iter: any, context_class: string):boolean
        iter_forward_to_context_class_toggle(iter: any, context_class: string):boolean
        iter_has_context_class(iter: any, context_class: string):boolean
        join_lines(start: any, end: any):void
        redo():void
        remove_source_marks(start: any, end: any, category: string):void
        set_highlight_matching_brackets(highlight: boolean):void
        set_highlight_syntax(highlight: boolean):void
        set_implicit_trailing_newline(implicit_trailing_newline: boolean):void
        set_language(language: Language):void
        set_max_undo_levels(max_undo_levels: number):void
        set_style_scheme(scheme: StyleScheme):void
        set_undo_manager(manager: any):void
        sort_lines(start: any, end: any, flags: SortFlags, column: number):void
        undo():void
    }
    export class Completion extends GObject.Object {
        add_provider(provider: any):boolean
        block_interactive():void
        create_context(position: any):CompletionContext
        get_info_window():CompletionInfo
        get_providers():any
        get_view():View
        hide():void
        move_window(iter: any):void
        remove_provider(provider: any):boolean
        show(providers: any, context: CompletionContext):boolean
        unblock_interactive():void
    }
    export class CompletionContext extends GObject.InitiallyUnowned {
        add_proposals(provider: any, proposals: any, finished: boolean):void
        get_activation():CompletionActivation
        get_iter(iter: any):boolean
    }
    export class CompletionInfo extends Gtk.Window {
        constructor(config?: any)
        get_widget():Gtk.Widget
        move_to_iter(view: Gtk.TextView, iter: any):void
        set_widget(widget: Gtk.Widget):void
    }
    export class CompletionItem extends GObject.Object {
        constructor(config?: any)
        static new_from_stock(label: string, text: string, stock: string, info: string):CompletionItem
        static new_with_markup(markup: string, text: string, icon: any, info: string):CompletionItem
    }
    export class CompletionWords extends GObject.Object {
        constructor(config?: any)
        register(buffer: Gtk.TextBuffer):void
        unregister(buffer: Gtk.TextBuffer):void
    }
    export class File extends GObject.Object {
        constructor(config?: any)
        check_file_on_disk():void
        get_compression_type():CompressionType
        get_encoding():any
        get_location():any
        get_newline_type():NewlineType
        is_deleted():boolean
        is_externally_modified():boolean
        is_local():boolean
        is_readonly():boolean
        set_location(location: any):void
        set_mount_operation_factory(callback: any, user_data: any, notify: any):void
    }
    export class FileLoader extends GObject.Object {
        constructor(config?: any)
        static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream):FileLoader
        get_buffer():Buffer
        get_compression_type():CompressionType
        get_encoding():any
        get_file():File
        get_input_stream():Gio.InputStream
        get_location():any
        get_newline_type():NewlineType
        load_async(io_priority: number, cancellable: Gio.Cancellable, progress_callback: any, progress_callback_data: any, progress_callback_notify: any, callback: any, user_data: any):void
        load_finish(result: any):boolean
        set_candidate_encodings(candidate_encodings: any):void
    }
    export class FileSaver extends GObject.Object {
        constructor(config?: any)
        static new_with_target(buffer: Buffer, file: File, target_location: any):FileSaver
        get_buffer():Buffer
        get_compression_type():CompressionType
        get_encoding():any
        get_file():File
        get_flags():FileSaverFlags
        get_location():any
        get_newline_type():NewlineType
        save_async(io_priority: number, cancellable: Gio.Cancellable, progress_callback: any, progress_callback_data: any, progress_callback_notify: any, callback: any, user_data: any):void
        save_finish(result: any):boolean
        set_compression_type(compression_type: CompressionType):void
        set_encoding(encoding: any):void
        set_flags(flags: FileSaverFlags):void
        set_newline_type(newline_type: NewlineType):void
    }
    export class Gutter extends GObject.Object {
        get_padding(xpad: number, ypad: number):void
        get_renderer_at_pos(x: number, y: number):GutterRenderer
        get_window():Gdk.Window
        insert(renderer: GutterRenderer, position: number):boolean
        queue_draw():void
        remove(renderer: GutterRenderer):void
        reorder(renderer: GutterRenderer, position: number):void
        set_padding(xpad: number, ypad: number):void
    }
    export class GutterRenderer extends GObject.InitiallyUnowned {
        activate(iter: any, area: any, event: any):void
        begin(cr: any, background_area: any, cell_area: any, start: any, end: any):void
        draw(cr: any, background_area: any, cell_area: any, start: any, end: any, state: GutterRendererState):void
        end():void
        get_alignment(xalign: number, yalign: number):void
        get_alignment_mode():GutterRendererAlignmentMode
        get_background(color: any):boolean
        get_padding(xpad: number, ypad: number):void
        get_size():number
        get_view():Gtk.TextView
        get_visible():boolean
        get_window_type():Gtk.TextWindowType
        query_activatable(iter: any, area: any, event: any):boolean
        query_data(start: any, end: any, state: GutterRendererState):void
        query_tooltip(iter: any, area: any, x: number, y: number, tooltip: Gtk.Tooltip):boolean
        queue_draw():void
        set_alignment(xalign: number, yalign: number):void
        set_alignment_mode(mode: GutterRendererAlignmentMode):void
        set_background(color: any):void
        set_padding(xpad: number, ypad: number):void
        set_size(size: number):void
        set_visible(visible: boolean):void
    }
    export class GutterRendererPixbuf extends GutterRenderer {
        constructor(config?: any)
        get_gicon():any
        get_icon_name():string
        get_pixbuf():any
        get_stock_id():string
        set_gicon(icon: any):void
        set_icon_name(icon_name: string):void
        set_pixbuf(pixbuf: any):void
        set_stock_id(stock_id: string):void
    }
    export class GutterRendererText extends GutterRenderer {
        constructor(config?: any)
        measure(text: string, width: number, height: number):void
        measure_markup(markup: string, width: number, height: number):void
        set_markup(markup: string, length: number):void
        set_text(text: string, length: number):void
    }
    export class Language extends GObject.Object {
        get_globs():string[]
        get_hidden():boolean
        get_id():string
        get_metadata(name: string):string
        get_mime_types():string[]
        get_name():string
        get_section():string
        get_style_fallback(style_id: string):string
        get_style_ids():string[]
        get_style_name(style_id: string):string
    }
    export class LanguageManager extends GObject.Object {
        static get_default():LanguageManager
        constructor(config?: any)
        get_language(id: string):Language
        get_language_ids():string[]
        get_search_path():string[]
        guess_language(filename: string, content_type: string):Language
        set_search_path(dirs: string[]):void
    }
    export class Map extends View {
        constructor(config?: any)
        get_view():View
        set_view(view: View):void
    }
    export class Mark extends Gtk.TextMark {
        constructor(config?: any)
        get_category():string
        next(category: string):Mark
        prev(category: string):Mark
    }
    export class MarkAttributes extends GObject.Object {
        constructor(config?: any)
        get_background(background: any):boolean
        get_gicon():any
        get_icon_name():string
        get_pixbuf():any
        get_stock_id():string
        get_tooltip_markup(mark: Mark):string
        get_tooltip_text(mark: Mark):string
        render_icon(widget: Gtk.Widget, size: number):any
        set_background(background: any):void
        set_gicon(gicon: any):void
        set_icon_name(icon_name: string):void
        set_pixbuf(pixbuf: any):void
        set_stock_id(stock_id: string):void
    }
    export class PrintCompositor extends GObject.Object {
        constructor(config?: any)
        static new_from_view(view: View):PrintCompositor
        draw_page(context: Gtk.PrintContext, page_nr: number):void
        get_body_font_name():string
        get_bottom_margin(unit: Gtk.Unit):number
        get_buffer():Buffer
        get_footer_font_name():string
        get_header_font_name():string
        get_highlight_syntax():boolean
        get_left_margin(unit: Gtk.Unit):number
        get_line_numbers_font_name():string
        get_n_pages():number
        get_pagination_progress():number
        get_print_footer():boolean
        get_print_header():boolean
        get_print_line_numbers():number
        get_right_margin(unit: Gtk.Unit):number
        get_tab_width():number
        get_top_margin(unit: Gtk.Unit):number
        get_wrap_mode():Gtk.WrapMode
        paginate(context: Gtk.PrintContext):boolean
        set_body_font_name(font_name: string):void
        set_bottom_margin(margin: number, unit: Gtk.Unit):void
        set_footer_font_name(font_name: string):void
        set_footer_format(separator: boolean, left: string, center: string, right: string):void
        set_header_font_name(font_name: string):void
        set_header_format(separator: boolean, left: string, center: string, right: string):void
        set_highlight_syntax(highlight: boolean):void
        set_left_margin(margin: number, unit: Gtk.Unit):void
        set_line_numbers_font_name(font_name: string):void
        set_print_footer(print: boolean):void
        set_print_header(print: boolean):void
        set_print_line_numbers(interval: number):void
        set_right_margin(margin: number, unit: Gtk.Unit):void
        set_tab_width(width: number):void
        set_top_margin(margin: number, unit: Gtk.Unit):void
        set_wrap_mode(wrap_mode: Gtk.WrapMode):void
    }
    export class SearchContext extends GObject.Object {
        constructor(config?: any)
        backward(iter: any, match_start: any, match_end: any):boolean
        backward_async(iter: any, cancellable: Gio.Cancellable, callback: any, user_data: any):void
        backward_finish(result: any, match_start: any, match_end: any):boolean
        forward(iter: any, match_start: any, match_end: any):boolean
        forward_async(iter: any, cancellable: Gio.Cancellable, callback: any, user_data: any):void
        forward_finish(result: any, match_start: any, match_end: any):boolean
        get_buffer():Buffer
        get_highlight():boolean
        get_match_style():Style
        get_occurrence_position(match_start: any, match_end: any):number
        get_occurrences_count():number
        get_regex_error():any
        get_settings():SearchSettings
        replace(match_start: any, match_end: any, replace: string, replace_length: number):boolean
        replace_all(replace: string, replace_length: number):number
        set_highlight(highlight: boolean):void
        set_match_style(match_style: Style):void
        set_settings(settings: SearchSettings):void
    }
    export class SearchSettings extends GObject.Object {
        constructor(config?: any)
        get_at_word_boundaries():boolean
        get_case_sensitive():boolean
        get_regex_enabled():boolean
        get_search_text():string
        get_wrap_around():boolean
        set_at_word_boundaries(at_word_boundaries: boolean):void
        set_case_sensitive(case_sensitive: boolean):void
        set_regex_enabled(regex_enabled: boolean):void
        set_search_text(search_text: string):void
        set_wrap_around(wrap_around: boolean):void
    }
    export class Style extends GObject.Object {
        copy():Style
    }
    export class StyleScheme extends GObject.Object {
        get_authors():string[]
        get_description():string
        get_filename():string
        get_id():string
        get_name():string
        get_style(style_id: string):Style
    }
    export class StyleSchemeChooserButton extends Gtk.Button {
        constructor(config?: any)
    }
    export class StyleSchemeChooserWidget extends Gtk.Bin {
        constructor(config?: any)
    }
    export class StyleSchemeManager extends GObject.Object {
        static get_default():StyleSchemeManager
        constructor(config?: any)
        append_search_path(path: string):void
        force_rescan():void
        get_scheme(scheme_id: string):StyleScheme
        get_scheme_ids():string[]
        get_search_path():string[]
        prepend_search_path(path: string):void
        set_search_path(path: string[]):void
    }
    export class View extends Gtk.TextView {
        constructor(config?: any)
        static new_with_buffer(buffer: Buffer):View
        get_auto_indent():boolean
        get_background_pattern():BackgroundPatternType
        get_completion():Completion
        get_draw_spaces():DrawSpacesFlags
        get_gutter(window_type: Gtk.TextWindowType):Gutter
        get_highlight_current_line():boolean
        get_indent_on_tab():boolean
        get_indent_width():number
        get_insert_spaces_instead_of_tabs():boolean
        get_mark_attributes(category: string, priority: number):MarkAttributes
        get_right_margin_position():number
        get_show_line_marks():boolean
        get_show_line_numbers():boolean
        get_show_right_margin():boolean
        get_smart_backspace():boolean
        get_smart_home_end():SmartHomeEndType
        get_tab_width():number
        get_visual_column(iter: any):number
        indent_lines(start: any, end: any):void
        set_auto_indent(enable: boolean):void
        set_background_pattern(background_pattern: BackgroundPatternType):void
        set_draw_spaces(flags: DrawSpacesFlags):void
        set_highlight_current_line(highlight: boolean):void
        set_indent_on_tab(enable: boolean):void
        set_indent_width(width: number):void
        set_insert_spaces_instead_of_tabs(enable: boolean):void
        set_mark_attributes(category: string, attributes: MarkAttributes, priority: number):void
        set_right_margin_position(pos: number):void
        set_show_line_marks(show: boolean):void
        set_show_line_numbers(show: boolean):void
        set_show_right_margin(show: boolean):void
        set_smart_backspace(smart_backspace: boolean):void
        set_smart_home_end(smart_home_end: SmartHomeEndType):void
        set_tab_width(width: number):void
        unindent_lines(start: any, end: any):void
    }
}