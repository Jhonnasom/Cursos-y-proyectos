
/*Una funcion es un bloque de codigo autocontenido que se puede definir una vez y ejecutarse en cualquier momento.

-Opcionalmente una funcion puede aceptar parametros y devolver un valor

-Las funciones en JS son objetos,un tipo especial de objetos.
-Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse valor y pueden pasarse como argumentos y usarse como un valor de retorno
*/


//funcion declarada

function estoEsUnaFuncion(){
    console.log("UNO");
    console.log("DOS");
    console.log("TRES");
}

//Invocacion de funciones
// estoEsUnaFuncion();

function unaFuncionQueDevuelveValor(){

    console.log("UNO");
    return 19;
    console.log("DOS");
    console.log("TRES");
    return "La funcion ha retornado una cadena de texto";
}

let valorDeFuncion=unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);


