// Funciones declaradas 

function estoEsUnaFuncion(){
    console.log("UNO");
    console.log("DOS");
    console.log("TRES");

}
// //Invocacion de funciones
// estoEsUnaFuncion();
// estoEsUnaFuncion();

function unaFuncionQueDevuelveValor(){

    console.log("UNO");
    console.log("DOS");
    console.log("TRES");
    return ("La funcion ha retornado una cadena de texto");
}

// let valorDeFuncion=unaFuncionQueDevuelveValor();
// console.log(valorDeFuncion);

function saludar(nombre="Desconocido",edad="32"){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anios`);
}

saludar("Kenai","7")
saludar();

funcionDeclarada();

// Funciones declaradas vs funcioneas expresadas
function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada")
}

funcionDeclarada();
funcionExpresada();

// Funciones anonima 
const funcionExpresada=function(){
    console.log("Esto es una funcion Expresada, es decir una funcion que se le a asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira..")
}

funcionExpresada();
