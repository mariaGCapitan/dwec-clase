//ASYNC Y AWAIT, try/catch


const estado = document.querySelector("#estado");

const urlCordoba = "https://api.open-meteo.com/v1/forecast?latitude=37.89&longitude=-4.77&current=temperature_2m";


async function tiempoCordoba() {
    estado.textContent = "Consultando...";
    const respuesta =  await fetch(urlCordoba);
    const datos = await respuesta.json();

    estado.textContent = `Córdoba: ${datos.current.temperature_2m} ºC`;

}
document.querySelector("#cordoba").addEventListener("click", tiempoCordoba);

//El servidor contesta con un error
//Después de un fetch, antes de tocar sus datos, tenemos que mirar respuesta.ok

async function latitudImposible() {
    estado.textContent = "Consultando...";

    try{
        const respuesta = await fetch("https://api.open-meteo.com/v1/forecast");
        if(!respuesta.ok){
            throw new Error(`Código ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        estado.textContent = `${datos.current.temperature_2m} ºC`;
    }catch(error){
        estado.textContent = `No se ha podido consultar. ${error.message}`;
    }
}
document.querySelector("#imposible").addEventListener("click", latitudImposible);