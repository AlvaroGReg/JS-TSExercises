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
    "Ñarta",
    "Luis",
    "Laura",
    "Diego",
    "Lucía",
    "Ricardo",
    "Ñisabel",
    "Jorge",
    "Pablo",
    "Sofía",
    "Fernando",
    "Natalia",
    "Ñalejandro",
    "Cristina",
    "Esteban",
    "Elena",
    "Gonzalo",
    "Silvia",
    "Guillermo",
    "Raquel",
    "Roberto",
    "Adriana",
    "Ñiguel",
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
    "🙂",
    "David",
    "Clara",
    "José",
    "Daniela",
    "Ignacio",
    "Lucas",
    "Marina",
    "Francisco",
    "💖",
    "Ñantonio",
    "🦄",
];
//Hago una lista con 20 alumnos con nombres y notas aleatorias
var cantidadDeAlumnos = 20;
var alumnosArray = new Array(cantidadDeAlumnos);
for (var n = 0; n < cantidadDeAlumnos; n++) {
    var newAlumno = {
        id: n + 1,
        nombre: nombres[Math.floor(Math.random() * nombres.length)],
        nota: Math.floor(Math.random() * 11),
    };
    alumnosArray[n] = newAlumno;
}
//Se ejecuta la iniciar el programa
cargarTabla();
buscarMejor();
calcMedia();
//MÉTODOS DEL PROGRAMA
//Generamos/Actualizamos datos de la tabla Y EL SELECTOR DE CAMBIAR NOTA
function cargarTabla() {
    var tabla = document.getElementById("tablealumnos");
    var selector = document.getElementById("alumnosselector");
    tabla.innerHTML = "";
    selector.innerHTML = "";
    var newTR = document.createElement("tr");
    var idTD = document.createElement("td");
    var nameTD = document.createElement("td");
    var markTD = document.createElement("td");
    idTD.setAttribute('onclick', "sortTable('id')");
    nameTD.setAttribute('onclick', "sortTable('nombre')");
    markTD.setAttribute('onclick', "sortTable('nota')");
    idTD.innerHTML = "Número de lista";
    nameTD.innerHTML = "Nombre";
    markTD.innerHTML = "Nota";
    newTR.appendChild(idTD);
    newTR.appendChild(nameTD);
    newTR.appendChild(markTD);
    tabla.appendChild(newTR);
    for (var n = 0; n < cantidadDeAlumnos; n++) {
        var newTR_1 = document.createElement("tr");
        var idTD_1 = document.createElement("td");
        var nameTD_1 = document.createElement("td");
        var markTD_1 = document.createElement("td");
        var newOption = document.createElement("option");
        var newID = alumnosArray[n].id.toString();
        var newName = alumnosArray[n].nombre;
        var newMark = alumnosArray[n].nota.toString();
        idTD_1.innerHTML = newID;
        nameTD_1.innerHTML = newName;
        markTD_1.innerHTML = newMark;
        newOption.innerHTML = newID + "/" + newName + "/" + newMark;
        newTR_1.appendChild(idTD_1);
        newTR_1.appendChild(nameTD_1);
        newTR_1.appendChild(markTD_1);
        selector.appendChild(newOption);
        tabla.appendChild(newTR_1);
    }
}
//Buscamos al PRIMER alumno con mayor y menor nota y lo imprimimos
function buscarMejor() {
    var best = document.getElementById("mejoralumno");
    var worst = document.getElementById("peoralumno");
    var mejor = {
        id: 10000,
        nombre: "asd",
        nota: -1,
    };
    var peor = {
        id: 10000,
        nombre: "asd",
        nota: 11,
    };
    alumnosArray.forEach(function (element) {
        if (element.nota < peor.nota) {
            peor = element;
        }
        if (element.nota > mejor.nota) {
            mejor = element;
        }
        best.innerHTML = "nº " + mejor.id + "/" + mejor.nombre + "/" + mejor.nota;
        worst.innerHTML = "nº " + peor.id + "/" + peor.nombre + "/" + peor.nota;
    });
}
//Buscamos en la lista strings iguales al del cajón
function buscarAlumno() {
    //Obtenemos los elementos
    var inputName = document.getElementById("inputnametosearch");
    var listOfFound = document.getElementById("foundalumnos");
    //Vacío el elemento de salida
    listOfFound.innerHTML = "";
    //Genero una lista de coincidencias
    var newAlumnsList = [];
    var nameToSearch = inputName.value;
    alumnosArray.forEach(function (element) {
        if (nameToSearch == element.nombre) {
            newAlumnsList.push(element);
        }
    });
    //Si la lista de coincidencias tiene alguna, la imprimimos
    if (newAlumnsList.length > 0) {
        newAlumnsList.forEach(function (element) {
            var newLI = document.createElement("li");
            var newAlumnString = "Nº: " + element.id + "/" + element.nombre + "/Nota: " + element.nota;
            newLI.innerHTML = newAlumnString;
            listOfFound.appendChild(newLI);
        });
    }
    else {
        var newLI = document.createElement("li");
        var failMsg = "No se ha encontrado ningún alumno con el nombre introducido (" +
            nameToSearch +
            ")";
        listOfFound.appendChild(newLI);
        newLI.innerHTML = failMsg;
    }
}
/**
 * The function changes the grade of a selected student and updates the table,
 * calculates the new
 * average and highlights the best student.
 */
function cambiarNota() {
    var selector = document.getElementById("alumnosselector");
    var noteInput = document.getElementById("inputnota");
    var alumnoToEditNum = selector.selectedIndex;
    var newMark = parseInt(noteInput.value);
    var oldMark = alumnosArray[alumnoToEditNum].nota;
    if (newMark < 0 || newMark > 10 || isNaN(newMark)) {
        alert("La nota introducida es errónea o no se puede aplicar");
    }
    else if (oldMark != newMark) {
        alumnosArray[alumnoToEditNum].nota = newMark;
        cargarTabla();
        buscarMejor();
        calcMedia();
    }
}
/**
 * The function calculates the total and average grades of a group of students, as well as the average
 * grade of those who failed.
 */
function calcMedia() {
    var outputMedia = document.getElementById("limedia");
    var outputSuspensos = document.getElementById("limediasuspensos");
    var notaTotal = 0;
    var notaTotalSus = 0;
    var totalSus = 0;
    alumnosArray.forEach(function (element) {
        var newNota = element.nota;
        notaTotal += newNota;
        if (newNota < 5) {
            notaTotalSus += newNota;
            totalSus++;
        }
        outputMedia.innerHTML = "Media total: " + notaTotal / cantidadDeAlumnos;
        outputSuspensos.innerHTML = "Media suspensos: " + notaTotalSus / totalSus;
    });
}
/**
 * The function sorts an array of students based on a selected value and then loads the sorted data
 * into a table.
 * @param {string} valor - a string that represents the column by which the table should be sorted. It
 * can be either "id", "nombre", or "nota".
 */
function sortTable(valor) {
    switch (valor) {
        case 'id':
            alumnosArray.sort(function (a, b) { return a.id - b.id; });
            break;
        case 'nombre':
            alumnosArray.sort(function (a, b) { return a.nombre.localeCompare(b.nombre, 'es'); });
            break;
        case 'nota':
            alumnosArray.sort(function (a, b) { return a.nota - b.nota; });
            break;
    }
    cargarTabla();
}
