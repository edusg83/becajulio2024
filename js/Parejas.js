const cards = [
  { id: 'luffy1', imgFront: '../../becajulio2024/images/luffy1.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'luffy2', imgFront: '../../becajulio2024/images/luffy1.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'zoro1', imgFront: '../../becajulio2024/images/zoro.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'zoro2', imgFront: '../../becajulio2024/images/zoro.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'nami1', imgFront: '../../becajulio2024/images/nami.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'nami2', imgFront: '../../becajulio2024/images/nami.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'ussop1', imgFront: '../../becajulio2024/images/ussop.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'ussop2', imgFront: '../../becajulio2024/images/ussop.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'sanji1', imgFront: '../../becajulio2024/images/sanji.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'sanji2', imgFront: '../../becajulio2024/images/sanji.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'chopper1', imgFront: '../../becajulio2024/images/chopper.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'chopper2', imgFront: '../../becajulio2024/images/chopper.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'robin1', imgFront: '../../becajulio2024/images/robin.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'robin2', imgFront: '../../becajulio2024/images/robin.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'franky1', imgFront: '../../becajulio2024/images/franky.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'franky2', imgFront: '../../becajulio2024/images/franky.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'brook1', imgFront: '../../becajulio2024/images/brook.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'brook2', imgFront: '../../becajulio2024/images/brook.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'jinbe1', imgFront: '../../becajulio2024/images/jinbe.jpg', imgBack: '../../becajulio2024/images/back.jpg' },
  { id: 'jinbe2', imgFront: '../../becajulio2024/images/jinbe.jpg', imgBack: '../../becajulio2024/images/back.jpg' }
];

const maxPoints = 10;
let flippedCards = [];
let resolvedCards = [];
let currentPlayer = 1;
let player1Points = 0;
let player2Points = 0;
let totalPoints = 0;

//Mostrar modal
document.addEventListener('DOMContentLoaded', function () {
  startGame();
});

function startGame() {
  var myModal = new bootstrap.Modal(document.getElementById('modalSetPlayers'), {
    backdrop: 'static',
    keyboard: false
  });
  myModal.show();
  document.getElementById('playersForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let player1 = document.getElementById('inputPlayer1Name').value;
    let player2 = document.getElementById('inputPlayer2Name').value;
    document.getElementById('playerName1').innerHTML = player1;
    document.getElementById('playerName2').innerHTML = player2;
    document.getElementById('playerPoints1').innerHTML = player1Points;
    document.getElementById('playerPoints2').innerHTML = player2Points;
    console.log(player1, player2);

    myModal.hide();
  });
}

function playerTurn(element) {
  if (flippedCards.length < 2) {
    changeTurnVisual();
    turnUp(element);
  }
}

function changeTurnVisual() {
  document.getElementById('playerTurn').innerHTML = "Turno del jugador: " + currentPlayer;
  if (currentPlayer == 1) {
    document.getElementById('player1Card').classList.add('player1turn');
    document.getElementById('player2Card').classList.remove('player2turn');
  } else {
    document.getElementById('player1Card').classList.remove('player1turn');
    document.getElementById('player2Card').classList.add('player2turn');
  }
}


function turnUp(element) {
  if (flippedCards.length < 2) {
    checkFlippedAndPush(element);
    if(currentPlayer == 1){
      element.classList.add('player1turn');
    }else{
      element.classList.add('player2turn');
    }
  }

  if (flippedCards.length === 2) {
    setTimeout(() => {
      let points = compareCards();
      playerTurnAction(points);
    }, 500);
  }
}

function checkFlippedAndPush(element) {
  if (element.classList.contains('flipped')) {
    return;
  }

  if (!element.classList.contains('show-back')) {
    element.classList.add('show-back');
    element.classList.add('flipped');
    flippedCards.push(element.id.slice(0, -1));
    console.log(flippedCards);
  }
}

function compareCards() {
  let points = 0;
  if (flippedCards[0] === flippedCards[1]) {
    console.log("Son iguales");
    disabledCards();
    addCardsToResolved();
    points = 1;
   
  } else {
    console.log("no son iguales");
    resetCardsFlipped();
  }
  console.log(flippedCards);
  flippedCards = [];
  return points;
}

function playerTurnAction(points) {
  if (points === 0) {
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    changeTurnVisual();

  } else {
    if (currentPlayer === 1) {
      player1Points++;
      totalPoints++;
      document.getElementById('playerPoints1').innerHTML = player1Points;
    } else {
      player2Points++;
      totalPoints++;
      document.getElementById('playerPoints2').innerHTML = player2Points;
    }
  }
  console.log(totalPoints);

  if (totalPoints == maxPoints) {
    showWinnerModal();
  }
}



function resetCardsFlipped() {
  const cards = document.querySelectorAll('.flipped');
  const player = currentPlayer; 
  cards.forEach(card => {
    if (!card.classList.contains('blocked')) {
      setTimeout(() => {
        card.classList.remove('show-back', 'flipped');
        if(player == 1){
          card.classList.remove('player1turn');
          console.log(player); 
        }else{
          card.classList.remove('player2turn');
          console.log(player); 
        }
      }, 500);
    }

  });
}

function disabledCards() {
  let cards = document.querySelectorAll('.flipped');
  console.log(cards);
  cards.forEach(card => {
    card.style.pointerEvents = 'none';
    card.classList.add('blocked');
  });

}

function addCardsToResolved() {
  resolvedCards.push(flippedCards[0]);
  resolvedCards.push(flippedCards[1]);
  console.log(resolvedCards);
  flippedCards = [];
  console.log(flippedCards);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateCardHTML(cards) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  cards.forEach(card => {
    const cardHTML = `
            <div class="col-2 card p-0" id="${card.id}" onclick="playerTurn(this)">
             <div class="card-body">
              <img src="${card.imgFront}" class="img-fluid frontside" alt="">
              <img src="${card.imgBack}" class="img-fluid backside" alt="">
              </div>
            </div>
          `;
    cardContainer.innerHTML += cardHTML;
  });
}

const shuffledCards = shuffle(cards);
generateCardHTML(shuffledCards);

function showWinnerModal() {
  //Mostrar modal
  let winnerModal = new bootstrap.Modal(document.getElementById('modalWinner'), {
    backdrop: 'static',
    keyboard: false
  });
  winnerModal.show();
  if (player1Points > player2Points) {
    document.getElementById('winner').innerHTML = player1;
    document.getElementById('winnerPoints').innerHTML = player1Points;
  } else if (player1Points < player2Points) {
    document.getElementById('winner').innerHTML = player2;
    document.getElementById('winnerPoints').innerHTML = player2Points;
  } else {
    document.getElementById('winner').innerHTML = "Empate!";
  }

  myModal.hide();

}

function resetGame() {
  generateCardHTML(shuffledCards);
  flippedCards = [];
  resolvedCards = [];
  currentPlayer = 1;
  player1Points = 0;
  player2Points = 0;
  totalPoints = 0;
  startGame();
  console.log(player1Points, player2Points);

}



