/*
INICIO
"iNTRODUZCA EL NÚNMERO DEL MES (ENTRE 1 Y 12)"
LEER numeromes
MIENTRAS numeromes <0||>12 "Mes incorrecto introduzca un numero entre 1 y 12"
SWITCH
    1...12 inicial del mes
FINAL
*/
function preguntaMes() {
    var meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    while (true) {
        var mesNum = void 0;
        var mesString = prompt('Introduzca un número entre 1 y 12');
        if (mesString && !isNaN(mesNum = parseInt(mesString, 10)) && mesNum >= 1 && mesNum <= 12) {
            var mes = meses[mesNum - 1];
            console.log("El mes ".concat(mesNum, " es ").concat(mes, "."));
            break;
        }
    }
}
preguntaMes();
