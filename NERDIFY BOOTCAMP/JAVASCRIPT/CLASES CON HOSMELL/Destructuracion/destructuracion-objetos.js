const O={
    name:'Hosmel'
}

// Destructuracion de Objetos Sintaxis
const{name}=O

// Podemos crear alias para las propiedades,esto sirve cuando tenemos varias propiedades con el mismo nombre
const{name:n}=O

const{age:edad=30}=O
console.log(edad)