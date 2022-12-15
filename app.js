const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const startGame = document.getElementById("start-game");
const newCard = document.getElementById("new-card");
const newGame = document.getElementById("new-game");

let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let message = "";
let hasStartClicked = false;

function getRandomNum() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  return randomNum;
}

startGame.addEventListener("click", function () {
  if (hasStartClicked === false) {
    isAlive = true;
    let randNum1 = getRandomNum();
    let randNum2 = getRandomNum();
    cards = [randNum1, randNum2];
    sum = randNum1 + randNum2;
    hasStartClicked = true;
    renderGame();
  }
});

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackjack = true;
    message = "You've got Blackjack!";
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }
  messageEl.textContent = message;
}

newCard.addEventListener("click", function () {
  if (hasBlackjack === false && isAlive === true) {
    let card = getRandomNum();
    cards.push(card);
    sum += card;
    renderGame();
  }
});

newGame.addEventListener("click", function () {
  cards = [];
  sum = 0;
  isAlive = false;
  hasBlackjack = false;
  hasStartClicked = false;
  messageEl.textContent = "Want to play a round?";
  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: ";
});
