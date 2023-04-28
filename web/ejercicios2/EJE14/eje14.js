function consultar() {
    var km = parseInt(document.getElementById('inputKiloms').value, 10);
    var festivo = document.querySelector('input[name="dayType"]:checked').value == "festivo" ? 1 : 0;
    var precioKm = 0.30;
    var descuento = (km > 80) ? (km * precioKm) * (festivo ? 0.15 : 0.20) : 0;
    var precio = (km * precioKm) - descuento;
    alert("precio: ".concat(precio));
}
