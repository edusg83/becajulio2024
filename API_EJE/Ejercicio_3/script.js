
const request = new Request('http://192.168.1.129:3000/clientes');

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

let carta = document.querySelector(".card");

fetch(request)
.then(response => response.json())
.then(data => {
    console.log(data);
         data.arrayUsuarios.forEach(usuario => {
            console.log(`${usuario.nombre} ${usuario.apellidos}`);
            usuario.direcciones.forEach(direccion => {
                console.log(`${direccion.direccion} ${direccion.cpostal}`);
            });
        });
})






