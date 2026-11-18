//El tiempo con PROMESAS

const coordenadas = {
  Córdoba: [37.89, -4.77],
  Sevilla: [37.39, -5.99],
  Granada: [37.18, -3.6],
};

const urlCordoba = "https://api.open-meteo.com/v1/forecast?latitude=37.89&longitude=-4.77&current=temperature_2m,wind_speed_10m";


const tiempo = document.querySelector("#tiempo");
const estado = document.querySelector("#estado");
const ciudad = document.querySelector("#ciudad");

//Hacemos una petición a una URL y nos devuelve una promesa
const promesa = fetch(urlCordoba);
console.log(promesa);

//Cuando se cumple: then y json
tiempo.addEventListener("click", ()=>{
    estado.textContent = "Consultando...";
    const [latitud, longitud] = coordenadas[ciudad.value];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m,wind_speed_10m`;

    //Petición fetch tengo que tener 2 then: 1 para la respuesta y otro para los datos
    fetch(url)
    .then()
    .then()
})