var numero1 = 0;
var numero2 = 0;
var numeroM = 0;
var operador = "";
var pantalla = document.getElementById("pantalla");

function funcionC(){
    numero1=0;
    pantalla.value = numero1;
    
}

function funcionMmas(){


    numeroM += parseFloat(pantalla.value);

    pantalla.value = "Guardado";
    
}

function funcionMC(){
    numeroM = 0;
    pantalla.value = "Limpiado";
}

function funcionMR() {
    pantalla.value = numeroM;
    numero1 = "";
    numero2 = "";
    operador = "";

}

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
    pantalla.value=operador;
}


function calcular() {
    
    num1 = parseFloat(numero1);
    num2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        pantalla.value = "Error";
        return;
    }

    let resultado;
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado =num1 - num2;
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
