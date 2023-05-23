const buttons = document.querySelectorAll("[data-selector='button']");
const numbers = document.querySelectorAll("[data-type='number']");
const operators = document.querySelectorAll("[data-type='operator']");
const equal = document.querySelector("[data-type='equal']");
const display = document.querySelector("#display");

const left = [];
let operator = null;
const right = [];
let total = 0;

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    const number = Number(event.target.id);
    if (operator) {
      right.push(number);
    } else {
      left.push(number);
    }
    renderDisplay();
  });
});

operators.forEach(function (_operator) {
  _operator.addEventListener("click", function (event) {
    if (left.length > 0 && operator === null) {
      operator = event.target.id;
      renderDisplay();
    }
  });
});

equal.addEventListener("click", function (event) {
  if (left.length === 0 || right.length === 0 || operator === null) {
    return;
  }
  let leftNum = Number(left.join(""));
  let rightNum = Number(right.join(""));

  switch (operator) {
    case "+":
      total = leftNum + rightNum;
      break;

    default:
      break;
  }
  display.innerText = total;
});

// Para borrar los elementos 
backSpace.addEventListener("click",function(){
    if(operator && right.length>0){
        right.pop();
    }

    if(operator && right.length===0){
        operator=null;
    }

})



function renderDisplay() {
  //   display.innerText = left.concat(operator, right).join("");
  display.innerText = [...left, operator, ...right].join("");
}