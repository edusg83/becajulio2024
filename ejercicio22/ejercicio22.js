document.addEventListener("DOMContentLoaded", function() {

const formulario = document.getElementById("formulario");
const errorDiv = document.getElementById("error");
const resultadoDiv = document.getElementById("resultado");


    formulario.addEventListener("submit", function(event) {

        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const provincia = document.getElementById("provincia").value;

        errorDiv.textContent = '';
        let errores = [];

        if (nombre.length > 20 || !nombre.startsWith("ANTONIO")) {
            errores.push("El nombre debe ser menor de 20 caracteres y comenzar con 'ANTONIO'.");
        }


        if (!email) {
            errores.push("Email no puede estar vacío.");
        }
        if (!provincia) {
            errores.push("Debe seleccionar una provincia.");
        }



        if (errores.length > 0) {
            errorDiv.textContent = "Datos del formulario no son correctos: " + errores.join(' ');
        } else {
            resultadoDiv.textContent = `Datos: Nombre: ${nombre}, Email: ${email}, Provincia: ${provincia}`;
        }

        });



    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            errorDiv.textContent = '';
        });
    });



});