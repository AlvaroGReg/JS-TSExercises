/* ALMACENAR LAS TEMPERATURAS DEL MES DE ENERO, CALCULAR MEDIA, MÁXIMA Y MÍNIMA */

let januaryTemps: number[] = new Array(31)
let maxTemp:      number   = -100
let minTemp:      number   = 100
let mediaTemp:    number
let acumTemp:     number   = 0

//Genero lista aleatoria de números de -5º a 10º
for(let n=0; n<31; n++){
    januaryTemps[n] = Math.floor((Math.random()*15)-5)
}

//Buscamos mínima y máxima
for(let n=0; n<januaryTemps.length; n++){

    acumTemp += januaryTemps[n]

    if(januaryTemps[n]<minTemp){
        minTemp = januaryTemps[n]
    }
    if(januaryTemps[n]>maxTemp){
        maxTemp = januaryTemps[n]
    }
}

//Print
document.write("Temperatura mínima: " + minTemp)
document.write("<br>Temperatura máxima: " + maxTemp)
document.write("<br>Media del mes: " + acumTemp/januaryTemps.length)
document.write("<br><i>Consultar lista en consola.</i>")
console.log(januaryTemps)