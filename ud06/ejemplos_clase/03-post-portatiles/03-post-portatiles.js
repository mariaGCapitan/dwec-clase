//CREAR con POST

//Primero vamos a crear un elemento desde dentro de JS
//Ala de prueba

const resultado = document.querySelector("#resultado");
const lista = document.querySelector("#lista");
const formulario = document.querySelector("#alta");
const campoCodigo = document.querySelector("#codigo");
const campoModelo = document.querySelector("#modelo");

function limpiarLista(){
    const items = lista.querySelectorAll("li");
    for(const i of items){
        i.remove();
    }
        
}

//Primero cargarmos todos los portátiles que hay en la BBDD
//Cargamos la lista de todos los portátiles
async function cargarLista() {
    resultado.textContent = "Cargando lista...";
    //Miramos si hay algo pintado en la lista
    limpiarLista();
    try{
        const respuesta = await fetch("/api/portatiles.php");
        if(!respuesta.ok){
            throw new Error(`Código ${respuesta.status}`);
        }
        const portatiles = await respuesta.json();

        for(const portatil of portatiles){
            const item = document.createElement("li");
            item.textContent = `${portatil.codigo} - ${portatil.modelo} - ${portatil.estado}`;
            lista.append(item);
        }
        resultado.textContent = `${portatiles.length} portátiles en el inventario.`

    }catch(error){
        resultado.textContent = `No se ha podido cargar la lista. ${error.message}`;
    }
}
cargarLista();



async function altaPrueba() {
    const nuevo = { codigo: "GC-09", modelo: "HP ProBook 440"};
    resultado.textContent = "Consultando al servidor..."
    try{
        const respuesta = await fetch("/api/portatiles.php", {
            //method: el tipo de petición, POST crear, sin method hace un GET
            method: "POST",
            //cabeceras: adtos que viajan con la petición además de un cuerpo
            headers: { "Content-Type": "application/json"},
            //body: lo que se envía
            body: JSON.stringify(nuevo),//Convertimos para enviarlo como texto '{ "codigo": "GC-09", "modelo": "HP ProBook 440"}'
        });
        if(!respuesta.ok){
            throw new Error(respuesta.status);
        }
        const datos = await respuesta.json(); // respuesta.text y respuesta.parse

        resultado.textContent = `Creado el portátil ${datos.id}: ${datos.codigo}`;
        cargarLista();
    }catch(error){
        resultado.textContent = `No se ha podido consultar. ${error.message}`;

    }
}

document.querySelector("#prueba").addEventListener("click", altaPrueba);

//Vamos a crear un portátil nuevo desde los datos del formulario
async function altaFormulario(evento) {
    evento.preventDefault();
    //Podríamos pasar los valores sin clave, solo valor, si se llama igual que la clave
    // const codigo = campoCodigo.value;
    // const modelo = campoModelo.value;

    const nuevo = { codigo: campoCodigo.value, modelo: campoModelo.value};

    try{
        const respuesta = await fetch("/api/portatiles.php", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(nuevo),
        });
        
        if(!respuesta.ok){
            throw new Error(respuesta.status);
        }
        formulario.reset();
        cargarLista();

    }catch(error){
        resultado.textContent = `No se ha podido consultar. ${error.message}`;
    }
}
formulario.addEventListener("submit", altaFormulario);