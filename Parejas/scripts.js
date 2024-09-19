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

for (let i = 0; i < imagenes.length; i++) {
  test.set(imagenes[i], 0);
}

console.log(test);

// Hacer un mapa donde guarde key y url

// Asignar la key de forma aleatoria con cada partida

function randomGenerator() {
  let ranNum;

  ranNum = Math.floor(Math.random() * imagenes.length);

  return ranNum;
}

// function asignValue() {
//   cards.forEach((element) => {
//     element.value = randomGenerator();
//   });
// }

function assignImage() {
  cards.forEach(function (card) {
    let index = randomGenerator();

    while (test.get(index) == 2) {
      index = randomGenerator();
    }

    card.children[0].style.backgroundImage = `url(${imagenes[index]})`;

    test.set(index, test.get(index) + 1);
  });
}

function toggleEffect(param) {
  let button = document.getElementById(param);
  button.classList.toggle("test");
  button.children[0].classList.toggle("opacity-100");
}
