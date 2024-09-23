// Crear un nuevo elemento <p>
let nuevoParrafo = document.createElement('p');

// Añadir el texto al elemento <p>
nuevoParrafo.textContent = "Este texto está añadido dinámicamente";

// Añadir el nuevo elemento <p> al body del documento
document.body.appendChild(nuevoParrafo);

// Mostrar en consola el párrafo creado
console.log('Párrafo creado dinámicamente:', nuevoParrafo);
