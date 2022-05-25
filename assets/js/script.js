var timerEl = document.getElementById('countdown');
let questionsEl = document.getElementById('questionLocation')

var myQuestions = [
    {
        questionOne: "Which would change the styling of a webpage?",
        answerOne: {
            a: "css",
            b: "html",
            c: "javascript",
        },
        correctAnswerOne: 'b'
    },
    {
        questionTwo: "INSERT QUESTION",
        answersTwo: {
            a: "OPTION",
            b: "OPTION",
            c: "OPTION",
        },
        correctAnswerTwo: 'c'
    },
    {
        questionThree: "INSERT QUESTION",
        answersThree: {
            a: "OPTION",
            b: "OPTION",
            c: "OPTION",
        },
        correctAnswerThree: 'c'
    }, 
    {
        questionFour: "INSERT QUESTION",
        answersFour: {
            a: "OPTION",
            b: "OPTION",
            c: "OPTION",
        },
        correctAnswerFour: 'c'
    },
    {
        questionFive: "INSERT QUESTION",
        answersFive: {
            a: "OPTION",
            b: "OPTION",
            c: "OPTION",
        },
        correctAnswerFive: 'c'
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

//FUNTION TO SELECT QUESTIONS USING .MAP

//FUNCTION TO END GAME

