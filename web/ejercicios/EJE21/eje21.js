function calcular() {
    var aValue = parseInt(document.getElementById("numA").value, 10);
    var bValue = parseInt(document.getElementById("numB").value, 10);
    var cValue = parseInt(document.getElementById("numC").value, 10);
    var xValuePlus;
    var xValueMinus;
    var rValue = bValue * bValue - 4 * aValue * cValue;
    if (rValue < 0) {
        alert("Ecuación inválida o sin solución b*b-4ac=" + rValue);
    }
    else {
        xValuePlus = ((-bValue + Math.pow(rValue, 1 / 2)) / 2) * aValue;
        xValueMinus = ((-bValue - Math.pow(rValue, 1 / 2)) / 2) * aValue;
        alert("Posibles resultados = " + xValueMinus + " / " + xValuePlus);
    }
}
