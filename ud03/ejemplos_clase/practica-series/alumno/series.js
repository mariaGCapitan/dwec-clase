// Series por ver

// Las series que muestra la página la primera vez que se abre.
const seriesDePartida = [
  { titulo: "Ataque a los titanes", vista: true },
  { titulo: "Frieren", vista: false },
  { titulo: "Guardianes de la noche", vista: false },
  { titulo: "Spy x Family", vista: false },
  { titulo: "Haikyuu!!", vista: false },
];
//Accedo a todos los elementos del DOM

const botonTema = document.querySelector("#tema");
const lista = document.querySelector("#series");
const botonAnadir = document.querySelector("#anadir");
const inputTitulo = document.querySelector("#titulo");
const contador = document.querySelector("#contador");
const buscador = document.querySelector("#buscador")

//Vamos a cambiar el tema

//1º debemos ver si hay un tema guardado
if(localStorage.getItem("tema") === "oscuro"){
  document.body.classList.add("oscuro");
}

//2º Cambiarlo con el botón y almacenarlo en el localstorage
botonTema.addEventListener("click", () =>{
  document.body.classList.toggle("oscuro");
  if(document.body.classList.contains("oscuro")){
    localStorage.setItem("tema","oscuro");
  }else{
    localStorage.setItem("tema","claro");
  }
})

//Vamos a cargar las series del usuario
//1º mirar si hay series en localstorage, si no hay, cargo las de partida
const seriesGuardadas = localStorage.getItem("series");
let series = seriesGuardadas === null ? seriesDePartida : JSON.parse(seriesGuardadas);

//2º Guardamos por si las que se han cargado son las de Partida
function guardar(){
  localStorage.setItem("series",JSON.stringify(series));
}
guardar();


//Vamos a definir el PINTAR las series en mi páginca
function pintar(){
  //1º borramos las series que esté pintadas
  for (const item of lista.querySelectorAll("li")){
    item.remove();
  }
  //2º cremos los <li> que necesitamos
  for (const serie of series){
    const item = document.createElement("li");
    const nombre = document.createElement("span");
    nombre.classList.add("titulo");
    nombre.textContent = serie.titulo;
    if(serie.vista){
      item.classList.add("vista");
    }
    const boton_quitar = document.createElement("button");
    boton_quitar.textContent = "Quitar";
    //El evento del botón  QUITAR
    boton_quitar.addEventListener("click", () => {
      if(confirm(`¿Quitar ${serie.titulo} de la lista?`)){//Devuelve True o False
        series = series.filter((s) => s !== serie);
        guardar();
        pintar();
      }
    });
    //Evento de pulsar sobre una serie para ponerla vista o no vista
    nombre.addEventListener("click",() =>{
      serie.vista = !serie.vista;
      guardar();
      pintar();
    })

    //AQUÍ FILTRAR, dependiendo de lo que haya en el Input, mostraré unas series u otras
    const texto = buscador.value.toLowerCase().trim();
    //Oculta si no contiene lo escrito
    if (!serie.titulo.toLowerCase().trim().includes(texto)){
      item.classList.add("oculto");
    }

    item.append(nombre, boton_quitar);
    lista.append(item);
  }

//ACTUALIZAR EL CONTADOR DE SERIES POR VER: EN LA PÁGINA Y EN EL TÍTULO

const pendientes = series.filter((s) => s.vista === false).length;
if(series.length === 0){
  contador.textContent = "No hay niguna serie en la lista";
  document.title = `Gestión de series por ver`;
}else{
  contador.textContent = `Quedan ${pendientes} por ver de ${series.length}`;
  document.title = `(${pendientes}) Series por ver`;
}
 
}
pintar();

//AÑADIR SERIES NUEVAS
botonAnadir.addEventListener("click", () => {
  const titulo = inputTitulo.value;
  const repetida = series.some((s)=>s.titulo.toLowerCase().trim() === titulo.toLowerCase().trim());
  if(titulo === ""){
    alert("Escribe el título de la serie");
  }else if (repetida){
    alert(`${titulo} ya está en la lista de series`);
  }else{
    series.push({titulo: titulo, vista: false});
    guardar();
    pintar();
    alert(inputTitulo.value);
    inputTitulo.value = "";
  }
});

//Evento en el input
buscador.addEventListener("input", pintar);

