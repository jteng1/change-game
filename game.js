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

// Algorithm for optimal solution
function optimalChange(n) {
  let numberOfTwenties = 0;
  let numberOfTens = 0;
  let numberOfFives = 0;
  let numberOfOnes = 0;
  while (n > 0) {
    // If total is greater than 20
    if (n >= 20) {
      if (n % 20 === 0) {
        numberOfTwenties = n / 20;
        n = 0;
      } else {
        numberOfTwenties = Math.floor(n / 20);
        n = n % 20;
      }
    }
    // If total is greater or equal to 10
    if (n >= 10) {
      if (n % 10 === 0) {
        numberOfTens = n / 10;
        n = 0;
      } else {
        numberOfTens = Math.floor(n / 10);
        n = n % 10;
      }
    }
    // If total is greater or equal to 5
    if (n >= 5) {
      if (n % 5 === 0) {
        numberOfFives = n / 5;
        n = 0;
      } else {
        numberOfFives = Math.floor(n / 5);
        n = n % 5;
      }
    }
    // If total is greater or equal to 1
    if (n >= 1) {
      if (n % 1 === 0) {
        numberOfOnes = n / 1;
        n = 0;
      } else {
        numberOfOnes = Math.floor(n / 1);
        n = n % 1;
      }
    }
  }
  console.log(numberOfTwenties, numberOfTens, numberOfFives, numberOfOnes);
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
