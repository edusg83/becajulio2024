let eleccion1 = null;
let eleccion2 = null;
const imagenes = ["img/Squirtel.png", "img/Mew.png", "img/Bulbasaur.png", "img/Eevee.png", "img/Pikachu.png", "img/Vulpix.png", "img/Caterpie.png", "img/Seel.png", "img/Squirtel.png", "img/Mew.png", "img/Bulbasaur.png", "img/Eevee.png", "img/Pikachu.png", "img/Vulpix.png", "img/Caterpie.png", "img/Seel.png"]

asignarImagenes(imagenes);

function asignarImagenes(imagenesRandom) {
    let cartas = document.querySelectorAll(".tarjeta");
    cartas.forEach((tarjeta, index) => {
        if (index < imagenesRandom.length) {
            let imagenCorrecta = tarjeta.querySelector(".imagen.correcta");
            if (imagenCorrecta) {
                imagenCorrecta.src = imagenesRandom[index];
            }
        }
    });
}

function guardarEleccion(carta) {
    carta.querySelector('.imagen.oculta').style.display = 'none';
    carta.querySelector('.imagen.correcta').style.display = 'block';
    carta.style.borderColor = 'orange';

    if (!eleccion1) {
        eleccion1 = carta;
    } else if (!eleccion2) {
        eleccion2 = carta;
        comprobarEleccion(eleccion1, eleccion2);
    }
}

function comprobarEleccion(carta1, carta2) {
    let imagenCorrecta1 = carta1.querySelector('.imagen.correcta').src;
    let imagenCorrecta2 = carta2.querySelector('.imagen.correcta').src;

    if (imagenCorrecta1 === imagenCorrecta2) {
        carta1.style.borderColor = 'green';
        carta2.style.borderColor = 'green';
        carta1.classList.add('inactiva');
        carta2.classList.add('inactiva');
        resetElecciones();
    } else {
        carta1.style.borderColor = 'red';
        carta2.style.borderColor = 'red';

        setTimeout(() => {
            resetEstilos(carta1, carta2)
        }, 1000);
    }
}

function resetElecciones() {
    eleccion1 = null;
    eleccion2 = null;
}

function resetEstilos(carta1, carta2) {
    carta1.querySelector('.imagen.correcta').style.display = 'none';
    carta2.querySelector('.imagen.correcta').style.display = 'none';
    carta1.querySelector('.imagen.oculta').style.display = 'block';
    carta2.querySelector('.imagen.oculta').style.display = 'block';
    carta1.style.borderColor = 'black';
    carta2.style.borderColor = 'black';
    resetElecciones();
}
