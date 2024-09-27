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
            printProduct(products[i])
        }

    })


function printProduct(product) {
    let newProduct = `
        <!--PRODUCTO-->
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="./images/product-images/${product.nombre}.jpg" alt="..." />
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
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" data-bs-toggle="modal" data-bs-target="#detailsModal" onclick="printModal(${product.id})">Ver detalles</a>
                        </div>
                            <br>
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                        </div>
                    </div>
                </div>   
    `

    document.getElementById("product-list").innerHTML += newProduct;
}

function printModal(id) {

    axios.get(urlClients + '/' + id, { headers })
        .then((respuesProducto) => {
            let product = respuesProducto.data;
            console.log(product);

            document.getElementById("detailsModalLabel").innerHTML = product.nombre;
            document.getElementById("price").innerHTML = "Precio: " + product.precio + "€";
            document.getElementById("stock").innerHTML = "Unidades Restantes: " + product.stock;
            document.getElementById("image-modal").setAttribute("src", `./images/product-images/${product.nombre}.jpg`);

        })

}