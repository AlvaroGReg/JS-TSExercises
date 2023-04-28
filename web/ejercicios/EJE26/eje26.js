var dni = parseInt(prompt("Introduzca los números de su DNI: "), 10);
var letrasList = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
alert("La letra de su dni sería: " + letrasList[dni % 23]);
