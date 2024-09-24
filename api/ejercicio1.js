const request = new Request('https://eoi.wiremockapi.cloud/clientes');

fetch(request)
.then(response => response.json())
.then(data => {
    console.log(data);
})