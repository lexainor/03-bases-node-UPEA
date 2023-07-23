
//aplicar desestructuracion
const {crearArchivo} = require('./helpers/multiplicar');
const argv=require('./config/yargs');

console.clear();

//argumentos que vienen desde la consola
//const base = 6;

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow))
    .catch(err=>console.log(err))


//fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
//    if(err) throw err;
//    console.log(`tabla-${base}.txt creado`);
//});