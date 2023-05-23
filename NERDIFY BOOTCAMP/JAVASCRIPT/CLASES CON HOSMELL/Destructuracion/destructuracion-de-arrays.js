arr=[1,2,3,4]
// Syntax de destructuracion
// const[]
const [first,second,third]=arr

// Se destructura de esta forma para ignorar ciertos elementos se utiliza coma(,)
const[,,third]=arr

// Destructuracion de 2 niveles
arr=[1,2,[3]]

[, , [third]]=arr