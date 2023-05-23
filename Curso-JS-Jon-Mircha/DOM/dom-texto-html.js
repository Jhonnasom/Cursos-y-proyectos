const $whatIsDom=document.getElementById('que-es')
const $winner='felicid'
let text=`
<p>
El modelo de Objetos del Documento(<b><i>DOM-Document Object Model</i></b>) es un API para documentos HTML y XML
</p>
<p>
<mark>El DOM no es parte de la especificacion de Javascript, es una API para los navegadores</mark>
</p>
`
// La propiedad para agregar contenido Textual es textContent 
$whatIsDom.textContent=text;

// La propiedad para renderizar contenido al HTML es innerHTML
$whatIsDom.innerHTML=text;

// Reemplaza un elemento del Dom por un contenido
$whatIsDom.outerHTML=text;

