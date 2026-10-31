const pedir = document.querySelector("#pedir");
const reiniciar = document.querySelector("#reiniciar");
const prestamos = document.querySelector("#prestamos");
const libros = [...document.querySelectorAll(".libro")];
const buscador = document.querySelector("#buscador");

//Reaccionamos a un clic

let cont_prestamos = 0;

pedir.addEventListener("click", ()=> {
    cont_prestamos ++;
    prestamos.textContent = `Préstamos: ${cont_prestamos}`;
} )

//Reaccionamos a la escritura en un input

buscador.addEventListener("input",()=>{
    console.log("En el buscado está escrito: ", buscador.value);
})

//Decidir según lo escrito en buscador
function filtrar(){
   const textoInput = buscador.value.toLowerCase();

   for (const libro of libros){
    const titulo = libro.querySelector(".titulo").textContent.toLowerCase();
    //EL título contiene lo que ha escrito el usuario??
    if (titulo.includes(textoInput)){
        libro.classList.remove("oculto");
    }
    else{
        libro.classList.add("oculto");
    }
   }

}
buscador.addEventListener("input", filtrar)

//Vamos a añadirle un evento al botón reiniciar
reiniciar.addEventListener("click",() => {
    if(confirm("¿Seguro que ponemos a cero los préstamos?")){
        prestamos.textContent = "Préstamos: 0";
        cont_prestamos = 0;
        alert("Préstamos a cero");
    }
})