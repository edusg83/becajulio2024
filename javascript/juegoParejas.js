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

document.getElementById('jugarDeNuevo').addEventListener('click', () => {
    location.reload();
});

function barajarCartas() {
    cartasDesordenadas = cartas.sort(() => Math.random() - 0.5);
    totalPares = cartas.length / 2;
}

function crearTablero() {
    let contenedor = document.getElementById('imagenesContainer');
    let columnas = contenedor.getElementsByClassName('col-2');

    for (let i = 0; i < cartasDesordenadas.length; i++) {
        let animal = cartasDesordenadas[i];
        let columna = columnas[i];
        let contenidoCarta = columna.querySelector('.contenido-carta');
        
        if (contenidoCarta) {
            contenidoCarta.setAttribute('data-animal', animal);
            contenidoCarta.querySelector('.frente').setAttribute('src', animal);
        }
    }
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


    let imagen1 = primera.querySelector('.frente').src;
    let imagen2 = segunda.querySelector('.frente').src;


    if (imagen1 === imagen2) {
        primera.classList.add('acertada');
        segunda.classList.add('acertada');
        cartaGiradas = [];

        if (turno % 2 === 1) {
            aciertosJugador1++;
            actualizarImagenesJugador('imagenesJugador1', imagen1);
        } else {
            aciertosJugador2++;
            actualizarImagenesJugador('imagenesJugador2', imagen1, imagen2);
        }

        document.getElementById('jugador1').textContent = `${jugador1} : ${aciertosJugador1}`;
        document.getElementById('jugador2').textContent = `${jugador2} : ${aciertosJugador2}`;
        totalPares--;

        if (totalPares === 0) {
            let mensajeResultado;
            if (aciertosJugador1 > aciertosJugador2) {
                mensajeResultado = `<p>Ganador: ${jugador1}</p>`;
            } else if (aciertosJugador1 < aciertosJugador2) {
                mensajeResultado = `<p>Ganador: ${jugador2}</p>`;
            } else {
                mensajeResultado = `<p>¡Empate!</p>`;
            }

            let contenidoModal = `
                ${mensajeResultado}
                <p>${jugador1}: ${aciertosJugador1} aciertos</p>
                <p>${jugador2}: ${aciertosJugador2} aciertos</p>
            `;
            
            document.getElementById('modalContenido').innerHTML = contenidoModal;
            let modal = new bootstrap.Modal(document.getElementById('resultadoModal'));
            modal.show();
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


function actualizarImagenesJugador(idContenedor, animal) {
    let contenedor = document.getElementById(idContenedor);
   
    let parImagenes = document.createElement('div');
    parImagenes.classList.add('par-imagenes');
    parImagenes.innerHTML = `
        <img src="${animal}" class="img-fluid" alt="${animal}">

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
