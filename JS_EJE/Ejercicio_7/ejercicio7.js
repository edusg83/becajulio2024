let pieza1 = {
    peso: 20
};

let pieza2 = {
    peso: '20'
};

let b = pieza1.peso == pieza2.peso;
console.log(b);

let c = pieza1.peso === pieza2.peso;
console.log(c);

let d = (pieza1.peso == '20') ? (pieza1.peso + Number(pieza2.peso)) : (pieza1.peso * pieza2.peso);
console.log(d);