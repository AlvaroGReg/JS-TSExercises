/* RELLENAR UN VECTOR CON 20 NÚMEROS Y MOSTRAR LA SUMA DE LOS POSITIVOS Y LA SUMA DE LOS NEGATIVOS */
var numsToList = new Array(20);
var acumPos = 0;
var acumNeg = 0;
//Relleno lista con números entre -10 y 10
for (var n = 0; n < numsToList.length; n++) {
    numsToList[n] = Math.floor((Math.random() * 20) - 10);
}
//Recorro el array separando <0 y >0
for (var n = 0; n < numsToList.length; n++) {
    if (numsToList[n] > 0) {
        acumPos += numsToList[n];
    }
    else if (numsToList[n] < 0) {
        acumNeg += numsToList[n];
    }
}
//Print
document.write('Suma de los positivos = ' + acumPos);
document.write('<br>Suma de los negativos = ' + acumNeg);
document.write('<br><i>Consultar array en consola</i>');
console.log(numsToList);
