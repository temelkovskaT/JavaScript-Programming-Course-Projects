// // blackjack rules
// // <21 is ok, you're still in game
// // 21 is WIN
// // >21 is LOSE

let min = 2;
let max = 12;

let hasBlackJack = false;
let isAlive = false;

let player = {
  name: "Daisy",
  chips: 145,
};

let cards = [];
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");
let newCardBtn = document.getElementById("newCard");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + " $" + player.chips;

function randomise(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
 
function startGame() {
  isAlive = true;

  newCardBtn.disabled = false;
  newCardBtn.style.opacity = "1";

  let firstCard = randomise(min, max);
  let secondCard = randomise(min, max);
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];

  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent += sum;

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congratulations! You've got Blackjack'!!!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = randomise(min, max);
    cards.push(card);
    cardsEl.textContent = "Cards: " + cards;

    sum += card;
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "Congratulations! You've got Blackjack'!!!";
      hasBlackJack = true;
      newCardBtn.disabled = true;
      newCardBtn.style.opacity = "0.2";
    } else {
      message = "You're out of the game!";
      newCardBtn.disabled = true;
      newCardBtn.style.opacity = "0.2";
      isAlive = false;
    }
  }

  messageEl.textContent = message;
}
