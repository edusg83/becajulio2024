var formulario = document.getElementById("form");
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

function validarFormulario() {
    boton.addEventListener("click", function(event) {
        event.preventDefault(); 

        
        var nombre = formulario.nombre.value;
        var email = formulario.email.value;
        var provincia = formulario.provincia.value;

        var ok = true; 

        
        if (nombre.length > 20 || !nombre.startsWith("ANTONIO")) {
            ok = false;
        }

       
        else if (email === "" || provincia === "" || nombre === "") {
            ok = false;
        }

       
        if (ok) {
            resultado.textContent = `Nombre: ${nombre}, Email: ${email}, Provincia: ${provincia}`;
        } else {
            resultado.textContent = "Los datos del formulario no son correctos";
        }
    });
}

window.onload = function() {
    validarFormulario();
};
