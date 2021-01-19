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
    return participantAnswer.toUpperCase() == this.answer;
  }

  markAnswer(participantAnswer) {
    if(this.isAnsweredCorrectly(participantAnswer)) {
      this.result = true;
    }
    return this.result;
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
  new Question("The monkey is a?", ["Mammal", "Reptile","Snail", "Bird"], 'A'),
  new Question("Sun raises in the?",["North","South","East", "West"], 'C'),
  new Question('What is the equation of water?',["CO2","NO2","XYZ","H2O"],'D'),
  new Question('How many planets in our solar system?',[6,8,9,10],'C')
];

function questionsSet() {
  return questions;
}

module.exports = {
  questionsSet
}