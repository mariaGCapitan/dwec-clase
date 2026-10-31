//Tenemos un obejto tipo windows que lo contiene todo

console.log("Qué es windows?", typeof window);
console.log("window.console === console:" ,window.console === console );

//locatio, dónde está la página
console.log("Dirección completa:", location.href);
console.log("Protocolo:", location.protocol);

//Navegador y al tamaño de ventana
console.log("Idioma:", navigator.language);
console.log("¿Hay conexión?",navigator.onLine);

//Tamaño donde se va a dibujar mi página
console.log("Zona visible: ",window.innerWidth, "x", window.innerHeight);


//document, que es la página convertida en objetos
console.log("Título: ", document.title);

//todo el árbol de elementos cuelga del body

//Cuántos hijos tiene un elemento
console.log(document.body.children);
console.log("Cuántos hijos tiene body?:", document.body.children.length);








