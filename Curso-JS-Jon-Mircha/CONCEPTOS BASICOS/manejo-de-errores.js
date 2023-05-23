try {
    console.log("En el try se agrega las condiciones a evaluar");
    noExiste;

} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
    console.log(error)

}finally{
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}

try {
    let numero='y';
    if(isNaN(numero)){
        throw new Error("EL caracter introducido no es un numero")
    }
    console.log(numero*numero)
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`)
}

try {
    
} catch (error) {
    
}

