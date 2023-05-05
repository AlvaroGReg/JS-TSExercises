
function convert() {
  let value : number = parseInt((document.getElementById("txt_input")as HTMLInputElement).value,10)

  if((document.getElementById('selector')as HTMLInputElement ).value == "euro"){
    alert("El equivalente en euros es: " + value*166)
  }else{
    alert("El equivaolente en pesetas es: " + value/166)
  }
}
