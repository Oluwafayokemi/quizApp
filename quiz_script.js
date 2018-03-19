const container = document.querySelector("#quizContainer");
const quizQuestion = document.querySelector("#question");
const choice1 = document.querySelector("#option1");
const choice2 = document.querySelector("#option2");
const choice3 = document.querySelector("#option3");
const choice4 = document.querySelector("#option4");
const grid = document.querySelector('#grid');
const nextButton = document.querySelector("#nextButton");
const result = document.querySelector("#result");

let currentQuestion = 0,
    score = 0,
    totalQuestions = questions.length,
    answer = null;

let selectedOption = document.querySelectorAll('input[type=radio]');

const checkRadioButton = () => {
  for(let i = 0; i<selectedOption.length; i++){
    if(selectedOption[i].checked){
      nextButton.removeAttribute('disabled');
      answer = selectedOption[i].value;
    }
  }
};

const unCheckRadioButton = () => {
  for(let i=0; i<selectedOption.length; i++){
    selectedOption[i].checked = false;
  }
};

const setQuestion = (questionNumber) =>  {
    let onQuestion = questions[questionNumber];
    quizQuestion.textContent = (questionNumber + 1) + ". " + onQuestion.question;

    choice1.textContent = onQuestion.option1;
    choice2.textContent = onQuestion.option2;
    choice3.textContent = onQuestion.option3;
    choice4.textContent = onQuestion.option4;
    checkRadioButton();
}

const setNextQuestion = () => {
  if(questions[currentQuestion].answer === answer) {
    score += 5;
  }
  unCheckRadioButton();
  currentQuestion++;
  
  if(currentQuestion == totalQuestions - 1) {
    nextButton.innerHtml = 'Finish';
    nextButton.setAttribute('disabled', 'disabled');
  }
  if(currentQuestion === totalQuestions){
    grid.style.display = 'none';
    result.style.display = 'block';
    result.textContent = 'Your Score: '+ score;
  }
  nextButton.setAttribute('disabled', 'disabled');  
  if(currentQuestion < totalQuestions){
    setQuestion(currentQuestion);
  }
}
setQuestion(currentQuestion);
