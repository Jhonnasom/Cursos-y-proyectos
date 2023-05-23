const $linkDOM=document.querySelector(".link-dom")

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue('color'));

// Para anexarle un valor a una propiedad
$linkDOM.style.setProperty('text-decoration','none')
$linkDOM.style.setProperty('display','block')

$linkDOM.style.width='50%'
$linkDOM.style.textAlign='center'
$linkDOM.style.marginLeft='auto'
$linkDOM.style.marginRight='auto'
$linkDOM.style.padding='1rem'
$linkDOM.style.borderRadius='0.5rem'

console.log($linkDOM.style)

// Variables CSS-Customs Properties
// Para acceder a la etiqueta HTML es document.documentElement
const $html=document.documentElement,
$body=document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue('--dark-color'),

varYellowColor=getComputedStyle($html).getPropertyValue         ('--yellow-color')

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor

$html.style.setProperty('--darkColor','#222')
varDarkColor=getComputedStyle($html).getPropertyValue('--dark-color');

$body.style.setProperty('background-color',varDarkColor);