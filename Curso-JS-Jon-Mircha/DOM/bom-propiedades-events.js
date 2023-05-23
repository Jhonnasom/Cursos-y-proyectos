window.addEventListener("resize", (e) => {
  console.clear();
  console.log("***********Evento Resize***********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("*********Event Scroll********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("*********Event Scroll********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("*********Event DOMContentLoad********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

window.confirm("Confirmacion");
const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");
let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e) => {
  close();
});
$btnImprimir.addEventListener("click", (e) => {
  window.print;
});
