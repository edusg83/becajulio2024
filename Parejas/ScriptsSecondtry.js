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

let cardValue1 = null;

let cardValue2 = null;

let lock = false;

function storeCardValue(cardValue, idCard) {
  if (lock) {
    return;
  }

  const card = document.getElementById(id);

  if (cardValue1 == null) {
    cardValue1 = cardValue;
  } else if (cardValue2 == null) {
    cardValue2 = cardValue;
    lock = true;
  }
}
