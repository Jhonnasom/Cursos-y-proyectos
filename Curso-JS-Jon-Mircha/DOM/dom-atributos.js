console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));


// Como establecer un nuevo valor a los atributos
document.documentElement.lang="es"
console.log(document.documentElement.lang);

// Get atribute recibia el nombre del atributo y set attribute
// recibe el nombre del atributo y el nuevo valor
document.documentElement.setAttribute("lang","en")

const $linkDOM=document.querySelector(".link-dom")

$linkDOM.setAttribute("target","_blank")
// Rel noopener significa que no hay una dependencia entre la ventana que estamos abriendo y la ventana origen

$linkDOM.setAttribute("rel","noopener")
$linkDOM.setAttribute("href","https://youtube.com/jonmircha")
console.log($linkDOM.hasAttribute("rel"))

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento")

console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
