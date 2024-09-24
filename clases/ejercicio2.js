const request = new Request ('https://eoi.wiremockapi.cloud/clientes')

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
.then(response => response.json())
.then(data=> {

let tabla= `<table id = "dataTable">
<thead>
    <tr>
        <th>Id</th>
        <th>Usuario</th>
        <th>Nombre</th>
        <th>Email</th>
    </tr>

</thead>

<tbody>`;

let finTabla = `</tbody></table>`;

let filas = ``;

data.UserListData.forEach(item => {
    filas+=`

<tr>
    <td>${item.id}</td>
    <td>${item.username}</td>
    <td>${item.nombre}</td>
    <td>${item.email}</td>
</tr>`;
});

tabla += filas+ finTabla;

document.getElementById("resultado").innerHTML=tabla;

});


