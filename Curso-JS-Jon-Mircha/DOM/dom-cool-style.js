const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

let $contentCard = `<img src="https://placeimg.com/200/200/any" alt=Any>
<figcaption></figcaption>`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
// $cards.after($newCard);

// El insertHTML es una forma mas eficiente del innerHTML

/*
insertAdjacentElement(position, el);
Hace referencia a un nodo de tipo elemento o una tag de HTML
insertAdjacentHTML(position, el);
Texto que tengas en formato de HTML
insertAdjacentText(position, el);

Posiciones
beforebegin(hermano anterior) 
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/
