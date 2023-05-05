//Array de 20*25 rellenado. Calcular suma de cada fila y de cada columna
var array18: number[][] = []
var sumaRow: number     = 0
var sumaCol: number     = 0

//Fill array with numbers 0 to 10
for (let n = 0; n < lenght1; n++){
    array18[n] = []

    for (let r = 0; r < lenght2; r++){
        array18[n][r] = (Math.random()*10)
    }
}

//Calculate row and cols
console.log(addValue(array18, 1, 0))

function addValue(array: number[][], row: number, col: number): number{

    for (let n = 0; n < lenght1; n++){
        array18[n] = []
    
        for (let r = 0; r < lenght2; r++){
            array18[n][r] = (Math.random()*10)
        }
    }

    return total
}