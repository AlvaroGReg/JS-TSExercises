function calcular() {
    var value = parseInt(document.getElementById("txt_input").value, 10);
    if (document.getElementById('selector').value == "euro") {
        alert("El equivalente en euros es: " + value * 166);
    }
    else {
        alert("El equivaolente en pesetas es: " + value / 166);
    }
}
