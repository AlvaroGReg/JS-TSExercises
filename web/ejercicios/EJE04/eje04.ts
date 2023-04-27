alert("El precio total es de: " + getTotal() + "€")

function getTotal() : number{
    let total : number
    let price : number = getPrice()
    let quantity : number = getQuantity()
    let iva : number = getIVA()

    total = (price * quantity) + ((price * quantity)/100)*iva
    return total
}

function getPrice () : number{
    let price = parseInt(prompt("Marque el precio del producto:")!,10)
    return price
}
function getQuantity () : number{
    let quantity = parseInt(prompt("Indique la cantidad que se ha vendido:")!,10)
    return quantity
}

function getIVA () : number{
    let iva = parseInt(prompt("Marque el IVA que corresponde al producto:")!,10)
    return iva
}