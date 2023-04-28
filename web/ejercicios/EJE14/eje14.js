/*
CONTADORPAR=0
CONTADORIMPAR=0
NUMERO =1

MIENTRAS NUMERO!=0

    LEER "INTRODUZCA UN NUMERO, 0 PARA TERMINAR" => NUMERO
    SI NUMERO%2 == 0 CONTADORPAR++
        SI NUMERO%2 != 0 CONTADORIMPAR++

ACABAR MIENTRAS

LEER "CANTIDAD DE NUMEROS PARES" CONTADORPAR
    "CANTIDAD DE NÚMEROS IMPARES" CONTADORIMPAR
*/
var counterPair = 0;
var counterOdd = 0;
var num;
do {
    num = parseInt(prompt("Introduzca un número, si pone 0 o un caracter distinto de un número terminará el programa"), 10);
    if (num % 2 == 0 && !Number.isNaN(num)) {
        counterPair++;
    }
    else if (!Number.isNaN(num)) {
        counterOdd++;
    }
} while (num != 0 && !Number.isNaN(num));
alert("Ha introducido ".concat(counterPair, " números pares y ").concat(counterOdd, " n\u00FAmeros impares."));
