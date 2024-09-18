let num1 = 0;
let num2 = 0;
let memory = 0;
let symbol = "";
let firstOperation = true;
let symbolPressed = false;
let display;

function setDisplay(param) {
  display = document.getElementById("display");
  if (firstOperation && param != "0") {
    display.value = param;
    firstOperation = false;
  } else {
    display.value += param;
  }
}

function storeValue() {
  display = document.getElementById("display");
  if (num1 != 0) {
    num2 = Number(display.value);
  } else {
    num1 = Number(display.value);
  }
}

function storeSymbol(param) {
  if (symbol == "") {
    symbol = param;
    symbolPressed = true;
  }
}

//TODO uff...
function calculateResult() {}

function deleteOperation() {
  num1 = 0;
  num2 = 0;
  symbol = "";
  display.value = "0";
  firstOperation = true;
  symbolPressed = false;
}

function displayMemory() {
  display = document.getElementById("display");
  if (memory != 0) {
    display.value = memory;
  }
}

function addMemory() {
  display = document.getElementById("display");
  if (display.value != "0" && !symbolPressed) {
    memory += Number(display.value);
    display.value = 0;
  }
}

function clearMemory() {
  memory = 0;
}
