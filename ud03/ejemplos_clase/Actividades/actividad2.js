//Con el código HTML del ejemplo 03 y el array libros del apartado 3.4, mostrar en la lista únicamente los libros disponibles, uno por elemento, y en el párrafo cuántos son del total.

const libros = [
  { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", disponible: false },
  { titulo: "El Quijote", autor: "Miguel de Cervantes", disponible: false },
  { titulo: "Rayuela", autor: "Julio Cortázar", disponible: false },
  { titulo: "Pedro Páramo", autor: "Juan Rulfo", disponible: false },
];

const catalogo = document.querySelector("#catalogo");
const resumen = document.querySelector("#resumen");

const disponibles = libros.filter(l => l.disponible);
console.log(disponibles.length);

if(disponibles.length > 0){//Se que alguno hay disponible
    resumen.textContent = `${disponibles.length} libro/s disponibles de ${libros.length}`
}

for (const d of disponibles){
    const item = document.createElement("li");
    item.textContent = `${d.titulo} - ${d.autor} `;
    catalogo.append(item);
}
