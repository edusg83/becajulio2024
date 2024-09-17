var nombre = "Sonia";

obj = {
    nombre: "Pepito",
    saludo: function(){
        var saludo_fn = function(){
            let nom = this.nombre;
        console.log("Hola " + nom);
        };
    saludo_fn(obj);
    } 
};

obj.saludo(obj)