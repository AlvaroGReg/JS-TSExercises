// Genera un número aleatorio del 1 al 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const resultOutput = document.getElementById("result")

function checknum() {
  // Obtiene el valor del input
  const valorInput = document.getElementById("usernum").value;

  // Comprueba que el valor introducido es un número
  if (isNaN(valorInput)) {
    resultOutput.innerText =
      "Debes introducir un número.";
  } else {
    // Convierte el valor del input a un número entero
    const numeroIntroducido = parseInt(valorInput, 10);

    // Compara el número introducido con el número aleatorio
    if (numeroIntroducido < numeroAleatorio) {
		resultOutput.innerHTML =
        "El número introducido es menor que el número aleatorio.";
    } else if (numeroIntroducido > numeroAleatorio) {
		resultOutput.innerHTML =
        "El número introducido es mayor que el número aleatorio.";
    } else {
		resultOutput.innerHTML = "¡Has acertado!";
    }
  }
}

document.getElementById('buttonid').addEventListener('click', checknum())