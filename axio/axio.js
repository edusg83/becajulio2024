const headers = {
    'Content-Type': 'application/json',
    'Authorization': '*'
};

const url = 'http://192.168.1.121:3000/usuarios';

axios.get(url, {headers})
.then((respuestaUsuarios) => {
    let users = respuestaUsuarios.data;

    users.forEach((user) => {
        let fila = `
        <tr>
        <th>${user.id}</th>
        <td>${user.nombre}</td>
        <td>${user.apellidos}</td>
        <td>${user.email}</td>
        </tr>`;

        document.getElementById('tabla').innerHTML += fila;
    });
})

