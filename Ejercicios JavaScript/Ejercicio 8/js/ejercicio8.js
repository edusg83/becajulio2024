function suma(param1, param2) {
    return param1 + param2;
}

let resultadoSuma = suma(12, 12);
console.log("Resultado de la función suma(12, 12):", resultadoSuma);

(function(param1, param2) {
    let resultado = param1 + param2;
    console.log("Resultado de la función auto-ejecutable (12, 12):", resultado);
})(12, 12);
