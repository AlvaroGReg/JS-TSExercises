/* CALCULAR EL CUADRADO DE LOS 100 PRIMEROS NÚMEROS Y ALMACENARLO EN UN ARRAY */
var cuadradosList = new Array(100);
for (var n = 0; n < 100; n++) {
    cuadradosList[n] = n * n;
    document.write("Cuadrado de " + n + " es = " + n * n + "<br>");
}
document.write("Consultar array completo en consola.");
console.log(cuadradosList);
