// -------------------------------------------------------
// FLASHCARD ENGINE (LOGIC ONLY)
// -------------------------------------------------------

let currentCategory = "ict10";
let currentIndex = 0;

let correct = 0;
let incorrect = 0;


// ------------------------------
// Change category
// ------------------------------
function changeCategory() {
  currentCategory = document.getElementById("category-select").value;
  currentIndex = 0;
  loadCard();
}


// ------------------------------
// Load card
// ------------------------------
function loadCard() {
  let deck = cards[currentCategory];
  let card = deck[currentIndex];

  // Write card data to UI
  document.getElementById("category").innerText = card.category;
  document.getElementById("question").innerText = card.question;
  document.getElementById("hint").innerText = card.hint;
  document.getElementById("answer").innerText = card.answer;

  // ✅ Reset using VISIBILITY (not display)
  document.getElementById("hint").style.visibility = "hidden";
  document.getElementById("answer").style.visibility = "hidden";

  // Update image
  document.getElementById("card-image").src = card.image;

  updateScore();
}


// ------------------------------
// Buttons
// ------------------------------
function showHint() {
  document.getElementById("hint").style.visibility = "visible";
}

function revealAnswer() {
  document.getElementById("answer").style.visibility = "visible";
}

function markCorrect() {
  correct++;
  nextCard();
}

function markIncorrect() {
  incorrect++;
  nextCard();
}

function nextCard() {
  currentIndex++;
  const deck = cards[currentCategory];
  if (currentIndex >= deck.length) {
    currentIndex = 0;
  }
  loadCard();
}

function prevCard() {
  currentIndex--;
  const deck = cards[currentCategory];
  if (currentIndex < 0) {
    currentIndex = deck.length - 1;
  }
  loadCard();
}


// ------------------------------
// Scores
// ------------------------------
function resetScores() {
  correct = 0;
  incorrect = 0;
  updateScore();
}

function updateScore() {
  document.getElementById("correct").innerText = correct;
  document.getElementById("incorrect").innerText = incorrect;
}


// ------------------------------
// Start app
// ------------------------------
window.onload = loadCard;
