const argv = require('yargs/yargs')(process.argv.slice(2))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'This is the base number'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'This is the limit number'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'This is the list option'
  })
  
  .check((argv, option) => {
    if ( isNaN(argv.b) || isNaN(argv.b) ) {
      throw new Error('Los argumentos deben ser de tipo un" número"')
    }
    return true
  })
  .argv;

  module.exports = argv