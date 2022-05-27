var timerEl = document.getElementById('countdown');
var questionsEl = document.querySelector('#questionList');
let answersEl = document.getElementById('answerList');
let startButtonEl = document.getElementById('start-btn');


//questions array for quiz questions
var questions = [
    {
        question: "Which would change the styling of a webpage?",
        answer: {
            a: "css",
            b: "javascript",
            c: "html",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which would change the styling of a webpage?",
        answer: {
            a: "css",
            b: "javascript",
            c: "html",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which would change the styling of a webpage?",
        answer: {
            a: "css",
            b: "javascript",
            c: "html",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which would change the styling of a webpage?",
        answer: {
            a: "css",
            b: "javascript",
            c: "html",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which would change the styling of a webpage?",
        answer: {
            a: "css",
            b: "javascript",
            c: "html",
        },
        correctAnswer: 'a'
    },
]

// event listeners for start button to generate questions and timer

startButtonEl.addEventListener("click", beginQuiz)
startButtonEl.addEventListener("click", countdown)

//TIMER - is janky and needs to be fixed since adding event listener
function countdown() {
    var timeLeft = 30;
    //based on time in class activity 
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

//FUNCTION TO BEGIN THE QUIZ
function beginQuiz() {
    var userInitials = prompt("Welcome to Code Triva!  Please enter your initials to begin!")
    console.log(userInitials);
    insertQuestions()

};

// beginQuiz();

function insertQuestions() {
    questionsEl.textContent = questions[1].question
    for (var i = 0; i < questions.length; i++) {
        var answerOptions = document.createElement("button")
        answerOptions.textContent = questions.answer.a;
        answerOptions.setAttribute("value", questions[i]);
        answersEl.appendChild(answerOptions);
        //append to select

    }
}

//FUNTION TO SELECT QUESTIONS USING .MAP

//FUNCTION TO END GAME
