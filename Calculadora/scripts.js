let num1;
let num2;
let memory;
let symbol;
let firstOperation = true;

function setDisplay(param) {
  let display = document.getElementById("display");
  if (display.value == 0 && firstOperation) {
    display.value = param;
    firstOperation = false;
  } else {
    display.value += param;
  }
}

function deleteOperation() {
  num1 = undefined;
  num2 = undefined;
  symbol = undefined;
  display.value = "";
}
