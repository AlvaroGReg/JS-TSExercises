function consultar() {
    const km:           number  = parseInt((document.getElementById(
        'inputKiloms') as HTMLInputElement).value, 10)
    const festivo:      number  = (document.querySelector(
        'input[name="dayType"]:checked') as HTMLInputElement).value == "festivo" ? 1 : 0
    const precioKm:     number  = 0.30
    const descuento:    number  = (km > 80) ? (km * precioKm) * (festivo ? 0.15 : 0.20) : 0
    const precio:       number  = (km * precioKm) - descuento

    alert(`precio: ${precio}`)
}