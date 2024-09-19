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
        document.getElementById('carta' + numeroCarta).firstElementChild.src=cartas[numeroCarta];
    }else{
        numeroCartaSeleccionada2 = numeroCarta;
        document.getElementById('carta' + numeroCarta).firstElementChild.src=cartas[numeroCarta];

    }
}