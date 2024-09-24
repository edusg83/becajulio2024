const request = "http://192.168.1.162:3000/usuarios";
const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

let tabla = `
<table id="dataTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Nombre</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
`;

let finTabla = `
</tbody>
</table>
`;

let filas = ``;

axios.get(request,{headers})
    .then(response => {
        let data = response.data;
        data.forEach(user => {
            filas += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.nombre}</td>
                    <td>${user.apellidos}</td>
                    <td>${user.email}</td>
                </tr>
            `;
        })

        tabla += filas + finTabla;
        document.getElementById("tarjeta").innerHTML = tabla;
    })
    .catch(error => console.error('Error:', error));