/**
 *  Copyright 2017 darkoverlordofdata
 *
 * Module loader/gjs helper
 * normalized access to amd, commonjs and gjs imports
 *
 */
Object.defineProperties(window, {
    define: { value: (function (modules) {
            return function (name, deps, callback) {
                if (typeof name !== 'string') {
                    var bundle = deps();
                    for (name in bundle)
                        modules[name] = { id: name, exports: bundle[name] };
                }
                else {
                    modules[name] = { id: name, exports: {} };
                    var args = [function (name) { return modules[name] ? modules[name].exports : imports[name]; },
                        modules[name].exports];
                    for (var i = 2; i < deps.length; i++)
                        args.push(modules[deps[i]].exports);
                    callback.apply(modules[name].exports, args);
                }
            };
        }({
            Lang: { id: 'Lang', exports: imports.lang },
            Gio: { id: 'Gio', exports: imports.gi.Gio },
            Atk: { id: 'Atk', exports: imports.gi.Atk },
            Gdk: { id: 'Gdk', exports: imports.gi.Gdk },
            Gtk: { id: 'Gtk', exports: imports.gi.Gtk },
            GLib: { id: 'GLib', exports: imports.gi.GLib },
            Pango: { id: 'Pango', exports: imports.gi.Pango },
            GObject: { id: 'GObject', exports: imports.gi.GObject }
        })) },
    _: { value: imports.gettext.gettext }
});
Object.defineProperties(define, {
    amd: { value: true },
    version: { value: '0.0.6' },
    path: { value: function (path) { return imports.searchPath.unshift(path); } },
    plugin: { value: function (name, context) { return imports[name].attach(context); } },
    imports: { value: function (libs) { return define([], function () { return libs; }); } }
});
Object.defineProperties(String.prototype, {
    format: { value: imports.format.format }
});
/**
 * Optional imports:
 */
define.imports({
    Gda: imports.gi.Gda,
    WebKit: imports.gi.WebKit
});
define("example/record-collection", ["require", "exports", "Gtk", "Gda", "GLib"], function (require, exports, Gtk, Gda, GLib) {
    "use strict";
    var Demo = (function () {
        function Demo() {
            this.setupWindow();
            this.setupDatabase();
            this.selectData();
        }
        Demo.prototype.setupWindow = function () {
            this.window = new Gtk.Window({ title: "Data Access Demo", height_request: 350 });
            this.window.connect("delete-event", function () { return Gtk.main_quit(); });
            // main box
            var main_box = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL, spacing: 5 });
            this.window.add(main_box);
            // first label
            var info1 = new Gtk.Label({ label: "<b>Insert a record</b>", xalign: 0, use_markup: true });
            main_box.pack_start(info1, false, false, 5);
            // "insert a record" horizontal box
            var insert_box = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL, spacing: 5 });
            main_box.pack_start(insert_box, false, false, 5);
            // ID field
            insert_box.pack_start(new Gtk.Label({ label: "ID:" }), false, false, 5);
            this.id_entry = new Gtk.Entry();
            insert_box.pack_start(this.id_entry, false, false, 5);
            // Name field
            insert_box.pack_start(new Gtk.Label({ label: "Name:" }), false, false, 5);
            this.name_entry = new Gtk.Entry({ activates_default: true });
            insert_box.pack_start(this.name_entry, true, true, 5);
            // Insert button
            var insert_button = new Gtk.Button({ label: "Insert", can_default: true });
            insert_button.connect("clicked", this.insertClicked);
            insert_box.pack_start(insert_button, false, false, 5);
            insert_button.grab_default();
            // Browse textview
            var info2 = new Gtk.Label({ label: "<b>Browse the table</b>", xalign: 0, use_markup: true });
            main_box.pack_start(info2, false, false, 5);
            this.text = new Gtk.TextView({ editable: false });
            var sw = new Gtk.ScrolledWindow({ shadow_type: Gtk.ShadowType.IN });
            sw.add(this.text);
            main_box.pack_start(sw, true, true, 5);
            this.count_label = new Gtk.Label({ label: "", xalign: 0, use_markup: true });
            main_box.pack_start(this.count_label, false, false, 0);
            this.window.show_all();
        };
        Demo.prototype.setupDatabase = function () {
            this.connection = new Gda.Connection({
                provider: Gda.Config.get_provider("SQLite"),
                cnc_string: "DB_DIR=" + GLib.get_home_dir() + ";DB_NAME=gnome_demo"
            });
            this.connection.open();
            try {
                var dm = this.connection.execute_select_command("select * from demo");
            }
            catch (e) {
                this.connection.execute_non_select_command("create table demo(id integer, name varchar(100))");
            }
        };
        Demo.prototype.selectData = function () {
            var dm = this.connection.execute_select_command("select * from demo order by 1, 2");
            var iter = dm.create_iter();
            var text = "";
            while (iter.move_next()) {
                var id_field = Gda.value_stringify(iter.get_value_at(0));
                var name_field = Gda.value_stringify(iter.get_value_at(1));
                text += id_field + "\t=>\t" + name_field + '\n';
            }
            // this.text.buffer.text = text
            this.text.get_buffer().set_text(text, text.length);
            this.count_label.set_label("<i>" + dm.get_n_rows() + " record(s)</i>");
        };
        Demo.prototype.showError = function (msg) {
            var dialog = new Gtk.MessageDialog({
                message_type: Gtk.MessageType.ERROR,
                buttons: Gtk.ButtonsType.CLOSE,
                text: msg,
                transient_for: this.window,
                modal: true,
                destroy_with_parent: true
            });
            dialog.run();
            dialog.destroy();
        };
        Demo.prototype.insertClicked = function () {
            if (!this.validateFields())
                return;
            // Gda.execute_non_select_command(this.connection, "insert into demo values('" + this.id_entry.text + "', '" + this.name_entry.text + "')")
            var b = new Gda.SqlBuilder({ stmt_type: Gda.SqlStatementType.INSERT });
            b.set_table("demo");
            b.add_field_value_as_gvalue("id", this.id_entry.get_text());
            b.add_field_value_as_gvalue("name", this.name_entry.get_text());
            var stmt = b.get_statement();
            this.connection.statement_execute_non_select(stmt, null);
            this.clearFields();
            this.selectData();
        };
        Demo.prototype.validateFields = function () {
            if (this.id_entry.get_text() == "" || this.name_entry.get_text() == "") {
                this.showError("All fields are mandatory");
                return false;
            }
            if (isNaN(parseInt(this.id_entry.get_text()))) {
                this.showError("Enter a number");
                this.id_entry.grab_focus();
                return false;
            }
            return true;
        };
        Demo.prototype.clearFields = function () {
            this.id_entry.set_text("");
            this.name_entry.set_text("");
            this.id_entry.grab_focus();
        };
        return Demo;
    }());
    Gtk.init(null);
    var demo = new Demo();
    Gtk.main();
});
