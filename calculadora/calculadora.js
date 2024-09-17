let numActual = '0';
let numAnt = '';
let operador = '';

function actualizarPantalla() {
    document.getElementById('pantalla').innerText = numActual;
}

function escribir(numero) {
    if (numActual === '0' && numero !== '.') {
        numActual = numero;
    } else {
        numActual += numero;
    }
    actualizarPantalla();
}

function operacion(param) {
    if (operador !== '') {
        calcular();
    }
    operador = param;
    numAnt = numActual;
    numActual = '0';
}

function calcular() {
    if (operador === '') return;

    let resultado;
    const num1 = parseFloat(numAnt);
    const num2 = parseFloat(numActual);

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
    }

    numActual = resultado.toString();
    operador = '';
    actualizarPantalla();
}