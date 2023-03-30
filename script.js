const words = ["elefante", "rinoceronte", "urso", "macaco"];
let word = "";
let guesses = [];
let remainingGuesses = 6;

const wordDisplay = document.getElementById("word");
const guessesDisplay = document.getElementById("guesses");
const letterInput = document.getElementById("letter");
const messageDisplay = document.getElementById("message");
const playAgainButton = document.getElementById("play-again");

function chooseWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function updateWordDisplay() {
  let wordArray = word.split("");
  let displayArray = wordArray.map(letter => guesses.includes(letter) ? letter : "_");
  wordDisplay.textContent = displayArray.join(" ");
}

function updateGuessesDisplay() {
  guessesDisplay.textContent = guesses.join(", ");
}

function guess() {
  let letter = letterInput.value.toLowerCase();
  
  if (!letter.match(/[a-z]/)) {
    messageDisplay.textContent = "Por favor, insira uma letra válida.";
    return;
  }
  
  if (guesses.includes(letter)) {
    messageDisplay.textContent = "Essa letra já foi usada. Tente outra.";
    return;
  }
  
  guesses.push(letter);
  updateGuessesDisplay();
  
  if (word.includes(letter)) {
    updateWordDisplay();
    if (!wordDisplay.textContent.includes("_")) {
      messageDisplay.textContent = "Parabéns! Você venceu!";
      playAgainButton.style.display = "block";
    }
  } else {
    remainingGuesses--;
    messageDisplay.textContent = `Letra incorreta. Você tem ${remainingGuesses} tentativas restantes.`;
    if (remainingGuesses === 0) {
      messageDisplay.textContent = `Você perdeu. A palavra era ${word}.`;
      playAgainButton.style.display = "block";
    }
  }
  
  letterInput.value = "";
}

function reset() {
  word = chooseWord();
  guesses = [];
  remainingGuesses = 6;
  updateWordDisplay();
  updateGuessesDisplay();
  messageDisplay.textContent = "";
  playAgainButton.style.display = "none";
}

reset();
