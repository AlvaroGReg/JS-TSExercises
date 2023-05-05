/* 
INICIO 
"introduzca un numero >0"
LEER numero

 DESDE i=2 HASTA numero-1 INCREMENTO 1 HACER
    SI numero%i == 0
        numero "no es primo"
numero "es primo"
FINAL
*/
let numPrimo:     number
let checkedPrimo: boolean = false

numPrimo = parseInt(prompt("Introduzca un número >0")!, 10)

if (!Number.isNaN(numPrimo)) {

    let numsToCheck : number = numPrimo/2

    for (let n = 2; n < numsToCheck; n++){

        console.log(n)

        if (numPrimo%n == 0){
            
            checkedPrimo = true
            break;
        }
    }
    alert("El número " + numPrimo + (checkedPrimo ? " no es primo." : " es primo."))
}
