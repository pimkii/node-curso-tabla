// Fichero que contiene la configuracion de yargs y la exporta.

// con esta libreria podemos obtener en un objeto todos los flags que le pasemos al arranque de node.
// por ejemplo en node app.js --base=5 podriamos acceder al valor de base con argv.base
const argv = require('yargs')
// le indicamos que el argumento, que le pasemos, se lamará l y tendra de alias "listar" el valor por defecto sera false y será de tipo boolean
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: 'este argumento indica que tabla de multiplicar se mostra.'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    description: 'este argumento indica si se mostrará la tabla de multiplicar por pantalla o no.'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    description: 'este argumento indica hasta que numero se multiplicará la tabla.'
})
.check((argv, options) => {
    // hacemos las comprobaciones previas de los argumentos introducidos.
    if (isNaN(argv.base)) {
        throw 'la base debe ser un number'
    }

    return true
})
.argv;

module.exports = argv;