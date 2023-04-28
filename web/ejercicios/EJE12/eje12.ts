let checkin : string = "S"
let total : number = 0
let count : number = 0
do{
    let newNum : number = parseInt(prompt('Introduzca un número')!,10)
    total = total + newNum
    count++
    checkin = prompt('Quiere introducir más números? "N" para parar el programa.')!
    checkin = checkin=="n" || checkin=="N" ? checkin="N" : checkin="S";
}while(checkin!="N")

alert(`Programa finalizado. Ha introducido ${count} números y suman un total de ${total}.`)