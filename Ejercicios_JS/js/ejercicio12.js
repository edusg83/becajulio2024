let nombre = "Sonia";
let obj = {
    nombre: "Pepito",
    saludo: function(){
        nomb = this.nombre;
        let saludo_fn = function(){
            console.log("Hola " + nomb);
        };
        saludo_fn();
    }
}

obj.saludo();

