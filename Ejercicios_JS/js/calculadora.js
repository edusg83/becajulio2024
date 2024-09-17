let num1 = 0;
let num2 = 0;
let operador;
let resultado = 0;

function colocarNumero(num) {
    if (operador == undefined) {
        num1 = num;
        document.getElementById("resultado").innerHTML = num1;
    } else {
        num2 = num;
        document.getElementById("resultado").innerHTML = num1 + " " + operador + " " + num2;
    }
}

function colocarOperador(operator) {
    if (num1 != 0) {
        operador = operator;
        document.getElementById("resultado").innerHTML = num1 + " " + operador;
    }
}

function colocarComa(){
    
}

function calcularResultado() {
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "X":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;

    num1 = "";
    num2 = "";
    operador = undefined;
}
