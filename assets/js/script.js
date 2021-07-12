var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var mainEl = document.getElementById('main');
var quizcontainerEl = document.getElementById('quiz')
var resultsEl = document.getElementById('results')
var myQuestions = []



// var message =
//   'Get ready to take a coding quiz! Hint it revolves around JavaScript!';
//   var words = message.split(' ');

//   // Timer that counts down from 5
// function countdown() {
//     var timeLeft = 5;
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function() {
//       // As long as the `timeLeft` is greater than 1
//       if (timeLeft > 1) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.textContent = timeLeft + ' seconds remaining';
//         // Decrement `timeLeft` by 1
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//         timerEl.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//         timerEl.textContent = '';
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);
//         // Call the `displayMessage()` function
//         displayMessage();
//       }
//     }, 2000);
//   }
  
//   // Displays the message one word at a time
//   function displayMessage() {
//     var wordCount = 0;
  
//     // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
//     var msgInterval = setInterval(function() {
//       if (words[wordCount] === undefined) {
//         clearInterval(msgInterval);
//       } else {
//         mainEl.textContent = words[wordCount];
//         wordCount++;
//       }
//     }, 500);
//   }
  
//   startBtn.onclick = countdown;
  
 
const myQuestions = [
    {
      question: "What does 3 equal signs mean?",
      answers: {
        a: "Close to",
        b: "Approximately equal",
        c: "Exactly equal"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is not a way to show a variable in JavaScript",
      answers: {
        a: "var",
        b: "const",
        c: "tog",
        d: "let",
      },
      correctAnswer: "c"
    },
    {
      question: "Which wording can you use to properly link JavaScript with HTML?",
      answers: {
        a: "Tight",
        b: "Script",
        c: "displayJS",
        d: "RequireJS"
      },
      correctAnswer: "b"
    },
    {
        question: "Which is the proper way of hiding code from being displayed?",
        answers: {
          a: "//",
          b: "?0",
          c: "?#",
          d: "hideC",
        },
        correctAnswer: "a"
      },
      {
        question: "Whic is the proper format for creating a JavaScript function?",
        answers: {
          a: "function the function:",
          b: "function myFunction()",
          c: "function hiFunction (",
          d: "function myfunction )"
        },
        correctAnswer: "b"
      }

    
  ];
  
  



  