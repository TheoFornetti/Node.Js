//Monohilo, en este caso este programa se esdta ejecutando en un solo hilo. Al romperse una linea de codigo, se rompe todo el programa.
//Dato curioso, corre sin compilar en js por ende el momento en el que saltan los errores ya es tarde  

//Las instrucciones se ejecutan de forma asincrona, es decir, varias a la vez
//Por ejemplo en este caso por panatalla se imprimiria primero el hola mundo, luego segunda instruccion y al final el setInterval

console.log('Hola mundo')

let i = 0;
setInterval(function(){
    console.log(i)
    i++;

    if(i === 5){
        console.log('FATAL ERROR')
        var a = 3 + z;

    }
}, 1000);

console.log('Segunda instruccion')
//Lo peligroso del monohilo es que si tenemos un error para por completo nuestro proceso 
//Es muy importante estar atento de absolutamente todo