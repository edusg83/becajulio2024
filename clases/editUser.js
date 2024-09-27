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
        
        document.getElementById("id").value=user.id;
        document.getElementById("apellidos").value=user.apellidos;
        document.getElementById("nombre").value=user.nombre;        
        document.getElementById("email").value=user.email;
        

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
                window.location.href = "ejercicioFinalAxios.html";
            })
            .catch((error) => {
                console.error("Error al actualizar el usuario:", error);
                alert("Ocurrió un error al actualizar el usuario.");
            });
           
    });
    
});








