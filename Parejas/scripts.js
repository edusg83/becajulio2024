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
  name: "",
  score: 0,
  iconContainerRow: 0,
  iconColumn: 0,
};

let player_2 = {
  name: "",
  score: 0,
  iconContainerRow: 0,
  iconColumn: 0,
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
    setIconOnHit(cardValue2);
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
  player_1.name = document.getElementById("player_name_1_input").value;
  player_2.name = document.getElementById("player_name_2_input").value;
  if (player_1.name == "" || player_2.name == "") {
    return;
  }
  dismissDialogue("modal_prompt");
  document.getElementById("player_name_1").value = player_1.name;
  document.getElementById("player_name_2").value = player_2.name;
  setTurn();
}

function showDialogue(param) {
  document.getElementById(param).classList.add("show");
  document.getElementById(param).style.display = "block";
}

function dismissDialogue(param) {
  document.getElementById(param).classList.remove("show");
  document.getElementById(param).style.display = "none";
}

function deleteInput() {
  document.getElementById("player_name_1_input").value = "";
  document.getElementById("player_name_2_input").value = "";
  document.getElementById("player_name_1_input").focus();
}

function setScore() {
  let currentPlayer = "score_display_player_1";
  let playerScore = player_1;

  if (playerTurn == 2) {
    currentPlayer = "score_display_player_2";
    playerScore = player_2;
  }

  playerScore.score++;

  let scoreValue = document.getElementById(currentPlayer).value;

  document.getElementById(currentPlayer).value = Number(scoreValue) + 1;

  if (cardCount == 8) {
    lock = true;
    setTimeout(gameEnd, 1500);
  }
}

function setIconOnHit(param) {
  let currentContainer = "icon_container_1";
  let currentPlayer = player_1;

  if (playerTurn == 2) {
    currentContainer = "icon_container_2";
    currentPlayer = player_2;
  }

  document.getElementsByClassName(currentContainer)[0].children[
    currentPlayer.iconContainerRow
  ].children[currentPlayer.iconColumn].style.backgroundImage = `url(${param})`;

  currentPlayer.iconColumn++;
  if (currentPlayer.iconColumn == 3 && currentPlayer.iconContainerRow == 0) {
    currentPlayer.iconContainerRow = 1;
    currentPlayer.iconColumn = 0;
  } else if (
    currentPlayer.iconColumn == 3 &&
    currentPlayer.iconContainerRow == 1
  ) {
    currentPlayer.iconContainerRow = 2;
    currentPlayer.iconColumn = 0;
  }
}

function resetScore() {
  player_1.iconColumn = 0;
  player_1.iconContainerRow = 0;
  player_2.iconColumn = 0;
  player_2.iconContainerRow = 0;
  document.getElementById("score_display_player_1").value = 0;
  document.getElementById("score_display_player_2").value = 0;
  Array.from(document.getElementsByClassName("board")).forEach((board) => {
    Array.from(board.children).forEach((row) => {
      Array.from(row.children).forEach((column) => {
        column.style.backgroundImage = "";
      });
    });
  });
}

function gameEnd() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.8 },
  });

  let winner = "Felicidades! Has ganado " + player_1.name;

  if (player_1.score < player_2.score) {
    winner = "Felicidades! Has ganado " + player_2.name;
  } else if (player_1.score == player_2.score) {
    winner = "Empate! No ha ganado nadie! Tampoco ha perdido nadie!";
  }

  document.getElementById("victory_text").innerHTML = winner;

  showDialogue("modal_victory");

  //TODO Poner mensaje de victoria mediante modal
}

function setTurn() {
  if (playerTurn == 2 || playerTurn == null) {
    playerTurn = 1;
    document.getElementById("turn_display").value =
      "Turno de " + player_1.name + "!";
    document.getElementById("turn_display").style.backgroundColor = "#A8DADC";
  } else {
    playerTurn = 2;
    document.getElementById("turn_display").value =
      "Turno de " + player_2.name + "!";
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
  showDialogue("modal_prompt");
}

//Dar estilo a modal, configuar victoria de jugador, dar opcion de volver a jugar
