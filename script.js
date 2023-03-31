const words = ["elefante", "rinoceronte", "urso", "macaco"];
let word = "";
let tentatives = [];
let remainingTentatives = 5;

function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

const wordDisplay = document.getElementById("word");
const tentativeDisplay = document.getElementById("tentatives");
const letterInput = document.getElementById("letter");
const messageDisplay = document.getElementById("message");
const playAgainButton = document.getElementById("play-again");

function updateWordDisplay() {
  let wordArray = word.split("");
  let displayArray = wordArray.map(letter => tentatives.includes(letter) ? letter : "_");
  wordDisplay.textContent = displayArray.join(" ");
}

function updateTentativeDisplay() {
  tentativeDisplay.textContent = tentatives.join(", ");
}

function check() {
  let letter = letterInput.value.toLowerCase();
  
   if (!letter.match(/[a-z]/)) {
    messageDisplay.textContent = "Insira uma letra válida";
     return;
   }
  
  if (tentatives.includes(letter)) {
    messageDisplay.textContent = "Essa letra já foi usada!";
    return;
  }
  
  tentatives.push(letter);
  updateTentativeDisplay();
  
  if (word.includes(letter)) {
    updateWordDisplay();
    if (!wordDisplay.textContent.includes("_")) {
      messageDisplay.textContent = "Parabéns! Você venceu! 😎";
      playAgainButton.style.display = "block";
    }
  } else {
    remainingTentatives--;
    messageDisplay.textContent = ` Letra incorreta. Você ainda tem ${remainingTentatives} tentativas.`;
    if (remainingTentatives === 0) {
      messageDisplay.textContent = ` 😭 Você perdeu. A palavra era: ${word}`;
      playAgainButton.style.display = "block";
    }
  }
  letterInput.value = "";
}

function reset() {
  word = chooseWord();
  tentatives = [];
  remainingTentatives = 5;
  updateWordDisplay();
  updateTentativeDisplay();
  messageDisplay.textContent = "";
  playAgainButton.style.display = "none";
}
reset();
