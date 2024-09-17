function suma(param1, param2) {
    return param1 + param2;
}

console.log(suma(12,12));

(function (num1, num2) {
    console.log(num1 + num2);
}(12,12));

let suma2 = function(param1, param2) {
    console.log(param1 + param2);
}

suma2(24,24);