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

			// storing eah store in our STORE variable
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

