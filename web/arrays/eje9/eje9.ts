/* RELLENAR UN ARRAY CON 20 NÚMEROS, BUSCAR UNO CONCRETO, INDICAR SI EXISTE Y DÓNDE ESTÁ*/

let arrayNum:    number[] = new Array(20)
let arrString:   string   = " "
let numToSearch: number
let numPos:      number

//Fill array
for (let n = 0; n < 20; n++){
    arrayNum[n] = Math.floor(Math.random()*10)
    arrString  += arrayNum[n] + " "
}

document.write('Números en la lista = ' + arrString + "<br>")

//Ask for number & search
numToSearch = parseInt(prompt('Introduzca un número para comprobar si está en la lista', "1")!,10)

numPos = arrayNum.indexOf(numToSearch)
document.write('El número introducido ' + (numPos != -1 ? "se encuentra en la posición " + (numPos+1) + "." : "no está en la lista.")) 