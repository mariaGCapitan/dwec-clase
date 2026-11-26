//Buscardor de lugares con 4 estados: cargando, error, vacío y éxito.

const nombre = document.querySelector("#nombre");
const botonBuscar = document.querySelector("#buscar");
const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");


let estado = "";
let lugares = [];
let mensajeError = "";

async function buscar() {
    estado = "cargando";

    try{

    
        const urlBusqueda = `https://geocoding-api.open-meteo.com/v1/search?name=${nombre.value}&count=10&language=es&countryCode=ES`;

        const respuesta = await fetch(urlBusqueda);
        if (!respuesta.ok){
            throw new Error(`Código ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        if(datos.results === undefined){
            estado = "vacío";
        }else{
            lugares = datos.results;
            estado = "exito";
        }
    }catch (error){
        estado = "error";
        mensajeError = error.message;
    }
    //Vamos a pintar los lugares dentro de mi lista
    //1º Borramos lo que ya tenga la lista
    for (const item of lista.querySelectorAll("li")){
        item.remove();
    }

    if(estado === "cargando"){
        aviso.textContent = "Buscando...";
    }else if(estado === "vacío"){
        aviso.textContent = "No hay ningún lugar con ese nombre";
    }else if(estado === "error"){
        aviso.textContent = `No se ha podudo buscar. ${mensajeError}`;
    }else if(estado === "exito"){
        aviso.textContent = `${lugares.length} resultados`;
        for (const lugar of lugares){
            const item = document.createElement("li");
            item.textContent = `${lugar.name}  (${lugar.admin2})`;
            lista.append(item);
        }
    }
}

botonBuscar.addEventListener("click", buscar);