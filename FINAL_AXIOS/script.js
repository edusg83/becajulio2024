
const url = 'http://192.168.1.129:3000/usuarios';

const obtenerUsuarios = async () => {
  try {
    const respuesta = await axios.get(url);
    return respuesta.data; 
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

const borrarUsuario = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    alert(`Usuario con ID ${id} eliminado exitosamente`);
    tablaUsuarios();
  } catch (error) {
    console.error('Error:', error);
  }
};

const tablaUsuarios = async () => {
  const usuarios = await obtenerUsuarios();
  const tabla = document.getElementById('tablaUsuarios');
  tabla.innerHTML = '';
  usuarios.forEach((usuario) => {
    tabla.innerHTML += `
      <tr>
        <td><a href='editUser.html?id=${usuario.id}'>${usuario.id}</a></td>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellidos}</td>
        <td>${usuario.email}</td>
        <td><button onclick="confirmarBorrar(${usuario.id})">Eliminar</button></td>
      </tr>
    `;
  });
};

const confirmarBorrar = (id) => {
  const confirmar = document.getElementById('confirmar');
  const confirmarBoton = document.getElementById('confirmarBoton');
  confirmar.style.display = 'block';
  confirmarBoton.onclick = () => borrarUsuario(id);
};

document.addEventListener('DOMContentLoaded', tablaUsuarios);
