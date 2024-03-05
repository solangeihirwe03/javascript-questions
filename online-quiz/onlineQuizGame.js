const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin"],
        answer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Jupiter", "Mars", "Earth"],
        answer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Michelangelo", "Vincent van Gogh"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const feedback = document.getElementById("feedback");

    questionContainer.innerHTML = `<h2>${questions[currentQuestion].question}</h2>`;

    const choicesList = document.createElement("ul");
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        const choiceItem = document.createElement("li");
        choiceItem.textContent = questions[currentQuestion].choices[i];
        choiceItem.addEventListener("click", () => checkAnswer(i));
        choicesList.appendChild(choiceItem);
    }

    questionContainer.appendChild(choicesList);
    feedback.textContent = "";
    document.getElementById("next-button").disabled = true;
}

function checkAnswer(userChoice) {
    const correctAnswer = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");

    if (userChoice === correctAnswer) {
        feedback.textContent = "Correct!";
        score++;
    } else {
        feedback.textContent = `Incorrect. The correct answer is: ${questions[currentQuestion].choices[correctAnswer]}`;
    }

    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert(`Quiz completed! Your score is ${score} out of ${questions.length}`);
        return;
    }
    displayQuestion();
}

displayQuestion();

document.getElementById("next-button").addEventListener("click", nextQuestion);