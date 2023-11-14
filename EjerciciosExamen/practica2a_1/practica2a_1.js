let listaregistros = [];

const radioNombre = document.getElementById("coln");
const radioApellido = document.getElementById("cola");
const radioDireccion = document.getElementById("cold");
const radioTodo = document.getElementById("colt");
const lienzo = document.getElementById("lienzo");


crearObjetosDirecciones();
asignarEventos();

function crearObjetosDirecciones() {
    listaregistros = listaDirecciones.split("\n");
    let registros = [];
    for (let index = 0; index < listaregistros.length; index++) {
        registros = listaregistros[index].split(",");
        listaregistros[index] = {
            nombre: registros[0],
            apellido: registros[1],
            direccion: registros[2]
        }
    }
}

function listarNombres() {
    let texto = '<table border="1"><tr><th>Nombre</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if(listaregistros[index].nombre == ""){
            continue;
        }else{
            texto += `<tr><td>${listaregistros[index].nombre}</td></tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarApellidos() {
    let texto = '<table border="1"><tr><th>Apellido</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if(listaregistros[index].apellido == ""){
            continue;
        }else{
            texto += `<tr><td>${listaregistros[index].apellido}</td></tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarDirecciones() {
    let texto = '<table border="1"><tr><th>Direccion</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if(listaregistros[index].direccion == ""){
            continue;
        }else{
            texto += `<tr><td>${listaregistros[index].direccion}</td></tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarTodo() {
    let texto = '<table border="1"><tr><th>Nombre</th><th>Apellido</th><th>Direccion</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if(listaregistros[index].nombre == "" &&
        listaregistros[index].apellido == "" &&
        listaregistros[index].direccion == ""){
            continue;
        }else{
            texto += `<tr>
            <td>${listaregistros[index].nombre}</td>
            <td>${listaregistros[index].apellido}</td>
            <td>${listaregistros[index].direccion}</td>
                    </tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function asignarEventos() {
    radioNombre.addEventListener("click",listarNombres);
    radioApellido.addEventListener("click",listarApellidos);
    radioDireccion.addEventListener("click",listarDirecciones);
    radioTodo.addEventListener("click",listarTodo);
}
