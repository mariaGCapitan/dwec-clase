

const aviso = document.querySelector("#aviso");

async function cargarLista() {
    aviso.textContent = "Cargando la lista...";
    
    try{
        const respuesta = await fetch("/api/portatiles.php");
        if(!respuesta.ok){
            throw new Error(`Código ${respuesta.status}`);
        }
        const portatiles = await respuesta.json();

        //console.log("Tengo algo del servidor: ", portatiles[0].modelo);
       //Vamos a ver cuántos portátiles tenemos
       aviso.textContent = ` El servidor tiene ${portatiles.length} portátiles en inventario.`
        
    }catch(error){
        aviso.textContent = `No se ha podido consultar. ${error.message}`;
    }
}

lista.addEventListener("click",cargarLista);

async function pedirInexistente() {
    aviso.textContent = "Consultando...";

    try{
        const respuesta = await fetch("api/portatilMal.php");//no existe el servidor
        if(!respuesta.ok){
            throw new Error(`Código ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        aviso.textContent = `Han llegado datos: ${datos}`;

    }catch(error){
         aviso.textContent = `No se ha podido consultar. ${error.message}`;
    }
}
document.querySelector("#inexistente").addEventListener("click", pedirInexistente)