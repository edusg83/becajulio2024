const peticionPost = "http://192.168.1.89:3000/usuarios";

function anyadirUsuario() {
    const nuevoUsuario = {
        id: document.getElementById('id').value, 
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        email: document.getElementById('email').value,
    };

    axios.post(peticionPost, nuevoUsuario)
        .then(() => {
            alert('¡Me has creado!');
            window.location.href = 'index.html';
        })

}
