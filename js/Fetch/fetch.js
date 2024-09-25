const request = new Request('https://pokeapi.co/api/v2/pokemon?limit=10')

const URL = request.url;
const method = request.method;
const credentials = request.credentials;
let pokemons = [];

fetch(request)
    .then(response => response.json())
    .then(data => {
        pokemons = [];
        data.results.forEach((item, index) => {
            index += 1;
            pokemons.push({ id: index, nombre: item.name });
        });
        let tabla = `<table id="dataTable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>`;

        let finTabla = `</tbody></table>`;

        let filas = '';
        pokemons.forEach(item => {
            filas += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.nombre}</td>
                    </tr>`;
        });

        tabla += filas + finTabla;

        document.getElementById("tabla").innerHTML = tabla;
    })
    .catch(error => console.error('Error al obtener los Pokémon:', error));


const usuario = {
    nombre: 'Juan',
    apellidos: 'Gomez García',
    direcciones: [
        { calle: 'Calle Purisima', ciudad: 'Madrid', país: 'España' },
        { calle: 'Calle Padre Palau', ciudad: 'Barcelona', país: 'España' }
    ]
};

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


