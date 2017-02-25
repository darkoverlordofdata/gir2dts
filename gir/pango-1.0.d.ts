/**
 * Pango.d.ts
 * 
 */
declare module "Pango" {
  export function attr_background_alpha_new(alpha: guint16):Attribute
  export function attr_background_new(red: guint16, green: guint16, blue: guint16):Attribute
  export function attr_fallback_new(enable_fallback: boolean):Attribute
  export function attr_family_new(family: string):Attribute
  export function attr_foreground_alpha_new(alpha: guint16):Attribute
  export function attr_foreground_new(red: guint16, green: guint16, blue: guint16):Attribute
  export function attr_gravity_hint_new(hint: GravityHint):Attribute
  export function attr_gravity_new(gravity: Gravity):Attribute
  export function attr_letter_spacing_new(letter_spacing: number):Attribute
  export function attr_rise_new(rise: number):Attribute
  export function attr_scale_new(scale_factor: number):Attribute
  export function attr_stretch_new(stretch: Stretch):Attribute
  export function attr_strikethrough_color_new(red: guint16, green: guint16, blue: guint16):Attribute
  export function attr_strikethrough_new(strikethrough: boolean):Attribute
  export function attr_style_new(style: Style):Attribute
  export function attr_type_get_name(type: AttrType):string
  export function attr_type_register(name: string):AttrType
  export function attr_underline_color_new(red: guint16, green: guint16, blue: guint16):Attribute
  export function attr_underline_new(underline: Underline):Attribute
  export function attr_variant_new(variant: Variant):Attribute
  export function attr_weight_new(weight: Weight):Attribute
  export function bidi_type_for_unichar(ch: gunichar):BidiType
  export function _break(text: string, length: number, analysis: Analysis, attrs: LogAttr[], attrs_len: number):void
  export function config_key_get(key: string):string
  export function config_key_get_system(key: string):string
  export function default_break(text: string, length: number, analysis: Analysis, attrs: LogAttr, attrs_len: number):void
  export function extents_to_pixels(inclusive: Rectangle, nearest: Rectangle):void
  export function find_base_dir(text: string, length: number):Direction
  export function find_map(language: Language, engine_type_id: number, render_type_id: number):Map
  export function find_paragraph_boundary(text: string, length: number, paragraph_delimiter_index: number, next_paragraph_start: number):void
  export function font_description_from_string(str: string):FontDescription
  export function get_lib_subdirectory():string
  export function get_log_attrs(text: string, length: number, level: number, language: Language, log_attrs: LogAttr[], attrs_len: number):void
  export function get_mirror_char(ch: gunichar, mirrored_ch: gunichar):boolean
  export function get_sysconf_subdirectory():string
  export function gravity_get_for_matrix(matrix: Matrix):Gravity
  export function gravity_get_for_script(script: Script, base_gravity: Gravity, hint: GravityHint):Gravity
  export function gravity_get_for_script_and_width(script: Script, wide: boolean, base_gravity: Gravity, hint: GravityHint):Gravity
  export function gravity_to_rotation(gravity: Gravity):number
  export function is_zero_width(ch: gunichar):boolean
  export function itemize(context: Context, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator):GLib.List
  export function itemize_with_base_dir(context: Context, base_dir: Direction, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator):GLib.List
  export function language_from_string(language: string):Language
  export function language_get_default():Language
  export function log2vis_get_embedding_levels(text: string, length: number, pbase_dir: Direction):number
  export function lookup_aliases(fontname: string, families: string[], n_families: number):void
  export function markup_parser_finish(context: GLib.MarkupParseContext, attr_list: AttrList, text: string, accel_char: gunichar):boolean
  export function markup_parser_new(accel_marker: gunichar):GLib.MarkupParseContext
  export function module_register(module: IncludedModule):void
  export function parse_enum(type: number, str: string, value: number, warn: boolean, possible_values: string):boolean
  export function parse_markup(markup_text: string, length: number, accel_marker: gunichar, attr_list: AttrList, text: string, accel_char: gunichar):boolean
  export function parse_stretch(str: string, stretch: Stretch, warn: boolean):boolean
  export function parse_style(str: string, style: Style, warn: boolean):boolean
  export function parse_variant(str: string, variant: Variant, warn: boolean):boolean
  export function parse_weight(str: string, weight: Weight, warn: boolean):boolean
  export function quantize_line_geometry(thickness: number, position: number):void
  export function read_line(stream: any, str: GLib.String):number
  export function reorder_items(logical_items: GLib.List):GLib.List
  export function scan_int(pos: string, out: number):boolean
  export function scan_string(pos: string, out: GLib.String):boolean
  export function scan_word(pos: string, out: GLib.String):boolean
  export function script_for_unichar(ch: gunichar):Script
  export function script_get_sample_language(script: Script):Language
  export function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString):void
  export function shape_full(item_text: string, item_length: number, paragraph_text: string, paragraph_length: number, analysis: Analysis, glyphs: GlyphString):void
  export function skip_space(pos: string):boolean
  export function split_file_list(str: string):string[]
  export function trim_string(str: string):string
  export function unichar_direction(ch: gunichar):Direction
  export function units_from_double(d: number):number
  export function units_to_double(i: number):number
  export function version():number
  export function version_check(required_major: number, required_minor: number, required_micro: number):string
  export function version_string():string
  export enum Alignment{
    LEFT,
    CENTER,
    RIGHT,
  }
  export enum AttrType{
    INVALID,
    LANGUAGE,
    FAMILY,
    STYLE,
    WEIGHT,
    VARIANT,
    STRETCH,
    SIZE,
    FONT_DESC,
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
    RISE,
    SHAPE,
    SCALE,
    FALLBACK,
    LETTER_SPACING,
    UNDERLINE_COLOR,
    STRIKETHROUGH_COLOR,
    ABSOLUTE_SIZE,
    GRAVITY,
    GRAVITY_HINT,
    FONT_FEATURES,
    FOREGROUND_ALPHA,
    BACKGROUND_ALPHA,
  }
  export enum BidiType{
    L,
    LRE,
    LRO,
    R,
    AL,
    RLE,
    RLO,
    PDF,
    EN,
    ES,
    ET,
    AN,
    CS,
    NSM,
    BN,
    B,
    S,
    WS,
    ON,
  }
  export enum CoverageLevel{
    NONE,
    FALLBACK,
    APPROXIMATE,
    EXACT,
  }
  export enum Direction{
    LTR,
    RTL,
    TTB_LTR,
    TTB_RTL,
    WEAK_LTR,
    WEAK_RTL,
    NEUTRAL,
  }
  export enum EllipsizeMode{
    NONE,
    START,
    MIDDLE,
    END,
  }
  export enum Gravity{
    SOUTH,
    EAST,
    NORTH,
    WEST,
    AUTO,
  }
  export enum GravityHint{
    NATURAL,
    STRONG,
    LINE,
  }
  export enum RenderPart{
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
  }
  export enum Script{
    INVALID_CODE,
    COMMON,
    INHERITED,
    ARABIC,
    ARMENIAN,
    BENGALI,
    BOPOMOFO,
    CHEROKEE,
    COPTIC,
    CYRILLIC,
    DESERET,
    DEVANAGARI,
    ETHIOPIC,
    GEORGIAN,
    GOTHIC,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HAN,
    HANGUL,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    KHMER,
    LAO,
    LATIN,
    MALAYALAM,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    OLD_ITALIC,
    ORIYA,
    RUNIC,
    SINHALA,
    SYRIAC,
    TAMIL,
    TELUGU,
    THAANA,
    THAI,
    TIBETAN,
    CANADIAN_ABORIGINAL,
    YI,
    TAGALOG,
    HANUNOO,
    BUHID,
    TAGBANWA,
    BRAILLE,
    CYPRIOT,
    LIMBU,
    OSMANYA,
    SHAVIAN,
    LINEAR_B,
    TAI_LE,
    UGARITIC,
    NEW_TAI_LUE,
    BUGINESE,
    GLAGOLITIC,
    TIFINAGH,
    SYLOTI_NAGRI,
    OLD_PERSIAN,
    KHAROSHTHI,
    UNKNOWN,
    BALINESE,
    CUNEIFORM,
    PHOENICIAN,
    PHAGS_PA,
    NKO,
    KAYAH_LI,
    LEPCHA,
    REJANG,
    SUNDANESE,
    SAURASHTRA,
    CHAM,
    OL_CHIKI,
    VAI,
    CARIAN,
    LYCIAN,
    LYDIAN,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
  }
  export enum Stretch{
    ULTRA_CONDENSED,
    EXTRA_CONDENSED,
    CONDENSED,
    SEMI_CONDENSED,
    NORMAL,
    SEMI_EXPANDED,
    EXPANDED,
    EXTRA_EXPANDED,
    ULTRA_EXPANDED,
  }
  export enum Style{
    NORMAL,
    OBLIQUE,
    ITALIC,
  }
  export enum TabAlign{
    LEFT,
  }
  export enum Underline{
    NONE,
    SINGLE,
    DOUBLE,
    LOW,
    ERROR,
  }
  export enum Variant{
    NORMAL,
    SMALL_CAPS,
  }
  export enum Weight{
    THIN,
    ULTRALIGHT,
    LIGHT,
    SEMILIGHT,
    BOOK,
    NORMAL,
    MEDIUM,
    SEMIBOLD,
    BOLD,
    ULTRABOLD,
    HEAVY,
    ULTRAHEAVY,
  }
  export enum WrapMode{
    WORD,
    CHAR,
    WORD_CHAR,
  }
  export enum FontMask{
    FAMILY,
    STYLE,
    VARIANT,
    WEIGHT,
    STRETCH,
    SIZE,
    GRAVITY,
  }
  export class Context extends GObject.Object {
    changed():void
    get_base_dir():Direction
    get_base_gravity():Gravity
    get_font_description():FontDescription
    get_font_map():FontMap
    get_gravity():Gravity
    get_gravity_hint():GravityHint
    get_language():Language
    get_matrix():Matrix
    get_metrics(desc: FontDescription, language: Language):FontMetrics
    get_serial():number
    list_families(families: FontFamily[], n_families: number):void
    load_font(desc: FontDescription):Font
    load_fontset(desc: FontDescription, language: Language):Fontset
    set_base_dir(direction: Direction):void
    set_base_gravity(gravity: Gravity):void
    set_font_description(desc: FontDescription):void
    set_font_map(font_map: FontMap):void
    set_gravity_hint(hint: GravityHint):void
    set_language(language: Language):void
    set_matrix(matrix: Matrix):void
  }
  export class Engine extends GObject.Object {
  }
  export class EngineLang extends Engine {
  }
  export class EngineShape extends Engine {
  }
  export class Font extends GObject.Object {
    describe():FontDescription
    describe_with_absolute_size():FontDescription
    find_shaper(language: Language, ch: guint32):EngineShape
    get_coverage(language: Language):Coverage
    get_font_map():FontMap
    get_glyph_extents(glyph: Glyph, ink_rect: Rectangle, logical_rect: Rectangle):void
    get_metrics(language: Language):FontMetrics
  }
  export class FontFace extends GObject.Object {
    describe():FontDescription
    get_face_name():string
    is_synthesized():boolean
    list_sizes(sizes: number[], n_sizes: number):void
  }
  export class FontFamily extends GObject.Object {
    get_name():string
    is_monospace():boolean
    list_faces(faces: FontFace[], n_faces: number):void
  }
  export class FontMap extends GObject.Object {
    changed():void
    create_context():Context
    get_serial():number
    get_shape_engine_type():string
    list_families(families: FontFamily[], n_families: number):void
    load_font(context: Context, desc: FontDescription):Font
    load_fontset(context: Context, desc: FontDescription, language: Language):Fontset
  }
  export class Fontset extends GObject.Object {
    foreach(func: FontsetForeachFunc, data: any):void
    get_font(wc: number):Font
    get_metrics():FontMetrics
  }
  export class FontsetSimple extends Fontset {
    constructor(language: Language)
    append(font: Font):void
    size():number
  }
  export class Layout extends GObject.Object {
    constructor(context: Context)
    context_changed():void
    copy():Layout
    get_alignment():Alignment
    get_attributes():AttrList
    get_auto_dir():boolean
    get_baseline():number
    get_character_count():number
    get_context():Context
    get_cursor_pos(index_: number, strong_pos: Rectangle, weak_pos: Rectangle):void
    get_ellipsize():EllipsizeMode
    get_extents(ink_rect: Rectangle, logical_rect: Rectangle):void
    get_font_description():FontDescription
    get_height():number
    get_indent():number
    get_iter():LayoutIter
    get_justify():boolean
    get_line(line: number):LayoutLine
    get_line_count():number
    get_line_readonly(line: number):LayoutLine
    get_lines():GLib.SList
    get_lines_readonly():GLib.SList
    get_log_attrs(attrs: LogAttr[], n_attrs: number):void
    get_log_attrs_readonly(n_attrs: number):LogAttr[]
    get_pixel_extents(ink_rect: Rectangle, logical_rect: Rectangle):void
    get_pixel_size(width: number, height: number):void
    get_serial():number
    get_single_paragraph_mode():boolean
    get_size(width: number, height: number):void
    get_spacing():number
    get_tabs():TabArray
    get_text():string
    get_unknown_glyphs_count():number
    get_width():number
    get_wrap():WrapMode
    index_to_line_x(index_: number, trailing: boolean, line: number, x_pos: number):void
    index_to_pos(index_: number, pos: Rectangle):void
    is_ellipsized():boolean
    is_wrapped():boolean
    move_cursor_visually(strong: boolean, old_index: number, old_trailing: number, direction: number, new_index: number, new_trailing: number):void
    set_alignment(alignment: Alignment):void
    set_attributes(attrs: AttrList):void
    set_auto_dir(auto_dir: boolean):void
    set_ellipsize(ellipsize: EllipsizeMode):void
    set_font_description(desc: FontDescription):void
    set_height(height: number):void
    set_indent(indent: number):void
    set_justify(justify: boolean):void
    set_markup(markup: string, length: number):void
    set_markup_with_accel(markup: string, length: number, accel_marker: gunichar, accel_char: gunichar):void
    set_single_paragraph_mode(setting: boolean):void
    set_spacing(spacing: number):void
    set_tabs(tabs: TabArray):void
    set_text(text: string, length: number):void
    set_width(width: number):void
    set_wrap(wrap: WrapMode):void
    xy_to_index(x: number, y: number, index_: number, trailing: number):boolean
  }
  export class Renderer extends GObject.Object {
    activate():void
    deactivate():void
    draw_error_underline(x: number, y: number, width: number, height: number):void
    draw_glyph(font: Font, glyph: Glyph, x: number, y: number):void
    draw_glyph_item(text: string, glyph_item: GlyphItem, x: number, y: number):void
    draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number):void
    draw_layout(layout: Layout, x: number, y: number):void
    draw_layout_line(line: LayoutLine, x: number, y: number):void
    draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number):void
    draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number):void
    get_alpha(part: RenderPart):guint16
    get_color(part: RenderPart):Color
    get_layout():Layout
    get_layout_line():LayoutLine
    get_matrix():Matrix
    part_changed(part: RenderPart):void
    set_alpha(part: RenderPart, alpha: guint16):void
    set_color(part: RenderPart, color: Color):void
    set_matrix(matrix: Matrix):void
  }
}