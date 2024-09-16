let cadena1 = "CADENA1";
let cadena2;
let cliente= {
    nombre : "PEPITO",
    tel : "6566666666"
};
console.log(typeof(cadena1));
console.log(typeof(cadena2));


if(typeof cadena2 == "undefined"){
    console.log("SIN DEFINIR");

}


cliente["direccion"]="C/ Salud,21";

for (let propiedad in cliente) {
    console.log(`${propiedad}: ${cliente[propiedad]}`);
}