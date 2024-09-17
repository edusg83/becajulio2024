// var a = "Er";
// a += "ic";
// var b = a > "John Lennon" || a + " Clapton";
// a=b;
// var c = !(a > b || a != b) && a != "Eric";

// console.log(c);

let pieza1 = {
    peso: 20,
}

let pieza2 = {
    peso: '20',
}

console.log(pieza1.peso == pieza2.peso);
console.log(pieza1.peso === pieza2.peso);

console.log(pieza1.peso === '20' ? pieza1.peso + Number(pieza2.peso) : pieza1.peso * pieza2.peso);