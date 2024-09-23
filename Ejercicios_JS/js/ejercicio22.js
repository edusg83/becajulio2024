const formulario = document.getElementById("formulario");
const valoresFormulario = document.getElementById("mostrarValores");

formulario.onsubmit = function (event) {
    event.preventDefault();
    comprobarNombre()
}

formulario.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        valoresFormulario.textContent = "";
    });
});



function comprobarNombre() {
    let nombre = document.getElementById("nombre").value.toUpperCase();

    if (nombre.length > 20) {
        valoresFormulario.textContent = "El nombre no puede tener más de 20 caracteres.";
    } else if (!nombre.startsWith("ANTONIO")) {
        valoresFormulario.textContent = ("El nombre debe comenzar con 'ANTONIO'.");
    } else {
        comrpoabrCampos();
    }
}

function comrpoabrCampos() {
    let email = document.getElementById("email").value;

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

    valoresFormulario.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Provincia:</strong> ${provincia}</p>
    `;
}