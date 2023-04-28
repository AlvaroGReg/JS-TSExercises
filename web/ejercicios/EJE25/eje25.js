/*CONVERTIDOS DE CELSIUS FAHRENHEIT Y KELVIN*/
var inputCelsius = document.getElementById('inputcelsius');
var inputFahrenheit = document.getElementById('inputfahrenheit');
var inputKelvin = document.getElementById('inputkelvin');
function calculate() {
    var choosenUnit = document.querySelector('input[name="selected"]:checked').id;
    var value = parseInt(document.getElementById('input' + choosenUnit).value);
    switch (choosenUnit) {
        case "celsius":
            celsiusToOthers(value);
            break;
        case "fahrenheit":
            fahrenheitToOthers(value);
            break;
        case "kelvin":
            kelvinToOthers(value);
            break;
    }
}
function celsiusToOthers(value) {
    inputFahrenheit.value = ((value * 1.8) + 32).toString();
    inputKelvin.value = (value + 273.15).toString();
}
function fahrenheitToOthers(value) {
    inputCelsius.value = ((value - 32) / 1.8).toString();
    inputKelvin.value = (((value - 32) / 1.8) + 273.15).toString();
}
function kelvinToOthers(value) {
    inputFahrenheit.value = (((value - 273.15) * 1.8) + 32).toString();
    inputCelsius.value = (value - 273.15).toString();
}
