// step 1: get the start and end numbers from input field
function getValues() {
	// get the inputs by their ID
	let fizzValue = document.getElementById('fizzValue')
	fizzValue = fizzValue.value
	let buzzValue = document.getElementById('buzzValue').value
	let stopValue = document.getElementById('stopValue').value

	// Convert the fizz and buzz values to numbers
	fizzValue = parseInt(fizzValue)
	buzzValue = parseInt(buzzValue)
	stopValue = parseInt(stopValue)

	// chek if the numbers are valid numbers
	if (isNaN(fizzValue) || isNaN(buzzValue) || isNaN(stopValue)) {
		// tell the user to enter a valid number using sweet alert
		Swal.fire({
			icon: 'error',
			title: 'Oops! Invalid number.',
			text: 'Please enter a valid number for fizz, buzz, and the stop values.',
			backdrop: false,
		})
	} else if (fizzValue > stopValue || buzzValue > stopValue) {
		// tell the user what to do
		Swal.fire({
			icon: 'error',
			title: 'Almost there!',
			text: 'Fizz value, and buzzValue should not be greater than the Stop value.',
			backdrop: false,
		})
	} else if (stopValue < 2 || stopValue > 5000) {
		// tell the user it's wrong
		Swal.fire({
			icon: 'error',
			title: 'Uh oh!',
			text: 'Please enter a valid number between 2 and 5000.',
			backdrop: false,
		})
	} else {
		let values = generateFizzBuzz(stopValue)
		displayFizzBuzz(values, fizzValue, buzzValue)
	}
}

// step 2: get all the numbers in the range
function generateFizzBuzz(stopValue) {
	let numbers = []

	for (let number = 1; number <= stopValue; number++) {
		numbers.push(number)
	}
	// return the list of numbers
	return numbers
}

// JavaScript Range – How to Create an Array of Numbers with .from() in JS ES6
// source: https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/
// function getStopValue(stopValue) {
// 	return Array.from({ length: stopValue }, (value, index) => index + 1);
// }

// step 3: display the numbers on the page
// function displayFizzBuzz(values, fizzValue, buzzValue) {
// 	// - put the HTML on the page on the element with the result id
// 	let resultsTable = document.getElementById('result');
// 	// clear the results table
// 	resultsTable.innerHTML = '';

// 	// for each number in the range
// 	for (let i = 0; i < values.length; i++) {
// 		// create some html with the values
// 		let number = values[i];
// 		let html = '<tr><td';

// 		// determine if the number is Fizz, Buzz, or FizzBuzz
// 		if (number % fizzValue == 0 && number % buzzValue == 0) {
// 			html += ' style="background-color: #fd7e14;">FizzBuzz';
// 		} else if (number % fizzValue == 0) {
// 			html += '>' + 'Fizz';
// 		} else if (number % buzzValue == 0) {
// 			html += '>' + 'Buzz';
// 		} else if (number % 2 == 0) {
// 			html += ' style="background-color: #0dcaf0;">Even';
// 		} else {
// 			html += '>' + number;
// 		}

// 		html += '</td></tr>';

// 		// display the results in the page
// 		resultsTable.innerHTML += html;
// 	}
// }


// Creating an HTML table dynamically on MDN
// source: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

// step 3: display the numbers on the page
function displayFizzBuzz(values, fizzValue, buzzValue) {
	// - put the HTML on the page on the element with the result id
	let tableResult = document.getElementById('result')
	// clear the results table
	tableResult.innerHTML = ''

	// for each number in the range
	for (let i = 0; i < values.length; i++) {
		let number = values[i]

		// creating the table data
		let tblData = document.createElement('td')

		// determine if the number is Fizz, Buzz, or FizzBuzz
		// by updating the content of tblData and not concatenating to it.
		if (number % fizzValue == 0 && number % buzzValue == 0) {
			tblData.textContent = 'FizzBuzz'
			tblData.style.backgroundColor = 'orange'
		} else if (number % fizzValue == 0) {
			tblData.textContent = 'Fizz'
			tblData.style.backgroundColor = 'var(--fyard-gray-core)'
		} else if (number % buzzValue == 0) {
			tblData.textContent = 'Buzz'
			tblData.style.backgroundColor = 'var(--fyard-gray-800)'
			tblData.setAttribute('class', 'text-light')
		} else if (number % 2 == 0) {
			tblData.textContent = 'Even'
			tblData.style.backgroundColor = 'var(--fyard-pink-100)'
		} else {
			tblData.textContent = number
		}

		// creating a new table row every 5 items
		if (i % 5 === 0) {
			let tblRow = document.createElement('tr')
			tableResult.appendChild(tblRow)
		}

		// Now, put the <td> at the end of the last table row
		let newRow = tableResult.lastChild
		newRow.appendChild(tblData)
	}
}

