// Metodo every
// [1,2].every(function(a){
//     return a===1
// })

// Flat Map
// Primero ejecuta un Map y luego realiza un flat
// const arr=[1,[2,3]]
// console.log('arr:',arr.flat());
// console.log(
//     'arr:map: ',
//     arr.flatMap(function(n){
//         return n**2
//     }));


// Includes
// Verifica si un arr contiene un elemento

// Reducce
// Primer parametro callback
// Segundo param el valor inicial
// [1,2,3].reduce(function(carry,n,i,arr){
//     return carry+n
// },0)
// const _split=[1,2].reduce(function
//     (carry,n,i){
//         if(i===0){
//             return `${n}`
//         }
//     return `${carry},${n}`
//     },'')

//     console.log('_split ',_split )


// Sort
a=[2,5,8,9,3,6]
console.log(a.sort())

