if (window.location.pathname.endsWith("index.html")) {
    localStorage.removeItem("quizUsername");
}

function enterName() {
    let usernameInput = document.getElementById("username");
    let username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem("quizUsername", username);
        document.querySelector(".greetings").textContent = `Hello, ${username}!`;
        usernameInput.disabled = true; // Correct: disable the input field
        document.querySelector(".greetings").style.display = "block";
    }
}

// Function for category selection
function selectCategory(category) {
    const username = localStorage.getItem("quizUsername");
    if (!username) {
        alert("Please enter your name before selecting a category.");
        return;
    }
    localStorage.setItem("quizCategory", category);
    window.location.href = "quiz.html";
}

// Sample questions categorized by topic
const questions = {
    "Pipes and Cisterns": [
        { question: "A pipe fills a tank in 3 hours. Another empties it in 6 hours. How long to fill?", options: ["2 hours", "3 hours", "6 hours", "None"], answer: 1 },
        { question: "Two pipes fill a tank in 4 and 6 hours respectively. How long together?", options: ["2.4 hours", "3 hours", "4 hours", "5 hours"], answer: 2 },
        { question: "A pipe fills a tank in 5 hours. Another fills it in 10 hours. Together?", options: ["2 hours", "3.33 hours", "5 hours", "6 hours"], answer: 2 },
        { question: "A cistern is normally filled in 8 hours, but a leak empties it in 16 hours. How long to fill?", options: ["10 hours", "12 hours", "16 hours", "8 hours"], answer: 2 },
        { question: "Pipe A fills in 12 hrs, B in 15 hrs, C empties in 10 hrs. All together?", options: ["8 hours", "10 hours", "12 hours", "Cannot fill"], answer: 4 },
        { question: "Two pipes fill a tank in 20 min and 30 min respectively. How long together?", options: ["12 min", "15 min", "18 min", "20 min"], answer: 2 },
        { question: "A pipe fills in 4 hrs, another in 8 hrs. Both together?", options: ["2 hours", "2.67 hours", "3 hours", "3.5 hours"], answer: 2 },
        { question: "A pipe empties in 6 hrs, another fills in 4 hrs. Net effect?", options: ["Empty in 12 hrs", "Fill in 12 hrs", "Fill in 8 hrs", "Cannot fill"], answer: 2 },
        { question: "A cistern normally fills in 9 hrs but a leak takes 3 extra hrs. Leak time alone?", options: ["12 hrs", "18 hrs", "24 hrs", "27 hrs"], answer: 2 },
        { question: "A tank is half full. Pipe A fills in 10 hrs, B fills in 15 hrs. Time to fill completely?", options: ["3 hrs", "4 hrs", "5 hrs", "6 hrs"], answer: 2 }
    ],
    "Probability": [
        { question: "What is the probability of getting a head in a coin toss?", options: ["1/2", "1/3", "1/4", "1"], answer: 1 },
        { question: "If a die is rolled, what is the probability of getting an even number?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 3 },
        { question: "A bag contains 3 red balls and 7 blue balls. What is the probability of drawing a red ball?", options: ["1/3", "3/10", "7/10", "1/2"], answer: 2 },
        { question: "A card is drawn from a deck of 52. What is the probability of drawing a King?", options: ["1/13", "1/26", "1/52", "1/4"], answer: 1 },
        { question: "Two dice are rolled. What is the probability of getting a sum of 7?", options: ["1/6", "1/12", "1/8", "1/9"], answer: 1 },
        { question: "A bag contains 5 white and 5 black balls. What is the probability of drawing a white ball?", options: ["1/5", "2/5", "1/2", "3/5"], answer: 3 },
        { question: "What is the probability of getting tails in two consecutive coin tosses?", options: ["1/2", "1/3", "1/4", "1"], answer: 3 },
        { question: "A deck of 52 cards has how many Ace cards?", options: ["2", "3", "4", "5"], answer: 3 },
        { question: "A fair die is rolled. What is the probability of rolling a number greater than 4?", options: ["1/3", "1/2", "2/3", "1/6"], answer: 2 },
        { question: "In a class of 30 students, 10 are girls. What is the probability of selecting a boy?", options: ["1/3", "2/3", "1/2", "1/4"], answer: 2 }
    ],
    "Problems on Age": [
        { question: "A father is 3 times as old as his son. If the sum of their ages is 48, how old is the son?", options: ["12", "15", "18", "20"], answer: 1 },
        { question: "The sum of the ages of a father and son is 60. If the father is twice as old as the son, what is the son’s age?", options: ["20", "22", "25", "30"], answer: 1 },
        { question: "A man is currently 5 times as old as his son. In 10 years, he will be 3 times as old. How old is the son now?", options: ["5", "6", "7", "8"], answer: 2 },
        { question: "The sum of the present ages of a mother and daughter is 50. If the mother is 4 times the age of the daughter, what is the daughter’s age?", options: ["8", "10", "12", "15"], answer: 2 },
        { question: "A mother is twice as old as her daughter. If the sum of their ages is 54, what is the daughter's age?", options: ["18", "20", "22", "24"], answer: 1 },
        { question: "A father was 40 when his son was born. Now, the father is 3 times as old as the son. How old is the son?", options: ["10", "12", "14", "16"], answer: 2 },
        { question: "The sum of the ages of a father and his son is 50 years. The father is twice as old as the son. What is the son's age?", options: ["15", "16", "17", "18"], answer: 1 },
        { question: "A brother is 4 years older than his sister. If the sum of their ages is 20, how old is the sister?", options: ["6", "7", "8", "9"], answer: 3 },
        { question: "A father is 30 years older than his son. In 10 years, the father’s age will be twice the son’s age. What is the son's current age?", options: ["10", "12", "15", "18"], answer: 3 },
        { question: "The sum of the present ages of a man and his son is 45 years. Five years ago, the man was 4 times as old as his son. What is the son's current age?", options: ["5", "7", "9", "11"], answer: 2 }
    ],
    "Profit and Loss": [
        { question: "If a product is sold at 20% profit and its cost price is $50, what is the selling price?", options: ["$55", "$60", "$65", "$70"], answer: 2 },
        { question: "A shopkeeper gives 10% discount on a $200 product. What is the final price?", options: ["$170", "$180", "$190", "$200"], answer: 3 },
        { question: "If the cost price is $80 and selling price is $100, what is the profit percentage?", options: ["20%", "25%", "30%", "40%"], answer: 1 },
        { question: "A man sells an item for $120 after a loss of 20%. What was the cost price?", options: ["$140", "$150", "$160", "$180"], answer: 3 },
        { question: "If a product is marked at $500 and a discount of 15% is given, what is the selling price?", options: ["$400", "$425", "$450", "$475"], answer: 3 },
        { question: "If a trader gains 15% after selling an item for $230, what is the cost price?", options: ["$190", "$200", "$210", "$220"], answer: 2 },
        { question: "What is the loss percentage if an item bought for $400 is sold for $350?", options: ["10%", "12.5%", "15%", "20%"], answer: 2 },
        { question: "A man sells an article at 5% loss for $570. What was the cost price?", options: ["$600", "$610", "$620", "$630"], answer: 1 },
        { question: "An article was bought for $240 and sold at a gain of 25%. Find the selling price.", options: ["$280", "$300", "$320", "$360"], answer: 2 },
        { question: "If the cost price is $250 and selling price is $225, what is the loss percentage?", options: ["8%", "10%", "12%", "15%"], answer: 2 }
    ]
};

let selectedCategory = localStorage.getItem("quizCategory") || "Pipes and Cisterns";
let quizQuestions = questions[selectedCategory];
let currentQuestionIndex = 0;
let score = 0;
let attemptedQuestions = 0;
let correctAnswers = 0;
let timer;
let timeLeft = 30;
let startTime;
let selectedOption = null;

// Function to start the quiz
function startQuiz() {
    document.getElementById("quiztitle").innerHTML = `<p>${selectedCategory} Quiz</p>`;
    startTime = Date.now();
    loadQuestion();
    startTimer();
}

// Load current question and options
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        finishQuiz();
        return;
    }

   let questionData = quizQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    document.getElementById("questionCount").textContent = `${currentQuestionIndex + 1}/${quizQuestions.length}`;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    selectedOption = null;
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("nextBtn").disabled = false; // Allow skipping

    questionData.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.classList.add("option", "option-btn");
        button.textContent = option;
        button.onclick = () => {
            selectOption(index + 1, button);
        };
        optionsContainer.appendChild(button);
    });

    resetTimer();
}


