function calcular() {
  let aValue: number = parseInt((document.getElementById("numA")as HTMLInputElement).value,10)
  let bValue: number = parseInt((document.getElementById("numB")as HTMLInputElement).value,10)
  let cValue: number = parseInt((document.getElementById("numC")as HTMLInputElement).value,10)

  let xValuePlus:  number
  let xValueMinus: number
  let rValue:      number = bValue * bValue - 4 * aValue * cValue

  if (rValue < 0) {
    alert("Ecuación inválida o sin solución b*b-4ac=" + rValue)
  } else {
    xValuePlus =  ((-bValue + Math.pow(rValue, 1 / 2)) / 2) * aValue
    xValueMinus = ((-bValue - Math.pow(rValue, 1 / 2)) / 2) * aValue

    alert("Posibles resultados = " + xValueMinus + " / " + xValuePlus)
  }
}