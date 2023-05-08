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
console.log(sumRowOrColumn(array18, 1, 2))

function sumRowOrColumn(arr: number[][], rowIndex: number | null, colIndex: number | null): number {
    let sum = 0;
  
    if (rowIndex !== null) { // Si rowIndex no es nulo, sumar la fila correspondiente
      if (rowIndex >= arr.length) {
        throw new Error("Índice de fila fuera de rango");
      }
  
      for (let j = 0; j < arr[rowIndex].length; j++) {
        sum += arr[rowIndex][j];
      }
    } else if (colIndex !== null) { // Si colIndex no es nulo, sumar la columna correspondiente
      if (colIndex >= arr[0].length) {
        throw new Error("Índice de columna fuera de rango");
      }
  
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i][colIndex];
      }
    } else { // Si rowIndex y colIndex son ambos nulos, lanzar un error
      throw new Error("Se debe proporcionar un índice de fila o de columna");
    }
  
    return sum;
  }