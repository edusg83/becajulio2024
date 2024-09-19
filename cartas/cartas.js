    const cartas = [
            'burro.png', 'burro.png',
            'cerdo.png', 'cerdo.png',
            'conejo.png', 'conejo.png',
            'gallina.png', 'gallina.png',
            'oveja.png', 'oveja.png',
            'vaca.png', 'vaca.png'
        ];

    let barajarCartas = barajar(cartas);
    let primeraCarta = null;
    let segundaCarta = null;
    let puntuaJugUno = 0;
    let puntuaJugDos = 0;
    let jugadorActual = null;
    let tableroBloqueado = false;

    const jugador1 = prompt("Nombre del Jugador 1:");
    const jugador2 = prompt("Nombre del Jugador 2:");
    
    document.getElementById('puntuacion-jug1').innerText = `${jugador1}: 0 puntos`;
    document.getElementById('puntuacion-jug2').innerText = `${jugador2}: 0 puntos`;

    dadoInicio();

    const tablero = document.getElementById('tablero');

    for (let i = 0; i < barajarCartas.length; i++) {
        const carta = document.createElement('div');
        carta.classList.add('card');
        carta.dataset.value = barajarCartas[i];
        carta.dataset.index = i;
        const img = document.createElement('img');
        img.src = 'animales/' + barajarCartas[i];
        img.alt = 'Card Image'; 
        carta.appendChild(img);
        carta.addEventListener('click', function() {
            voltearCarta(carta);
        });
        tablero.appendChild(carta);
    }

    function dadoInicio() {
        let tirada1 = Math.floor(Math.random() * 6) + 1;
        let tirada2 = Math.floor(Math.random() * 6) + 1;
        alert(`${jugador1} sacó un ${tirada1}, ${jugador2} sacó un ${tirada2}`);

        while (tirada1 === tirada2) {
            alert("Empate, tirando los dados de nuevo...");
            tirada1 = Math.floor(Math.random() * 6) + 1;
            tirada2 = Math.floor(Math.random() * 6) + 1;
            alert(`${jugador1} sacó un ${tirada1}, ${jugador2} sacó un ${tirada2}`);
        }

        jugadorActual = tirada1 > tirada2 ? jugador1 : jugador2;
        actualizaJugadorActual();
    }

    function actualizaJugadorActual() {
        document.getElementById('jugador-actual').innerText = `Turno de: ${jugadorActual}`;
    }

    function barajar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function voltearCarta(cardElement) {
        if (tableroBloqueado || cardElement.classList.contains('flip')) return;
        cardElement.classList.add('flip');
        if (!primeraCarta) {
            primeraCarta = cardElement;
            return;
        }
        segundaCarta = cardElement;
        tableroBloqueado = true;
        revisaPareja();
    }

  function revisaPareja() {
    if (primeraCarta.dataset.value === segundaCarta.dataset.value) {
        acualizaPuntuacion();
        reiniciarTablero(true);
    } else {
        setTimeout(function() {
            primeraCarta.classList.remove('flip');
            segundaCarta.classList.remove('flip');
            cambiarJugador();
            reiniciarTablero(false);
        }, 1000);
    }
}

    function acualizaPuntuacion() {
        if (jugadorActual === jugador1) {
            puntuaJugUno++;
            document.getElementById('puntuacion-jug1').innerText = `${jugador1}: ${puntuaJugUno} puntos`;
        } else {
            puntuaJugDos++;
            document.getElementById('puntuacion-jug2').innerText = `${jugador2}: ${puntuaJugDos} puntos`;
        }
        if (puntuaJugUno + puntuaJugDos === cartas.length / 2) {
            setTimeout(() => {
                if(puntuaJugUno > puntuaJugDos){
                    alert(`${jugador1} ha ganado!`);
                } else if(puntuaJugDos > puntuaJugUno){
                    alert(`${jugador2} ha ganado!`);
                } else {
                    alert("Empate!");
                }
            }, 500);
        }
    }

    function cambiarJugador() {
        jugadorActual = jugadorActual === jugador1 ? jugador2 : jugador1;
        actualizaJugadorActual();
    }

    function reiniciarTablero(isMatch) {
        [primeraCarta, segundaCarta] = [null, null];
        tableroBloqueado = false;

        if (isMatch) return;
    }
