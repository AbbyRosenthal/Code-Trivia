var timerEl = document.getElementById('countdown');
var questionsEl = document.querySelector('#questionList');
let answersEl = document.getElementById('answerList');
let startButtonEl = document.getElementById('start-btn');
let answersButtonEl = document.getElementById('answer-btn');


//questions array for quiz questions
var questions = [
    //make all questions like this
    {
        question: "Which would change the styling of a webpage?",
        answer: ["css", "javascript", "html"],
        correctAnswer: 0
    },
    {
        question: "Which would change the styling of a webpage?",
        answer: ["css", "javascript", "html"],
        correctAnswer: 0
    },
    {
        question: "Which would change the styling of a webpage?",
        answer: ["css", "javascript", "html"],
        correctAnswer: 0
    },
    {
        question: "Which would change the styling of a webpage?",
        answer: ["css", "javascript", "html"],
        correctAnswer: 0
    },
    {
        question: "Which would change the styling of a webpage?",
        answer: ["css", "javascript", "html"],
        correctAnswer: 0
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
    generateQuestions();
};


// beginQuiz();

function generateQuestions() {
    questionsEl.textContent = questions[1].question
    for (var i = 0; i < questions.length; i++) {
        //its not reading the array
        var answerOptions = (questions.answer)
        console.log(answerOptions)
        var btn = document.createElement("button");
        var a = document.createTextNode(questions.answer);
        btn.appendChild(a);
        document.body.appendChild(btn);
    }
}



