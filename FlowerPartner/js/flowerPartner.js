let jugador1 = {
    nombre: 'Esther',
    partidasGanadas: 0,
    puntuacionPartidaActual: 0,
}

let jugador2 = {
    nombre: 'Álvaro',
    partidasGanadas: 0,
    puntuacionPartidaActual: 0,
}

let imagenes = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
];


let cartas = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png"
];
let numeroCartaSeleccionada1 = undefined;
let numeroCartaSeleccionada2 = undefined;
let cartasReveladas = 0;
let turnoJugador1 = true;

window.onload = function () {
    //    jugador1.nombre = getNombreUsuario(1);
    //    jugador2.nombre = getNombreUsuario(2);

    updateInfoJugadores();
    barajar();

}

function getNombreUsuario(numeroJugador) {
    return prompt('Introduce el nombre del jugador ' + numeroJugador + ': ')
}

function updateInfoJugadores() {
    document.getElementById('info-jugador1').innerHTML = '- Nombre: ' + jugador1.nombre + '- Partidas Ganadas: ' + jugador1.partidasGanadas + '- Puntuación partida actual: ' + jugador1.puntuacionPartidaActual;
    document.getElementById('info-jugador2').innerHTML = '- Nombre: ' + jugador2.nombre + '- Partidas Ganadas: ' + jugador2.partidasGanadas + '- Puntuación partida actual: ' + jugador2.puntuacionPartidaActual;

}

function barajar() {
    cartas = cartas.sort(() => 0.5 - Math.random());
}

function descubrirCarta(numeroCarta) {
    if (numeroCartaSeleccionada1 === undefined) {
        numeroCartaSeleccionada1 = numeroCarta;
        document.getElementById('carta' + numeroCarta).firstElementChild.src = cartas[numeroCarta];
    } else {
        numeroCartaSeleccionada2 = numeroCarta;
        document.getElementById('carta' + numeroCarta).firstElementChild.src = cartas[numeroCarta];

        if (cartas[numeroCartaSeleccionada1] === cartas[numeroCartaSeleccionada2]) {
            if (turnoJugador1) {
                jugador1.puntuacionPartidaActual++;
            } else {
                jugador2.puntuacionPartidaActual++;
            }
            cartasReveladas += 2;
            resetSeleccion(); 
            updateInfoJugadores();
            verificarGanador();
        } else {
            setTimeout(function () {
                ocultarCarta(numeroCartaSeleccionada1);
                ocultarCarta(numeroCartaSeleccionada2);
                cambiarTurno();
                resetSeleccion();
            }, 1000);
        }
    }
}

function ocultarCarta(numeroCarta) {
    document.getElementById('carta' + numeroCarta).firstElementChild.src = "img/carta-vuelta.png";
}

function resetSeleccion() {
    numeroCartaSeleccionada1 = undefined;
    numeroCartaSeleccionada2 = undefined;
}

function cambiarTurno() {
    turnoJugador1 = !turnoJugador1; 
    let turno = turnoJugador1 ? jugador1.nombre : jugador2.nombre;
    document.getElementById('turno-actual').innerHTML = "Turno actual: " + turno;
}

function verificarGanador() {
    if (cartasReveladas === cartas.length) {
        let mensaje = '';
        if (jugador1.puntuacionPartidaActual > jugador2.puntuacionPartidaActual) {
            jugador1.partidasGanadas++;
            mensaje = "¡" + jugador1.nombre + " ha ganado la partida!";
        } else if (jugador2.puntuacionPartidaActual > jugador1.puntuacionPartidaActual) {
            jugador2.partidasGanadas++;
            mensaje = "¡" + jugador2.nombre + " ha ganado la partida!";
        } else {
            mensaje = "¡Empate!";
        }
        alert(mensaje);
        resetPartida();
    }
}

function resetPartida() {
    cartasReveladas = 0;
    jugador1.puntuacionPartidaActual = 0;
    jugador2.puntuacionPartidaActual = 0;
    updateInfoJugadores();
    barajar();
    ocultarTodasLasCartas();
}

function ocultarTodasLasCartas() {
    for (let i = 0; i < cartas.length; i++) {
        ocultarCarta(i);
    }
}