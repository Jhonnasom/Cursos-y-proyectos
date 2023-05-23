function createListItem(text, imgUrl, status) {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = imgUrl
    img.style.width = '300px'
    li.textContent = text
    li.style.alignItems = 'center'
    li.style.display = 'flex'
    li.style.flexDirection = 'column'
    li.textContent = `${text} - ${status}`
    li.appendChild(img)
    return li
}
function createList(items) {
    const ul = document.createElement('ul')
    ul.style.display = 'flex'
    ul.style.flexWrap = 'wrap'
    ul.style.gap = '20px'
    items.forEach((item) => {
        const li = createListItem(item.name, item.image, item.status)
        fetch(item.episode[0])
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            const span = document.createElement('span')
            span.textContent = data.episode
            li.appendChild(span)
        })
        ul.appendChild(li)
    })
    return ul
}
const loadingDiv = document.getElementById('loading')
loadingDiv.textContent = 'Loading...'
fetch('https://rickandmortyapi.com/api/character')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        const ul = createList(data.results)
        document.body.appendChild(ul)
    })
    .catch((err) => {
        console.error(err)
    })
    .finally(() => {
        loadingDiv.textContent = ''
    }) 