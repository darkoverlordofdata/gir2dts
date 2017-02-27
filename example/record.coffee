GLib = imports.gi.GLib
Gtk = imports.gi.Gtk
Gda = imports.gi.Gda

class Demo 

  constructor: () ->
    @setupWindow()
    @setupDatabase()
    @selectData()
  

  setupWindow: () ->
    @window = new Gtk.Window(
        title: "Bosco"
        height_request: 350
        window_position: Gtk.WindowPosition.CENTER
    )
    
    @window.set_border_width(12)
    @window.set_icon_from_file("/home/bruce/gjs/bosco/Char_Monkey_Free_Images/Animations/monkey_armsup_happy.png")

    @window.connect "delete-event", () => 
      Gtk.main_quit()
      return true
    

    # main box
    mainBox = new Gtk.Box(orientation: Gtk.Orientation.VERTICAL, spacing: 5)
    @window.add(mainBox)

    # first label
    info1 = new Gtk.Label(label: "<b>Insert a record</b>", xalign: 0, use_markup: true)
    mainBox.pack_start(info1, false, false, 5)

    # "insert a record" horizontal box
    insertBox = new Gtk.Box(orientation: Gtk.Orientation.HORIZONTAL, spacing: 5)
    mainBox.pack_start(insertBox, false, false, 5)

    # ID field
    insertBox.pack_start(new Gtk.Label(label: "ID:"), false, false, 5)
    @idEntry = new Gtk.Entry()
    insertBox.pack_start(@idEntry, false, false, 5)

    # Name field
    insertBox.pack_start(new Gtk.Label(label: "Name:"), false, false, 5)
    @name_entry = new Gtk.Entry(activates_default: true)
    insertBox.pack_start(@name_entry, true, true, 5)

    # Insert button
    insertButton = new Gtk.Button(label: "Insert", can_default: true)
    insertButton.connect("clicked", => @insertClicked())
    insertBox.pack_start(insertButton, false, false, 5)
    insertButton.grab_default()

    # Browse textview
    info2 = new Gtk.Label(label: "<b>Browse the table</b>", xalign: 0, use_markup: true)
    mainBox.pack_start(info2, false, false, 5)
    @text = new Gtk.TextView(editable: false)
    sw = new Gtk.ScrolledWindow(shadow_type:Gtk.ShadowType.IN)
    sw.add(@text)
    mainBox.pack_start(sw, true, true, 5)

    @countLabel = new Gtk.Label(label: "", xalign: 0, use_markup: true)
    mainBox.pack_start(@countLabel, false, false, 0)

    @window.set_default_size(820, 640)
    @window.show_all()
    @window.present()


  setupDatabase: () ->
    @connection = new Gda.Connection(
        provider: Gda.Config.get_provider("SQLite"),
        cnc_string:"DB_DIR=#{GLib.get_home_dir()};DB_NAME=gnome_demo"
    )
    @connection.open()

    try 
      dm = @connection.execute_select_command("select * from demo")
    catch e
      @connection.execute_non_select_command("create table demo(id integer, name varchar(100))")
    
  selectData: () ->
    dm = @connection.execute_select_command("select * from demo order by 1, 2")
    iter = dm.create_iter()

    text = ""

    while iter.move_next()
      idField = Gda.value_stringify(iter.get_value_at(0))
      nameField = Gda.value_stringify(iter.get_value_at(1))

      text += "#{idField}\t=>\t#{nameField}\n"
    

    @text.buffer.text = text
    @countLabel.label = "<i>#{dm.get_n_rows()} record(s)</i>"
  

  showError: (msg) ->
    dialog = new Gtk.MessageDialog(
        message_type: Gtk.MessageType.ERROR
        buttons: Gtk.ButtonsType.CLOSE
        text: msg
        transient_for: @window
        modal: true
        destroy_with_parent: true
    )
    dialog.run()
    dialog.destroy()
  

  insertClicked: () ->
    if !@validateFields()
      return

    # Gda.execute_non_select_command(@connection, "insert into demo values('" + @idEntry.text + "', '" + @name_entry.text + "')")

    b = new Gda.SqlBuilder(stmt_type:Gda.SqlStatementType.INSERT)
    b.set_table("demo")
    b.add_field_value_as_gvalue("id", @idEntry.text)
    b.add_field_value_as_gvalue("name", @name_entry.text)
    stmt = b.get_statement()
    @connection.statement_execute_non_select(stmt, null)

    @clearFields()
    @selectData()
  

  validateFields: () ->
    if @idEntry.text == "" || @name_entry.text == ""
      @showError("All fields are mandatory")
      return false
    
    if isNaN(parseInt(@idEntry.text))
      @showError("Enter a number")
      @idEntry.grab_focus()
      return false
    
    return true
  

  clearFields: () ->
    @idEntry.text = ""
    @name_entry.text = ""
    @idEntry.grab_focus()

Gtk.init(null, null)

demo = new Demo()

Gtk.main()