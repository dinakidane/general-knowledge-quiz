/** Wait for the DOM to finish loading before running the game */

document.addEventListener("DOMContentLoaded", function () 
}

const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");


restartBtn.addEventListener("click", restart);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);

/**
 * The quiz and its answers
 */

const questions = {
    {
    question: "Who is the current vice president of the United States?",
        answers: [
            { text: "Joe Biden", correct: false },
            { text: "Hillary Clinton", correct: false },
            { text: "Kamala Harris", correct: true },
            { text: "Mike Pence", correct: false },

        ];
}
{
    question: "What is the largest organ in the body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Skin", correct: true },
            { text: "Liver", correct: false },
            { text: "Lung", correct: false },

        ];
}
{
    question: "Which country has the highest life expectancy?",
        answers: [
            { text: "South Korea", correct: false },
            { text: "China", correct: false },
            { text: "Switzerland", correct: false },
            { text: "Japan", correct: true },

        ];
}
{
    question: "What is the capital of Finland?",
        answers: [
            { text: "Helsinki", correct: true },
            { text: "Luxemburg", correct: false },
            { text: "Oslo", correct: false },
            { text: "Stockholm", correct: false },

        ];
}
{
    question: "Which country has won the most World Cups?",
        answers: [
            { text: "Argentina", correct: false },
            { text: "Brazil", correct: true },
            { text: "France", correct: false },
            { text: "Italy", correct: false },

        ];
}
{
    question: "Where is the strongest human muscle located?",
        answers: [
            { text: "Forearms", correct: false },
            { text: "Calves", correct: false },
            { text: "Triceps", correct: false },
            { text: "Jaw", correct: true },
        ];
}
{
    question: "How many colors are used in the South African flag?",
        answers: [
            { text: "Four", correct: false },
            { text: "Eight", correct: false },
            { text: "Six", correct: true },
            { text: "Seven", correct: false },
        ];
}
{
    question: "Where did sushi originate?",
        answers: [
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false },
        ];
}
{
    question: "Where is the largest Disney park in the world?",
        answers: [
            { text: "London", correct: false },
            { text: "Orlando", correct: true },
            { text: "Paris", correct: false },
            { text: "Hong Kong", correct: false },
        ];
}
{
    question: "What is the national sport of Japan?",
        answers: [
            { text: "Football", correct: false },
            { text: "Swimming", correct: false },
            { text: "Sumo Wrestling", correct: true },
            { text: "Baseball", correct: false },
        ];
}

}

function startQuiz() {
    document.getElementById(startBtn);
    restartBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
}

