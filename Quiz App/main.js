const categorySelect = document.getElementById("category-select");
const searchBtn = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quiz-container");

searchBtn.addEventListener("click", async () =>{
    const selectedCategory = categorySelect.value;
    if(selectedCategory){
        await getQuestions(selectedCategory); // fetch questions from api
    }
})

async function getQuestions(category){
    try{
        const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            alert("No questions were found for this category.");
            return;
        }

        displayQuestions(data.results);
    } catch (error) {
        console.error("Error fetching questions:", error);
        alert("Failed to fetch questions. Please try again later.");
    }
}

function displayQuestions(questions){
    quizContainer.innerHTML = '';

    questions.forEach((questionData, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<h3>Q${index + 1}: ${questionData.question}</h3>`;

        const answers = [...questionData.incorrect_answers, questionData.correct_answer];
        answers.sort(() => Math.random() - 0.5);

        answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = () => checkAnswer(answer, questionData.correct_answer, button);
            questionElement.appendChild(button);
        });

        quizContainer.appendChild(questionElement);
    });
}

function checkAnswer(selectedAnswer, correctAnswer, button) {
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
        alert('Correct! 🎉');
    } else {
        button.classList.add('wrong');
        alert(`Wrong! ❌ The correct answer was: ${correctAnswer}`);
        
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
}
