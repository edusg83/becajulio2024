let eleccion1 = null;
let eleccion2 = null;
const imagenes = ["img/Squirtel.png", "img/Mew.png", "img/Bulbasaur.png", "img/Eevee.png", "img/Pikachu.png", "img/Vulpix.png", "img/Caterpie.png", "img/Seel.png", "img/Squirtel.png", "img/Mew.png", "img/Bulbasaur.png", "img/Eevee.png", "img/Pikachu.png", "img/Vulpix.png", "img/Caterpie.png", "img/Seel.png"];
let turnoActual = 1;
let puntosJ1 = 0;
let puntosJ2 = 0;
let puntosTotales = 0;
const formulario = document.getElementById("formNombres");
const modalInicio = new bootstrap.Modal(document.getElementById('modalInicio'));
// const modalVictoria = new bootstrap.Modal(document.getElementById('modalVictoria'));

document.addEventListener('DOMContentLoaded', function () {
    modalInicio.show();
});

formulario.onsubmit = function (event) {
    event.preventDefault();
    asginarNombres();
}

barajarArray(imagenes);

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
        agregarImagenAcertada(imagenCorrecta1, turnoActual)
    } else {
        carta1.style.borderColor = 'red';
        carta2.style.borderColor = 'red';
        carta1.classList.remove('inactiva');

        setTimeout(() => {
            resetEstilos(carta1, carta2)
        }, 500);

        turnoActual = (turnoActual == 1) ? 2 : 1;
        actualizarTurno(turnoActual);
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
        puntosJ1++;
        puntosJugador1.innerHTML = "Puntuacion: " + puntosJ1;
        puntosTotales = puntosJ1 + puntosJ2
        if (puntosTotales == 8) {
            mostrarVictoria();
        }
    } else {
        puntosJ2++;
        puntosJugador2.innerHTML = "Puntuacion: " + puntosJ2;
        puntosTotales = puntosJ1 + puntosJ2
        if (puntosTotales == 8) {
            mostrarVictoria();
        }
    }
}

function actualizarTurno(turnoActual) {
    const textoTurnoJ1 = document.querySelector("#turno-j1");
    const textoTurnoJ2 = document.querySelector("#turno-j2");

    if (turnoActual == 1) {
        textoTurnoJ1.innerHTML = "Es tu turno";
        textoTurnoJ1.style.color = 'green';

        textoTurnoJ2.innerHTML = "No es tu turno";
        textoTurnoJ2.style.color = 'red';
    } else {
        textoTurnoJ2.innerHTML = "Es tu turno";
        textoTurnoJ2.style.color = 'green';

        textoTurnoJ1.innerHTML = "No es tu turno";
        textoTurnoJ1.style.color = 'red';
    }
}

function agregarImagenAcertada(rutaImagen, turnoActual) {
    const imagenesJ1 = document.querySelector("#img-J1");
    const imagenesJ2 = document.querySelector("#img-J2");

    const template = `
        <img src="${rutaImagen}" alt="Carta" width="50" height="50"
             class="imagen-puntuada border border-3 border-success rounded bg-success">
    `;

    if (turnoActual == 1) {
        //He utiliazado esto porque va añadiendo 1 a 1 ya que innerHTML sobreescribe todas las imagenes
        imagenesJ1.insertAdjacentHTML('beforeend', template);
    } else {
        imagenesJ2.insertAdjacentHTML('beforeend', template);
    }
}

function asginarNombres() {
    const nomJugador1 = document.getElementById("nombresJugador1");
    const nomJugador2 = document.getElementById("nombresJugador2");
    const nomIntroducidoJugador1 = document.getElementById("nomJ1").value;
    const nomIntroducidoJugador2 = document.getElementById("nomJ2").value;

    if (nomIntroducidoJugador1 == "") {
        nomJugador1.innerHTML = "Jugador 1";
    } else {
        nomJugador1.innerHTML = nomIntroducidoJugador1;
    }

    if (nomIntroducidoJugador2 == "") {
        nomJugador2.innerHTML = "Jugador 2";
    } else {
        nomJugador2.innerHTML = nomIntroducidoJugador2;
    }

    modalInicio.hide();
}

function mostrarVictoria() {
    const nombresGanador = document.getElementById("nombreVictoria");
    const modalVictoria = new bootstrap.Modal(document.getElementById('modalVictoria'));
    const nomJugador1 = document.getElementById("nombresJugador1").textContent;
    const nomJugador2 = document.getElementById("nombresJugador2").textContent;

    if(puntosJ1 > puntosJ2){
        nombresGanador.innerHTML ="Felicidades al ganador: " + nomJugador1;
    } else if (puntosJ1 == puntosJ2){
        nombresGanador.innerHTML = "EMPATE PROBAR OTRA VEZ";
    } else {
        nombresGanador.innerHTML ="Felicidades al ganador: " + nomJugador2;
    }

    modalVictoria.show();
}