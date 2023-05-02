/*UNA EMPRESA TIENE 10 ALMACENES
NECESITA VER LAS VENTAS DE LOS 10 ALMACENES
CALCULAR LA MEDIA DE VENTAS
OBTENER UNA LISTA DE ALMACENES CON VENTAS SUPERIORES A LA MEDIA*/

let almacenes:     number[] = new Array(10)
let mejoresVentas: number[] = []
let ventasTotal:   number   = 0
let ventasMedia:   number

//Relleno el array de ventas con números entre 200 y 1000 y las muestro
for (let n = 0; n < almacenes.length; n++){

    almacenes[n]  = Math.floor(Math.random()*(1000-200) + 200)
    ventasTotal  += almacenes[n]
    document.write("Ventas en el almacén " + n + ": " + almacenes[n] + "<br>")
}

//Calculo media y muestro quiénes la superan
ventasMedia = ventasTotal/10
document.write('La media de ventas es de ' + ventasMedia + "y la superan los almacenes:<br>")

for (let n = 0; n < almacenes.length; n++){
    if(almacenes[n] > ventasMedia){
        mejoresVentas.push(n)
        document.write(n + "<br>")
    }
}