
// Variables globales
let players = [];
let currentPlayer = 0;
let cards = [];
let flippedCards = [];
let playerScores = [0, 0];
let cardPairs = 4; // Número de pares de cartas

// Inicializa una nueva partida
document.getElementById("newGameBtn").addEventListener("click", function() {
    startNewGame();
});

function startNewGame() {
    // Solicitar nombres de los jugadores
    players[0] = prompt("Nombre del Jugador 1:");
    players[1] = prompt("Nombre del Jugador 2:");
    
    // Actualizar la UI con los nombres
    document.getElementById("player1").innerText = `Jugador 1: ${players[0]} (Puntos: ${playerScores[0]})`;
    document.getElementById("player2").innerText = `Jugador 2: ${players[1]} (Puntos: ${playerScores[1]})`;
    
    document.getElementById("turnIndicator").innerText = `Turno de: ${players[currentPlayer]}`;
    
    // Crear el tablero
    generateGameBoard();
}

function generateGameBoard() {
    // Crear un array con las cartas duplicadas (pares)
    const cardValues = [];
    for (let i = 1; i <= cardPairs; i++) {
        cardValues.push(i, i);
    }

    // Barajar las cartas
    cardValues.sort(() => 0.5 - Math.random());

    // Crear las cartas en el DOM
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';
    cardValues.forEach((value, index) => {
        const card = document.createElement("div");
        card.classList.add("card", "col-2");
        card.dataset.value = value;

        const cardImg = document.createElement("img");
        cardImg.src = `img${value}.png`;  // Imagen de ejemplo

        card.appendChild(cardImg);
        gameBoard.appendChild(card);

        // Añadir evento para girar la carta
        card.addEventListener("click", function() {
            flipCard(card);
        });
    });
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
        card.classList.add("flipped");
        flippedCards.push(card);
        
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        // Acierto
        setTimeout(() => {
            card1.classList.add("hidden");
            card2.classList.add("hidden");

            playerScores[currentPlayer]++;
            updatePlayerScores();

            checkGameEnd();

            flippedCards = [];
        }, 500);
    } else {
        // No acierto, ocultar de nuevo las cartas
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            
            // Cambiar el turno
            currentPlayer = (currentPlayer === 0) ? 1 : 0;
            document.getElementById("turnIndicator").innerText = `Turno de: ${players[currentPlayer]}`;

            flippedCards = [];
        }, 1500);
    }
}

function updatePlayerScores() {
    document.getElementById("player1").innerText = `Jugador 1: ${players[0]} (Puntos: ${playerScores[0]})`;
    document.getElementById("player2").innerText = `Jugador 2: ${players[1]} (Puntos: ${playerScores[1]})`;
}

function resetPlayerScores() {
    playerScores[0] = 0;
    playerScores[1] = 0;
}

function checkGameEnd() {
    const hiddenCards = document.querySelectorAll(".hidden").length;
    if (hiddenCards === cardPairs * 2) {
        let winner = playerScores[0] === playerScores[1] ? 'Empate' :
            playerScores[0] > playerScores[1] ? players[0] : players[1];
        document.getElementById("winner").innerText = `¡El juego ha terminado! Ganador: ${winner}`;
        resetPlayerScores();
    }
}
