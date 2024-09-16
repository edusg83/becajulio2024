let cadena1 = "CADENA1";

let cadena2;

console.log("El tipo de cadena1 es:", typeof cadena1);

console.log("El tipo de cadena2 es:", typeof cadena2);

if (typeof cadena2 === "undefined") {
    console.log("SIN DEFINIR");
}

let cliente = {
    nombre: "PEPITO",
    tel: "656666666"
};

cliente.direccion = "C/ Salud, 21";

for (let propiedad in cliente) {
    console.log(`${propiedad}: ${cliente[propiedad]}`);
}
