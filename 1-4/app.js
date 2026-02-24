
let questionDiv = document.querySelector('.question');
let buttons = document.querySelectorAll('.answer-button');


class Question {
    constructor(questionName, correctAnswer, wrong1, wrong2, wrong3, wrong4) {
        this.questionName = questionName;
        this.correctAnswer = correctAnswer;
        this.answerArray = [this.correctAnswer, wrong1, wrong2, wrong3, wrong4];
    }
    displayQuestion() {
        questionDiv.innerHTML = this.questionName;
        for (let i = 0; i < this.answerArray.length; i++) {
            buttons[i].innerHTML = this.answerArray[i];
        }
        console.log(this.questionName)
    }
}


let questions = [
    new Question("5 + 5", "10", "15", "8", "20", "5"),
    new Question("10 - 3", "7", "5", "13", "10", "4"),
    new Question("4 x 2", "8", "6", "10", "4", "12")
]

let currentIndex = 0;
let currentQuestion = questions[currentIndex];


// 1. Mostrar la primera pregunta
currentQuestion.displayQuestion();

// 2. Agregar el evento click a cada boton una sola vez
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // VALIDACION: el texto del boton es igual a la respuesta correcta?
        if (btn.innerHTML == currentQuestion.correctAnswer) {
            console.log('✅ Correcto!');
        } else {
            console.log('❌ Incorrecto!');
        }

        // ITERACION: Pasar a la siguiente pregunta
        currentIndex++;

        // VALIDACION: Si hay preguntas en la lista se muestra la siguiente
        if (currentIndex < questions.length) {
            currentQuestion = questions[currentIndex];
            currentQuestion.displayQuestion();
        }
        // else {
        //     // EXTRA: Si no tenemos preguntas, removemos los botones y cambiamos el texto
        //     questionDiv.innerHTML = "Fin!";
        //     document.querySelector('.options').style.display = 'none';
        // }
    })

});
