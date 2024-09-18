let numActual = 0;
let resultadoOperacion = 0;
let $panel = document.getElementById("panel");
let operacionActual = '';
let isDecimal = false;
let multiplicador = 10;
let memoriaAlmacenada = 0;
let isNegativo = false;

function addNumber(number) {
  if ($panel.innerHTML.length <= 14) {
    if (!isDecimal) {
      numActual *= multiplicador;
    } else {
      number /= multiplicador;
      multiplicador *= 10;
    }
    if (isNegativo) {
      number *= -1;
    }
  
    numActual += number;
    if (isDecimal) {
      numActual = redondeo(numActual);
    }
    $panel.innerHTML = numActual;
  }
  bloquearNumeros();
  bloquearDecimales();
  bloquearNegativo();
}

function bloquearNumeros() {
  let valor = ($panel.innerHTML.length >= 15) ? true : false;

  let botones = document.getElementsByClassName("numero");
  Array.from(botones).forEach(element => {
    element.disabled = valor;
  });
}

function bloquearDecimales() {
  let valor = ($panel.innerHTML.length >= 13) ? true : false;

  document.getElementById("decimal").disabled = valor;
}

function bloquearNegativo() {
  let valor = ($panel.innerHTML.length >= 15) ? true : false;

  document.getElementById("negativo").disabled = valor;
}

function operacion(simbolo) {
  if (operacionActual) {
    resultado();
  } else {
    resultadoOperacion = numActual;
  }
  operacionActual = simbolo;
  numActual = 0;
  isNegativo = false;
  $panel.innerHTML = numActual;
  resetDecimal();
  bloquearNumeros();
  bloquearNegativo();
  bloquearDecimales();
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
      break;
    case "%":
      resultadoOperacion *= (numActual / 100);
      break;
  }
  operacionActual = "";

  $panel.innerHTML = redondeo(resultadoOperacion);
  numActual = resultadoOperacion;
  resetDecimal();
  isNegativo = false;
  bloquearNumeros();
  bloquearNegativo();
  bloquearDecimales();
}

function redondeo(number) {
  let resultado;

  let precision = 100000000000000;
  for (let i = 0; i < number.toString().split('.')[0].length; i++) {
    precision /= 10;
  }

  resultado = parseFloat(Math.round(number * precision) / precision);

  if (resultado.toString().length > 15) {
    resultado = resultado.toExponential(3);
  }

  return resultado;
}

function borrarNumero() {
  numActual = 0;
  $panel.innerHTML = 0;
  resetDecimal();
  isNegativo = false;
  bloquearNumeros();
  bloquearNegativo();
  bloquearDecimales();
}

function clearAll() {
  borrarNumero();
  resultadoOperacion = 0;
  operacionActual = '';
}

function decimal() {
  isDecimal = true;
}

function resetDecimal() {
  isDecimal = false;
  multiplicador = 10;
}

function guardarMemoria() {
  memoriaAlmacenada = Number($panel.innerHTML).valueOf();
  if (isNegativo) {
    memoriaAlmacenada *= -1;
  }
  document.getElementById("recuperar").disabled = false;
  deshabilitar(false);
}

function recuperarMemoria() {
  numActual = memoriaAlmacenada;
  $panel.innerHTML = numActual;
}

function deshabilitar(estado) {
  document.getElementById("recuperar").disabled = estado;
  document.getElementById("borrarMemoria").disabled = estado;
}

function borrarMemoria() {
  memoriaAlmacenada = 0;
  deshabilitar(true);
}

function memoria(opcion) {
  memoriaAlmacenada += (opcion === '+' ? numActual : - numActual);
  deshabilitar(false);
}

function negativo() {
  numActual *= -1;
  $panel.innerHTML = numActual;
  isNegativo = !isNegativo;
}