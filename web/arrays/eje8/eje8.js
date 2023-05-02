/* RELLENAR 2 VECTORES CON 10 NÚMEROS, GENERAR UN TERCER VECTOR CON LA SUMA Y MOSTRAR LOS 3*/
var arrayOne = new Array(10);
var arrayTwo = new Array(10);
var arrayThree = new Array(10);
var stringOne = " ";
var stringTwo = " ";
var stringThree = " ";
//Rellenar arrays 1 y 2
for (var n = 0; n < 10; n++) {
    arrayOne[n] = Math.floor(Math.random() * 10);
    arrayTwo[n] = Math.floor(Math.random() * 10);
}
//Sumar arrays
for (var n = 0; n < 10; n++) {
    arrayThree[n] = arrayOne[n] + arrayTwo[n];
    stringOne += arrayOne[n] + " ";
    stringTwo += arrayTwo[n] + " ";
    stringThree += arrayThree[n] + " ";
}
//Print
document.write('Primer array: ' + stringOne);
document.write('<br>Segundo array: ' + stringTwo);
document.write('<br>Tercer array: ' + stringThree);
