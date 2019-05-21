// PSEUDO CODE

// MVP - Quiz
// This will be a multiple choice quiz.
// There will be 5 questions.  4 choices per question.
// A question and it's 4 options + answer will act as a template.
// There may be an array of 5 questions.  Unsure if an array is actually needed.
// Questions and their respective answers will be placed in an object.
// Once the answers are ALL selected, the user can click on 'submit'.
// Submit will result in the answers to be populated.
// Answers will populate straight into the DOM.

// STRETCH GOALS
// Each question will have it's own page.
// A score will be calculated.
// Answer + score will populate in the form of a modal after each question is submitted.
// The answer will show what the user selected vs the correct answer via color coding.  Green for 'right' and red for 'wrong'.
// Last page will have the grand total.




// ~~~STEPS~~~
  // STEP ONE: filter the object so that only items of desire are displayed

  // STEP TWO: write a function that displays result on the page with the correct answer. HINT: What kind of information (paramaters) does this funciton need to properly display all of our information?

  // STEP THREE: display final total result on the page

  // STEP FOUR: add an event listener that will notice when a user clicks on a next/submit button, find out which answer they have selected
 
 
//   , and call our display items method again. Don't forget to update the navigation, too!



// name spacing
const disQuiz = {};


disQuiz.answerGuide = {
    question1: {
        answer: 'optionc',
        fact: `Oswald the Lucky Rabbit was created by Walt Disney as his mascott in 1927.  Walt Disney later came up with the creation of Mickey Mouse after Walt lost the rights to Oswald to Universal Studios.`
    },
    question2: {
        answer: 'optionb',
        fact: `Mortimer Mouse was the original name Walt Disney wanted to give Mickey.  However, Walt Disney's wife, Lillian Disney, persuaded Walt to change the name to "Mickey" as she did not like the name Mortimer.  Mortimer later appears as a different character, typically as an antagonist to Mickey himself.`
    },
    question3: {
        answer: 'optionb',
        fact: `There are 6 different Disney Resorts in the world as of May 2019.  They are:
        <ul>
            <li>Disneyland Resort</li>
            <li>Walt Disney World Resort</li>
            <li>Hong Kong Disneyland Resort</li>
            <li>Tokyo Disney Resort</li>
            <li>Disneyland Paris</li>
            <li>Shanghai Disney Resort</li>
        </ul>`
    },
    question4: {
        answer: 'optiona',
        fact: `Elsa was officially crowned the Queen of Arendelle thus making her not a princess  (*sneaky, sneaky me*).`
    },
    question5: {
        answer: 'optiond',
        fact: `Star Wars: Galaxy's Edge will open on May 31, 2019 at the Disneyland Resort and August 29, 2019 at the Walt Disney World Resort.  The others are parks that are being planned with hopes of being opened in the near future!`
    }
}

let score = 0;
let completionTracker = 0;

// ===============================================================================================
// ===============================================================================================

// check for checked here in the click of the button how to identify if something is checked/unchecked
// then run the function: disQuiz.showAnswer
disQuiz.init = function() {
    $('button').on('click', function(e){     
        e.preventDefault();
        // This converts kabob casing to camel casing
        $(this).next().empty();

        // create variables to keep the if statement clean and simple
        const selectedAnsValue = $(this).data('value');
        const userChoice = $(`input[name=${selectedAnsValue}]`);
        
        // what do I want to compare?
            // if a specific button to the specific question is clicked, execute the function: disQuiz.showAnswer($(this));
            // else post to the DOM "Please choose an answer."
        // disQuiz.showAnswer($(this));
        // console.log(userChoice, selectedAnsValue)
        
        // this is the if statement that filters for checked vs unchecked
        // check to see if the button is "checked"
        if ((userChoice).is(':checked') === true) {
            disQuiz.showAnswer($(this));            
        } else {
            $(this).next().text("Please choose an answer.");
            return          
        }      
        
        const btn = $(e.target);
        btn.attr("disabled", true);

        

    })
};


disQuiz.showAnswer = function(buttonReference) {
    // store the seleced radial button value in a variable
    const questionAsked = buttonReference.data('value');
    const userChoice = $(`input[name=${questionAsked}]:checked`);
  
    // userChoice.val() should be checking the VALUE of the radio button.
    // Sample Logic: questionAsked = is question-1.  The radio button with the name as question-1 AND is checked has the value of: option-d

    // this function is being called with the above userChoice.val AND the data-value of the BUTTON being clicked.
    // Sample: option-d, question-1
    disQuiz.checkAnswer(userChoice.val(), questionAsked, buttonReference)
};


disQuiz.checkAnswer = function(userChoiceVal, questionAsked, buttonReference) {

    const formattedQuestion = questionAsked.replace("-", "");
    const formattedUserChoice = userChoiceVal.replace("-", "");
        

    if(formattedUserChoice === disQuiz.answerGuide[formattedQuestion].answer) {
        $(buttonReference).next().append(`Correct! ${disQuiz.answerGuide[formattedQuestion].fact}`);
        score++
    } else {
        $(buttonReference).next().append(`Incorrect. ${disQuiz.answerGuide[formattedQuestion].fact}`);   
    }

    
};


// // document ready
$(function() {
    disQuiz.init();
});

