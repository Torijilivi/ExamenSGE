const lienzo = document.getElementById("lienzo");

let listaRegistros = [];

listarRegistros();

function listarRegistros(){
    listaRegistros = listaDirecciones.split('\n');
    let registro = [];
    let texto = "";
    for (let index = 0; index < listaRegistros.length; index++) {
        if (registro[0] == "" &&
            registro[1] == "" &&
            registro[2] == "") {
                continue
        }else{
            registro = listaRegistros[index].split(',');
            texto += `<p>Nombre: ${registro[0]} | Apellido: ${registro[1]} | Direccion: ${registro[2]}</p>`
        }
    }
    lienzo.innerHTML = texto;

    destacarTexto();
}

function destacarTexto(){
    let ps = document.getElementsByTagName("p");
    for (let index = 0; index < ps.length; index++) {
        ps[index].addEventListener("mouseover", () => {
            ps[index].style.backgroundColor = "yellow";
        })

        ps[index].addEventListener("mouseleave", () => {
            ps[index].style.backgroundColor = "white";
        })
    }
}