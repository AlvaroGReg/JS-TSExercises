/*CONVERTIDOS DE CELSIUS FAHRENHEIT Y KELVIN*/

let inputCelsius = document.getElementById('inputcelsius')as HTMLInputElement
let inputFahrenheit = document.getElementById('inputfahrenheit')as HTMLInputElement
let inputKelvin = document.getElementById('inputkelvin')as HTMLInputElement

function calculate() {

    let choosenUnit : string = (document.querySelector('input[name="selected"]:checked') as HTMLInputElement).id;
    let value : number = parseInt((document.getElementById('input'+choosenUnit)as HTMLInputElement).value)

    switch(choosenUnit){
        case "celsius":
            celsiusToOthers(value)
            break
        case "fahrenheit":
            fahrenheitToOthers(value)
            break
        case "kelvin":
            kelvinToOthers(value)
            break
    }
}

function celsiusToOthers(value : number){

    inputFahrenheit.value = ((value*1.8)+32).toString()
    inputKelvin.value = (value+273.15).toString()
}

function fahrenheitToOthers(value : number){
    inputCelsius.value = ((value-32)/1.8).toString()
    inputKelvin.value = (((value-32)/1.8)+273.15).toString()
}

function kelvinToOthers(value : number){
    inputFahrenheit.value = (((value-273.15)*1.8)+32).toString()
    inputCelsius.value = (value-273.15).toString()
}