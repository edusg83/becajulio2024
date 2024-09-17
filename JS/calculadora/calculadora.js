let numActual = 0;
let resultadoOperacion = 0;
let $panel = document.getElementById("panel");
let operacionActual = '';
let isDecimal = false;
let multiplicador = 10;
let memoria;

function addNumber(number) {
  if (!isDecimal) {
    numActual *= multiplicador;
  } else {
    number /= multiplicador;
  }
  multiplicador *= 10;
  numActual += Number(number);
  $panel.innerHTML = numActual;
}

function operacion(simbolo) {
  if (operacionActual) {
    resultado();
  } else {
    resultadoOperacion = numActual;
  }
  operacionActual = simbolo;
  numActual = 0;
  resetDecimal();
}

function resultado() {
  switch (operacionActual) {
    case "+":
      resultadoOperacion += numActual;
      break;
    case "-":
      resultadoOperacion -= numActual;
      break;
    case "*":
      resultadoOperacion *= numActual;
      break;
    case "/":
      if (numActual == 0) {
        $panel.innerHTML = "MATH ERROR";
        return;
      }
      resultadoOperacion /= numActual;
      resultadoOperacion = Math.round(resultadoOperacion * 1000000000) / 1000000000;
      break;
  }
  operacionActual = "";
  $panel.innerHTML = resultadoOperacion;
  numActual = resultadoOperacion;
  resetDecimal();
}

function borrarNumero() {
  numActual = 0;
  $panel.innerHTML = 0;
  resetDecimal();
}

function clearAll() {
  borrarNumero();
  resultadoOperacion = 0;
  operacionActual = '';
  memoria = undefined;
  document.getElementById("recuperar").disabled = true;
}

function decimal() {
  multiplicador = 10;
  isDecimal = true;
}

function resetDecimal() {
  multiplicador = 10;
  isDecimal = false;
}

function guardar() {
  memoria = Number($panel.innerHTML).valueOf();
  document.getElementById("recuperar").disabled = false;
}

function recuperar() {
  numActual = memoria;
  $panel.innerHTML = numActual;
}