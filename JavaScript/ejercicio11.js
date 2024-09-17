let pieza1 = {peso : 20};
let pieza2 = {peso: '20'};

console.log(pieza1.peso);
console.log(pieza2.peso);

let b = pieza1.peso == pieza2.peso;
console.log(b);

let c = pieza1.peso === pieza2.peso;
console.log(b);

let d = pieza1.peso == '20' ? pieza1.peso + pieza2.peso : pieza1.peso * pieza2.peso;
console.log(d);