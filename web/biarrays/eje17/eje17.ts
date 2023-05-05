/*Rellenera uin array de [5][9] con números reales. Calcular media de cada
columna, cuántos son > | < | ==. */

var realArray:   number[][] = []
var lenght1:     number     = 5
var lenght2:     number     = 8
var numTotal:    number     = 0
var numMedia:    number     = 0
var acumMayor:   number     = 0
var acumIgual:   number     = 0
var acumMenor:   number     = 0

/*Relleno el array de números entre -50 y 50.
A la vez hago la suma total para no hacer recorrer una tercera vez
*/
for (let n = 0; n < lenght1; n++){
    realArray[n] = []

    for(let r = 0; r < lenght2; r++){
        realArray[n][r] = (Math.random()*100)-50
        numTotal       += realArray[n][r]
    }
}

//Calcular media y contar números <|=|>
numMedia = numTotal/(lenght1*lenght2)
document.write("La media es " + numMedia)

for (let n = 0; n < lenght1; n++){

    for(let r = 0; r < lenght2; r++){
        
        let numToCompare: number = realArray[n][r]
        if (numToCompare == numMedia){
            acumMenor++
        }else if (numToCompare < numMedia){
            acumMenor++
        }else{
            acumMayor++
        }
    }
}

document.write("<br>Hay " + acumIgual + " números iguales a la media, " +
                        acumMayor + " números mayores a la media y " +
                        acumMenor + " números menores a la media.")