let resultado = '';
let operadorClicado = '';
let numeroGuardado = '';
let memoria = 0;


function addNumero(num) {
    resultado += num;
    document.getElementById("resultado").innerHTML = resultado;
}


function calcular() {
    let numeroActual = resultado;
    let resultadoFinal = 0;


    let num1 = parseFloat(numeroGuardado);
    let num2 = parseFloat(numeroActual);

    switch (operadorClicado) {
        case '+':
            resultadoFinal = num1 + num2;
            break;

        case '-':
            resultadoFinal = num1 - num2;
            break;

        case '*':
            resultadoFinal = num1 * num2;
            break;
        case '/':
            resultadoFinal = num1 / num2;
            break;
    }

    resultado = resultadoFinal.toString();
    document.getElementById("resultado").innerHTML = resultado;
}

function operacion(op) {
    if (op === '=') {
        calcular();
    } else {
        numeroGuardado = resultado;
        operadorClicado = op;
        resultado = '';
    }
}

function clean(){
    resultado = '';
    numeroGuardado = '';
    operadorClicado = '';

    document.getElementById('resultado').innerHTML = '';
}

function mplus(){
    let numeroActual = parseFloat(resultado) || 0;
    memoria += numeroActual;
}