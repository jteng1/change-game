// Display
const totalDisplay = document.getElementById('total-display');
const imageArea = document.getElementById('image-area');
const resultArea = document.getElementById('result-area');
const optimalSolutionArea = document.getElementById('optimal-solution-area');
const solutionCheckArea = document.getElementById('solution-check-area');
const playerScoreArea = document.getElementById('player-score-area');

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
const solutionButton = document.getElementById('solution-button');

// Initialize global count variables
let total;
let playerCount = 0;
let playerTotalItems = 0;
let optimalTotal = 0;
let playerSuccess = 0;
let playerFailure = 0;

// Functions for game
const addImage = url => {
  imageArea.innerHTML += `<img class='card img' src=${url}>`;
};

const addOptimalSolutionImage = url => {
  optimalSolutionArea.innerHTML += `<img class='card img' src=${url}>`;
};

const checkWin = url => {
  if (playerCount.toFixed(2) === total) {
    resultArea.innerHTML = `Your total is $${playerCount.toFixed(
      2
    )}, good job!`;
    checkOptimal();
  } else if (playerCount > total) {
    resultArea.innerHTML = `Your total is $${playerCount.toFixed(
      2
    )}! You gave away too much money!!!`;
    checkOptimal();
  }
};

const checkOptimal = () => {
  if (playerTotalItems === optimalTotal) {
    playerSuccess++;
    solutionCheckArea.innerHTML += `<h1 class="alert alert-success" id="alert">OPTIMAL SOLUTION, GREAT WORK!</h1>`;
    playerScoreArea.innerHTML = `Success: ${playerSuccess} Fail: ${playerFailure}`;
  } else {
    playerFailure++;
    solutionCheckArea.innerHTML += `<h1 class="alert alert-danger" id="alert">NOT OPTIMAL SOLUTION, CLICK 'OPTIMAL SOLUTION' TO CHECK</h1>`;
    playerScoreArea.innerHTML = `Success: ${playerSuccess} Fail: ${playerFailure}`;
  }
};

const getOptimalSolution = () => {
  let {
    numberOfTwenties,
    numberOfTens,
    numberOfFives,
    numberOfOnes,
    numberOfQuarters,
    numberOfDimes,
    numberOfNickels,
    numberOfPennies
  } = optimalChange(total);

  for (let i = 0; i < numberOfTwenties; i++) {
    addOptimalSolutionImage('./images/twentyDollarBill.png');
  }
  for (let i = 0; i < numberOfTens; i++) {
    addOptimalSolutionImage('./images/tenDollarBill.png');
  }
  for (let i = 0; i < numberOfFives; i++) {
    addOptimalSolutionImage('./images/fiveDollarBill.png');
  }
  for (let i = 0; i < numberOfOnes; i++) {
    addOptimalSolutionImage('./images/oneDollarBill.png');
  }
  for (let i = 0; i < numberOfQuarters; i++) {
    addOptimalSolutionImage('./images/quarterCoin.png');
  }
  for (let i = 0; i < numberOfDimes; i++) {
    addOptimalSolutionImage('./images/dimeCoin.png');
  }
  for (let i = 0; i < numberOfNickels; i++) {
    addOptimalSolutionImage('./images/nickelCoin.png');
  }
  for (let i = 0; i < numberOfPennies; i++) {
    addOptimalSolutionImage('./images/pennyCoin.png');
  }
};

const resetGame = () => {
  total = (Math.random() * 300).toFixed(2);
  playerCount = 0;
  playerTotalItems = 0;
  optimalTotal = 0;
  imageArea.innerHTML = '';
  totalDisplay.innerHTML = `Please give change for <br />$${total}`;
  resultArea.innerHTML = '';
  optimalSolutionArea.innerHTML = '';
  solutionCheckArea.innerHTML = '';
  optimalTotal = optimalChange(total).optimalTotal;
};

const addValue = (value, url) => {
  playerCount += value;
  addImage(url);
  checkWin();
};

