var tvList = new Array(5);
fillArray();
printTable();
function printTable() {
    var table = document.getElementById('tvtable');
    var newRow = document.createElement('tr');
    var nameCell = document.createElement('td');
    var marcaCell = document.createElement('td');
    var envioCell = document.createElement('td');
    var precioCell = document.createElement('td');
    table.innerHTML = "";
    nameCell.innerHTML = "Nombre producto";
    nameCell.setAttribute('onclick', "ordenarTabla('name')");
    newRow.appendChild(nameCell);
    marcaCell.innerHTML = "Marca";
    marcaCell.setAttribute('onclick', "ordenarTabla('marca')");
    newRow.appendChild(marcaCell);
    envioCell.innerHTML = "Coste de envío";
    newRow.appendChild(envioCell);
    precioCell.innerHTML = "Precio";
    precioCell.setAttribute('onclick', "ordenarTabla('precio')");
    newRow.appendChild(precioCell);
    table.appendChild(newRow);
    tvList.forEach(function (element) {
        var newRow = document.createElement('tr');
        var nameCell = document.createElement('td');
        var marcaCell = document.createElement('td');
        var envioCell = document.createElement('td');
        var precioCell = document.createElement('td');
        nameCell.innerHTML = element.nombre;
        newRow.appendChild(nameCell);
        marcaCell.innerHTML = element.marca;
        newRow.appendChild(marcaCell);
        envioCell.innerHTML = "Envío " + (element.envio ? "gratuito." : "con costes.");
        newRow.appendChild(envioCell);
        precioCell.innerHTML = element.precio.toString();
        newRow.appendChild(precioCell);
        table.appendChild(newRow);
    });
}
function ordenarTabla(type) {
    switch (type) {
        case 'name':
            tvList.sort(function (a, b) { return a.nombre.localeCompare(b.nombre, 'es'); });
            break;
        case 'marca':
            tvList.sort(function (a, b) { return a.marca.localeCompare(b.marca, 'es'); });
            break;
        case 'precio':
            tvList.sort(function (a, b) { return a.precio - b.precio; });
            break;
    }
    printTable();
}
function fillArray() {
    tvList[0] = {
        id: 1,
        nombre: "Televisor Sony",
        marca: "Sony",
        envio: true,
        precio: 550
    };
    tvList[1] = {
        id: 2,
        nombre: "Monitor Hp",
        marca: "HP",
        envio: false,
        precio: 120
    };
    tvList[2] = {
        id: 3,
        nombre: "Televisor LG",
        marca: "LG",
        envio: true,
        precio: 650
    };
    tvList[3] = {
        id: 4,
        nombre: "Televisor Samsung",
        marca: "Samsung",
        envio: true,
        precio: 650
    };
    tvList[4] = {
        id: 5,
        nombre: "Televisor Philips",
        marca: "Philips",
        envio: false,
        precio: 840
    };
}
