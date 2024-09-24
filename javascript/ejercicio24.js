const request = new Request('http://192.168.1.121:3000/usuarios');

fetch(request)
  .then(response => response.json())
  .then(data => {
    let filas = ``;
    data.forEach(usuario => {
      filas += `<tr>
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellidos}</td>
        <td>${usuario.email}</td>
      </tr>`;
    });
     document.getElementById('tabla').innerHTML=filas;
  })
 
  .catch(err => console.log('Error:', err));