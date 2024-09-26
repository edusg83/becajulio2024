const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
const urlClients = 'http://localhost:8080/marketplace/articulos';

axios.get(urlClients, { headers })
    .then((respuesProductos) => {
        let products = respuesProductos.data;
        console.log(products);

        for (let i = 0; i < products.length; i++) {
            console.log(products[i]);
            pintarProduct(products[i])
        }

    })


function pintarProduct(product){
    let newProduct = `
        <!--PRODUCTO-->
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${product.nombre}</h5>
                                <!-- Product price-->
                                ${product.precio}€, Stock: ${product.stock}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" data-bs-toggle="modal" data-bs-target="#detailsModal-${product.id}">Ver detalles</a>
</div>
                            <br>
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                        </div>
                    </div>
                </div> 

            <!-- Modal -->
    <div class="modal fade" id="detailsModal-${product.id}" tabindex="-1" aria-labelledby="detailsModalLabel-${product.id}" aria-hidden="true" style="background-color:rgba(128, 128, 128, 0.8);">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="detailsModalLabel-${product.id}">${product.nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <!-- Aquí puedes agregar más detalles sobre el producto -->
                    <p>Precio: ${product.precio}€</p>
                    <p>Stock: ${product.stock}</p>
                    <p>Descripción:Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>        
    `

    document.getElementById("product-list").innerHTML += newProduct;
}