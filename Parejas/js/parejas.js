let eleccion1 = null;
let eleccion2 = null;
const imagenes = ["img/Squirtel.png", "img/Mew.png", "img/Bulbasaur.png", "img/Eevee.png", "img/Pikachu.png", "img/Vulpix.png", "img/Caterpie.png", "img/Seel.png", "img/Squirtel.png", "img/Mew.png", "img/Bulbasaur.png", "img/Eevee.png", "img/Pikachu.png", "img/Vulpix.png", "img/Caterpie.png", "img/Seel.png"];
let turnoActual = 1;
let puntosJ1 = 0;
let puntosJ2 = 0;


barajarArray(imagenes);

function reset() {
    resetElecciones();
    barajarArray(imagenes);
}

function barajarArray(imagenes) {
    for (let i = imagenes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [imagenes[i], imagenes[j]] = [imagenes[j], imagenes[i]];
    }
    asignarImagenes(imagenes);
}

function asignarImagenes(imagenesRandom) {
    let cartas = document.querySelectorAll(".tarjeta");
    cartas.forEach((tarjeta, index) => {
        if (index < imagenesRandom.length) {
            let imagenCorrecta = tarjeta.querySelector(".imagen-correcta");

            if (imagenCorrecta) {
                imagenCorrecta.src = imagenesRandom[index];
            }
        }
    });
}

function guardarEleccion(carta) {
    carta.querySelector('.imagen-oculta').style.display = 'none';
    carta.querySelector('.imagen-correcta').style.display = 'block';
    carta.style.borderColor = 'orange';

    if (!eleccion1) {
        eleccion1 = carta;
        eleccion1.classList.add('inactiva');
    } else if (!eleccion2) {
        eleccion2 = carta;
        comprobarEleccion(eleccion1, eleccion2);
    }
}

function comprobarEleccion(carta1, carta2) {
    let imagenCorrecta1 = carta1.querySelector('.imagen-correcta').src;
    let imagenCorrecta2 = carta2.querySelector('.imagen-correcta').src;

    if (imagenCorrecta1 === imagenCorrecta2) {
        carta1.style.borderColor = 'green';
        carta2.style.borderColor = 'green';
        carta1.classList.add('inactiva');
        carta2.classList.add('inactiva');
        resetElecciones();
        actualizarPuntos(turnoActual);
    } else {
        carta1.style.borderColor = 'red';
        carta2.style.borderColor = 'red';
        carta1.classList.remove('inactiva');

        setTimeout(() => {
            resetEstilos(carta1, carta2)
        }, 1000);

        if (turnoActual == 1) {
            turnoActual = 2;
        } else {
            turnoActual = 1;
        }
    }
}

function resetElecciones() {
    eleccion1 = null;
    eleccion2 = null;
}

function resetEstilos(carta1, carta2) {
    carta1.querySelector('.imagen-correcta').style.display = 'none';
    carta2.querySelector('.imagen-correcta').style.display = 'none';
    carta1.querySelector('.imagen-oculta').style.display = 'block';
    carta2.querySelector('.imagen-oculta').style.display = 'block';
    carta1.style.borderColor = 'black';
    carta2.style.borderColor = 'black';
    resetElecciones();
}

function actualizarPuntos(turnoActual) {
    const puntosJugador1 = document.querySelector("#puntuacion-j1");
    const puntosJugador2 = document.querySelector("#puntuacion-j2");

    if (turnoActual == 1) {
        puntosJ1 ++;
        puntosJugador1.innerHTML = "Puntuacion: " + puntosJ1;
    } else {
        puntosJ2 ++;
        puntosJugador2.innerHTML = "Puntuacion: " + puntosJ2;
    }
}