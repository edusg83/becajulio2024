/** @format */

const request = new Request("http://192.168.1.193:3000/clientes");
const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
  .then((response) => response.json())
  .then((data) => {
    dibujar(data[0].arrayUsuarios[0]);
  });

function dibujar(datos) {
  let direcciones = document.getElementById("direcciones");
  document.getElementById("nombre").innerHTML = datos.nombre + " " + datos.apellidos;
  datos.direcciones.forEach((d) => {
    let direccion = `<tr><td>${d.direccion}</td><td>${d.cpostal}</td></tr>`;
    direcciones.innerHTML += direccion;
  });
}
