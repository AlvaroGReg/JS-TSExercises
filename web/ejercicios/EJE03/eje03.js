var number = promptNumber();
alert("El doble de su número es: " + number * 2 + " y el triple es: " + number * 3 + ".");
function promptNumber() {
    var newPrompt = prompt("Introduzca un número para que la app te diga su doble y su triple.", "Número");
    var newNum = parseInt(newPrompt, 10);
    return newNum;
}
