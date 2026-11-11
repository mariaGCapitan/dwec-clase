//VALIDAR FORMULARIOS
const formulario = document.querySelector("#compra");
const aviso = document.querySelector("#aviso");
const correo = document.querySelector("#correo");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    if (!formulario.checkValidity()){
        aviso.textContent = "Hay campos por corregir";
        return;
    }
    aviso.textContent = "Compra realizada";
});


correo.addEventListener("input", () =>{
    console.log("Falta: ", correo.validity.valueMissing);
    console.log("Es valido? ", correo.validity.valid);
    
})