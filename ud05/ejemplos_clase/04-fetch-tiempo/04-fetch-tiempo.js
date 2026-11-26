//Ejemplo de "?" donde el servidor no da error, es que no devuelve datos


const ciudad = document.querySelector("#ciudad");
const estado = document.querySelector("#estado");
const botonBuscar = document.querySelector("#buscar");



botonBuscar.addEventListener("click", async () =>{

    try{

        const urlBusqueda = `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad.value}&count=1&language=es&countryCode=ES`;

        const respuestaBusqueda = await fetch(urlBusqueda);
        if(!respuestaBusqueda.ok){
            throw new Error(`Código${respuestaBusqueda.status}`);
        }
        const busqueda = await respuestaBusqueda.json();//Convertimos a objeto el json que responde la API
        const lugar = busqueda.results?.[0];//Si en la respuesta viene results, coge el primer elemento, si no viene, pon unidefined en vez de dar error.
        if(lugar === undefined){
            throw new Error("No se encuentra esa ciudad");
        }

        const urlTiempo = `https://api.open-meteo.com/v1/forecast?latitude=${lugar.latitude}&longitude=${lugar.longitude}&current=temperature_2m,wind_speed_10m`;
        
        const respuestaTiempo = await fetch(urlTiempo);
        if(!respuestaTiempo.ok){
            throw new Error(`Código${respuestaTiempo.status}`);
        }
        const tiempo = await respuestaTiempo.json();
        estado.textContent = `${lugar.name} ${tiempo.current.temperature_2m} ºC`;

    }catch(error){
        estado.textContent = `No se ha podido consultar. ${error.message}`;
    }

       
});