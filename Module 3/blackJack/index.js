let cards = [];
let sum = 0;
let won = false;
let isAlive = false;
let message = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
//let play = document.getElementById("sum-el");
let play = document.querySelector("#sum-el");
//let userName = prompt("Welcome!\nWhat is your name?");
let player = {
  name: "Adri",
  chips: 100,
};
let playerEl = document.querySelector("#player-el");

function getRandomCard() {
  let randCard = Math.floor(Math.random() * 13) + 1;
  if (randCard === 1) {
    return 11;
  } else if (randCard > 10) {
    return 10;
  } else {
    return randCard;
  }
}

function startGame() {
  cards = [];
  cardsEl.textContent = "Cards: ";
  play.textContent = "Sum: ";
  cards.push(getRandomCard());
  cards.push(getRandomCard());
  if (player.chips > 0) {
    isAlive = true;
    player.chips -= 10;
    renderGame();
  } else {
    cardsEl.textContent = "";
    player.textContent = "";
    play.textContent = "";
    playerEl.textContent = "";
    message.textContent = "Out of chips ... :(";
  }
}

function renderGame() {
  sum = 0;
  cardsEl.textContent = "Cards: ";
  playerEl.textContent = player.name + ": $" + player.chips;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
    sum += cards[i];
  }
  play.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message.textContent = "Wohoo! You've got Blackjack!";
    won = true;
    player.chips += 50;
    playerEl.textContent = player.name + ": $" + player.chips;
  } else {
    message.textContent = "You're out of the game!";
    isAlive = false;
  }
}

function newCard() {
  if (isAlive && !won) {
    let newCard = getRandomCard();
    cards.push(newCard);
    renderGame();
  }
}
