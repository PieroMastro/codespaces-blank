
let question = document.querySelector('.question');
let button = document.querySelectorAll('.answer-button');



class Question {
  constructor(questionName, correctAnswer, wrong1, wrong2, wrong3, wrong4) {
    this.questionName = questionName;
    this.answerArray = [correctAnswer, wrong1, wrong2, wrong3, wrong4];
  }
  displayQuestion() {
    question.innerHTML = this.questionName;
    for (let i = 0; i < this.answerArray.length; i++) {
      button[i].innerHTML = this.answerArray[i];
    }
  }
}


q1 = new Question('10 + 10', '20', '15', '25', '30', '10');

q1.displayQuestion();