// Crear el párrafo dinámicamente
let nuevoParrafo = document.createElement('p');
nuevoParrafo.id = 'p1';
nuevoParrafo.textContent = 'Párrafo1';

// Crear el botón dinámicamente
let boton = document.createElement('button');
boton.id = 'boton1';
boton.textContent = 'Aplicar estilo a párrafo';

// Añadir el botón dentro del párrafo
nuevoParrafo.appendChild(boton);

// Añadir el párrafo con el botón al body
document.body.appendChild(nuevoParrafo);

// Asignar el evento onclick al botón
boton.onclick = function () {
    // Verificar si el párrafo tiene la clase 'parrafo'
    if (!nuevoParrafo.classList.contains('parrafo')) {
        // Si no la tiene, agregar la clase 'parrafo' y cambiar el texto del botón
        nuevoParrafo.classList.add('parrafo');
        boton.textContent = 'Quitar estilo a párrafo';
        boton.classList.add('aplicado');
    } else {
        // Si la tiene, quitar la clase 'parrafo' y cambiar el texto del botón
        nuevoParrafo.classList.remove('parrafo');
        boton.textContent = 'Aplicar estilo a párrafo';
        boton.classList.remove('aplicado');
    }
};
