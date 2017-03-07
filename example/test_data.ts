export class ProuctsFilter {

    /* bug? filter not called in assign  */
    static concat(input, array) {
        return []
        // print('CONCAT ')
        // return input.concat(array)
    }

    static price(integer) {
        return "$%.2d USD".format(integer / 100.0)
    }

    static prettyprint(text) {
        return text.replace(/\*(.*)\*/, "<b>$1</b>")
    }

    static count(array) {
        return array.length
    }

    static paragraph(p) {
        return `<p>${p}</p>`
    }

    

}

export var data = {

  products: 
    [{ 'name': 'Arbor Draft', 'price': 39900, 'description': 'the *arbor draft* is a excellent product' },
     { 'name': 'Arbor Element', 'price': 40000, 'description': 'the *arbor element* rocks for freestyling' }],

  more_products:
    [{ 'name': 'Arbor Diamond', 'price': 59900, 'description': 'the *arbor diamond* is a made up product because im obsessed with arbor and have no creativity' },
     { 'name': 'Arbor Catalyst', 'price': 39900, 'description': 'the *arbor catalyst* is an advanced drop-through for freestyle and flatground performance and versatility' },
     { 'name': 'Arbor Fish', 'price': 40000, 'description': 'the *arbor fish* is a compact pin that features an extended wheelbase and time-honored teardrop shape' }],


  description:
    "List of Products ~ This is a list of products with price and description."

}