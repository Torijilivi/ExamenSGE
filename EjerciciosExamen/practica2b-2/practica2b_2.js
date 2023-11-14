const lienzo = document.getElementById("lienzo");
const buscar = document.getElementById("buscar");

let listaRegistros = [];

crearRegistros();

buscar.addEventListener("keydown",resaltarLetras);

function crearRegistros() {
    let texto = "";
    
    listaRegistros = listaUsuarios.split('\n');
    for (let index = 0; index < listaRegistros.length; index++) {
        let registros = listaRegistros[index].split(',');
        texto += `<p>Nombre: ${registros[0]} | Empresa: ${registros[1]} | Ciudad: ${registros[2]}</p>`;
    }
    lienzo.innerHTML = texto;
}

function resaltarLetras() {
    let texto = lienzo.innerText;
    let valor = buscar.value;
    if (texto.indexOf(valor) != -1) {
        lienzo.innerHTML = texto.replaceAll(valor, "<mark>"+valor+"</mark>");
    }
}