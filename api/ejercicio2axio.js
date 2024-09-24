const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
};

const urlUsers = 'http://192.168.0.15:3000/usuarios';

axios.get(urlUsers,{headers})
.then((respuestaUsuarios) =>{
    let users = respuestaUsuarios.data;

    users.forEach(user => {
        let fila = `
        <tr>
            <th>${user.id}</th>
            <th>${user.username}</th>
            <th>${user.nombre}</th>
            <th>${user.email}</th>
        </tr>
        `;

        document.getElementById("tbody").innerHTML += fila;
    });
})
