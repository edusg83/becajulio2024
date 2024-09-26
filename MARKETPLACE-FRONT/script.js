
const url = 'http://192.168.1.129:8080/marketplace/articulos';

function obtenerArticulos() {
    axios.get(url)
        .then(respuesta => {
            const articulos = respuesta.data;
            let articulosHTML = '';
            
            articulos.forEach(articulo => {
                articulosHTML += `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${articulo.imagen}" class="card-img-top" alt="${articulo.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${articulo.nombre}</h5>
                                <p class="card-text">${articulo.descripcion}</p>
                                <p class="card-text"><strong>Precio: $${articulo.precio}</strong></p>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalArticulo${articulo.id}">Ver Detalles</button>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="modalArticulo${articulo.id}" tabindex="-1" role="dialog" aria-labelledby="modalArticulo${articulo.id}Label" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalArticulo${articulo.id}Label">${articulo.nombre}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img src="${articulo.imagen}" class="img-fluid mb-3" alt="${articulo.nombre}">
                                    <p>${articulo.descripcion}</p>
                                    <h5>Precio: $${articulo.precio}</h5>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Comprar</button>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });

            document.getElementById('articulos-container').innerHTML = articulosHTML;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

obtenerArticulos();
