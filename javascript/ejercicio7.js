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

if(pieza1.peso == pieza2.peso){
    resultado = pieza1.peso + pieza2.peso;
}else{
    resultado = pieza1.peso * pieza2.peso;
}

console.log(resultado);
