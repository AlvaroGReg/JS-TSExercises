function calcular() {
    var aValue = document.getElementById('numA').value;
    var bValue = document.getElementById('numB').value;
    var cValue = document.getElementById('numC').value;
    var xValuePlus;
    var xValueMinus;
    var rValue = (bValue * bValue) - (4 * aValue * cValue);
    if (rValue < 0) {
        alert('Ecuación inválida o sin solución b*b-4ac=' + rValue);
    }
    else {
        xValuePlus = ((-bValue) + Math.pow(rValue, 1 / 2)) / 2 * aValue;
        xValueMinus = ((-bValue) - Math.pow(rValue, 1 / 2)) / 2 * aValue;
        alert("Posibles resultados = " + xValueMinus + " / " + xValuePlus);
    }
}
