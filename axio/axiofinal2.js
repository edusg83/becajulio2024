const headers = {
    'Content-Type': 'application/json',
    'Authorization': '*'
};

const url = 'http://localhost:3000/usuarios';
const params = new URLSearchParams(location.search);
const userId = params.get('id');

const fullUrl = `${url}/${userId}`

axios.get(fullUrl, {headers})
      .then(response => {
        const usuario = response.data;
        document.getElementById('nombre').value = usuario.nombre;
        document.getElementById('apellidos').value = usuario.apellidos;
        document.getElementById('email').value = usuario.email;
      })
      
  
    document.getElementById('editUserForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      let actualizarUsuario = {
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        email: document.getElementById('email').value
      };
  
      axios.put(fullUrl, actualizarUsuario)
        .then(response => {
          console.log('Usuario actualizado:', response.data);
          window.location.href = 'axiofinal.html';
        })
    });