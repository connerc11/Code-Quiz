//The Variables that are linking the buttons //

var start8btn = document.querySelector(".start8btn button");
var info8box = document.querySelector(".info8box");
var exit8btn = info8box.querySelector(".exit8btn .leave");
var continue8btn = info8box.querySelector(".exit8btn .continue");
var box8quiz = document.querySelector(".box8quiz");
var timer8count = box8quiz.querySelector(".time .seconds");
const options8list = document.querySelector(".options8list");



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
    startTimer(20);
}

let display8count = 0;
let que8numb = 1;
let time8counter;
let clock = 20;

const next8btn = box8quiz.querySelector(".next8btn")

//when next button is clicked
next8btn.onclick = ()=>{
    if(display8count < questions.length - 1) {
        display8count++;
        que8numb++;
        showQuestions(display8count);
        queCount(que8numb);
        clearInterval(time8counter);
        startTimer(clock);
    }else{
        console.log("Quiz has been finished");
    }
}

function showQuestions(index){
    const display8text = document.querySelector(".display8text");
    let display8tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let options8tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    display8text.innerHTML = display8tag;
    options8list.innerHTML = options8tag;
    const option = options8list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer) {
    clearInterval(time8counter);
    let theirAns = answer.textContext;
    console.log(theirAns);
    let rightAns = questions[display8count].answer;
    let allOptions = options8list.children.length;
    if(theirAns === rightAns) {
        answer.classList.add("correct");
        console.log("Answer is Right")
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is Wrong")

        for(let i = 0; i < allOptions; i++) {
            if(options8list.children[i].textContent === rightAns){
                options8list.children[i].setAttribute("class", "option correct");
            }
        }

        }
   for (let i = 0; i < allOptions; i++) {
    options8list.children[i].classList.add("disabled")
   }
}

function startTimer(time){
    time8counter = setInterval(timer, 1000);
    function timer(){
        timer8count.textContent = time;
        time--;

        if(time < 0){
            clearInterval(counter);
            time8counter.textContent = "00"
        }
    }
}




function queCount(index){
    const question8counter = box8quiz.querySelector(".final8que")
    let totalCount = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions</span>';
    question8counter.innerHTML = totalCount;
}

 




