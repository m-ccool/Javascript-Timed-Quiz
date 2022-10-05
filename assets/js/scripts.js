
var timer = document.getElementById("");
var quizQuestion = document.getElementById("");
var startButton = document.getElementById("startButton");
var question = document.getElementById("");

var index = 0;
var score = 0;
var timer = 75;


// questions

var question = [
    {
        question: "question 1?",
        answers: ["answer test 1", "answer test 2", "answer 3", "answer 4"],
        correctAnswer: "answer 1"
    },

    {
        question: "question 2?",
        answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
        correctAnswer: "answer 2"
    },

    {
        question: "question 3?",
        answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
        correctAnswer: "answer 3"
    }
    
];

// load & inject questions

function loadQuestion(index) {
    const currentQuestion = question[index];

    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("button1-label").textContent = currentQuestion.answer[1];
    document.getElementById("button2-label").textContent = currentQuestion.answer[2];
}

// timer function

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerInterval.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();

            var questionbody = document.getElementById("question-body");
            questionbody.classList.add("visually-hidden");
            var scorebody = document.getElementById("score-body");
            scorebody.classList.remove("visually-hidden");
        }
    })
}


// start quiz onClick

function startQuiz() {
    var startBody = document.getElementById("start-body");
    startBody.classList.add("visually-hidden");

    var questionBody = document.getElementById("question-body");
    questionBody.classList.remove("visually-hidden");
    
    loadQuestion(0);

    setTime();
}

// view highscores onClick

function showHighscores() {
    document.getElementById("title").textContent="high scores ⭐";
    document.getElementById("title-2").textContent="How code progressive are you?";


    var quizCard = document.getElementById("quiz-card");
    quizCard.classList.add("visually-hidden");

    var highscoreCard = document.getElementById("highscore-card");
    highscoreCard.classList.remove("visually-hidden");
}

// back to quiz onClick

function showQuiz() {
    document.getElementById("title").textContent="click to start quiz";
    document.getElementById("title-2").textContent="Progressive Web API Developer Quiz";


    var quizCard = document.getElementById("quiz-card");
    quizCard.classList.remove("visually-hidden");

    var highscoreCard = document.getElementById("highscore-card");
    highscoreCard.classList.add("visually-hidden");
}