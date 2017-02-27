/**
 * WebKit.d.ts
 *
 */
declare module 'WebKit' {
    import * as GObject from "GObject"
    import * as Gio from "Gio"
    import * as Gtk from "Gtk"
    export const MAJOR_VERSION:number
    export const MICRO_VERSION:number
    export const MINOR_VERSION:number
    export const USER_AGENT_MAJOR_VERSION:number
    export const USER_AGENT_MINOR_VERSION:number
    export function application_cache_get_database_directory_path():string
    export function application_cache_get_maximum_size():number
    export function application_cache_set_maximum_size(size: number):void
    export function check_version(major: number, minor: number, micro: number):boolean
    export function context_menu_item_get_action(item: Gtk.MenuItem):ContextMenuAction
    export function geolocation_policy_allow(decision: GeolocationPolicyDecision):void
    export function geolocation_policy_deny(decision: GeolocationPolicyDecision):void
    export function get_cache_model():CacheModel
    export function get_default_session():any
    export function get_default_web_database_quota():number
    export function get_favicon_database():FaviconDatabase
    export function get_icon_database():IconDatabase
    export function get_security_policy_for_uri_scheme(scheme: string):SecurityPolicy
    export function get_text_checker():GObject.Object
    export function get_web_database_directory_path():string
    export function get_web_plugin_database():WebPluginDatabase
    export function major_version():number
    export function micro_version():number
    export function minor_version():number
    export function network_error_quark():any
    export function plugin_error_quark():any
    export function policy_error_quark():any
    export function remove_all_web_databases():void
    export function set_cache_model(cache_model: CacheModel):void
    export function set_default_web_database_quota(defaultQuota: number):void
    export function set_security_policy_for_uri_scheme(scheme: string, policy: SecurityPolicy):void
    export function set_text_checker(checker: GObject.Object):void
    export function set_web_database_directory_path(path: string):void
    export enum CacheModel {
        DEFAULT,
        DOCUMENT_VIEWER,
        WEB_BROWSER,
        DOCUMENT_BROWSER,
    }
    export enum ContextMenuAction {
        NO_ACTION,
        OPEN_LINK,
        OPEN_LINK_IN_NEW_WINDOW,
        DOWNLOAD_LINK_TO_DISK,
        COPY_LINK_TO_CLIPBOARD,
        OPEN_IMAGE_IN_NEW_WINDOW,
        DOWNLOAD_IMAGE_TO_DISK,
        COPY_IMAGE_TO_CLIPBOARD,
        COPY_IMAGE_URL_TO_CLIPBOARD,
        OPEN_FRAME_IN_NEW_WINDOW,
        GO_BACK,
        GO_FORWARD,
        STOP,
        RELOAD,
        COPY,
        CUT,
        PASTE,
        DELETE,
        SELECT_ALL,
        INPUT_METHODS,
        UNICODE,
        SPELLING_GUESS,
        NO_GUESSES_FOUND,
        IGNORE_SPELLING,
        LEARN_SPELLING,
        IGNORE_GRAMMAR,
        FONT_MENU,
        BOLD,
        ITALIC,
        UNDERLINE,
        OUTLINE,
        INSPECT_ELEMENT,
        OPEN_MEDIA_IN_NEW_WINDOW,
        COPY_MEDIA_LINK_TO_CLIPBOARD,
        TOGGLE_MEDIA_CONTROLS,
        TOGGLE_MEDIA_LOOP,
        ENTER_VIDEO_FULLSCREEN,
        MEDIA_PLAY_PAUSE,
        MEDIA_MUTE,
    }
    export enum DownloadError {
        CANCELLED_BY_USER,
        DESTINATION,
        NETWORK,
    }
    export enum DownloadStatus {
        ERROR,
        CREATED,
        STARTED,
        CANCELLED,
        FINISHED,
    }
    export enum EditingBehavior {
        MAC,
        WINDOWS,
        UNIX,
    }
    export enum InsertAction {
        TYPED,
        PASTED,
        DROPPED,
    }
    export enum LoadStatus {
        PROVISIONAL,
        COMMITTED,
        FINISHED,
        FIRST_VISUALLY_NON_EMPTY_LAYOUT,
        FAILED,
    }
    export enum NavigationResponse {
        ACCEPT,
        IGNORE,
        DOWNLOAD,
    }
    export enum NetworkError {
        FAILED,
        TRANSPORT,
        UNKNOWN_PROTOCOL,
        CANCELLED,
        FILE_DOES_NOT_EXIST,
    }
    export enum PluginError {
        FAILED,
        CANNOT_FIND_PLUGIN,
        CANNOT_LOAD_PLUGIN,
        JAVA_UNAVAILABLE,
        CONNECTION_CANCELLED,
        WILL_HANDLE_LOAD,
    }
    export enum PolicyError {
        FAILED,
        CANNOT_SHOW_MIME_TYPE,
        CANNOT_SHOW_URL,
        FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE,
        CANNOT_USE_RESTRICTED_PORT,
    }
    export enum SelectionAffinity {
        UPSTREAM,
        DOWNSTREAM,
    }
    export enum WebNavigationReason {
        LINK_CLICKED,
        FORM_SUBMITTED,
        BACK_FORWARD,
        RELOAD,
        FORM_RESUBMITTED,
        OTHER,
    }
    export enum WebViewTargetInfo {
        HTML,
        TEXT,
        IMAGE,
        URI_LIST,
        NETSCAPE_URL,
    }
    export enum WebViewViewMode {
        WINDOWED,
        FLOATING,
        FULLSCREEN,
        MAXIMIZED,
        MINIMIZED,
    }
    export enum HitTestResultContext{
        DOCUMENT,
        LINK,
        IMAGE,
        MEDIA,
        SELECTION,
        EDITABLE,
    }
    export enum SecurityPolicy{
        LOCAL,
        NO_ACCESS_TO_OTHER_SCHEME,
        DISPLAY_ISOLATED,
        SECURE,
        CORS_ENABLED,
        EMPTY_DOCUMENT,
    }
    export class DOMAttr extends DOMNode {
        get_is_id():boolean
        get_name():string
        get_owner_element():DOMElement
        get_specified():boolean
        get_value():string
        set_value(value: string):void
    }
    export class DOMAudioTrack extends DOMObject {
        get_enabled():boolean
        get_id():string
        get_kind():string
        get_label():string
        get_language():string
        set_enabled(value: boolean):void
    }
    export class DOMAudioTrackList extends DOMObject {
        dispatch_event(evt: DOMEvent):boolean
        get_length():number
        get_track_by_id(id: string):DOMAudioTrack
        item(index: number):DOMAudioTrack
    }
    export class DOMBarInfo extends DOMObject {
        static get_visible(self: any):boolean
    }
    export class DOMBarProp extends DOMObject {
        get_visible():boolean
    }
    export class DOMBatteryManager extends DOMObject {
        dispatch_event(event: DOMEvent):boolean
        get_charging():boolean
        get_charging_time():number
        get_discharging_time():number
        get_level():number
    }
    export class DOMBlob extends DOMObject {
        get_size():number
        slice(start: number, end: number, contentType: string):DOMBlob
        webkit_slice(start: number, end: number, content_type: string):DOMBlob
    }
    export class DOMCDATASection extends DOMText {
    }
    export class DOMCSSRule extends DOMObject {
        get_css_text():string
        get_parent_rule():DOMCSSRule
        get_parent_style_sheet():DOMCSSStyleSheet
        set_css_text(value: string):void
    }
    export class DOMCSSRuleList extends DOMObject {
        get_length():number
        item(index: number):DOMCSSRule
    }
    export class DOMCSSStyleDeclaration extends DOMObject {
        get_css_text():string
        get_length():number
        get_parent_rule():DOMCSSRule
        get_property_css_value(propertyName: string):DOMCSSValue
        get_property_priority(propertyName: string):string
        get_property_shorthand(propertyName: string):string
        get_property_value(propertyName: string):string
        is_property_implicit(propertyName: string):boolean
        item(index: number):string
        remove_property(propertyName: string):string
        set_css_text(value: string):void
        set_property(...args: any[]):void

    }
    export class DOMCSSStyleSheet extends DOMStyleSheet {
        add_rule(selector: string, style: string, index: number):number
        delete_rule(index: number):void
        get_css_rules():DOMCSSRuleList
        get_owner_rule():DOMCSSRule
        get_rules():DOMCSSRuleList
        insert_rule(rule: string, index: number):number
        remove_rule(index: number):void
    }
    export class DOMCSSValue extends DOMObject {
        get_css_text():string
        get_css_value_type():number
        set_css_text(value: string):void
    }
    export class DOMCharacterData extends DOMNode {
        append_data(data: string):void
        delete_data(offset: number, length: number):void
        get_data():string
        get_length():number
        insert_data(offset: number, data: string):void
        remove():void
        replace_data(...args: any[]):any

