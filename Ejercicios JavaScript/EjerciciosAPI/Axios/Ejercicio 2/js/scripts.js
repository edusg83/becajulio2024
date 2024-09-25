// Seleccionamos el cuerpo de la tabla
const usuariosTableBody = document.querySelector('#usuariosTable tbody');

function crearFilaUsuario(usuario) {
  return `
    <tr>
      <td>${usuario.nombre}</td>
      <td>${usuario.apellidos}</td>
      <td>${usuario.email}</td>
    </tr>
  `;
}

axios.get('http://localhost:3000/usuarios')
  .then(response => {
    const usuarios = response.data;
    usuarios.forEach(usuario => {
      usuariosTableBody.innerHTML += crearFilaUsuario(usuario);
    });
  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  });
