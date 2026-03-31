<div id="flashcard-app" style="font-family:Arial, sans-serif; max-width:600px; margin:auto;">

<style>
/* PAGE CONTAINER */
#flashcard-app .screen {
    width:100%;
    padding:20px;
}

/* CATEGORY AREA */
#flashcard-app .category-area {
    margin-bottom:20px;
}
#flashcard-app #category-select {
    width:100%;
    padding:12px;
    font-size:16px;
    border-radius:8px;
    border:1px solid #aaa;
}

/* FLASHCARD */
#flashcard-app .card {
    background:#fff;
    padding:20px;
    border-radius:14px;
    box-shadow:0 4px 12px rgba(0,0,0,0.15);
    margin-top:20px;
}

#flashcard-app .category-label,
#flashcard-app .question {
    min-height:24px;
    display:block;
    color:#222;
}

/* IMAGE */
#flashcard-app .flashcard-image {
    width:100%;
    min-height:120px;
    background:#f6f6f6;
    border-radius:8px;
    margin-bottom:12px;
}

/* HINT + ANSWER */
#flashcard-app .hint {
    visibility:hidden;
    min-height:22px;
    margin-top:10px;
    font-style:italic;
    color:#555;
}
#flashcard-app .answer {
    visibility:hidden;
    min-height:30px;
    margin-top:15px;
    padding-top:12px;
    border-top:2px solid #ccc;
    font-weight:bold;
    color:#154a0f;
}

/* SCORE */
#flashcard-app .score-box {
    text-align:center;
    font-size:16px;
    margin-top:15px;
}

/* BUTTONS */
#flashcard-app .btn-row {
    margin-top:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
}
#flashcard-app .btn {
    padding:12px 18px;
    margin:6px;
    font-size:16px;
    border-radius:8px;
    border:none;
    cursor:pointer;
    min-width:120px;
}
#flashcard-app .blue {background:#0078d4;color:#fff;}
#flashcard-app .green {background:#2e7d32;color:#fff;}
#flashcard-app .red   {background:#c62828;color:#fff;}
#flashcard-app .gray  {background:#777;color:#fff;}
#flashcard-app .btn:hover {opacity:0.85;}
</style>


<!-- UI LAYOUT -->
<div class="screen">

    <!-- CATEGORY DROPDOWN -->
    <div class="category-area">
        <label>Choose Category:</label>
        <select id="category-select">
            <option value="ict10">ICT Sample (10 cards)</option>
        </select>
    </div>

    <!-- FLASHCARD -->
    <div class="card">

        <div id="category" class="category-label"></div>

        <div id="img-holder">
            <div class="flashcard-image"></div>
        </div>

        <h2 id="question" class="question"></h2>
        <div id="hint" class="hint"></div>
        <div id="answer" class="answer"></div>

        <div class="score-box">
            Correct: <span id="correct">0</span> |
            Incorrect: <span id="incorrect">0</span>
        </div>

        <div class="btn-row">
            <button class="btn blue" onclick="showHint()">Show Hint</button>
            <button class="btn blue" onclick="revealAnswer()">Reveal Answer</button>
            <button class="btn green" onclick="markCorrect()">Correct</button>
            <button class="btn red" onclick="markIncorrect()">Incorrect</button>
            <button class="btn blue" onclick="prevCard()">Previous</button>
            <button class="btn blue" onclick="nextCard()">Next</button>
            <button class="btn gray" onclick="resetScores()">Reset Scores</button>
        </div>

    </div>
</div>


<script>
/* ---------------------------------------------
   ALL DATA INLINE — SHAREPOINT SAFE
------------------------------------------------*/
let cards = {
  ict10: [
    {category:"Input Devices", question:"Name two common input devices.", hint:"Used to enter data.", answer:"Keyboard and mouse."},
    {category:"Output Devices", question:"What device produces hard copies?", hint:"Used in offices.", answer:"A printer."},
    {category:"Storage", question:"Name two removable storage devices.", hint:"Portable.", answer:"USB stick and SD card."},
    {category:"Networking", question:"What does LAN stand for?", hint:"Local ___ Network.", answer:"Local Area Network."},
    {category:"Security", question:"What is a strong password?", hint:"Mix symbols.", answer:"Uppercase, lowercase, numbers, symbols."},
    {category:"Software", question:"What does GUI stand for?", hint:"Windows, icons, menus...", answer:"Graphical User Interface."},
    {category:"Hardware", question:"What does CPU stand for?", hint:"Brain of computer.", answer:"Central Processing Unit."},
    {category:"Data Representation", question:"How many bits in a byte?", hint:"Under 10.", answer:"8 bits."},
    {category:"File Management", question:"What does copying a file do?", hint:"Duplicate.", answer:"Creates a duplicate."},
    {category:"Internet", question:"What does URL stand for?", hint:"Web address.", answer:"Uniform Resource Locator."}
  ]
};

let currentCategory = "ict10";
let currentIndex = 0;
let correct = 0;
let incorrect = 0;

/* ---------------------------------------------
   LOAD CARD
------------------------------------------------*/
function loadCard() {
    let deck = cards[currentCategory];
    let c = deck[currentIndex];

    document.getElementById("category").innerText = c.category;
    document.getElementById("question").innerText = c.question;

    document.getElementById("hint").innerText = c.hint;
    document.getElementById("answer").innerText = c.answer;

    document.getElementById("hint").style.visibility = "hidden";
    document.getElementById("answer").style.visibility = "hidden";
}

function showHint(){document.getElementById("hint").style.visibility="visible";}
function revealAnswer(){document.getElementById("answer").style.visibility="visible";}

function nextCard(){
    currentIndex++;
    if(currentIndex >= cards[currentCategory].length) currentIndex = 0;
    loadCard();
}
function prevCard(){
    currentIndex--;
    if(currentIndex < 0) currentIndex = cards[currentCategory].length - 1;
    loadCard();
}

function markCorrect(){ correct++; updateScore(); nextCard(); }
function markIncorrect(){ incorrect++; updateScore(); nextCard(); }

function resetScores(){ correct = 0; incorrect = 0; updateScore(); }

function updateScore(){
    document.getElementById("correct").innerText = correct;
    document.getElementById("incorrect").innerText = incorrect;
}

window.onload = loadCard;
</script>

</div>