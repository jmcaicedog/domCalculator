const output = document.getElementById("output");
const buttons = document.getElementsByClassName("calculator__key");
let a = [];
let b = [];
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
    console.log(operator);
    operatorPressed = true;
    switch (i) {
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
        console.log("equals");
        break;
      case "AC":
        a = [];
        b = [];
        output.innerText = "0";
        break;
    }
  }
}
