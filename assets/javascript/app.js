$(document).ready(function() {

    var questions = [
        {
            question: "What is the name of the black hole?",
            answers: [
                "TARS",
                "Gargantua",
                "CASE",
                "Endurance",

          ],
            correct: 1
        },
        {
            question: "Who attempts to maroon the crew on the ice planet?",
            answers: [
                "Professor Brand",
                "Doyle",
                "Romilly",
                "Mann",
           ],
            correct : 3
        },
        {
            question: "While attempting to use the slingshot manuever to get out of pull of the black hole's gravity, time dilation adds how many years to the crew's mission?",
            answers: [
                "2",
                "12",
                "51",
                "120",
            ],
             correct : 2
        },
        {
            question: "Complete this quote: \"Rage against the dying of the _____\".",
            answers: [
                "light",
                "night",
                "sun",
                "Earth",
            ],
            correct: 0
        },
        {
            question: "Who is Murph's \"ghost\"?",
            answers: [
                "Coop",
                "Tom",
                "Brand",
                "Donald",
            ],   
            correct: 0
        },
        {
            question: "Near which planet in our solar system is the wormhole positioned?",
            answers: [
                "Mars",
                "Jupiter",
                "Saturn",
                "Neptune",
            ],
            correct : 2
        },
        {
            question: "Whose planet is the \"ocean world\"?",
            answers: [
                "Mann",
                "Doyle",
                "Edmunds",
                "Miller",
            ],
            correct : "Miller"
        },
        {
            question: "Through which method does Coop transmit the quantum data to Murph?",
            answers: [
                "video message",
                "Morse Code",
                "tesseract",
                "telemetry",
            ],
            correct : "Morse Code"
        
        }
    ];

//FIX JS CODE ABOVE

    for (var iterator = 0; iterator < questions.length; iterator++) {
        var questionDiv = $("<div>")
        questionDiv.addClass("form-group");

        questionDiv.append("<p>" + questions[iterator].question + "</p>");

        for (var iterator2 = 0; iterator2 < questions[iterator].answers.length; iterator2++) {
            var formCheck = $("<div>");
            formCheck.addClass("form-check");

            var radioButton = $("<input>");
            radioButton.attr("type", "radio");

            radioButton.attr("name", "question" + iterator);

            radioButton.attr("value", questions[iterator].answers[iterator2]);

            var radioLabel = $("<label>");
            radioLabel.addClass("form-check-label");
            radioLabel.text(questions[iterator].answers[iterator2])

            formCheck.append(radioButton);
            formCheck.append(radioLabel)

            questionDiv.append(formCheck);
        }


        $("#questions-view").append(questionDiv);
       
        
    }
    
    // for (var i = 0; i < questions.length; i++){
    //     document.getElementById("question"+i).innerHTML = questions[i].question;
    //     if (choice == correct){

    //     }
    //     //document.createElement("span")
    // }
    
    /*var correctAnswers = 0;
    if statement
    var incorrectAnswers = 0;
    var unanswered = 0;
    
    document.getElementById("question1").innerHTML = "How tall are you?";
    */







});