let jugador1, jugador2;
let turno = 1; 
let cartaGiradas = [];
let bloqueo = false;
let aciertosJugador1 = 0;
let aciertosJugador2 = 0;
let cartas = [
    'perro.JPG', 'gallo.JPG', 'gato.JPG', 'toro.JPG', 
    'oveja.JPG', 'cerdo.JPG', 'lobo.JPG', 'chimpance.JPG', 
    'buitre.JPG', 'leon.JPG', 'gorila.JPG', 'rana.JPG',
    'perro.JPG', 'gallo.JPG', 'gato.JPG', 'toro.JPG', 
    'oveja.JPG', 'cerdo.JPG', 'lobo.JPG', 'chimpance.JPG', 
    'buitre.JPG', 'leon.JPG', 'gorila.JPG', 'rana.JPG'
];

let cartasDesordenadas = [];
let totalPares;
let mensajeResultado;


document.addEventListener('DOMContentLoaded', () => {
  
    do{
        jugador1 = prompt("Nombre del Jugador 1").trim();
        jugador2 = prompt("Nombre del Jugador 2").trim();

        if (jugador1 === "" || jugador2 === ""  ) {
          
            alert("Por favor, introduce nombres válidos para ambos jugadores.");
        }else{
            document.getElementById('jugador1').textContent = `${jugador1} : `;
            document.getElementById('jugador2').textContent = `${jugador2} : `;
            document.getElementById('textoTurno').textContent = `Turno de: ${jugador1}`;
            document.getElementById('texto').textContent = "";
        }
        
    }while(jugador1 === "" || jugador2==="");

    barajarCartas();
    crearTablero();
});

function barajarCartas() {
    cartasDesordenadas = cartas.sort(() => Math.random() - 0.5);
    totalPares = cartas.length / 2;
}

function crearTablero() {
    let container = document.getElementById('imagenesContainer');
    container.innerHTML = ''; 

    cartasDesordenadas.forEach((animal) => {
        let carta = document.createElement('div');
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
    if (bloqueo || elemento.classList.contains('volteada')) return; 

    elemento.classList.add('volteada'); 
    cartaGiradas.push(elemento);

    if (cartaGiradas.length === 2) {
        verificarPareja();
    }
}

function verificarPareja() {
    let [primera, segunda] = cartaGiradas;

    if (primera.dataset.animal === segunda.dataset.animal) {
        
        primera.classList.add('acertada');
        segunda.classList.add('acertada');
        cartaGiradas = [];
      
        if (turno % 2 === 1) {
            aciertosJugador1++;
            actualizarImagenesJugador('imagenesJugador1', primera.dataset.animal);
        } else {
            aciertosJugador2++;
            actualizarImagenesJugador('imagenesJugador2', primera.dataset.animal, segunda.dataset.animal);
        }
      
        document.getElementById('jugador1').textContent = `${jugador1} : ${aciertosJugador1}`;
        document.getElementById('jugador2').textContent = `${jugador2} : ${aciertosJugador2}`;
        totalPares--;

        if (totalPares === 0) {
          
            if (aciertosJugador1 > aciertosJugador2) {
                mensajeResultado = `<p>Ganador: ${jugador1}</p>`;
            } else if (aciertosJugador1 < aciertosJugador2) {
                mensajeResultado = `<p>Ganador: ${jugador2}</p>`;
            } else {
                mensajeResultado = `<p>Empate</p>`;
            }

            document.getElementById('resultado').innerHTML = `
                <h3>¡El juego ha terminado!</h3>
                ${mensajeResultado}
                <p>Aciertos ${jugador1}: ${aciertosJugador1}</p>
                <p>Aciertos ${jugador2}: ${aciertosJugador2}</p>
            `;
            return;
        }
    } else {
       
        bloqueo = true;
        setTimeout(() => {
            primera.classList.remove('volteada');
            segunda.classList.remove('volteada');
            cartaGiradas = [];
            bloqueo = false;
            actualizarTurno();
        }, 2000);
        return; 
    }

    actualizarTurno();
}


function actualizarImagenesJugador(idContenedor, animal1, animal2) {
    let contenedor = document.getElementById(idContenedor);
   
    let parImagenes = document.createElement('div');
    parImagenes.classList.add('par-imagenes');
    parImagenes.innerHTML = `
        <img src="${animal1}" class="img-fluid" alt="${animal1}">

    `;
    contenedor.appendChild(parImagenes);
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
