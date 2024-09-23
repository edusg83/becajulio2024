(function () {
    let formulario = document.getElementById("formulario");
    let valoresFormulario = document.getElementById("mostrarValores");


    formulario.onsubmit = function (event) {
        event.preventDefault();
        comprobarNombre()
    }

    formulario.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            valoresFormulario.textContent = "";
        });
    });

})();

function comprobarNombre() {
    let nombre = document.getElementById("nombre").value;
    let valoresFormulario = document.getElementById("mostrarValores");

    if (nombre.length > 20) {
        valoresFormulario.textContent = "El nombre no puede tener más de 20 caracteres.";
    }

    // if (!nombre.contains("ANTONIO")) {
    //     alert("El nombre debe comenzar con 'ANTONIO'.");
    // }

    comrpoabrCampos();
}

function comrpoabrCampos() {
    let email = document.getElementById("email").value;
    let valoresFormulario = document.getElementById("mostrarValores");

    if (email == "") {
        valoresFormulario.textContent = "Todos los campos deben estar rellenos.";
    } else {
        mostrarValores();
    }
}

function mostrarValores() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let provincia = document.getElementById("provincia").value;
    let valoresFormulario = document.getElementById("mostrarValores");
    valoresFormulario.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${email}</p>
        <p><strong>Email:</strong> ${provincia}</p>
    `;
}