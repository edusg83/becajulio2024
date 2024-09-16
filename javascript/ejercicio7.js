let pieza1 = {peso: 20},
pieza2 ={peso: '20'};

console.log(pieza1);
console.log(pieza2);

console.log(pieza1.peso == pieza2.peso);
console.log(pieza1.peso === pieza2.peso);

if(pieza1.peso = '20'){
    console.log(pieza1.peso + pieza2.peso);
}
    else{
        console.log(pieza1.peso * pieza2.peso);
    }

