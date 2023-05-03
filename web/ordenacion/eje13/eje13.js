/*ALMACENAR EN UN ARRAY LOS 100 PRIMEROS NÚMEROS ENTEROS Y LUEGO ORDENARLOS
DE FORMA DESCENDENTE POR EL MÉTODO BUBBLE*/
var baseArray = new Array(20);
for (var n = 0; n < baseArray.length; n++) {
    baseArray[n] = Math.floor(Math.random() * 100);
}
console.log(baseArray);
sortArray(baseArray);
console.log(baseArray);
//Sort mediante bubble sort
function sortArray(arrayToSort) {
    for (var n = 0; n < arrayToSort.length; n++) {
        for (var j = 0; j < (arrayToSort.length - n - 1); j++) {
            if (arrayToSort[j] < arrayToSort[j + 1]) {
                var temp = arrayToSort[j];
                arrayToSort[j] = arrayToSort[j + 1];
                arrayToSort[j + 1] = temp;
            }
        }
    }
}
