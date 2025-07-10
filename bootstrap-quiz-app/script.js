// =============================
// BEGINNER: Edit your questions below
// =============================
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: 3
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
    answer: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Cu"],
    answer: 1
  }
];

// =============================
// Quiz Logic Below (No need to edit)
// =============================
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let shuffledQuestions = [];

// Shuffle questions for dynamic order
function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuestion() {
  const q = shuffledQuestions[currentQuestion];
  document.getElementById('question-number').textContent = `QUESTION ${currentQuestion+1}/${shuffledQuestions.length}`;
  document.getElementById('question-text').textContent = q.question;
  const optionsRow = document.getElementById('options-row');
  optionsRow.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-3 mb-4';
    col.innerHTML = `
      <div class="quiz-card text-center h-100" id="option-${idx}" onclick="selectOption(${idx})">
        <div class="option-circle">${String.fromCharCode(65+idx)}</div>
        <div class="fw-bold fs-5">${opt}</div>
      </div>
    `;
    optionsRow.appendChild(col);
  });
  // Progress bar
  document.getElementById('progress-bar').style.width = `${((currentQuestion)/shuffledQuestions.length)*100}%`;
  // Next button
  document.getElementById('next-btn').disabled = (userAnswers.length <= currentQuestion);
}

function selectOption(idx) {
  userAnswers[currentQuestion] = idx;
  // Highlight selected and dim others
  const cards = document.querySelectorAll('.quiz-card');
  cards.forEach((card, i) => {
    card.classList.remove('selected', 'unselected');
    if (i === idx) {
      card.classList.add('selected');
    } else {
      card.classList.add('unselected');
    }
  });
  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  // Check answer and show feedback
  const q = shuffledQuestions[currentQuestion];
  const selected = userAnswers[currentQuestion];
  const cards = document.querySelectorAll('.quiz-card');
  cards.forEach((card, i) => {
    card.classList.remove('selected', 'unselected');
    if (i === q.answer) {
      card.classList.add('correct');
    } else if (i === selected) {
      card.classList.add('incorrect');
    }
    card.onclick = null;
  });
  if (selected === q.answer) score++;
  // Wait a moment before moving to next question or results
  setTimeout(() => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      showResults();
    }
  }, 900);
}

function showResults() {
  document.getElementById('quiz-container').innerHTML = `
    <div class="text-center">
      <h2 class="mb-4">Quiz Complete!</h2>
      <p class="fs-4">Your Score: <span class="fw-bold">${score} / ${shuffledQuestions.length}</span></p>
      <button class="next-btn mt-4" onclick="location.reload()">Restart Quiz</button>
    </div>
  `;
}

// Initialize
window.onload = function() {
  shuffledQuestions = shuffle(quizQuestions);
  renderQuestion();
}; 