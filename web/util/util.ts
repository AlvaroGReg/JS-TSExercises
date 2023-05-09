//RECIBE TEXTO DEVUELVE UN NÚMERO INTRODUCIDO POR EL USUARIO
function getANumber(mensaje: string): number{
    
    do{

        var numberInput: number = parseInt(prompt(mensaje)!,10)

    }while(isNaN(numberInput))
    return numberInput
}

export {getANumber}