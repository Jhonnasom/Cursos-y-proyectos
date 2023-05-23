const app = document.querySelector(".app");
let intentos = 7;
const wordsIn=[]
const words = [
    "colombia",
    "butterfly",
    "shoes",
    "melody",
    "forest",
    "area",
    "laptop",
    "hiccup",
    "back",
    "false"
];

// Con el spread operator se crea una copia del arreglo original al igual que el map
// El splice nos retorna un arreglo con el o los elementos que indicamos
// El join nos convierte un arreglo a un string
// El split crea un arreglo a partir de un string dividido cada elemento de un string

const selectedWord =
  words.sort(() => 0.5 - Math.random()).splice(0, 1).join("").split("");
console.log(selectedWord)

selectedWord.forEach((i) => {
  generate(i);
})

  document.addEventListener('keyup', (event) => {
    const letterElem = document.querySelectorAll(".letter-container")
    if (selectedWord.includes(event.key)) {
      const position = selectedWord.findIndex((item) => item === event.key)
      letterElem[position].textContent = event.key;
      for (let i = position; i < selectedWord.length; i++) {
        if (selectedWord[i] == event.key) {
          letterElem[i].textContent = event.key;
        }
      }
    } else {
      if (intentos === 0) {
        alert("Estas muerto")
      }
      alert("Has fallado intentalo otra vez")
      intentos--;
    }
    console.log(intentos);
  });
 

function generate(i) {
  const letter = document.createElement("div");
  // letter.innerText = i;
    letter.classList.add("letter-container");
    app.appendChild(letter);
}
