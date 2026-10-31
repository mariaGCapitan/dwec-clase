// El total sale mal, y no hay ningún error en la consola.

const articulos = document.querySelectorAll("#carrito li");

let total = 0;

for (const articulo of articulos) {
  const precio = articulo.dataset.precio;
  total = total + precio;
}

document.querySelector("#total").textContent = total;
