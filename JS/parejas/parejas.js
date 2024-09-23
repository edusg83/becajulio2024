let numeroCasillas = 16;
const $panel = document.getElementById("panel");
let $casillas;

const COLOR_JUGADOR = ["#ff0000", "#008000"];
const COLOR_IMAGENES = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#800000",
  "#808000",
  "#008080",
  "#800080",
  "#FFA500",
  "#008000",
  "#338FFF",
  "#A52A2A",
  "#FFC0CB",
  "#FFD700"
]

let cartasJugadas = new Array();
let puntos = [0, 0];
let casillasRestantes = numeroCasillas;
let turno = 0;

(function () {
  ocultarJuego(true);
  ocultarVictoria(true);
}());

function jugar() {
  let parejas = Number(document.getElementById("opcion").value);
  numeroCasillas = parejas;
  document.getElementById("panel").className += " casillas" + parejas;

  ocultarOpciones(true);
  ocultarJuego(false);

  generarCuadricula();
}

function ocultarTurno(opcion) {
  document.getElementById("turno").hidden = opcion;
}

function ocultarJugadores(opcion) {
  Array.from(document.getElementsByClassName("marcador")).forEach(e => {
    Array.from(e.children).forEach(c => c.hidden = opcion);
  })
}

function ocultarJuego(opcion) {
  ocultarTurno(opcion);
  Array.from(document.getElementById("juego").children).forEach(e => {
    Array.from(e.children).forEach(c => c.hidden = opcion);
  });
  
}

function ocultarOpciones(opcion) {
  Array.from(document.getElementById("selector").children).forEach(e => e.hidden = opcion);
}

function ocultarVictoria(opcion) {
  Array.from(document.getElementById("victoria").children).forEach(e => e.hidden = opcion);
}

// Generador de cuadricula
function generarCuadricula () {
    for (let i = 0; i < numeroCasillas; i++) {
    const fondo = document.createElement("img");
      fondo.className = "fondo";
      fondo.src = "img/mistborn/logo.png";
    // fondo.setAttribute("hidden", true);
    
    const img = document.createElement("img");
    img.src = "";
    img.className = "imagen";
    // img.setAttribute("hidden", true);
  
    const casilla = document.createElement("div");
      casilla.className = "casilla";
      casilla.id = i;
      casilla.setAttribute("onClick", `seleccionarCasilla(${i})`);
  
    casilla.appendChild(fondo);
    casilla.appendChild(img);

    $panel.appendChild(casilla);
  }

  $casillas = document.getElementsByClassName("casilla");

  generarImagenes();
}

// Generador de imagenes
function generarImagenes() {
  const imagenesUsadas = new Array(numeroCasillas / 2 + 1);
  imagenesUsadas.fill(0);
  let rng;

  Array.from($casillas).forEach(e => {
    do {
      rng = Math.round(Math.random() * (numeroCasillas / 2 - 1)) + 1;
    } while (imagenesUsadas[rng] === 2);
    imagenesUsadas[rng]++;
    let img = e.getElementsByClassName("imagen")[0];
    img.src = "img/mistborn/" + rng + ".svg";
    img.style.backgroundColor = COLOR_IMAGENES[rng - 1];

  });
};

function bloquearCasilla(id) {
  $casillas[id].setAttribute("onClick", "");
}

function ocultarTablero() {
  Array.from($casillas).forEach((e, i) => {
    // getFondo(i).hidden = false;
    // getImg(i).hidden = true;
    e.className = "casilla";
  })
}

function bloquearTablero(opcion) {
  Array.from($casillas).forEach(e => {
    e.setAttribute("onClick", (opcion ? "" : `seleccionarCasilla(${e.id})`));
  });
}

function seleccionarCasilla(id) {
  $casillas[id].className += " flip"
  
  bloquearCasilla(id);

  cartasJugadas.push(id);
  
  if (cartasJugadas.length === 2) {
    bloquearTablero(true);
    setTimeout(() => {
      jugada();
      bloquearTablero(false);
    }, 1000);
  }
}

function jugada() {
  if (comprobarPareja()) {
    fijarPareja();
    establecerPuntuacion();
  } else {
    ocultarPareja();
    cambioTurno();
  }

  cartasJugadas.length = 0;
}

function getFondo(id) {
  return $casillas[id].querySelector(".fondo");
}

function getImg(id) {
  return $casillas[id].querySelector(".imagen");
}

function comprobarPareja() {
  return getImg(cartasJugadas[0]).src === getImg(cartasJugadas[1]).src
}

function ocultarPareja() {
  $casillas[cartasJugadas[0]].className = "casilla";
  $casillas[cartasJugadas[1]].className = "casilla";
  // getFondo(cartasJugadas[0]).hidden = false;
  // getFondo(cartasJugadas[1]).hidden = false;
  // getImg(cartasJugadas[0]).hidden = true;
  // getImg(cartasJugadas[1]).hidden = true;
}

function fijarPareja() {
  casillasRestantes -= 2;
  puntos[turno]++;

  registrarImagen();

  $casillas[cartasJugadas[0]].removeAttribute("onclick");
  $casillas[cartasJugadas[1]].removeAttribute("onclick");
  
  dibujarBorde();

  if (casillasRestantes === 0) {
    finPartida();
  }
}

function registrarImagen() {
  const imgOriginal = getImg(cartasJugadas[0]);
  const img = document.createElement("img");
  img.className = "icono";
  img.src = imgOriginal.src;
  img.style.backgroundColor = imgOriginal.style.backgroundColor;
  
  document.getElementById("jugador" + turno).getElementsByClassName("iconos")[0].append(img);

}

function dibujarBorde() {
  let estilo = "solid 5px " + COLOR_JUGADOR[turno];

  getImg(cartasJugadas[0]).style.border = estilo;
  getImg(cartasJugadas[1]).style.border = estilo;
}

function establecerPuntuacion() {
  document.getElementById("puntuacion" + turno).innerHTML = puntos[turno];
}

function cambioTurno() {
  turno = turno === 0 ? 1 : 0;
  document.getElementById("turno_jugador").innerHTML = turno + 1;
}

function finPartida() {
  let ganador = document.getElementById("ganador");

  if (puntos[0] > puntos[1]) {
    ganador.innerHTML = "Ha ganado el JUGADOR 1";
  } else if (puntos[0] < puntos[1]) {
    ganador.innerHTML = "Ha ganado el JUGADOR 2";
  } else {
    ganador.innerHTML = "EMPATE";
  }

  ocultarVictoria(false);
  ocultarJuego(true);
  ocultarJugadores(false);
}

function reinicio() {
  cartasJugadas.length = 0;
  puntos.fill(0);
  document.getElementById("puntuacion0").innerHTML = "0";
  document.getElementById("puntuacion1").innerHTML = "0";
  turno = 0;
  casillasRestantes = numeroCasillas;
  limpiarImagenes();
  generarImagenes();
  ocultarTablero();
}

function limpiarImagenes() {
  Array.from(document.getElementsByClassName("imagen")).forEach(img => {
    img.style.border = "";
  })
}