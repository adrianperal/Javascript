let cards = [];
let sum = 0;
let won = false;
let isAlive = true;
let message = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
//let play = document.getElementById("sum-el");
let play = document.querySelector("#sum-el");

function getRandomCard() {
  let randCard = Math.floor(Math.random() * 11) + 1;
  return randCard;
}

function startGame() {
  cards = [];
  cardsEl.textContent = "Cards: ";
  cards.push(getRandomCard());
  cards.push(getRandomCard());
  renderGame();
}

function renderGame() {
  sum = 0;
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
  } else {
    message.textContent = "You're out of the game!";
    isAlive = false;
  }
}

function newCard() {
  let newCard = getRandomCard();
  cards.push(newCard);
  cardsEl.textContent = "Cards: ";
  renderGame();
}
