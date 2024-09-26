const urlParams = new URLSearchParams(window.location.search);
const idUsuario = urlParams.get('id');
const peticionGet = `http://192.168.1.89:3000/usuarios/${idUsuario}`;
const peticionPut = `http://192.168.1.89:3000/usuarios/${idUsuario}`;

axios.get(peticionGet)
    .then(respuesta => {
        let usuario = respuesta.data; 
        document.getElementById('nombre').value = usuario.nombre;
        document.getElementById('apellidos').value = usuario.apellidos;
        document.getElementById('email').value = usuario.email;
    })
    

function guardar() {
    let usuarioActualizado = {
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        email: document.getElementById('email').value
    };

    axios.put(peticionPut, usuarioActualizado) 
        .then(() => {
            alert('Me has actualizado!');
            window.location.href = 'index.html'; 
        })
       
}
