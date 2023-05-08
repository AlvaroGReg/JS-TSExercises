//RELLENAR ARRAY DE 8*4 CON ENTEROS. ORDENAR POR COLS Y ROWS

let arrayToSort: number[][] = []
let arrayCols:   number[][] = []
let arrayRows:   number[][] = []
let cols:        number     = 8
let rows:        number     = 4
//FILL

//FILLARRAY
for (let n = 0; n < cols; n++){
    arrayToSort[n]  = []
    arrayCols[n]    = []
    arrayRows[n]    = []

    for (let r = 0; r < rows; r++){
        arrayToSort[n][r]   = (Math.floor(Math.random()*20))
        arrayCols[n][r]     = arrayToSort[n][r]
        arrayRows[n][r]     = arrayToSort[n][r]
    }
}
console.log("Consultar consola para ver resultados")
console.log(arrayToSort)

//ORDER BY COLS AND ROWS

for (let i = 0; i < arrayRows.length; i++) {

    for (let j = 0; j < arrayRows[i].length - 1; j++) {

      for (let k = 0; k < arrayRows[i].length - j - 1; k++) {

        if (arrayRows[i][k] > arrayRows[i][k + 1]) {

          let temp = arrayRows[i][k]
          arrayRows[i][k] = arrayRows[i][k + 1]
          arrayRows[i][k + 1] = temp
        }
      }
    }
  }
console.log("Tabla ordenada por columnas")
console.log(arrayCols)

for (let i = 0; i < arrayRows[0].length; i++) {

  for (let j = 0; j < arrayRows.length - 1; j++) {

    for (let k = 0; k < arrayRows.length - j - 1; k++) {

      if (arrayRows[k][i] > arrayRows[k + 1][i]) {
        
        let temp = arrayRows[k][i];
        arrayRows[k][i] = arrayRows[k + 1][i];
        arrayRows[k + 1][i] = temp;
      }
    }
  }
}
console.log("Tabla ordenada por filas")
console.log(arrayRows)