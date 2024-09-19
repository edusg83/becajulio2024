// Variables globales
let jugador1, jugador2;
let turno = 1; 
let cartaGiradas = [];
let bloqueo = false;
let aciertosJugador1 = 0;
let aciertosJugador2 = 0;
let cartas = [];
let cartasDesordenadas = [];
let totalPares;



document.addEventListener('DOMContentLoaded', () => {
    // Solicitar nombres y preparar el juego
    jugador1 = prompt("Nombre del Jugador 1");
    jugador2 = prompt("Nombre del Jugador 2");
    document.getElementById('jugador1').textContent = `${jugador1} : `;
    document.getElementById('jugador2').textContent = `${jugador2} : `;
    document.getElementById('textoTurno').textContent = `Turno de: ${jugador1}`;
    document.getElementById('texto').textContent = "";

    // Inicializar las cartas
    prepararCartas();
    barajarCartas();
    crearTablero();
});

function prepararCartas() {
    // Definir las cartas, con un par para cada animal
    const animales = [
        'perro.JPG', 'gallo.JPG', 'gato.JPG', 'toro.JPG', 
        'oveja.JPG', 'cerdo.JPG', 'lobo.JPG', 'chimpance.JPG', 
        'buitre.JPG', 'leon.JPG', 'gorila.JPG', 'rana.JPG'
    ];
    // Crear pares de cartas
    cartas = animales.concat(animales);
}

function barajarCartas() {
    // Barajar las cartas
    cartasDesordenadas = cartas.sort(() => Math.random() - 0.5);
    totalPares = cartas.length / 2;
}

function crearTablero() {
    const container = document.getElementById('imagenesContainer');
    container.innerHTML = ''; // Limpiar el contenedor

    // Crear las cartas en el tablero
    cartasDesordenadas.forEach((animal, index) => {
        const carta = document.createElement('div');
        carta.classList.add('col-2', 'mb-3');
        carta.innerHTML = `
            <div class="carta">
                <div class="contenido-carta" onclick="girarCarta(this)" data-animal="${animal}">
                    <img src="carta.JPG" class="dorso img-fluid" alt="Dorso de la carta">
                    <img src="${animal}" class="frente img-fluid" alt="${animal}">
                </div>
            </div>
        `;
        container.appendChild(carta);
    });
}

function girarCarta(elemento) {
    if (bloqueo || elemento.classList.contains('volteada')) return; // Si está bloqueado o ya está volteada, salir

    elemento.classList.add('volteada'); // Voltea la carta
    cartaGiradas.push(elemento);

    if (cartaGiradas.length === 2) {
        verificarPareja();
    }
}

function verificarPareja() {
    const [primera, segunda] = cartaGiradas;

    if (primera.dataset.animal === segunda.dataset.animal) {
        // Si son iguales, se marcan como acertadas
        primera.classList.add('acertada');
        segunda.classList.add('acertada');
        cartaGiradas = [];
        // Actualizar el conteo de aciertos
        if (turno % 2 === 1) aciertosJugador1++;
        else aciertosJugador2++;
        // Actualizar la visualización de aciertos
        document.getElementById('jugador1').textContent = `${jugador1} : ${aciertosJugador1}`;
        document.getElementById('jugador2').textContent = `${jugador2} : ${aciertosJugador2}`;
        totalPares--;

        if (totalPares === 0) {
            // Fin del juego
            document.getElementById('resultado').innerHTML = `
                <h3>¡El juego ha terminado!</h3>
                <p>Ganador: ${aciertosJugador1 > aciertosJugador2 ? jugador1 : jugador2}</p>
                <p>Aciertos ${jugador1}: ${aciertosJugador1}</p>
                <p>Aciertos ${jugador2}: ${aciertosJugador2}</p>
            `;
            return;
        }
    } else {
        // Si no son iguales, se bloquea el juego y se vuelven a ocultar después de un tiempo
        bloqueo = true;
        setTimeout(() => {
            primera.classList.remove('volteada');
            segunda.classList.remove('volteada');
            cartaGiradas = [];
            bloqueo = false;
            actualizarTurno();
        }, 2000);
        return; // Asegúrate de que el turno no se actualice inmediatamente si no hay acierto
    }

    actualizarTurno();
}

function actualizarTurno() {
    turno++;
    let jugadorActual;

    if (turno % 2 === 1) {
        jugadorActual = jugador1;
    } else {
        jugadorActual = jugador2;
    }

    document.getElementById('textoTurno').textContent = `Turno de: ${jugadorActual}`;
}
