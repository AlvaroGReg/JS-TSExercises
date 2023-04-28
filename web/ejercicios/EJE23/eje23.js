var marks = [];
var countApproval = 0;
var countFails = 0;
var totalGeneral = 0;
var totalApproval = 0;
var totalFails = 0;
for (var n = 0; n < 50; n++) {
    var newMark = (Math.random() * 10);
    marks[n] = newMark;
    totalGeneral += newMark;
    if (newMark < 5) {
        countFails++;
        totalFails += newMark;
    }
    else {
        countApproval++;
        totalApproval += newMark;
    }
}
console.log(marks);
document.write('Alumnos examinados: ' + marks.length + '<br>');
document.write('Alumnos aprobados: ' + countApproval + '<br>');
document.write('Alumnos suspensos: ' + countFails + '<br>');
document.write('Media de los aprobados: ' + totalApproval / countApproval + '<br>');
document.write('Media de los suspensos: ' + totalFails / countFails + '<br>');
document.write('Media general: ' + totalGeneral / marks.length + '<br>');
