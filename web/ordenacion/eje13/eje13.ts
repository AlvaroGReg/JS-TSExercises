/*ALMACENAR EN UN ARRAY LOS 100 PRIMEROS NÚMEROS ENTEROS Y LUEGO ORDENARLOS
DE FORMA DESCENDENTE POR EL MÉTODO BUBBLE*/

let baseArray: number[] = new Array(100)

for (let n = 0; n < 100; n++){
    baseArray[n] = n + 1
}

//Sort mediante bubble sort
function sortArray(arrayToSort: any[]): void{

    for (let n = 0; n < arrayToSort.length; n++){

        if (arrayToSort[n] > arrayToSort[n+1]){

            [arrayToSort[n], arrayToSort[n+1]] =
                                        [arrayToSort[n+1], arrayToSort[n]]
        }
    }
}