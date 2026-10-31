//Con el código HTML y CSS del ejemplo 04, marcar como prestados los libros cuyo título tiene más de 10 caracteres.

//for (const libro of [...document.querySelectorAll(".libro")]){ //No hace falta convertirlo a Array
for (const libro of document.querySelectorAll(".libro")){
    const titulo = libro.querySelector(".titulo").textContent;

    if (titulo.length > 10){
        libro.classList.add("prestado");
    }
}