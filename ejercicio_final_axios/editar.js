// PUT 
const endpoint = 'http://localhost:3000/usuarios';
const queryParams = new URLSearchParams(window.location.search);
const usuarioID = queryParams.get('id');

// url + id del usuario + mas los valores a editar del usuario con dicho id
axios.get(`${endpoint}/${usuarioID}`)
  .then(response => {
    const usuario = response.data;
    document.getElementById('nombre').value = usuario.nombre;
    document.getElementById('apellidos').value = usuario.apellidos;
    document.getElementById('email').value = usuario.email;
  })


// se presiona submit y se guardan los cambios realizados, los cambios se guardan en variables y luego se envian por axios a traves del put
document.getElementById('formularioEditar').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const email = document.getElementById('email').value;

  axios.put(`${endpoint}/${usuarioID}`, { nombre, apellidos, email })
    .then(() => {
      window.location.href = 'index.html';
    })
});
