const nombreApellidos = document.getElementById('nombreApellidos');
const direccionesTableBody = document.getElementById('direccionesTable');

function agregarDireccionesATabla(direcciones) {
  direcciones.forEach(direccion => {
    const fila = document.createElement('tr');

    const celdaDireccion = document.createElement('td');
    celdaDireccion.textContent = direccion.direccion;

    const celdaCpostal = document.createElement('td');
    celdaCpostal.textContent = direccion.cpostal;

    fila.appendChild(celdaDireccion);
    fila.appendChild(celdaCpostal);

    direccionesTableBody.appendChild(fila);
  });
}

fetch('http://localhost:3000/clientes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    const primerUsuario = data[0].arrayUsuarios[0];

    nombreApellidos.textContent = `${primerUsuario.nombre} ${primerUsuario.apellidos}`;

    agregarDireccionesATabla(primerUsuario.direcciones);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
