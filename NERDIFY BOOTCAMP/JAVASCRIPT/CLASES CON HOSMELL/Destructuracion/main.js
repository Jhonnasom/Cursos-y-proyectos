// Destructuracion
// Para destructurar los objetos
// En los objetos toda llave es un string 
// const person={
//     name:{
//         first:'Hosmel',
//         last:'Quintana',
//     },
// }
// // Destructuracion de un nivel
// // const {first,last}=person.name
// const {
//     name:{first,last}}=person;

// console.log('first',first);
// console.log('last:',last);

// Funciones
// function hola(name){
//     console.log('Hola:',name)
//     const a=1
//     const b=2
// }


// hola`Hosmel ${1} ${2}`
// hola('Keyla');


// Timers
// setTimeout(function(){
//     console.log('test: ')
// },5000)


// Callbacks
/*
function hola(cb){
    cb('Hosmel')
}

hola(function(name){
    console.log('Hola: ',name)
}
)
*/

// Clousure es una funcion que retorna otra funcion
// Sirve para tener acceso a todo el scope del padre
// function hola(){
//     const name='Hosmel'
//     return function(b){
//         console.log(b, name)
//     }
// }

// const c=hola(1)
// console.log('c:',c)
// c(1)
// c(2)
// c(3)


// function sum(a){
//     return function(b){
//         console.log('a+b: ',a+b)
//     }
// }

// const c=sum(1)
// console.log('c: ',c)

// setTimeout(() => {
//     c(2)
// }, 3000);

// Promesas
/*
const p=new Promise(function(resolve,reject){
    if(true){
        setTimeout(() => {
            reject(new Error('Algo salio mal'))
        }, 2000);
    }
})

p.then(function(a){
    console.log('a',a)
}).catch(function(b){
    console.log('b',b)
})*/


