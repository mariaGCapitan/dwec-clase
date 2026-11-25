// Misiones del tablón del gremio.
// Cada misión tiene un título, la plata que paga y una descripción.
const misiones = [
  { titulo: "Recoger hierbas en el bosque de Fittoa", plata: 2, descripcion: "La curandera de la aldea necesita hierbas medicinales." },
  { titulo: "Escoltar un carro hasta Roa", plata: 4, descripcion: "Un mercader teme a los bandidos del camino." },
  { titulo: "Buscar piedras mágicas en la cueva", plata: 5, descripcion: "Las piedras brillan en la oscuridad. Llevar antorcha." },
  { titulo: "Cazar lobos de los colmillos", plata: 7, descripcion: "Una manada ataca el ganado de las aldeas." },
  { titulo: "Acompañar a una niña noble a Roa", plata: 12, descripcion: "Se busca escolta con paciencia. Mucha paciencia." },
  { titulo: "Abatir un dragón rojo", plata: 45, descripcion: "Solo para aventureros de mucha experiencia." },
];



const registro = document.querySelector("#registro");
const tablon = document.querySelector("#tablon");
const formulario = document.querySelector("#formulario");
const campos = formulario.querySelectorAll("input, select");
const campoPueblo = document.querySelector("#pueblo");
const ficha = document.querySelector("#ficha");
const listaMisiones = document.querySelector("#misiones");
const listaCompletadas = document.querySelector("#completadas");
const bolsa = document.querySelector("#bolsa");
const pergamino = document.querySelector("#pergamino");
const botonRetirarse = document.querySelector("#retirarse");
const botonTema = document.querySelector("#tema");

const patronPueblo = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,19}$/;

if(localStorage.getItem("tema") === "oscuro") document.body.classList.add("oscuro");

function comprobar(campo){

  const error = campo.closest("p").querySelector(".error");
  if (campo.validity.valueMissing){
    error.textContent = "Este campo es obligatorio";
  }else if(campo === campoPueblo && !patronPueblo.test(campo.value)){
    error.textContent = "Empieza por mayúscula, solo letras, de 3 a 20";
  }else{
    error.textContent = "";
  }
}
//Cambiar tema
botonTema.addEventListener("click",() =>{
  document.body.classList.toggle("oscuro");
  if(document.body.classList.contains("oscuro")){
    localStorage.setItem("tema","oscuro");
  }else{
    localStorage.setItem("tema","claro");
  }
});

//Vamos a consultar si hay un aventurero guardado para cargar o no la sección del formulario
const aventureroGuardado = localStorage.getItem("aventurero");
let aventurero = aventureroGuardado === null ? "" : JSON.parse(aventureroGuardado);  

const completadasGuardadas = localStorage.getItem("completadas");
let completadas = completadasGuardadas === null ? misiones.map(() => false) : JSON.parse(completadasGuardadas);

function guardar(){
  localStorage.setItem("aventurero", JSON.stringify(aventurero));
  localStorage.setItem("completadas", JSON.stringify(completadas));
}
guardar();

//Vamos a pintar las misiones y las completadas
function pintar(){
  //Primero miro si hay aventurero guardado
  if(aventurero === "" || aventurero === null){
    registro.classList.remove("oculto");
    tablon.classList.add("oculto");
    return;//Termina de pintar pq tenemos qu ever el fomulario
  }
  //Tenemos ya un aventurero en LocalStorage
  registro.classList.add("oculto");
  tablon.classList.remove("oculto");

  //Pintar todo el tablón 
  //Primero. los datos del aventurero
  const {nombre, raza, pueblo} = aventurero;
  ficha.textContent = `${nombre} - ${raza} de ${pueblo}`;
   //Limpiamos la lista y la tabla 
   for(const item of listaMisiones.querySelectorAll("li")){
    item.remove();
   }
   for(const fila of listaCompletadas.querySelectorAll("tr")) fila.remove();

   for (let i = 0; i < misiones.length; i++){
    const item = document.createElement("li");
    item.textContent = `${misiones[i].titulo} - ${misiones[i].plata} de plata`;

    item.addEventListener("mouseenter", () =>{
      pergamino.textContent = misiones[i].descripcion;
    });
    item.addEventListener("mouseleave", () =>{
      pergamino.textContent = "Pasa el ratón por una misión para leerla";
    });

    //Vamos a ponerle un botón si aún no está completada
    if(!completadas[i]){//Si en el array completadas, en la posición que me encuentro del array misiones es un false, no está completada
      const boton = document.createElement("button");
      boton.textContent = "completada";
      boton.addEventListener("click", () =>{
        completadas[i] = true;
        guardar();
        pintar();
      })
      item.append(boton);
    }
    listaMisiones.append(item);

   }
   //Contador de plata 
   let plata = 0;

   //Ahora pintamos las completadas en la tabla
   for (let j= 0; j < completadas.length; j++){
    if(completadas[j]){
      const fila = document.createElement("tr");
      const celdaTitulo = document.createElement("td");
      celdaTitulo.textContent = misiones[j].titulo;
      const celdaPlata = document.createElement("td");
      celdaPlata.textContent = misiones[j].plata;

      fila.append(celdaTitulo,celdaPlata);
      listaCompletadas.append(fila);
       plata = plata + misiones[j].plata;
    }
   }
   bolsa.textContent = `Plata ganada: ${plata} monedas`;
}
//Para saber si ya hay aventurero o no
pintar();

formulario.addEventListener("submit", (evento) =>{
  evento.preventDefault();

  for (const campo of campos){
    comprobar(campo);
  }
  //Vamos registrar el aventurero si todo está OK en el formulario
  if(!formulario.checkValidity() || !patronPueblo.test(campoPueblo.value)){
    return;//No cambio de sección, sigo en el formulario
  }else{
    aventurero = Object.fromEntries(new FormData(formulario));
    guardar();
    pintar();
    formulario.reset();
  }
});

//El botón retirarse

botonRetirarse.addEventListener("click", () =>{
  if(!confirm("¿Retirarte del gremio? Se pierde todo")){
    return;
  }
  aventurero = null;
  completadas = misiones.map(()=> false);
  guardar();
  pintar();
});