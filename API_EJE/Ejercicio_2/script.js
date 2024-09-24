
const request = new Request('https://eoi.wiremockapi.cloud/clientes');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

let table = document.getElementById("lista");

fetch(request)
.then(response => response.json())
.then(data => {
    data.UserListData.forEach(i => {
        console.log(i);
        table.innerHTML += "<tr><td>"+ i.id + i.username + i.nombre + i.email +"</td></tr>";
    })
})


