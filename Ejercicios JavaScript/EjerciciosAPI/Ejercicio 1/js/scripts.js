const request = new Request('http://192.168.18.35:3000/clientes');

const URL = request.URL;
const method = request.method;
const credentials = request.credentials;

fetch(request)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
