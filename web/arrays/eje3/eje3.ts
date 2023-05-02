/* RELLENAR ARRAY CON 100 NÚMEROS CALCULAR EL MÁS ALTO Y SU POSICIÓN */
let numsList:   number[] = []
let maxNumber:  number   = 0
let numberPos:  number   = 0

//Input numbers
for(let n=0; n<100; n++){
    numsList[n] = Math.floor((Math.random()*100))
}
console.log(numsList)

//get max and position
for(let n=0; n<numsList.length; n++){
    
    if(numsList[n]>maxNumber){
        maxNumber = numsList[n]
        numberPos = n
    }
}

//Print
document.write('El número más alto de la lista es = ' + maxNumber.toString() + ". Se encuentra en la posición: " + numberPos)
document.write('<br> Para consultar la lista compruebe la consola.')
