/**
 * Gda.d.ts
 *
 */
declare module 'Gda' {
    import * as GObject from "GObject"
    import * as GLib from "GLib"
    export const ATTRIBUTE_AUTO_INCREMENT:string
    export const ATTRIBUTE_DESCRIPTION:string
    export const ATTRIBUTE_IS_DEFAULT:string
    export const ATTRIBUTE_NAME:string
    export const ATTRIBUTE_NUMERIC_PRECISION:string
    export const ATTRIBUTE_NUMERIC_SCALE:string
    export const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN:string
    export const EXTRA_AUTO_INCREMENT:string
    export const SERVER_PROVIDER_UNDEFINED_LIMITING_THREAD:any
    export const SQLSTATE_GENERAL_ERROR:string
    export const SQLSTATE_NO_ERROR:string
    export const TIMEZONE_INVALID:number
    export function alphanum_to_text(text: string):string
    export function attributes_manager_new(for_objects: boolean, signal_func: any, signal_data: any):any
    export function binary_copy(boxed: any):any
    export function binary_free(boxed: any):void
    export function blob_copy(boxed: any):any
    export function blob_free(boxed: any):void
    export function completion_list_get(cnc: Connection, sql: string, start: number, end: number):string[]
    export function compute_dml_statements(cnc: Connection, select_stmt: Statement, require_pk: boolean, insert_stmt: Statement, update_stmt: Statement, delete_stmt: Statement):boolean
    export function compute_select_statement_from_update(update_stmt: Statement):any
    export function compute_unique_table_row_condition(stsel: any, mtable: any, require_pk: boolean):any
    export function compute_unique_table_row_condition_with_cnc(cnc: Connection, stsel: any, mtable: any, require_pk: boolean):any
    export function data_handler_get_default(for_type: any):any
    export function data_model_error_quark():any
    export function default_escape_string(string: string):string
    export function default_unescape_string(string: string):string
    export function dsn_split(string: string, out_dsn: string, out_username: string, out_password: string):void
    export function g_type_from_string(str: string):any
    export function g_type_to_string(type: any):string
    export function geometricpoint_copy(boxed: any):any
    export function geometricpoint_free(boxed: any):void
    export function get_application_exec_path(app_name: string):string
    export function identifier_equal(id1: string, id2: string):boolean
    export function identifier_hash(id: string):number
    export function init():void
    export function locale_changed():void
    export function log_disable():void
    export function log_enable():void
    export function log_error(format: string, ...args: any[]):void
    export function log_is_enabled():boolean
    export function log_message(format: string, ...args: any[]):void
    export function mutex_free(mutex: any):void
    export function mutex_lock(mutex: any):void
    export function mutex_new():any
    export function mutex_trylock(mutex: any):boolean
    export function mutex_unlock(mutex: any):void
    export function parse_formatted_date(gdate: any, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number):boolean
    export function parse_formatted_time(timegda: any, value: string, sep: number):boolean
    export function parse_formatted_timestamp(timestamp: any, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number):boolean
    export function parse_iso8601_date(gdate: any, value: string):boolean
    export function parse_iso8601_time(timegda: any, value: string):boolean
    export function parse_iso8601_timestamp(timestamp: any, value: string):boolean
    export function rewrite_sql_statement_for_null_parameters(sqlst: any, params: Set, out_modified: boolean):any
    export function rewrite_statement_for_null_parameters(stmt: Statement, params: Set, out_stmt: Statement):boolean
    export function rfc1738_decode(string: string):boolean
    export function rfc1738_encode(string: string):string
    export function select_alter_select_for_empty(stmt: Statement):Statement
    export function sql_case_new(parent: any):any
    export function sql_error_quark():any
    export function sql_field_new(parent: any):any
    export function sql_function_new(parent: any):any
    export function sql_identifier_quote(id: string, cnc: Connection, prov: ServerProvider, meta_store_convention: boolean, force_quotes: boolean):string
    export function sql_identifier_split(id: string):string[]
    export function sql_operation_new(parent: any):any
    export function sql_operation_operator_from_string(op: string):SqlOperatorType
    export function sql_operation_operator_to_string(op: SqlOperatorType):string
    export function sql_select_field_new(parent: any):any
    export function sql_select_from_new(parent: any):any
    export function sql_select_join_new(parent: any):any
    export function sql_select_join_type_to_string(type: SqlSelectJoinType):string
    export function sql_select_order_new(parent: any):any
    export function sql_select_target_new(parent: any):any
    export function sql_table_new(parent: any):any
    export function string_to_binary(str: string):any
    export function string_to_blob(str: string):any
    export function text_to_alphanum(text: string):string
    export function time_copy(boxed: any):any
    export function time_free(boxed: any):void
    export function timestamp_copy(boxed: any):any
    export function timestamp_free(boxed: any):void
    export function utility_check_data_model(model: any, nbcols: number, ...args: any[]):boolean
    export function utility_check_data_model_v(model: any, nbcols: number, types: any[]):boolean
    export function utility_data_model_dump_data_to_xml(model: any, parent: any, cols: number[], nb_cols: number, rows: number[], nb_rows: number, use_col_ids: boolean):boolean
    export function utility_data_model_find_column_description(model: DataSelect, field_name: string):string
    export function utility_holder_load_attributes(holder: Holder, node: any, sources: any):boolean
    export function value_compare(value1: any, value2: any):number
    export function value_copy(value: any):any
    export function value_differ(value1: any, value2: any):number
    export function value_free(value: any):void
    export function value_get_binary(value: any):any
    export function value_get_blob(value: any):any
    export function value_get_geometric_point(value: any):any
    export function value_get_numeric(value: any):any
    export function value_get_short(value: any):any
    export function value_get_time(value: any):any
    export function value_get_timestamp(value: any):any
    export function value_get_ushort(value: any):number
    export function value_is_null(value: any):boolean
    export function value_is_number(value: any):boolean
    export function value_new(type: any):any
    export function value_new_binary(val: number, size: number):any
    export function value_new_blob(val: number, size: number):any
    export function value_new_blob_from_file(filename: string):any
    export function value_new_default(default_val: string):any
    export function value_new_from_string(as_string: string, type: any):any
    export function value_new_from_xml(node: any):any
    export function value_new_null():any
    export function value_new_timestamp_from_timet(val: number):any
    export function value_reset_with_type(value: any, type: any):void
    export function value_set_binary(value: any, binary: any):void
    export function value_set_blob(value: any, blob: any):void
    export function value_set_from_string(value: any, as_string: string, type: any):boolean
    export function value_set_from_value(value: any, from: any):boolean
    export function value_set_geometric_point(value: any, val: any):void
    export function value_set_null(value: any):void
    export function value_set_numeric(value: any, val: any):void
    export function value_set_short(value: any, val: any):void
    export function value_set_time(value: any, val: any):void
    export function value_set_timestamp(value: any, val: any):void
    export function value_set_ushort(value: any, val: number):void
    export function value_stringify(value: any):string
    export function value_take_binary(value: any, binary: any):void
    export function value_take_blob(value: any, blob: any):void
    export function value_to_xml(value: any):any
    export enum BatchError {
        BATCH_CONFLICTING_PARAMETER_ERROR,
    }
    export enum ConfigError {
        DSN_NOT_FOUND_ERROR,
        PERMISSION_ERROR,
        PROVIDER_NOT_FOUND_ERROR,
        PROVIDER_CREATION_ERROR,
    }
    export enum ConnectionError {
        DSN_NOT_FOUND_ERROR,
        PROVIDER_NOT_FOUND_ERROR,
        PROVIDER_ERROR,
        NO_CNC_SPEC_ERROR,
        NO_PROVIDER_SPEC_ERROR,
        OPEN_ERROR,
        STATEMENT_TYPE_ERROR,
        CANT_LOCK_ERROR,
        TASK_NOT_FOUND_ERROR,
        UNSUPPORTED_THREADS_ERROR,
        CLOSED_ERROR,
        META_DATA_CONTEXT_ERROR,
        UNSUPPORTED_ASYNC_EXEC_ERROR,
    }
    export enum ConnectionEventCode {
        CONSTRAINT_VIOLATION,
        RESTRICT_VIOLATION,
        NOT_NULL_VIOLATION,
        FOREIGN_KEY_VIOLATION,
        UNIQUE_VIOLATION,
        CHECK_VIOLATION,
        INSUFFICIENT_PRIVILEGES,
        UNDEFINED_COLUMN,
        UNDEFINED_FUNCTION,
        UNDEFINED_TABLE,
        DUPLICATE_COLUMN,
        DUPLICATE_DATABASE,
        DUPLICATE_FUNCTION,
        DUPLICATE_SCHEMA,
        DUPLICATE_TABLE,
        DUPLICATE_ALIAS,
        DUPLICATE_OBJECT,
        SYNTAX_ERROR,
        UNKNOWN,
    }
    export enum ConnectionEventType {
        NOTICE,
        WARNING,
        ERROR,
        COMMAND,
    }
    export enum ConnectionFeature {
        AGGREGATES,
        BLOBS,
        INDEXES,
        INHERITANCE,
        NAMESPACES,
        PROCEDURES,
        SEQUENCES,
        SQL,
        TRANSACTIONS,
        SAVEPOINTS,
        SAVEPOINTS_REMOVE,
        TRIGGERS,
        UPDATABLE_CURSOR,
        USERS,
        VIEWS,
        XA_TRANSACTIONS,
        MULTI_THREADING,
        ASYNC_EXEC,
        LAST,
    }
    export enum ConnectionMetaType {
        NAMESPACES,
        TYPES,
        TABLES,
        VIEWS,
        FIELDS,
        INDEXES,
    }
    export enum DataComparatorError {
        MISSING_DATA_MODEL_ERROR,
        COLUMN_TYPES_MISMATCH_ERROR,
        MODEL_ACCESS_ERROR,
        USER_CANCELLED_ERROR,
    }
    export enum DataModelError {
        ROW_OUT_OF_RANGE_ERROR,
        COLUMN_OUT_OF_RANGE_ERROR,
        VALUES_LIST_ERROR,
        VALUE_TYPE_ERROR,
        ROW_NOT_FOUND_ERROR,
        ACCESS_ERROR,
        FEATURE_NON_SUPPORTED_ERROR,
        FILE_EXIST_ERROR,
        XML_FORMAT_ERROR,
        TRUNCATED_ERROR,
        OTHER_ERROR,
    }
    export enum DataModelHint {
        START_BATCH_UPDATE,
        END_BATCH_UPDATE,
        REFRESH,
    }
    export enum DataModelIOFormat {
        DATA_ARRAY_XML,
        TEXT_SEPARATED,
        TEXT_TABLE,
    }
    export enum DataModelIterError {
        DATA_MODEL_ITER_COLUMN_OUT_OF_RANGE_ERROR,
    }
    export enum DataPivotAggregate {
        AVG,
        COUNT,
        MAX,
        MIN,
        SUM,
    }
    export enum DataPivotError {
        INTERNAL_ERROR,
        SOURCE_MODEL_ERROR,
        FIELD_FORMAT_ERROR,
        USAGE_ERROR,
        OVERFLOW_ERROR,
    }
    export enum DataPivotFieldType {
        ROW,
        COLUMN,
    }
    export enum DataProxyError {
        COMMIT_ERROR,
        COMMIT_CANCELLED,
        READ_ONLY_VALUE,
        READ_ONLY_ROW,
        FILTER_ERROR,
    }
    export enum DataSelectConditionType {
        PK,
        ALL_COLUMNS,
    }
    export enum DataSelectError {
        MODIFICATION_STATEMENT_ERROR,
        MISSING_MODIFICATION_STATEMENT_ERROR,
        CONNECTION_ERROR,
        ACCESS_ERROR,
        SQL_ERROR,
        SAFETY_LOCKED_ERROR,
    }
    export enum DiffType {
        ADD_ROW,
        REMOVE_ROW,
        MODIFY_ROW,
    }
    export enum HolderError {
        STRING_CONVERSION_ERROR,
        VALUE_TYPE_ERROR,
        VALUE_NULL_ERROR,
    }
    export enum MetaDbObjectType {
        UNKNOWN,
        TABLE,
        VIEW,
    }
    export enum MetaForeignKeyPolicy {
        UNKNOWN,
        NONE,
        NO_ACTION,
        RESTRICT,
        CASCADE,
        SET_NULL,
        SET_DEFAULT,
    }
    export enum MetaSortType {
        ALHAPETICAL,
        DEPENDENCIES,
    }
    export enum MetaStoreChangeType {
        ADD,
        REMOVE,
        MODIFY,
    }
    export enum MetaStoreError {
        INCORRECT_SCHEMA_ERROR,
        UNSUPPORTED_PROVIDER_ERROR,
        INTERNAL_ERROR,
        META_CONTEXT_ERROR,
        MODIFY_CONTENTS_ERROR,
        EXTRACT_SQL_ERROR,
        ATTRIBUTE_NOT_FOUND_ERROR,
        ATTRIBUTE_ERROR,
        SCHEMA_OBJECT_NOT_FOUND_ERROR,
        SCHEMA_OBJECT_CONFLICT_ERROR,
        SCHEMA_OBJECT_DESCR_ERROR,
        TRANSACTION_ALREADY_STARTED_ERROR,
    }
    export enum MetaStructError {
        UNKNOWN_OBJECT_ERROR,
        DUPLICATE_OBJECT_ERROR,
        INCOHERENCE_ERROR,
        XML_ERROR,
    }
    export enum ServerOperationError {
        OBJECT_NAME_ERROR,
        INCORRECT_VALUE_ERROR,
        XML_ERROR,
    }
    export enum ServerOperationNodeStatus {
        OPTIONAL,
        REQUIRED,
        UNKNOWN,
    }
    export enum ServerOperationNodeType {
        PARAMLIST,
        DATA_MODEL,
        PARAM,
        SEQUENCE,
        SEQUENCE_ITEM,
        DATA_MODEL_COLUMN,
        UNKNOWN,
    }
    export enum ServerOperationType {
        CREATE_DB,
        DROP_DB,
        CREATE_TABLE,
        DROP_TABLE,
        RENAME_TABLE,
        ADD_COLUMN,
        DROP_COLUMN,
        CREATE_INDEX,
        DROP_INDEX,
        CREATE_VIEW,
        DROP_VIEW,
        COMMENT_TABLE,
        COMMENT_COLUMN,
        CREATE_USER,
        ALTER_USER,
        DROP_USER,
        LAST,
    }
    export enum ServerProviderError {
        METHOD_NON_IMPLEMENTED_ERROR,
        PREPARE_STMT_ERROR,
        EMPTY_STMT_ERROR,
        MISSING_PARAM_ERROR,
        STATEMENT_EXEC_ERROR,
        OPERATION_ERROR,
        INTERNAL_ERROR,
        BUSY_ERROR,
        NON_SUPPORTED_ERROR,
        SERVER_VERSION_ERROR,
        DATA_ERROR,
        DEFAULT_VALUE_HANDLING_ERROR,
        MISUSE_ERROR,
        FILE_NOT_FOUND_ERROR,
    }
    export enum SetError {
        XML_SPEC_ERROR,
        HOLDER_NOT_FOUND_ERROR,
        INVALID_ERROR,
        READ_ONLY_ERROR,
        IMPLEMENTATION_ERROR,
    }
    export enum SqlAnyPartType {
        STMT_SELECT,
        STMT_INSERT,
        STMT_UPDATE,
        STMT_DELETE,
        STMT_COMPOUND,
        STMT_BEGIN,
        STMT_ROLLBACK,
        STMT_COMMIT,
        STMT_SAVEPOINT,
        STMT_ROLLBACK_SAVEPOINT,
        STMT_DELETE_SAVEPOINT,
        STMT_UNKNOWN,
        EXPR,
        SQL_FIELD,
        SQL_TABLE,
        SQL_FUNCTION,
        SQL_OPERATION,
        SQL_CASE,
        SQL_SELECT_FIELD,
        SQL_SELECT_TARGET,
        SQL_SELECT_JOIN,
        SQL_SELECT_FROM,
        SQL_SELECT_ORDER,
    }
    export enum SqlBuilderError {
        WRONG_TYPE_ERROR,
        MISUSE_ERROR,
    }
    export enum SqlError {
        STRUCTURE_CONTENTS_ERROR,
        MALFORMED_IDENTIFIER_ERROR,
        MISSING_IDENTIFIER_ERROR,
        VALIDATION_ERROR,
    }
    export enum SqlOperatorType {
        AND,
        OR,
        EQ,
        IS,
        LIKE,
        BETWEEN,
        GT,
        LT,
        GEQ,
        LEQ,
        DIFF,
        REGEXP,
        REGEXP_CI,
        NOT_REGEXP,
        NOT_REGEXP_CI,
        SIMILAR,
        ISNULL,
        ISNOTNULL,
        NOT,
        IN,
        NOTIN,
        CONCAT,
        PLUS,
        MINUS,
        STAR,
        DIV,
        REM,
        BITAND,
        BITOR,
        BITNOT,
        ILIKE,
        NOTLIKE,
        NOTILIKE,
    }
    export enum SqlParserError {
        SYNTAX_ERROR,
        OVERFLOW_ERROR,
        EMPTY_SQL_ERROR,
    }
    export enum SqlParserFlavour {
        STANDARD,
        SQLITE,
        MYSQL,
        ORACLE,
        POSTGRESQL,
    }
    export enum SqlParserMode {
        PARSE,
        DELIMIT,
    }
    export enum SqlSelectJoinType {
        CROSS,
        NATURAL,
        INNER,
        LEFT,
        RIGHT,
        FULL,
    }
    export enum SqlStatementCompoundType {
        UNION,
        UNION_ALL,
        INTERSECT,
        INTERSECT_ALL,
        EXCEPT,
        EXCEPT_ALL,
    }
    export enum SqlStatementType {
        SELECT,
        INSERT,
        UPDATE,
        DELETE,
        COMPOUND,
        BEGIN,
        ROLLBACK,
        COMMIT,
        SAVEPOINT,
        ROLLBACK_SAVEPOINT,
        DELETE_SAVEPOINT,
        UNKNOWN,
        NONE,
    }
    export enum StatementError {
        PARSE_ERROR,
        SYNTAX_ERROR,
        NO_CNC_ERROR,
        CNC_CLOSED_ERROR,
        EXEC_ERROR,
        PARAM_TYPE_ERROR,
        PARAM_ERROR,
    }
    export enum ThreadNotificationType {
        JOB,
        SIGNAL,
    }
    export enum ThreadWrapperError {
        THREAD_WRAPPER_UNKNOWN_ERROR,
    }
    export enum TransactionIsolation {
        UNKNOWN,
        READ_COMMITTED,
        READ_UNCOMMITTED,
        REPEATABLE_READ,
        SERIALIZABLE,
    }
    export enum TransactionStatusEventType {
        SAVEPOINT,
        SQL,
        SUB_TRANSACTION,
    }
    export enum TransactionStatusState {
        OK,
        FAILED,
    }
    export enum TreeError {
        TREE_UNKNOWN_ERROR,
    }
    export enum TreeManagerError {
        TREE_MANAGER_UNKNOWN_ERROR,
    }
    export enum TreeNodeError {
        TREE_NODE_UNKNOWN_ERROR,
    }
    export enum XaTransactionError {
        ALREADY_REGISTERED_ERROR,
        DTP_NOT_SUPPORTED_ERROR,
        CONNECTION_BRANCH_LENGTH_ERROR,
    }
    export enum ConnectionOptions{
        NONE,
        READ_ONLY,
        SQL_IDENTIFIERS_CASE_SENSITIVE,
        THREAD_SAFE,
        THREAD_ISOLATED,
        AUTO_META_DATA,
    }
    export enum DataModelAccessFlags{
        RANDOM,
        CURSOR_FORWARD,
        CURSOR_BACKWARD,
        CURSOR,
        INSERT,
        UPDATE,
        DELETE,
        WRITE,
    }
    export enum MetaGraphInfo{
        META_GRAPH_COLUMNS,
    }
    export enum MetaStructFeature{
        NONE,
        FOREIGN_KEYS,
        VIEW_DEPENDENCIES,
        ALL,
    }
    export enum ServerOperationCreateTableFlag{
        NOTHING_FLAG,
        PKEY_FLAG,
        NOT_NULL_FLAG,
        UNIQUE_FLAG,
        AUTOINC_FLAG,
        FKEY_FLAG,
        PKEY_AUTOINC_FLAG,
    }
    export enum SqlIdentifierStyle{
        LOWER_CASE,
        UPPER_CASE,
    }
    export enum StatementModelUsage{
        RANDOM_ACCESS,
        CURSOR_FORWARD,
        CURSOR_BACKWARD,
        CURSOR,
        ALLOW_NOPARAM,
        OFFLINE,
    }
    export enum StatementSqlFlag{
        PARAMS_AS_VALUES,
        PRETTY,
        PARAMS_LONG,
        PARAMS_SHORT,
        PARAMS_AS_COLON,
        PARAMS_AS_DOLLAR,
        PARAMS_AS_QMARK,
        PARAMS_AS_UQMARK,
        TIMEZONE_TO_GMT,
    }
    export enum ValueAttribute{
        NONE,
        IS_NULL,
        CAN_BE_NULL,
        IS_DEFAULT,
        CAN_BE_DEFAULT,
        IS_UNCHANGED,
        ACTIONS_SHOWN,
        DATA_NON_VALID,
        HAS_VALUE_ORIG,
        NO_MODIF,
        UNUSED,
    }
    export class Batch extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        add_statement(stmt: Statement):void
        copy():Batch
        get_parameters(out_params: Set):boolean
        get_statements():any
        remove_statement(stmt: Statement):void
        serialize():string
    }
    export class BlobOp extends GObject.Object {
        get_length():number
        read(blob: any, offset: number, size: number):number
        read_all(blob: any):boolean
        write(blob: any, offset: number):number
        write_all(blob: any):boolean
    }
    export class Column extends GObject.Object {
        constructor(config?: any)
        copy():Column
        get_allow_null():boolean
        get_attribute(attribute: string):any
        get_auto_increment():boolean
        get_dbms_type():string
        get_default_value():any
        get_description():string
        get_g_type():any
        get_name():string
        get_position():number
        set_allow_null(allow: boolean):void
        set_attribute(attribute: string, value: any, destroy: any):void
        set_auto_increment(is_auto: boolean):void
        set_dbms_type(dbms_type: string):void
        set_default_value(default_value: any):void
        set_description(title: string):void
        set_g_type(type: any):void
        set_name(name: string):void
        set_position(position: number):void
    }
    export class Config extends GObject.Object {
        static can_modify_system_config():boolean
        static define_dsn(info: any):boolean
        static dsn_needs_authentication(dsn_name: string):boolean
        static error_quark():any
        static get():Config
        static get_dsn_info(dsn_name: string):any
        static get_dsn_info_at_index(index: number):any
        static get_dsn_info_index(dsn_name: string):number
        static get_nb_dsn():number
        static get_provider(provider_name: string):ServerProvider
        static get_provider_info(provider_name: string):any
        static list_dsn():any
        static list_providers():any
        static remove_dsn(dsn_name: string):boolean
    }
    export class Connection extends GObject.Object {
        static error_quark():any
        static open_from_dsn(dsn: string, auth_string: string, options: ConnectionOptions):Connection
        static open_from_string(provider_name: string, cnc_string: string, auth_string: string, options: ConnectionOptions):Connection
        static open_sqlite(directory: string, filename: string, auto_unlink: boolean):Connection
        static string_split(string: string, out_cnc_params: string, out_provider: string, out_username: string, out_password: string):void
        constructor(config?: any)
        static new_from_dsn(dsn: string, auth_string: string, options: ConnectionOptions):Connection
        static new_from_string(provider_name: string, cnc_string: string, auth_string: string, options: ConnectionOptions):Connection
        add_event(event: ConnectionEvent):void
        add_event_string(str: string, ...args: any[]):ConnectionEvent
        add_prepared_statement(gda_stmt: Statement, prepared_stmt: PStmt):void
        add_savepoint(name: string):boolean
        async_cancel(task_id: number):boolean
        async_fetch_result(task_id: number, last_insert_row: Set):GObject.Object
        async_statement_execute(stmt: Statement, params: Set, model_usage: StatementModelUsage, col_types: any[], need_last_insert_row: boolean):number
        batch_execute(batch: Batch, params: Set, model_usage: StatementModelUsage):any
        begin_transaction(name: string, level: TransactionIsolation):boolean
        clear_events_list():void
        close():void
        close_no_warning():void
        commit_transaction(name: string):boolean
        create_operation(type: ServerOperationType, options: Set):ServerOperation
        create_parser():SqlParser
        del_prepared_statement(gda_stmt: Statement):void
        delete_row_from_table(table: string, condition_column_name: string, condition_value: any):boolean
        delete_savepoint(name: string):boolean
        execute_non_select_command(sql: string):number
        execute_select_command(sql: string):any
        get_authentication():string
        get_cnc_string():string
        get_date_format(out_first: GLib.DateDMY, out_second: GLib.DateDMY, out_third: GLib.DateDMY, out_sep: string):boolean
        get_dsn():string
        get_events():any
        get_meta_store():MetaStore
        get_meta_store_data(meta_type: ConnectionMetaType, error: any, nb_filters: number, ...args: any[]):any
        get_meta_store_data_v(meta_type: ConnectionMetaType, filters: any):any
        get_options():ConnectionOptions
        get_prepared_statement(gda_stmt: Statement):PStmt
        get_provider():ServerProvider
        get_provider_name():string
        get_transaction_status():TransactionStatus
        insert_row_into_table(table: string, error: any, ...args: any[]):boolean
        insert_row_into_table_v(table: string, col_names: any, values: any):boolean
        internal_change_transaction_state(newstate: TransactionStatusState):void
        internal_get_provider_data():any
        internal_get_provider_data_error():any
        internal_reset_transaction_status():void
        internal_savepoint_added(parent_trans: string, svp_name: string):void
        internal_savepoint_removed(svp_name: string):void
        internal_savepoint_rolledback(svp_name: string):void
        internal_set_provider_data(data: any, destroy_func: any):void
        internal_statement_executed(stmt: Statement, params: Set, error: ConnectionEvent):void
        internal_transaction_committed(trans_name: string):void
        internal_transaction_rolledback(trans_name: string):void
        internal_transaction_started(parent_trans: string, trans_name: string, isol_level: TransactionIsolation):void
        is_opened():boolean
        open():boolean
        parse_sql_string(sql: string, params: Set):Statement
        perform_operation(op: ServerOperation):boolean
        point_available_event(type: ConnectionEventType):ConnectionEvent
        quote_sql_identifier(id: string):string
        repetitive_statement_execute(rstmt: RepetitiveStatement, model_usage: StatementModelUsage, col_types: any[], stop_on_error: boolean):any
        rollback_savepoint(name: string):boolean
        rollback_transaction(name: string):boolean
        statement_execute(stmt: Statement, params: Set, model_usage: StatementModelUsage, last_insert_row: Set):GObject.Object
        statement_execute_non_select(stmt: Statement, params: Set, last_insert_row: Set):number
        statement_execute_select(stmt: Statement, params: Set):any
        statement_execute_select_full(stmt: Statement, params: Set, model_usage: StatementModelUsage, col_types: any[]):any
        statement_execute_select_fullv(stmt: Statement, params: Set, model_usage: StatementModelUsage, error: any, ...args: any[]):any
        statement_prepare(stmt: Statement):boolean
        statement_to_sql(stmt: Statement, params: Set, flags: StatementSqlFlag, params_used: any):string
        supports_feature(feature: ConnectionFeature):boolean
        update_meta_store(context: any):boolean
        update_row_in_table(table: string, condition_column_name: string, condition_value: any, error: any, ...args: any[]):boolean
        update_row_in_table_v(table: string, condition_column_name: string, condition_value: any, col_names: any, values: any):boolean
        value_to_sql_string(from: any):string
    }
    export class ConnectionEvent extends GObject.Object {
        get_code():number
        get_description():string
        get_event_type():ConnectionEventType
        get_gda_code():ConnectionEventCode
        get_source():string
        get_sqlstate():string
        set_code(code: number):void
        set_description(description: string):void
        set_event_type(type: ConnectionEventType):void
        set_gda_code(code: ConnectionEventCode):void
        set_source(source: string):void
        set_sqlstate(sqlstate: string):void
    }
    export class DataAccessWrapper extends GObject.Object {
        set_mapping(mapping: number[], mapping_size: number):boolean
    }
    export class DataComparator extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        compute_diff():boolean
        get_diff(pos: number):any
        get_n_diffs():number
        set_key_columns(col_numbers: number[], nb_cols: number):void
    }
    export class DataModelArray extends GObject.Object {
        static new_with_g_types(cols: number, ...args: any[]):any
        static new_with_g_types_v(cols: number, types: any[]):any
        clear():void
        get_row(row: number):Row
        set_n_columns(cols: number):void
    }
    export class DataModelDir extends GObject.Object {
        clean_errors():void
        get_errors():any
    }
    export class DataModelImport extends GObject.Object {
        static new_file(filename: string, random_access: boolean, options: Set):any
        static new_mem(data: string, random_access: boolean, options: Set):any
        static new_xml_node(node: any):any
        clean_errors():void
        get_errors():any
    }
    export class DataModelIter extends Set {
        static error_quark():any
        get_column_for_param(param: Holder):number
        get_holder_for_field(col: number):Holder
        get_row():number
        get_value_at(col: number):any
        get_value_at_e(col: number):any
        get_value_for_field(field_name: string):any
        invalidate_contents():void
        is_valid():boolean
        move_next():boolean
        move_prev():boolean
        move_to_row(row: number):boolean
        set_value_at(col: number, value: any):boolean
    }
    export class DataPivot extends GObject.Object {
        static error_quark():any
        add_data(aggregate_type: DataPivotAggregate, field: string, alias: string):boolean
        add_field(field_type: DataPivotFieldType, field: string, alias: string):boolean
        populate():boolean
    }
    export class DataProxy extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        static new_with_data_model(model: any):DataProxy
        alter_value_attributes(proxy_row: number, col: number, alter_flags: ValueAttribute):void
        apply_all_changes():boolean
        apply_row_changes(proxy_row: number):boolean
        cancel_all_changes():boolean
        cancel_row_changes(proxy_row: number, col: number):void
        delete(proxy_row: number):void
        get_filter_expr():string
        get_filtered_n_rows():number
        get_n_modified_rows():number
        get_n_new_rows():number
        get_proxied_model():any
        get_proxied_model_n_cols():number
        get_proxied_model_n_rows():number
        get_proxied_model_row(proxy_row: number):number
        get_sample_end():number
        get_sample_size():number
        get_sample_start():number
        get_value_attributes(proxy_row: number, col: number):ValueAttribute
        get_values(proxy_row: number, cols_index: number[], n_cols: number):any
        has_changed():boolean
        is_read_only():boolean
        row_has_changed(proxy_row: number):boolean
        row_is_deleted(proxy_row: number):boolean
        row_is_inserted(proxy_row: number):boolean
        set_filter_expr(filter_expr: string):boolean
        set_ordering_column(col: number):boolean
        set_sample_size(sample_size: number):void
        set_sample_start(sample_start: number):void
        undelete(proxy_row: number):void
    }
    export class DataSelect extends GObject.Object {
        static error_quark():any
        compute_columns_attributes():boolean
        compute_modification_statements():boolean
        compute_modification_statements_ext(cond_type: DataSelectConditionType):boolean
        compute_row_selection_condition():boolean
        get_connection():Connection
        prepare_for_offline():boolean
        rerun():boolean
        set_modification_statement(mod_stmt: Statement):boolean
        set_modification_statement_sql(sql: string):boolean
        set_row_selection_condition(expr: any):boolean
        set_row_selection_condition_sql(sql_where: string):boolean
    }
    export class HandlerBin extends GObject.Object {
    }
    export class HandlerBoolean extends GObject.Object {
    }
    export class HandlerNumerical extends GObject.Object {
    }
    export class HandlerString extends GObject.Object {
        static new_with_provider(prov: ServerProvider, cnc: Connection):any
    }
    export class HandlerTime extends GObject.Object {
        static new_no_locale():any
        get_format(type: any):string
        get_no_locale_str_from_value(value: any):string
        set_sql_spec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigits_years: boolean):void
        set_str_spec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigits_years: boolean):void
    }
    export class HandlerType extends GObject.Object {
    }
    export class Holder extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        static new_inline(type: any, id: string, ...args: any[]):Holder
        copy():Holder
        force_invalid():void
        force_invalid_e(error: any):void
        get_alphanum_id():string
        get_attribute(attribute: string):any
        get_bind():Holder
        get_default_value():any
        get_g_type():any
        get_id():string
        get_not_null():boolean
        get_source_model(col: number):any
        get_value():any
        get_value_str(dh: any):string
        is_valid():boolean
        is_valid_e():boolean
        set_attribute(attribute: string, value: any, destroy: any):void
        set_bind(bind_to: Holder):boolean
        set_default_value(value: any):void
        set_not_null(not_null: boolean):void
        set_source_model(model: any, col: number):boolean
        set_value(value: any):boolean
        set_value_str(dh: any, value: string):boolean
        set_value_to_default():boolean
        take_static_value(value: any, value_changed: boolean):any
        take_value(value: any):boolean
        value_is_default():boolean
    }
    export class MetaStore extends GObject.Object {
        static error_quark():any
        static sql_identifier_quote(id: string, cnc: Connection):string
        constructor(config?: any)
        static new_with_file(file_name: string):MetaStore
        create_modify_data_model(table_name: string):any
        declare_foreign_key(mstruct: MetaStruct, fk_name: string, catalog: string, schema: string, table: string, ref_catalog: string, ref_schema: string, ref_table: string, nb_cols: number, colnames: string[], ref_colnames: string[]):boolean
        extract(select_sql: string, error: any, ...args: any[]):any
        extract_v(select_sql: string, vars: any):any
        get_attribute_value(att_name: string, att_value: string):boolean
        get_internal_connection():Connection
        get_version():number
        modify(table_name: string, new_data: any, condition: string, error: any, ...args: any[]):boolean
        modify_v(table_name: string, new_data: any, condition: string, nvalues: number, value_names: string[], values: any[]):boolean
        modify_with_context(context: any, new_data: any):boolean
        schema_add_custom_object(xml_description: string):boolean
        schema_get_all_tables():any
        schema_get_depend_tables(table_name: string):any
        schema_get_structure():MetaStruct
        schema_remove_custom_object(obj_name: string):boolean
        set_attribute_value(att_name: string, att_value: string):boolean
        set_identifiers_style(style: SqlIdentifierStyle):void
        set_reserved_keywords_func(func: any):void
        undeclare_foreign_key(mstruct: MetaStruct, fk_name: string, catalog: string, schema: string, table: string, ref_catalog: string, ref_schema: string, ref_table: string):boolean
    }
    export class MetaStruct extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        complement(type: MetaDbObjectType, catalog: any, schema: any, name: any):any
        complement_all():boolean
        complement_default():boolean
        complement_depend(dbo: any):boolean
        complement_schema(catalog: any, schema: any):boolean
        dump_as_graph(info: MetaGraphInfo):string
        get_all_db_objects():any
        get_db_object(catalog: any, schema: any, name: any):any
        get_table_column(table: any, col_name: any):any
        load_from_xml_file(catalog: string, schema: string, xml_spec_file: string):boolean
        sort_db_objects(sort_type: MetaSortType):boolean
    }
    export class PStmt extends GObject.Object {
        copy_contents(dest: PStmt):void
        get_gda_statement():Statement
        set_gda_statement(stmt: Statement):void
    }
    export class RepetitiveStatement extends GObject.Object {
        constructor(config?: any)
        append_set(values: Set, make_copy: boolean):boolean
        get_all_sets():any
        get_template_set(set: Set):boolean
    }
    export class Row extends GObject.Object {
        constructor(config?: any)
        get_length():number
        get_value(num: number):any
        invalidate_value(value: any):void
        invalidate_value_e(value: any, error: any):void
        value_is_valid(value: any):boolean
        value_is_valid_e(value: any):boolean
    }
    export class ServerOperation extends GObject.Object {
        static error_quark():any
        static op_type_to_string(type: ServerOperationType):string
        static prepare_create_database(provider: string, db_name: string):ServerOperation
        static prepare_create_table(cnc: Connection, table_name: string, error: any, ...args: any[]):ServerOperation
        static prepare_drop_database(provider: string, db_name: string):ServerOperation
        static prepare_drop_table(cnc: Connection, table_name: string):ServerOperation
        static string_to_op_type(str: string):ServerOperationType
        constructor(config?: any)
        add_item_to_sequence(seq_path: string):number
        del_item_from_sequence(item_path: string):boolean
        get_node_info(path_format: string, ...args: any[]):any
        get_node_parent(path: string):string
        get_node_path_portion(path: string):string
        get_node_type(path: string, status: ServerOperationNodeStatus):ServerOperationNodeType
        get_op_type():ServerOperationType
        get_root_nodes():string[]
        get_sequence_item_names(path: string):string[]
        get_sequence_max_size(path: string):number
        get_sequence_min_size(path: string):number
        get_sequence_name(path: string):string
        get_sequence_size(path: string):number
        get_sql_identifier_at(cnc: Connection, prov: ServerProvider, path_format: string, ...args: any[]):string
        get_sql_identifier_at_path(cnc: Connection, prov: ServerProvider, path: string):string
        get_value_at(path_format: string, ...args: any[]):any
        get_value_at_path(path: string):any
        is_valid(xml_file: string):boolean
        load_data_from_xml(node: any):boolean
        perform_create_database(provider: string):boolean
        perform_create_table():boolean
        perform_drop_database(provider: string):boolean
        perform_drop_table():boolean
        save_data_to_xml():any
        set_value_at(value: string, error: any, path_format: string, ...args: any[]):boolean
        set_value_at_path(value: string, path: string):boolean
    }
    export class ServerProvider extends GObject.Object {
        static error_quark():any
        static load_file_contents(inst_dir: string, data_dir: string, filename: string):string
        create_operation(cnc: Connection, type: ServerOperationType, options: Set):ServerOperation
        create_parser(cnc: Connection):SqlParser
        escape_string(cnc: Connection, str: string):string
        find_file(inst_dir: string, filename: string):string
        get_data_handler_dbms(cnc: Connection, for_type: string):any
        get_data_handler_default(cnc: Connection, type: any, dbms_type: string):any
        get_data_handler_g_type(cnc: Connection, for_type: any):any
        get_default_dbms_type(cnc: Connection, type: any):string
        get_name():string
        get_server_version(cnc: Connection):string
        get_version():string
        handler_declare(dh: any, cnc: Connection, g_type: any, dbms_type: string):void
        handler_find(cnc: Connection, g_type: any, dbms_type: string):any
        handler_use_default(type: any):any
        internal_get_parser():SqlParser
        perform_operation(cnc: Connection, op: ServerOperation):boolean
        perform_operation_default(cnc: Connection, op: ServerOperation):boolean
        render_operation(cnc: Connection, op: ServerOperation):string
        string_to_value(cnc: Connection, string: string, preferred_type: any, dbms_type: string):any
        supports_feature(cnc: Connection, feature: ConnectionFeature):boolean
        supports_operation(cnc: Connection, type: ServerOperationType, options: Set):boolean
        unescape_string(cnc: Connection, str: string):string
        value_to_sql_string(cnc: Connection, from: any):string
    }
    export class Set extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        static new_from_spec_node(xml_spec: any):Set
        static new_from_spec_string(xml_spec: string):Set
        static new_inline(nb: number, ...args: any[]):Set
        static new_read_only(holders: any):Set
        add_holder(holder: Holder):boolean
        copy():Set
        get_group(holder: Holder):any
        get_holder(holder_id: string):Holder
        get_holder_value(holder_id: string):any
        get_node(holder: Holder):any
        get_nth_holder(pos: number):Holder
        get_source(holder: Holder):any
        get_source_for_model(model: any):any
        is_valid():boolean
        merge_with_set(set_to_merge: Set):void
        remove_holder(holder: Holder):void
        replace_source_model(source: any, model: any):void
        set_holder_value(error: any, holder_id: string, ...args: any[]):boolean
    }
    export class Short {
    }
    export class SqlBuilder extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        add_case(test_expr: any, else_expr: any, ...args: any[]):any
        add_case_v(test_expr: any, else_expr: any, when_array: any[], then_array: any[], args_size: number):any
        add_cond(op: SqlOperatorType, op1: any, op2: any, op3: any):any
        add_cond_v(op: SqlOperatorType, op_ids: any[], op_ids_size: number):any
        add_expr(dh: any, type: any, ...args: any[]):any
        add_expr_value(dh: any, value: any):any
        add_field_id(field_name: string, table_name: string):any
        add_field_value(field_name: string, type: any, ...args: any[]):void
        add_field_value_as_gvalue(field_name: string, value: any):void
        add_field_value_id(field_id: any, value_id: any):void
        add_function(func_name: string, ...args: any[]):any
        add_function_v(func_name: string, args: any[], args_size: number):any
        add_id(str: string):any
        add_param(param_name: string, type: any, nullok: boolean):any
        add_sub_select(sqlst: any):any
        compound_add_sub_select(sqlst: any):void
        compound_add_sub_select_from_builder(subselect: SqlBuilder):void
        compound_set_type(compound_type: SqlStatementCompoundType):void
        export_expression(id: any):any
        get_sql_statement():any
        get_statement():Statement
        import_expression(expr: any):any
        import_expression_from_builder(query: SqlBuilder, expr_id: any):any
        join_add_field(join_id: any, field_name: string):void
        select_add_field(field_name: string, table_name: string, alias: string):any
        select_add_target(table_name: string, alias: string):any
        select_add_target_id(table_id: any, alias: string):any
        select_group_by(expr_id: any):void
        select_join_targets(left_target_id: any, right_target_id: any, join_type: SqlSelectJoinType, join_expr: any):any
        select_order_by(expr_id: any, asc: boolean, collation_name: string):void
        select_set_distinct(distinct: boolean, expr_id: any):void
        select_set_having(cond_id: any):void
        select_set_limit(limit_count_expr_id: any, limit_offset_expr_id: any):void
        set_table(table_name: string):void
        set_where(cond_id: any):void
    }
    export class SqlParser extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        parse_file_as_batch(filename: string):Batch
        parse_string(sql: string, remain: string):Statement
        parse_string_as_batch(sql: string, remain: string):Batch
        set_overflow_error():void
        set_syntax_error():void
    }
    export class Statement extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        check_structure():boolean
        check_validity(cnc: Connection):boolean
        copy():Statement
        get_parameters(out_params: Set):boolean
        get_statement_type():SqlStatementType
        is_useless():boolean
        normalize(cnc: Connection):boolean
        rewrite_for_default_values(params: Set, remove: boolean):any
        serialize():string
        to_sql_extended(cnc: Connection, params: Set, flags: StatementSqlFlag, params_used: any):string
        to_sql_real(context: any):string
    }
    export class ThreadWrapper extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        cancel(id: number):boolean
        connect_raw(instance: any, sig_name: string, private_thread: boolean, private_job: boolean, callback: any, data: any):number
        disconnect(id: number):void
        execute(func: any, arg: any, arg_destroy_func: any):number
        execute_void(func: any, arg: any, arg_destroy_func: any):number
        fetch_result(may_lock: boolean, exp_id: number):any
        get_io_channel():any
        get_waiting_size():number
        iterate(may_block: boolean):void
        steal_signal(id: number):void
        unset_io_channel():void
    }
    export class TransactionStatus extends GObject.Object {
        constructor(config?: any)
        add_event_sql(sql: string, conn_event: ConnectionEvent):any
        add_event_sub(sub_trans: TransactionStatus):any
        add_event_svp(svp_name: string):any
        find(str: string, destev: any):TransactionStatus
        find_current(destev: any, unnamed_only: boolean):TransactionStatus
        free_events(event: any, free_after: boolean):void
    }
    export class Tree extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        add_manager(manager: TreeManager):void
        clean():void
        dump(node: TreeNode, stream: any):void
        get_node(tree_path: string, use_names: boolean):TreeNode
        get_node_manager(node: TreeNode):TreeManager
        get_node_path(node: TreeNode):string
        get_nodes_in_path(tree_path: string, use_names: boolean):any
        set_attribute(attribute: string, value: any, destroy: any):void
        update_all():boolean
        update_children(node: TreeNode):boolean
        update_part(node: TreeNode):boolean
    }
    export class TreeManager extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        static new_with_func(update_func: any):TreeManager
        add_manager(sub: TreeManager):void
        add_new_node_attribute(attribute: string, value: any):void
        create_node(parent: TreeNode, name: string):TreeNode
        get_managers():any
        get_node_create_func():any
        set_node_create_func(func: any):void
    }
    export class TreeMgrColumns extends TreeManager {
        constructor(config?: any)
    }
    export class TreeMgrLabel extends TreeManager {
        constructor(config?: any)
    }
    export class TreeMgrSchemas extends TreeManager {
        constructor(config?: any)
    }
    export class TreeMgrSelect extends TreeManager {
        constructor(config?: any)
    }
    export class TreeMgrTables extends TreeManager {
        constructor(config?: any)
    }
    export class TreeNode extends GObject.Object {
        static error_quark():any
        constructor(config?: any)
        fetch_attribute(attribute: string):any
        get_child_index(index: number):TreeNode
        get_child_name(name: string):TreeNode
        get_children():any
        get_node_attribute(attribute: string):any
        get_parent():TreeNode
        set_node_attribute(attribute: string, value: any, destroy: any):void
    }
    export class UShort {
    }
    export class XaTransaction extends GObject.Object {
        static error_quark():any
        static string_to_id(str: string):any
        constructor(config?: any)
        begin():boolean
        commit(cnc_to_recover: any):boolean
        commit_recovered(cnc_to_recover: any):boolean
        register_connection(cnc: Connection, branch: string):boolean
        rollback():boolean
        unregister_connection(cnc: Connection):void
    }
}