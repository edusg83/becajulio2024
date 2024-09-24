let request = new Request('https://eoi.wiremockapi.cloud/clientes', { credentials: 'include' });

/*let url = request.url;
let method = request.method;


fetch(request)
    .then(response => response.json()) 
    .then(data => {
        console.log(data); 
    })
    .catch(error => console.log(error));  

console.log(request);
*/

let tableBody = document.querySelector('#userTable tbody');

fetch(request)
            .then(response => response.json())
            .then(data => {
                let columnasTabla = '';

                data.UserListData.forEach(function(user) {
                    columnasTabla += '<tr>';
                    columnasTabla += '<td>' + user.id + '</td>';
                    columnasTabla += '<td>' + user.username + '</td>';
                    columnasTabla += '<td>' + user.nombre + '</td>';
                    columnasTabla += '<td>' + user.email + '</td>';
                    columnasTabla += '</tr>';
                });
                

                tableBody.innerHTML = columnasTabla;  
            })