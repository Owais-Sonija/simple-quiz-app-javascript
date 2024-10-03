const quizQuestions = [
    {
        questionText: "What is the capital of Italy?",
        options: ["Paris", "Rome", "Berlin", "Madrid"],
        correctAnswer: "Rome"
    },
    {
        questionText: "Which gas do plants primarily absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        questionText: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: "Skin"
    },
    {
        questionText: "Which planet is known as the Earth’s 'sister planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Venus"
    },
    {
        questionText: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        questionText: "Which element has the chemical symbol 'Fe'?",
        options: ["Iron", "Fluorine", "Gold", "Copper"],
        correctAnswer: "Iron"
    },
    {
        questionText: "Who is the author of '1984'?",
        options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ernest Hemingway"],
        correctAnswer: "George Orwell"
    },
    {
        questionText: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Australia", "Africa", "South America"],
        correctAnswer: "Africa"
    },
    {
        questionText: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "O2", "N2"],
        correctAnswer: "H2O"
    },
    {
        questionText: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1920", "1918"],
        correctAnswer: "1912"
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
    if (questionNumber <= quizQuestions.length -2) {
        nextBtn.classList.remove("hidden");

    } else if (questionNumber == quizQuestions.length -1) {
        scoreBtn.classList.remove("hidden")
    }
    quizQuestions.map((question, idx) => {
        if (idx == questionNumber) {

            if (question.correctAnswer === e.target.dataset.answer) {
                e.target.classList.add("bg-green-500");
                score++;
            } else if (question.correctAnswer !== e.target.dataset.answer) {
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
            Your score is ${score} / ${quizQuestions.length}.
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