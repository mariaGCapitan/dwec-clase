// Formularios

const formulario = document.querySelector("#compra");
const resumen =document.querySelector("#resumen");

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const entradas = document.querySelector("#entradas").value;
    const sesion = document.querySelector("#sesion").value;
    const version = document.querySelector('input[name="version"]:checked').value; //Así vemos qué radio está seleccionado
    const acepta = document.querySelector("#condiciones").checked;
    
    
    if(!acepta){
        resumen.textContent = "Falta aceptar las condiciones de compra";
        return;
    }
    //El precio de la entrada depende de la sesión
    const precio = sesion == "18:00" ? 5 : 7;
    const total = entradas * precio;

    resumen.textContent = `Compra a nombre de ${nombre}\n`+
    `Entradas ${entradas} - sesión de las ${sesion} - versión ${version}\n` +
    `Total ${total} €\n`+
    `Confirmación a ${correo}`;
})