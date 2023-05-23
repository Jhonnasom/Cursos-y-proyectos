// if or else
let edad=17;
// if(edad>=17){
//    console.log("Eres mayor de edad");
// }else{
//     console.log("Eres menor de edad")
// }

// if -else if-else

// Dejame Dormir 0-5am
// Buenos dias 6hrs-11hrs
// Buenas tardes 12hrs-18hrs
// Buenas noches 19hrs-23hrs

let hora=15;
if(hora>=0 && hora<=5){
    // console.log("Dejame dormir")
}else if(hora>=6 && hora<=11){
    // console.log("Buenos dias")
}else if(hora>=12 && hora<=18){
    // console.log("Buenas tardes")
}else if(hora>=19 && hora<=23){
    // console.log("Buenas noches")
}

// Operador Ternario
// Operador ternario(condicion)?verdadero:falso
console.log("Operador Ternario");
let eresMayor=(edad >=18)
?"Eres mayor de edad"
:"Eres menor de edad";
console.log(eresMayor);

// switch-case
/*Nos va a servir cuando nosotros tengamos una situacion en donde tengamos diferentes valores para una misma variable */
// domingo-0
// lunes-1
//martes-2
//miercoes/3
//jueves-4
// viernes-5

switch (key) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
    case 4:
        console.log("Jueves")
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("El dia no existe")
        break;
}

