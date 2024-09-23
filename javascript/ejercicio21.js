const parrafo = document.createElement('p');
parrafo.id = 'p1';
parrafo.textContent = 'Párrafo1';
document.body.appendChild(parrafo);

const boton = document.createElement('button');
boton.id = 'boton1';
boton.textContent = 'Aplicar estilo a párrafo';
parrafo.appendChild(boton);


boton.onclick = function() {
    if (!parrafo.classList.contains('parrafo')) {
        parrafo.classList.add('parrafo');
        boton.textContent = 'Quitar estilo a párrafo';
        boton.classList.add('aplicado');
    } else {
        parrafo.classList.remove('parrafo');
        boton.textContent = 'Aplicar estilo a párrafo';
        boton.classList.remove('aplicado');
    }
};
