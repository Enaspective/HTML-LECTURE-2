// GoQuizer Quiz Application
class GoQuizer {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedCategory = 'general';
        this.selectedDifficulty = 'easy';
        this.questions = [];
        this.timer = null;
        this.timeLeft = 30;
        this.totalTime = 0;
        this.startTime = null;
        this.quizStartTime = null;
        
        this.initializeEventListeners();
        this.loadQuestions();
    }

    // Initialize all event listeners
    initializeEventListeners() {
        // Category selection
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.selectCategory(e.currentTarget);
            });
        });

        // Difficulty selection
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectDifficulty(e.currentTarget);
            });
        });

        // Start quiz button
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            this.startQuiz();
        });

        // Next question button
        document.getElementById('next-question-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Results screen buttons
        document.getElementById('retry-btn').addEventListener('click', () => {
            this.retryQuiz();
        });

        document.getElementById('new-quiz-btn').addEventListener('click', () => {
            this.showWelcomeScreen();
        });
    }

    // Select category
    selectCategory(card) {
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedCategory = card.dataset.category;
    }

    // Select difficulty
    selectDifficulty(btn) {
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedDifficulty = btn.dataset.difficulty;
    }

    // Load questions based on category and difficulty
    loadQuestions() {
        this.questions = this.getQuestionsByCategory(this.selectedCategory, this.selectedDifficulty);
    }

    // Get questions by category and difficulty
    getQuestionsByCategory(category, difficulty) {
        const allQuestions = {
            general: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correct: 2
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correct: 1
                    },
                    {
                        question: "What is the largest ocean on Earth?",
                        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                        correct: 3
                    },
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
                        correct: 1
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Ag", "Au", "Fe", "Cu"],
                        correct: 1
                    },
                    {
                        question: "Which country is home to the kangaroo?",
                        options: ["New Zealand", "South Africa", "Australia", "India"],
                        correct: 2
                    },
                    {
                        question: "What is the main component of the sun?",
                        options: ["Liquid lava", "Molten iron", "Hot gases", "Solid rock"],
                        correct: 2
                    },
                    {
                        question: "How many sides does a hexagon have?",
                        options: ["5", "6", "7", "8"],
                        correct: 1
                    },
                    {
                        question: "What is the largest mammal?",
                        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                        correct: 1
                    },
                    {
                        question: "Which element has the chemical symbol 'O'?",
                        options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
                        correct: 1
                    }
                ],
                medium: [
                    {
                        question: "In which year did World War II end?",
                        options: ["1943", "1944", "1945", "1946"],
                        correct: 2
                    },
                    {
                        question: "What is the square root of 144?",
                        options: ["10", "11", "12", "13"],
                        correct: 2
                    },
                    {
                        question: "Which famous scientist developed the theory of relativity?",
                        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
                        correct: 1
                    },
                    {
                        question: "What is the largest desert in the world?",
                        options: ["Sahara", "Antarctic", "Arabian", "Gobi"],
                        correct: 1
                    },
                    {
                        question: "How many bones are in the human body?",
                        options: ["206", "212", "198", "220"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is the speed of light in meters per second?",
                        options: ["299,792,458", "300,000,000", "299,792,459", "299,792,457"],
                        correct: 0
                    },
                    {
                        question: "Which programming language was created by Brendan Eich?",
                        options: ["Python", "JavaScript", "Java", "C++"],
                        correct: 1
                    },
                    {
                        question: "What is the atomic number of carbon?",
                        options: ["4", "5", "6", "7"],
                        correct: 2
                    },
                    {
                        question: "In which year was the first iPhone released?",
                        options: ["2005", "2006", "2007", "2008"],
                        correct: 2
                    },
                    {
                        question: "What is the largest prime number less than 100?",
                        options: ["89", "91", "97", "99"],
                        correct: 2
                    }
                ]
            },
            science: {
                easy: [
                    {
                        question: "What is the hardest natural substance on Earth?",
                        options: ["Steel", "Diamond", "Granite", "Iron"],
                        correct: 1
                    },
                    {
                        question: "What is the chemical formula for water?",
                        options: ["H2O", "CO2", "O2", "N2"],
                        correct: 0
                    },
                    {
                        question: "Which gas do plants absorb from the air?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                        correct: 1
                    },
                    {
                        question: "What is the closest planet to the Sun?",
                        options: ["Venus", "Mercury", "Earth", "Mars"],
                        correct: 1
                    },
                    {
                        question: "What is the study of fossils called?",
                        options: ["Archaeology", "Paleontology", "Geology", "Biology"],
                        correct: 1
                    }
                ],
                medium: [
                    {
                        question: "What is the atomic number of hydrogen?",
                        options: ["0", "1", "2", "3"],
                        correct: 1
                    },
                    {
                        question: "Which organ pumps blood through the body?",
                        options: ["Liver", "Heart", "Lungs", "Kidneys"],
                        correct: 1
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Brain", "Liver", "Skin"],
                        correct: 3
                    },
                    {
                        question: "What type of energy does the sun produce?",
                        options: ["Nuclear", "Chemical", "Mechanical", "Electrical"],
                        correct: 0
                    },
                    {
                        question: "What is the process by which plants make food?",
                        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                        correct: 1
                    }
                ],
                hard: [
                    {
                        question: "What is the Heisenberg Uncertainty Principle about?",
                        options: ["Position and momentum", "Energy and time", "Mass and velocity", "Charge and spin"],
                        correct: 0
                    },
                    {
                        question: "What is the speed of sound in air at room temperature?",
                        options: ["331 m/s", "343 m/s", "340 m/s", "350 m/s"],
                        correct: 1
                    },
                    {
                        question: "Which subatomic particle has a positive charge?",
                        options: ["Electron", "Neutron", "Proton", "Photon"],
                        correct: 2
                    },
                    {
                        question: "What is the largest known star in the universe?",
                        options: ["Betelgeuse", "UY Scuti", "VY Canis Majoris", "Antares"],
                        correct: 1
                    },
                    {
                        question: "What is the chemical symbol for the element with atomic number 79?",
                        options: ["Ag", "Au", "Fe", "Cu"],
                        correct: 1
                    }
                ]
            },
            history: {
                easy: [
                    {
                        question: "Who was the first President of the United States?",
                        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                        correct: 2
                    },
                    {
                        question: "In which year did Columbus discover America?",
                        options: ["1490", "1491", "1492", "1493"],
                        correct: 2
                    },
                    {
                        question: "Which ancient wonder was located in Alexandria?",
                        options: ["Colossus", "Lighthouse", "Temple", "Pyramid"],
                        correct: 1
                    },
                    {
                        question: "Who was the first Emperor of Rome?",
                        options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                        correct: 1
                    },
                    {
                        question: "Which war ended in 1945?",
                        options: ["World War I", "World War II", "Korean War", "Vietnam War"],
                        correct: 1
                    }
                ],
                medium: [
                    {
                        question: "In which year did the French Revolution begin?",
                        options: ["1787", "1788", "1789", "1790"],
                        correct: 2
                    },
                    {
                        question: "Who was the first female Prime Minister of the UK?",
                        options: ["Margaret Thatcher", "Theresa May", "Liz Truss", "None of the above"],
                        correct: 0
                    },
                    {
                        question: "Which empire was ruled by Genghis Khan?",
                        options: ["Roman", "Mongol", "Ottoman", "Persian"],
                        correct: 1
                    },
                    {
                        question: "What year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    },
                    {
                        question: "Who was the last Tsar of Russia?",
                        options: ["Nicholas I", "Nicholas II", "Alexander II", "Peter the Great"],
                        correct: 1
                    }
                ],
                hard: [
                    {
                        question: "In which year was the Magna Carta signed?",
                        options: ["1214", "1215", "1216", "1217"],
                        correct: 1
                    },
                    {
                        question: "Who was the first Emperor of China?",
                        options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Song Taizu"],
                        correct: 0
                    },
                    {
                        question: "Which year did the Black Death reach Europe?",
                        options: ["1346", "1347", "1348", "1349"],
                        correct: 1
                    },
                    {
                        question: "Who was the first woman to win a Nobel Prize?",
                        options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
                        correct: 0
                    },
                    {
                        question: "In which year did the Titanic sink?",
                        options: ["1910", "1911", "1912", "1913"],
                        correct: 2
                    }
                ]
            },
            geography: {
                easy: [
                    {
                        question: "What is the largest continent?",
                        options: ["North America", "Europe", "Asia", "Africa"],
                        correct: 2
                    },
                    {
                        question: "Which country has the largest population?",
                        options: ["India", "China", "United States", "Russia"],
                        correct: 1
                    },
                    {
                        question: "What is the capital of Japan?",
                        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                        correct: 2
                    },
                    {
                        question: "Which ocean is the largest?",
                        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                        correct: 3
                    },
                    {
                        question: "What is the longest river in the world?",
                        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                        correct: 1
                    }
                ],
                medium: [
                    {
                        question: "What is the highest mountain in the world?",
                        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                        correct: 1
                    },
                    {
                        question: "Which country is known as the Land of Fire and Ice?",
                        options: ["Norway", "Iceland", "Finland", "Sweden"],
                        correct: 1
                    },
                    {
                        question: "What is the largest desert in Africa?",
                        options: ["Kalahari", "Sahara", "Namib", "Libyan"],
                        correct: 1
                    },
                    {
                        question: "Which city is known as the Big Apple?",
                        options: ["Los Angeles", "Chicago", "New York", "Boston"],
                        correct: 2
                    },
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                        correct: 2
                    }
                ],
                hard: [
                    {
                        question: "What is the deepest point in the ocean?",
                        options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Philippine Trench"],
                        correct: 1
                    },
                    {
                        question: "Which country has the most time zones?",
                        options: ["Russia", "United States", "France", "Australia"],
                        correct: 2
                    },
                    {
                        question: "What is the driest place on Earth?",
                        options: ["Sahara Desert", "Atacama Desert", "Antarctica", "Death Valley"],
                        correct: 2
                    },
                    {
                        question: "Which city is closest to the equator?",
                        options: ["Singapore", "Quito", "Nairobi", "Bogota"],
                        correct: 1
                    },
                    {
                        question: "What is the largest island in the world?",
                        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
                        correct: 0
                    }
                ]
            }
        };

        return allQuestions[category]?.[difficulty] || allQuestions.general.easy;
    }

    // Start the quiz
    startQuiz() {
        this.showLoadingScreen();
        
        setTimeout(() => {
            this.resetQuiz();
            this.loadQuestions();
            this.updateQuizInfo();
            this.showQuizScreen();
            this.displayQuestion();
            this.startTimer();
        }, 1500);
    }

    // Show loading screen
    showLoadingScreen() {
        this.hideAllScreens();
        document.getElementById('loading-screen').classList.add('active');
    }

    // Show quiz screen
    showQuizScreen() {
        this.hideAllScreens();
        document.getElementById('quiz-screen').classList.add('active');
    }

    // Show welcome screen
    showWelcomeScreen() {
        this.hideAllScreens();
        document.getElementById('welcome-screen').classList.add('active');
        this.resetQuiz();
    }

    // Show results screen
    showResultsScreen() {
        this.hideAllScreens();
        document.getElementById('results-screen').classList.add('active');
        this.displayResults();
    }

    // Hide all screens
    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }

    // Reset quiz state
    resetQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.timeLeft = 30;
        this.totalTime = 0;
        this.startTime = null;
        this.quizStartTime = null;
        this.clearTimer();
    }

    // Update quiz info display
    updateQuizInfo() {
        const categoryNames = {
            'general': 'General Knowledge',
            'science': 'Science & Technology',
            'history': 'History & Culture',
            'geography': 'Geography'
        };

        const difficultyNames = {
            'easy': 'Easy',
            'medium': 'Medium',
            'hard': 'Hard'
        };

        document.getElementById('current-category').textContent = categoryNames[this.selectedCategory];
        document.getElementById('current-difficulty').textContent = difficultyNames[this.selectedDifficulty];
    }

    // Display current question
    displayQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.endQuiz();
            return;
        }

        const question = this.questions[this.currentQuestion];
        
        // Update progress
        document.getElementById('current-question-num').textContent = this.currentQuestion + 1;
        document.getElementById('total-questions').textContent = this.questions.length;
        
        // Update progress bar
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.querySelector('.progress-fill').style.width = progress + '%';
        
        // Display question
        document.getElementById('question-text').textContent = question.question;
        
        // Display options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            
            optionElement.addEventListener('click', () => {
                this.selectOption(optionElement, index);
            });
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Reset next button
        document.getElementById('next-question-btn').disabled = true;
        
        // Start timer for this question
        this.startTimer();
    }

    // Select an option
    selectOption(optionElement, selectedIndex) {
        const question = this.questions[this.currentQuestion];
        const options = document.querySelectorAll('.option');
        
        // Disable all options
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Mark selected option
        optionElement.classList.add('selected');
        
        // Check if correct
        if (selectedIndex === question.correct) {
            optionElement.classList.add('correct');
            this.score++;
        } else {
            optionElement.classList.add('incorrect');
            // Highlight correct answer
            options[question.correct].classList.add('correct');
        }
        
        // Enable next button
        document.getElementById('next-question-btn').disabled = false;
        
        // Stop timer
        this.clearTimer();
    }

    // Next question
    nextQuestion() {
        this.currentQuestion++;
        this.displayQuestion();
    }

    // Start timer
    startTimer() {
        this.timeLeft = 30;
        this.startTime = Date.now();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            document.getElementById('time-left').textContent = this.timeLeft;
            
            // Add warning class when time is running out
            if (this.timeLeft <= 10) {
                document.querySelector('.timer').classList.add('warning');
            }
            
            if (this.timeLeft <= 0) {
                this.clearTimer();
                this.timeUp();
            }
        }, 1000);
    }

    // Clear timer
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        document.querySelector('.timer').classList.remove('warning');
    }

    // Handle time up
    timeUp() {
        const options = document.querySelectorAll('.option');
        const question = this.questions[this.currentQuestion];
        
        // Disable all options
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Highlight correct answer
        options[question.correct].classList.add('correct');
        
        // Enable next button
        document.getElementById('next-question-btn').disabled = false;
    }

    // End quiz
    endQuiz() {
        this.clearTimer();
        this.calculateTotalTime();
        this.showResultsScreen();
    }

    // Calculate total time
    calculateTotalTime() {
        if (this.quizStartTime) {
            this.totalTime = Math.floor((Date.now() - this.quizStartTime) / 1000);
        }
    }

    // Display results
    displayResults() {
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const incorrect = this.questions.length - this.score;
        
        // Update score display
        document.getElementById('score-percentage').textContent = percentage + '%';
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('incorrect-count').textContent = incorrect;
        document.getElementById('total-time').textContent = this.totalTime;
        
        // Update progress ring
        const circumference = 2 * Math.PI * 54; // r = 54
        const progress = (percentage / 100) * circumference;
        document.querySelector('.score-progress').style.strokeDashoffset = circumference - progress;
        
        // Update performance message
        this.updatePerformanceMessage(percentage);
    }

    // Update performance message
    updatePerformanceMessage(percentage) {
        const titleElement = document.getElementById('performance-title');
        const descriptionElement = document.getElementById('performance-description');
        
        if (percentage >= 90) {
            titleElement.textContent = 'Outstanding!';
            descriptionElement.textContent = 'Exceptional performance! You truly know your stuff!';
        } else if (percentage >= 70) {
            titleElement.textContent = 'Excellent!';
            descriptionElement.textContent = 'Great job! You have a solid understanding of the topic.';
        } else if (percentage >= 50) {
            titleElement.textContent = 'Good Work!';
            descriptionElement.textContent = 'Not bad! Keep learning and you\'ll improve even more.';
        } else {
            titleElement.textContent = 'Keep Practicing!';
            descriptionElement.textContent = 'Don\'t worry, practice makes perfect! Try again to improve your score.';
        }
    }

    // Retry quiz
    retryQuiz() {
        this.resetQuiz();
        this.loadQuestions();
        this.updateQuizInfo();
        this.showQuizScreen();
        this.displayQuestion();
    }
}

// Initialize the quiz app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new GoQuizer();
}); 