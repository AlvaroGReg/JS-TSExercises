/* LEER 10 NÚMEROS, ALMACENARLOS EN UN ARRAY Y ORDENARLOS DE FORMA ASCENDENTE*/
//Genero el array y lo cargo con 10 números aleatorios
var newArray = new Array(10);
for (var n = 0; n < newArray.length; n++) {
    newArray[n] = Math.floor((Math.random() * 49) + 1);
}
//Console printing
console.log("Array sin ordenar");
console.log(newArray);
sortArray(newArray);
console.log("Array ordenado");
console.log(newArray);
//Método para ordenar (sin Array.sort)
function sortArray(arrayToSort) {
    for (var n = 0; n < arrayToSort.length; n++) {
        if (arrayToSort[n] < arrayToSort[n + 1]) {
            var savedIndex = arrayToSort.splice(n, 1);
            arrayToSort.splice(arrayToSort.length, 0, savedIndex[0]);
            sortArray(arrayToSort);
        }
    }
    return true;
}
