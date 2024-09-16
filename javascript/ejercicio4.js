
let cadena1 = "CADENA1";
let cadena2;

console.log(cadena1);


if(typeof(cadena2) == undefined ){
    console.log("SIN DEFINIR");
}else{
    console.log(cadena2);
}



let cliente1 = {
    nombre : "PEPITO",
    tel : "656666666"
}

cliente1['direccion'] = "C/ Salud,21";


for (let propiedad in cliente1) {
    console.log("Propiedad: " + propiedad + ", Valor: " + cliente1[propiedad]);
}




