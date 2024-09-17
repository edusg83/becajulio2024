let num1 = "";
let num2 = "";
let operador;
let resultado = 0;

function colocarNumero(num) {
    if (operador == undefined) {
        num1 += num;
        document.getElementById("resultado").innerHTML = num1;
    } else {
        num2 += num;
        document.getElementById("resultado").innerHTML = num1 + " " + operador + " " + num2;
    }
}

function colocarOperador(operator) {
    if (num1 != "") {
        operador = operator;
        document.getElementById("resultado").innerHTML = num1 + " " + operador;
    }
}

function colocarComa() {
    if (operador == undefined) {
        if (!num1.includes(".")) {
            num1 += ".";
            document.getElementById("resultado").innerHTML = num1;
        }
    } else {
        if (!num2.includes(".")) {
            num2 += ".";
            document.getElementById("resultado").innerHTML = num1 + " " + operador + " " + num2;
        }
    }
}

function calcularResultado() {
    switch (operador) {
        case "+":
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case "X":
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;

    num1 = "";
    num2 = "";
    operador = undefined;
}
