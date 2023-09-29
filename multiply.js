const fs = require('node:fs');
var colors = require('colors');

const createMultiplyFile = async ( base, listar, hasta = 10 ) => {

  try {

    const limit = hasta;
    let output = '';
    let consoleOutput = '';

    if (listar) {
      console.log('===================='.magenta);
      console.log(`  Tabla del - ${base} `.red);
      console.log('===================='.magenta);
      
      
      for (let i = 1; i <= hasta; i++) {
        output += `${base} x ${i} = ${base * i} \n`;  
        consoleOutput += `${colors.red(base)} ${'x'.green} ${colors.red(i)} = ${colors.yellow(base * i)} \n`;  
      }
      
      console.log('');
      console.log(consoleOutput);
      console.log('');
      
      fs.writeFileSync(`output/tabla-${base}.txt`, output) ;
    }

    return `Tabla del ${base}`;


  } catch (err) {
    throw err;
  }
  
}


module.exports = {
  createMultiplyFile
}