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
    console: { value: {
            log: function () { print.apply(null, arguments); },
            warn: function () { print.apply(null, arguments); },
            error: function () { print.apply(null, arguments); },
            info: function () { print.apply(null, arguments); }
        } },
    _: { value: imports.gettext.gettext }
});
Object.defineProperties(define, {
    amd: { value: true },
    version: { value: '0.1.0' },
    path: { value: function (path) { return imports.searchPath.unshift(path); } },
    imports: { value: function (libs) { return define([], function () { return libs; }); } }
});
Object.defineProperties(String.prototype, {
    printf: { value: imports.format.format }
});
/**
 * Import ambient modules
 */
define.imports({
    Gda: imports.gi.Gda,
    Soup: imports.gi.Soup,
    WebKit: imports.gi.WebKit
});
define("example/example", ["require", "exports", "Gtk"], function (require, exports, Gtk) {
    "use strict";
    var ListBoxRowWithData = (function () {
        function ListBoxRowWithData(data) {
            this.object = new Gtk.ListBoxRow();
            /* create a custom 'data' field for sorting */
            this.object['data'] = data;
            this.object.add(new Gtk.Label({ label: data }));
        }
        return ListBoxRowWithData;
    }());
    var ListBoxWindow = (function () {
        function ListBoxWindow() {
            this.object = new Gtk.Window({
                window_position: Gtk.WindowPosition.CENTER,
                title: "ListBox Demo"
            });
            var box_outer = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL, spacing: 6 });
            this.object.add(box_outer);
            var listbox = new Gtk.ListBox();
            // property not defined error:
            //  listbox.selection_mode = Gtk.SelectionMode.NONE
            // use the api instead:
            listbox.set_selection_mode(Gtk.SelectionMode.NONE);
            box_outer.pack_start(listbox, true, true, 0);
            var row = new Gtk.ListBoxRow();
            var hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL, spacing: 50 });
            row.add(hbox);
            var vbox = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL });
            hbox.pack_start(vbox, true, true, 0);
            var label1 = new Gtk.Label({ label: "Automatic Date & Time", xalign: 0 });
            var label2 = new Gtk.Label({ label: "Requires internet access", xalign: 0 });
            vbox.pack_start(label1, true, true, 0);
            vbox.pack_start(label2, true, true, 0);
            var swtch = new Gtk.Switch();
            // property not defined error:
            //  swtch.valign = Gtk.Align.CENTER
            // use the api instead:
            swtch.set_valign(Gtk.Align.CENTER);
            hbox.pack_start(swtch, false, true, 0);
            listbox.add(row);
            row = new Gtk.ListBoxRow();
            hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL, spacing: 50 });
            row.add(hbox);
            var label = new Gtk.Label({ label: "Enable Automatic Update", xalign: 0 });
            var check = new Gtk.CheckButton();
            hbox.pack_start(label, true, true, 0);
            hbox.pack_start(check, false, true, 0);
            listbox.add(row);
            row = new Gtk.ListBoxRow();
            hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL, spacing: 50 });
            row.add(hbox);
            label = new Gtk.Label({ label: "Date Format", xalign: 0 });
            var combo = new Gtk.ComboBoxText();
            combo.insert(0, "0", "24-hour");
            combo.insert(1, "1", "AM/PM");
            hbox.pack_start(label, true, true, 0);
            hbox.pack_start(combo, false, true, 0);
            listbox.add(row);
            var listbox2 = new Gtk.ListBox();
            var items = "This is a sorted ListBox Fail".split(' ');
            items.forEach(function (item) { return listbox2.add(new ListBoxRowWithData(item).object); });
            var sortFunc = (function (row1, row2, data, notifyDestroy) { return row1.data.toLowerCase() > row2.data.toLowerCase(); });
            var filterFunc = (function (row, data, notifyDestroy) { return (row.data != 'Fail'); });
            listbox2.connect("row-activated", function (widget, row) { return print(row.data); });
            listbox2.set_sort_func(sortFunc, null, false);
            listbox2.set_filter_func(filterFunc, null, false);
            box_outer.pack_start(listbox2, true, true, 0);
            listbox2.show_all();
        }
        return ListBoxWindow;
    }());
    Gtk.init(null);
    var win = new ListBoxWindow();
    win.object.connect("delete-event", Gtk.main_quit);
    win.object.show_all();
    Gtk.main();
});
