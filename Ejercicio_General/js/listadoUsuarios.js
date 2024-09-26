const requestGet = "http://192.168.1.162:3000/usuarios";
const requestDelete = "http://192.168.1.162:3000/usuarios/";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};
const listado = document.getElementById("listado");
const modalConfirmarDelete = new bootstrap.Modal(document.getElementById('modalConfirmarDelete'));
let IdUsuarioElegido = "";

axios.get(requestGet, { headers })
    .then(response => {
        let data = response.data;
        // console.log(data);
        dibujarFilas(data);
    })
    .catch(error => console.error('Error:', error));

function dibujarFilas(usuarios) {
    let filas = '';

    usuarios.forEach(usuario => {
        filas += `
            <tr>
                <td><a href="editUser.html?id=${usuario.id}">${usuario.id}</a></td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellidos}</td>
                <td>${usuario.email}</td>
                <td><button class="btn btn-danger btn-sm" onclick="abrirModal('${usuario.id}')">Eliminar</button></td>
            </tr>
        `;
    });

    listado.innerHTML = filas;
}

function abrirModal(id){
    IdUsuarioElegido = id;
    modalConfirmarDelete.show();
}

function eliminar(){
    axios.delete(requestDelete + IdUsuarioElegido, { headers })
    .then(response => {
        console.log("Usuario con el ID: " + IdUsuarioElegido + " eliminado");
        modalConfirmarDelete.hide();
        window.location.reload();
    })
    .catch(error => console.error('Error:', error));
}
