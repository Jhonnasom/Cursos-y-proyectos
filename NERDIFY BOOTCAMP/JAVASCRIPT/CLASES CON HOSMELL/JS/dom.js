// // Inner Html no utilizar

// const div=document.createElement('div')
// const h1=document.createElement('h1')

// h1.innerText='DOM'

// // Sirve para instanciar un elemento y crear una clase(add)
// h1.classList.add('class1','class2')

// div.appendChild(h1)

// // Esto sirve para ingresar un hijo dentro de un DIV
// document.body.appendChild(div)
fetch('https://rickandmortyapi.com/api/character/1')
  .then(function (resp) {
    return resp.json()
  })
  .then(render)

function render(data) {
  const app = document.querySelector('#app')

  //

  const card = document.createElement('div')

  card.classList.add('card')

  //

  const image = document.createElement('img')

  image.classList.add('image')
  image.src = data.image

  card.appendChild(image)

  //

  const name = document.createElement('h1')

  name.classList.add('name')
  name.innerText = data.name

  card.appendChild(name)

  //

  const meta = document.createElement('div')
  meta.classList.add('meta')

  const item1 = createItemElement('Species', data.species)
  const item2 = createItemElement('Status', data.status)

  meta.appendChild(item1)
  meta.appendChild(item2)

  card.appendChild(meta)

  //

  app.appendChild(card)
}

function createItemElement(label, value) {
  const item = ce('div', {
    class: '   meta__item   test       ',
    children: [
      ce('div', {
        class: ['    meta__item-title    ', '     ', '', 'test'],
        text: label,
      }),
      ce('div', {
        class: 'meta__item-info',
        text: value,
      }),
    ],
  })

  return item
}
function ce(tag, {children, class: _class, text} = {}) {
  const element = document.createElement(tag)

  if (_class) {
    if (typeof _class === 'string') {
      const temp = _class.trim().split(' ').filter(Boolean)

      element.classList.add(...temp)
    }

    if (Array.isArray(_class)) {
      const temp = _class
        .map(function (item) {
          return item.trim()
        })
        .filter(Boolean)

      element.classList.add(...temp)
    }
  }

  if (text) {
    element.innerText = text
  }

  if (Array.isArray(children)) {
    children.forEach(function (child) {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child))
      } else {
        element.appendChild(child)
      }
    })
  }

  return element
}