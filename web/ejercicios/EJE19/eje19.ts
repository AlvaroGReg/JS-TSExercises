/*
INICIO
"iNTRODUZCA EL NÚNMERO DEL MES (ENTRE 1 Y 12)"
LEER numeromes
MIENTRAS numeromes <0||>12 "Mes incorrecto introduzca un numero entre 1 y 12"
SWITCH
    1...12 inicial del mes
FINAL
*/

function preguntaMes(): void {
  while (true) {
    let mesNum: number;
    const mesString: string | null = prompt(
      "Introduzca un número entre 1 y 12"
    );

    if (
      mesString &&
      !isNaN((mesNum = parseInt(mesString!, 10))) &&
      mesNum >= 1 &&
      mesNum <= 12
    ) {
      let mes: string;

      switch (mesNum) {
        case 1:
            mes = "Enero";
            break;
        case 2:
            mes = "Febrero";
            break;
        case 3:
            mes = "Marzo";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Mayo";
            break;
        case 6:
            mes = "Junio";
            break;
        case 7:
            mes = "Julio";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Septiembre";
            break;
        case 10:
            mes = "Octubre";
            break;
        case 11:
            mes = "Noviembre";
            break;
        case 12:
            mes = "Diciembre";
            break;
      }

      alert(`El mes ${mesNum} es ${mes!}.`);
      break;
    }
  }
}

preguntaMes();