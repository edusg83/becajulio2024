/** @format */
const url = "http://192.168.1.193:3000/articulo";

let modalCompra = new bootstrap.Modal(document.getElementById("modal_compra"));
let modalCarrito = new bootstrap.Modal(document.getElementById("modal_carrito"));

let productos;
let total = 0;

const $productos = document.getElementById("productos");
const $cantidadModal = document.getElementById("cantidad");
const $nombreProductoModal = document.getElementById("nombre_producto");
const $descripcionProductoModal = document.getElementById("descripcion");
const $btnAddCarrito = document.getElementById("btn_add_carrito");
const $productosEnCarro = document.getElementById("productos_en_carrito");
const $productosCarrito = document.getElementById("productos_carrito");

const carrito = new Array();

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

axios.get(url, { headers }).then((respuesta) => {
  mostrarProductos(respuesta.data);
});

function mostrarProductos(datos) {
  productos = datos;
  datos.forEach((producto) => {
    let carta = `
      <div class="col-xxl-2  col-xl-3 col-lg-3 col-md-4 col-sm-6">
        <div class="card" style="width: 100%;">
          <img onclick="mostrarDetalles(${producto.id})" src="../JS/parejas/img/mistborn/logo.png" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title fw-bold">${producto.nombre}</h5>
            <svg class="position-absolute bottom-0 mb-3" onclick="addCarrito(${producto.id}, 1)" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
              <g fill="none" stroke="black" stroke-width="4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 7h6l7 17h17.5L43 10m-22 2h12m-6-6v12m-9 6l-4 6h26" />
                <circle cx="19" cy="39" r="3" />
                <circle cx="35" cy="39" r="3" />
              </g>
            </svg>
            <p class="card-text text-end fs-5 text-primary fw-bold">${producto.precio.toFixed(2)}€</p>
          </div>
        </div>
      </div>`;
    $productos.innerHTML += carta;
  });
}

function mostrarDetalles(id) {
  axios.get(url + "/" + id, { headers }).then((respuesta) => {
    detallesProducto(respuesta.data);
  });
}

function detallesProducto(datos) {
  modalCompra.show();

  // TODO: modificar imagen de forma dinamica
  $btnAddCarrito.setAttribute("onclick", `addCarrito(${datos.id}, -1)`);
  $nombreProductoModal.innerHTML = datos.nombre;
  $cantidadModal.max = datos.stock;
  $descripcionProductoModal.innerHTML = datos.descripcion;
}

function addCarrito(id, cantidad) {
  if (cantidad === -1) {
    cantidad = getNumericValue($cantidadModal);
    modalCompra.hide();
  }

  let pedido = carrito.find((e) => {
    return e.idArticulo === id;
  });

  if (pedido === undefined) {
    pedido = {
      idArticulo: id,
      cantdadComprada: cantidad
    };

    carrito.push(pedido);
  } else {
    pedido.cantdadComprada += cantidad;
  }

  $productosEnCarro.innerHTML = carrito.length;

  $productosEnCarro.hidden = carrito.length === 0;
  console.log(carrito);
}

function getNumericValue(element) {
  return Number(element.value);
}

function mostrarCarrito() {
  rellenarModalCarrito();

  modalCarrito.show();
}

function rellenarModalCarrito() {
  total = 0;
  $productosCarrito.innerHTML = "";
  carrito.forEach((e, i) => {
    console.log(getProductoById(e.idArticulo));
    addProductoCarrito(getProductoById(e.idArticulo), e.cantdadComprada);

    if (i === carrito.length - 1) {
      $productosCarrito.innerHTML += `
      <div class="row text-center align-items-center justify-content-end">
        <span class="col-12 fw-bold">Total: <span class="text-primary">${total.toFixed(2)}</span>€</span>
      </div>
      `;
    }
  });
}

function addProductoCarrito(producto, cantidad) {
  let linea = `
    <div class="row text-center align-items-center">
      <img src="../JS/parejas/img/mistborn/logo.png" class="col-2">
      <span class="col-2 fw-bold">${producto.nombre}</span>
      <span class="col-2 text-primary fw-bold">${producto.precio}€</span>
      <span class="col-2 text-secondary">${cantidad} unidades</span>
      <span class="col-2 text-primary fw-bold">${producto.precio * cantidad}€</span>
      <span class="col-2">
        <svg onclick"borrarProductoCarro(${producto.id})" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
          <circle cx="10" cy="28" r="2" fill="red" />
          <circle cx="24" cy="28" r="2" fill="red" />
          <path fill="red" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z" />
          <path fill="red" d="M18.41 8L22 4.41L20.59 3L17 6.59L13.41 3L12 4.41L15.59 8L12 11.59L13.41 13L17 9.41L20.59 13L22 11.59z" />
        </svg>
      </span>
    </div>
    <div class="row m-3">
      <hr class="col-12">
    </div>
  `;

  total += producto.precio * cantidad;

  $productosCarrito.innerHTML += linea;
}

function getProductoById(id) {
  console.log(productos);
  console.log(id);
  return productos.find((e) => e.id == id);
}

$cantidadModal.addEventListener("blur", () => {
  if (getNumericValue($cantidadModal) > $cantidadModal.max) {
    $cantidadModal.value = $cantidadModal.max;
  }
});
