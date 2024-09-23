let numero1 = null;
let numero2 = null;
let operador = null;

function numero(num) {
    const mostrar = document.getElementById("mostrar");
    if (numero1 === null || operador === null) {
        numero1 = num;
        mostrar.innerText = num;
    } else {
        numero2 = num;
        mostrar.innerText = numero1 + " " + operador + " " + num;
    }
}

function oper(ope) {
    operador = ope;
    const mostrar = document.getElementById("mostrar");
    mostrar.innerText = numero1 + " " + operador;
}


function calcular() {
    let resultado = 0;
    if (operador === '+') {
        resultado = numero1 + numero2;
    }
    if (operador === '-') {
        resultado = numero1 - numero2;
    }

    if (operador === '*') {
        resultado = numero1 * numero2;
    }
    if (operador === '/') {
        resultado = numero1 / numero2;
    }
    const mostrar = document.getElementById("mostrar");
    mostrar.innerText = resultado;
    
    numero1 = null;
    numero2 = null;
    operador = null;
}