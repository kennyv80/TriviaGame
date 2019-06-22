$(document).ready(function() {

    var questions = [
        {
            question: "What is the name of the black hole?",
            answers: {
                choiceA : "TARS",
                choiceB : "Gargantua",
                choiceC : "CASE",
                choiceD : "Endurance",
                correct: "Gargantua"

            },
            //answer: "happy"
        },
        {
            question: "Who attempts to maroon the crew on the ice planet?",
            choiceA: "Professor Brand",
            choiceB: "Doyle",
            choiceC: "Romilly",
            choiceD: "Mann",
            correct : "Mann"
        },
        {
            question: "While attempting to use the slingshot manuever to get out of pull of the black hole's gravity, time dilation adds how many years to the crew's mission?",
            choiceA: "2",
            choiceB: "12",
            choiceC: "51",
            choiceD: "120",
            correct : "51"
        },
        {
            question: "Complete this quote: \"Rage against the dying of the _____\".",
            choiceA: "light",
            choiceB: "night",
            choiceC: "sun",
            choiceD: "Earth",
            correct : "Light"
        },
        {
            question: "Who is Murph's \"ghost\"?",
            choiceA: "Coop",
            choiceB: "Tom",
            choiceC: "Brand",
            choiceD: "Donald",
            correct : "Coop"
        },
        {
            question: "Near which planet in our solar system is the wormhole positioned?",
            choiceA: "Mars",
            choiceB: "Jupiter",
            choiceC: "Saturn",
            choiceD: "Neptune",
            correct : "Saturn"
        },
        {
            question: "Whose planet is the \"ocean world\"?",
            choiceA: "Mann",
            choiceB: "Doyle",
            choiceC: "Edmunds",
            choiceD: "Miller",
            correct : "Miller"
        },
        {
            question: "Through which method does Coop transmit the quantum data to Murph?",
            choiceA: "video message",
            choiceB: "Morse Code",
            choiceC: "tesseract",
            choiceD: "telemetry",
            correct : "Morse Code"
        },
    ];
    
    for (var i = 0; i < questions.length; i++){
        document.getElementById("question"+i).innerHTML = questions[i].question;

        document.createElement("span")
    }
    
    /*var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    
    document.getElementById("question1").innerHTML = "How tall are you?";
    */







});