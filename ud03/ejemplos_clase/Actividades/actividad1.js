//Con el código HTML del ejemplo 02, obtener un array con los títulos de los libros prestados.

//Con un selector quedarnos solo con los elementos que pertenecen a libro y a prestado


//  <ul id="catalogo" class="color_catalogo">

const librosPrestados = document.querySelectorAll("li.prestado .titulo");


//Lo primero es convertir el NodeList en un array
const titulosLibrosPrestados = [...librosPrestados].map(l => l.textContent);
console.log(titulosLibrosPrestados);


