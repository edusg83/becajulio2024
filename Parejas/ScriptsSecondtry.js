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

const valueMap = new Map();

const cardSet = new Set();

let cardValue1 = null;

let cardValue2 = null;

let lock = false;

for (let i = 0; i < imagenes.length; i++) {
  imageMap.set(imagenes[i], 0);
  valueMap.set(i, 0);
}

function storeCardValue(cardValue, idCard) {
  if (lock) {
    return;
  }

  const card = document.getElementById(idCard);

  cardSet.add(card);

  if (cardValue1 == null) {
    cardValue1 = cardValue;
  } else if (cardValue2 == null) {
    cardValue2 = cardValue;
    lock = true;
  }
}

function checkCards() {
  if (cardValue1 == cardValue2) {
    //Action..
  } else {
    //Action..
  }

  cardArray = null;
}

function assignValue() {
  cards.forEach((card) => {
    let index = randomGenerator();

    while (valueMap.get(index) == 2) {
      index = randomGenerator();
    }

    card.value = index;

    let cont = valueMap.get(index) + 1;

    valueMap.set(index, cont);
  });
}

function assignImage() {
  cards.forEach((card) => {
    let index = randomGenerator();

    while (imageMap.get(imagenes[index]) == 2) {
      index = randomGenerator();
    }

    card.children[0].style.backgroundImage = `url(${imagenes[index]})`;

    let cont = imageMap.get(imagenes[index]) + 1;

    imageMap.set(imagenes[index], cont);
  });
}

function randomGenerator() {
  return Math.floor(Math.random() * imagenes.length);
}

function flipCard() {}

function flipBack() {
  cardSet.forEach((card) => {
    card.classList.remove("rotateEffect");
    card.children[0].remove("p-100");
  });

  reset();
}

function reset() {
  cardValue1 = null;
  cardValue1 = null;
  lock = false;
}
