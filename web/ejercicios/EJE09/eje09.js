var radio = -1;
while (radio < 0) {
    radio = parseInt(prompt("Introduzca el radio del círculo (>0)"), 10);
}
alert("El área del círculo es = " + (Math.PI * radio * radio) + " y el diámetro es igual a " + (Math.PI * radio * 2));
