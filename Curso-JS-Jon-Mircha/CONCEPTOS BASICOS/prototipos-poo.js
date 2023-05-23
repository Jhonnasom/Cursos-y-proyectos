// POO
/*Clases-
modelo a seguir

-Objetos-
Es una instancia de una clase

-Atributos-
Es una caracteristica o propiedad del objeto, los atributos son variables dentro de un objeto

-Metodos-
Son las acciones que un objeto puede realizar
(son funciones dentro de un objeto)
 */


/*
const animal={
    nombre:"Snoopy",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}

const animal2={
    nombre:"Lola Bunny",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}

console.log(animal)
console.log(animal2)
*/

// Funcion constructora
/* Version-1 
function Animal(nombre,genero){

    // Atributos
    this.nombre=nombre;
    this.genero=genero;

    // Metodos
    this.sonar=function(){
        console.log("Hago sonidos porque estoy vivo")
    }

    this.saludar=function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}
*/

// Funcion constructora donde asignamos los metodos al prototipo no a la funcion como tal
function Animal(nombre,genero){
    // Atributos
    this.nombre=nombre;
    this.genero=genero;
}

// Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar=function(){
    console.log("Hago sonidos porque estoy vivo")

}
Animal.prototype.saludar=function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

// Herencia Prototipica
function Perro(nombre,genero,tamanio){
    // Le estoy diciendo a perro que su elemento padre sera animal
    this.super=Animal;
    this.super(nombre,genero);
    this.tamanio=tamanio;
}

// Perro esta heredando de Animal
Perro.prototype=new Animal();
Perro.prototype.constructor=Perro;

// Sobreescritura de metodos del Prototipo Padre en el hijo
Perro.prototype.sonar=function(){
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar=function(){
    console.log("Guau Guau!!!");
}

const snoopy=new Perro("Snoopy","Macho","Mediano"),
lolaBunny=new Animal("Lola Bunny","Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();
