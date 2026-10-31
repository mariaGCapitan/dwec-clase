// Vamos a definir una lista de objetos, 
/*
const catalogo = [
    {titulo: "La sombra del viento", autor: "Ruiz Zafón", disponible: true},
    {titulo: "El médico", autor: "Autor que debería de saber", disponible: false},
    {titulo: "El hombre ilustrado", autor: "Ray", disponible: true},
]

//DESESTRUCTURAR UN OBJETO
const { autor, titulo, editorial = "Sin editorial"} = catalogo[0]; //Le ponemos un valor por defecto
console.log("PRIMERA FICHA");
console.log(titulo, " - ", autor, " - ", editorial);


//Podemos tener todas las claves y valores
const nombresCampos = Object.keys(catalogo[0]);
const valoresCampos = Object.values(catalogo[0]);

console.log("Nombres claves: ", nombresCampos);
console.log("Valores campos: ", valoresCampos);

//Podemos usar los méotodos que hemos usado con arrays normales
const disponibles = catalogo.filter((libro_catalogo) => libro_catalogo.disponible);
console.log("Libros disponibles: ", disponibles.length , " de ", catalogo.length);

const titulos = catalogo.map((libro) => libro.titulo)
console.log("Títulos:", titulos);

const titulosDisponibles = catalogo
.filter((l) => l.disponible)
.map((l) => l.titulo)

console.log("Se pueden adquirir: ", titulosDisponibles.join(" - "));

//Buscar
const autorRay = catalogo.find((lib)=>lib.autor === "Ray");
console.log("De Ray: ", autorRay.titulo);
*/

//Actividad 6
const alumnado = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis" , nota: 4 },
  { nombre: "Marta", nota: 9 }
];
const aprobados = alumnado
.filter((elemento)=>elemento.nota >= 5)
.map((elemento) => elemento.nombre);
console.log("Aporobados: ", aprobados);

const primeraPersona = alumnado.filter((personita)=> personita.nota > 8);
console.log(primeraPersona[0]);