// Algorithm for optimal solution
const optimalChange = n => {
  let numberOfTwenties = 0;
  let numberOfTens = 0;
  let numberOfFives = 0;
  let numberOfOnes = 0;
  let numberOfQuarters = 0;
  let numberOfDimes = 0;
  let numberOfNickels = 0;
  let numberOfPennies = 0;

  while (n > 0) {
    // If total is greater than 20
    if (n >= 20) {
      if (n % 20 === 0) {
        numberOfTwenties = n / 20;
        n = 0;
      } else {
        numberOfTwenties = Math.floor(n / 20);
        n = (n % 20).toFixed(2);
      }
    }
    // If total is greater or equal to 10
    if (n >= 10) {
      if (n % 10 === 0) {
        numberOfTens = n / 10;
        n = 0;
      } else {
        numberOfTens = Math.floor(n / 10);
        n = (n % 10).toFixed(2);
      }
    }
    // If total is greater or equal to 5
    if (n >= 5) {
      if (n % 5 === 0) {
        numberOfFives = n / 5;
        n = 0;
      } else {
        numberOfFives = Math.floor(n / 5);
        n = (n % 5).toFixed(2);
      }
    }
    // If total is greater or equal to 1
    if (n >= 1) {
      if (n % 1 === 0) {
        numberOfOnes = n / 1;
        n = 0;
      } else {
        numberOfOnes = Math.floor(n / 1);
        n = (n % 1).toFixed(2);
      }
    }
    // If total is greater or equal to 0.25 quarter
    if (n >= 0.25) {
      if (n % 0.25 === 0) {
        numberOfQuarters = n / 0.25;
        n = 0;
      } else {
        numberOfQuarters = Math.floor(n / 0.25);
        n = (n % 0.25).toFixed(2);
      }
    }
    // If total is greater or equal to 0.10 dime
    if (n >= 0.1) {
      if (n % 0.1 === 0) {
        numberOfDimes = n / 0.1;
        n = 0;
      } else {
        numberOfDimes = Math.floor(n / 0.1);
        n = (n % 0.1).toFixed(2);
      }
    }
    // If total is greater or equal to 0.05 nickel
    if (n >= 0.05) {
      if (n % 0.05 === 0) {
        numberOfNickels = n / 0.05;
        n = 0;
      } else {
        numberOfNickels = Math.floor(n / 0.05);
        n = (n % 0.05).toFixed(2);
      }
    }
    // If total is greater or equal to 0.01 penny
    if (n >= 0.01) {
      numberOfPennies = n / 0.01;
      n = 0;
    }
  }

  let optimalTotal =
    numberOfTwenties +
    numberOfTens +
    numberOfFives +
    numberOfOnes +
    numberOfQuarters +
    numberOfDimes +
    numberOfNickels +
    numberOfPennies;

  return {
    numberOfTwenties,
    numberOfTens,
    numberOfFives,
    numberOfOnes,
    numberOfQuarters,
    numberOfDimes,
    numberOfNickels,
    numberOfPennies,
    optimalTotal
  };
};

// Adding event listeners for buttons
newGameButton.addEventListener('click', () => resetGame());

solutionButton.addEventListener('click', () => getOptimalSolution());

twentyButton.addEventListener('click', () => {
  playerTotalItems += 1;
  addValue(20, './images/twentyDollarBill.png');
});

tenButton.addEventListener('click', () => {
  playerTotalItems += 1;
  addValue(10, './images/tenDollarBill.png');
});

fiveButton.addEventListener('click', () => {
  playerTotalItems += 1;
  addValue(5, './images/fiveDollarBill.png');
});

oneButton.addEventListener('click', () => {
  playerTotalItems += 1;
  addValue(1, './images/oneDollarBill.png');
});

quarterButton.addEventListener('click', () => {
  playerTotalItems += 1;
  addValue(0.25, './images/quarterCoin.png');
});

dimeButton.addEventListener('click', () => {
  playerTotalItems += 1;
  addValue(0.1, './images/dimeCoin.png');
});

nickelButton.addEventListener('click', () => {
  playerTotalItems += 1;
  addValue(0.05, './images/nickelCoin.png');
});

pennyButton.addEventListener('click', () => {
  playerTotalItems += 1;
  addValue(0.01, './images/pennyCoin.png');
});
