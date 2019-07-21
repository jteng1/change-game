// Display
const totalDisplay = document.getElementById('total-display');
const imageArea = document.getElementById('image-area');
const resultArea = document.getElementById('result-area');

// Money buttons
const twentyButton = document.getElementById('twenty');
const tenButton = document.getElementById('ten');
const fiveButton = document.getElementById('five');
const oneButton = document.getElementById('one');
const quarterButton = document.getElementById('quarter');
const dimeButton = document.getElementById('dime');
const nickelButton = document.getElementById('nickel');
const pennyButton = document.getElementById('penny');

// Game button
const newGameButton = document.getElementById('new-game-button');

// Initialize global count variables
let total;
let playerCount = 0;

// Functions for game
function addImage(url) {
  imageArea.innerHTML += `<img class='card img' src=${url}>`;
}
function checkWin() {
  if (playerCount.toFixed(2) === total) {
    resultArea.innerHTML = `Your total is $${playerCount.toFixed(
      2
    )}, good job!`;
  } else if (playerCount > total) {
    resultArea.innerHTML = `Your total is $${playerCount.toFixed(
      2
    )}! Hi De hits you with a stick, ouch!`;
  }
}

function resetGame() {
  total = (Math.random() * 300).toFixed(2);
  playerCount = 0;
  imageArea.innerHTML = '';
  totalDisplay.innerHTML = `Please give change for $${total}`;
  resultArea.innerHTML = '';
}

function addValue(value, url) {
  playerCount += value;
  checkWin();
  addImage(url);
}

// Adding event listeners for buttons
newGameButton.addEventListener('click', () => resetGame());

twentyButton.addEventListener('click', () =>
  addValue(20, './images/twentyDollarBill.png')
);

tenButton.addEventListener('click', () =>
  addValue(10, './images/tenDollarBill.png')
);

fiveButton.addEventListener('click', () =>
  addValue(5, './images/fiveDollarBill.png')
);

oneButton.addEventListener('click', () =>
  addValue(1, './images/oneDollarBill.png')
);

quarterButton.addEventListener('click', () =>
  addValue(0.25, './images/quarterCoin.png')
);

dimeButton.addEventListener('click', () =>
  addValue(0.1, './images/dimeCoin.png')
);

nickelButton.addEventListener('click', () =>
  addValue(0.05, './images/nickelCoin.png')
);

pennyButton.addEventListener('click', () =>
  addValue(0.01, './images/pennyCoin.png')
);
