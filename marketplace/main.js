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

const inicioSesion = document.getElementById("buttonIniciarSesion");
const modal = new bootstrap.Modal(document.getElementById('sesionModal'));
const sesionContainer = document.getElementById("sesion-container");

inicioSesion.addEventListener("click", function () {

    const usuario = {
        "username": document.getElementById("name").value,
        "password": document.getElementById("password").value
    }

    const url = "https://apilater.azurewebsites.net/api/token";

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    axios.post(url, usuario, { headers })
        .then(respuesta => {
            const token = respuesta.data;
            sessionStorage.setItem("token", token); //Almacenar token en Session storage

            const base64Url = token.split('.')[1]; // Esto es el payload (segunda parte del JWT)
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); //Reemplazo contenido para base64

            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) { //UTF8 - decodificación

                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            modal.hide();
            
            const objectJWT = JSON.parse(jsonPayload);
            console.log(objectJWT.unique_name);
            window.location.href += objectJWT.unique_name;
            //location.reload();

            sesionContainer.innerHTML = `
                        <p class="mb-0">
                            <strong>Usuario:</strong>  ${objectJWT.unique_name}
                        </p>
            `;

            document.getElementById("pagina-perfil").setAttribute("href","./perfil.html"); 

        })


    let tokenRecuperado = sessionStorage.getItem("token");
    console.log(tokenRecuperado);
    console.log(sessionStorage);

}, false)

