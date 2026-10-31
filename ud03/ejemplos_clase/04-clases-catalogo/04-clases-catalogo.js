//Quedarnos con los libros del HTML

const libros = [...document.querySelectorAll(".libro")];//Directamente lo convierto a Array

//Añadir una clase a los elementos

libros[0].classList.add("destacado");

//Podemos preguntarle a un elemento si tiene o no una clase
console.log("Destacado?", libros[1].classList.contains("destacado"));

//Mostrar las clases de un elemento
console.log(libros[0].classList);

//Quitar y alternar un estilo

console.log("Vamos a quitar una clase");
libros[0].classList.remove("destacado");

//Con toggle alternamos una clase
console.log("toggle:", libros[0].classList.toggle("destacado"));

//Puedo acceder a un elemento por la clase qeu mi JS ha añadido

libros[1].classList.add("prestado");
libros[3].classList.add("prestado");

//Podemos contarlos
console.log("Libros prestados:", document.querySelectorAll(".libro.prestado").length);

//Varias clases a la vez
libros[2].classList.add("prestado","destacado");

//Cambiar el aspecto de todo el documento
document.body.classList.add("oscuro");
document.body.classList.remove("oscuro");

//Podemos, pero hay que evitarlo, cambiar el HTML con style

libros[2].querySelector(".titulo").style.color = "darkblue";
libros[2].querySelector(".titulo").classList.add("prestado");