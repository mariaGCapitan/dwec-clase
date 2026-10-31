// Aquí se escribe el programa.
import { Grupo } from "./grupo.js";
import { inscripciones } from "./grupos.js";
import { Festival } from "./festival.js";


const festival1 = new Festival("Sonidos del Sur");
const grupos = inscripciones.map(insc => new Grupo(insc.nombreI,insc.generoI, insc.minutosI ))

for (const grupo of grupos){
    festival1.anadirGrupo(grupo);
}

//console.log("Resumen de Festival: ", festival1.resumen());

//Creamos e intentamos dar de alta un grupo

console.group("MODIFICACIONES DEL FESTIVAL");
const nebula = new Grupo("Nébula","electrónica", 90);
const almacenado = festival1.anadirGrupo(nebula);
console.log("Se ha añadido el grupo Nébula?? ", almacenado);

//Resumen del festival
console.log("Resumen de Festival: ", festival1.resumen());

//Inscripción nueva
const minutosDelFormulario = "40";

console.log("Minutos del formulario: ", minutosDelFormulario + 5);
//Si intento sumar un número a una cadena, la concatena como un str no hace la operación de suma
const minutos = Number(minutosDelFormulario) + 5;
console.log("Minutos ya convertidos: ", minutos);

const tardeo = new Grupo("Tardeo Club", "pop", minutos);

festival1.anadirGrupo(tardeo);
console.log("La ficha del nuevo grupo añadido", tardeo.ficha());

//Comprobamos si tardeo tiene duración larga
console.log("¿Tiene duración larga?", tardeo.esLargo() ? "sí" : "no");
console.log("Cuántos grupos tiene el cartel del festival?", festival1.cuantos(), "grupos");
console.groupEnd();

console.group("INFORME");
const cartel = festival1.cartel();
//console.table(cartel.map(g => ({nombre: g.nombre(), minutos: g.minutos()})));
console.table(cartel.map(g => g.ficha()));

//Comprobar las que pasan de 60m minutos
const largos = cartel.filter(g => g.esLargo());
console.log("Actuaciones de más de 60 minutos: ", largos.length);
console.log("Nombres: ", cartel.map(g => g.nombre()).join(", "));

const primeroLargo = cartel.find(g => g.esLargo());
console.log("La primera actuación larga:", primeroLargo.ficha());

//Duración total del festival
const totalMinutos = cartel.reduce((acumulado, g) => acumulado + g.minutos(), 0)
console.log("Duración total: ", totalMinutos, "minutos");

const cartelAOrdenar = [...cartel];
cartelAOrdenar.sort((a,b) => b.minutos() - a.minutos());
//console.log("Ordenados por duración: ", cartelAOrdenar.map(o => o.minutos()).join(", "));

//Desestructurar por posición

const [ primero, segundo ] = cartelAOrdenar;
console.log("La actuación más larga: ", primero.ficha());
console.log("La segunda actuación más larga: ", segundo.ficha());


console.log("¿Todos pasan de media hora?", cartel.every(g => g.minutos() > 30));
console.groupEnd();
//GUARDAR CARTEL
console.group("GUARDAR");
const paraGuardar = cartel.map(g => ({nombre: g.nombre(), minutos: g.minutos()}))
const texto = JSON.stringify(paraGuardar);
console.log("Como texto: ", texto);
const recuperado = JSON.parse(texto);
console.log("Recuperado: ", recuperado);



// console.groupEnd();





