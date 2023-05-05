document.write("Números pares menores que 40: ")

for (let n = 1; n < 41; n++){
    if (n % 2 == 0){
        document.write(" " + n + " ")
    }
}