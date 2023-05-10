/*Tenemos 20 añumbos, con su nombre y su nota.
Queremos un programa que pueda:
a-Buscar por nombre
b-Modificar nota
c-Media de notas
d-Media de los suspensos
e-Alumno con mejores notas
f-Alumno con peores notas*/
var nombres = [
    "Juan",
    "Carlos",
    "Ana",
    "María",
    "Pedro",
    "Marta",
    "Luis",
    "Laura",
    "Diego",
    "Lucía",
    "Ricardo",
    "Isabel",
    "Jorge",
    "Pablo",
    "Sofía",
    "Fernando",
    "Natalia",
    "Alejandro",
    "Cristina",
    "Esteban",
    "Elena",
    "Gonzalo",
    "Silvia",
    "Guillermo",
    "Raquel",
    "Roberto",
    "Adriana",
    "Miguel",
    "Patricia",
    "Manuel",
    "Inés",
    "Alberto",
    "Teresa",
    "Santiago",
    "Olga",
    "Andrés",
    "Beatriz",
    "Álvaro",
    "Carmen",
    "David",
    "Clara",
    "José",
    "Daniela",
    "Ignacio",
    "Lucas",
    "Marina",
    "Francisco",
    "Victoria",
    "Antonio",
    "Rosa"
];
//Hago una lista con 20 alumnos
var cantidadDeAlumnos = 20;
var alumnosArray = new Array(cantidadDeAlumnos);
for (var n = 0; n < cantidadDeAlumnos; n++) {
    var newName = nombres[Math.floor(Math.random() * nombres.length)];
    var newMark = Math.floor((Math.random() * 10));
    alumnosArray[n].nombre = newName;
    alumnosArray[n].nota = newMark;
}
console.log(alumnosArray);
