const output = document.getElementById("output");
const buttons = document.getElementsByClassName("calculator__key");
const a = [];
const b = [];
let operator = "+";
const operators = ["+", "-", "x", "/", "=", "AC"];
let operatorPressed = false;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => buttonClick(buttons[i].innerHTML));
}

function buttonClick(i) {
  if (!operators.includes(i) && operatorPressed == false) {
    a.push(i);
    output.innerText = a.join("");
  } else if (!operators.includes(i) && operatorPressed == true) {
    b.push(i);
    output.innerText = b.join("");
  } else {
    operator = i;
    operatorPressed = true;
    switch (i) {
      case "+":
        console.log("addition");
        break;
      case "-":
        console.log("substraction");
        break;
      case "x":
        console.log("multiplication");
        break;
      case "/":
        console.log("division");
        break;
      case "=":
        console.log("equals");
        break;
      case "AC":
        console.log("ac");
        break;
    }
  }
}
