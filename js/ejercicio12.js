var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function () {
        //let nombre = this.nombre;
        var saludo_fn = function(nombre) {
            console.log("hola " + nombre);
        }
        saludo_fn(this.nombre);
        
    }
}

obj.saludo();