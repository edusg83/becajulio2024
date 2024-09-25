const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
const urlClients = 'http://192.168.0.15:3000/usuarios';


axios.get(urlClients, { headers })
    .then((respuestaUsuarios) => {
        let users = respuestaUsuarios.data;
        console.log(users);

        for (let i = 0; i < users.length; i++) {
            console.log(users[i]);
            pintarFila(users[i]);
        }

    })

function pintarFila(user) {
    let fila = `
        <tr>
            <td><a href="http://127.0.0.1:5500/ejercicio-final-axios/edituser.html?id=${user.id}">${user.id}</a></td>
            <td>${user.nombre}</td>
            <td>${user.apellidos}</td>
            <td>${user.email}</td>
            <td style="text-align: center;"><button onclick="eliminar('${user.id}')">Eliminar</button></td>
        </tr>
    `;

    document.getElementById("tbody").innerHTML += fila;
}


function eliminar(id) {
    let deleteUsuario = `http://192.168.0.15:3000/usuarios/${id}`;
    console.log(deleteUsuario, {headers});
    axios.delete(deleteUsuario)
        .then((respuestaUsuarios) => {
            window.location.reload();
    })
}
