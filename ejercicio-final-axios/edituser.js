const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
const urlClients = 'http://192.168.0.15:3000/usuarios';

let params = new URLSearchParams(location.search);

let id = params.get("id");
console.log(id);

const findById = `${urlClients}/${id}`;

axios.get(findById, { headers })
    .then((respuestaUsuarios) => {
        let user = respuestaUsuarios.data;

        addForm(user);

    })


function addForm(user) {
    let form = `
        <form id="formulario" class=" w-100">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                 <input type="text" class="form-control" id="nombre" name="nombre" aria-describedby="emailHelp" value="${user.nombre}">
            </div>
            <div class="mb-3">
                <label for="apellidos" class="form-label">Apellidos</label>
                <input type="text" class="form-control" id="apellidos" name="apellidos" value="${user.apellidos}">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" value="${user.email}">
            </div>
            <div class="mt-5 text-center">
            <button id="guardar" type="submit" class="btn btn-primary">Guardar</button>
            <div>
        </form>
    `;

    document.getElementById("container-form").innerHTML = form;
};



document.addEventListener("submit", function(element){
    element.preventDefault();
    const form = document.getElementById("formulario")

    const formData = new FormData(form);

    const updatedUser = {
        "nombre": formData.get('nombre'),
        "apellidos": formData.get('apellidos'),
        "email": formData.get('email')
    }

    console.log(updatedUser);

    axios.put(findById, updatedUser,{headers})
        .then((respuesta) =>{
            console.log("Se actualizo el usuario!");
            window.location.href = 'http://127.0.0.1:5500/ejercicio-final-axios/axios.html';
        })
})