/*
function infoUsuario() {
    const usuario = {
        nombre: "Carlos",
        correo: "ccccccccc@gggggg.com",
    };
    document.getElementById("infoUsuario").innerHTML =`
    <p>Nombre: ${usuario.nombre}</p>
    <p>Correo: ${usuario.correo}</p>`;
    infoUsuario ()
}
*/

// capturar elementos del DOM
const infoUsuario = document.querySelector("#infoUsuario")

//eventos

document.addEventListener("click", (ev)=>{
    if (ev.target.matches(".mi-boton")) {

    }
}) 

//una función para simular la API devuelve una promesa

function simularAPI(infoUsuario, debeFallar = false) {
    return new Promise((resolve, reject) => {
        setTimeout((timeout, 2000) => {
            if (debeFallar) {
                reject(new Error("Error 500: No se pudieron obtener los datos de la API"))
            } else {
                resolve({
                    id: id,
                    nombre: "Carlos",
                    correo: "carloscala@gmail.com"
                });
            }
        })
    })

}

//una funcion que resuelva la promesa

function resolverPromesa(infoUsuario) {
    simularAPI(infoUsuario)
    .then((resultado) => {
        console.log(resolve);
        console.log(resultado);
    })
    .catch((error) => {
        console.error()
    })

}

//una funcion que pinta el resultado

function pintarResultado(datos) {
    console.log(`Usuario: ${datos.usuario}`);
    console.log(`correo: ${datos.email}`);
}
