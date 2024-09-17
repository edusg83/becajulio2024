let pieza1 = {
    peso : 20,
    
}

let pieza2 = {
    peso : '20',
    
}


if(pieza1.peso == pieza2.peso){
    console.log("Las propiedades son iguales")
}else{
    console.log("Las propiedades son diferentes")
}

if(pieza1.peso === pieza2.peso){
    console.log("Las propiedades son iguales")
}else{
    console.log("Las propiedades son diferentes")
}


let resultado = (pieza1.peso == pieza2.peso) ? pieza1.peso + Number(pieza2.peso) : pieza1.peso * Number(pieza2.peso);

console.log(resultado);
