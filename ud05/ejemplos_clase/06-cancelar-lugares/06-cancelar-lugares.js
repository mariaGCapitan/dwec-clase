//Cancelar si tarda demasiado

//El botón buscar BIEN no lo hacemos porque está hecho ya en prácticas anteriores

const resultado = document.querySelector("#resultado");

async function servidorLento() {
    try{
        const respuesta = await fetch("https://httpbin.org/delay/5", { signal: AbortSignal.timeout(2000) })//Cancela la petición, fetch, si tarda más de 3 segundos
        resultado.textContent = `Ha contestado con el código ${respuesta.status}`;
    }catch(error){
        if(error.name === "TimeoutError"){
            resultado.textContent = "El servidor tarda demasiado. Inténtalo más tarde"
        }else{
            resultado.textContent = `No se ha podido consultar. ${error.message}`;
        }
    }
}
document.querySelector("#lento").addEventListener("click", servidorLento);