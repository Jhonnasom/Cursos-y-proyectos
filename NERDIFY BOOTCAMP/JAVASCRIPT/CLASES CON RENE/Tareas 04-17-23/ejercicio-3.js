// Replicar las funciones de una calculadora:
// sumar
// restar
// mutiplicar
// dividir
// elevar a potencia


// tome el operador del usuario a través del cuadro de aviso en JavaScript.
var operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
//acepta el número del usuario a través del cuadro de diálogo
var number1 = parseFloat(prompt ('Enter the first number: '));  
var number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaracion de la variable  
  

if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') {   
    result = number1 - number2;  
}  
else if (operator == '*') { 
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; 
}  
  
window.alert(" Result is" + result);  
