/* CALCULAR EL CUADRADO DE LOS 100 PRIMEROS NÚMEROS Y ALMACENARLO EN UN ARRAY */
let cuadradosList: number[] = new Array(100)

for(let n=0; n<100; n++){
    cuadradosList[n] = n*n
    document.write("Cuadrado de " + n + " es = " + n*n + "<br>")
}
document.write("Consultar array completo en consola.")

console.log(cuadradosList)