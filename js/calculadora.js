
let num1 = "";
let num2 = "";
let operador = "";
let resultado = "";
let sumMemory = 0;

function addNumero(num){
    if ( operador == "" ) {
        num1 += num;
        document.getElementById("resultado").innerHTML = num1;
    } else {
        num2 += num;
        document.getElementById("resultado").innerHTML = num1 + " " + operador + " " + num2;
    }
}

function addOperador(ope){
    operador = ope;
    document.getElementById("resultado").innerHTML = num1 + " " + operador;
}

function calculadora() {

    switch (operador) {
        case "/":
            resultado = dividir(num1, num2);
            document.getElementById("resultado").innerHTML = resultado;
            break;
        case "-":
            resultado = restar(num1, num2);
            document.getElementById("resultado").innerHTML = resultado;
            break;
        case "X":
            resultado = multiplicar(num1, num2);
            document.getElementById("resultado").innerHTML = resultado;
            break;
        case "+":
            resultado = sumar(num1, num2);
            document.getElementById("resultado").innerHTML = resultado;
            break;
    }

    num1 = "";
    num2 = "";
    operador = "";
}

function sumar(num1, num2) {
    return Number(num1) + Number(num2);
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function clearAll() {
    document.getElementById("resultado").innerHTML = "0";
    num1 = "";
    num2 = "";
    operador = "";
}

function cleanMemory() {
    sumMemory = 0;
}

function addMemory() {
    //Añadir si num1 y num2 estan vacios
    if (num1 === "" && num2 === ""){
        sumMemory +=  Number(resultado);
    } else { //Si quiero añadir un numero o los dos antes de hacer la operacion
        sumMemory +=  Number(num1) + Number(num2);
    }   
}

function showMemory() {
    document.getElementById("resultado").innerHTML = sumMemory;
}