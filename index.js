const inputReader = require('readline-sync');
const questions = require('./questions.js');

console.log("Welcome to the dumb quiz");
const goAhead = inputReader.keyInYN("Are you ready to the quiz?\n");

if(!goAhead){ 
  console.log("Well.. its fine, come back when you are ready.");
  process.exit();
}

const name = inputReader.question("Very well.. lets get started. But before that, what should I call you?\n");

console.log(`Alright ${name} lets get started..`);

const questionsSet = questions.questionsSet();

questionsSet.forEach(askQuestion);

// const name = inputReader.question("Welcome to the dumb quiz.")
// console.log(`Welcome ${name}`);


function askQuestion(question) {
  const answer = formatQuestion(question);
  question.markAnswer(answer);
  console.log(question.getResult());
  console.log(question.getCorrectAnswer());
}

function formatQuestion(question) {
  return inputReader.question(`${question.title}\n${question.getOptions()}\n`);
}
