// PSEUDO CODE

// MVP - Quiz
// This will be a multiple choice quiz.
// There will be 10 questions.  4 choices per question.
// A question and it's 4 options + answer will act as a template.
// There may be an array of 10 questions.  Unsure if an array is actually needed.
// Questions and their respective answers will be placed in an object.
// Once the answers are ALL selected, the user can click on 'submit'.
// Submit will result in the final score + answers to be populated.
// Final score will be a H2 update as it will sit in a default state of 0/10.
// Answers will populate straight into the DOM.

// STRETCH GOALS
// Each question will have it's own page.
// Answer will populate in the form of a modal after each question is submitted.
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
        answer: 'optiond',
        fact: 'FUN Fact about Answer 1.'
    },
    question2: {
        answer: 'optionc',
        fact: 'FUN Fact about Answer 2.'    
    },
    question3: {
        answer: 'optionb',
        fact: 'FUN Fact about Answer 3.'
    },
    question4: {
        answer: 'optiona',
        fact: 'FUN Fact about Answer 4.'
    },
    question5: {
        answer: 'optionb',
        fact: 'FUN Fact about Answer 5.'
    }
}


// ===============================================================================================
// ===============================================================================================

// check for checked here in the click of the button how to identify if something is checked/unchecked
// then run the function: disQuiz.showAnswer
disQuiz.init = function() {
    $('.button').on('click', function(e){     
        e.preventDefault();

        // create variables to keep the if statement clean and simple
        const selectedAnsValue = $(this).data('value');
        const userChoice = $(`input[name=${selectedAnsValue}]`);

        console.log(selectedAnsValue) // question-1
        console.log(userChoice) // array

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
            $('.post-answer-1').append("Please choose an answer.")
        }
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
    disQuiz.checkAnswer(userChoice.val(), questionAsked)
};


disQuiz.checkAnswer = function(userChoiceVal, questionAsked) {

    const formattedQuestion = questionAsked.replace("-", "");
    const formattedUserChoice = userChoiceVal.replace("-", "");

    if(formattedUserChoice === disQuiz.answerGuide[formattedQuestion].answer) {
        $(".post-answer-1").append(`Correct! ${disQuiz.answerGuide[formattedQuestion].fact}`)
    } else {
        $(".post-answer-1").append(`Incorrect. ${disQuiz.answerGuide[formattedQuestion].fact}`)
    }
};
// ===============================================================================================
// ===============================================================================================


// // document ready
$(function() {
    disQuiz.init();
});


// ===========================================================================================
// ===========================================================================================

