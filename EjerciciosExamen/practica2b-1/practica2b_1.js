const checkUsuarios = document.getElementById("colu");
const checkEmpresas = document.getElementById("cole");
const checkCiudades = document.getElementById("colc");
const lienzo = document.getElementById("lienzo");

let listaregistros = [];
crearObjetosUsuarios();
asignarEventos();

function crearObjetosUsuarios() {
    listaregistros = listaUsuarios.split('\n');
    let registro = [];
    for (let index = 0; index < listaregistros.length; index++) {
        registro = listaregistros[index].split(',');
        listaregistros[index] = {
            usuario: registro[0],
            empresa: registro[1],
            ciudad: registro[2]
        }
    }
}

function listarUsuarios() {
    let texto = '<table border="1"><tr><th>Usuario</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if (listaregistros[index].usuario == "") {
            continue
        }else{
            texto += `<tr><td>${listaregistros[index].usuario}</td></tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarEmpresas() {
    let texto = '<table border="1"><tr><th>Empresa</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if (listaregistros[index].empresa == "") {
            continue
        }else{
            texto += `<tr><td>${listaregistros[index].empresa}</td></tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarCiudades() {
    let texto = '<table border="1"><tr><th>Ciudad</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if (listaregistros[index].ciudad == "") {
            continue
        }else{
            texto += `<tr><td>${listaregistros[index].ciudad}</td></tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarUsuariosEmpresas() {
    let texto = '<table border="1"><tr><th>Usuario</th><th>Empresa</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if (listaregistros[index].usuario == "" &&
            listaregistros[index].empresa == "") {
            continue
        }else{
            texto += `<tr>
            <td>${listaregistros[index].usuario}</td>
            <td>${listaregistros[index].empresa}</td>
                        </tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarUsuariosCiudades() {
    let texto = '<table border="1"><tr><th>Usuario</th><th>Ciudad</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if (listaregistros[index].usuario == "" &&
            listaregistros[index].ciudad == "") {
            continue
        }else{
            texto += `<tr>
            <td>${listaregistros[index].usuario}</td>
            <td>${listaregistros[index].ciudad}</td>
                        </tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarEmpresasCiudades() {
    let texto = '<table border="1"><tr><th>Empresa</th><th>Ciudad</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if (listaregistros[index].empresa == "" &&
            listaregistros[index].ciudad == "") {
            continue
        }else{
            texto += `<tr>
            <td>${listaregistros[index].empresa}</td>
            <td>${listaregistros[index].ciudad}</td>
                        </tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function listarTodo() {
    let texto = '<table border="1"><tr><th>Usuario</th><th>Empresa</th><th>Ciudad</th></tr>';
    for (let index = 0; index < listaregistros.length; index++) {
        if (listaregistros[index].usuario == "" &&
            listaregistros[index].empresa == "" &&
            listaregistros[index].ciudad == "") {
            continue
        }else{
            texto += `<tr>
            <td>${listaregistros[index].usuario}</td>
            <td>${listaregistros[index].empresa}</td>
            <td>${listaregistros[index].ciudad}</td>
                        </tr>`
        }
    }
    texto += '</table>'
    lienzo.innerHTML = texto;
}

function comprobarCheck(){
    if (checkUsuarios.checked && !checkEmpresas.checked && !checkCiudades.checked) {
        listarUsuarios();
    }
    if (!checkUsuarios.checked && checkEmpresas.checked && !checkCiudades.checked) {
        listarEmpresas();
    }
    if (!checkUsuarios.checked && !checkEmpresas.checked && checkCiudades.checked) {
        listarCiudades();
    }
    if (checkUsuarios.checked && checkEmpresas.checked && !checkCiudades.checked) {
        listarUsuariosEmpresas();
    }
    if (checkUsuarios.checked && !checkEmpresas.checked && checkCiudades.checked) {
        listarUsuariosCiudades();
    }
    if (!checkUsuarios.checked && checkEmpresas.checked && checkCiudades.checked) {
        listarEmpresasCiudades();
    }
    if (checkUsuarios.checked && checkEmpresas.checked && checkCiudades.checked) {
        listarTodo();
    }
    if (!checkUsuarios.checked && !checkEmpresas.checked && !checkCiudades.checked) {
        lienzo.innerHTML = "";
    }
}

function asignarEventos() {
    checkUsuarios.addEventListener("click",comprobarCheck);
    checkCiudades.addEventListener("click",comprobarCheck);
    checkEmpresas.addEventListener("click",comprobarCheck);
}
