function SayHi(){
    console.log('Hi');
}

function render(data){
    console.log(data)
}

function block(){
    const end=Date.now()+3000;
    while(Date.now()<end){}
}

setTimeout(SayHi,0)

// PROMESAS FETCH
const p=fetch('https://rickandmortyapi.com/api/character/1')
p.then(render)

block()

console.log('First')



