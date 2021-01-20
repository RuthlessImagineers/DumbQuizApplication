const inputReader = require('readline-sync');
const questions = require('./src/questions.js');

console.log("Welcome to the dumb quiz");
const goAhead = inputReader.keyInYN("Are you ready to start the quiz?\n");

if(!goAhead){ 
  console.log("Well.. its fine, come back when you are ready.");
  process.exit();
}
console.log();
var name = inputReader.question("Very well.. lets get started.\nBut before that, what should I call you?\n");

name = getNameIfEmpty(name);

console.log(`Alright ${name} lets get started..`);

console.log("***************************************")

const questionsSet = questions.questionsSet();

questionsSet.forEach(askQuestion);

console.log("***************************************")

const validAnswers = questionsSet.filter(correctlyAnsweredQuestions);

const invalidAnswers = questionsSet.filter(inCorrectlyAnsweredQuestions);

summary(validAnswers, invalidAnswers);


function askQuestion(question) {
  console.log();
  const answer = formatQuestion(question);
  const result = question.markAnswer(answer);
  if(result) {
    console.log("Thats a correct answer!!");
  } else {
    console.log(`Looks like it wasn't that dumb question!! You got it wrong.\nThe correct answer is ${question.getCorrectAnswer()}`)
  }
  console.log();
  console.log("---------------------------------");
}

function formatQuestion(question) {
  return inputReader.question(`${question.title}\n${question.getOptions()}\n`);
}

function correctlyAnsweredQuestions(question) {
  return question.getResult() == true;
}

function inCorrectlyAnsweredQuestions(question) {
  return question.getResult() == false;
}

function summary(validQuestions, inValidQuestions) {
  console.log();
  console.log("Thanks for taking the quiz.\nHere is the summary");
  console.log("=x=x=x=x=x=x=x=x=x=x=x=x=x=");
  console.log(`You have answered ${validQuestions.length} correctly`);
  console.log(`You have scored ${getScorePercentage(validQuestions)} %.`);
  console.log("=x=x=x=x=x=x=x=x=x=x=x=x=x=");
}

function getScorePercentage(validQuestions) {
  return (validQuestions.length/questionsSet.length)*100
}

function getNameIfEmpty(name) {
  if(name === "") {
    return "Demo User";
  }
  return name;
}