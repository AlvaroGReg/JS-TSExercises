alert("Introduce dos números para que le programa te diga cuál es mayor.")

let num1 : number = getNumber()
let num2 : number = getNumber()

if(num1>num2){
    alert("El mayor número de los dos es " + num1)
}else{
    alert("El mayor número de los dos es " + num2)
}

function getNumber() : number{
    let newPrompt :string = prompt("Introduce el valor del número", "numero")!
    let newNum = parseToNumber(newPrompt)
    return newNum
}

function parseToNumber(stringToParse : string) : number{
    let parsedNum : number
    try{
        parsedNum = parseInt(stringToParse, 10)
    }catch{
        getNumber()
    }
    return parsedNum!
}