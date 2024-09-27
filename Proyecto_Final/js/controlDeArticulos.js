const url = "http://localhost:8080/articulo";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

document.addEventListener('DOMContentLoaded', function () {
    axios.get(url, { headers })
        .then(response => {
            let articulos = response.data;
            console.log(articulos);
            generarTarjetas(articulos);
        })
        .catch(error => console.error('Error:', error));
});

// function mostrarArticulos(articulos) {
//     const tarjetas = document.querySelectorAll(".card");
//     const maxCaracteres = 130;
//     const rutaImg = "img/";

//     tarjetas.forEach((tarjeta, index) => {
//         if (index < articulos.length) {
//             let articulo = articulos[index];
//             let tituloTarjeta = tarjeta.querySelector(".card-title");
//             let precioTarjeta = tarjeta.querySelector(".card-price");
//             let descripcionTarjeta = tarjeta.querySelector(".card-text");
//             let imagenTarjeta = tarjeta.querySelector(".card-img");

//             tituloTarjeta.textContent = articulo.nombre;
//             precioTarjeta.textContent = articulo.precio.toFixed(2) + "€/Kg";
//             if (articulo.descripcion.length > maxCaracteres) {
//                 descripcionTarjeta.textContent = articulo.descripcion.substring(0, maxCaracteres) + '...';
//             } else {
//                 descripcionTarjeta.textContent = articulo.descripcion;
//             }
//             if (articulo.imagen == null) {
//                 imagenTarjeta.src = "img/cafe.png";
//             } else {
//                 imagenTarjeta.src = rutaImg + articulo.imagen;
//             }
//         }
//     });
// }

// GENERAR TARJETAS-------------------
function generarTarjetas(articulos) {
    let contenedorTarjetas = document.querySelector(".contenedor-tarjetas");
    contenedorTarjetas.innerHTML = "";

    const rutaImg = "img/";
    const maxCaracteres = 130;

    articulos.forEach(articulo => {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "border-0", "p-3", "rounded");

        let descripcion = articulo.descripcion.length > maxCaracteres
            ? articulo.descripcion.substring(0, maxCaracteres) + '...'
            : articulo.descripcion;

        tarjeta.innerHTML = `
            <div class="card-header">
                <img src="${rutaImg + articulo.imagen}" class="card-img" alt="${articulo.nombre}">
            </div>
            <div class="card-body">
                <h4 class="card-title">${articulo.nombre}</h4>
                <p class="card-text">${descripcion}</p>
                <p class="card-price">${articulo.precio.toFixed(2)} €/Kg</p>
                <button class="btn btn-primary">Añadir al carrito</button>
            </div>
        `;
        contenedorTarjetas.appendChild(tarjeta);
    });
}

