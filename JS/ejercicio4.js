let cadena1 = "CADENA1";
let cadena2;

console.log(typeof cadena1);
console.log(typeof cadena2);

if (typeof cadena2 == undefined) {
  console.log("SIN DEFINIR");
}


const cliente = {
  nombre: "PEPITO",
  tel: "656666666"
}

cliente.direccion = "C/ Salund, 21";

for (const el in cliente) {
  console.log(el);
}
