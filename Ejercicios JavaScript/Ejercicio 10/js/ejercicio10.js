// Crear el objeto funciones
const funciones = {
    // Propiedad colorVerde: función que imprime "VERDE" en la consola
    colorVerde: function() {
        console.log("VERDE");
    }
};

// Invocar la función colorVerde
funciones.colorVerde();

// Añadir otra propiedad colorRojo al objeto funciones
funciones.colorRojo = function() {
    console.log("ROJO");
};

// Invocar la función colorRojo
funciones.colorRojo();
