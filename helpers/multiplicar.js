const fs = require('fs');
const colors = require('colors'); // importamos colores
const crearArchivo = async(base=5, listar=false, hasta=10)=>{
    try{
        console.clear();
        let salida,consola = '';
        for(let i = 1; i<=hasta;i++){
            consola+=`${base}x${i}=${base*i}\n`;
            salida+=`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        if(listar){
            console.log('================='.green);
            console.log('TABLA DE MULTIPLICAR', colors.cyan(base));
            console.log('================='.green);
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        return `tabla-${base}.txt creado`;
    }
    catch(error){
        throw error;
    }

};

/*
 este codigo nos permite trabajar de forma global y
 su sintaxis es la siguiente
 * 
 */

 module.exports={
    /**
     * esto esta llamando a crearArchivo
     */
    crearArchivo
}