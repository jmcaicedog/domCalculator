const output = document.getElementById("output");
const keyboard = document.getElementById("keyboard");
let a = [];
let b = [];
let operator = "+";
let result = "0";
let last = "0";
const operators = ["+", "-", "x", "/", "=", "AC"];
let operatorPressed = false;
keyboard.addEventListener("click", (e) => buttonClick(e.target.innerHTML));

function buttonClick(i) {
  if (!operators.includes(i) && operatorPressed == false) {
    a.push(i);
    output.innerText = a.join("");
  } else if (!operators.includes(i) && operatorPressed == true) {
    b.push(i);
    output.innerText = b.join("");
  } else if (a.length > 0) {
    operator = i;
    operatorPressed = true;
    calculate(a, b, i);
  }
}

const calculate = (a2, b2, i2) => {
  switch (i2) {
    case "+":
      console.log("+");
      break;
    case "-":
      console.log("-");
      break;
    case "x":
      console.log("x");
      break;
    case "/":
      console.log("/");
      break;
    case "=":
      result = parseFloat(a2.join("")) + parseFloat(b2.join(""), 2);
      last = result.toString().split("");
      a = [];
      b = [];
      output.innerText = result;
      operatorPressed = false;
      break;
    case "AC":
      a = [];
      b = [];
      console.log("AC");
      output.innerText = "0";
      operatorPressed = false;
      break;
  }
};
