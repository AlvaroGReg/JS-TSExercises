/*UNA EMPRESA TIENE 10 ALMACENES
NECESITA VER LAS VENTAS DE LOS 10 ALMACENES
CALCULAR LA MEDIA DE VENTAS
OBTENER UNA LISTA DE ALMACENES CON VENTAS SUPERIORES A LA MEDIA*/
var almacenes = new Array(10);
var mejoresVentas = [];
var ventasTotal = 0;
var ventasMedia;
//Relleno el array de ventas con números entre 200 y 1000 y las muestro
for (var n = 0; n < almacenes.length; n++) {
    almacenes[n] = Math.floor(Math.random() * (1000 - 200) + 200);
    ventasTotal += almacenes[n];
    document.write("Ventas en el almacén " + n + ": " + almacenes[n] + "<br>");
}
//Calculo media y muestro quiénes la superan
ventasMedia = ventasTotal / 10;
document.write('La media de ventas es de ' + ventasMedia + "<br>");
document.write('Los almacenes que superan la media de ventas son: <br>');
for (var n = 0; n < almacenes.length; n++) {
    if (almacenes[n] > ventasMedia) {
        mejoresVentas.push(n);
        document.write(n + "<br>");
    }
}
