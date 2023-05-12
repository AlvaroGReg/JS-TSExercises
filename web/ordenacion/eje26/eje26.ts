//Genero un array de tipo tv que almacena 5 tvs
//con id, nobmre marca, coste de envio y precio
type tv = { id: number; 	nombre: string; marca: string;
	envio: boolean; precio: number }

const tvList: tv[] = new Array(5)
fillArray()
printTable()

function printTable(){

	const table = document.getElementById('tvtable')as HTMLTableElement
	let newRow: 	HTMLTableRowElement	 = document.createElement('tr')
	let nameCell: 	HTMLTableCellElement = document.createElement('td')
	let marcaCell: 	HTMLTableCellElement = document.createElement('td')
	let envioCell: 	HTMLTableCellElement = document.createElement('td')
	let precioCell: HTMLTableCellElement = document.createElement('td')

	table.innerHTML = ""

	nameCell.innerHTML = "Nombre producto"
	nameCell.setAttribute('onclick', "ordenarTabla('name')")
	newRow.appendChild(nameCell)

	marcaCell.innerHTML = "Marca"
	marcaCell.setAttribute('onclick', "ordenarTabla('marca')")
	newRow.appendChild(marcaCell)

	envioCell.innerHTML = "Coste de envío"
	newRow.appendChild(envioCell)

	precioCell.innerHTML = "Precio"
	precioCell.setAttribute('onclick', "ordenarTabla('precio')")
	newRow.appendChild(precioCell)

	table.appendChild(newRow)

	tvList.forEach(element => {
		
		let newRow: 	HTMLTableRowElement	 = document.createElement('tr')
		let nameCell: 	HTMLTableCellElement = document.createElement('td')
		let marcaCell: 	HTMLTableCellElement = document.createElement('td')
		let envioCell: 	HTMLTableCellElement = document.createElement('td')
		let precioCell: HTMLTableCellElement = document.createElement('td')

		nameCell.innerHTML = element.nombre
		newRow.appendChild(nameCell)
	
		marcaCell.innerHTML = element.marca
		newRow.appendChild(marcaCell)
	
		envioCell.innerHTML = "Envío " + (element.envio ? "gratuito." : "con costes.")
		newRow.appendChild(envioCell)
	
		precioCell.innerHTML = element.precio.toString()
		newRow.appendChild(precioCell)

		table.appendChild(newRow)
	});
}

function ordenarTabla(type: string){

	switch (type){

		case 'name':	
			tvList.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
			break
		case 'marca':
			tvList.sort((a, b) => a.marca.localeCompare(b.marca, 'es'))
			break
		case 'precio':
			tvList.sort((a, b) => a.precio - b.precio)
			break

	}
	
	printTable()
}


function fillArray(){
	tvList[0] = {
		id: 	1,
		nombre: "Televisor Sony",
		marca: 	"Sony",
		envio: 	true,
		precio: 550
	}
		tvList[1] = {
		id: 	2,
		nombre: "Monitor Hp",
		marca: 	"HP",
		envio: 	false,
		precio: 120
	}
		tvList[2] = {
		id: 	3,
		nombre: "Televisor LG",
		marca: 	"LG",
		envio: 	true,
		precio: 650
	}
		tvList[3] = {
		id: 	4,
		nombre: "Televisor Samsung",
		marca: 	"Samsung",
		envio: 	true,
		precio: 650
	}
		tvList[4] = {
		id: 	5,
		nombre: "Televisor Philips",
		marca: 	"Philips",
		envio: 	false,
		precio: 840
	}
}