const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };

const url = 'http://192.168.1.129:3000/clientes';

let carta = document.querySelector(".card");
let table = document.getElementById("lista");

axios.get(url, { headers })
    .then((datos) => {
        const clientes = datos.data[0].arrayUsuarios;
        clientes.forEach(usuario => {
            console.log(`${usuario.nombre} ${usuario.apellidos}`);
            table.innerHTML += `<tr><td> ${usuario.nombre} ${usuario.apellidos} </td></tr>`;
            usuario.direcciones.forEach(direccion => {
                console.log(`${direccion.direccion} ${direccion.cpostal}`);
                table.innerHTML += `<tr><td> ${direccion.direccion} ${direccion.cpostal} </td></tr>`; 
            });
        });
    })
    .catch(error => {
        console.error('Error al realizar la petición GET:', error);
    });
