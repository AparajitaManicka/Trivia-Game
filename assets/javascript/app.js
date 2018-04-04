var correctAnswer = 0;
var wrongAnswer = 0;
var userguess;
var questionArray = [
    {
        question: "What is the first element on the periodic table?",
        answers: { a: "Hydrogen", b: "Oxygen", c: "Nitrogen" },
        correct: "Hydrogen"
    }, 
    
    {
        question: "What is the centre of an atom called?",
        answers: { a: "Electron", b: "Proton", c: "Nucleus" },
        correct: "Nucleus"
    },

    {
        question: "What is the chemical symbol for gold?",
        answers: { a: "Fe", b: "Au", c: "Ag" },
        correct: "Au"
    },

    {
        question: "What is the name given to substances that are initially involved in a chemical reaction?",
        answers: { a: "Catalyst", b: "Reactants", c: "Byproduct" },
        correct: "Reactants"
    },

    {
        question: "Atoms of the same chemical element that have different atomic mass are known as?",
        answers: { a: "Isotopes", b: "Isotonic", c: "Isotoner" },
        correct: "Isotopes"
    },

    {
        question: "What is the main gas found in the air we breathe?",
        answers: { a: "Hydrogen ", b: "Oxygen", c: "Nitogen" },
        correct: "Nitrogen"
    },

    {
        question: "What is H20 more commonly known as?",
        answers: { a: "Salt", b: "Water", c: "Acid" },
        correct: "Water"
    },

    {
        question: "What is the third most common gas found in the air we breathe?",
        answers: { a: "Argon", b: "Nitrogen", c: "Oxygen" },
        correct: "Argon"
    },

    {
        question: "At room temperature, what is the only metal that is in liquid form?",
        answers: { a: "Selenium", b: "Zinc", c: "Mercury" },
        correct: "Mercury"
    },

    {
        question: "What orbits the nucleus of an atom?",
        answers: { a: "Protons", b: "Electrons", c: "Neutrons" },
        correct: "Electrons"
    }
]
$("#start").on('click', function () {
    $("h2").hide();
    displayquestions();
    resetTimer();
    setTimer();
})

var count = 30;
var interval = 0;

function setTimer() {
    interval = setInterval(function () {
        
        document.getElementById('count').innerHTML = "<b>Time Remaining:<b>" + count;
        count--;
        console.log("Timer started");
        
        if (count == -1) {
            //   document.getElementById('count').innerHTML = 'Done';
            alert("You're out of time!");
            
            clearInterval(interval);


             for (i = 0; i < questionArray.length; i++) {
        var options = document.getElementsByName(i);

        for (var x = 0; x < options.length; x++) {
            if (options[x].checked) {
                console.log("User guess:" + options[x].value);
                userguess = options[x].value;
            }
        }

        if (userguess === questionArray[i].correct) {
            correctAnswer++;
            console.log("Correct:" + correctAnswer);
        }
        else {
            wrongAnswer++;
            console.log("Wrong:" + wrongAnswer);
        }
    }


            result();
            $("#questions").html("<br>Total number of questions: " + questionArray.length + "<br>");
    $("#correct").html("<br>Questions answered correctly:" + correctAnswer + "<br>");
    $("#wrong").html("<br>Questions answered wrongly:" + wrongAnswer + "<br><br><br>");
        }

    },1000);
}

function stopTimer() {
    clearInterval(interval);
    console.log("Timer stopped");
}
function resetTimer() {
    interval = 0;
    count = 30;
    console.log("Timer reset");
}
function displayquestions() {
    $("#start").hide();
    $("#submit").show();
    $("#questions").hide();
    $("#correct").hide();
    $("#wrong").hide();
    $("#gif").show();

    for (i = 0; i < questionArray.length; i++) {

        console.log(questionArray[i].question);

        $("#quiz").append(questionArray[i].question + '<br>');

        $("#quiz").append('<input type="radio" name="' + i + '" id="' + i + 'A" value="' + questionArray[i].answers.a + '">' + questionArray[i].answers.a + '<br>');
        $("#quiz").append('<input type="radio" name="' + i + '" id="' + i + 'B" value="' + questionArray[i].answers.b + '">' + questionArray[i].answers.b + '<br>');
        $("#quiz").append('<input type="radio" name="' + i + '" id="' + i + 'C" value="' + questionArray[i].answers.c + '">' + questionArray[i].answers.c + '<br>');

    }
    $("#count").show(); 
}

function result() {

    console.log("called result");
    $("#quiz").empty();
    $("#submit").hide();
    $("#start").show();
    $("#questions").html("<br>Total number of questions: " + questionArray.length + "<br>");
    $("#correct").html("<br>Questions answered correctly:" + correctAnswer + "<br>");
    $("#wrong").html("<br>Questions answered wrongly:" + wrongAnswer + "<br><br><br>");
    $("#count").hide();
    $("#questions").show();
    $("#correct").show();
    $("#wrong").show();
    $("#gif").hide();
}

$("#submit").on('click', function () {
    stopTimer();

    for (i = 0; i < questionArray.length; i++) {
        var options = document.getElementsByName(i);

        for (var x = 0; x < options.length; x++) {
            if (options[x].checked) {
                console.log("User guess:" + options[x].value);
                userguess = options[x].value;
            }
        }

        if (userguess === questionArray[i].correct) {
            correctAnswer++;
            console.log("Correct:" + correctAnswer);
        }
        else {
            wrongAnswer++;
            console.log("Wrong:" + wrongAnswer);
        }
    }

    result();

    function reset() {
        $("#quiz").empty();
        $("#submit").hide();
        correctAnswer = 0;
        wrongAnswer = 0;

    }
    reset();
})
