console.clear();

const argv = require("./helper/yargs");
const { createMultiplyFile } = require("./multiply");

// console.log(process.argv);
// console.log(argv.b);
// console.log(argv.l);
// console.log(argv.h);

// const [,, arg3] = process.argv;
// const [ ,base ] = arg3.split('=');

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

createMultiplyFile(base, listar, hasta)
  .then( fileName => console.log(fileName, 'creada!') )
  .catch( err => console.log(err) )


