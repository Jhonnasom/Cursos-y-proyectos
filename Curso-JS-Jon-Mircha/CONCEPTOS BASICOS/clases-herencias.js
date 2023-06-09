class Animal{

    // El constructor de una clases es un metodo especial que se ejecuta en el momento de instaciar una clase
    constructor(nombre,genero){
        // Atributos
        this.nombre=nombre;
        this.genero=genero;
    }
    // Metodos
   sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        // con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre,genero);
        this.tamanio=tamanio;
        this.raza=null;
    }
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("Gua guauu")
    }

    // Un metodo estatico se pueden ejecutar sin necesidad de instanciar una clase
    static queEres(){
        console.log("Los perros somos animales mamiferos que pertenecenemos a la familia de los caninos");
    }

    // Los metodos setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza=raza;
    }
    
}

Perro.queEres();

const mimi=new Animal("Mimi","Hembra")
scooby=new Perro("Scooby","Macho","Gigante")

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.sonar();
scooby.saludar();
console.log(scooby.getRaza);
scooby.setRaza="Gran Daness";
console.log(scooby.getRaza)