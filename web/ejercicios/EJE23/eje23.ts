let marks:          number[] = []
let countApproval:  number = 0
let countFails:     number = 0
let totalGeneral:   number = 0
let totalApproval:  number = 0
let totalFails:     number = 0

for (let n = 0; n < 50; n++){

    var newMark : number = (Math.random()*10)
    marks[n]      = newMark
    totalGeneral += newMark

    if (newMark < 5){
        countFails++
        totalFails+=newMark
    }else{
        countApproval++
        totalApproval+=newMark
    }
}
console.log   (marks)
document.write('Alumnos examinados: ' + marks.length +'<br>')
document.write('Alumnos aprobados: ' + countApproval +'<br>')
document.write('Alumnos suspensos: ' + countFails +'<br>')
document.write('Media de los aprobados: ' + totalApproval/countApproval +'<br>')
document.write('Media de los suspensos: ' + totalFails/countFails +'<br>')
document.write('Media general: ' + totalGeneral/marks.length +'<br>')