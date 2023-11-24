const output = document.getElementById("output");
const buttons = document.getElementsByClassName("calculator__key");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => buttonClick(buttons[i].innerHTML));
}
function buttonClick(i) {
  output.innerText = output.innerText + i;
}
