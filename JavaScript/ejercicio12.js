let nombre = "Sonia";
let obj = {
    nombre : "Pepito",
    saludo: function(){
        let name = this.nombre

        let saludo_fn = function(){
            console.log("Hola " + name);
        };
        saludo_fn();
    }
};

obj.saludo();