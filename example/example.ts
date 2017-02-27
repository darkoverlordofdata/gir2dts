/**
 * from https://media.readthedocs.org/pdf/gjs-tutorial/latest/gjs-tutorial.pdf
 * lesson 4.3 ListBox page 14
 */
import * as Gtk from 'Gtk'

class ListBoxRowWithData {
    object: Gtk.ListBoxRow
    constructor(data) {
        this.object = new Gtk.ListBoxRow()
        /* create a custom 'data' field for sorting */
        this.object['data'] = data
        this.object.add(new Gtk.Label({label: data}))
    }
}

class ListBoxWindow {
    object: Gtk.Window
    constructor() {
        this.object = new Gtk.Window({
            window_position: Gtk.WindowPosition.CENTER,
            title: "ListBox Demo"
        })
    
        let box_outer = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL, spacing: 6})
        this.object.add(box_outer)

        let listbox = new Gtk.ListBox()
        // property not defined error:
        //  listbox.selection_mode = Gtk.SelectionMode.NONE
        // use the api instead:
        listbox.set_selection_mode(Gtk.SelectionMode.NONE)
        box_outer.pack_start(listbox, true, true, 0)

        let row = new Gtk.ListBoxRow()
        let hbox = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL, spacing: 50})
        row.add(hbox)
        let vbox = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL})
        hbox.pack_start(vbox, true, true, 0)

        let label1 = new Gtk.Label({label: "Automatic Date & Time", xalign: 0})
        let label2 = new Gtk.Label({label: "Requires internet access", xalign: 0})
        vbox.pack_start(label1, true, true, 0)
        vbox.pack_start(label2, true, true, 0)

        let swtch = new Gtk.Switch()
        // property not defined error:
        //  swtch.valign = Gtk.Align.CENTER
        // use the api instead:
        swtch.set_valign(Gtk.Align.CENTER)
        hbox.pack_start(swtch, false, true, 0)

        listbox.add(row)

        row = new Gtk.ListBoxRow()
        hbox = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL, spacing: 50})
        row.add(hbox)
        let label = new Gtk.Label({label: "Enable Automatic Update", xalign: 0})
        let check = new Gtk.CheckButton()
        hbox.pack_start(label, true, true, 0)
        hbox.pack_start(check, false, true, 0)

        listbox.add(row)

        row = new Gtk.ListBoxRow()
        hbox = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL, spacing: 50})
        row.add(hbox)
        label = new Gtk.Label({label: "Date Format", xalign: 0})
        let combo = new Gtk.ComboBoxText()
        combo.insert(0, "0", "24-hour")
        combo.insert(1, "1", "AM/PM")
        hbox.pack_start(label, true, true, 0)
        hbox.pack_start(combo, false, true, 0)

        listbox.add(row)
        let listbox2 = new Gtk.ListBox()
        let items = "This is a sorted ListBox Fail".split(' ')

        items.forEach((item) => listbox2.add(new ListBoxRowWithData(item).object))

        let sortFunc = ((row1, row2, data, notifyDestroy) => row1.data.toLowerCase() > row2.data.toLowerCase())

        let filterFunc = ((row, data, notifyDestroy) => (row.data != 'Fail'))
            
        listbox2.connect("row-activated", (widget, row) => print(row.data))

        listbox2.set_sort_func(sortFunc, null, false)
        listbox2.set_filter_func(filterFunc, null, false)

        box_outer.pack_start(listbox2, true, true, 0)
        listbox2.show_all()
    }
}
Gtk.init(null)
let win = new ListBoxWindow()
win.object.connect("delete-event", Gtk.main_quit)
win.object.show_all()
Gtk.main()
