/** @format */

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

const url = "http://192.168.1.193:3000/clientes";

axios.get(url, { headers }).then((respuesta) => {
  console.log(respuesta);
  dibujar(respuesta.data[0].arrayUsuarios);
});

function dibujar(datos) {
  console.log(datos);

  const tabla = document.getElementById("tbody");

  Array.from(datos).forEach((user) => {
    const linea = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.innerHTML = user.nombre;

    const apellido = document.createElement("td");
    apellido.innerHTML = user.apellidos;

    const direccion = document.createElement("td");
    for (const key in user.direcciones) {
      direccion.innerHTML += user.direcciones[key].direccion + " " + user.direcciones[key].cpostal + "<br>";
    }

    linea.appendChild(nombre);
    linea.appendChild(apellido);
    linea.appendChild(direccion);

    tabla.appendChild(linea);
  });
}
