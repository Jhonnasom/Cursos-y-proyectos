
const b={ }
console.log(b);

// Dentro de un objeto a las variables se le van a llamar atributos o propiedades y a las funciones se les llaman metodos
const jon={
    nombre:'Jon',
    apellido:'Mircha',
    edad:24,
    pasatiempos:["correr","hacer ejercicio","dar clases"],
    soltero:false,
    contacto:{
        email:"jonmircha@gmail.com",
        twitter:"@jonmircha",
        movil:"521550000000"
    },
    saludar:function(){
        console.log("hola")
    },
    decirMiNombre:function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios y me puedes seguir como ${this.contacto.twitter}`)
    }
}

console.log(jon);
console.log(jon["contacto"])
jon.saludar();
jon.decirMiNombre();

console.log(Object.keys(jon));
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre"));