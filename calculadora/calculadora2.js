let memory = 0;

function addToScreen(value) {
  const screen = document.getElementById("screen");
  screen.value += value;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}

function calculate() {
  const screen = document.getElementById("screen");
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}

function memoryAdd() {
    const screen = document.getElementById("screen");
    if (screen.value !== "") {
      memory += parseFloat(screen.value);
      clearScreen();
    }
  }

function memoryRecall() {
  document.getElementById("screen").value = memory;
}

function memoryClear() {
  memory = 0;
}
