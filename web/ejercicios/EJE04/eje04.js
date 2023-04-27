alert("El precio total es de: " + getTotal() + "€");
function getTotal() {
    var total;
    var price = getPrice();
    var quantity = getQuantity();
    var iva = getIVA();
    total = (price * quantity) + ((price * quantity) / 100) * iva;
    return total;
}
function getPrice() {
    var price = parseInt(prompt("Marque el precio del producto:"), 10);
    return price;
}
function getQuantity() {
    var quantity = parseInt(prompt("Indique la cantidad que se ha vendido:"), 10);
    return quantity;
}
function getIVA() {
    var iva = parseInt(prompt("Marque el IVA que corresponde al producto:"), 10);
    return iva;
}
