/* a) Crear una función llamada suma que reciba dos parametros param1,param2 y devuelva el resultado de la suma de los dos
   parámetros. Invocar la función con los parámetros, (12,12) */
function suma(param1, param2) {
    console.log(param1 + param2);
}
suma(12, 12);


// b) Crear una función anónima auto-ejecutable que calcule lo mismo que en el apartado anterior
(function (param1, param2) {
    console.log(param1 + param2);
}(12, 12));