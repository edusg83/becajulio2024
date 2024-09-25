const headers = {
    'Content-Type': 'application/json',
    'Authorization': '*'
};

const url = 'http://localhost:3000/usuarios';


let usuarios = [];
axios.get(url, { headers })
    .then(response => {

        let filas = ``;
        response.data.forEach((item) => {
            filas += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.apellidos}</td>
            </tr>`;
          
        });
        let tabla = `<table id="dataTable">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                        </tr>
                    </thead>
                    <tbody>`;

        let finTabla = `</tbody></table>`;

       
        
       

        tabla += filas + finTabla;

        document.getElementById("tabla").innerHTML = tabla;
    })
    .catch(error => console.error('Error al obtener los Usuarios:', error));


const urlcliente = 'http://localhost:3000/clientes';


axios.get(urlcliente, { headers })
    .then(response => {

        let cliente = response.data[0].arrayUsuarios[0];
       
            let card = `
            <div class="card">
                <h2>${cliente.nombre} ${cliente.apellidos}</h2>
                <h3>Direcciones:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Dirección</th>
                            <th>C. Postal</th>
                        </tr>
                    </thead>
                    <tbody>`;
            cliente.direcciones.forEach(direccion => {
                card += `
                            <tr>
                                <td>${direccion.direccion}</td>
                                <td>${direccion.cpostal}</td>
                            </tr>`;
            });
    
            card += `
                </tbody>
            </table>
        </div>`;


        document.getElementById('contenido').innerHTML = card;
    })
    .catch(error => console.error('Error al obtener los Usuarios:', error));