        set_data(value: string):void
        substring_data(offset: number, length: number):string
    }
    export class DOMComment extends DOMCharacterData {
    }
    export class DOMConsole extends DOMObject {
        get_memory():any
        group_end():void
        time(title: string):void
    }
    export class DOMDOMApplicationCache extends DOMObject {
        abort():void
        dispatch_event(evt: DOMEvent):boolean
        get_status():number
        swap_cache():void
        update():void
    }
    export class DOMDOMImplementation extends DOMObject {
        create_css_style_sheet(title: string, media: string):DOMCSSStyleSheet
        create_document(namespaceURI: string, qualifiedName: string, doctype: DOMDocumentType):DOMDocument
        create_document_type(qualifiedName: string, publicId: string, systemId: string):DOMDocumentType
        create_html_document(title: string):DOMHTMLDocument
        has_feature(feature: string, version: string):boolean
    }
    export class DOMDOMMimeType extends DOMObject {
        get_description():string
        get_enabled_plugin():DOMDOMPlugin
        get_suffixes():string
    }
    export class DOMDOMMimeTypeArray extends DOMObject {
        get_length():number
        item(index: number):DOMDOMMimeType
        named_item(name: string):DOMDOMMimeType
    }
    export class DOMDOMNamedFlowCollection extends DOMObject {
        get_length():number
        item(index: number):DOMWebKitNamedFlow
        named_item(name: string):DOMWebKitNamedFlow
    }
    export class DOMDOMPlugin extends DOMObject {
        get_description():string
        get_filename():string
        get_length():number
        get_name():string
        item(index: number):DOMDOMMimeType
        named_item(name: string):DOMDOMMimeType
    }
    export class DOMDOMPluginArray extends DOMObject {
        get_length():number
        item(index: number):DOMDOMPlugin
        named_item(name: string):DOMDOMPlugin
        refresh(reload: boolean):void
    }
    export class DOMDOMSecurityPolicy extends DOMObject {
        allows_connection_to(url: string):boolean
        allows_font_from(url: string):boolean
        allows_form_action(url: string):boolean
        allows_frame_from(url: string):boolean
        allows_image_from(url: string):boolean
        allows_media_from(url: string):boolean
        allows_object_from(url: string):boolean
        allows_plugin_type(type: string):boolean
        allows_script_from(url: string):boolean
        allows_style_from(url: string):boolean
        get_allows_eval():boolean
        get_allows_inline_script():boolean
        get_allows_inline_style():boolean
        get_is_active():boolean
        get_report_ur_is():DOMDOMStringList
    }
    export class DOMDOMSelection extends DOMObject {
        add_range(range: DOMRange):void
        collapse(node: DOMNode, index: number):void
        collapse_to_end():void
        collapse_to_start():void
        contains_node(node: DOMNode, allowPartial: boolean):boolean
        delete_from_document():void
        empty():void
        extend(node: DOMNode, offset: number):void
        get_anchor_node():DOMNode
        get_anchor_offset():number
        get_base_node():DOMNode
        get_base_offset():number
        get_extent_node():DOMNode
        get_extent_offset():number
        get_focus_node():DOMNode
        get_focus_offset():number
        get_is_collapsed():boolean
        get_range_at(index: number):DOMRange
        get_range_count():number
        modify(alter: string, direction: string, granularity: string):void
        remove_all_ranges():void
        select_all_children(node: DOMNode):void
        set_base_and_extent(baseNode: DOMNode, baseOffset: number, extentNode: DOMNode, extentOffset: number):void
        set_position(node: DOMNode, offset: number):void
    }
    export class DOMDOMSettableTokenList extends DOMDOMTokenList {
        get_value():string
        set_value(value: string):void
    }
    export class DOMDOMStringList extends DOMObject {
        contains(string: string):boolean
        get_length():number
        item(index: number):string
    }
    export class DOMDOMStringMap extends DOMObject {
    }
    export class DOMDOMTokenList extends DOMObject {
        add(tokens: string):void
        contains(token: string):boolean
        get_length():number
        item(index: number):string
        remove(tokens: string):void
        toggle(token: string, force: boolean):boolean
    }
    export class DOMDOMWindow extends DOMObject {
        alert(message: string):void
        atob(string: string):string
        blur():void
        btoa(string: string):string
        cancel_animation_frame(id: number):void
        capture_events():void
        clear_interval(handle: number):void
        clear_timeout(handle: number):void
        close():void
        confirm(message: string):boolean
        dispatch_event(evt: DOMEvent):boolean
        find(string: string, caseSensitive: boolean, backwards: boolean, wrap: boolean, wholeWord: boolean, searchInFrames: boolean, showDialog: boolean):boolean
        focus():void
        get_application_cache():DOMDOMApplicationCache
        get_client_information():DOMNavigator
        get_closed():boolean
        get_computed_style(element: DOMElement, pseudoElement: string):DOMCSSStyleDeclaration
        get_console():DOMConsole
        get_css():DOMDOMWindowCSS
        get_default_status():string
        get_device_pixel_ratio():number
        get_document():DOMDocument
        get_frame_element():DOMElement
        get_frames():DOMDOMWindow
        get_history():DOMHistory
        get_inner_height():number
        get_inner_width():number
        get_length():number
        get_local_storage():DOMStorage
        get_locationbar():DOMBarProp
        get_menubar():DOMBarProp
        get_name():string
        get_navigator():DOMNavigator
        get_offscreen_buffering():boolean
        get_opener():DOMDOMWindow
        get_outer_height():number
        get_outer_width():number
        get_page_x_offset():number
        get_page_y_offset():number
        get_parent():DOMDOMWindow
        get_performance():DOMPerformance
        get_personalbar():DOMBarProp
        get_screen():DOMScreen
        get_screen_left():number
        get_screen_top():number
        get_screen_x():number
        get_screen_y():number
        get_scroll_x():number
        get_scroll_y():number
        get_scrollbars():DOMBarProp
        get_selection():DOMDOMSelection
        get_self():DOMDOMWindow
        get_session_storage():DOMStorage
        get_status():string
        get_statusbar():DOMBarProp
        get_style_media():DOMStyleMedia
        get_toolbar():DOMBarProp
        get_top():DOMDOMWindow
        get_webkit_storage_info():DOMStorageInfo
        get_window():DOMDOMWindow
        match_media(query: string):DOMMediaQueryList
        move_by(x: number, y: number):void
        move_to(x: number, y: number):void
        print():void
        prompt(message: string, defaultValue: string):string
        release_events():void
        resize_by(x: number, y: number):void
        resize_to(width: number, height: number):void
        scroll(x: number, y: number):void
        scroll_by(x: number, y: number):void
        scroll_to(x: number, y: number):void
        set_default_status(value: string):void
        set_name(value: string):void
        set_status(value: string):void
        stop():void
        webkit_cancel_animation_frame(id: number):void
        webkit_cancel_request_animation_frame(id: number):void
        webkit_convert_point_from_node_to_page(node: DOMNode, p: DOMWebKitPoint):DOMWebKitPoint
        webkit_convert_point_from_page_to_node(node: DOMNode, p: DOMWebKitPoint):DOMWebKitPoint
    }
    export class DOMDOMWindowCSS extends DOMObject {
        supports(property: string, value: string):boolean
    }
    export class DOMDatabase extends DOMObject {
        get_version():string
    }
    export class DOMDocument extends DOMNode {
        adopt_node(source: DOMNode):DOMNode
        caret_range_from_point(x: number, y: number):DOMRange
        create_attribute(name: string):DOMAttr
        create_attribute_ns(namespaceURI: string, qualifiedName: string):DOMAttr
        create_cdata_section(data: string):DOMCDATASection
        create_comment(data: string):DOMComment
        create_css_style_declaration():DOMCSSStyleDeclaration
        create_document_fragment():DOMDocumentFragment
        create_element(tagName: string):DOMElement
        create_element_ns(namespaceURI: string, qualifiedName: string):DOMElement
        create_entity_reference(name: string):DOMEntityReference
        create_event(eventType: string):DOMEvent
        create_expression(expression: string, resolver: DOMXPathNSResolver):DOMXPathExpression
        create_node_iterator(root: DOMNode, whatToShow: number, filter: DOMNodeFilter, expandEntityReferences: boolean):DOMNodeIterator
        create_ns_resolver(nodeResolver: DOMNode):DOMXPathNSResolver
        create_processing_instruction(target: string, data: string):DOMProcessingInstruction
        create_range():DOMRange
        create_text_node(data: string):DOMText
        create_touch(window: DOMDOMWindow, target: any, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number, webkitRadiusX: number, webkitRadiusY: number, webkitRotationAngle: number, webkitForce: number):DOMTouch
        create_tree_walker(root: DOMNode, whatToShow: number, filter: DOMNodeFilter, expandEntityReferences: boolean):DOMTreeWalker
        element_from_point(x: number, y: number):DOMElement
        evaluate(expression: string, contextNode: DOMNode, resolver: DOMXPathNSResolver, type: number, inResult: DOMXPathResult):DOMXPathResult
        exec_command(command: string, userInterface: boolean, value: string):boolean
        get_anchors():DOMHTMLCollection
        get_applets():DOMHTMLCollection
        get_body():DOMHTMLElement
        get_character_set():string
        get_charset():string
        get_compat_mode():string
        get_cookie():string
        get_current_script():DOMHTMLScriptElement
        get_default_charset():string
        get_default_view():DOMDOMWindow
        get_doctype():DOMDocumentType
        get_document_element():DOMElement
        get_document_uri():string
        get_domain():string
        get_element_by_id(elementId: string):DOMElement
        get_elements_by_class_name(tagname: string):DOMNodeList
        get_elements_by_name(elementName: string):DOMNodeList
        get_elements_by_tag_name(tagname: string):DOMNodeList
        get_elements_by_tag_name_ns(namespaceURI: string, localName: string):DOMNodeList
        get_forms():DOMHTMLCollection
        get_head():DOMHTMLHeadElement
        get_hidden():boolean
        get_images():DOMHTMLCollection
        get_implementation():DOMDOMImplementation
        get_input_encoding():string
        get_last_modified():string
        get_links():DOMHTMLCollection
        get_override_style(element: DOMElement, pseudoElement: string):DOMCSSStyleDeclaration
        get_preferred_stylesheet_set():string
        get_ready_state():string
        get_referrer():string
        get_security_policy():DOMDOMSecurityPolicy
        get_selected_stylesheet_set():string
        get_style_sheets():DOMStyleSheetList
        get_title():string
        get_url():string
        get_visibility_state():string
        get_webkit_current_full_screen_element():DOMElement
        get_webkit_full_screen_keyboard_input_allowed():boolean
        get_webkit_fullscreen_element():DOMElement
        get_webkit_fullscreen_enabled():boolean
        get_webkit_hidden():boolean
        get_webkit_is_full_screen():boolean
        get_webkit_pointer_lock_element():DOMElement
        get_webkit_visibility_state():string
        get_xml_encoding():string
        get_xml_standalone():boolean
        get_xml_version():string
        import_node(importedNode: DOMNode, deep: boolean):DOMNode
        query_command_enabled(command: string):boolean
        query_command_indeterm(command: string):boolean
        query_command_state(command: string):boolean
        query_command_supported(command: string):boolean
        query_command_value(command: string):string
        query_selector(selectors: string):DOMElement
        query_selector_all(selectors: string):DOMNodeList
        set_body(value: DOMHTMLElement):void
        set_charset(value: string):void
        set_cookie(value: string):void
        set_document_uri(value: string):void
        set_selected_stylesheet_set(value: string):void
        set_title(value: string):void
        set_xml_standalone(value: boolean):void
        set_xml_version(value: string):void
        webkit_cancel_full_screen():void
        webkit_exit_fullscreen():void
        webkit_exit_pointer_lock():void
        webkit_get_named_flows():DOMDOMNamedFlowCollection
    }
    export class DOMDocumentFragment extends DOMNode {
        query_selector(selectors: string):DOMElement
        query_selector_all(selectors: string):DOMNodeList
    }
    export class DOMDocumentType extends DOMNode {
        get_entities():DOMNamedNodeMap
        get_internal_subset():string
        get_name():string
        get_notations():DOMNamedNodeMap
        get_public_id():string
        get_system_id():string
        remove():void
    }
    export class DOMElement extends DOMNode {
        blur():void
        focus():void
        get_attribute(name: string):string
        get_attribute_node(name: string):DOMAttr
        get_attribute_node_ns(namespaceURI: string, localName: string):DOMAttr
        get_attribute_ns(namespaceURI: string, localName: string):string
        get_attributes():DOMNamedNodeMap
        get_child_element_count():number
        get_class_list():DOMDOMTokenList
        get_class_name():string
        get_client_height():number
        get_client_left():number
        get_client_top():number
        get_client_width():number
        get_elements_by_class_name(name: string):DOMNodeList
        get_elements_by_tag_name(name: string):DOMNodeList
        get_elements_by_tag_name_ns(namespaceURI: string, localName: string):DOMNodeList
        get_first_element_child():DOMElement
        get_id():string
        get_last_element_child():DOMElement
        get_next_element_sibling():DOMElement
        get_offset_height():number
        get_offset_left():number
        get_offset_parent():DOMElement
        get_offset_top():number
        get_offset_width():number
        get_previous_element_sibling():DOMElement
        get_scroll_height():number
        get_scroll_left():number
        get_scroll_top():number
        get_scroll_width():number
        get_style():DOMCSSStyleDeclaration
        get_tag_name():string
        get_webkit_region_overflow():string
        get_webkit_region_overset():string
        has_attribute(name: string):boolean
        has_attribute_ns(namespaceURI: string, localName: string):boolean
        has_attributes():boolean
        query_selector(selectors: string):DOMElement
        query_selector_all(selectors: string):DOMNodeList
        remove(index?: number):void

