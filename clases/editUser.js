const headers = {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*'
};

const urlClientes = 'http://192.168.1.54:3000/usuarios';
const urlParams = new URLSearchParams(window.location.search);


const userId = urlParams.get('id');


axios.get(`${urlClientes}/${userId}`, { headers })
    .then((respuestaUsuarios) => {

        let user = respuestaUsuarios.data;             
        let form;

        form =`<h1>Formulario de Actualización del Usuario</h1>

        <form id="formularioUsuario">
        <label for="id">ID:</label>
        <input type="text" id="id" name="id" value="${user.id}" required>

        <label for="usuario">Usuario:</label>
        <input type="text" id="apellidos" name="usuario" value="${user.apellidos}" required>

        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value="${user.nombre}" required>

        <label for="email">Email:</label>   
        <input type="email" id="email" name="email" value="${user.email}" required>

        <button type="submit" id="formularioUsuario">Enviar</button>
        </form> `;
       
    document.getElementById("resultado").innerHTML=form;
        

    document.getElementById("formularioUsuario").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const updatedUser = {
            apellidos: document.getElementById("apellidos").value,
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value
        };

        
        axios.put(`${urlClientes}/${userId}`, updatedUser, { headers })
            .then((response) => {
                console.log("Usuario actualizado exitosamente:", response.data);
                alert("Usuario actualizado correctamente.");
            })
            .catch((error) => {
                console.error("Error al actualizar el usuario:", error);
                alert("Ocurrió un error al actualizar el usuario.");
            });
    });
});








