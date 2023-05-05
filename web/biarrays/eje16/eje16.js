//Rellenar un array de [4][8] y calcular la suma total de sus valores
var acum = 0;
var newBArray = [];
var stringToPrint = " ";
//FILL ARRAY
for (var n = 0; n < 4; n++) {
    newBArray[n] = [];
    for (var r = 0; r < 8; r++) {
        newBArray[n][r] = Math.floor((Math.random() * 10) + 1);
        acum += newBArray[n][r];
        stringToPrint += newBArray[n][r] + " ";
    }
}
//PRINT
document.write("Array" + stringToPrint);
document.write("<br> Suma total: " + acum);
