const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true);

$newCard.innerHtml = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption> 
`;

$newCard.classlist.add("card");

// $cards.replaceChild($newCard, $cards.children[2]);
// Insert before lo que hace es insertar antes una tarjta sin reemplazar la otra
/*
$cards.insertBefore($newCard, $cards.firstElementChild);

// removeChild sirve para eliminar un elemento
$cards.removeChild($cards.lastElementChild);
*/

document.body.appendChild($cloneCards);
