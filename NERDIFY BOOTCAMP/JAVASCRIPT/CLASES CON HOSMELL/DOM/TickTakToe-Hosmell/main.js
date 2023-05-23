const conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const state=Array.from(Array(9).fill(null))

let currentPlayer='X'

function onItemClick(index){
    return function(event){
    if(state[index]){
        return
    }
    state[index]=currentPlayer
    event.target.textContent=currentPlayer

    currentPlayer=currentPlayer==='X'?'0':'X'

    console.log('state',state);
    check()
    }
}

function check(){
    conditions.some(function(condition){
        console.log('condition: ',condition)
        const [a,b,c]=condition
        if(!state[a]){
            return false
        }
        return state[a]===state[b] && state[b]===state[c]
    })
}


const items=document.querySelectorAll('.item')

items.forEach(function(item,index){
    item.addEventListener('click',onItemClick(index))
})