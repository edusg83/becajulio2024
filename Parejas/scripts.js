let cards = document.getElementsByClassName("card");

let arrayCards = Array.from(document.getElementsByClassName("card"));

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
  return Math.floor(Math.random() * 8 + 1);
}

function asignValue() {
  arrayCards.forEach((element) => {
    element.value = randomGenerator();
  });
}

// function assignImage() {
//   cards.forEach((element) => {
//     element.
//   });
// }

function toggleEffect(param) {
  let button = document.getElementById(param);
  button.classList.toggle("test");
  button.children[0].classList.toggle("opacity-100");
}
