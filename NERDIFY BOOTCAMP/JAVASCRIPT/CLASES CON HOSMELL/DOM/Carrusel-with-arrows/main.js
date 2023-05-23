// Extrae el elemento que contiene la clase a la que apuntamos
const app = document.querySelector('.app')
const arrowR=document.querySelector('.arrowR')
const arrowL=document.querySelector('.arrowL')

// Convierte en arreglo todos los elementos que contengan la clase dot y la clase image
const dots = Array.from(document.querySelectorAll('.dot'))
const images = Array.from(document.querySelectorAll('.image'))

// Con esta funcion mandamos a activar los botones o puntos
function activateDot(id) {
  document.querySelector(`.dot[data-id="${id}"]`)?.classList.add('dot--active')
  // Apuntamos a la clase dot que contiene el data-atributte id y si el id corresponde al matcheado en ese instante le anexamos la clase dot--active
}

// Con esta funcion mandamos a activar las imagenes
function activateImage(id) {
  document.querySelector(`.image[data-id="${id}"]`)?.classList.add('image--active')
    // Apuntamos a la clase image que contiene el data-atributte id y si el id corresponde al matcheado en ese instante le anexamos la clase dot--active
  //Mostramos los valores en consola:
}

// Con esta funcion mandamos a eliminar los estados activos de los dos y las images
function removeActives() {
  document.querySelector('.dot--active')?.classList.remove('dot--active')
  document.querySelector('.image--active')?.classList.remove('image--active')
}

// Se crea un registrador o escuchador de eventos del comando 'keyup'
document.addEventListener('keyup', function (event) {
  const activeImage = document.querySelector('.image--active')
  const {id} = activeImage?.dataset ?? {}

  if (!id) {
    return
  }

  let nextId = null

  if (event.key === 'ArrowRight') {
    if (images.length > Number(id)) {
      nextId = Number(id) + 1
    } else {
      nextId = 1
    }
  }

  if (event.key === 'ArrowLeft') {
    if (Number(id) > 1) {
      nextId = Number(id) - 1
    } else {
      nextId = images.length
    }
  }

  if (nextId) {
    removeActives()
    activateDot(nextId)
    activateImage(nextId)
  }
})

app.addEventListener('click', function ({target}) {
  if (
    !target.classList.contains('dot') &&
    !target.classList.contains('image')
  ) {
    return
  }

  removeActives()

  const {id} = target.dataset

  if (id) {
    activateDot(id)
    activateImage(id)
  }
})

// Logica para las flechas izquierda
arrowR.addEventListener("click", function (event) {
  const activeImage = document.querySelector('.image--active')
  const {id} = activeImage?.dataset ?? {}

  if (!id) {
    return
  }

  let nextId = null

  if (event.type === "click") {
    if (images.length > Number(id)) {
      nextId = Number(id) + 1
    } else {
      nextId = 1
    }
  }

 
  if (nextId) {
    removeActives()
    activateDot(nextId)
    activateImage(nextId)
    }
})

// Logica para las flechas izquierda
arrowL.addEventListener("click", function (event) {
  const activeImage = document.querySelector('.image--active')
  const {id} = activeImage?.dataset ?? {}

  if (!id) {
    return
  }

  let nextId = null

  if (event.type === "click") {
    if (images.length > Number(id)) {
      nextId = Number(id) + 1
    } else {
      nextId = 1
    }
  }

 
  if (nextId) {
    removeActives()
    activateDot(nextId)
    activateImage(nextId)
    }
})

  .addEventListener('change', function (e) {
    Array.from(e.target.url).forEach(function (url) {
      const url = URL.createObjectURL(url)
      const img = document.createElement('img')
      img.src=url
  })
})