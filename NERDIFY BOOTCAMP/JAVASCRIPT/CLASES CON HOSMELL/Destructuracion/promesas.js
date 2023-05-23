// // // Normalmente se ejecutan en 2do plano
// // // Recibe una funcion callback y 2 params que inyecta
// //  new Promise(function(resolve,reject){

// //     .then()

// //     .catch()

// //  })

// // //  resolve detona el then
// // //  reject detona el catch

// // fetch
// const f=fetch("https://rickandmortyapi.com/api/character")
// console.log('f',f)
// f.then(function(resp){
//     console.log('resp:',resp)

//     return resp.json
// })

// .then(function(data){
//     console.log('data:',data)

//     return data
// })

// .then(function(args){
//     console.log('args:',args)
// })

// async-await

// async function(){
//     f=await fetch()
// }
// La desventaja es que vuelve sincrona la peticicion y bloquea todo lo que este despues
// Toda funcion marcada como asincrona retorna una promesa
async function init(){
    try{
    const resp=await fetch("https://rickandmortyapi.com/api/character")
    const data=await resp.json()
    console.log('data:',data)
    }
}

init()