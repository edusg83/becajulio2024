var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function(){
        let nom = this.nombre;
        var saludo_fn = function(){
            console.log("hola "+ nom);
        }
        saludo_fn();
    }
}

obj.saludo();