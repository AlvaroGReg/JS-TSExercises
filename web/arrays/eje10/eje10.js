/*RELLENAR ARRAY CON NÚMEROS >0 && <=50, LUEGO GENERAR OTRA TABLA RESULTADO DE DIVIDIR CADA NÚMERO ENTRE "K" SIENDO K UN NUMERO ENTRE 1 Y 50, MOSTRAR NUEVO ARRAY*/
//Relleno array base con números entre 1 y 50 incluidos
var baseList = Array.from({ length: 50 }, function () { return Math.floor((Math.random() * 49) + 1); });
//Genero número divisor y genero nuevo array
var divisor = Math.floor((Math.random() * 49) + 1);
var newList = baseList.map(function (i) { return i / divisor; });
//Print
console.log("Lista base: ");
console.log(baseList);
console.log("Divisor: " + divisor);
console.log("Lista dividida: ");
console.log(newList);
