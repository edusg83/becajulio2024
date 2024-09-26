/** @format */
const url = "http://192.168.1.193:3000/articulo";

let modal = new bootstrap.Modal(document.getElementById("modal"));

const $productos = document.getElementById("productos");
const $cantidadModal = document.getElementById("cantidad");
const $nombreProductoModal = document.getElementById("nombre_producto");
const $descripcionProductoModal = document.getElementById("descripcion");

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

axios.get(url, { headers }).then((respuesta) => {
  mostrarProductos(respuesta.data);
});

function mostrarProductos(datos) {
  datos.forEach((producto) => {
    let carta = `
      <div class="col-xxl-2  col-xl-3 col-lg-3 col-md-4 col-sm-6">
        <div class="card" style="width: 100%;">
          <img onclick="mostrarDetalles(${producto.id})" src="../JS/parejas/img/mistborn/logo.png" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title fw-bold">${producto.nombre}</h5>
            <svg class="position-absolute bottom-0 mb-3" onclick="addCarrito(id, 1)" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
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
  modal.show();

  $nombreProductoModal.innerHTML = datos.nombre;
  $cantidadModal.max = datos.stock;
  $descripcionProductoModal.innerHTML = datos.descripcion;
}

$cantidadModal.addEventListener("blur", () => {
  if ($cantidadModal.value > $cantidadModal.max) {
    $cantidadModal.value = $cantidadModal.max;
  }
});