        remove_attribute(name: string):void
        remove_attribute_node(oldAttr: DOMAttr):DOMAttr
        remove_attribute_ns(namespaceURI: string, localName: string):void
        scroll_by_lines(lines: number):void
        scroll_by_pages(pages: number):void
        scroll_into_view(alignWithTop: boolean):void
        scroll_into_view_if_needed(centerIfNeeded: boolean):void
        set_attribute(name: string, value: string):void
        set_attribute_node(newAttr: DOMAttr):DOMAttr
        set_attribute_node_ns(newAttr: DOMAttr):DOMAttr
        set_attribute_ns(namespaceURI: string, qualifiedName: string, value: string):void
        set_class_name(value: string):void
        set_id(value: string):void
        set_scroll_left(value: number):void
        set_scroll_top(value: number):void
        webkit_matches_selector(selectors: string):boolean
        webkit_request_full_screen(flags: number):void
        webkit_request_fullscreen():void
        webkit_request_pointer_lock():void
    }
    export class DOMEntityReference extends DOMNode {
    }
    export class DOMEvent extends DOMObject {
        get_bubbles():boolean
        get_cancel_bubble():boolean
        get_cancelable():boolean
        get_current_target():any
        get_default_prevented():boolean
        get_event_phase():number
        get_return_value():boolean
        get_src_element():any
        get_target():any
        get_time_stamp():number
        init_event(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean):void
        prevent_default():void
        set_cancel_bubble(value: boolean):void
        set_return_value(value: boolean):void
        stop_immediate_propagation():void
        stop_propagation():void
    }
    export class DOMFile extends DOMBlob {
        get_name():string
        get_webkit_relative_path():string
    }
    export class DOMFileList extends DOMObject {
        get_length():number
        item(index: number):DOMFile
    }
    export class DOMGamepad extends DOMObject {
        get_id():string
        get_index():number
        get_timestamp():number
    }
    export class DOMGamepadList extends DOMObject {
        get_length():number
        item(index: number):DOMGamepad
    }
    export class DOMGeolocation extends DOMObject {
        clear_watch(watchID: number):void
    }
    export class DOMHTMLAnchorElement extends DOMHTMLElement {
        get_charset():string
        get_coords():string
        get_download():string
        get_hash():string
        get_host():string
        get_hostname():string
        get_href():string
        get_hreflang():string
        get_name():string
        get_origin():string
        get_pathname():string
        get_ping():string
        get_port():string
        get_protocol():string
        get_rel():string
        get_rev():string
        get_search():string
        get_shape():string
        get_target():string
        get_text():string
        set_charset(value: string):void
        set_coords(value: string):void
        set_download(value: string):void
        set_hash(value: string):void
        set_host(value: string):void
        set_hostname(value: string):void
        set_href(value: string):void
        set_hreflang(value: string):void
        set_name(value: string):void
        set_pathname(value: string):void
        set_ping(value: string):void
        set_port(value: string):void
        set_protocol(value: string):void
        set_rel(value: string):void
        set_rev(value: string):void
        set_search(value: string):void
        set_shape(value: string):void
        set_target(value: string):void
    }
    export class DOMHTMLAppletElement extends DOMHTMLElement {
        get_align():string
        get_alt():string
        get_archive():string
        get_code():string
        get_code_base():string
        get_height():string
        get_hspace():number
        get_name():string
        get_object():string
        get_vspace():number
        get_width():string
        set_align(value: string):void
        set_alt(value: string):void
        set_archive(value: string):void
        set_code(value: string):void
        set_code_base(value: string):void
        set_height(value: string):void
        set_hspace(value: number):void
        set_name(value: string):void
        set_object(value: string):void
        set_vspace(value: number):void
        set_width(value: string):void
    }
    export class DOMHTMLAreaElement extends DOMHTMLElement {
        get_alt():string
        get_coords():string
        get_hash():string
        get_host():string
        get_hostname():string
        get_href():string
        get_no_href():boolean
        get_pathname():string
        get_ping():string
        get_port():string
        get_protocol():string
        get_search():string
        get_shape():string
        get_target():string
        set_alt(value: string):void
        set_coords(value: string):void
        set_href(value: string):void
        set_no_href(value: boolean):void
        set_ping(value: string):void
        set_shape(value: string):void
        set_target(value: string):void
    }
    export class DOMHTMLAudioElement extends DOMHTMLMediaElement {
    }
    export class DOMHTMLBRElement extends DOMHTMLElement {
        get_clear():string
        set_clear(value: string):void
    }
    export class DOMHTMLBaseElement extends DOMHTMLElement {
        get_href():string
        get_target():string
        set_href(value: string):void
        set_target(value: string):void
    }
    export class DOMHTMLBaseFontElement extends DOMHTMLElement {
        get_color():string
        get_face():string
        get_size():number
        set_color(value: string):void
        set_face(value: string):void
        set_size(value: number):void
    }
    export class DOMHTMLBodyElement extends DOMHTMLElement {
        get_a_link():string
        get_background():string
        get_bg_color():string
        get_link():string
        get_text():string
        get_v_link():string
        set_a_link(value: string):void
        set_background(value: string):void
        set_bg_color(value: string):void
        set_link(value: string):void
        set_text(value: string):void
        set_v_link(value: string):void
    }
    export class DOMHTMLButtonElement extends DOMHTMLElement {
        check_validity():boolean
        get_autofocus():boolean
        get_disabled():boolean
        get_form():DOMHTMLFormElement
        get_form_action():string
        get_form_enctype():string
        get_form_method():string
        get_form_no_validate():boolean
        get_form_target():string
        get_labels():DOMNodeList
        get_name():string
        get_validation_message():string
        get_validity():DOMValidityState
        get_value():string
        get_will_validate():boolean
        set_autofocus(value: boolean):void
        set_custom_validity(error: string):void
        set_disabled(value: boolean):void
        set_form_action(value: string):void
        set_form_enctype(value: string):void
        set_form_method(value: string):void
        set_form_no_validate(value: boolean):void
        set_form_target(value: string):void
        set_name(value: string):void
        set_value(value: string):void
    }
    export class DOMHTMLCanvasElement extends DOMHTMLElement {
        get_height():number
        get_width():number
        set_height(value: number):void
        set_width(value: number):void
    }
    export class DOMHTMLCollection extends DOMObject {
        get_length():number
        item(index: number):DOMNode
        named_item(name: string):DOMNode
    }
    export class DOMHTMLDListElement extends DOMHTMLElement {
        get_compact():boolean
        set_compact(value: boolean):void
    }
    export class DOMHTMLDetailsElement extends DOMHTMLElement {
        get_open():boolean
        set_open(value: boolean):void
    }
    export class DOMHTMLDirectoryElement extends DOMHTMLElement {
        get_compact():boolean
        set_compact(value: boolean):void
    }
    export class DOMHTMLDivElement extends DOMHTMLElement {
        get_align():string
        set_align(value: string):void
    }
    export class DOMHTMLDocument extends DOMDocument {
        capture_events():void
        clear():void
        close():void
        get_active_element():DOMElement
        get_alink_color():string
        get_bg_color():string
        get_compat_mode():string
        get_design_mode():string
        get_dir():string
        get_embeds():DOMHTMLCollection
        get_fg_color():string
        get_height():number
        get_link_color():string
        get_plugins():DOMHTMLCollection
        get_scripts():DOMHTMLCollection
        get_vlink_color():string
        get_width():number
        has_focus():boolean
        open():void
        release_events():void
        set_alink_color(value: string):void
        set_bg_color(value: string):void
        set_design_mode(value: string):void
        set_dir(value: string):void
        set_fg_color(value: string):void
        set_link_color(value: string):void
        set_vlink_color(value: string):void
    }
    export class DOMHTMLElement extends DOMElement {
        click():void
        get_access_key():string
        get_children():DOMHTMLCollection
        get_class_list():DOMDOMTokenList
        get_class_name():string
        get_content_editable():string
        get_dir():string
        get_draggable():boolean
        get_hidden():boolean
        get_id():string
        get_inner_html():string
        get_inner_text():string
        get_is_content_editable():boolean
        get_item_id():string
        get_item_prop():DOMDOMSettableTokenList
        get_item_ref():DOMDOMSettableTokenList
        get_item_scope():boolean
        get_item_type():any
        get_lang():string
        get_outer_html():string
        get_outer_text():string
        get_spellcheck():boolean
        get_tab_index():number
        get_title():string
        get_translate():boolean
        get_webkitdropzone():string
        insert_adjacent_element(where: string, element: DOMElement):DOMElement
        insert_adjacent_html(where: string, html: string):void
        insert_adjacent_text(where: string, text: string):void
        set_access_key(value: string):void
        set_class_name(value: string):void
        set_content_editable(value: string):void
        set_dir(value: string):void
        set_draggable(value: boolean):void
        set_hidden(value: boolean):void
        set_id(value: string):void
        set_inner_html(value: string):void
        set_inner_text(value: string):void
        set_item_id(value: string):void
        set_item_scope(value: boolean):void
        set_lang(value: string):void
        set_outer_html(value: string):void
        set_outer_text(value: string):void
        set_spellcheck(value: boolean):void
        set_tab_index(value: number):void
        set_title(value: string):void
        set_translate(value: boolean):void
        set_webkitdropzone(value: string):void
    }
    export class DOMHTMLEmbedElement extends DOMHTMLElement {
        get_align():string
        get_height():number
        get_name():string
        get_src():string
        get_width():number
        set_align(value: string):void
        set_height(value: number):void
        set_name(value: string):void
        set_src(value: string):void
        set_width(value: number):void
    }
    export class DOMHTMLFieldSetElement extends DOMHTMLElement {
        check_validity():boolean
        get_disabled():boolean
        get_elements():DOMHTMLCollection
        get_form():DOMHTMLFormElement
        get_name():string
        get_validation_message():string
        get_validity():DOMValidityState
        get_will_validate():boolean
        set_custom_validity(error: string):void
        set_disabled(value: boolean):void
        set_name(value: string):void
    }
    export class DOMHTMLFontElement extends DOMHTMLElement {
        get_color():string
        get_face():string
        get_size():string
        set_color(value: string):void
        set_face(value: string):void
        set_size(value: string):void
    }
    export class DOMHTMLFormElement extends DOMHTMLElement {
        check_validity():boolean
        dispatch_form_change():void
        dispatch_form_input():void
        get_accept_charset():string
        get_action():string
        get_autocapitalize():string
        get_autocomplete():string
        get_autocorrect():boolean
        get_elements():DOMHTMLCollection
        get_encoding():string
        get_enctype():string
        get_length():number
        get_method():string
        get_name():string
        get_no_validate():boolean
        get_target():string
        reset():void
        set_accept_charset(value: string):void
        set_action(value: string):void
        set_autocapitalize(value: string):void
        set_autocomplete(value: string):void
        set_autocorrect(value: boolean):void
        set_encoding(value: string):void
        set_enctype(value: string):void
        set_method(value: string):void
        set_name(value: string):void
        set_no_validate(value: boolean):void
        set_target(value: string):void
        submit():void
    }
    export class DOMHTMLFrameElement extends DOMHTMLElement {
        get_content_document():DOMDocument
        get_content_window():DOMDOMWindow
        get_frame_border():string
        get_height():number
        get_long_desc():string
        get_margin_height():string
        get_margin_width():string
        get_name():string
        get_no_resize():boolean
        get_scrolling():string
        get_src():string
        get_width():number
        set_frame_border(value: string):void
        set_long_desc(value: string):void
        set_margin_height(value: string):void
        set_margin_width(value: string):void
        set_name(value: string):void
        set_no_resize(value: boolean):void
        set_scrolling(value: string):void
        set_src(value: string):void
    }
    export class DOMHTMLFrameSetElement extends DOMHTMLElement {
        get_cols():string
        get_rows():string
        set_cols(value: string):void
        set_rows(value: string):void
    }
    export class DOMHTMLHRElement extends DOMHTMLElement {
        get_align():string
        get_no_shade():boolean
        get_size():string
        get_width():string
        set_align(value: string):void
        set_no_shade(value: boolean):void
        set_size(value: string):void
        set_width(value: string):void
    }
    export class DOMHTMLHeadElement extends DOMHTMLElement {
        get_profile():string
        set_profile(value: string):void
    }
    export class DOMHTMLHeadingElement extends DOMHTMLElement {
        get_align():string
        set_align(value: string):void
    }
    export class DOMHTMLHtmlElement extends DOMHTMLElement {
        get_manifest():string
        get_version():string
        set_manifest(value: string):void
        set_version(value: string):void
    }
    export class DOMHTMLIFrameElement extends DOMHTMLElement {
        get_align():string
        get_content_document():DOMDocument
        get_content_window():DOMDOMWindow
        get_frame_border():string
        get_height():string
        get_long_desc():string
        get_margin_height():string
        get_margin_width():string
        get_name():string
        get_sandbox():string
        get_scrolling():string
        get_seamless():boolean
        get_src():string
        get_srcdoc():string
        get_width():string
        set_align(value: string):void
        set_frame_border(value: string):void
        set_height(value: string):void
        set_long_desc(value: string):void
        set_margin_height(value: string):void
        set_margin_width(value: string):void
        set_name(value: string):void
        set_sandbox(value: string):void
        set_scrolling(value: string):void
        set_seamless(value: boolean):void
        set_src(value: string):void
        set_srcdoc(value: string):void
        set_width(value: string):void
    }
    export class DOMHTMLImageElement extends DOMHTMLElement {
        get_align():string
        get_alt():string
        get_border():string
        get_complete():boolean
        get_cross_origin():string
        get_height():number
        get_hspace():number
        get_is_map():boolean
        get_long_desc():string
        get_lowsrc():string
        get_name():string
        get_natural_height():number
        get_natural_width():number
        get_src():string
        get_srcset():string
        get_use_map():string
        get_vspace():number
        get_width():number
        get_x():number
        get_y():number
        set_align(value: string):void
        set_alt(value: string):void
        set_border(value: string):void
        set_cross_origin(value: string):void
        set_height(value: number):void
        set_hspace(value: number):void
        set_is_map(value: boolean):void
        set_long_desc(value: string):void
        set_lowsrc(value: string):void
        set_name(value: string):void
        set_src(value: string):void
        set_srcset(value: string):void
        set_use_map(value: string):void
        set_vspace(value: number):void
        set_width(value: number):void
    }
    export class DOMHTMLInputElement extends DOMHTMLElement {
        check_validity():boolean
        get_accept():string
        get_align():string
        get_alt():string
        get_autocapitalize():string
        get_autocomplete():string
        get_autocorrect():boolean
        get_autofocus():boolean
        get_capture():string
        get_checked():boolean
        get_default_checked():boolean
        get_default_value():string
        get_dir_name():string
        get_disabled():boolean
        get_files():DOMFileList
        get_form():DOMHTMLFormElement
        get_form_action():string
        get_form_enctype():string
        get_form_method():string
        get_form_no_validate():boolean
        get_form_target():string
        get_height():number
        get_incremental():boolean
        get_indeterminate():boolean
        get_labels():DOMNodeList
        get_list():DOMHTMLElement
        get_max():string
        get_max_length():number
        get_min():string
        get_multiple():boolean
        get_name():string
        get_pattern():string
        get_placeholder():string
        get_read_only():boolean
        get_required():boolean
        get_size():number
        get_src():string
        get_step():string
        get_use_map():string
        get_validation_message():string
        get_validity():DOMValidityState
        get_value():string
        get_value_as_number():number
        get_webkit_grammar():boolean
        get_webkit_speech():boolean
        get_webkitdirectory():boolean
        get_width():number
        get_will_validate():boolean
        is_edited():boolean
        select():void
        set_accept(value: string):void
        set_align(value: string):void
        set_alt(value: string):void
        set_autocapitalize(value: string):void
        set_autocomplete(value: string):void
        set_autocorrect(value: boolean):void
        set_autofocus(value: boolean):void
        set_capture(value: string):void
        set_checked(value: boolean):void
        set_custom_validity(error: string):void
        set_default_checked(value: boolean):void
        set_default_value(value: string):void
        set_dir_name(value: string):void
        set_disabled(value: boolean):void
        set_files(value: DOMFileList):void
        set_form_action(value: string):void
        set_form_enctype(value: string):void
        set_form_method(value: string):void
        set_form_no_validate(value: boolean):void
        set_form_target(value: string):void
        set_height(value: number):void
        set_incremental(value: boolean):void
        set_indeterminate(value: boolean):void
        set_max(value: string):void
        set_max_length(value: number):void
        set_min(value: string):void
        set_multiple(value: boolean):void
        set_name(value: string):void
        set_pattern(value: string):void
        set_placeholder(value: string):void
        set_range_text(replacement: string, start: number, end: number, selectionMode: string):void
        set_read_only(value: boolean):void
        set_required(value: boolean):void
        set_size(value: number):void
        set_src(value: string):void
        set_step(value: string):void
        set_use_map(value: string):void
        set_value(value: string):void
        set_value_as_number(value: number):void
        set_value_for_user(value: string):void
        set_webkit_grammar(value: boolean):void
        set_webkit_speech(value: boolean):void
        set_webkitdirectory(value: boolean):void
        set_width(value: number):void
        step_down(n: number):void
        step_up(n: number):void
    }
    export class DOMHTMLKeygenElement extends DOMHTMLElement {
        check_validity():boolean
        get_autofocus():boolean
        get_challenge():string
        get_disabled():boolean
        get_form():DOMHTMLFormElement
        get_keytype():string
        get_labels():DOMNodeList
        get_name():string
        get_validation_message():string
        get_validity():DOMValidityState
        get_will_validate():boolean
        set_autofocus(value: boolean):void
        set_challenge(value: string):void
        set_custom_validity(error: string):void
        set_disabled(value: boolean):void
        set_keytype(value: string):void
        set_name(value: string):void
    }
    export class DOMHTMLLIElement extends DOMHTMLElement {
        get_value():number
        set_value(value: number):void
    }
    export class DOMHTMLLabelElement extends DOMHTMLElement {
        get_control():DOMHTMLElement
        get_form():DOMHTMLFormElement
        get_html_for():string
        set_html_for(value: string):void
    }
    export class DOMHTMLLegendElement extends DOMHTMLElement {
        get_align():string
        get_form():DOMHTMLFormElement
        set_align(value: string):void
    }
    export class DOMHTMLLinkElement extends DOMHTMLElement {
        get_charset():string
        get_disabled():boolean
        get_href():string
        get_hreflang():string
        get_media():string
        get_rel():string
        get_rev():string
        get_sheet():DOMStyleSheet
        get_target():string
        set_charset(value: string):void
        set_disabled(value: boolean):void
        set_href(value: string):void
        set_hreflang(value: string):void
        set_media(value: string):void
        set_rel(value: string):void
        set_rev(value: string):void
        set_target(value: string):void
    }
    export class DOMHTMLMapElement extends DOMHTMLElement {
        get_areas():DOMHTMLCollection
        get_name():string
        set_name(value: string):void
    }
    export class DOMHTMLMarqueeElement extends DOMHTMLElement {
        get_behavior():string
        get_bg_color():string
        get_direction():string
        get_height():string
        get_hspace():number
        get_loop():number
        get_scroll_amount():number
        get_scroll_delay():number
        get_true_speed():boolean
        get_vspace():number
        get_width():string
        set_behavior(value: string):void
        set_bg_color(value: string):void
        set_direction(value: string):void
        set_height(value: string):void
        set_hspace(value: number):void
        set_loop(value: number):void
        set_scroll_amount(value: number):void
        set_scroll_delay(value: number):void
        set_true_speed(value: boolean):void
        set_vspace(value: number):void
        set_width(value: string):void
        start():void
        stop():void
    }
    export class DOMHTMLMediaElement extends DOMHTMLElement {
        add_text_track(kind: string, label: string, language: string):DOMTextTrack
        can_play_type(type: string):string
        fast_seek(time: number):void
        get_audio_tracks():DOMAudioTrackList
        get_autoplay():boolean
        get_buffered():DOMTimeRanges
        get_controller():DOMMediaController
        get_controls():boolean
        get_current_src():string
        get_current_time():number
        get_default_muted():boolean
        get_default_playback_rate():number
        get_duration():number
        get_ended():boolean
        get_error():DOMMediaError
        get_initial_time():number
        get_loop():boolean
        get_media_group():string
        get_muted():boolean
        get_network_state():number
        get_paused():boolean
        get_playback_rate():number
        get_played():DOMTimeRanges
        get_preload():string
        get_ready_state():number
        get_seekable():DOMTimeRanges
        get_seeking():boolean
        get_src():string
        get_start_time():number
        get_text_tracks():DOMTextTrackList
        get_video_tracks():DOMVideoTrackList
        get_volume():number
        get_webkit_audio_decoded_byte_count():number
        get_webkit_closed_captions_visible():boolean
        get_webkit_current_playback_target_is_wireless():boolean
        get_webkit_has_closed_captions():boolean
        get_webkit_preserves_pitch():boolean
        get_webkit_video_decoded_byte_count():number
        load():void
        pause():void
        play():void
        set_autoplay(value: boolean):void
        set_controls(value: boolean):void
        set_current_time(value: number):void
        set_default_muted(value: boolean):void
        set_default_playback_rate(value: number):void
        set_loop(value: boolean):void
        set_media_group(value: string):void
        set_muted(value: boolean):void
        set_playback_rate(value: number):void
        set_preload(value: string):void
        set_src(value: string):void
        set_volume(value: number):void
        set_webkit_closed_captions_visible(value: boolean):void
        set_webkit_preserves_pitch(value: boolean):void
        webkit_show_playback_target_picker():void
    }
    export class DOMHTMLMenuElement extends DOMHTMLElement {
        get_compact():boolean
        set_compact(value: boolean):void
    }
    export class DOMHTMLMetaElement extends DOMHTMLElement {
        get_content():string
        get_http_equiv():string
        get_name():string
        get_scheme():string
        set_content(value: string):void
        set_http_equiv(value: string):void
        set_name(value: string):void
        set_scheme(value: string):void
    }
    export class DOMHTMLModElement extends DOMHTMLElement {
        get_cite():string
        get_date_time():string
        set_cite(value: string):void
        set_date_time(value: string):void
    }
    export class DOMHTMLOListElement extends DOMHTMLElement {
        get_compact():boolean
        get_reversed():boolean
        get_start():number
        set_compact(value: boolean):void
        set_reversed(value: boolean):void
        set_start(value: number):void
    }
    export class DOMHTMLObjectElement extends DOMHTMLElement {
        check_validity():boolean
        get_align():string
        get_archive():string
        get_border():string
        get_code():string
        get_code_base():string
        get_code_type():string
        get_content_document():DOMDocument
        get_data():string
        get_declare():boolean
        get_form():DOMHTMLFormElement
        get_height():string
        get_hspace():number
        get_name():string
        get_standby():string
        get_use_map():string
        get_validation_message():string
        get_validity():DOMValidityState
        get_vspace():number
        get_width():string
        get_will_validate():boolean
        set_align(value: string):void
        set_archive(value: string):void
        set_border(value: string):void
        set_code(value: string):void
        set_code_base(value: string):void
        set_code_type(value: string):void
        set_custom_validity(error: string):void
        set_data(value: string):void
        set_declare(value: boolean):void
        set_height(value: string):void
        set_hspace(value: number):void
        set_name(value: string):void
        set_standby(value: string):void
        set_use_map(value: string):void
        set_vspace(value: number):void
        set_width(value: string):void
    }
    export class DOMHTMLOptGroupElement extends DOMHTMLElement {
        get_disabled():boolean
        get_label():string
        set_disabled(value: boolean):void
        set_label(value: string):void
    }
    export class DOMHTMLOptionElement extends DOMHTMLElement {
        get_default_selected():boolean
        get_disabled():boolean
        get_form():DOMHTMLFormElement
        get_index():number
        get_label():string
        get_selected():boolean
        get_text():string
        get_value():string
        set_default_selected(value: boolean):void
        set_disabled(value: boolean):void
        set_label(value: string):void
        set_selected(value: boolean):void
        set_value(value: string):void
    }
    export class DOMHTMLOptionsCollection extends DOMHTMLCollection {
        get_length():number
        get_selected_index():number
        named_item(name: string):DOMNode
        set_selected_index(value: number):void
    }
    export class DOMHTMLParagraphElement extends DOMHTMLElement {
        get_align():string
        set_align(value: string):void
    }
    export class DOMHTMLParamElement extends DOMHTMLElement {
        get_name():string
        get_value():string
        get_value_type():string
        set_name(value: string):void
        set_value(value: string):void
        set_value_type(value: string):void
    }
    export class DOMHTMLPreElement extends DOMHTMLElement {
        get_width():number
        get_wrap():boolean
        set_width(value: number):void
        set_wrap(value: boolean):void
    }
    export class DOMHTMLPropertiesCollection extends DOMHTMLCollection {
        static get_length(self: any):number
        static get_names(self: any):DOMDOMStringList
        static item(self: any, index: number):DOMNode
        static named_item(self: any, name: string):any
    }
    export class DOMHTMLQuoteElement extends DOMHTMLElement {
        get_cite():string
        set_cite(value: string):void
    }
    export class DOMHTMLScriptElement extends DOMHTMLElement {
        get_async():boolean
        get_charset():string
        get_cross_origin():string
        get_defer():boolean
        get_event():string
        get_html_for():string
        get_nonce():string
        get_src():string
        get_text():string
        set_async(value: boolean):void
        set_charset(value: string):void
        set_cross_origin(value: string):void
        set_defer(value: boolean):void
        set_event(value: string):void
        set_html_for(value: string):void
        set_nonce(value: string):void
        set_src(value: string):void
        set_text(value: string):void
    }
    export class DOMHTMLSelectElement extends DOMHTMLElement {
        add(element: DOMHTMLElement, before: DOMHTMLElement):void
        check_validity():boolean
        get_autofocus():boolean
        get_disabled():boolean
        get_form():DOMHTMLFormElement
        get_labels():DOMNodeList
        get_length():number
        get_multiple():boolean
        get_name():string
        get_options():DOMHTMLOptionsCollection
        get_required():boolean
        get_selected_index():number
        get_selected_options():DOMHTMLCollection
        get_size():number
        get_validation_message():string
        get_validity():DOMValidityState
        get_value():string
        get_will_validate():boolean
        item(index: number):DOMNode
        named_item(name: string):DOMNode
        remove(index?: number):void

