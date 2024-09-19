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
  id: "",
  playerTurn: false,
  plusHit: function () {
    this.hits++;
  },
};

let player1;

let player2;

let num1;

let num2;

let isCardActive = false;

for (let i = 0; i < imagenes.length; i++) {
  imageMap.set(imagenes[i], 0);
}

for (let i = 0; i < imagenes.length; i++) {
  valueMap.set(i, 0);
}

function setPlayer() {
  let name = prompt("Hola! Cual es tu nombre?!");

  player1 = Object.create(player);
  player1.name = name;
  player1.id = document.getElementById("player1_board");
  player1.playerTurn = true;

  player2 = Object.create(player);
  player2.name = "Evil Eduardo";
  player2.id = document.getElementById("player2_board");
  player2.playerTurn = false;

  document.getElementById("player1_board").value = player1.name;
  document.getElementById("player2_board").value = player2.name;
}

function setPlayerTurn() {
  let display = document.getElementById("turn_display");

  display.value = "";

  if (player1.playerTurn) {
    display.value = "Turno de " + player1.name;
  } else {
    display.value = "Turno de " + player2.name;
  }
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
  button.classList.add("activo");
}

function toggleBack() {
  const buttons = document.getElementsByClassName("activo");

  console.log(buttons);

  for (let element of buttons) {
    element.classList.toggle("rotateEffect");
    element.children[0].classList.toggle("opacity-100");
    element.classList.remove("activo");
  }
}

function storeCardValue(param) {
  if (isCardActive) {
    num2 = param;
    checkValue();
  } else {
    num1 = param;
    isCardActive = true;
  }
}

function checkValue() {
  if (num1 == num2) {
    if (player1.playerTurn) {
      player1.plusHit();
    } else {
      player2.plusHit();
    }
  } else {
    toggleBack();
    isCardActive = false;
    if (player1.playerTurn) {
      player1.playerTurn = false;
      player2.playerTurn = true;
    } else {
      player1.playerTurn = true;
      player2.playerTurn = false;
    }
  }

  num1 = undefined;
  num2 = undefined;

  document.getElementById("score_display_player1").value = player1.hits;
  document.getElementById("score_display_player2").value = player2.hits;
}
