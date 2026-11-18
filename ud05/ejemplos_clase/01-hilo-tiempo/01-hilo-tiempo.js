//UN SOLO HILO, trabajamos con setTimeout y el bucle de enventos

const consultar = document.querySelector("#consultar");
const bloquear = document.querySelector("#bloquear");
const contador = document.querySelector("#contador");
const estado = document.querySelector("#estado");

//Tenemos un botón para comprobar que la página responde
let pulsaciones = 0;

contador.addEventListener("click", () =>{
    pulsaciones = pulsaciones + 1;
    contador.textContent = `Pulsaciones: ${pulsaciones}`;
})

//Esperar una respuesta sin bloquear
//setTimeout deja un encargo al navegador
consultar.addEventListener("click", ()=>{
    console.log("Pido el tiempo de Córdoba");
    estado.textContent ="Conlsultando..."
    
    setTimeout(() => {
        console.log("Llega el tiempo...");
        estado.textContent = "Córdoba: 18ºC, lluvioso"
    }, 10000);//2000ms que son 2 segundos
    
    console.log("Mientras, la página sigue");
    
})

//Vamos a bloquear la página mientras espera
bloquear.addEventListener("click", ()=>{
    estado.textContent = "Calculando...";
    const fin = Date.now() + 5000; //Suma a la hora actual 5 segunos
    while (Date.now() < fin){
        //nada, solo lo bloqueo
    }
    estado.textContent = "Cálculo terminado";
})