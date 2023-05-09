"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getANumber = void 0;
//RECIBE TEXTO DEVUELVE UN NÚMERO INTRODUCIDO POR EL USUARIO
function getANumber(mensaje) {
    do {
        var numberInput = parseInt(prompt(mensaje), 10);
    } while (isNaN(numberInput));
    return numberInput;
}
exports.getANumber = getANumber;
