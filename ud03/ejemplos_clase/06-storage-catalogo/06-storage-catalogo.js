const tema = document.querySelector("#tema");
const libros = [...document.querySelectorAll(".libro")]; //Convertimos en Array
const visitas = document.querySelector("#visitas");


//Vamos a almacenar en locaStorage el contador de visitas

let num_visitas = localStorage.getItem("visitas");//Dame lo que hay

if (num_visitas === null){
    num_visitas = 1;
}
else{
    num_visitas = Number(num_visitas) + 1;
}
localStorage.setItem("visitas", num_visitas);

//Mostrar en la página el contador de visitas
visitas.textContent = `Visita número ${num_visitas}`;

//VAmos a guardar una lista : JSON
let textoFavoritos = localStorage.getItem("favoritos");

const favoritos = textoFavoritos === null ? [] : JSON.parse(textoFavoritos); //Array de favoritos a partir del string de favoritos

for (const libro of libros){
    const titulo = libro.querySelector(".titulo").textContent;
    if (favoritos.includes(titulo)){
        libro.classList.add("destacado");
    }
}

//Almacenamos en localstorage los favoritos

//Reocrremos los libros y añadimos un evento a cada botón.
//Cada vez que añadimos a favorito (pulsamos el botón) tenemos que actualizar el storage
for (const libro of libros){
    libro.querySelector("button").addEventListener("click",() =>{
        libro.classList.toggle("destacado");
                //Filtramos los que tienen la clase 'destacado' y de esos, solo me quedo con el map con el título del libro
                const marcados = libros
                .filter((l) => l.classList.contains("destacado"))
                .map((l) => l.querySelector(".titulo").textContent)

                localStorage.setItem("favoritos",JSON.stringify(marcados));//convierto para que lo entienda localstorage
                console.log("Guardados favoritos sin convertir con JSON", marcados);
                console.log("Guardados favoritos", localStorage.getItem("favoritos"));
                

    });

}

//Vamos a cambiar y recordar el tema del usuario
const botonTema = document.querySelector("#tema");

//Primero vemos si hay algo guardado sobre el tema en localStore
if(localStorage.getItem("oscuro") === "true"){
    document.body.classList.add("oscuro");
}

//Vamos a alternar oscuro y no oscuro con el botón
botonTema.addEventListener("click", () =>{
    const estoyOscuro = document.body.classList.toggle("oscuro"); //toggle devuelve True si la clase se queda puesta
    localStorage.setItem("oscuro", estoyOscuro); //Guarda  True o False, peeeero localStore no guarda un bool, guarda un string "true" o "false"
});
