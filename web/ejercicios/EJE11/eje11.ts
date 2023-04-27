let year : number = -1

while(year<0){
    year = parseInt(prompt("Introduce un año (>0) para averiguar si es bisiesto")!,10)
}

if(year%400==0){
    alert("El año " + year + " es bisiesto")
}else if(year%4==0 && year%100!=0){
    alert("El año " + year + " es bisiesto")
}else{
    alert("El año " + year + " no es bisiesto.")
}