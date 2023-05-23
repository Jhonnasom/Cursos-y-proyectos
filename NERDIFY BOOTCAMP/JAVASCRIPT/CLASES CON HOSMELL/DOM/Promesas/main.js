const app=document.querySelector('.app')

fetch("https://rickandmortyapi.com/api/character")
.then((resp)=>resp.json())
.then(render)

function render(data){
    console.log('data ',data);
    const nameEl=document.createElement('h1')
    const episodeListEl=document.createElement('ul')


    nameEl.classList.add('name')
    nameEl.textContent=data.name

    app.appendChild(nameEl)

    data.episode.forEach(function(episodeURL)){
        fetch(episodeURL)
        .then((j))
    }


}