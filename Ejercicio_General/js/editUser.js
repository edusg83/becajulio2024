const params = new URLSearchParams(location.search);
const idUsuario = params.get('id');

const requestGet = "http://192.168.1.162:3000/usuarios?id=" + idUsuario;
const requestPut = "http://192.168.1.162:3000/usuarios/" + idUsuario;

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

const form = document.getElementById("editarusuario");

axios.get(requestGet, { headers })
    .then(response => {
        let data = response.data;
        escribirDatos(data[0]);
    })
    .catch(error => console.error('Error:', error));

function escribirDatos(usuario) {
    const idInput = document.getElementById("id");
    const nombreInput = document.getElementById("nombre");
    const apellidosInput = document.getElementById("apellidos");
    const emailInput = document.getElementById("email");

    idInput.value = usuario.id
    nombreInput.value = usuario.nombre;
    apellidosInput.value = usuario.apellidos;
    emailInput.value = usuario.email;
};

form.addEventListener('submit', function (element) {
    element.preventDefault();
    const formData = new FormData(form);

    const dataRequest = {
        "nombre": formData.get("nombre"),
        "apellidos": formData.get("apellidos"),
        "email": formData.get("email")
    }

    if (dataRequest.nombre === "" || dataRequest.apellidos === "" || dataRequest.email === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        axios.put(requestPut, dataRequest, { headers })
            .then(() => {
                window.location.assign("listadoUsuarios.html");
            })
            .catch(error => {
                console.error('Error al actualizar el usuario:', error);
            });
    }
});