
const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");

async function cargarLista() {
    aviso.textContent = "Cargando la lista...";
    
    try{
        const respuesta = await fetch("/api/portatiles.php");
        if(!respuesta.ok){
            throw new Error(`Código ${respuesta.status}`);
        }
        const portatiles = await respuesta.json();

        console.log("Tengo algo del servidor: ", portatiles[0].modelo);
        
    }catch(error){
    aviso.textContent = `No se ha podido cargar la lista. ${error.message}`;
    }
}

lista.addEventListener("click",cargarLista);