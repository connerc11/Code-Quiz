

var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var submitButton = document.getElementById('submit')



 
var myQuestions = [
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

