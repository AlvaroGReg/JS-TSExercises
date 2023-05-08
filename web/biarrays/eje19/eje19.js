/* Rellenar un array 10*15 con numeros pares,
al darle 2 números que devuelva el numero que hay en esas
coordenadas.*/
var pairsArray = [];
var xLength = 10;
var yLength = 15;
//FILLARRAY
for (var n = 0; n < xLength; n++) {
    pairsArray[n] = [];
    for (var r = 0; r < yLength; r++) {
        pairsArray[n][r] = (Math.floor(Math.random() * 20)) * 2;
    }
}
document.write("Consultar consola para ver resultados: ");
console.log(pairsArray);
//CONSULT
var coordsX = parseInt(prompt('Introduce coordenadas X:'));
var coordsY = parseInt(prompt('Introduce coordenadas Y:'));
console.log("Coordenadas a consultar: " + coordsX + "/" + coordsY);
console.log("Cifra consultada: " + pairsArray[coordsX - 1][coordsY - 1]);
