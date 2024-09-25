const id = new URLSearchParams(document.location.search).get("id");

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

const url = "http://localhost:3000/usuarios/" + id;

const $nombre = document.getElementById("nombre");
const $apellidos = document.getElementById("apellidos");
const $email = document.getElementById("email");

axios.get(url, { headers }).then((respuesta) => {
  rellenar(respuesta.data);
})
.catch(error=>{
  console.error("Error al recuperar usuario: "+error);
});

function rellenar(datos) {
  $nombre.value = datos.nombre;
  $apellidos.value = datos.apellidos;
  $email.value = datos.email;
}

function editar() {
  const dataRequest = {
    "nombre": $nombre.value,
    "apellidos": $apellidos.value,
    "email": $email.value
  };

  axios.put(url, dataRequest, { headers })
  .then(respuesta=>{
    window.location.assign("listado.html");
  })
  .catch(error=>{
    console.error("Error llamada: "+error);
  })
  
  
}
