#!/usr/bin/gjs

Gtk = imports.gi.Gtk
Lang = imports.lang

class ListBoxRowWithData
    constructor: (data) ->
        @gob = new Gtk.ListBoxRow()
        @gob.data = data
        @gob.add new Gtk.Label(label: data)

class ListBoxWindow 
    constructor: () ->
        @gob = new Gtk.Window(title: "ListBox Demo")
        @border_width = 10

        box_outer = new Gtk.Box(orientation: Gtk.Orientation.VERTICAL, spacing: 6)
        @gob.add box_outer

        listbox = new Gtk.ListBox()
        listbox.selection_mode = Gtk.SelectionMode.NONE
        box_outer.pack_start listbox, true, true, 0

        row = new Gtk.ListBoxRow()
        hbox = new Gtk.Box(orientation: Gtk.Orientation.HORIZONTAL, spacing: 50)
        row.add hbox
        vbox = new Gtk.Box(orientation: Gtk.Orientation.VERTICAL)
        hbox.pack_start vbox, true, true, 0

        label1 = new Gtk.Label(label: "Automatic Date & Time", xalign: 0)
        label2 = new Gtk.Label(label: "Requires internet access", xalign: 0)
        vbox.pack_start label1, true, true, 0
        vbox.pack_start label2, true, true, 0

        swtch = new Gtk.Switch()
        swtch.valign = Gtk.Align.CENTER
        hbox.pack_start swtch, false, true, 0

        listbox.add row

        row = new Gtk.ListBoxRow()
        hbox = new Gtk.Box(orientation: Gtk.Orientation.HORIZONTAL, spacing: 50)
        row.add hbox
        label = new Gtk.Label(label: "Enable Automatic Update", xalign: 0)
        check = new Gtk.CheckButton()
        hbox.pack_start label, true, true, 0
        hbox.pack_start check, false, true, 0

        listbox.add row

        row = new Gtk.ListBoxRow()
        hbox = new Gtk.Box(orientation: Gtk.Orientation.HORIZONTAL, spacing: 50)
        row.add hbox
        label = new Gtk.Label(label: "Date Format", xalign: 0)
        combo = new Gtk.ComboBoxText()
        combo.insert 0, "0", "24-hour"
        combo.insert 1, "1", "AM/PM"
        hbox.pack_start label, true, true, 0
        hbox.pack_start combo, false, true, 0

        listbox.add row
        listbox2 = new Gtk.ListBox()
        items = "This is a sorted ListBox Fail".split(' ')

        items.forEach (item) => 
            listbox2.add(new ListBoxRowWithData(item).gob)

        sortFunc = (row1, row2, data, notifyDestroy) => 
            row1.data.toLowerCase() > row2.data.toLowerCase()

        filterFunc = (row, data, notifyDestroy) => 
            (row.data != 'Fail')
            
        listbox2.connect "row-activated", (widget, row) => 
            print(row.data)

        listbox2.set_sort_func sortFunc, null, false
        listbox2.set_filter_func filterFunc, null, false

        box_outer.pack_start listbox2, true, true, 0
        listbox2.show_all()

Gtk.init null
win = new ListBoxWindow()
win.gob.connect "delete-event", Gtk.main_quit
win.gob.show_all()
Gtk.main()
