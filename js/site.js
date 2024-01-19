// step 1: get the start and end numbers from input field
function getValues() {
	// get the inputs by their ID
	let fizzValue = document.getElementById('fizzValue');
	fizzValue = fizzValue.value;
	let buzzValue = document.getElementById('buzzValue').value;
	let stopValue = document.getElementById('stopValue').value;

	// Convert the fizz and buzz values to numbers
	fizzValue = parseInt(fizzValue);
	buzzValue = parseInt(buzzValue);
	stopValue = parseInt(stopValue);

	// chek if the numbers are valid numbers
	if (isNaN(fizzValue) || isNaN(buzzValue) || isNaN(stopValue)) {
		// tell the user to enter a valid number using sweet alert
		Swal.fire({
			icon: 'error',
			title: 'Oops! Invalid number.',
			text: 'Please enter a valid number for fizz, buzz, and the stop values.',
			backdrop: false,
		})
	} else if (fizzValue >= buzzValue) {
		// tell the user it's wrong
		Swal.fire({
			icon: 'error',
			title: 'Uh oh!',
			text: 'Please enter a valid number for both start and end values.',
			backdrop: false,
		})
	} else if ((stopValue < 2) || (stopValue > 5000))  {
		// tell the user it's wrong
		Swal.fire({
			icon: 'error',
			title: 'Uh oh!',
			text: 'Please enter a valid number between 2 and 5000.',
			backdrop: false,
		})
	} else {
		let values = generateFizzBuzz(fizzValue, buzzValue)
		displayFizzBuzz(values)
	}

}

// step 2: get all the numbers in the range
function generateFizzBuzz(fizz, buzz) {
	let numbers = [];
	for (let number = fizz; number <= buzz; number++) {
		numbers.push(number);
	}

	// return the list of numbers
	return numbers;
}

// step 3: display the numbers on the page
function displayFizzBuzz(values) {
	// - put the HTML on the page on the element with the result id
	let resultsTable = document.getElementById('result');
	// clear the results table
	resultsTable.innerHTML = '';

	// for each number in the range
	for (let i = 0; i < values.length; i++) {
		// create some html with the values
		let number = values[i];
		let html = '<tr><td';

		// determine if the number is Fizz, Buzz, or FizzBuzz
		if ((number % 3 == 0) && (number % 5 == 0)) {
			html += ' style="background-color: orange;">FizzBuzz'
		} else if (number % 3 == 0) {
			html += '>' + 'Fizz';
		} else if (number % 5 == 0) {
			html += '>' + 'Buzz';
		} else {
			html += '>' + number;
		}

		html += '</td></tr>'

		// display the results in the page
		resultsTable.innerHTML += html;
	}
}

// step 4: get the stoped value from user input
function getStopValue(value) {
	
}
