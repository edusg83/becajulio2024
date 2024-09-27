const headers = {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*'
};

const urlClientes = ('http://192.168.1.54:3000/usuarios');

axios.get(urlClientes, { headers })
    .then((respuestaUsuarios) => {

        let users = respuestaUsuarios.data; 
                     
        let tabla= `<table id = "dataTable">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Email</th>
            </tr>

        </thead>

        <tbody>`;

        let finTabla = `</tbody></table>`;

        let filas = ``;

        users.forEach(item => {
            filas+=`

        <tr>
            <td><a href="editUser.html?id=${item.id}">${item.id}</a></td>
            <td>${item.nombre}</td>
            <td>${item.apellidos}</td>
            <td>${item.email}</td>
            <td><button onclick="eliminar('${item.id}')">Eliminar</button></td>
        </tr>`;
        });

        tabla += filas+ finTabla;

        document.getElementById("resultado").innerHTML=tabla;
});

function eliminar(id) {
        
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
        axios.delete(`${urlClientes}/${id}`, { headers })
            .then(response => {
                console.log("Usuario eliminado:", response);
                location.reload(); 
            })
            .catch(error => {
                console.error("Error al eliminar el usuario:", error);
                alert("Ocurrió un error al intentar eliminar el usuario.");
            });
    }

}

