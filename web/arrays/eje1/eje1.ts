/*LEER 10 NÚMEROS, ALMACENAR EN UN ARRAY Y MOSTRAR SUMA RESTA Y MULTIPLICACIÓN DE TODOS

EJE2: MOSTRAR MEDIA*/

let numList:    number[]= []
let numsTotal:  number  = 0
let numsResta:  number  = 0
let numsMult:   number  = 1

for(let n=0; n<10; n++){
    numList[n] = Math.floor((Math.random()*10)+1)
}
document.write('Números introducidos: ')
for(let n=0; n<numList.length; n++){
    document.write((numList[n]).toString() + " ")
    numsTotal += numList[n]
    numsResta -= numList[n]
    numsMult = numsMult*numList[n]
}

document.write('<br> Suma total de los números = ' + numsTotal.toString())
document.write('<br> Resta total de los números = ' + numsResta.toString())
document.write('<br> Multiplicación total de los números = ' + numsMult.toString())
document.write('<br> La media de los números introducidos es = ' + (numsTotal/numList.length).toString())