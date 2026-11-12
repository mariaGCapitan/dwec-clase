const formulario = document.querySelector("#compra");
const aviso = document.querySelector("#aviso");
const telefono = document.querySelector("#telefono");


//HACIENDO USO SOLO DE LA COMPROBACIÓN DEL HTML
// formulario.addEventListener("submit",(evento)=>{
//     evento.preventDefault();
//     if(!formulario.checkValidity()){
//         aviso.textContent ="Hay campos por corregir";
//         return;
//     }

//     aviso.textContent = `Compra realizada. La confirmación llegará a ${telefono.value}`;
// });

//PROBAR UN PATRÓN: test
const movil = /^[67]\d{8}$/; //678678678
const pruebas = ["612312312", "712312312","812312312","6123123124444"];

for (const p of pruebas){
    console.log(p, movil.test(p));
}

//Vamos a usar en mi formulario el test
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    if (telefono.value == "" || !movil.test(telefono.value)){
        aviso.textContent = "El teléfono está mal o no has puesto nada";
    }else{
        aviso.textContent = "";
    }
});