
const { writeInFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

console.log('argv.base: ', argv.base)

writeInFile(argv.base, argv.listar, argv.hasta)
.then( res => console.log(res))
.catch(err => conwole.log(err))