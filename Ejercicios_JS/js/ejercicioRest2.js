const request = new Request("https://eoi.wiremockapi.cloud/clientes");

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

fetch(request)
    .then(response => response.json())
    .then(data => {
        data.UserListData.forEach(user => {
            filas+=`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.nombre}</td>
                    <td>${user.email}</td>
                </tr>
            `;
        })

        tabla += filas + finTabla;
        document.getElementById("resultados").innerHTML = tabla;
    })
    .catch(error => console.error('Error:', error));

