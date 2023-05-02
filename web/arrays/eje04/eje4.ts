/**LEER 5 NÚMEROS POR TECLADO Y COPIARLOS A OTRO ARRAY MULTIPLICADOS * 2 */
let numsListed: number[] = []
let numsX2:     number[] = []

//Generar primer array
for(let n=0; n<5; n++){
    numsListed[n] = Math.floor(((Math.random()*100)+1))
}

document.write("Los números introducidos son: ")

//Copy array
for(let n=0; n<numsListed.length; n++){

    document.write(numsListed[n] + " ")
    numsX2[n] = numsListed[n]*2
}

//Show x2 array
document.write("<br>Sus dobles son: ")
for(let n=0; n<numsX2.length; n++){

    document.write(numsX2[n] + " ")
}