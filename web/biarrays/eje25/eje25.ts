/*Tenemos 20 añumbos, con su nombre y su nota.
Queremos un programa que pueda:
a-Buscar por nombre
b-Modificar nota
c-Media de notas
d-Media de los suspensos
e-Alumno con mejores notas
f-Alumno con peores notas*/

//Declaro lo que es un Alumno y creo una lista de 50 nombres
type Alumno = {nombre: string, nota: number}
const nombres: string[] = [
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
  ]

//Hago una lista con 20 alumnos
let cantidadDeAlumnos: number   = 20
let alumnosArray:      Alumno[] = new Array(cantidadDeAlumnos)

for (let n = 0; n < cantidadDeAlumnos; n++){
    let newName: string = nombres[Math.floor(Math.random()*nombres.length)]
    let newMark: number = Math.floor((Math.random()*10))
    alumnosArray[n].nombre = newName
    alumnosArray[n].nota   = newMark
}

console.log(alumnosArray)

