/*Rellenar un array con los 50 primeros números primos
ordenar el array de forma descendente siguiendo el
metodo burbuja mejorado*/
var primesArray = [];
var index = 0;
var newNum = 0;
//Fill array con 50 primeros primos
while (index < 50) {
    var isPrime = true;
    for (var n = 2; n <= Math.sqrt(newNum); n++) {
        if (newNum % n === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primesArray[index] = newNum;
        index++;
    }
    newNum++;
}
console.log(primesArray);
bubbleSort(primesArray);
// Optimized bubble sort
function bubbleSort(arr) {
    var len = arr.length;
    var isSwapped = false;
    for (var i = 0; i < len; i++) {
        isSwapped = false;
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    // Print the array
    console.log(arr);
}
