//ALmaceno. los elementos de mi DOM
const resumen = document.querySelector("#resumen");
const catalogo = document.querySelector("#catalogo");

//Modificamos una propieradad o característica del elemento
console.log("Cambiamos el textContent");
console.log("El original:", resumen.textContent);
console.log("Cambiando...");
resumen.textContent = "nuevo"
console.log("El nuevo:", resumen.textContent);

//El textContent no interpreta etiquietas, pone el texto tal cual
resumen.textContent= "<b>texto negrita</b>";


//Creamos un elemento nuevo en el DOM
const nuevoLista = document.createElement("li");
nuevoLista.textContent = "Rayuela";
console.log("He creado el li, pero no lo he añadido:", catalogo.children.length);
catalogo.append(nuevoLista);
console.log("He creado el li, y lo he añadido:", catalogo.children.length);


//Eliminar elementos
console.log("Vamos a eliminar un elemento");
nuevoLista.remove();
console.log("Tras quitar el hijo, cuántos tiene catálogo?",catalogo.children.length);


//Generar elementos desde un array de objetos
const libros = [
  { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", disponible: true },
  { titulo: "El Quijote", autor: "Miguel de Cervantes", disponible: false },
  { titulo: "Rayuela", autor: "Julio Cortázar", disponible: true },
  { titulo: "Pedro Páramo", autor: "Juan Rulfo", disponible: false },
];

//Para cada libro voy a crear un <li>

for (const libro of libros){
    const item = document.createElement("li");
    item.textContent = `${libro.titulo} - ${libro.autor}`;
    catalogo.append(item);
}
console.log("Cuántos hijos tiene catologo?", catalogo.children.length);

