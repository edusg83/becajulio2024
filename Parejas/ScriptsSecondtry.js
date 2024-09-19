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

const cards = Array.from(document.getElementsByClassName("card"));

const imageMap = new Map();

const cardSet = new Set();

const cardPairs = new Set();

let cardValue1 = null;

let cardValue2 = null;

let lock = false;

playerTurn = null;

for (let i = 0; i < imagenes.length; i++) {
  imageMap.set(imagenes[i], 0);
}

function storeCardValue(cardValue, idCard) {
  if (lock) {
    return;
  }

  const card = document.getElementById(idCard);
  cardSet.add(card);
  cardPairs.add(card);

  flipCard(idCard);

  if (cardValue1 == null) {
    cardValue1 = cardValue;
  } else if (cardValue2 == null) {
    lock = true;
    cardValue2 = cardValue;
    checkCards();
  }
}

function checkCards() {
  console.log(cardValue1, cardValue2);
  console.log(cardPairs);
  console.log(cardSet);
  if (cardValue1 == cardValue2) {
    setScore();
  } else {
    cardPairs.forEach((card) => {
      if (card.value == cardValue1 || card.value == cardValue2) {
        cardPairs.delete(card);
      }
    });
    setTimeout(flipBack, 1500);
    setTurn();
  }
  setTimeout(reset, 2000);
}

function setScore() {
  let currentPlayer = "score_display_player1";

  if (playerTurn == 2) {
    currentPlayer = "score_display_player2";
  }

  document.getElementById(currentPlayer).value =
    Number(document.getElementById(currentPlayer).value) + 1;
}

function setTurn() {
  if (playerTurn == 2 || playerTurn == null) {
    playerTurn = 1;
    document.getElementById("turn_display").value = "Turno del jugador 1!";
  } else {
    playerTurn = 2;
    document.getElementById("turn_display").value = "Turno del jugador 2!";
  }
}

function assignImages() {
  cards.forEach((card) => {
    let index = randomGenerator();

    while (imageMap.get(imagenes[index]) == 2) {
      index = randomGenerator();
    }

    card.children[0].style.backgroundImage = `url(${imagenes[index]})`;
    card.value = imagenes[index];

    let cont = imageMap.get(imagenes[index]) + 1;

    imageMap.set(imagenes[index], cont);
  });
}

function randomGenerator() {
  return Math.floor(Math.random() * imagenes.length);
}

function flipCard(idCard) {
  document.getElementById(idCard).classList.toggle("rotateEffect");
  document.getElementById(idCard).children[0].classList.toggle("opacity-100");
}

function flipBack() {
  cardSet.forEach((card) => {
    if (!cardPairs.has(card)) {
      card.classList.toggle("rotateEffect");
      card.children[0].classList.toggle("opacity-100");
    }
  });
}

function reset() {
  cardValue1 = null;
  cardValue2 = null;
  lock = false;
  cardSet.clear();
}
