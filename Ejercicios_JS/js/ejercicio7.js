// a) Crear dos Objetos : pieza1 , pieza2 con las propiedades peso=20 para pieza1 y peso='20' para pieza2
let pieza1 = {
    peso: 20
}

let pieza2 = {
    peso: '20'
}

// b) Comprobar con el operador == si las propiedades peso de los objetos pieza1 y pieza2 son iguales
console.log(pieza1.peso == pieza2.peso);

// c) Comprobar con el operador === si las propiedades peso de los objetos pieza1 y pieza2 son iguales
console.log(pieza1.peso === pieza2.peso);


// d) Con el operador ternario , sumar el valor de las propiedades peso de los objetos pieza1 y pieza2 si la propiedad peso de pieza1='20', multiplizar en caso contrario
let resultado = (pieza1.peso === 20) ? (pieza1.peso + pieza2.peso) : (pieza1.peso * pieza2.peso);
console.log(resultado);