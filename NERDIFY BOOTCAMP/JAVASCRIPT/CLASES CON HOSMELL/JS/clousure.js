// function createFunction(){
//     const perro={
//         name:"Kenai",
//         edad:"10",
//         raza:"American Bully"
//     }
//     function clousure(key){
//         if(perro.hasOwnProperty(edad)){
//             return(edad)
//         }
//     }
//     key=Object.keys(perro);
// }

// Funcion que retorne una funcion (closhure) que reciba como parametro una key y que el padre tenga una variable que sea un obj y que el closhure verifique en ese obj si la variable existe, si existe que escriba el valor de la llave y lo retorne y si no (?)

function createFunction(){
    const data={}
    return function(key){
        if (data[key]){

        }
    }
}
