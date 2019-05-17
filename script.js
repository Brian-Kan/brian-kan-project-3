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





  // STEP ONE: filter the object so that only items of desire are displayed

  // STEP TWO: write a function that displays result on the page with the correct answer. HINT: What kind of information (paramaters) does this funciton need to properly display all of our information?

  // STEP THREE: display final total result on the page

  // STEP FOUR: add an event listener that will notice when a user clicks on a next/submit button, find out which answer they have selected
 
 
//   , and call our display items method again. Don't forget to update the navigation, too!




// name spacing
const disQuiz = {};

// An object for my objects

// NOTES: this seems repeatable - can it be in a function somehow despite beying part of the layout?
// disQuiz.questionsOneToTen = {
//     questionsAnsOne: {
//         questionOneOptA: `Question 1 Answer A`,
//         questionOne1OptB: `Question 1 Answer B`,
//         questionOne1OptC: `Question 1 Answer C`,
//         questionOne1OptD: `Question 1 Answer D`,
//         questionOne1Ans:`Answer to Question 1`
//     },
   
//     questionsAnsTwo: {
//         questionTwoOptA: `Question 2 Answer A`,
//         questionTwoOptB: `Question 2 Answer B`,
//         questionTwoOptC: `Question 2 Answer C`,
//         questionTwoOptD: `Question 2 Answer D`,
//         questionTwoAns:`Answer to Question 2`
//     }
// }

disQuiz.answerGuide = {
    question1: 'optionD',
    question2: 'optionC',
    question3: 'optionC'
}

// ===========================================================================================
// ===========================================================================================

const myType = $('input[name=question1]:checked').val();

console.log(myType)

// ===========================================================================================
// ===========================================================================================

// const type = $('input[name=beverage]:checked').val();


// for (let i = 0; i < choice.length; i = i + 1){

//     // storing eah store in our STORE variable
//     const store = choice[i];

//     // we are checking the current stores price with  the users price preference			
//     if(store.price === price){

//     // if the store price matches our users price preference, then we add that store, to our approprirate drink options array	
//     options.push(store)
//     }
// }

// ===========================================================================================
// ===========================================================================================

// to grab the value of the label so I can use it to compare to the answer
$('labelID').on('submit', function(e){
    e.preventDefault();
})

const choice = $('input[name=question1]:checked').val();




const totalAnsArray = []

// ===============================================================================================
// ===============================================================================================
// <p class="postedAnswer"
let score = 0
// to update the html with the result
$('form').on('submit', function(e){
    e.preventDefault();


    const answer = ($('input[name=question1]:checked').attr('data-value'))

    if (answer === disQuiz.answerGuide.question1) {
        alert('yes!');
        score ++
        console.log(score);
        console.log(indexOf)
    } else {
        alert('wrong')
    }

// get the field set data value for each question and log it into a variable
//  if we have more than one variable, loop through all the variables and get the answer selected

 
   
    // $('.results').html(`<p>${result}</p>`)

})

// This is to append the answer to the DOM

// const answerOnePop =
// if(userAns === ans) {
//     $("answerPop").append(`Correct! ${ansOnePops}.`)
// } else if (userAns !== ans) {
//     $("answerPop").append(`Incorrect. ${ansOnePops}.s`)
// } else {
//     $("answerPop").append(`Please select an answer.`)
// }

// ===============================================================================================
// ===============================================================================================
disQuiz.showAnswer = function(buttonReference) {
 console.log('called showAnswer', buttonReference);
 // store the seleced radial button value in a variable
 const questionAsked = buttonReference.data('value')
 console.log(questionAsked)
 const userChoice = $(`input[name=${questionAsked}]:checked`)
 console.log(userChoice.val())

// if disQuiz.answerGuide[questionAsked] = userChoice.val() ==right answer
// disQuiz.answerGuide.question1
 
 // iterate over the answerGuide object and find the answer for the question for comparision.

}

disQuiz.init = function() {
 $('.button').on('click', function(){
    disQuiz.showAnswer($(this));
 })
    
};

// document ready
$(function() {
    disQuiz.init();
});



	

