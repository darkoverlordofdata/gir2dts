#!/usr/bin/gjs

GObject = imports.gi.GObject
Gtk = imports.gi.Gtk
Pango = imports.gi.Pango

class TreeViewExample 
    Name: 'TreeView Example with Simple ListStore'

    # Create the application itself
    constructor:() ->
        @application = new Gtk.Application(
            application_id: 'org.example.jstreeviewsimpleliststore'
       )

        # Connect 'activate' and 'startup' signals to the callback s
        @application.connect('activate', => @_onActivate())
        @application.connect('startup', => @_onStartup())
    

    # Callback  for 'activate' signal presents window when active
    _onActivate:() ->
        @_window.present()

    # Callback  for 'startup' signal builds the UI
    _onStartup:() ->
        @_buildUI()

    # Build the application's UI
    _buildUI:() ->
        # Create the application window
        @_window = new Gtk.ApplicationWindow(
            application: @application,
            window_position: Gtk.WindowPosition.CENTER,
            default_height: 250,
            default_width: 100,
            border_width: 20,
            title: "My Phone Book")

        # Create the underlying liststore for the phonebook
        @_listStore = new Gtk.ListStore()
        @_listStore.set_column_types([
            GObject.TYPE_STRING,
            GObject.TYPE_STRING,
            GObject.TYPE_STRING,
            GObject.TYPE_STRING])

        # Data to go in the phonebook
        phonebook = [
             { name: "Jurg", surname: "Billeter", phone: "555-0123", description: "A friendly person." },
             { name: "Johannes", surname: "Schmid", phone: "555-1234", description: "Easy phone number to remember." },
             { name: "Julita", surname: "Inca", phone: "555-2345", description: "Another friendly person." },
             { name: "Javier", surname: "Jardon", phone: "555-3456", description: "Bring fish for his penguins." },
             { name: "Jason", surname: "Clinton", phone: "555-4567", description: "His cake's not a lie." },
             { name: "Random J.", surname: "Hacker", phone: "555-5678", description: "Very random!" }
        ]

        # Put the data in the phonebook
        for contact in phonebook
            @_listStore.set(@_listStore.append(), [0, 1, 2, 3],
                [contact.name, contact.surname, contact.phone, contact.description])
        

        # Create the treeview
        @_treeView = new Gtk.TreeView(
            expand: true,
            model: @_listStore)

        # Create the columns for the address book
        firstName = new Gtk.TreeViewColumn(title: "First Name")
        lastName = new Gtk.TreeViewColumn(title: "Last Name")
        phone = new Gtk.TreeViewColumn(title: "Phone Number")

        # Create a cell renderer for when bold text is needed
        bold = new Gtk.CellRendererText(weight: Pango.Weight.BOLD)

        # Create a cell renderer for normal text
        normal = new Gtk.CellRendererText()

        # Pack the cell renderers into the columns
        firstName.pack_start(bold, true)
        lastName.pack_start(normal, true)
        phone.pack_start(normal, true)

        # Set each column to pull text from the TreeView's model
        firstName.add_attribute(bold, "text", 0)
        lastName.add_attribute(normal, "text", 1)
        phone.add_attribute(normal, "text", 2)

        # Insert the columns into the treeview
        @_treeView.insert_column(firstName, 0)
        @_treeView.insert_column(lastName, 1)
        @_treeView.insert_column(phone, 2)

        # Create the label that shows details for the name you select
        @_label = new Gtk.Label(label: "")

        # Get which item is selected
        @selection = @_treeView.get_selection()

        # When something new is selected, call _on_changed
        @selection.connect('changed', => @_onSelectionChanged())

        # Create a grid to organize everything in
        @_grid = new Gtk.Grid

        # Attach the treeview and label to the grid
        @_grid.attach(@_treeView, 0, 0, 1, 1)
        @_grid.attach(@_label, 0, 1, 1, 1)

        # Add the grid to the window
        @_window.add(@_grid)

        # Show the window and all child widgets
        @_window.show_all()

    _onSelectionChanged: () ->

        # Grab a treeiter pointing to the current selection
        [ isSelected, model, iter ] = @selection.get_selected()

        # Set the label to read off the values stored in the current selection
        @_label.set_label("\n" +
            @_listStore.get_value(iter, 0) + " " +
            @_listStore.get_value(iter, 1) + " " +
            @_listStore.get_value(iter, 2) + "\n" +
            @_listStore.get_value(iter, 3))


# Run the application
app = new TreeViewExample()
app.application.run(ARGV)
