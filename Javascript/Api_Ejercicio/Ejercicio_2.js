const request = "https://eoi.wiremockapi.cloud/clientes";

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
    .then(response => response.json())
    .then(data => {
        User
    })
