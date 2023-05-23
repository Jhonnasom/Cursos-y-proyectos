let nombre="Kenai"
edad=7;

const perro={
    nombre:nombre,
    edad:edad,
    ladrar:function(){
        console.log("guau guauuuuuu")
    }
}

console.log(perro);
perro.ladrar();

// Objetos literales
const dog={
    nombre,
    edad,
    raza:"Callejero",
    ladrar(){
        console.log("guau guauuuuuu guauuu");
  
    }
}

console.log(dog)
dog.ladrar();