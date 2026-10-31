const encabezado = document.querySelector("h1");

console.log("Encabezado:", encabezado.textContent);

//Podemos acceder a un elemento por su identificador
const catalogo = document.querySelector("#catalogo");

console.log(catalogo);

//Podemos acceder por la clase, solo se queda con el primero que cumpla esa clase
const primero = document.querySelector(".libro");
console.log(primero);

//Si el elemento no existe, no da error, no lo devuelve
const nada = document.querySelector(".agotado");
console.log("Elemento que no existe:", nada);

//varios elementos, DEVUELVE UN NODELIST, no tiene todas las propiedades de los arrays, pero lo puedo convertir a un array
const titulos = document.querySelectorAll("#catalogo .titulo");
console.log(titulos);
console.log("Cuántos titulos: ", titulos.length);

for (const t of titulos){
    console.log("-", t.textContent);
}
const arrayTextos = [...titulos].map(titulo => titulo.textContent);
console.log(arrayTextos);
