const headers = {
    'Content-Type': 'application/json',
    'Acess-Control-Allow-Origin': '*'
};

const urlUsers = "http://169.254.123.192:3000/usuarios";


axios.get(urlUsers, { headers })
    .then((respuesta) => {
        let info = respuesta.data;
        writeData(info);
    })

function writeData(info) {
    let table_content = '';

    info.forEach(element => {
        table_content += `<tr>
            <th scope="row"><a href="http://127.0.0.1:5500/Javascript/Api_Ejercicio/Ejercicio_final/edit.html?id=${element.id}">${element.id}</a></th>
            <td>${element.nombre}</td>
            <td>${element.apellidos}</td>
            <td>${element.email}</td>
            <td><button class="btn btn-danger" onclick="deleteEntry('${element.id}');">Delete</button></td>
            </tr>`;
    });

    document.getElementById("tarjet_body").innerHTML = table_content;
}

function deleteEntry(param) {
    axios.delete(`${urlUsers}/${param}`);
}