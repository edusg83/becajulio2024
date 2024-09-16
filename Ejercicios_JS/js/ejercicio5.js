// a) Crear una variable de tipo array llamada array1 con valor [1,2,3,4]
let array1 = [1, 2, 3, 4];

// b) Crear un pequeño programa que recorra el array y cuando encuentre el 1 muestre UNO , el 2 muestre DOS, el 3 muestre TRES, el 4 muestre CUATRO Utilizar la instrucción Switch

for (let num of array1) {
    switch (num) {
        case 1:
            console.log("UNO");
            break;
        case 2:
            console.log("DOS");
            break;
        case 3:
            console.log("TRES");
            break;
        case 4:
            console.log("CUATRO");
            break;
    }
}

// c) Introducir un 3 al final del array y visualizar el array
array1.push(3);
for(let num in array1){
    console.log(num);
}

// d) Quitar los 3 últimos elementos del array y visualizar el array
for (let i; i < 3; i++) {
    array1.pop();
}

for(let num in array1){
    console.log(num);
}