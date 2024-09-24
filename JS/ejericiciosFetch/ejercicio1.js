/** @format */

const request = new Request("http://192.168.1.193:3000/clientes");
const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
  .then((response) => {
    console.log(response.json());
  })
  .then((data) => {
    console.log(data);
  });
