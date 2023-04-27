let letter: string = prompt("Introduzca una vocal: ")!;

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    alert("Ha introducido una vocal");
    break;
    
  default:
    alert("No ha introducido una vocal");
}
