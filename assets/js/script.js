var timerEl = document.getElementById('timer');

var myQuestions = [
    {
        question: "Which would change the styling of a webpage?",
        answers: {
            a: "css",
            b: "html",
            c: "javascript",
        },
        correctAnswer: 'b'
    },
    {
        question: "INSERT QUESTION",
        answers: {
            a: "OPTION",
            b: "OPTION",
            c: "OPTION",
        },
        correctAnswer: 'c'
    },
]

//countdown timer in header
function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval (function() {
        if(timeLeft > 1) {
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