
const $card=document.querySelector('.card')
console.log($card);

console.log($card.classList);

// Con contains preguntamos si un elemento o nodo tiene cierta clase
console.log($card.classList.contains('rotate-45'));

// Con add anexamos una clase a un elemento
$card.classList.add('rotate-45')
console.log($card.classList.contains('rotate-45'));

// Con remove eliminamos una clase a un elemento
$card.classList.remove('rotate-45')

// El interruptor toggle si el elemento tiene la clase se la quita sino se la agrega
$card.classList.toggle('rotate-45')
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45')
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45')

// Reemplaza una clase por otra
$card.classList.replace('rotate-45','rotate-135')

$card.classList.add('opacity-80','sepia')
$card.classList.remove('opacity-80','sepia')
$card.classList.toggle('opacity-80','sepia')






