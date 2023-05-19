// Obtener referencias a los elementos del DOM
const dateInput = document.getElementById("date")
const telInput  = document.getElementById("tel")
const dniInput  = document.getElementById("dni")
const mailInput = document.getElementById("mail")
const btnSave 	= document.getElementById("btn_save")
const listToShow = document.getElementById("listToShow")

// Función para comprobar si los campos con asteriscos tienen valores
function checkRequiredFields() {
	if (
		dateInput.value.trim() === "" ||
		dniInput.value.trim() === "" ||
		mailInput.value.trim() === ""
	) {
		alert("Por favor, completa los campos obligatorios.")
		return false // Si algún campo requerido está vacío, se detiene la validación
	}
	return true // Si todos los campos requeridos tienen valores, se continúa con la validación
}

// Función para comprobar los valores de los campos con expresiones regulares
function checkFieldValues() {
	if (
		!checkDNI(dniInput.value.trim()) ||
		!checkEmail(mailInput.value.trim()) ||
		!checkDate(dateInput.value) ||
		!checkTel(telInput.value.trim())
	) {
		return false
	}

	return true
}

// Función para imprimir los valores en la lista
function printFieldValues() {
	const li = document.createElement("li")
	li.textContent = `Fecha: ${dateInput.value}, Teléfono: ${telInput.value}, DNI: ${dniInput.value}, Mail: ${mailInput.value}`
	listToShow.appendChild(li)
}

// Asignar manejadores de eventos al botón
btnSave.addEventListener("click", function (event) {
	event.preventDefault() // Evitar que se envíe el formulario por defecto

	if (!checkRequiredFields()) {
		return // Si los campos requeridos están vacíos, no se continúa con la validación ni la impresión
	}

	if (!checkFieldValues()) {
		return // Si alguna validación falla, no se continúa con la impresión
	}

	printFieldValues() // Si todo es válido, se imprimen los valores en la lista
})

function checkDNI(dni) {
	const dniRegex = /^([0-9]{8})([A-Za-z])$/
	const validLetters = "TRWAGMYFPDXBNJZSQVHLCKE"

	const match = dni.match(dniRegex)

	if (!match) {
		alert(
			"El formato del DNI es inválido. Debe contener 8 dígitos seguidos de una letra."
		)
		return false
	}

	const [, dniNumber, dniLetter] = match

	const calculatedLetter = validLetters.charAt(dniNumber % 23)

	if (calculatedLetter !== dniLetter.toUpperCase()) {
		alert("La letra del DNI es incorrecta.")
		return false
	}

	return true
}

function checkEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailRegex.test(email.trim())) {
		alert("El formato del correo electrónico es inválido.")
		return false
	}

	return true
}

function checkTel(phoneNumber) {
	const phoneRegex = /^\d{9}$/

	if (!phoneRegex.test(phoneNumber.trim())) {
		alert(
			"El formato del número de teléfono es inválido. Debe contener 9 dígitos numéricos."
		)
		return false
	}

	return true
}

function checkDate(date) {
	const dateRegex = /^(\d{2})[-./](\d{2})[-./](\d{4})$/;
  
	if (!dateRegex.test(date.trim())) {
	  alert('El formato de fecha es inválido. Debe tener el formato dd/mm/yyyy.');
	  return false;
	}
  
	const [, day, month, year] = date.match(dateRegex);
  
	const parsedDay = parseInt(day, 10);
	const parsedMonth = parseInt(month, 10);
	const parsedYear = parseInt(year, 10);
  
	if (parsedDay <= 0 || parsedDay > 31) {
	  alert('El día de la fecha debe ser mayor que 0 y menor o igual que 31.');
	  return false;
	}
  
	if (parsedMonth <= 0 || parsedMonth > 12) {
	  alert('El mes de la fecha debe ser mayor que 0 y menor o igual que 12.');
	  return false;
	}
  
	if (
	  (parsedMonth === 4 || parsedMonth === 6 || parsedMonth === 9 || parsedMonth === 11) &&
	  parsedDay > 30
	) {
	  alert('El mes especificado tiene 30 días como máximo.');
	  return false;
	}
  
	if (parsedMonth === 2) {
	  const isLeapYear = (parsedYear % 4 === 0 && parsedYear % 100 !== 0) || parsedYear % 400 === 0;
	  const maxDays = isLeapYear ? 29 : 28;
  
	  if (parsedDay > maxDays) {
		alert('Febrero tiene ' + maxDays + ' días en el año especificado.');
		return false;
	  }
	}
  
	return true;
  }
  