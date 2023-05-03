/* RELLENAR 2 VECTORES CON 10 NÚMEROS, GENERAR UN TERCER VECTOR CON LA SUMA Y MOSTRAR LOS 3*/

let arrayOne:     number[] = new Array(10)
let arrayTwo:     number[] = new Array(10)
let arrayThree:   number[] = new Array(10)
let stringOne:    string   = " "
let stringTwo:    string   = " "
let stringThree:  string   = " "

//Rellenar arrays 1 y 2
for(let n=0; n<10; n++){

    arrayOne[n] = Math.floor(Math.random()*10)
    arrayTwo[n] = Math.floor(Math.random()*10)
}

//Sumar arrays
for(let n=0; n<10; n++){
    arrayThree[n] = arrayOne[n]   + arrayTwo[n]
    stringOne    += arrayOne[n]   + " "
    stringTwo    += arrayTwo[n]   + " "
    stringThree  += arrayThree[n] + " "
}

//Print del ejercicio original
document.write('Primer array: '         + stringOne)
document.write('<br>Segundo array: '    + stringTwo)
document.write('<br>Tercer array: '     + stringThree)

//Print en tablas
var arrayOfArrays:  number[][]  = [arrayOne, arrayTwo, arrayThree]
var rowOne:         HTMLElement = document.getElementById('rowOne')!
var rowTwo:         HTMLElement = document.getElementById('rowTwo')!
var rowThree:       HTMLElement = document.getElementById('rowThree')!
let targetCell:     HTMLElement

for (let n = 0; n < arrayOfArrays.length; n++){

    switch (n){
        case 0:
            targetCell = rowOne
            break
        case 1:
            targetCell = rowTwo
            break
        case 2:
            targetCell = rowThree
            break
    }

    for (let i = 0; i < arrayOfArrays[n].length; i++){

        let newCell       = document.createElement('td')
        newCell.innerHTML = arrayOfArrays[n][i].toString()

        targetCell!.appendChild(newCell)
    }
}