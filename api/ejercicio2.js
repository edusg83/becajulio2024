const request = new Request('https://eoi.wiremockapi.cloud/clientes');

fetch(request)
.then(response => response.json())
.then(data => {
    console.log(data);
    data.UserListData.forEach(user => {
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