alert("Introduce dos números para que le programa te diga cuál es mayor.");
var num1 = getNumber();
var num2 = getNumber();
if (num1 > num2) {
    alert("El mayor número de los dos es " + num1);
}
else {
    alert("El mayor número de los dos es " + num2);
}
function getNumber() {
    var newPrompt = prompt("Introduce el valor del número", "numero");
    var newNum = parseToNumber(newPrompt);
    return newNum;
}
function parseToNumber(stringToParse) {
    var parsedNum;
    try {
        parsedNum = parseInt(stringToParse, 10);
    }
    catch (_a) {
        getNumber();
    }
    return parsedNum;
}
