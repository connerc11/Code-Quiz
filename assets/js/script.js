//array for variables and the questions

var questions = [
    {
        numb: 1,
        question: "What does 3 equal signs mean?",
        answer: "Exactly Equal",
        options: [
             "Close to",
             "Approximately equal",
             "Exactly equal",
             "Near the closest choice"
        ]
    },
    {
        numb: 2,
        question: "Which one of these is not a way to show a variable in JavaScript?",
        answer: "tog",
        options: [
            "var",
            "const",
            "tog",
            "let",
        ]
    },
    {
        numb: 3,
        question: "Which wording can you use to properly link JavaScript with HTML?",
        answer: "Script",
        options: [
             "Tight",
             "Script",
             "displayJS",
             "pushJS"
        ]
    },
    {
        numb: 4,
        question: "Which is the proper way of hiding code from being displayed?",
        answer: "//",
        options: [
             "?0",
             "hideC",
             "/)",
             "//"
        ]
    },
    {
        numb: 5,
        question: "Whic is the proper format for creating a JavaScript function?",
        answer: "function myFunction()",
        options: [
             "function the function:",
             "function hiFunction",
             "function myFunction()",
             "function myfunction )"
        ]
    },
    
];



//The Variables that are linking the buttons //

var start8btn = document.querySelector(".start8btn button");
var info8box = document.querySelector(".info8box");
var exit8btn = info8box.querySelector(".exit8btn .leave");
var continue8btn = info8box.querySelector(".exit8btn .continue");
var box8quiz = document.querySelector(".box8quiz")

//This will allow the quiz to added//
start8btn.onclick = ()=>{
    info8box.classList.add("activeInfo");
}

//THis will take you back to the beginning//
exit8btn.onclick = ()=>{
    info8box.classList.remove("activeInfo");
}

//This should prompt the quiz//
continue8btn.onclick = ()=>{
    info8box.classList.remove("activeInfo");
    box8quiz.classList.add("activeQuiz")
    showQuestions(0);
    queCount(1);
}

let display8count = 0;
let que8numb = 1;

const next8btn = box8quiz.querySelector(".next8btn")

//when next button is clicked
next8btn.onclick = ()=>{
    if(display8count < questions.length - 1) {
        display8count++;
        que8numb++;
        showQuestions(display8count);
        queCount(que8numb);
    }else{
        console.log("Quiz has been finished");
    }
}

function showQuestions(index){
    const display8text = document.querySelector(".display8text");
    const options8list = document.querySelector(".options8list")
    let display8tag = '<span>'+ questions[index].numb + "." + questions[index].question +'</span>';
    let options8tag = '<div class="option>'+ questions[index].options[0] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    display8text.innerHTML = display8tag;
    options8list.innerHTML = options8tag;
    const option = options8list.querySelectorAll(".option");
        for (let i=0; i <option.length; index++) {
            option[i].setAtribute("onclick", "optionSelected(this)")
        }
}

function queCount(index){
    const question8counter = box8quiz.querySelector(".final8que")
    let totalCount = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions</span>';
    question8counter.innerHTML = totalCount;
}

 




