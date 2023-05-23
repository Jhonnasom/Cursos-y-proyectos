// console.log("Nullish Coalescing");
// console.log(4 ?? 5);
// console.log(null??10);
// console.log(undefined ??0);
// console.log(0??10);

// console.log("Nullish Coalescing");
// console.log(4 || 5);
// console.log(null||10);
// console.log(undefined ||0);
// console.log(0||10);

// While

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// do while

// let i=10;
// do{
//     console.log(i);
//      i++;
// }while(i==10)

// For
// for(let i=0;i<10;i++)

//Utilizando break
// for(let i=0;i<10;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }

// Utilizando continue

// for(let i=0;i<10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// let arr=[1,2,3,4,5,6,7,8,9]
// // console.log(arr.length=20)
// // console.log(typeof(arr));

// let person=['Juan','Antonio','Bryan']
// for(let i=0;i<person.length;i++){
//     console.log(person[i]);
// }


// // let hola=['H','O','L','A','M','U','N','D','O']
// // for(let i=0;i<hola.length;i++){
// //     console.log(hola[i]);
// //     "/n"
// // }

// const str="Hola mundo"
// i=0;

// do{
//     console.log(str[i]);
//     i++
// }while(!str[i]<=str[4])


// let=resultado;

// function holaMundo(nombre) {
//     console.log(`Hola mundo ${nombre}`);
//   }
//   holaMundo("Jonathan");


// Escribe una función que tome un número como argumento y devuelva el cuadrado de ese número.
// function resultado(number){
//   return number**2;
    
// }
// let result = 3;
// console.log(resultado(result))

// // Escribe una función que tome dos números como argumentos y devuelva el número mayor.
// let number1=10;
// let number2=8;

// function mayor(number1,number2){
//     if(number1>number2){
//     return(number-1)
//     }else(number2>number1)
//     return(number2)
// }
// console.log(mayor,number1)

// // Escribe una función que tome un array de números como argumento y devuelva la suma de esos números.
// let valor_one=8;
// let valor_two=10;

// function Suma(valor_one, valor_two){
//    let resultado=valor_one+valor_two;
// }
// console.log(resultado)

// Escribe una función que tome un array de números como argumento y devuelva la suma de esos números.
function Suma(valor1,valor2,valor3){
    var Suma;
    Suma=valor1+valor2+valor3;
    console.log(Suma);
}

var n1,n2,n3

n1=3;
n2=4;
n3=5;

Suma(n1,n2,n3);

// Escribe una función que tome una cadena de caracteres como argumento y devuelva esa cadena en orden inverso.

function invertirCadena(cad){
    var nuevaCadena="";
    for (var i = cad.length - 1;i >= 0; i--) { 
        nuevaCadena += cad[i];
      
    }
    console.log(nuevaCadena);
    
}
invertirCadena('Hola');




// Escribe una función que tome un array de números como argumento y devuelva la suma de esos números.
// var total=0;
// var numeros=[1,2,3,4,5]

// for(let i=0;i<numeros.length;i++){
//     total+=numeros[i];
// }
// console.log(total)

//Buscar un elemento dentro de un array
// let elementos=['Jhonna','Keyla','Somarriba','Penalba']
// let buscarelemento=elementos.includes('Keyla');
// console.log(buscarelemento);