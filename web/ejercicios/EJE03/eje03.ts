let number : number = getNumber()

alert("El doble de su número es: " + number*2 + " y el triple es: " + number*3 + ".")

function getNumber() : number{
    let newPrompt :string = prompt("Introduzca un número para que la app te diga su doble y su triple.","Número")!
    let newNum : number = parseInt(newPrompt, 10)
    return newNum
}