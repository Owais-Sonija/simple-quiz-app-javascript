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

// Getting Elements
let questionNumber = 0;

const quizContainerEle = document.querySelector(".quiz_container");


// Creating Functions

function renderQuestion(qNumber) {
    quizQuestions.map((question, idx) => {
        if (idx == qNumber) {
            quizContainerEle.innerHTML = `
            <div class="question my-6">
                    <h2 class="question_text text-2xl font-semibold">${idx + 1}. ${question.questionText}</h2>
                    <div class="options">
                        <ul>
                            ${question.options.map((option) =>
                `<li class="option py-2 px-3 border border-slate-800 rounded my-4 cursor-pointer hover:bg-slate-600 hover:border-slate-50 hover:text-slate-50 transition-all duration-150 ease-in-out">${option}</li>`
            ).join("")}
                        </ul>
                    </div>
                </div>
            `
        }
    })
}


// Calling Functions
renderQuestion(questionNumber)