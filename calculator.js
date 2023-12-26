const output = document.getElementById("output");
const keyboard = document.getElementById("keyboard");
let a = [];
let b = [];
let operator = "+";
let result = "0";
let last = "";
const operators = ["+", "-", "x", "/", "=", "AC"];
let operatorPressed = false;
let lastPressent = false;
keyboard.addEventListener("click", (e) => {
  if (e.target.id != "keyboard") buttonClick(e.target.innerHTML);
});

function buttonClick(i) {
  if (operators.includes(i) && a.length == 0) {
    if (last != undefined) {
      a = String(last).split("");
      operatorPressed = true;
    }
  }
  if (operators.includes(i) && a.length > 0) {
    operatorPressed = true;
  }
  if (i == "AC") {
    a = [];
    b = [];
    last = [];
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
      result = parseFloat(a2.join("")) + parseFloat(b2.join(""));
      last = result;
      reset();
      break;
    case "-":
      result = parseFloat(a2.join("")) - parseFloat(b2.join(""));
      last = result;
      reset();
      break;
    case "x":
      result = parseFloat(a2.join("")) * parseFloat(b2.join(""));
      last = result;
      reset();
      break;
    case "/":
      result = parseFloat(a2.join("")) / parseFloat(b2.join(""));
      last = result;
      reset();
      break;
  }
};

function reset() {
  a = [];
  b = [];
  Number.isInteger(result)
    ? (output.innerText = result)
    : (output.innerText = parseFloat(result).toFixed(2));

  result = 0;
  operatorPressed = false;
}
