// Mando a llamar todos los selectores que contengan la clase cards
const cards = document.querySelectorAll('.cards')
console.log(cards);

// Creo un arreglo con las imagenes que voy a mostrar
// const boardImages=['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg','img/image5.jpg','img/image6.jpg','img/image7.jpg','img/image8.jpg']
const boardImages=['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg','img/image5.jpg','img/image6.jpg','img/image7.jpg','img/image8.jpg']

const data = boardImages.map(function (boardImages, index) {
  return {
    boardImages,
    identifier: index + 1
  }
});

([...data,...data]).forEach(function (item) {
  console.log('item', item);
  const itemEl = document.createElement('div')
  
  itemEl.classList.add(...['cards'])
})
// //Se crea una variable newArr que contenga el arreglo de imagenes, donde con el express operator se van a rellenar todas los espacios del arreglo, con los metodos sort y random se van a mostrar de manera aleatoria
// let newArr = [...boardImages, ...boardImages].sort(() => Math.random() > 0.5 ? 1 : -1)
// let firstClick = "";
// // console.log(newArr)

// // Creamos un foreach para recorrer los elementos y escuchar el evento click
// cards.forEach((item, i) => {
//   item.addEventListener("click", function (e) {     // Con esto renderizamos las imagenes en pantalla
//     boardImages[i] = `url(${newArr[i]})`
//     console.log(boardImages[i]);
//   })
// })