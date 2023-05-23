const $cards = document.querySelector(".cards"),
  // En template no nos interesa accedecer a su tag sino a su valor
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Personas",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);

  $template.querySelector("img").setAttribute("alt", el.title);

  $template.querySelector("figcaption").textContent = el.title;

  // Con import node compiamos todo el fragmento de template, se le pone true para que copie toda la estructura interna, si nosotros le pusieramos false le estariamos diciendo que solamente va a copiar la etiqueta template de apertura y la etiqueta template de cierre
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

// Las etiquetas templates no se renderizan en el DOM
