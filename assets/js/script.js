var timerEl = document.getElementById('countdown');
var questionsEl = document.querySelector('#questionList');
let answersEl = document.getElementById('answersList');
let startButtonEl = document.getElementById('start-btn');
let answersButtonEl = document.getElementById('answer-btn');
let index = 0;
var timeInterval;
var timeLeft;

//questions array for quiz questions
var questions = [
    //make all questions like this
    {
        question: "Which would change the styling of a webpage?",
        answer: ["css", "javascript", "html"],
        correctAnswer: "css",
    },
    {
        question: "What is my favorite color",
        answer: ["blue", "green", "who cares"],
        correctAnswer: "green",
    },
    {
        question: "food",
        answer: ["banana", "apple", "grape"],
        correctAnswer: "apple",
    },
    {
        question: "shoes",
        answer: ["tennis", "sandal", "heel"],
        correctAnswer: "heel",
    },
    {
        question: "animals",
        answer: ["dog", "bear", "goat"],
        correctAnswer: "bear",
    },
]


function countdown() {
    timeLeft = 30;
    //HOW TO DEDUCT TIME BASED ON WRONG ANSWERS!!!
    timeInterval = setInterval(function () {
        timeLeft --;
        timerEl.textContent = timeLeft + ' seconds remaining ';
        if (timeLeft <= 0) {
            timerEl.textContent = timeLeft + ' second remaining';
            endQuiz()
        }

    }, 1000);
}


//FUNCTION TO BEGIN THE QUIZ
function beginQuiz() {
    startButtonEl.setAttribute("class", "hide")
    var userInitials = prompt("Welcome to Code Triva!  Please enter your initials to begin!")
    console.log(userInitials);
    generateQuestions();
};

 
//THIS ADDS DYNAMIC BUTTONS

function generateQuestions() {
    answersEl.innerHTML = ""
    questionsEl.textContent = questions[index].question
    for (var i = 0; i < questions[index].answer.length;i++) {
        var choiceButton = document.createElement("button");
        var value = questions[index].answer[i];
        console.log(value)
        choiceButton.setAttribute("value", value)
        choiceButton.textContent = value
        choiceButton.onclick = checkAnswers
        answersEl.appendChild(choiceButton)
    }
}
 
function checkAnswers() {
    //when question is wrong .. ADD ALERT
    if (this.value !== questions[index].correctAnswer) {
        timeLeft -= 5;
        if (timeLeft < 0) {
            timeLeft = 0
        }
        timerEl.textContent = timeLeft + ' seconds remaining ';
    }
alert("Incorect answer, -5 seconds")
index ++ 
if (index === questions[index].answer.length) {
    endQuiz()
}
else {
    generateQuestions();
}
}

//BUILD END QUIZ FUNCTION
function endQuiz() {
    //clear interval here
    //show score 
    //clear out last questions and answers
}

//arrys have built in sort function... questions.sort 

//LOCAL STORAGE
// localStorage.setItem("score", JSON.stringify(sec));
//     scoreBoard.innerText = "Your score:" + localStorage.getItem("score");

// event listeners for start button to generate questions and timer

startButtonEl.addEventListener("click", beginQuiz)
startButtonEl.addEventListener("click", countdown)

