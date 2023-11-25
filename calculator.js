const output = document.getElementById("output");
const buttons = document.getElementsByClassName("calculator__key");
const a = [];
const b = [];
const operators = ["+", "-", "x", "/", "=", "AC"];
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => buttonClick(buttons[i].innerHTML));
}

function buttonClick(i) {
  if (!operators.includes(i)) {
    a.push(i);
  }
  output.innerText = a.join("");
}
