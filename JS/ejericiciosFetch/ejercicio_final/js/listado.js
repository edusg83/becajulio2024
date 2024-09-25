/** @format */

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

const url = "http://192.168.1.193:3000/usuarios";

axios.get(url, { headers }).then((respuesta) => {
  dibujar(respuesta.data);
});

function dibujar(datos) {
  datos.forEach((user) => {
    let id = `<td><a href="./editUser.html?id=${user.id}">${user.id}</a></td>`;
    let nombre = `<td>${user.nombre}</td>`;
    let apellidos = `<td>${user.apellidos}</td>`;
    let email = `<td>${user.email}</td>`;
    let eliminar = `<td><button onclick="eliminar('${user.id}')" class="btn btn-danger">Eliminar</button></td>`;

    let linea = `<tr>${id + nombre + apellidos + email + eliminar}</tr>`;

    document.getElementById("listado").innerHTML += linea;
  });
}

function eliminar(id) {
  let modal = new bootstrap.Modal(document.getElementById("modal"));
  document.getElementById("id").innerHTML = id;
  modal.show();
}

document.getElementById("confirmar").addEventListener("click", () => {
  let id = document.getElementById("id").innerHTML;
  axios.delete(url + "/" + id);
  document.getElementById("listado").innerHTML = "";
  axios.get(url, { headers }).then((respuesta) => {
    dibujar(respuesta.data);
  });
});
