//SHOW
const endpoint = 'http://localhost:3000/usuarios';
const tablaUsuarios = document.getElementById('tablaUsuarios');
//let deleteUserId = null;

// esto carga a los usuarios
axios.get(endpoint)
  .then(response => {
    const usuarios = response.data;
    usuarios.forEach(usuario => {
      const fila = document.createElement('tr');
      
      // agregar id y luego agregar boton editar, tener en cuenta el window.location
      fila.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellidos}</td>
        <td>${usuario.email}</td>
        <td>
        <button class="btn btn-warning btn-sm" onclick="window.location.href='editarUsuario.html?id=${usuario.id}'">Editar</button>

        </td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="eliminar(${usuario.id})">Eliminar</button>

        </td>
      `;
      tablaUsuarios.appendChild(fila);
    });
  })

// DELETE creacion de funcion para eliminar el usuario
function eliminar(id) {
  axios.delete(`${endpoint}/${id}`)
    .then(() => {

      window.location.reload();
    })
}

