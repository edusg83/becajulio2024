const container = document.getElementById('products'); 
console.log(container); 
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/marketplace/',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Allow' : 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json; charset=UTF-8'
}; 

console.log(headers); 
const url = 'http://localhost:8080/marketplace/articulos/'; 
const productImages = ['./images/product1.jpg', './images/product2.jpg', './images/product3.jpg', './images/product4.jpg', './images/product5.jpg', './images/product6.jpg']; 
axios.get(url, {headers})
    .then(response => {
        let data = response.data;
        data.forEach(product => {
           let productCard =  createProductCard(product); 
            container.innerHTML += productCard; 
        });
        console.log(data); 
       
    }); 
  

    function createProductCard(product) {
        return `
            <div class="col mb-5" >
           <div class="card h-100">
          <img class="card-img-top" src="./images/product${product.id}.jpg" alt="${product.nombre}" id="productImage"/>
          
          <!-- Product details -->
          <div class="card-body p-4">
              <div class="text-center">
                  <!-- Product name -->
                  <h5 class="fw-bolder" id="productName">${product.nombre}</h5>
                  
                  <!-- Product reviews -->
                  <div class="d-flex justify-content-center small text-warning mb-2">
                      ${[...Array(5)].map((_, i) => `<div class="${i < product.rating ? 'bi-star-fill' : 'bi-star'}"></div>`).join('')}
                  </div>
                  
                  <!-- Product price -->
                  <span class="" id="productPrice">$${product.precio.toFixed(2)}</span>
              </div>
          </div>
          
          <!-- Product actions -->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center p-1">
                  <button type="button" class="btn btn-info m-1" data-bs-toggle="modal" data-bs-target="#productModal" id="productDetail" onclick="seeMore(${product.id})">
                      Ver detalle
                  </button>
                  <button class="btn btn-shop" onClick="addToCart(${product.id})">
                      <i class="bi-cart-fill me-1"></i> Añadir al carrito
                  </button>
                  <div class="mt-2">
                      <small>Cantidad disponible: ${product.cantidad}</small>
                  </div>
              </div>
          </div>
           </div>
            </div>
        `;
      } 

function createProductModal(product){
    return `
    <div class="modal" tabindex="-1" id="productModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${product.nombre}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <img src="./images/product${product.id}.jpg" class="img-fluid" alt="${product.nombre}">
              </div>
              <div class="col">
                <h3>Nombre del producto: ${product.nombre}</h3>
                <h4>Precio: $${product.precio.toFixed(2)}</h4>
                <p>Cantidad disponible: ${product.cantidad}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function seeMore(element){
    createProductCard(element); 
}
                
               