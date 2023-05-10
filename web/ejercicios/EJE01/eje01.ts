let media: number =
                (getrNumber("Introduce el valor del primer número") +
            getrNumber("Introduce el valor del segundo número") +
            getrNumber("Introduce el valor del tercer número"))/3

document.write(
    'Programa que calcula la media de 3 números <br><br>',
    "La media de los números introducidos es ->"
    ,media.toFixed(2),"<br><br>", "Se terminó.")

    function getrNumber(mensaje: string): number{
    
        do{
    
            var numberInput: number = parseInt(prompt(mensaje)!,10)
    
        }while(isNaN(numberInput))
        return numberInput
    }