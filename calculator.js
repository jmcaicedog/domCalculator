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
  if (operators.includes(i) && a.length > 0) {
    operatorPressed = true;
  }
  if (i == "AC") {
    a = [];
    b = [];
    operatorPressed = false;
    output.innerHTML = 0;
  }
  if (!operators.includes(i) && operatorPressed == false) {
    a.push(i);
    output.innerText = a.join("");
  } else if (!operators.includes(i) && operatorPressed == true) {
    b.push(i);
    output.innerText = b.join("");
  } else if (a.length > 0 && b.length == 0 && i != "=") {
    operator = i;
    operatorPressed = true;
  } else if (a.length > 0 && b.length > 0 && i == "=") {
    calculate(a, b, operator);
  }
}

const calculate = (a2, b2, i2) => {
  switch (i2) {
    case "+":
      result = parseFloat(a2.join("")) + parseFloat(b2.join(""), 2);
      reset();
      break;
    case "-":
      result = parseFloat(a2.join("")) - parseFloat(b2.join(""), 2);
      console.log("restando");
      reset();
      break;
    case "x":
      result = parseFloat(a2.join("")) * parseFloat(b2.join(""), 2);
      reset();
      break;
    case "/":
      result = parseFloat(a2.join("")) / parseFloat(b2.join(""), 2);
      reset();
      break;
  }
};

function reset() {
  a = [];
  b = [];
  output.innerText = result;
  result = 0;
  operatorPressed = false;
}
