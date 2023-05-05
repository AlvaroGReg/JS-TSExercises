/*PROGRAMA QUE PIDE HORAS MINUTOS Y SEGUNDOS Y DEVUELVE LA MISMA HORA CON UN SEGUNDO MÁS*/

function addSecond(): void{
    let clock                    = (document.getElementById('timeInput')as HTMLInputElement)
    let hourString:     string   = clock.value
    let hourArray:      string[] = hourString.split(":")
    let hours:          number   = parseInt(hourArray[0],10)
    let minutes:        number   = parseInt(hourArray[1],10)
    let seconds:        number   = parseInt(hourArray[2],10)
    let totalSeconds:   number   = hours*3600 + minutes*60 + seconds

    totalSeconds++

    hours       = Math.trunc(totalSeconds/3600)==24 ? 0 : Math.trunc(totalSeconds/3600)
    minutes     = Math.trunc((totalSeconds%3600)/60)
    seconds     = (totalSeconds%3600)%60
    hourString  = (('0' + hours).slice(-2))+":"+(('0' + minutes).slice(-2))+":"+(('0' + seconds).slice(-2))
    clock.value = hourString
    
}
