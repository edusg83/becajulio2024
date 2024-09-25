const headers = {
    'Content-Type': 'application/json',
    'Authorization': '*'
};

const url = 'http://localhost:3000/usuarios';
const params = new URLSearchParams(location.search);
const userId = params.get('id');

const fullUrl = `${url}/${userId}`


axios.get(url, {headers})
.then((respuestaUsuarios) => {
    let users = respuestaUsuarios.data;

    users.forEach((user) => {
        let fila =`<tr>
          <td><a href="editUser.html?id=${user.id}">${user.id}</a></td>
          <td>${user.nombre}</td>
          <td>${user.apellidos}</td>
          <td>${user.email}</td>
          <td><button class="btn btn-danger" onclick="eliminarUsuario('${user.id}')">Eliminar</button></td>
        </tr>`;
        document.getElementById('tbody').innerHTML += fila;
    });
})

    function eliminarUsuario(id) {
        axios.delete(`${url}/${id}`, {headers})
          .then(() => {
            console.log('Usuario eliminado');
          })
      }