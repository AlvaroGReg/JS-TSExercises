/*Rellenar un array con los 50 primeros números primos
ordenar el array de forma descendente siguiendo el
metodo burbuja mejorado*/

let primesArray: number[] = []
let index:       number   = 0
let newNum:      number   = 0


//Fill array con 50 primeros primos
while (index < 50) {
    
    let isPrime: boolean = true
    
    for (let n = 2; n <= Math.sqrt(newNum); n++) {
        if (newNum % n === 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        primesArray[index] = newNum;
        index++;
    }

    newNum++;
}

console.log(primesArray)
bubbleSort(primesArray)

// Optimized bubble sort
function bubbleSort(arr: any[]) {
  
    var len:       number  = arr.length;
    var isSwapped: boolean = false;
  
    for (let i = 0; i < len; i++) {
  
        isSwapped = false;
  
        for (let j = 0; j < len - 1; j++) {

            if (arr[j] < arr[j + 1]) {

                var temp    = arr[j]
                arr[j]      = arr[j + 1];
                arr[j + 1]  = temp;
                isSwapped   = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
  
    // Print the array
    console.log(arr)
}