//Rellenar un array de [4][8] y calcular la suma total de sus valores
let acum:          number     = 0
let newBArray:     number[][] = []
let stringToPrint: string     = " "
//FILL ARRAY

for (let n = 0; n < 4; n++){

    newBArray[n] = []

    for (let r = 0; r < 8; r++){

        newBArray[n][r] = Math.floor((Math.random()*10)+1)
        acum           += newBArray[n][r]
        stringToPrint  += newBArray[n][r] + " "
    }
}

//PRINT
document.write("Array" + stringToPrint)
document.write("<br> Suma total: " + acum)