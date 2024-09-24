
const axios = require('axios');

axios.get('http://192.168.1.129:3000/clientes')
  .then(response => {
    const data = response.data;  
    data.clientes.forEach(cliente => {
      cliente.arrayUsuarios.forEach(usuario => {
        console.log(`${usuario.nombre} ${usuario.apellidos}`);
        
        usuario.direcciones.forEach(direccion => {
          console.log(` ${direccion.direccion} ${direccion.cpostal}`);
        });
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });






