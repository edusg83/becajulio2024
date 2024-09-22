var nombre = "Sonia";

var obj = {
    nombre: "Pepito",
    saludo: function() {
        var saludo_fn = function() {
            console.log("Hola " + this.nombre);
        }.bind(this); // Utilizamos bind para asegurar que this siempre apunte a obj
        
        saludo_fn();
    }
};

// Invocación de la función saludo
obj.saludo();
