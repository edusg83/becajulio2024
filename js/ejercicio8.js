function suma(param1, param2) {
    return param1 + param2;
}
console.log("El resultado de la suma es:", suma(12, 12));

(function() {
    let param1 = 12;
    let param2 = 12;
    console.log("El resultado de la suma (función anónima) es:", (param1 + param2));
})();