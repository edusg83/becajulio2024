const headers = {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*'
};

const urlClientes = 'http://192.168.1.54:3000/usuarios';


axios.get(urlClientes, { headers })
    .then((respuestaUsuarios) => {

        let users = respuestaUsuarios.data; 
                     
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

        users.forEach(item => {
            filas+=`

        <tr>
            <td>${item.id}</td>
            <td>${item.nombre}</td>
            <td>${item.apellidos}</td>
            <td>${item.email}</td>
        </tr>`;
        });

        tabla += filas+ finTabla;

        document.getElementById("resultado").innerHTML=tabla;
        
});




