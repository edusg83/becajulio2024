// Recorre todas las propiedades del objeto navigator y muestra su nombre y valor.
for (let propiedad in navigator) {
    if (navigator.hasOwnProperty(propiedad)) {
        console.log(`${propiedad} = ${navigator[propiedad]}`);
    }
}
