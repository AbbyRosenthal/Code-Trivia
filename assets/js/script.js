var timerEl = document.getElementById('countdown');
let questionsEl = document.getElementById('questionList')
let answersEl = document.getElementById('answerList')

//variables to manipulate numbers on page
var clock = 60;
var score = 0;
var penalty = 3;

//questions array for quiz questions
var questionsArray = [
    {
        question: "Which would change the styling of a webpage?",
        answer:["css, javascript, html, good luck"],
        correctAnswer: 0,
    },
    {
        question: "INSERT QUESTION",
        answers:["1, 2, 3, 4"],
        correctAnswer: 2,
    },
    {
        question: "INSERT QUESTION",
        answers:["1, 2, 3, 4"],
        correctAnswer: 2,
    },
    {
        question: "INSERT QUESTION",
        answers:["1, 2, 3, 4"],
        correctAnswer: 2,
    },
    {
        question: "INSERT QUESTION",
        answers:["1, 2, 3, 4"],
        correctAnswer: 2,
    },
]

//countdown timer in header
function countdown() {
    var timeLeft = 30;

    //based on time in class activity **IT WORKS!!!!
    //HOW TO DEDUCT TIME BASED ON WRONG ANSWERS!!!
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining ';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}
countdown();

//FUNCTION TO START GAME

function beginQuiz() {
var userInitials = prompt("Welcome to Code Triva!  Please enter your initials to begin!")
    console.log(userInitials);
}
 beginQuiz ();


//FUNTION TO SELECT QUESTIONS USING .MAP
function selectAnswer() {
    for (var i=0; i <questionsArray.length; i++) {
        questionsEl = questionsArray.push
    }

}
selectAnswer();

//FUNCTION TO END GAME

