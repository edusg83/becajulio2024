const request = "http://192.168.1.162:3000/clientes";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

let card = ``;
let direcciones = '';

axios.get(request, { headers })
    .then(response => {
        let data = response.data;
        // console.log(data[0]);
        dibujarCarta(data[0].arrayUsuarios[0]);
    })
    .catch(error => console.error('Error:', error));

function dibujarCarta(datos) {
    datos.direcciones.forEach(direccion => {
        direcciones += `
            <tr>
                <td>${direccion.cpostal}</td>
                <td>${direccion.direccion}</td>
            </tr>
        `;
    });

    card = `
        <div class="card-body">
            <h5 class="card-title">${datos.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${datos.apellidos}</h6>
            <table>
                <thead>
                    <tr>
                        <th>CP</th>
                        <th>Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    ${direcciones}
                </tbody>
            </table>
        </div>
    `;

    document.getElementById("tarjeta").innerHTML = card;
}
