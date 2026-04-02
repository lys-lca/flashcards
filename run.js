/* -------------------------------------------------------
   FLASHCARD ENGINE — ACTIVE DECK VERSION
------------------------------------------------------- */

let currentCategory = "ALL";
let currentIndex = 0;
let correct = 0;
let incorrect = 0;

let activeDeck = [];   // ✅ The actual deck being used at any moment


/* -------------------------------------------------------
   SHUFFLE (Fisher–Yates)
------------------------------------------------------- */
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}


/* -------------------------------------------------------
   ON LOAD
------------------------------------------------------- */

let incorrectCards = [];

window.onload = () => {
    const select = document.getElementById("category-select");

    // Populate dropdown
    for (let cat in cards) {
        if (cat !== "ALL") {
            const opt = document.createElement("option");
            opt.value = cat;
            opt.textContent = cat;
            select.appendChild(opt);
        }
    }

    // Add ALL category
    const allOpt = document.createElement("option");
    allOpt.value = "ALL";
    allOpt.textContent = "ALL (All Questions)";
    select.appendChild(allOpt);

    select.value = "ALL";

    // ✅ Create and shuffle active deck from ALL
    activeDeck = [...cards.ALL];
    shuffleDeck(activeDeck);

    loadCard();
};


/* -------------------------------------------------------
   CATEGORY CHANGE
------------------------------------------------------- */
function changeCategory() {
    currentCategory = document.getElementById("category-select").value;

    // ✅ Create a fresh deck
    activeDeck = [...cards[currentCategory]];

    // ✅ Shuffle once per category
    shuffleDeck(activeDeck);

    currentIndex = 0;
    loadCard();
}


/* -------------------------------------------------------
   LOAD CARD
------------------------------------------------------- */
function loadCard() {
    const card = activeDeck[currentIndex];

    // ✅ Update counter here
    document.getElementById("counter").innerText =
        `Card ${currentIndex + 1} of ${activeDeck.length}`;

    document.getElementById("category").innerText = card.category;
    document.getElementById("question").innerText = card.question;
    document.getElementById("hint").innerText = card.hint;
    document.getElementById("answer").innerText = card.answer;

    document.getElementById("hint").style.visibility = "hidden";
    document.getElementById("answer").style.visibility = "hidden";

    document.getElementById("card-image").src = card.image;

    updateScore();
	const bar = document.getElementById("progress-bar");
const percent = ((currentIndex + 1) / activeDeck.length) * 100;
bar.style.width = percent + "%";
}

/* -------------------------------------------------------
   ACTION BUTTONS
------------------------------------------------------- */
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

    // ✅ Add current card to incorrectCards if not already there
    const card = activeDeck[currentIndex];
    if (!incorrectCards.includes(card)) {
        incorrectCards.push(card);
    }

    nextCard();
}


/* -------------------------------------------------------
   NAVIGATION
------------------------------------------------------- */
function nextCard() {
    currentIndex = (currentIndex + 1) % activeDeck.length;
    loadCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + activeDeck.length) % activeDeck.length;
    loadCard();
}


/* -------------------------------------------------------
   SCORE HANDLING
------------------------------------------------------- */
function resetScores() {
    correct = 0;
    incorrect = 0;
    updateScore();
}

function updateScore() {
    document.getElementById("correct").innerText = correct;
    document.getElementById("incorrect").innerText = incorrect;
}


/* -------------------------------------------------------
   20-CARD MODE
------------------------------------------------------- */
function loadTwentyCards() {
    const fullDeck = cards[currentCategory];

    // Create a shuffled copy of the current category
    const miniDeck = [...fullDeck];
    shuffleDeck(miniDeck);

    // Take only the first 20
    activeDeck = miniDeck.slice(0, 20);

    currentIndex = 0;
    loadCard();
}


function reviewIncorrect() {
    if (incorrectCards.length === 0) {
        alert("No incorrect cards to review!");
        return;
    }

    // ✅ Create a fresh shuffled deck from incorrectCards
    activeDeck = [...incorrectCards];
    shuffleDeck(activeDeck);

    currentIndex = 0;
    loadCard();
}

function printIncorrect() {
    if (incorrectCards.length === 0) {
        alert("No incorrect cards to print!");
        return;
    }

    const printArea = document.getElementById("print-area");

    // Build HTML for PDF print
    let html = "<h1>Incorrect Flashcards Review</h1>";

    incorrectCards.forEach(card => {
        html += `
            <div style="margin-bottom: 25px; padding: 15px; border: 1px solid #999; border-radius: 8px;">
                <h2>${card.question}</h2>
                <p><strong>Category:</strong> ${card.category}</p>
                <p><strong>Hint:</strong> ${card.hint}</p>
                <p><strong>Answer:</strong> ${card.answer}</p>
            </div>
        `;
    });

    printArea.innerHTML = html;

    // Temporarily show print area and hide flashcard UI
    const mainScreen = document.querySelector(".screen");
    mainScreen.style.display = "none";
    printArea.style.display = "block";

    window.print();

    // Restore view
    printArea.style.display = "none";
    mainScreen.style.display = "block";
}

function toggleDarkMode() {
    const btn = event.target;
    document.body.classList.toggle("dark-mode");

    btn.innerText = document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
}

// Load saved mode on startup
window.addEventListener("load", () => {
    const enabled = localStorage.getItem("darkMode") === "true";

    if (enabled) {
        document.body.classList.add("dark-mode");
        document.querySelector(".btn.gray[onclick*='toggleDarkMode']")
            .innerText = "Light Mode";
    }
});