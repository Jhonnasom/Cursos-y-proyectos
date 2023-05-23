// Escriba una función que reciba como argumentos un string  y retorna true  si la palabra es un palindrome y retorna false  si no es un palindrome.

function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  console.log(palindromeChecker("oso")); // es palindromo
  console.log(palindromeChecker("hola")); // no es palindromo
  console.log(palindromeChecker("omo")); // es palindromo
  