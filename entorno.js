//Variables de entorno, sirven para dar informacion necesaria que no debe estar en el codigo 

let nombre = process.env.NOMBRE || 'Sin Nombre!';
let web = process.env.WEB || 'Sin Web!'

console.log('Hola ' + nombre);
console.log('Mi web es ' + web)
console.log('Funciona?')
