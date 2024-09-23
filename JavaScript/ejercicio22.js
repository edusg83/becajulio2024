document.getElementById('enviar').addEventListener('click', function() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let provincia = document.getElementById('provincia').value;
    let mensajeError = document.getElementById('mensaje-error');
    let resultados = document.getElementById('resultados');



    if (nombre.length > 20 || !nombre.startsWith('ANTONIO')) {
        mensajeError.textContent = "Has introdudido mal los datos :(";
    }else if (email === '' || provincia === '') {
        mensajeError.textContent = "Has introducido mal los datos :(";
    } else {
        resultados.textContent = '-Nombre: ' + nombre + '  -Email: ' + email + '  -Provincia: ' + provincia;
    }
});

document.getElementById('nombre').addEventListener('input', limpiarError);
document.getElementById('email').addEventListener('input', limpiarError);
document.getElementById('provincia').addEventListener('change', limpiarError);

function limpiarError() {
    document.getElementById('mensaje-error').textContent = '';
}
