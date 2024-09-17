/* a) Crear un objeto llamado funciones e incluir una propiedad que sea una función llamada colorVerde que cuando se invoque
 muestre por consola “VERDE”. Invocar la función colorVerde */
let funciones = {
    colorVerde: function(){
        console.log("VERDE");
    }
};

funciones.colorVerde();

// b) Añadir al Objeto funciones otra propiedad función llamada colorRojo que cuando se invoque muestre por consola “ROJO”
funciones.colorRojo = function() {
    console.log("ROJO");
};

funciones.colorVerde();
funciones.colorRojo();