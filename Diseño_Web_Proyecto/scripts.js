const login_modal = new bootstrap.Modal(document.getElementById("login_modal"));

const signup_modal = new bootstrap.Modal(document.getElementById("signup_modal"));

const product_modal = new bootstrap.Modal(document.getElementById("product_modal"));

const headers = {
    'Content-Type': 'application/json',
    'Acess-Control-Allow-Origin': '*'
};

const url_articles = "http://localhost:8080/marketplace/articulos";

let articles;

let product;

function use_login_modal(param) {
    param == 1 ? login_modal.show() : login_modal.hide();
}

function use_signup_modal(param) {
    param == 1 ? signup_modal.show() : signup_modal.hide();
}

//TODO PENSAR EN LAS IMAGENES
function use_product_modal(product, image) {
    document.getElementById("product_title").innerHTML = product.nombre;
    document.getElementById("product_image").src = image;
    document.getElementById("product_price").innerHTML = product.precio;
    document.getElementById("product_amount").value = 1;
    product_modal.show();

    document.getElementById("product_amount").addEventListener('change', function () {
        if (document.getElementById("product_amount").value > product.stock) {
            document.getElementById("product_purchase").disabled = true;
        } else {
            document.getElementById("product_purchase").disabled = false;
        }
    });
}

function get_product_list() {
    axios.get(url_articles, { headers })
        .then(response => {
            articles = response.data;
            set_product_list(articles);
        })
}

//TODO AÑADIR DESCRIPCION A BASE DE DATOS
function get_product(id, image) {
    axios.get(`${url_articles}/${id}`)
        .then(response => {
            let info = response.data;

            product = {
                id: info.idArticulo,
                nombre: info.nombreArticulo,
                precio: info.precio,
                stock: info.stock
            };

            use_product_modal(product, image);
        })
}

function set_product_list(info) {

    let product_container = document.getElementById("product_container");

    let products = '';

    let image = '';

    info.forEach(product => {

        image = "https://picsum.photos/200/300?random=" + Math.floor(Math.random() * 100);

        products += `<article class="col-2">
          <div class="card" value="${product.idArticulo}">
            <img src="${image}" alt="">
            <div class="card-body">
              <h5>${product.nombreArticulo}</h5>
              <p class="text-truncate mb-0">Breve descripcion</p>
              <p class="text-warning mb-0">${product.precio}</p>
            </div>
            <div class="card-footer row gap-3 justify-content-center">
              <button class="btn btn-success col-5 btn-sm btn-sm">Comprar</button>
              <button class="btn btn-primary col-5 btn-sm btn-sm" onclick="get_product(${product.idArticulo},'${image}');">Ver mas</button>
            </div>
          </div>
        </article>`
    });

    product_container.innerHTML = products;
}

function search_product() {

    let product_name = document.getElementById("search").value;

    let product_container = document.getElementById("product_container");

    axios.get(`${url_articles}/${product_name}/nombre`)
        .then(response => {
            articles = response.data;
            product_container.innerHTML = '';
            set_product_list(articles);
            return false;
        })
}