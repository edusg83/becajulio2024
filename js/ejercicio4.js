let cadena1 = "CADENA1";
let cadena2;
console.log(cadena1);
console.log(cadena2);

if (cadena2 == undefined) {
    console.log("SIN DEFINIR");
}

let cliente = {
    nombre: "PEPITO",
    tel: "656666666",
}

cliente.direccion = "C/Salud,21";

console.log(cliente.nombre + ", " + cliente.tel + ", " + cliente.direccion);

for(propiedad in cliente){
    console.log(cliente[propiedad]);
}