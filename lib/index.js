#!/usr/bin/env node
/**
 * girtdts
 * 
 * Convert a Gnome Gir bindings file to typescript declarations
 * 
 */
const fs = require('fs')
const os = require('os')
const {execSync} = require('child_process')
const {parseString} = require('xml2js')

const cfg = require('./gir2dts.json')
const dstpath = 'src/gjs.d.ts'

let gir = {}
let count = Object.keys(cfg.module).length

for (let name in cfg.module) {
    let src = fs.readFileSync(cfg.module[name].source, {encoding: 'utf8'})
    // provide a closure so we know which request completed
    ;(function(name, src){
        parseString(src, (err, res) => { 
            gir[name] = res 
            count--
            console.log(`${count} ${name}`)
            if (count <= 0) build(cfg, gir)
        })
    })(name, src)
}

function build(cfg, gir) {
    let out = []
    for (let name in cfg.module) {
        out.push(generateModule(name, gir[name], cfg.module[name]))
    }
    fs.writeFileSync(dstpath, out.join('\n'))
}

////////////////////////////////////////////////////////////////////////////////////////////

function generateModule(name, gir, module) {
    out = ['/**']
    out.push(` * ${name}.d.ts`)
    out.push(' *')
    out.push(' */')
    out.push(`declare module '${name}' {`)
    if (module.patch !== '')
        out.push(fs.readFileSync(module.patch, {encoding: 'utf8'}))
    addGirInfo(gir, module.types.function, module.types.enum, module.types.class, out)
    out.push('}')
    return out.join('\n')
}


function addGirInfo(gir, funcs, enums, classes, out) {

    let ns = gir.repository.namespace[0]

    // Get the requested functions
    if (ns.function) 
        for (let func of ns.function) {
            let name = getName(func.$['name'])
            
            if (funcs[0] === '*' || funcs.indexOf(name) != -1) {
                try {
                    let def = []
                    def.push(`  export function ${name}(`)
                    if (func.parameters) {
                        if (func.parameters[0].parameter)
                            for (let parameter of func.parameters[0].parameter) {
                                let name = getName(parameter.$['name'])
                                if (name === '...') name = '...args'
                                def.push(`${name}: ${getType(parameter)}`)
                                def.push(', ')
                            }
                    }
                    if (def[def.length-1] === ', ')
                        def[def.length-1] = ")"
                    else
                        def.push(')')
                    def.push(getReturnType(func))
                    out.push(def.join(''))
                } catch (e) {
                    console.log(e.message)
                }
            }
        }


    // Get the requested enums        
    if (ns.enumeration)
        for (let enumeration of ns.enumeration) {
            let name = enumeration.$['name']
            if (enums[0] === '*' || enums.indexOf(name) != -1) {
                try {
                    out.push(`  export enum ${name}{`)
                    for (let member of enumeration.member) {
                        let name = member.$['name'].toUpperCase()
                        if (name[0] >= '0' && name[0] <= '9') name = "_"+name
                        out.push(`    ${name},`)
                    }
                    out.push('  }')
                } catch (e) {
                    console.log(e.message)
                }
            }
        }

    // Bitfield is a type of enum
    if (ns.bitfield)
        for (let bitfield of ns.bitfield) {
            let name = bitfield.$['name']
            if (enums[0] === '*' || enums.indexOf(name) != -1) {
                try {
                    out.push(`  export enum ${name}{`)
                    for (let member of bitfield.member) {
                        let name = member.$['name'].toUpperCase()
                        if (name[0] >= '0' && name[0] <= '9') name = "_"+name
                        out.push(`    ${name},`)
                    }
                    out.push('  }')
                } catch (e) {
                    console.log(e.message)
                }
            }
        }

    // Get the requested classes
    if (ns.class)
        for (let klass of ns.class) {
            let name = klass.$['name']
            if (classes[0] === '*' || classes.indexOf(name) != -1) {
                try {
                    let def = []
                    def.push(`  export class ${name}`)
                    if (klass.$['parent']) 
                        def.push(` extends ${klass.$['parent']}`)
                    def.push(' {')
                    out.push(def.join(''))
                    if (klass.constructor) {
                        try {
                            for (let constructor of klass.constructor) {
                                let con = ["    constructor("]
                                if (constructor.parameters) {
                                    for (let parameter of constructor.parameters[0].parameter) {
                                        let name = getName(parameter.$['name'])
                                        if (name === '...') name = '...args'
                                        con.push(`${name}: ${getType(parameter)}`)
                                        con.push(', ')
                                    }
                                }
                                if (con[con.length-1] === ', ')
                                    con[con.length-1] = ")"
                                else
                                    con.push(')')
                                let it = con.join('')
                                if (it !== '    constructor()')
                                    out.push(it)
                            }

                        } catch(e) {}
                    }

                    if (klass.method) {
                        for (let method of klass.method) {
                            let line = []
                            line.push(`    ${method.$['name']}(`)
                            if (method.parameters) {
                                if (method.parameters[0].parameter)
                                    for (let parameter of method.parameters[0].parameter) {
                                        let name = getName(parameter.$['name'])
                                        if (name === '...') name = '...args'
                                        line.push(`${name}: ${getType(parameter)}`)
                                        line.push(', ')
                                    }
                            }
                            if (line[line.length-1] === ', ')
                                line[line.length-1] = ")"
                            else
                                line.push(')')
                            line.push(getReturnType(method))
                            out.push(line.join(''))
                        }
                    }
                    
                    out.push('  }')
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
        
    return out.join("\n")
}

/* Fixup: reserved keyword is identifier name */
function getName(name) {
    switch(name) {
        case 'in': return 'in_'
        case 'function': return 'function_'
        case 'true': return 'true_'
        case 'false': return 'false_'
        case 'break': return 'break_'
    }
    return name
}

/* Decode the type */
function getType(parameter) {
    let [name, isArray] = ['', '']

    if (parameter.array) {
        isArray = '[]'
        if (parameter.array[0].type) {
            name = parameter.array[0].type[0].$['name']
        }
    } else if (parameter.type) {
        name = parameter.type[0].$['name']
    }

    let x = name.split(' ')
    if (x.length === 1) 
        name = x[0]
    else    
        name = x[1]

    switch(name) {
        case '':         return 'any'+isArray
        case 'utf8':     return 'string'+isArray
        case 'none':     return 'void'+isArray
        case 'double':   return 'number'+isArray
        case 'gboolean': return 'boolean'+isArray
        case 'gpointer': return 'object'+isArray
        case 'gchar':    return 'number'+isArray
        case 'guint':    return 'number'+isArray
        case 'glong':    return 'number'+isArray
        case 'gulong':   return 'number'+isArray
        case 'gint':     return 'number'+isArray
        case 'guint8':   return 'number'+isArray
        case 'guint64':  return 'number'+isArray
        case 'gint64':   return 'number'+isArray
        case 'gdouble':  return 'number'+isArray
        case 'gssize':   return 'number'+isArray
        case 'gsize':    return 'number'+isArray
        case 'object':   return 'any'+isArray
        case 'va_list':  return 'any'+isArray
        default: return name+isArray
    }
    return '_unknown'+isArray
}

/* Process the return type */
function getReturnType(method) {
    if (method['return-value']) {
        return ':'+getType(method['return-value'][0])
    } else return ''

}
