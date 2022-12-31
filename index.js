// small quiz using basic concepts of string,array,forloop,objects

var readlineSync = require("readline-sync");
var userAnswer = readlineSync.question("May I have your Name? ");
var score = 0;
console.log("Welcome " + userAnswer + " to DO YOU KNOW Prabhat?");
console.log("Let's start the quiz");
console.log("________________")

// function play for the questions and answer

function play( question, answer ) {
  var userAnswer = readlineSync.question(question);


  if ( userAnswer. toUpperCase() == answer. toUpperCase() ) {
    console.log("You are right! ");
    score = score + 1;
  }
  else {
    console.log("You are wrong! ");
  }
  console.log("Your current score is: ", score);
  console.log("________________");
}

// play("Where Am I from? ", "Dehradun")
// play("What am I learning? ", "Javascript")

//objects

var questionOne = {
  question: "Where Am I from? ", 
  answer: "Dehradun"
}

var questionTwo = {
  question: "Which coding language am I learning? ",
  answer: "Javascript" 
}

var questionThree = {
  question: "What's my Age? ",
  answer: "25"
}

var questionFour = {
  question: "What's the name of my pet? ", 
  answer: "Twixy"
}

var questionFive = {
  question: "What's my fav drink in summers? ", 
  answer: "coconut water"
}



var highScore =[{
name: "Prabhat",
score: 5
},  
{
name: "Jagriti",
score: 4
}
]


          






var userQuestion = [questionOne,questionTwo, questionThree,questionFour, questionFive];
 for ( i = 0; i < userQuestion.length; i++){
   var currentQuestion = userQuestion[i];
   play(currentQuestion.question, currentQuestion.answer)
   }
console.log("Great! Your final score is: ", score);
console.log("_________")
console.log("Check out the high scores! ")


for( var i = 0; i < highScore.length; i++){
  var currentHighScore = highScore[i];
  console.log(currentHighScore.name, currentHighScore.score);
  
  
}
      // checking if the user beats the high score
for (i = 0; i < highScore.length; i++){
  var currentScore = highScore[i];
}
  if( score <= currentScore.score){
    console.log("You didn't beat the High score! ")
  }
  else{
    console.log("You broke the record")
  
}




