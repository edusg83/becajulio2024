
const headers = {
    'Content-Type': 'application/json',
    'Authorization': '*',
    'Access-Control-Allow-Origin': ' *'
};

const urlAside = 'http://localhost:8080/marketplace/articulos';
let urlBusqueda = ""

window.onload = function(){
    generarAside(urlAside);
}

function busqueda(busqueda, categoria) {
    switch (categoria) {
        case "nombre":
            urlBusqueda = 'http://localhost:8080/marketplace/articulos/' + busqueda + '/buscarNombre/'

            break;
        case "categoria":
            urlBusqueda = 'http://localhost:8080/marketplace/articulos/' + busqueda + '/buscarCategoria/'

            break;
        case "coleccion":
            urlBusqueda = 'http://localhost:8080/marketplace/articulos/' + busqueda + '/buscarColeccion/'

            break;
        default:

            break;
    }

    axios.get(urlBusqueda, { headers })
        .then(response => {
            let articulo = ``;
            response.data.forEach((item) => {
                let nombreFoto = item.nombre.replace(/ /g, '_');
                articulo += `
            <div class="card">
                <img id="fotoArticulo" src="img/${nombreFoto}.png" alt="">
                <p id="nombreArticulo">${item.nombre}</p>
                <span>  
                    <p>Precio :</p>
                    <p id="precioProducto">${item.precio}€</p>
                </span>
                <span>
                    <p>Categoria :</p>
                    <p id="categoriaArticulo">${item.categoria}</p>
                </span>
                <span>  
                    <p>Coleccion :</p>
                    <p id="coleccionArticulo">${item.coleccion}</p>
                </span>
            </div>`;

            });
            document.getElementById("display_articulos_id").innerHTML = "<button onclick='cerrar()'>cerrar</button>"
            document.getElementById("section_articulos_id").classList = "section_articulos hidden"
            document.getElementById("display_articulos_id").classList = "display_articulos"
            document.getElementById("display_articulos_id").innerHTML += articulo;
        })
        .catch(error => console.error('Error al obtener los Articulos:', error));
}

function generarAside(url) {

    axios.get(url, { headers })
        .then(response => {

            let articulo = ``;
            response.data.forEach((item) => {

                const num1 = Math.floor(Math.random() * 3) + 1;
                const num2 = Math.floor(Math.random() * 3) + 1;

                if (num1 == num2) {
                    let nombreFoto = item.nombre.replace(/ /g, '_');
                    articulo += `
            <div class="card">
                <img id="fotoArticulo" src="img/${nombreFoto}.png" alt="">
                <p id="nombreArticulo">${item.nombre}</p>
                <span>  
                    <p>Precio :</p>
                    <p id="precioProducto">${item.precio}€</p>
                </span>
                <span>
                    <p>Categoria :</p>
                    <p id="categoriaArticulo">${item.categoria}</p>
                </span>
                <span>  
                    <p>Coleccion :</p>
                    <p id="coleccionArticulo">${item.coleccion}</p>
                </span>
            </div>`;
                }
            });

            
            document.getElementById("aside_article").innerHTML = articulo;
        })
        .catch(error => console.error('Error al obtener los Articulos:', error));
}
function cerrar(){
    document.getElementById("section_articulos_id").classList = "section_articulos"
     document.getElementById("display_articulos_id").classList = "display_articulos hidden"
     document.getElementById("display_articulos_id").innerHTML = "<button onclick='cerrar()'>cerrar</button>"
}