
const argv = require('yargs')
            .option('b', {
                alias:'base',
                type:'number',
                demandOption:true
            })
            .option('l', {
                alias:'listar',
                type:'boolean',
                demandOption:true,
            })
            .option('h', {
                alias:'hasta',
                type:'number',
                demandOption:true,
                default:10,
                describe:"Este es el numero hasta donde quieres la tabla"
            })
            .check((argv,option)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número';
                }
                return true;
            })
            .argv;
// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs',argv.base);
module.exports=argv;