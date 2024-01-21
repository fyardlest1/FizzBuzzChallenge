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
	let divResult = document.getElementById('tblResult')
	// clear the results table
	divResult.innerHTML = ''

	// create a new <table> element and a <tbody> element
	let tbl = document.createElement('table')
	let tblBody = document.createElement('tbody')

	// for each number in the range
	for (let i = 0; i < values.length; i++) {
		// creating the table row
		let tblRow = document.createElement('tr')

		// creating the table data
		for (let j = 0; j < 5; j++) {
			let tblData = document.createElement('td')
			let currentNumber = i * 5 + j + 1			

			// determine if the number is Fizz, Buzz, or FizzBuzz
			// by update the content of tblData and not concatenate to it.
			if (
				currentNumber % fizzValue == 0 &&
				currentNumber % buzzValue == 0
			) {
				tblData.textContent = 'FizzBuzz'
				tblData.style.backgroundColor = 'orange'
			} else if (currentNumber % fizzValue == 0) {
				tblData.textContent = 'Fizz'
				tblData.style.backgroundColor = 'var(--fyard-gray-core)'
			} else if (currentNumber % buzzValue == 0) {
				tblData.textContent = 'Buzz'
				tblData.style.backgroundColor = 'var(--fyard-gray-800)'
				tblData.setAttribute('class', 'text-light')
			} else if (currentNumber % 2 == 0) {
				tblData.textContent = 'Even'

			} else {
				tblData.textContent = currentNumber
			}
			// NOTE: The textContent property provides a way to manipulate the text content
			// of an element without interpreting any HTML tags that might be present.
			// It sets or retrieves the text content as plain text.

			// Now, put the <td> at the end of the table row
			tblRow.appendChild(tblData)
		}

		// add the row to the end of the table body
		tblBody.appendChild(tblRow)
	}

	// put the <tbody> in the <table>
	tbl.appendChild(tblBody)
	// set the table attributes of the table
	tbl.setAttribute('class', 'table text-center table-bordered ')
	// appends <table> into the HTML div element with the result id
	divResult.appendChild(tbl)
}
