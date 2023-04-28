var checkin = "S";
var total = 0;
var count = 0;
do {
    var newNum = parseInt(prompt('Introduzca un número'), 10);
    total = total + newNum;
    count++;
    checkin = prompt('Quiere introducir más números? "N" para parar el programa.');
    checkin = checkin == "n" || checkin == "N" ? checkin = "N" : checkin = "S";
} while (checkin != "N");
alert("Programa finalizado. Ha introducido ".concat(count, " números y suman un total de ").concat(total, "."));
