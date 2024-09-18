let operacion = { num1: "", operador: "", num2: "" };
let resultado = ""
let sumatoriaM = 0

function imprimirNumero(digito) {


    if (operacion.num1.length == 0) {

        document.getElementById("resultado").innerHTML = digito;

        operacion.num1 = "" + digito
        resultado = "";
    } else if (operacion.operador.length != 0) {

        operacion.num2 += digito;
        document.getElementById("resultado").innerHTML = operacion.num1 + " " + operacion.operador + " " + operacion.num2;
    } else {
        operacion.num1 += digito;
        document.getElementById("resultado").innerHTML = operacion.num1;
    }
}


function setoperator(ope) {
    if (operacion.num1.length != 0) {
        operacion.operador = ope;
        document.getElementById("resultado").innerHTML = operacion.num1 + " " + ope;
    } else if (resultado != 0) {
        operacion.operador = ope;
        document.getElementById("resultado").innerHTML = resultado + " " + ope;
        operacion.num1 = resultado;
        resultado = "";
    }
}

function operacionesExtra(opcion) {
    switch (opcion) {
        case "mc":

            sumatoriaM = 0;

            break;
        case "m_menos":
            if (resultado != 0) {
                sumatoriaM -= parseFloat(resultado);


            } else if (operacion.operador.length != 0) {
                sumatoriaM -= parseFloat(operacion.num2);

            } else {
                sumatoriaM -= parseFloat(operacion.num1);

            }


            break;
        case "m_mas":
            if (resultado != 0) {
                sumatoriaM += parseFloat(resultado);


            } else if (operacion.operador.length != 0) {
                sumatoriaM += parseFloat(operacion.num2);

            } else {
                sumatoriaM += parseFloat(operacion.num1);

            }

            break;
        case "mr":
            if (resultado != 0) {
                document.getElementById("resultado").innerHTML = sumatoriaM;
                operacion.num1 = parseFloat(sumatoriaM);
                resultado = "";

            } else if (operacion.operador.length != 0) {
                document.getElementById("resultado").innerHTML = operacion.num1 + " " + operacion.operador + " " + sumatoriaM;
                operacion.num2 = parseFloat(sumatoriaM);
            } else {
                document.getElementById("resultado").innerHTML = sumatoriaM
                operacion.num1 = parseFloat(sumatoriaM);
            }
            break;
        case "c":
            document.getElementById("resultado").innerHTML = ""
            operacion = { num1: "", operador: "", num2: "" };


            break;
        default:
            break;
    }
}

function operacionTriunfo() {

    let primero = operacion.num1;
    let segundo = operacion.num2;

    switch (operacion.operador) {
        case "/":
            if (primero == 0 && segundo == 0) {
                document.getElementById("resultado").innerHTML = 0;
            } else {
                resultado = parseFloat(primero) / parseFloat(segundo);
                document.getElementById("resultado").innerHTML = resultado;
            }
            break;
        case "+":
            resultado = parseFloat(primero) + parseFloat(segundo);
            document.getElementById("resultado").innerHTML = resultado;
            break;
        case "-":
            resultado = parseFloat(primero) - parseFloat(segundo);;
            document.getElementById("resultado").innerHTML = resultado;
            break;
        case "*":
            resultado = parseFloat(primero) * parseFloat(segundo);
            document.getElementById("resultado").innerHTML = resultado;
            break;
    }

    operacion = { num1: "", operador: "", num2: "" };
}