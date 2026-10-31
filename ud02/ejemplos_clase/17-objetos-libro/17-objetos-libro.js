//Definimos un obejto con sus propiedades

const libro = {
    titulo : "La sombra del viento",
    autor: "Ruiz Zafrón",
    anno: 2001,
    disponible: true,
};

console.log("LIBRO");
console.log("Título: ", libro.titulo);
console.log("Autor: ", libro.autor);

const campo_anno = "anno";
console.log("El campo es " , campo_anno ,": ", libro["anno"]);
console.log("El campo es " , campo_anno ,": ", libro[campo_anno]);

//Una propiedad que no existe no da error
console.log("Editorial: ", libro.editorial);

//Añadir, cambiar y quitar propeidades
libro.editorial = "Planeta"; //Añado
libro.disponible = false;
delete libro.anno; //Quita la propoiedad

console.log("Ya con la editorial ", libro.editorial, " sin año: ", libro.anno);

//Definir un método como propiedad
const ficha = {
    titulo: "La sombra del viento",
    autor: "Ruiz Zafrón",

    resumen(){
        return `${this.titulo} - ${this.autor}`;
    }
};

console.log("Resumen: ", ficha.resumen());
