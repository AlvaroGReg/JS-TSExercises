/*LEER 10 NÚMEROS, ALMACENAR EN UN ARRAY Y MOSTRAR SUMA RESTA Y MULTIPLICACIÓN DE TODOS

EJE2: MOSTRAR MEDIA*/
var numList = [];
var numsTotal = 0;
var numsResta = 0;
var numsMult = 1;
for (var n = 0; n < 10; n++) {
    numList[n] = Math.floor((Math.random() * 10) + 1);
}
document.write('Números introducidos: ');
for (var n = 0; n < numList.length; n++) {
    document.write((numList[n]).toString() + " ");
    numsTotal += numList[n];
    numsResta -= numList[n];
    numsMult = numsMult * numList[n];
}
document.write('<br> Suma total de los números = ' + numsTotal.toString());
document.write('<br> Resta total de los números = ' + numsResta.toString());
document.write('<br> Multiplicación total de los números = ' + numsMult.toString());
document.write('<br> La media de los números introducidos es = ' + (numsTotal / numList.length).toString());
