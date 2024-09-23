const NUMERO_CASILLAS = 16;
const $panel = document.getElementById("panel");
const $casillas = document.getElementsByClassName("casilla");

const COLOR_JUGADOR = ["#ff0000", "#008000"];
const COLOR_IMAGENES = [
  "#ff6961",
  "#ffb480",
  "#f8f38d",
  "#42d6a4",
  "#08cad1",
  "#59adf6",
  "#9d94ff",
  "#c780e8"
]

let cartasJugadas = new Array();
let puntos = [0, 0];
let casillasRestantes = NUMERO_CASILLAS;
let turno = 0;

// Generador de cuadricula
(function () {
    for (let i = 0; i < NUMERO_CASILLAS; i++) {
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

  generarImagenes();
}())

// Generador de imagenes
function generarImagenes() {
  const imagenesUsadas = new Array(NUMERO_CASILLAS / 2 + 1);
  imagenesUsadas.fill(0);
  let rng;

  Array.from($casillas).forEach(e => {
    do {
      rng = Math.round(Math.random() * (NUMERO_CASILLAS / 2 - 1)) + 1;
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
}

function finPartida() {
  if (confirm("Fin de la partida")) reinicio();
}

function reinicio() {
  cartasJugadas.length = 0;
  puntos.fill(0);
  document.getElementById("puntuacion0").innerHTML = "0";
  document.getElementById("puntuacion1").innerHTML = "0";
  turno = 0;
  casillasRestantes = NUMERO_CASILLAS;
  limpiarImagenes();
  generarImagenes();
  ocultarTablero();
}

function limpiarImagenes() {
  Array.from(document.getElementsByClassName("imagen")).forEach(img => {
    img.style.border = "";
  })
}