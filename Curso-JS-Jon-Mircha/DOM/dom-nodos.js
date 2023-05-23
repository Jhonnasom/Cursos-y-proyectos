/*    
        console.log(window);
        console.log(document)
        
        let texto="Hola, soy tu amigo y docente digital Jonathan Mircha"
        const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
        hablar(texto)
*/

// console.log("*********Elementos del Documento********")
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.styleSheets);
// console.log(document.forms);
// console.log(document.scripts);
// // Get selection sirve para seleccionar algo y mostrarlo
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);
// document.write("<h2>Hola Mundo desde el DOM</h2>")

console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
// Estos 3 ya no se utilizan

// Para IDs get.ElementById
console.log(document.getElementById("menu"));
// Para traer el primer selector valido
console.log(document.querySelector("a"));
// Para traer todos los selectores validos
console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach(el=>console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
// tambien acepta selectores descendientes
console.log(document.querySelectorAll("#menu li"));



