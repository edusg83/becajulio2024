const request = new Request ('https://eoi.wiremockapi.cloud/clientes')

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
.then(response => response.json())
.then(data=> { console.log(data)});


