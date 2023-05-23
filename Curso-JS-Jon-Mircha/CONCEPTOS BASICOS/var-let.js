var musica="Rock"
console.log("Variable musica antes del bloque",musica)
{
    var musica="Pop"
    console.log("Variable musica dentro del bloque",musica)
}

console.log("Variable musica despues del bloque",musica)


// Utilizaremos la palabra reservada let
console.log("Variable LET")
let musica2="Rock"
console.log("Variable musica antes del bloque",musica2)
{
    let musica2="Pop"
    console.log("Variable musica dentro del bloque",musica2)
}

console.log("Variable musica despues del bloque",musica2)

// Creacion de objetos
let objeto={
    nombre:"Jhonathan",
    edad:27
}


let colores=["blanco","negro","azul"];
console.log(objeto);
console.log(colores);

objeto.correo="jhonmircha@gmail.com";
colores.push("anaranjado");

console.log(objeto);
console.log(colores);

// Cadenas de texto STRINGS
let saludo=new String("hola mundo")
let lorem="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id quasi obcaecati fuga. Doloribus repudiandae dolorem labore inventore quia officiis nemo deleniti consectetur aspernatur, atque dignissimos. Non odit reiciendis error"

console.log(lorem.includes("amet"),lorem.trim())

// Template Strings
console.log("Template Strings")
let nombre="Jon";
let apellido="Mircha"
let saludos="Hola mi nombre es:"+nombre+" "+apellido
console.log(saludos);

// Interpolacion de variables
// Template Strings
console.log("Templates Strings se utilizan para interpolacion")
let saludo2=`Hola mi nombre es ${nombre} ${apellido}.`
console.log(saludo2)

let ul=`<ul>
<li>Primavera</li>
<li>Invierno</li>
<li>Verano</li>
<li>Otonio</li>
</ul>
`

console.log(ul)
