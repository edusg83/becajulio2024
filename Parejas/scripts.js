const cards = Array.from(document.getElementsByClassName("card"));

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

//Mapa para controlar la repeticion de imagenes
const imageMap = new Map();

//Mapa para controlar los valores asignados a cada carta
const valueMap = new Map();

let player = {
  name: "name",
  hits: 0,
};

for (let i = 0; i < imagenes.length; i++) {
  imageMap.set(imagenes[i], 0);
}

for (let i = 0; i < imagenes.length; i++) {
  valueMap.set(i, 0);
}

function setPlayerName() {
  let name = prompt("Hola! Cual es tu nombre?!");

  let player1 = Object.create(player);
  player1.name = name;

  let player2 = Object.create(player);
  player2.name = "Evil Eduardo";

  document.getElementById("player1_name").value = player1.name;
  console.log(document.getElementById("player1_name"));
  document.getElementById("player2_name").value = player2.name;
}

function randomGenerator() {
  return Math.floor(Math.random() * imagenes.length);
}

function assignValue() {
  cards.forEach((element) => {
    let index = randomGenerator();

    while (valueMap.get(index) == 2) {
      index = randomGenerator();
    }

    element.value = index;

    let suma = valueMap.get(index) + 1;

    valueMap.set(index, suma);
  });
}

function assignImage() {
  cards.forEach(function (card) {
    let index = randomGenerator();

    while (imageMap.get(imagenes[index]) == 2) {
      index = randomGenerator();
    }

    card.children[0].style.backgroundImage = `url(${imagenes[index]})`;

    let suma = imageMap.get(imagenes[index]) + 1;

    imageMap.set(imagenes[index], suma);
  });
}

function toggleEffect(param) {
  let button = document.getElementById(param);
  button.classList.toggle("rotateEffect");
  button.children[0].classList.toggle("opacity-100");
}

function checkCard() {}
