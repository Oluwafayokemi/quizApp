var container = document.querySelector("#quizContainer");
var questionEl = document.querySelector("#querySelector");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var options = document.querySelectorAll('input[type=radio]');
var nextButton = document.querySelector("#nextButton");
var result = document.querySelector("#result");

var currentQuestion = 0,
	 score = 0,
	 totalQuestions = questions.length;

function loadQuestion(questionIndex) {
    // 'use strict';
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}
function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio:checked');
	if(!selectedOption) {
		alert('please select your answer');
		return;
	}		
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer) {
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestions - 1) {
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totalQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
