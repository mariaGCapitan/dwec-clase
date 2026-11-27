//Usamos GET con argumentos, se los pasamos en la URL

const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");
const campoId = document.querySelector("#id");
const ficha = document.querySelector("#ficha");

//Cargamos la lista de todos los portátiles
async function cargarLista() {
    aviso.textContent = "Cargando lista...";
    try{
        const respuesta = await fetch("/api/portatiles.php");
        if(!respuesta.ok){
            throw new Error(`Código ${respuesta.status}`);
        }
        const portatiles = await respuesta.json();

        for(const portatil of portatiles){
            const item = document.createElement("li");
            item.textContent = `${portatil.codigo} - ${portatil.modelo} - ${portatil.estado}`;
            lista.append(item);
        }
        aviso.textContent = `${portatiles.length} portátiles en el inventario.`

    }catch(error){
        aviso.textContent = `No se ha podido cargar la lista. ${error.message}`;
    }
}
cargarLista();

//Vamos a localizar un elemento concreto con GET y un argumento
async function verFicha() {
    aviso.textContent = "Consultando...";
    try{
        const respuesta = await fetch(`/api/portatiles.php?id=${campoId.value}`);
        if(!respuesta.ok){
            throw new Error(`Código ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        ficha.textContent = `${datos.codigo} - ${datos.modelo} - ${datos.estado}`;
        aviso.textContent = "Hay respuesta del servidor";

    }catch(error){
        aviso.textContent = `No se ha podido cargar la lista. ${error.message}`;
    }
    
}
document.querySelector("#ver").addEventListener("click", verFicha);