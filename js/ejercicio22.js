window.onload = function() {
    var formulario = document.getElementById("formulario");
    var enviarBtn = document.getElementById("enviar");
    var resultadosDiv = document.getElementById("resultados");
    var errorDiv = document.getElementById("error");

    enviarBtn.onclick = function() {
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var provincia = document.getElementById("provincia").value;

        errorDiv.textContent = "";
        resultadosDiv.textContent = "";

        if (!validarNombre(nombre) || !validarRelleno(email, provincia)) {
            errorDiv.textContent = "Los datos del formulario no son correctos";
            return;
        }
        resultadosDiv.innerHTML = `
            <p><strong>Nombre:</strong> ` + nombre + `</p>
            <p><strong>Email:</strong> ` + email + `</p>
            <p><strong>Provincia:</strong> ` + provincia +`</p>
        `;
    };

    formulario.oninput = function() {
        errorDiv.textContent = "";
    };

    function validarNombre(nombre) {
        return nombre.startsWith("ANTONIO") && nombre.length <= 20;
    }

    function validarRelleno(email, provincia) {
        return email !== "" && provincia !== "";
    }
};
