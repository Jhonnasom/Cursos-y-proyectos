// const saludar=()=>console.log("Hola");
// saludar();

const saludar=nombre=>console.log(`Hola ${nombre}`);
saludar(`Irma`);

// const sumar=function(a,b){
//     return a+b;
// }

const sumar=(a,b)=>a+b;

console.log(sumar(9,9));

const funcionDeVariasLineas=()=>{
    console.log("UNO");
    console.log("DOS");
    console.log("TRES");
}
funcionDeVariasLineas();

const numeros=[1,2,3,4,5,6];

numeros.forEach((el,index)=>{
    console.log(`${el} esta en la posicion ${index}`)
})

// function Perro(){
//     console.log(this);
// }

// Perro();

const perro={
    nombre:"Kenai",
    ladrar(){
        console.log(this)
    }
}
perro.ladrar();