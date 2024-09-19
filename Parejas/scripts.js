let cards = Array.from(document.getElementsByClassName("card"));

const imagenes = [
  "/Parejas/resources/Squirtle.jpg",
  "/Parejas/resources/Pikachu.jpg",
  "/Parejas/resources/Eevee.jpg",
  "/Parejas/resources/Togepi.jpg",
  "/Parejas/resources/Jigglypuff.jpg",
  "/Parejas/resources/Bulbasaur.jpg",
  "/Parejas/resources/Psyduck.jpg",
  "/Parejas/resources/Charmander.jpg",
];

let test = new Map();

// Hacer un mapa donde guarde key y url

// Asignar la key de forma aleatoria con cada partida

function randomGenerator() {
  return Math.floor(Math.random() * 9);
}

function asignValue() {
  cards.forEach((element) => {
    element.value = randomGenerator();
  });
}

function assignImage() {
  cards.forEach(function (card) {
    element.children[0].style.BackgroundImage(imagenes[randomGenerator]);
    console.log[element.children[0]];
  });
}

function toggleEffect(param) {
  let button = document.getElementById(param);
  button.classList.toggle("test");
  button.children[0].classList.toggle("opacity-100");
}
