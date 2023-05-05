/*RELLENAR ARRAY CON NÚMEROS >0 && <=50, LUEGO GENERAR OTRA TABLA RESULTADO DE DIVIDIR CADA NÚMERO ENTRE "K" SIENDO K UN NUMERO ENTRE 1 Y 50, MOSTRAR NUEVO ARRAY*/

//Relleno array base con números entre 1 y 50 incluidos. Un divisor aleatorio y una lista resultado de la división
let baseList: number[]  = Array.from({length: 50}, () => Math.floor((Math.random() * 49) + 1))
let divisor:  number    = Math.floor((Math.random() * 49) + 1)
let newList:  number[]  = baseList.map(function(i){return i/divisor})

//Print
console.log("Lista base: ")
console.log(baseList)
console.log("Divisor: " + divisor)
console.log("Lista dividida: ")
console.log(newList)