const notas = [6, 8, 7];

let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma = suma + notas[i];
}

document.querySelector("#media").textContent = suma / notas.length;
