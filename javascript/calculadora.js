var numero1 = "";
var numero2 = "";
var operador = "";
var pantalla = document.getElementById("pantalla");


function agregarNumero(numero) {
    if (operador === "") {
        numero1 += numero;
        pantalla.value = numero1;
    } else {
        numero2 += numero;
        pantalla.value = numero2;
    }
}


function seleccionarOperador(op) {
    operador = op;  
}


function calcular() {
    
    let num1 = parseFloat(numero1);
    let num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
        pantalla.value = "Error";
        return;
    }

    let resultado;
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "x":
            resultado = num1 * num2;
            break;
        case "%":
            if (num2 === 0) {
                pantalla.value = "Error";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            return;
    }


    pantalla.value = resultado;
    numero1 = resultado; 
    numero2 = "";
    operador = "";
}
