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

const test = new Map();

for (let i = 0; i < imagenes.length; i++) {
  test.set(imagenes[i], Number(0));
}

console.log(test); //DEVUELVE MAPA ENTERO
console.log(test.get(imagenes[1])); //DEVUELVE VALOR

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

    while (test.get(imagenes[index]) == 2) {
      index = randomGenerator();
    }

    card.children[0].style.backgroundImage = `url(${imagenes[index]})`;

    //POR QUE NO DEJA OPERAR DIRECTAMENTE SOBRE EL VALOR?!?!?!?!?!
    let suma = test.get(imagenes[index]) + 1;

    test.set(imagenes[index], suma);
  });
}

function toggleEffect(param) {
  let button = document.getElementById(param);
  button.classList.toggle("test");
  button.children[0].classList.toggle("opacity-100");
}
