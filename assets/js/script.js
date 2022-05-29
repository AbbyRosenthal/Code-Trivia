var timerEl = document.getElementById('countdown');
var questionsEl = document.querySelector('#questionList');
let answersEl = document.getElementById('answersList');
let startButtonEl = document.getElementById('start-btn');
let answersButtonEl = document.getElementById('answer-btn');
let scoreBoard = document.getElementById("scores");
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
        question: "What is the command to 'push' code to GitHub?",
        answer: ["git push origin main", "git config", "git shove"],
        correctAnswer: "git push origin main",
    },
    {
        question: "Which is a 3rd party API?",
        answer: ["belt buckle", "shoe lace", "bootstrap"],
        correctAnswer: "bootstrap",
    },
    {
        question: "What is GitHub?",
        answer: ["a cool place to hangout", "stores code and stuff", "the things in the middle of your tires"],
        correctAnswer: "stores code and stuff",
    },
    {
        question: "what is an eventListener?",
        answer: ["person at a concert", "waits for event to occur", "not the right answer"],
        correctAnswer: "waits for event to occur",
    },
]


function countdown() {
    timeLeft = 30;
    //HOW TO DEDUCT TIME BASED ON WRONG ANSWERS!!!
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + ' seconds remaining ';
        if (timeLeft <= 0) {
            timerEl.textContent = timeLeft + ' second remaining';
            clearInterval(timeInterval)
            endQuiz();
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
    for (var i = 0; i < questions[index].answer.length; i++) {
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
        alert("Incorect answer, -5")

        if (timeLeft < 0) {
            timeLeft = 0
        }
        timerEl.textContent = timeLeft + ' seconds remaining ';

    }

    index++
    if (index === questions[index].length) {
        endQuiz();
    }
    else {
        generateQuestions();
    }
  
}

//BUILD END QUIZ FUNCTION
function endQuiz() {
    console.log("quiz has ended")
    clearInterval(countdown)

}

//funtion to save player score

var playerScore = function () {
    localStorage.setItem("score", JSON.stringify(timeLeft));
    scoreBoard.innerText = "Congrats! Your Score is" + localStorage.getItem("score");
    console.log(playerScore)
}

//arrys have built in sort function... questions.sort 


// event listeners for start button to generate questions and timer
startButtonEl.addEventListener("click", beginQuiz)
startButtonEl.addEventListener("click", countdown)
