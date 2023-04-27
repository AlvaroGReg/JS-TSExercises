let media : number = (getNumber(),getNumber(),getNumber())/3

document.write('Programa que calcula la media de 3 números <br><br>', "La media de los números introducidos es ->",media.toFixed(2),"<br><br>", "Se terminó.")

function getNumber() : number{
    return parseInt(prompt("Introduce el valor del primer número", "numero")!, 10)
}