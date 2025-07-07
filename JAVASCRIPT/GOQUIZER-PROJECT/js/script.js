const quizData = [
  {
    question: "Which former British colony was given back to China in 1997?",
    options: ["Hong Kong", "Macau", "Taiwan", "Singapore"],
    correct: "Hong Kong",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "How would you feel if you could no longer use a product?",
    options: ["Happy", "Sad", "Indifferent", "Angry"],
    correct: "Sad",
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");

  questionElement.textContent = quizData[currentQuestion].question;
  optionsElement.innerHTML = ""; // Clear previous options

  quizData[currentQuestion].options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "btn btn-outline-primary w-100";
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });

  feedbackElement.textContent = "";
}

function checkAnswer(selected) {
  const feedbackElement = document.getElementById("feedback");
  if (selected === quizData[currentQuestion].correct) {
    score++;
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = `Wrong! The correct answer is ${quizData[currentQuestion].correct}.`;
    feedbackElement.style.color = "red";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    window.location.href = "result.html";
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

// Load the first question
window.onload = loadQuestion;
