const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    ` Hola te saluda ${this.className},el click lo origino ${e.target.className}`
  );
  e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  // Fase de burbuje, 3er parametro en false
  // div.addEventListener("click", flujoEventos, false);
  // Fase de captura,3er parametro en true
  // div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy Jhonna");
  e.preventDefault();
  e.stopPropagation();
});
