function calcular(){

    let aValue : number = document.getElementById('numA')!.value
    let bValue : number = document.getElementById('numB')!.value
    let cValue : number = document.getElementById('numC')!.value

    let xValuePlus : number
    let xValueMinus : number
    let rValue : number = (bValue*bValue) - (4*aValue*cValue)

    if(rValue<0){
        alert('Ecuación inválida o sin solución b*b-4ac=' + rValue)
    }else{
    xValuePlus = ((-bValue) + Math.pow(rValue, 1/2))/2*aValue
    xValueMinus = ((-bValue) - Math.pow(rValue, 1/2))/2*aValue

    alert("Posibles resultados = " + xValueMinus + " / " + xValuePlus)
    }
}