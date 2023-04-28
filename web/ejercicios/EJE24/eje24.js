/*PROGRAMA QUE PIDE HORAS MINUTOS Y SEGUNDOS Y DEVUELVE LA MISMA HORA CON UN SEGUNDO MÁS*/
function calculate() {
    var clock = document.getElementById('timeInput');
    var hourString = clock.value;
    var hourArray = hourString.split(":");
    var hours = parseInt(hourArray[0], 10);
    var minutes = parseInt(hourArray[1], 10);
    var seconds = parseInt(hourArray[2], 10);
    var totalSeconds = hours * 3600 + minutes * 60 + seconds;
    totalSeconds++;
    hours = Math.trunc(totalSeconds / 3600) == 24 ? 0 : Math.trunc(totalSeconds / 3600);
    minutes = Math.trunc((totalSeconds % 3600) / 60);
    seconds = (totalSeconds % 3600) % 60;
    hourString = (('0' + hours).slice(-2)) + ":" + (('0' + minutes).slice(-2)) + ":" + (('0' + seconds).slice(-2));
    clock.value = hourString;
}
