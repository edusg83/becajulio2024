const usuarioCardBody = document.querySelector('#usuarioCard .card-body');

function crearCardUsuario(usuario) {
  const direccionesHTML = usuario.direcciones.map(direccion => `
    <tr>
      <td>${direccion.direccion}</td>
      <td>${direccion.cpostal}</td>
    </tr>
  `).join('');

  return `
    <h5 class="card-title">${usuario.nombre} ${usuario.apellidos}</h5>
    <table class="table">
      <thead>
        <tr>
          <th>Dirección</th>
          <th>Código Postal</th>
        </tr>
      </thead>
      <tbody>
        ${direccionesHTML}
      </tbody>
    </table>
  `;
}

axios.get('http://localhost:3000/clientes')
  .then(response => {
    const primerUsuario = response.data[0].arrayUsuarios[0];
    usuarioCardBody.innerHTML = crearCardUsuario(primerUsuario);
  })
  .catch(error => {
    console.error('Error al obtener el usuario:', error);
  });
