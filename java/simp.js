document.addEventListener('DOMContentLoaded',function(){

const questionOne = document.getElementById('question-one');
const questionTwo = document.getElementById('question-two');
const questionThree = document.getElementById('question-three');
const questionFour = document.getElementById('question-four');
const questionFive = document.getElementById('question-five');
const woohooPic = document.getElementById('woohoo-pic');
const dohPic = document.getElementById('doh-pic');
const tryAgain = document.getElementById('try-again');
const nextQuestion = document.getElementById('next-question');
const answers = Array.from(document.getElementsByClassName('answer'));

let currentQuestion = 1;

questionOne.hidden = false;
questionTwo.hidden = true;
questionThree.hidden = true;
questionFour.hidden = true;
questionFive.hidden = true;
woohooPic.hidden = true;
dohPic.hidden = true;
tryAgain.hidden = true;
nextQuestion.hidden = true;

answers.forEach(function(answer) {
  answer.addEventListener('click', function() {
    if (answer.getAttribute('data-correct') === 'true'){
      questionOne.hidden = true;
      questionTwo.hidden = true;
      questionThree.hidden = true;
      questionFour.hidden = true;
      questionFive.hidden = true;
      woohooPic.hidden = false;
      nextQuestion.hidden = false;
    } else {
      questionOne.hidden = true;
      questionTwo.hidden = true;
      questionThree.hidden = true;
      questionFour.hidden = true;
      questionFive.hidden = true;
      dohPic.hidden = false;
      tryAgain.hidden = false;
    };
  });
});

tryAgain.addEventListener('click', function(){
  questionOne.hidden = false;
  questionTwo.hidden = true;
  questionThree.hidden = true;
  questionFour.hidden = true;
  questionFive.hidden = true;
  woohooPic.hidden = true;
  dohPic.hidden = true;
  tryAgain.hidden = true;
  nextQuestion.hidden = true;
  currentQuestion = 1;
});

nextQuestion.addEventListener('click', function(){
  if (currentQuestion === 1) {
    questionOne.hidden = true;
    questionTwo.hidden = false;
    currentQuestion++
  } else if (currentQuestion === 2) {
    questionTwo.hidden = true;
    questionThree.hidden = false;
    currentQuestion++
  } else if (currentQuestion === 3) {
    questionThree.hidden = true;
    questionFour.hidden = false;
    currentQuestion++
  } else if (currentQuestion === 4) {
    questionFour.hidden = true;
    questionFive.hidden = false;
    currentQuestion++
  } else if (currentQuestion === 5) {
    location.replace("./gif.html");
  }

  woohooPic.hidden = true;
  nextQuestion.hidden = true;
});

});