// Option selection logic
function selectOption(optionIndex, btn) {
    selectedOption = optionIndex;
    document.getElementById("submitBtn").disabled = false;

    document.querySelectorAll("#options .option").forEach(b => {
        b.classList.remove("selected", "correct", "wrong");
        b.disabled = false;
    });
    btn.classList.add("selected");
}


// Submit answer and show feedback
function submitAnswer() {
    if (selectedOption === null) return;

    let correctAnswer = quizQuestions[currentQuestionIndex].answer;
    attemptedQuestions++;

    let optionButtons = document.querySelectorAll("#options .option");
    optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx + 1 === correctAnswer) {
            btn.classList.add("correct");
        }
        if (idx + 1 === selectedOption) {
            if (selectedOption === correctAnswer) {
                btn.classList.add("selected", "correct");
            } else {
                btn.classList.add("selected", "wrong");
            }
        }
    });

    if (selectedOption === correctAnswer) {
        score += 1;
        correctAnswers++;
        document.getElementById("scoreCount").textContent = score;
    }

    document.getElementById("submitBtn").disabled = true;
    document.getElementById("nextBtn").disabled = true;

    clearInterval(timer);

    // Show feedback for 2 seconds, then load next question
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// Move to next question
function nextQuestion() {
    clearInterval(timer);
    currentQuestionIndex++;
    loadQuestion();
}

