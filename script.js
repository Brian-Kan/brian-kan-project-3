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

// An array for my objects

// NOTES: this seems repeatable - can it be in a function somehow despite beying part of the layout?
disQuiz.questionsOneToTen = [
    disQuiz.questionsAnsOne = {
        questionOneOptA: `Question 1 Answer A`,
        questionOne1OptB: `Question 1 Answer B`,
        questionOne1OptC: `Question 1 Answer C`,
        questionOne1OptD: `Question 1 Answer D`,
        questionOne1Ans:`Answer to Question 1`

    },
    
    disQuiz.questionsAnsTwo = {
        questionTwoOptA: `Question 2 Answer A`,
        questionTwoOptB: `Question 2 Answer B`,
        questionTwoOptC: `Question 2 Answer C`,
        questionTwoOptD: `Question 2 Answer D`,
        questionTwoAns:`Answer to Question 2`
    }
]


// to grab the value of the label so I can use it to compare to the answer
$('labelID').on('submit', function(e){
    e.preventDefault();
})

const choice = $('input[name=question1]:checked').val();


disQuiz.init = function() {

};


// to update the html with the result
$('form').on('submit', function(e){
    e.preventDefault();
    const userAns = ${labelID}.val().toLowerCase();
    
    const type = $('input[name=beverage]:checked').val();
    
    const choice = drinks[type];
    
    const options = [];
    
    $('.results').html(`<p>${result}</p>`)

})

// document ready
$(function() {
    disQuiz.init();
});

// ===============================================================================================
// ===============================================================================================
// <p class="postedAnswer"

if(userAns === ans)




// ===============================================================================================
// ===============================================================================================





const drinks = {
	coffee: [
		{
			title: 'Early Bird',
			price: '$$'
		},
		{	
			title: 'Dark Horse',
			price: '$'
		},
		{	
			title: 'Le Gourmand',
			price: '$'
		}
	],
	tea: [
		{
			title: 'David\'s Tea',
			price: '$$'
		},
		{
			title: 'Tealish',
			price: '$$'
		},
		{
			title: 'Teavana',
			price: '$'
		}
	]
};
$(function() {

	// function accepts an argument that is an array
	function randoIndex(optionsArray){

		// generating a random number between 0 and the final index position value
		const index = Math.floor(Math.random() * optionsArray.length);

		// returning our passed-in array with a specific index value attached
		return optionsArray[index];
	}

	// bind our click event to our submit button
	$('input[type=submit]').on('click', function(event){

		// prevent devault behaviour of submit button
		event.preventDefault();

		// capturing the users drink preference
		const type = $('input[name=beverage]:checked').val();

		// capturing the users price preference
		const price = $('input[name=price]:checked').val();

		// using users drink preference, narrow down our results to the specific drink type
		const choice = drinks[type];

		// creating a place to store appropriate drink options
		const options = [];

		// looping through the array that is the users drink choice
		for (let i = 0; i < choice.length; i = i + 1){

			// storing each store in our STORE variable
			const store = choice[i];

			// we are checking the current stores price with  the users price preference			
			if(store.price === price){

			// if the store price matches our users price preference, then we add that store, to our approprirate drink options array	
			options.push(store)			
			}
		}

		// we are generating a random index value for our appropriate drink optinos array
		const optionToDisplay = randoIndex(options);

		// we are printing to the page, the name of the random store that is stored in our optionToDisplay variable
		$('.results').html(`<h2 class="choice">${optionToDisplay.title}</h2>`)
	})
});

