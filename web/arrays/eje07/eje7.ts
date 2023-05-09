/* RELLENAR UN VECTOR CON 20 NÚMEROS Y MOSTRAR LA SUMA DE LOS POSITIVOS
Y LA SUMA DE LOS NEGATIVOS */

let numsToList: number[] = new Array(20)
let acumPos:    number   = 0
let acumNeg:    number   = 0

//Relleno lista con números entre -10 y 10
for(let n=0; n<numsToList.length; n++){
    numsToList[n] = Math.floor((Math.random()*20)-10)
}

//Recorro el array separando <0 y >0
for(let n=0; n<numsToList.length; n++){
    
    if(numsToList[n]>0){
        acumPos += numsToList[n]
    }else if(numsToList[n]<0){
        acumNeg += numsToList[n]
    }
}

//Print
document.write('Suma de los positivos = ' + acumPos)
document.write('<br>Suma de los negativos = ' + acumNeg)
document.write('<br><i>Consultar array en consola</i>')
console.log(numsToList)