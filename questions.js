const numToAlpha = require('./num_to_alpha_converter.js') 
class Question {
  constructor(title, options, answer) {
    this.title = title;
    this.options = options;
    this.answer = answer;
	  this.result = false;
  }

  getOptions() {
    return this.options.map((option, index) => `${numToAlpha.alphaForNum(index)}. ${option}`).join("\n");
  }

  isAnsweredCorrectly(participantAnswer) {
    return participantAnswer == this.answer;
  }

  markAnswer(participantAnswer) {
    if(this.isAnsweredCorrectly(participantAnswer)) {
      this.result = true;
    }
  }
  getCorrectAnswer() {
    return this.answer;
  }
	
  getResult() {
	  return this.result;
  }
}

const questions = [
  new Question("What is 1+1?", [1,2,3,4], 'B'),
  new Question("The monkey is a?", ["Mammal", "Reptile","Snail", "Bird"], 'A')
];

function questionsSet() {
  return questions;
}

module.exports = {
  questionsSet
}