        set_autofocus(value: boolean):void
        set_custom_validity(error: string):void
        set_disabled(value: boolean):void
        set_length(value: number):void
        set_multiple(value: boolean):void
        set_name(value: string):void
        set_required(value: boolean):void
        set_selected_index(value: number):void
        set_size(value: number):void
        set_value(value: string):void
    }
    export class DOMHTMLStyleElement extends DOMHTMLElement {
        get_disabled():boolean
        get_media():string
        get_scoped():boolean
        get_sheet():DOMStyleSheet
        set_disabled(value: boolean):void
        set_media(value: string):void
        set_scoped(value: boolean):void
    }
    export class DOMHTMLTableCaptionElement extends DOMHTMLElement {
        get_align():string
        set_align(value: string):void
    }
    export class DOMHTMLTableCellElement extends DOMHTMLElement {
        get_abbr():string
        get_align():string
        get_axis():string
        get_bg_color():string
        get_cell_index():number
        get_ch():string
        get_ch_off():string
        get_col_span():number
        get_headers():string
        get_height():string
        get_no_wrap():boolean
        get_row_span():number
        get_scope():string
        get_v_align():string
        get_width():string
        set_abbr(value: string):void
        set_align(value: string):void
        set_axis(value: string):void
        set_bg_color(value: string):void
        set_ch(value: string):void
        set_ch_off(value: string):void
        set_col_span(value: number):void
        set_headers(value: string):void
        set_height(value: string):void
        set_no_wrap(value: boolean):void
        set_row_span(value: number):void
        set_scope(value: string):void
        set_v_align(value: string):void
        set_width(value: string):void
    }
    export class DOMHTMLTableColElement extends DOMHTMLElement {
        get_align():string
        get_ch():string
        get_ch_off():string
        get_span():number
        get_v_align():string
        get_width():string
        set_align(value: string):void
        set_ch(value: string):void
        set_ch_off(value: string):void
        set_span(value: number):void
        set_v_align(value: string):void
        set_width(value: string):void
    }
    export class DOMHTMLTableElement extends DOMHTMLElement {
        create_caption():DOMHTMLElement
        create_t_body():DOMHTMLElement
        create_t_foot():DOMHTMLElement
        create_t_head():DOMHTMLElement
        delete_caption():void
        delete_row(index: number):void
        delete_t_foot():void
        delete_t_head():void
        get_align():string
        get_bg_color():string
        get_border():string
        get_caption():DOMHTMLTableCaptionElement
        get_cell_padding():string
        get_cell_spacing():string
        get_frame():string
        get_rows():DOMHTMLCollection
        get_rules():string
        get_summary():string
        get_t_bodies():DOMHTMLCollection
        get_t_foot():DOMHTMLTableSectionElement
        get_t_head():DOMHTMLTableSectionElement
        get_width():string
        insert_row(index: number):DOMHTMLElement
        set_align(value: string):void
        set_bg_color(value: string):void
        set_border(value: string):void
        set_caption(value: DOMHTMLTableCaptionElement):void
        set_cell_padding(value: string):void
        set_cell_spacing(value: string):void
        set_frame(value: string):void
        set_rules(value: string):void
        set_summary(value: string):void
        set_t_foot(value: DOMHTMLTableSectionElement):void
        set_t_head(value: DOMHTMLTableSectionElement):void
        set_width(value: string):void
    }
    export class DOMHTMLTableRowElement extends DOMHTMLElement {
        delete_cell(index: number):void
        get_align():string
        get_bg_color():string
        get_cells():DOMHTMLCollection
        get_ch():string
        get_ch_off():string
        get_row_index():number
        get_section_row_index():number
        get_v_align():string
        insert_cell(index: number):DOMHTMLElement
        set_align(value: string):void
        set_bg_color(value: string):void
        set_ch(value: string):void
        set_ch_off(value: string):void
        set_v_align(value: string):void
    }
    export class DOMHTMLTableSectionElement extends DOMHTMLElement {
        delete_row(index: number):void
        get_align():string
        get_ch():string
        get_ch_off():string
        get_rows():DOMHTMLCollection
        get_v_align():string
        insert_row(index: number):DOMHTMLElement
        set_align(value: string):void
        set_ch(value: string):void
        set_ch_off(value: string):void
        set_v_align(value: string):void
    }
    export class DOMHTMLTextAreaElement extends DOMHTMLElement {
        check_validity():boolean
        get_autocapitalize():string
        get_autocorrect():boolean
        get_autofocus():boolean
        get_cols():number
        get_default_value():string
        get_dir_name():string
        get_disabled():boolean
        get_form():DOMHTMLFormElement
        get_labels():DOMNodeList
        get_max_length():number
        get_name():string
        get_placeholder():string
        get_read_only():boolean
        get_required():boolean
        get_rows():number
        get_selection_direction():string
        get_selection_end():number
        get_selection_start():number
        get_text_length():number
        get_validation_message():string
        get_validity():DOMValidityState
        get_value():string
        get_will_validate():boolean
        get_wrap():string
        is_edited():boolean
        select():void
        set_autocapitalize(value: string):void
        set_autocorrect(value: boolean):void
        set_autofocus(value: boolean):void
        set_cols(value: number):void
        set_custom_validity(error: string):void
        set_default_value(value: string):void
        set_dir_name(value: string):void
        set_disabled(value: boolean):void
        set_max_length(value: number):void
        set_name(value: string):void
        set_placeholder(value: string):void
        set_range_text(replacement: string, start: number, end: number, selectionMode: string):void
        set_read_only(value: boolean):void
        set_required(value: boolean):void
        set_rows(value: number):void
        set_selection_direction(value: string):void
        set_selection_end(value: number):void
        set_selection_range(start: number, end: number, direction: string):void
        set_selection_start(value: number):void
        set_value(value: string):void
        set_wrap(value: string):void
    }
    export class DOMHTMLTitleElement extends DOMHTMLElement {
        get_text():string
        set_text(value: string):void
    }
    export class DOMHTMLUListElement extends DOMHTMLElement {
        get_compact():boolean
        set_compact(value: boolean):void
    }
    export class DOMHTMLVideoElement extends DOMHTMLMediaElement {
        get_height():number
        get_poster():string
        get_video_height():number
        get_video_width():number
        get_webkit_decoded_frame_count():number
        get_webkit_displaying_fullscreen():boolean
        get_webkit_dropped_frame_count():number
        get_webkit_supports_fullscreen():boolean
        get_webkit_wireless_video_playback_disabled():boolean
        get_width():number
        set_height(value: number):void
        set_poster(value: string):void
        set_webkit_wireless_video_playback_disabled(value: boolean):void
        set_width(value: number):void
        webkit_enter_full_screen():void
        webkit_enter_fullscreen():void
        webkit_exit_full_screen():void
        webkit_exit_fullscreen():void
    }
    export class DOMHistory extends DOMObject {
        back():void
        forward():void
        get_length():number
        go(distance: number):void
    }
    export class DOMKeyboardEvent extends DOMUIEvent {
        get_alt_graph_key():boolean
        get_alt_key():boolean
        get_ctrl_key():boolean
        get_key_identifier():string
        get_key_location():number
        get_meta_key():boolean
        get_modifier_state(keyIdentifierArg: string):boolean
        get_shift_key():boolean
        init_keyboard_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, keyIdentifier: string, location: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, altGraphKey: boolean):void
    }
    export class DOMLocation extends DOMObject {
        get_ancestor_origins():DOMDOMStringList
        get_hash():string
        get_host():string
        get_hostname():string
        get_href():string
        get_origin():string
        get_pathname():string
        get_port():string
        get_protocol():string
        get_search():string
    }
    export class DOMMediaController extends DOMObject {
        get_buffered():DOMTimeRanges
        get_current_time():number
        get_default_playback_rate():number
        get_duration():number
        get_muted():boolean
        get_paused():boolean
        get_playback_rate():number
        get_playback_state():string
        get_played():DOMTimeRanges
        get_seekable():DOMTimeRanges
        get_volume():number
        pause():void
        play():void
        set_current_time(value: number):void
        set_default_playback_rate(value: number):void
        set_muted(value: boolean):void
        set_playback_rate(value: number):void
        set_volume(value: number):void
        unpause():void
    }
    export class DOMMediaError extends DOMObject {
        get_code():number
    }
    export class DOMMediaList extends DOMObject {
        append_medium(newMedium: string):void
        delete_medium(oldMedium: string):void
        get_length():number
        get_media_text():string
        item(index: number):string
        set_media_text(value: string):void
    }
    export class DOMMediaQueryList extends DOMObject {
        get_matches():boolean
        get_media():string
    }
    export class DOMMemoryInfo extends DOMObject {
        static get_js_heap_size_limit(self: any):number
        static get_total_js_heap_size(self: any):number
        static get_used_js_heap_size(self: any):number
    }
    export class DOMMessagePort extends DOMObject {
    }
    export class DOMMicroDataItemValue extends DOMObject {
    }
    export class DOMMouseEvent extends DOMUIEvent {
        get_alt_key():boolean
        get_button():number
        get_client_x():number
        get_client_y():number
        get_ctrl_key():boolean
        get_from_element():DOMNode
        get_meta_key():boolean
        get_offset_x():number
        get_offset_y():number
        get_related_target():any
        get_screen_x():number
        get_screen_y():number
        get_shift_key():boolean
        get_to_element():DOMNode
        get_webkit_movement_x():number
        get_webkit_movement_y():number
        get_x():number
        get_y():number
        init_mouse_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget: any):void
    }
    export class DOMNamedNodeMap extends DOMObject {
        get_length():number
        get_named_item(name: string):DOMNode
        get_named_item_ns(namespaceURI: string, localName: string):DOMNode
        item(index: number):DOMNode
        remove_named_item(name: string):DOMNode
        remove_named_item_ns(namespaceURI: string, localName: string):DOMNode
        set_named_item(node: DOMNode):DOMNode
        set_named_item_ns(node: DOMNode):DOMNode
    }
    export class DOMNavigator extends DOMObject {
        get_app_code_name():string
        get_app_name():string
        get_app_version():string
        get_cookie_enabled():boolean
        get_geolocation():DOMGeolocation
        get_language():string
        get_mime_types():DOMDOMMimeTypeArray
        get_on_line():boolean
        get_platform():string
        get_plugins():DOMDOMPluginArray
        get_product():string
        get_product_sub():string
        get_storage_updates():void
        get_user_agent():string
        get_vendor():string
        get_vendor_sub():string
        get_webkit_battery():DOMBatteryManager
        get_webkit_persistent_storage():DOMStorageQuota
        get_webkit_temporary_storage():DOMStorageQuota
        is_protocol_handler_registered(scheme: string, url: string):string
        java_enabled():boolean
        register_protocol_handler(scheme: string, url: string, title: string):void
        unregister_protocol_handler(scheme: string, url: string):void
        webkit_get_gamepads():DOMGamepadList
    }
    export class DOMNode extends DOMObject {
        append_child(newChild: DOMNode):DOMNode
        clone_node(deep: boolean):DOMNode
        compare_document_position(other: DOMNode):number
        contains(other: DOMNode):boolean
        dispatch_event(event: DOMEvent):boolean
        get_attributes():DOMNamedNodeMap
        get_base_uri():string
        get_child_nodes():DOMNodeList
        get_first_child():DOMNode
        get_last_child():DOMNode
        get_local_name():string
        get_namespace_uri():string
        get_next_sibling():DOMNode
        get_node_name():string
        get_node_type():number
        get_node_value():string
        get_owner_document():DOMDocument
        get_parent_element():DOMElement
        get_parent_node():DOMNode
        get_prefix():string
        get_previous_sibling():DOMNode
        get_text_content():string
        has_attributes():boolean
        has_child_nodes():boolean
        insert_before(newChild: DOMNode, refChild: DOMNode):DOMNode
        is_default_namespace(namespaceURI: string):boolean
        is_equal_node(other: DOMNode):boolean
        is_same_node(other: DOMNode):boolean
        is_supported(feature: string, version: string):boolean
        lookup_namespace_uri(prefix: string):string
        lookup_prefix(namespaceURI: string):string
        normalize():void
        remove_child(oldChild: DOMNode):DOMNode
        replace_child(newChild: DOMNode, oldChild: DOMNode):DOMNode
        set_node_value(value: string):void
        set_prefix(value: string):void
        set_text_content(value: string):void
    }
    export class DOMNodeFilter extends DOMObject {
        accept_node(n: DOMNode):any
    }
    export class DOMNodeIterator extends DOMObject {
        detach():void
        get_expand_entity_references():boolean
        get_filter():DOMNodeFilter
        get_pointer_before_reference_node():boolean
        get_reference_node():DOMNode
        get_root():DOMNode
        get_what_to_show():number
        next_node():DOMNode
        previous_node():DOMNode
    }
    export class DOMNodeList extends DOMObject {
        get_length():number
        item(index: number):DOMNode
    }
    export class DOMObject extends GObject.Object {
    }
    export class DOMPerformance extends DOMObject {
        get_memory():any
        get_navigation():DOMPerformanceNavigation
        get_timing():DOMPerformanceTiming
        now():number
    }
    export class DOMPerformanceEntry extends DOMObject {
        get_duration():number
        get_entry_type():string
        get_name():string
        get_start_time():number
    }
    export class DOMPerformanceEntryList extends DOMObject {
        get_length():number
        item(index: number):DOMPerformanceEntry
    }
    export class DOMPerformanceNavigation extends DOMObject {
        get_redirect_count():number
    }
    export class DOMPerformanceTiming extends DOMObject {
        get_connect_end():number
        get_connect_start():number
        get_dom_complete():number
        get_dom_content_loaded_event_end():number
        get_dom_content_loaded_event_start():number
        get_dom_interactive():number
        get_dom_loading():number
        get_domain_lookup_end():number
        get_domain_lookup_start():number
        get_fetch_start():number
        get_load_event_end():number
        get_load_event_start():number
        get_navigation_start():number
        get_redirect_end():number
        get_redirect_start():number
        get_request_start():number
        get_response_end():number
        get_response_start():number
        get_secure_connection_start():number
        get_unload_event_end():number
        get_unload_event_start():number
    }
    export class DOMProcessingInstruction extends DOMCharacterData {
        get_data():string
        get_sheet():DOMStyleSheet
        get_target():string
        set_data(value: string):void
    }
    export class DOMPropertyNodeList extends DOMNodeList {
        static get_length(self: any):number
        static item(self: any, index: number):DOMNode
    }
    export class DOMRange extends DOMObject {
        clone_contents():DOMDocumentFragment
        clone_range():DOMRange
        collapse(toStart: boolean):void
        compare_boundary_points(how: number, sourceRange: DOMRange):any
        compare_node(refNode: DOMNode):any
        compare_point(refNode: DOMNode, offset: number):any
        create_contextual_fragment(html: string):DOMDocumentFragment
        delete_contents():void
        detach():void
        expand(unit: string):void
        extract_contents():DOMDocumentFragment
        get_collapsed():boolean
        get_common_ancestor_container():DOMNode
        get_end_container():DOMNode
        get_end_offset():number
        get_start_container():DOMNode
        get_start_offset():number
        get_text():string
        insert_node(newNode: DOMNode):void
        intersects_node(refNode: DOMNode):boolean
        is_point_in_range(refNode: DOMNode, offset: number):boolean
        select_node(refNode: DOMNode):void
        select_node_contents(refNode: DOMNode):void
        set_end(refNode: DOMNode, offset: number):void
        set_end_after(refNode: DOMNode):void
        set_end_before(refNode: DOMNode):void
        set_start(refNode: DOMNode, offset: number):void
        set_start_after(refNode: DOMNode):void
        set_start_before(refNode: DOMNode):void
        surround_contents(newParent: DOMNode):void
        to_string():string
    }
    export class DOMScreen extends DOMObject {
        get_avail_height():number
        get_avail_left():number
        get_avail_top():number
        get_avail_width():number
        get_color_depth():number
        get_height():number
        get_pixel_depth():number
        get_width():number
    }
    export class DOMShadowRoot extends DOMDocumentFragment {
        element_from_point(x: number, y: number):DOMElement
        get_active_element():DOMElement
        get_apply_author_styles():boolean
        get_element_by_id(elementId: string):DOMElement
        get_elements_by_class_name(className: string):DOMNodeList
        get_elements_by_tag_name(tagName: string):DOMNodeList
        get_elements_by_tag_name_ns(namespaceURI: string, localName: string):DOMNodeList
        get_inner_html():string
        get_reset_style_inheritance():boolean
        get_selection():DOMDOMSelection
        set_apply_author_styles(value: boolean):void
        set_inner_html(value: string):void
        set_reset_style_inheritance(value: boolean):void
    }
    export class DOMStorage extends DOMObject {
        clear():void
        get_item(key: string):string
        get_length():number
        key(index: number):string
        remove_item(key: string):void
        set_item(key: string, data: string):void
    }
    export class DOMStorageInfo extends DOMObject {
    }
    export class DOMStorageQuota extends DOMObject {
    }
    export class DOMStyleMedia extends DOMObject {
        match_medium(mediaquery: string):boolean
    }
    export class DOMStyleSheet extends DOMObject {
        get_disabled():boolean
        get_href():string
        get_media():DOMMediaList
        get_owner_node():DOMNode
        get_parent_style_sheet():DOMStyleSheet
        get_title():string
        set_disabled(value: boolean):void
    }
    export class DOMStyleSheetList extends DOMObject {
        get_length():number
        item(index: number):DOMStyleSheet
    }
    export class DOMText extends DOMCharacterData {
        get_whole_text():string
        replace_whole_text(content: string):DOMText
        split_text(offset: number):DOMText
    }
    export class DOMTextTrack extends DOMObject {
        add_cue(cue: DOMTextTrackCue):void
        dispatch_event(evt: DOMEvent):boolean
        get_active_cues():DOMTextTrackCueList
        get_cues():DOMTextTrackCueList
        get_id():string
        get_kind():string
        get_label():string
        get_language():string
        get_mode():string
        remove_cue(cue: DOMTextTrackCue):void
        set_mode(value: string):void
    }
    export class DOMTextTrackCue extends DOMObject {
        dispatch_event(evt: DOMEvent):boolean
        get_align():string
        get_cue_as_html():DOMDocumentFragment
        get_end_time():number
        get_id():string
        get_line():number
        get_pause_on_exit():boolean
        get_position():number
        get_size():number
        get_snap_to_lines():boolean
        get_start_time():number
        get_text():string
        get_track():DOMTextTrack
        get_vertical():string
        set_align(value: string):void
        set_end_time(value: number):void
        set_id(value: string):void
        set_line(value: number):void
        set_pause_on_exit(value: boolean):void
        set_position(value: number):void
        set_size(value: number):void
        set_snap_to_lines(value: boolean):void
        set_start_time(value: number):void
        set_text(value: string):void
        set_vertical(value: string):void
    }
    export class DOMTextTrackCueList extends DOMObject {
        get_cue_by_id(id: string):DOMTextTrackCue
        get_length():number
        item(index: number):DOMTextTrackCue
    }
    export class DOMTextTrackList extends DOMObject {
        dispatch_event(evt: DOMEvent):boolean
        get_length():number
        get_track_by_id(id: string):DOMTextTrack
        item(index: number):DOMTextTrack
    }
    export class DOMTimeRanges extends DOMObject {
        end(index: number):number
        get_length():number
        start(index: number):number
    }
    export class DOMTouch extends DOMObject {
        get_client_x():number
        get_client_y():number
        get_identifier():number
        get_page_x():number
        get_page_y():number
        get_screen_x():number
        get_screen_y():number
        get_target():any
        get_webkit_force():number
        get_webkit_radius_x():number
        get_webkit_radius_y():number
        get_webkit_rotation_angle():number
    }
    export class DOMTrackEvent extends DOMEvent {
    }
    export class DOMTreeWalker extends DOMObject {
        first_child():DOMNode
        get_current_node():DOMNode
        get_expand_entity_references():boolean
        get_filter():DOMNodeFilter
        get_root():DOMNode
        get_what_to_show():number
        last_child():DOMNode
        next_node():DOMNode
        next_sibling():DOMNode
        parent_node():DOMNode
        previous_node():DOMNode
        previous_sibling():DOMNode
        set_current_node(value: DOMNode):void
    }
    export class DOMUIEvent extends DOMEvent {
        get_char_code():number
        get_detail():number
        get_key_code():number
        get_layer_x():number
        get_layer_y():number
        get_page_x():number
        get_page_y():number
        get_view():DOMDOMWindow
        get_which():number
        init_ui_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number):void
    }
    export class DOMValidityState extends DOMObject {
        get_bad_input():boolean
        get_custom_error():boolean
        get_pattern_mismatch():boolean
        get_range_overflow():boolean
        get_range_underflow():boolean
        get_step_mismatch():boolean
        get_too_long():boolean
        get_type_mismatch():boolean
        get_valid():boolean
        get_value_missing():boolean
    }
    export class DOMVideoPlaybackQuality extends DOMObject {
        get_corrupted_video_frames():number
        get_creation_time():number
        get_dropped_video_frames():number
        get_total_frame_delay():number
        get_total_video_frames():number
    }
    export class DOMVideoTrack extends DOMObject {
        get_id():string
        get_kind():string
        get_label():string
        get_language():string
        get_selected():boolean
        set_selected(value: boolean):void
    }
    export class DOMVideoTrackList extends DOMObject {
        dispatch_event(evt: DOMEvent):boolean
        get_length():number
        get_track_by_id(id: string):DOMVideoTrack
        item(index: number):DOMVideoTrack
    }
    export class DOMWebKitNamedFlow extends DOMObject {
        dispatch_event(event: DOMEvent):boolean
        get_content():DOMNodeList
        get_content_nodes():DOMNodeList
        get_first_empty_region_index():number
        get_name():string
        get_overflow():boolean
        get_overset():boolean
        get_regions():DOMNodeList
        get_regions_by_content(contentNode: DOMNode):DOMNodeList
        get_regions_by_content_node(content_node: DOMNode):DOMNodeList
    }
    export class DOMWebKitPoint extends DOMObject {
        get_x():number
        get_y():number
        set_x(value: number):void
        set_y(value: number):void
    }
    export class DOMWheelEvent extends DOMMouseEvent {
        get_delta_mode():number
        get_delta_x():number
        get_delta_y():number
        get_delta_z():number
        get_webkit_direction_inverted_from_device():boolean
        get_wheel_delta():number
        get_wheel_delta_x():number
        get_wheel_delta_y():number
        init_wheel_event(wheelDeltaX: number, wheelDeltaY: number, view: DOMDOMWindow, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean):void
    }
    export class DOMXPathExpression extends DOMObject {
        evaluate(contextNode: DOMNode, type: number, inResult: DOMXPathResult):DOMXPathResult
    }
    export class DOMXPathNSResolver extends DOMObject {
        lookup_namespace_uri(prefix: string):string
    }
    export class DOMXPathResult extends DOMObject {
        get_boolean_value():boolean
        get_invalid_iterator_state():boolean
        get_number_value():number
        get_result_type():number
        get_single_node_value():DOMNode
        get_snapshot_length():number
        get_string_value():string
        iterate_next():DOMNode
        snapshot_item(index: number):DOMNode
    }
    export class Download extends GObject.Object {
        constructor(config?: any)
        cancel():void
        get_current_size():number
        get_destination_uri():string
        get_elapsed_time():number
        get_network_request():NetworkRequest
        get_network_response():NetworkResponse
        get_progress():number
        get_status():DownloadStatus
        get_suggested_filename():string
        get_total_size():number
        get_uri():string
        set_destination_uri(destination_uri: string):void
        start():void
    }
    export class FaviconDatabase extends GObject.Object {
        clear():void
        get_favicon_pixbuf(page_uri: string, width: number, height: number, cancellable: Gio.Cancellable, callback: any, user_data: any):void
        get_favicon_pixbuf_finish(result: any):any
        get_favicon_uri(page_uri: string):string
        get_path():string
        set_path(path: string):void
        try_get_favicon_pixbuf(page_uri: string, width: number, height: number):any
    }
    export class FileChooserRequest extends GObject.Object {
        get_mime_types():string[]
        get_mime_types_filter():Gtk.FileFilter
        get_select_multiple():boolean
        get_selected_files():string[]
        select_files(files: string[]):void
    }
    export class GeolocationPolicyDecision extends GObject.Object {
    }
    export class HitTestResult extends GObject.Object {
    }
    export class IconDatabase extends GObject.Object {
        clear():void
        get_icon_pixbuf(page_uri: string):any
        get_icon_uri(page_uri: string):string
        get_path():string
        set_path(path: string):void
    }
    export class NetworkRequest extends GObject.Object {
        constructor(config?: any)
        get_message():any
        get_uri():string
        set_uri(uri: string):void
    }
    export class NetworkResponse extends GObject.Object {
        constructor(config?: any)
        get_message():any
        get_suggested_filename():string
        get_uri():string
        set_uri(uri: string):void
    }
    export class SecurityOrigin extends GObject.Object {
        get_all_web_databases():any
        get_host():string
        get_port():number
        get_protocol():string
        get_web_database_quota():number
        get_web_database_usage():number
        set_web_database_quota(quota: number):void
    }
    export class SoupAuthDialog extends GObject.Object {
    }
    export class ViewportAttributes extends GObject.Object {
        recompute():void
    }
    export class WebBackForwardList extends GObject.Object {
        constructor(config?: any)
        static new_with_web_view(web_view: WebView):WebBackForwardList
        add_item(history_item: WebHistoryItem):void
        clear():void
        contains_item(history_item: WebHistoryItem):boolean
        get_back_item():WebHistoryItem
        get_back_length():number
        get_back_list_with_limit(limit: number):any
        get_current_item():WebHistoryItem
        get_forward_item():WebHistoryItem
        get_forward_length():number
        get_forward_list_with_limit(limit: number):any
        get_limit():number
        get_nth_item(index: number):WebHistoryItem
        go_back():void
        go_forward():void
        go_to_item(history_item: WebHistoryItem):void
        set_limit(limit: number):void
    }
    export class WebDataSource extends GObject.Object {
        constructor(config?: any)
        static new_with_request(request: NetworkRequest):WebDataSource
        get_data():any
        get_encoding():string
        get_initial_request():NetworkRequest
        get_main_resource():WebResource
        get_request():NetworkRequest
        get_subresources():any
        get_unreachable_uri():string
        get_web_frame():WebFrame
        is_loading():boolean
    }
    export class WebDatabase extends GObject.Object {
        get_display_name():string
        get_expected_size():number
        get_filename():string
        get_name():string
        get_security_origin():SecurityOrigin
        get_size():number
        remove():void
    }
    export class WebFrame extends GObject.Object {
        constructor(config?: any)
        find_frame(name: string):WebFrame
        get_data_source():WebDataSource
        get_dom_document():DOMDocument
        get_global_context():any
        get_horizontal_scrollbar_policy():Gtk.PolicyType
        get_load_status():LoadStatus
        get_name():string
        get_network_response():NetworkResponse
        get_parent():WebFrame
        get_provisional_data_source():WebDataSource
        get_range_for_word_around_caret():DOMRange
        get_security_origin():SecurityOrigin
        get_title():string
        get_uri():string
        get_vertical_scrollbar_policy():Gtk.PolicyType
        get_web_view():WebView
        load_alternate_string(content: string, base_url: string, unreachable_url: string):void
        load_request(request: NetworkRequest):void
        load_string(content: string, mime_type: string, encoding: string, base_uri: string):void
        load_uri(uri: string):void
        print():void
        print_full(operation: Gtk.PrintOperation, action: Gtk.PrintOperationAction):Gtk.PrintOperationResult
        reload():void
        replace_selection(text: string):void
        stop_loading():void
    }
    export class WebHistoryItem extends GObject.Object {
        constructor(config?: any)
        static new_with_data(uri: string, title: string):WebHistoryItem
        copy():WebHistoryItem
        get_alternate_title():string
        get_last_visited_time():number
        get_original_uri():string
        get_title():string
        get_uri():string
        set_alternate_title(title: string):void
    }
    export class WebInspector extends GObject.Object {
        close():void
        get_inspected_uri():string
        get_web_view():WebView
        inspect_coordinates(x: number, y: number):void
        inspect_node(node: DOMNode):void
        show():void
    }
    export class WebNavigationAction extends GObject.Object {
        get_button():number
        get_modifier_state():number
        get_original_uri():string
        get_reason():WebNavigationReason
        get_target_frame():string
        set_original_uri(originalUri: string):void
        set_reason(reason: WebNavigationReason):void
    }
    export class WebPlugin extends GObject.Object {
        get_description():string
        get_enabled():boolean
        get_mimetypes():any
        get_name():string
        get_path():string
        set_enabled(enabled: boolean):void
    }
    export class WebPluginDatabase extends GObject.Object {
        static plugins_list_free(list: any):void
        get_plugin_for_mimetype(mime_type: string):WebPlugin
        get_plugins():any
        refresh():void
    }
    export class WebPolicyDecision extends GObject.Object {
        download():void
        ignore():void
        use():void
    }
    export class WebResource extends GObject.Object {
        constructor(config?: any)
        get_data():any
        get_encoding():string
        get_frame_name():string
        get_mime_type():string
        get_uri():string
    }
    export class WebSettings extends GObject.Object {
        constructor(config?: any)
        copy():WebSettings
        get_user_agent():string
    }
    export class WebView extends Gtk.Container {
        constructor(config?: any)
        can_copy_clipboard():boolean
        can_cut_clipboard():boolean
        can_go_back():boolean
        can_go_back_or_forward(steps: number):boolean
        can_go_forward():boolean
        can_paste_clipboard():boolean
        can_redo():boolean
        can_show_mime_type(mime_type: string):boolean
        can_undo():boolean
        copy_clipboard():void
        cut_clipboard():void
        delete_selection():void
        execute_script(script: string):void
        get_back_forward_list():WebBackForwardList
        get_copy_target_list():any
        get_custom_encoding():string
        get_dom_document():DOMDocument
        get_editable():boolean
        get_encoding():string
        get_focused_frame():WebFrame
        get_full_content_zoom():boolean
        get_hit_test_result(event: any):HitTestResult
        get_icon_pixbuf():any
        get_icon_uri():string
        get_inspector():WebInspector
        get_load_status():LoadStatus
        get_main_frame():WebFrame
        get_paste_target_list():any
        get_progress():number
        get_settings():any

        get_snapshot():any
        get_title():string
        get_transparent():boolean
        get_uri():string
        get_view_mode():WebViewViewMode
        get_view_source_mode():boolean
        get_viewport_attributes():ViewportAttributes
        get_window_features():WebWindowFeatures
        get_zoom_level():number
        go_back():void
        go_back_or_forward(steps: number):void
        go_forward():void
        go_to_back_forward_item(item: WebHistoryItem):boolean
        has_selection():boolean
        load_html_string(content: string, base_uri: string):void
        load_request(request: NetworkRequest):void
        load_string(content: string, mime_type: string, encoding: string, base_uri: string):void
        load_uri(uri: string):void
        mark_text_matches(string: string, case_sensitive: boolean, limit: number):number
        move_cursor(step: Gtk.MovementStep, count: number):void
        open(uri: string):void
        paste_clipboard():void
        redo():void
        reload():void
        reload_bypass_cache():void
        search_text(text: string, case_sensitive: boolean, forward: boolean, wrap: boolean):boolean
        select_all():void
        set_custom_encoding(encoding: string):void
        set_editable(flag: boolean):void
        set_full_content_zoom(full_content_zoom: boolean):void
        set_highlight_text_matches(highlight: boolean):void
        set_maintains_back_forward_list(flag: boolean):void
        set_settings(settings: WebSettings):void
        set_transparent(flag: boolean):void
        set_view_mode(mode: WebViewViewMode):void
        set_view_source_mode(view_source_mode: boolean):void
        set_zoom_level(zoom_level: number):void
        stop_loading():void
        try_get_favicon_pixbuf(width: number, height: number):any
        undo():void
        unmark_text_matches():void
        zoom_in():void
        zoom_out():void
    }
    export class WebWindowFeatures extends GObject.Object {
        constructor(config?: any)
        equal(features2: WebWindowFeatures):boolean
    }
}