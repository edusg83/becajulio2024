const peticionGet = "http://192.168.1.89:3000/usuarios";
const peticionDelete = "http://192.168.1.89:3000/usuarios/";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};


function obtenerUsuarios() {
    return axios.get(peticionGet, {headers})
        .then(respuesta => {
            return respuesta.data;
        })

}

function mostrarTabla(usuarios) {
    let tbody = document.querySelector('#tablaUsuarios tbody');
    tbody.innerHTML = '';

    usuarios.forEach(usuario => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td><a href="editarUser.html?id=${usuario.id}">${usuario.id}</a></td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.email}</td>
            <td><button class="btn btn-danger" onclick="eliminar('${usuario.id}')">Eliminar</button></td>
        `;
        tbody.appendChild(fila);
    });
}


function eliminar(id) {
    if (confirm("¿Estás seguro de que quieres eliminarme?")) {
        axios.delete(peticionDelete + id, { headers })
            .then(() => {
                alert(`Yo usuario con ID ${id} he sido eliminado`);
                cargarUsuarios();
            })
    }
}


function cargarUsuarios() {
    obtenerUsuarios().then(usuarios => {
        mostrarTabla(usuarios);
    });
}

document.addEventListener('DOMContentLoaded', cargarUsuarios);