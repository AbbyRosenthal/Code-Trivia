var timerEl = document.getElementById('countdown');
var questionsEl = document.querySelector('#questionList');
let answersEl = document.getElementById('answersList');
let startButtonEl = document.getElementById('start-btn');
let answersButtonEl = document.getElementById('answer-btn');
let index = 0;

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
    startButtonEl.setAttribute("class", "hide")
    var userInitials = prompt("Welcome to Code Triva!  Please enter your initials to begin!")
    console.log(userInitials);
    generateQuestions();
};


// beginQuiz();

 
//THIS ADDS DYNAMIC BUTTONS

function generateQuestions() {
    questionsEl.textContent = questions[index].question
    for (var i = 0; i < questions[index].answer.length;i++) {
        var choiceButton = document.createElement("button");
        var value = questions[index].answer[i];
        console.log(value)
        choiceButton.setAttribute("value", value)
        choiceButton.textContent = value
        choiceButton.onclick = answerQuestion
        answersEl.appendChild(choiceButton)


    //     var answerOptions = [questions[i].answer[i]]
    // //     console.log(answerOptions)
    //     var btn = document.createElement("button");
    //     var a = document.createTextNode(answerOptions);
    //     btn.appendChild(a);
    //     document.body.appendChild(btn);
    //     console.log(questions[0].answer)
    }
}
 
function checkAnswers() {

}

//runs this no matter what button is clicked
function answerQuestion() {
    console.log("yay abby")
}





//LOCAL STORAGE
// localStorage.setItem("score", JSON.stringify(sec));
//     scoreBoard.innerText = "Your score:" + localStorage.getItem("score");

// event listeners for start button to generate questions and timer

startButtonEl.addEventListener("click", beginQuiz)
startButtonEl.addEventListener("click", countdown)

