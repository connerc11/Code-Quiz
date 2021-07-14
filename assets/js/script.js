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
    showQuestions(3);
}

let display8count = 0;

const next8btn = box8quiz.querySelector(".next8btn")

function showQuestions(index){
    const display8text = document.querySelector(".display8text");
    const options8list = document.querySelector(".options8list")
    let display8tag = '<span>'+ questions[index].question +'<span>';
    let options8tag = '<div class="option>'+ questions[index].options[0] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                      + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    display8text.innerHTML = display8tag;
    options8list.innerHTML = options8tag
}



 




