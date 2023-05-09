let number1: number = getANumber(
    "Introduzca un número y el programa le dirá si es par o impar:")

alert("El número introducido es " + (number1 % 2 == 0 ? "par." : "impar."))

function getANumber(mensaje: string): number{
    
    do{

        var numberInput: number = parseInt(prompt(mensaje)!,10)

    }while(isNaN(numberInput))
    return numberInput
}