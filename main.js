const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question_container');
const questionElement = document.getElementById('question');
const optionbuttons = document.getElementById('options');

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex ++,
    setNextQuestion()
})

function startGame() {
    console.log('Quiz Started');
    startButton.classList.add('hide');
    shuffledQuestion = questions.sort(() => Math.random - .5);
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide');
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
 showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.Text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        optionbuttons.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add ('hide')
    while (optionbuttons.firstChild) {
        optionbuttons.removeChild(optionbuttons.firstChild)
    }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(optionbuttons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct) 
})
if (shuffledQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText ='Restart'
    startButton.classList.remove('hide')
}
nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')

    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
const questions = [
    {
        question: 'What is the structure of a Website?',
        answers: [
            {Text: 'HTML', correct: true},
            {Text: 'CSS', correct: false},
            {Text: 'JavaScript', correct: false},
            {Text: 'BASIC', correct: false}
            
        ]
    },

    {
        question: 'Who has Abuja Gen Z on a chokehold right now?',
        answers: [
            {Text: 'SSSoundGawd (fka BraveHeart)', correct: false},
            {Text: 'Odumodublvck', correct: true},
            {Text: 'PsychoYP', correct: false},
            {Text: 'Smada', correct: false}
            
        ]
    },

    {
        question: 'What is the Current version of CSS?',
        answers: [
            {Text: '1', correct: false},
            {Text: '3', correct: true},
            {Text: '5', correct: false},
            {Text: '2', correct: false}
            
        ]
    },

    {
        question: 'What Team is Russell Westbrook on?',
        answers: [
            {Text: 'LA Clippers', correct: true},
            {Text: 'OKC Thunder', correct: false},
            {Text: 'LA Lakers', correct: false},
            {Text: 'Houston Warriors', correct: false}
            
        ]
    }
]