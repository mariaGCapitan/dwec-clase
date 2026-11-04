//EJEMPLO 01. El objeto evento: type, target y preventDefault

const comprar = document.querySelector("#comprar");
const butacas = [...document.querySelectorAll(".butaca")];
const aviso = document.querySelector("#aviso");
const salir = document.querySelector("#salir");

//Vemos propiedades de un evento
comprar.addEventListener("click", (evento) => {
    console.log(evento);
    console.log("Tipo: ", evento.type);
    console.log("Elemento: ", evento.target);
});

//Asociamos una función a todas las butacas
function elegir(evento){//Puede recoger el EVENTO como argumentio aunque en la 'llamada' no está como argumento
    // console.log("Butaca seleccionada", evento.target);
    evento.target.classList.toggle("elegida");

    //Añadimos a la lista la nueva butaca ( o la quitamos)
    const elegidas = [...document.querySelectorAll(".elegida")].map((butaca) => butaca.textContent);//Solo me quedo con el nombre que se muestra
    if (elegidas.length === 0){
        aviso.textContent = "Elige una butaca";
    }else{
        aviso.textContent = elegidas.join(", ");
    }
}

for(const butaca of butacas){
    butaca.addEventListener("click", elegir);
}

//Preguntamos si estamos seguros que queremos salir de la página
salir.addEventListener("click", (evento) =>{
    if(!confirm("Salir de la página sin terminar de comprar?")){
        evento.preventDefault();//Lo que tenga definido por defecto lo quitas
    }
})