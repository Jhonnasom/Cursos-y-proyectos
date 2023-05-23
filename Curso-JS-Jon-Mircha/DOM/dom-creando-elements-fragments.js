// Creamos las etiquetas
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

// Anexamos los atributos src y alt a la tag "img"
$img.setAttribute("src", "https://placeimg.com/200/200/nature");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

// Las incorporamos en el DOM
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `<img src="https://placeimg.com/200/200/People" alt="tech" srcset="">
<figcaption>People</figcaption>`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Invierno", "Verano", "Otono"],
  $ul = document.createElement("ul");

// Esto sirve para anexar un printf en pantalla del Texto "Estaciones del anio"
document.write("<h3>Estaciones del Anio</h3>");
// Aqui anexamos la etiqueta ul dentro del body
document.body.appendChild($ul);

// Recorremos el arreglo estaciones para anexar la etiqueta <li>
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

// Anexaremos dinamicamente la lista de Estaciones del anio  con las templates
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// Anexamos dinamicamente mediante fragmentacion
// Se utiliza la fragmentacion para reducir recursos
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  //Fragmentacion

  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

// Con este metodo realizamos una sola insercion al DOM
document.write("<h3>Meses del anio</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
