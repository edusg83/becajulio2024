const headers = {
    'Content-Type': 'application/json',
    'Authorization': '*'
};

const url = 'http://192.168.1.14:3000/usuarios';


let usuarios = [];
axios.get(url, { headers })
    .then(response => {

        
        response.data.forEach((item) => {
            usuarios.push({ nombre: item.nombre, apellidos: item.apellidos });
          
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

        let filas = '';
        console
        usuarios.forEach(item => {
            filas += `
                    <tr>
                        <td>${item.nombre}</td>
                        <td>${item.apellidos}</td>
                    </tr>`;
        });

        tabla += filas + finTabla;

        document.getElementById("tabla").innerHTML = tabla;
    })
    .catch(error => console.error('Error al obtener los Usuarios:', error));


const urlcliente = 'http://192.168.1.14:3000/cliente';

let usuario = {
    nombre: '',
    apellidos: '',
    direcciones: [
        { calle: '', cposta: '' },
        { calle: '', cposta: '' }
    ]
};

axios.get(url, { headers })
    .then(response => {

        console.log(response)
        response.data.forEach((item) => {
            let direccion = [];

            console.log(item.direcciones);
        
            usuario.push({ nombre: item.nombre, apellidos: item.apellidos });

            console.log(usuarios)
        });
        let card = `
        <div class="card">
            <h2>${usuario.nombre} ${usuario.apellidos}</h2>
            <h3>Direcciones:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Calle</th>
                        <th>Ciudad</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>`;
        usuario.direcciones.forEach(direccion => {
            card += `
                        <tr>
                            <td>${direccion.calle}</td>
                            <td>${direccion.ciudad}</td>
                            <td>${direccion.país}</td>
                        </tr>`;
        });

        card += `
            </tbody>
        </table>
    </div>`;

        document.getElementById('contenido').innerHTML = card;
    })
    .catch(error => console.error('Error al obtener los Usuarios:', error));






