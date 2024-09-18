var numero1 = "";
var numero2 = "";
var numeroM = "";
var operador = "";
var pantalla = document.getElementById("pantalla");

function funcionC(){
    numero1=0;
    pantalla.value = numero1;
    
}

function funcionMmas(){
    numeroM += (pantalla.value);
    pantalla.value = "Guardado";
    
}

function funcionMC(){
    numeroM = 0;
    pantalla.value = "Limpiado";
}

function funcionMR() {
    pantalla.value = numeroM;
    numero1 = numeroM;
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

    if (isNaN(numero1) || isNaN(numero2)) {
        pantalla.value = "Error";
        return;
    }

    let resultado;
    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado =numero1 - numero2;
            break;
        case "x":
            resultado = numero1 * numero2;
            break;
        case "%":
            if (numero2 === 0) {
                pantalla.value = "Error";
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            return;
    }


    pantalla.value = resultado;
    numero1 = resultado; 
    numero2 = "";
    operador = "";
}
