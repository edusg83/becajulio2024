let ArrayCards = Array.from(document.getElementsByClassName("card"));

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

// Hacer un mapa donde guarde key y url

// Asignar la key de forma aleatoria con cada partida

function randomGenerator() {
  return Math.floor(Math.random() * 8 + 1);
}

function asignValue() {
  ArrayCards.forEach((element) => {
    element.value = randomGenerator();
    console.log(element.value);
  });
}

function toggleEffect(param) {
  let button = document.getElementById(param);
  button.classList.toggle("test");
}
