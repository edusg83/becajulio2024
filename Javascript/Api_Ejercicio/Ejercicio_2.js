const request = new Request("http://169.254.123.192:3000/clientes");

fetch(request)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        let tabla = `<table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>`

        let finTabla = `</tbody>
        </table>`

        let filas = '';

        data.arrayUsuarios.forEach(user => {
            filas += `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.nombre}</td>
                <td>${user.email}</td>
            </tr>`

        });

        tabla += filas + finTabla;
        document.getElementById("resultado").innerHTML = tabla;
    })
