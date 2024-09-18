let nombre = "Sonia";
let obj = {
    name: "Pepito",
    saludo: function () {
        let saludo_fn = function(name) {
            console.log("hola " + name + "!");
        }
        saludo_fn(this.name);
    }
}

obj.saludo();