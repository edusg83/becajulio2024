/** @format */

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

const url = "http://192.168.1.193:3000/clientes";

axios.get(url, { headers }).then((respuesta) => {
  console.log(respuesta);
  dibujar(respuesta.data[0].arrayUsuarios[0]);
});

function dibujar(datos) {
  let direcciones = document.getElementById("direcciones");
  document.getElementById("nombre").innerHTML = datos.nombre + " " + datos.apellidos;
  datos.direcciones.forEach((d) => {
    let direccion = `<tr><td>${d.direccion}</td><td>${d.cpostal}</td></tr>`;
    direcciones.innerHTML += direccion;
  });
}
