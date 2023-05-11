/*Tenemos 20 añumbos, con su nombre y su nota.
Queremos un programa que pueda:
a-Buscar por nombre
b-Modificar nota
c-Media de notas
d-Media de los suspensos
e-Alumno con mejores notas
f-Alumno con peores notas*/

//Declaro lo que es un Alumno y creo una lista de 50 nombres
type Alumno = { id: number; nombre: string; nota: number };
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
  "Rosa",
];

//Hago una lista con 20 alumnos con nombres y notas aleatorias
let cantidadDeAlumnos: number = 20;
let alumnosArray: Alumno[] = new Array(cantidadDeAlumnos);

for (let n = 0; n < cantidadDeAlumnos; n++) {
  let newAlumno: Alumno = {
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
  const tabla = document.getElementById("tablealumnos") as HTMLTableElement;
  const selector = document.getElementById(
    "alumnosselector"
  ) as HTMLSelectElement;

  tabla.innerHTML = "";

  let newTR: HTMLTableRowElement = document.createElement("tr");
  let idTD: HTMLTableCellElement = document.createElement("td");
  let nameTD: HTMLTableCellElement = document.createElement("td");
  let markTD: HTMLTableCellElement = document.createElement("td");

  idTD.innerHTML = "Número de lista";
  nameTD.innerHTML = "Nombre";
  markTD.innerHTML = "Nota";

  newTR.appendChild(idTD);
  newTR.appendChild(nameTD);
  newTR.appendChild(markTD);

  tabla.appendChild(newTR);

  for (let n = 0; n < cantidadDeAlumnos; n++) {
    let newTR: HTMLTableRowElement = document.createElement("tr");
    let idTD: HTMLTableCellElement = document.createElement("td");
    let nameTD: HTMLTableCellElement = document.createElement("td");
    let markTD: HTMLTableCellElement = document.createElement("td");
    let newOption: HTMLOptionElement = document.createElement("option");

    let newID = alumnosArray[n].id.toString();
    let newName = alumnosArray[n].nombre;
    let newMark = alumnosArray[n].nota.toString();
    idTD.innerHTML = newID;
    nameTD.innerHTML = newName;
    markTD.innerHTML = newMark;
    newOption.innerHTML = newID + "/" + newName + "/" + newMark;

    newTR.appendChild(idTD);
    newTR.appendChild(nameTD);
    newTR.appendChild(markTD);
    selector.appendChild(newOption);

    tabla.appendChild(newTR);
  }
}

//Buscamos al PRIMER alumno con mayor y menor nota y lo imprimimos
function buscarMejor() {
  let best = document.getElementById("mejoralumno") as HTMLLIElement;
  let worst = document.getElementById("peoralumno") as HTMLLIElement;

  let mejor: Alumno = {
    id: 10000,
    nombre: "asd",
    nota: -1,
  };
  let peor: Alumno = {
    id: 10000,
    nombre: "asd",
    nota: 11,
  };

  alumnosArray.forEach((element) => {
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

function buscarAlumno() {
  //Obtenemos los elementos
  let inputName = document.getElementById(
    "inputnametosearch"
  ) as HTMLInputElement;

  let listOfFound = document.getElementById("foundalumnos") as HTMLUListElement;
  //Vacío el elemento de salida
  listOfFound.innerHTML = "";

  //Genero una lista de coincidencias
  let newAlumnsList: Alumno[] = [];
  let nameToSearch: string = inputName.value;

  alumnosArray.forEach((element) => {
    if (nameToSearch == element.nombre) {
      newAlumnsList.push(element);
    }
  });

  //Si la lista de coincidencias tiene alguna, la imprimimos
  if (newAlumnsList.length > 0) {
    newAlumnsList.forEach((element) => {
      let newLI = document.createElement("li");
      let newAlumnString =
        "Nº: " + element.id + "/" + element.nombre + "/Nota: " + element.nota;

      newLI.innerHTML = newAlumnString;
      listOfFound.appendChild(newLI);
    });
  } else {
    let newLI = document.createElement("li");
    let failMsg: string =
      "No se ha encontrado ningún alumno con el nombre introducido (" +
      nameToSearch +
      ")";

    listOfFound.appendChild(newLI);
    newLI.innerHTML = failMsg;
  }
}

function cambiarNota() {
  let selector = document.getElementById(
    "alumnosselector"
  ) as HTMLSelectElement;
  let noteInput = document.getElementById("inputnota") as HTMLInputElement;

  let alumnoToEditNum: number = selector.selectedIndex;
  let newNote: number = parseInt(noteInput.value);

  if (newNote == undefined || newNote < 0 || newNote > 10) {

    alert("La nota introducida es errónea o no se puede aplicar");
  } else {

    if (alumnosArray[alumnoToEditNum].nota != newNote) {
      alumnosArray[alumnoToEditNum].nota = newNote;

      calcMedia();
      buscarMejor();
    }
  }
}

function calcMedia() {
  let outputMedia = document.getElementById("limedia") as HTMLLIElement;
  let outputSuspensos = document.getElementById(
    "limediasuspensos"
  ) as HTMLLIElement;

  let notaTotal: number = 0;
  let notaTotalSus: number = 0;
  let totalSus: number = 0;

  alumnosArray.forEach((element) => {
    let newNota = element.nota;
    notaTotal += newNota;

    if (newNota < 5) {
      notaTotalSus += newNota;
      totalSus++;
    }

    outputMedia.innerHTML = "Media total: " + notaTotal / cantidadDeAlumnos;
    outputSuspensos.innerHTML = "Media suspensos: " + notaTotalSus / totalSus;
  });
}

function ordernarPorNombre(direccion: number) {
  console.log(alumnosArray);
}