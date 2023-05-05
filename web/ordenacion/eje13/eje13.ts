/*ALMACENAR EN UN ARRAY LOS 100 PRIMEROS NÚMEROS ENTEROS Y LUEGO ORDENARLOS
DE FORMA DESCENDENTE POR EL MÉTODO BUBBLE*/

let baseArray: number[] = new Array(20);

for (let n = 0; n < baseArray.length; n++) {
  baseArray[n] = Math.floor(Math.random()*100)
}

console.log (baseArray)
arraySort   (baseArray)
console.log (baseArray)

//Sort mediante bubble sort
function arraySort(arrayToSort: any[]): void {

  for (let n = 0; n < arrayToSort.length; n++) {

    for (let j = 0; j < (arrayToSort.length - n - 1); j++) {

      if (arrayToSort[j] < arrayToSort[j + 1]) {

        let temp         = arrayToSort[j]
        arrayToSort[j]   = arrayToSort[j+1]
        arrayToSort[j+1] = temp
      }
    }
  }
}