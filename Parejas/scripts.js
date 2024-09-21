const imagenes = [
  "resources/Squirtle.jpg",
  "resources/Pikachu.jpg",
  "resources/Eevee.jpg",
  "resources/Togepi.jpg",
  "resources/Jigglypuff.jpg",
  "resources/Bulbasaur.jpg",
  "resources/Psyduck.jpg",
  "resources/Charmander.jpg",
];

const cards = Array.from(document.getElementsByClassName("card"));

const imageMap = new Map();

const cardSet = new Set();

const cardPairs = new Set();

let cardValue1 = null;

let cardValue2 = null;

let lock = false;

let isActive = false;

let playerTurn = null;

let player_1 = {
  playerName1: "",
  score: 0,
};

let player_2 = {
  playerName2: "",
  score: 0,
};

let cardCount = 0;

for (let i = 0; i < imagenes.length; i++) {
  imageMap.set(imagenes[i], 0);
}

function storeCardValue(idCard) {
  const card = document.getElementById(idCard);

  if (lock || card.classList.contains("rotateEffect")) {
    return;
  }

  cardSet.add(card);

  if (cardSet.values().next().id == card.id && isActive) {
    cardPairs.delete(card);
    flipBack();
    reset();
    return;
  }

  cardPairs.add(card);

  flipCard(card.id);

  if (cardValue1 == null) {
    cardValue1 = card.value;
    isActive = true;
  } else if (cardValue2 == null) {
    lock = true;
    cardValue2 = card.value;
    checkCards();
  }
}

function checkCards() {
  if (cardValue1 == cardValue2) {
    cardCount++;
    setScore();
  } else {
    cardPairs.forEach((card) => {
      if (card.value == cardValue1 || card.value == cardValue2) {
        cardPairs.delete(card);
      }
    });
    setTimeout(flipBack, 1500);
    setTimeout(setTurn, 1600);
  }
  setTimeout(reset, 1600);
}

function setName() {
  player_1.playerName1 = document.getElementById("player_name_1_input").value;
  player_2.playerName2 = document.getElementById("player_name_2_input").value;
  if (player_1.playerName1 == "" || player_2.playerName2 == "") {
    return;
  }
  document.getElementById("modal_prompt").classList.remove("show");
  document.getElementById("modal_prompt").style.display = "none";
  document.getElementById("player_name_1").value = player_1.playerName1;
  document.getElementById("player_name_2").value = player_2.playerName2;
  setTurn();
}

function showDialogue() {
  document.getElementById("modal_prompt").classList.add("show");
  document.getElementById("modal_prompt").style.display = "block";
}

function deleteInput() {
  document.getElementById("player_name_1_input").value = "";
  document.getElementById("player_name_2_input").value = "";
  document.getElementById("player_name_1_input").focus();
}

function setScore() {
  let currentPlayer = "score_display_player_1";
  let scorePlayer = player_1;

  if (playerTurn == 2) {
    currentPlayer = "score_display_player_2";
    scorePlayer = player_2;
  }

  scorePlayer.score++;

  let scoreValue = document.getElementById(currentPlayer).value;

  document.getElementById(currentPlayer).value = Number(scoreValue) + 1;

  if (cardCount == 8) {
    lock = true;
    setTimeout(gameEnd, 1500);
    if (player_1.score > player_2.score) {
      console.warn("TEST1");
    } else if (player_1.score < player_2.score) {
      console.warn("TEST2");
    } else {
      console.warn("TEST3");
    }
  }
}

function resetScore() {
  document.getElementById("score_display_player_1").value = 0;
  document.getElementById("score_display_player_2").value = 0;
}

function gameEnd() {
  console.warn("BEGIN");
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.8 },
  });
  console.warn("END");
}

function setTurn() {
  if (playerTurn == 2 || playerTurn == null) {
    playerTurn = 1;
    document.getElementById("turn_display").value =
      "Turno de " + player_1.playerName1 + "!";
    document.getElementById("turn_display").style.backgroundColor = "#A8DADC";
  } else {
    playerTurn = 2;
    document.getElementById("turn_display").value =
      "Turno de " + player_2.playerName2 + "!";
    document.getElementById("turn_display").style.backgroundColor = "#E76F51";
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

function flipAll() {
  cards.forEach((card) => {
    if (card.classList.contains("rotateEffect")) {
      card.classList.toggle("rotateEffect");
      card.children[0].classList.toggle("opacity-100");
    }
  });
}

function reset() {
  cardValue1 = null;
  cardValue2 = null;
  cardSet.clear();
  lock = false;
}

function newGame() {
  playerTurn = null;
  cardPairs.clear();
  reset();
  flipAll();
  resetScore();
  imageMap.clear();
  for (let i = 0; i < imagenes.length; i++) {
    imageMap.set(imagenes[i], 0);
  }
  cards.forEach((card) => {
    card.children[0].style.backgroundImage = "";
    card.value = "";
  });
  assignImages();
  showDialogue();
}

//TODO ASIGNAR ICONOS DE ACIERTO
//TODO AÑADIR EFFECTO DE DERROTA Y VICTORIA, AÑADIR CONDICION DE VICTORIA
