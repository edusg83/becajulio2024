
const urlArt = 'http://192.168.1.129:8080/marketplace/articulos';
const urlUsu = 'http://192.168.1.129:8080/marketplace';
const urlPed = 'http://192.168.1.129:8080/marketplace/pedidos';

const img = 'img/Leche.jpg';

function obtenerArticulos() {
    axios.get(urlArt)
        .then(datos => {
            const articulos = datos.data;
            let articulosHTML = '';
            articulos.forEach(articulo => {
                articulosHTML += `
                    <div class="col-md-4 mt-2 mb-2">
                        <div class="card">
                            <img src="${img}" class="card-img-top" alt="${articulo.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${articulo.nombre}</h5>
                                <p class="card-text">Compra nuestro ${articulo.nombre}, es el mejor del mercado!</p>
                                <button type="button" class="btn" data-toggle="modal" data-target="#modalArticulo${articulo.id}">Ver Detalles</button>
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
                                    <img src="${img}" class="img-fluid mb-3" alt="${articulo.nombre}">
                                    <p>${articulo.nombre}, del campo a tu casa!</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn">Comprar</button>
                                    <button type="button" class="btn" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });
            document.getElementById('articulos-container').innerHTML = articulosHTML;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
obtenerArticulos();

function obtenerPedidos() {
    axios.get(urlPed)
        .then(datos => {
            const pedidos = datos.data;
            let pedidosHTML = '';
            pedidos.forEach(pedido => {
                pedidosHTML += `
                <tr>
                    <td>${pedido.id}</td>
                    <td>${pedido.nombre}</td>
                    <td>${pedido.fecha}</td>
                    <td>`;
        pedido.articulos.forEach(articulo => {
            pedidosHTML += `id = ${articulo.id} y cantidad = ${articulo.cantidad} | `;
        });
        pedidosHTML += `
                    </td>
                </tr>`;
            });
            document.getElementById('pedidos-tbody').innerHTML = pedidosHTML;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
obtenerPedidos();


function obtenerUsuario(id) {
    axios.get(`${urlUsu}/usuarios/${id}`)
        .then(datos => {
            const usuario = datos.data;
            document.getElementById('nombre').value = usuario.nombre;
            document.getElementById('email').value = usuario.email;
            document.getElementById('password').value = usuario.direccion;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function actualizarUsuario(e) {
    e.preventDefault();
    const usuarioActualizado = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        direccion: document.getElementById('password').value
    };

    axios.put(`${urlUsu}/usuarios`, usuarioActualizado)
        .then(datos => {
            alert('Usuario actualizado correctamente.');
        })
        .catch(error => {
            console.error("Error:", error);
            alert('Error en actualización de usuario.');
        });
}

obtenerUsuario(2);

document.getElementById('usuario-form').addEventListener('submit', actualizarUsuario);


