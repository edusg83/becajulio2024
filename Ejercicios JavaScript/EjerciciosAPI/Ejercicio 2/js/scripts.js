const usuariosTableBody = document.querySelector('#usuariosTable tbody');

function agregarUsuarioATabla(usuario, direcciones) {
  const fila = document.createElement('tr');

  const celdaNombre = document.createElement('td');
  celdaNombre.textContent = usuario.nombre;

  const celdaApellidos = document.createElement('td');
  celdaApellidos.textContent = usuario.apellidos;

  const celdaDirecciones = document.createElement('td');
  
  const listaDirecciones = document.createElement('ul');
  
  direcciones.forEach(direccion => {
    const itemDireccion = document.createElement('li');
    itemDireccion.textContent = `${direccion.direccion}, C.P: ${direccion.cpostal}`;
    listaDirecciones.appendChild(itemDireccion);
  });

  celdaDirecciones.appendChild(listaDirecciones);

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaApellidos);
  fila.appendChild(celdaDirecciones);

  usuariosTableBody.appendChild(fila);
}

fetch('http://localhost:3000/clientes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    data[0].arrayUsuarios.forEach(usuario => {
      agregarUsuarioATabla(usuario, usuario.direcciones);
    });
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
