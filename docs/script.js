const quizQuestions = [
    {
        questionText: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        questionText: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        questionText: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        correctAnswer: "Blue Whale"
    },
    {
        questionText: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Hydrogen", "Carbon"],
        correctAnswer: "Oxygen"
    },
    {
        questionText: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    }
];

let questionNumber = 0;
let score = 0;
// Getting Elements

const quizContainerEle = document.querySelector(".quiz_container");
// const optionsEle = document.querySelectorAll(".option")
const nextBtn = document.querySelector(".next_btn");
const scoreBtn = document.querySelector(".score_btn");
const resetBtn = document.querySelector(".reset_btn");

// Creating Functions

function renderQuestion(qNumber) {
    quizQuestions.map((question, idx) => {
        if (idx == qNumber) {
            quizContainerEle.innerHTML = `
            <div class="question my-6">
                    <h2 class="question_text text-2xl font-semibold mb-4">${idx + 1}. ${question.questionText}</h2>
                    <div class="options">
                        <div class="flex flex-col gap-5">
                            ${question.options.map((option) =>
                `<button data-answer="${option}" class="option disabled:cursor-not-allowed text-left py-2 px-3 border border-slate-800 rounded  cursor-pointer hover:bg-slate-600 hover:border-slate-50 hover:text-slate-50 transition-all duration-150 ease-in-out">${option}</button>`
            ).join("")}
                        </div>
                    </div>
                </div>
            `
        }
    })

    const buttons = document.querySelectorAll(".option");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            selectOption(e);
            buttons.forEach(btn => btn.disabled = true)


        })
    })

}

function nextQuestion() {
    nextBtn.classList.add("hidden")
    if (questionNumber < quizQuestions.length) {
        questionNumber++;
        renderQuestion(questionNumber)
    }
}

function selectOption(e) {
    if (questionNumber <= 3) {
        nextBtn.classList.remove("hidden");

    } else if (questionNumber == 4) {
        scoreBtn.classList.remove("hidden")
    }
    quizQuestions.map((question, idx) => {
        if (idx == questionNumber) {

            if (question.correctAnswer === e.target.dataset.answer) {
                e.target.classList.add("bg-green-500");
                score++;
            } else if (question.correctAnswer !== e.target.dataset.answer) {
                console.log("qAnswer", question.correctAnswer);
                console.log("data", e.target.dataset.answer);
                document.querySelectorAll(".option").forEach(option => option.dataset.answer == question.correctAnswer ? option.classList.add("bg-green-500") : "")
                e.target.classList.add("bg-red-500");
            }
        }
    })
}

function displayScore() {
    quizContainerEle.innerHTML = `
    <div class="py-20 mb-5">
        <h1 class="text-3xl font-bold text-slate-800">
            Your score is ${score} / 5.
        </h1>
    </div>
    `;
    scoreBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden")
}

function resetQuiz() {
    score = 0;
    questionNumber = 0;
    resetBtn.classList.add("hidden")
    renderQuestion(questionNumber);
}



// Calling Functions
renderQuestion(questionNumber);
nextBtn.addEventListener("click", nextQuestion)
scoreBtn.addEventListener("click", displayScore)
resetBtn.addEventListener("click", resetQuiz)