// ---------------Qusetions Array of Object---------------

quizQustions = [
    {
        num: 1,
        question: "HTML Stands for ?",
        option: {
            a: "Hyper Text Markup Language",
            b: "Hiper Text Markup Languager",
            c: "Hyper Text Scripting Language",
            d: "Hyper Text React Language",
        },
        answer: "Hyper Text Markup Language"

    },

    {
        num: 2,
        question: "Which type of JavaScript Language is ?",
        option: {
            a: "Object Oriented",
            b: "Object Base",
            c: "Assembly Language",
            d: "High Level Language",
        },
        answer: "Object Base"

    },
    {
        num: 3,
        question: "In Block Chain Technology we study following ",
        option: {
            a: "Solidity, Smart contracts ,Crypto coin etc",
            b: "Mobile Development",
            c: "Material UI",
            d: "Cloud Native Computing",
        },
        answer: "Solidity, Smart contracts ,Crypto coin etc"

    },
    {
        num: 4,
        question: "React is the Libaray of ? ",
        option: {
            a: "Frontend",
            b: "NodeJS",
            c: "JavaScript",
            d: "Cloud Base Components",
        },
        answer: "JavaScript"

    },
    {
        num: 5,
        question: "CSS stands for ? ",
        option: {
            a: "Complete Style Sheet",
            b: "Style Sheet",
            c: "Cascading Script Sheet",
            d: "Cascading Style Sheet",
        },
        answer: "Cascading Style Sheet"

    },
    {
        num: 6,
        question: "Index of an Array is start from ?",
        option: {
            a: "zero",
            b: "1",
            c: "alphabets",
            d: "numbers",
        },
        answer: "zero"

    },

]

// -----------Coding starts here ! ------------

var htmlQuestion = document.getElementById("htmlQuestion");
var htmlOption = document.getElementsByClassName("htmlOption");
var nextbtn = document.getElementById("nextbtn");
var spancounter = document.getElementById("spancounter");
var counter = 0;
var score = 0;

function setQuestion() {
    htmlQuestion.innerHTML = quizQustions[counter].question;
    htmlOption[0].innerHTML = quizQustions[counter].option.a;
    htmlOption[1].innerHTML = quizQustions[counter].option.b;
    htmlOption[2].innerHTML = quizQustions[counter].option.c;
    htmlOption[3].innerHTML = quizQustions[counter].option.d;

    // spancounter.innerHTML = counter + 1 + " / " + quizQustions.length;

}

function checkAns(e) {
    // console.log(e.innerHTML);
    nextbtn.className = "show";
    for (var i = 0; i < htmlOption.length; i++) {
        htmlOption[i].className += " disable";
    }

    if (e.innerHTML == quizQustions[counter].answer) {
        score += 10;
        e.className += " correct";
    }
    else {
        e.className += " wrong";

        for (var i = 0; i < htmlOption.length; i++) {

            if (htmlOption[i].innerHTML == quizQustions[counter].answer) {
                htmlOption[i].className += " correct";
            }
        }
    }
}




function nextQuestion() {
    counter++;
    if(counter<quizQustions.length){
        setQuestion();
        nextbtn.className = "hide";
        for (var i = 0; i < htmlOption.length; i++) {
            htmlOption[i].classList.remove("disable");
            htmlOption[i].classList.remove("correct"); // remove correct class
            htmlOption[i].classList.remove("wrong");    // remove wrong class
        }
        spancounter.innerHTML = counter + 1 + " / " + quizQustions.length;
    }
    else{
        
        nextbtn.className = "hide";
        console.log(score);
    }    


    }


    
    
    
    

