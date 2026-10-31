const socio = {
    nombre: "María",
    carnet: "B-123",
    activo: true,
};

console.log("EL OBJETO");
console.log(socio);

//Vamos a convertir el objeto a cadena
const texto = JSON.stringify(socio);
console.log("\nCONVERTIDO A TEXTO");
console.log(texto);

//Vamos a convertir la cadena a un objeto NUEVO
const vuelta = JSON.parse(texto);
console.log("\nCONVERTIDO A OBJETO");
console.log(vuelta.nombre, " - ", vuelta.carnet);

console.log("Es el mismo objeto?", vuelta === socio);

//EN el cambio perdemos cosas



//Vamos a ver quçé NO sobrevive
console.log(socioCompleto.saludo());

const textoCompleto = JSON.stringify(socioCompleto);
console.log(textoCompleto);
console.log(JSON.parse(textoCompleto));