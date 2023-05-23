let contador=0;

while(contador<10){
    console.log("While"+contador);
    contador++;
}

do{
    console.log("Do While"+contador);
    contador++;
}while(contador<10);  


let numeros=[10,20,30,40,50,60,70,80,90,100];
for(let i=0;i<numeros.length;i++){
    console.log("for"+" "+numeros[i])
}

const jon={
    nombre:"Jon",
    apellido:"Mircha",
    edad:35
}

// Cuando estamos trabajando en un for-in y queremos imprimir el valor del objeto el punto no va a servir tiene que ser corchetes
for (const propiedad in jon) {
   console.log(`Key: ${propiedad}, Value:${jon[propiedad]}`)
}

// For of me va a servir para poder recorrer cada uno de los elementos de cualquier objeto en JS que sea iterable, (iterable quiere decir que yo pueda partirlo en pequenios elementos) 
for (const elemento of numeros) {
    console.log(elemento)
}


let cadena="Hola Mundo";
for (const caracther of cadena) {
    console.log(caracther);
}