// Timer logic
function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").textContent = timeLeft;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timer").textContent = timeLeft;
        } else {
            clearInterval(timer);
            showCorrectAndAutoNext();
        }
    }, 1000);
}

function showCorrectAndAutoNext() {
    attemptedQuestions++;
    let correctAnswer = quizQuestions[currentQuestionIndex].answer;
    let optionButtons = document.querySelectorAll("#options .option");
    optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx + 1 === correctAnswer) {
            btn.classList.add("correct");
        }
    });
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("nextBtn").disabled = true;

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// Reset timer for each question
function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// Function to finish the quiz and store results
function finishQuiz() {
    clearInterval(timer);

    let endTime = Date.now();
    let totalTimeTaken = Math.round((endTime - startTime) / 1000); // Convert to seconds

    localStorage.setItem("totalQuestions", quizQuestions.length);
    localStorage.setItem("attemptedQuestions", attemptedQuestions);
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("timeTaken", totalTimeTaken);

    window.location.href = "result.html"; // Redirect to result page
}

// Start the quiz when the page loads
if (window.location.pathname.endsWith("quiz.html")) {
    document.addEventListener("DOMContentLoaded", startQuiz);
}

// Function to display quiz results
function showResults() {
    let username = localStorage.getItem("quizUsername") || "User";
    let totalQuestions = localStorage.getItem("totalQuestions") || 0;
    let attempted = localStorage.getItem("attemptedQuestions") || 0;
    let correct = localStorage.getItem("correctAnswers") || 0;
    let timeTaken = localStorage.getItem("timeTaken") || 0;

    let wrong = attempted - correct;
    let percentage = totalQuestions > 0 ? ((correct / totalQuestions) * 100).toFixed(2) : 0;

    document.getElementById("username1").innerHTML = `<h2>Hello, ${username}!</h2>`;
    document.querySelector("#timeTaken b").textContent = timeTaken;
    document.querySelector(".totalquestions b").textContent = totalQuestions;
    document.querySelector(".attempt b").textContent = attempted;
    document.querySelector(".correct b").textContent = correct;
    document.querySelector(".wrong b").textContent = wrong;
    document.querySelector(".percentage b").textContent = percentage + "%";

    // Show the result page
    document.querySelector(".content3").style.display = "block";
}

// Function to restart the quiz
function restartQuiz() {
    localStorage.removeItem("attemptedQuestions");
    localStorage.removeItem("correctAnswers");
    localStorage.removeItem("timeTaken");

    window.location.href = "quiz.html"; // Redirect to quiz page
}

// Function to go to the home page
function goToHome() {
    localStorage.clear(); // Clear all stored data
    window.location.href = "index.html"; // Redirect to home page
}

// Run the results display function when the result page loads
if (window.location.pathname.endsWith("result.html")) {
    document.addEventListener("DOMContentLoaded", showResults);
}