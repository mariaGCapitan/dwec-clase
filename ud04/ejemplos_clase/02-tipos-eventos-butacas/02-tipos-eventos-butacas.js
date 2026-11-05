// Tipos de eventos: dbclick, mouseenter, mouseleave, keydown con key, focus y blur

const butacas = document.querySelectorAll(".butaca");
const aviso = 

function pintarAviso() {
  const elegidas = [...document.querySelectorAll(".elegida")].map(
    (butaca) => butaca.textContent,
  );
  const lista = elegidas.join(", ");

  if (elegidas.length === 0) {
    aviso.textContent = "Elige una butaca";
  } else {
    aviso.textContent = `Elegidas: ${lista}`;
  }
}


function marcar(butaca) {
  if (butaca.classList.contains("ocupada")) {
    aviso.textContent = `La butaca ${butaca.textContent} está ocupada`;
    return;
  }
  butaca.classList.toggle("elegida");
  pintarAviso();
}

for (const butaca of butacas) {
  butaca.addEventListener("click", (evento) => {
    marcar(evento.target);
  });
}