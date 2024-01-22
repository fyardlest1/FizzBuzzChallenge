// step 1: get the start and end numbers from input field
function getValues() {
	// get the inputs by their ID
	let fizzString = document.getElementById('fizzValue').value;
	let buzzString = document.getElementById('buzzValue').value;
	let stopString = document.getElementById('stopValue').value;

	// Convert the fizz and buzz values to numbers
	let fizzNumber = parseInt(fizzString);
	let buzzNumber = parseInt(buzzString);
	let stopNumber = parseInt(stopString);

	// chek if the numbers are valid numbers
	if (
		!Number.isNaN(fizzNumber) &&
		!Number.isNaN(buzzNumber) &&
		!Number.isNaN(stopNumber)
	) {
		// tell the user to enter a valid number using sweet alert
		let fizzBuzvalues = generateFizzBuzz(fizzNumber, buzzNumber, stopNumber)
		displayFizzBuzz(fizzBuzvalues)
	} else if (fizzNumber > stopNumber || buzzNumber > stopNumber) {
		// tell the user what to do
		Swal.fire({
			icon: 'error',
			title: 'Almost there!',
			text: 'Fizz value, and buzzValue should not be greater than the Stop value.',
			backdrop: false,
		})
	} else if (fizzNumber == buzzNumber) {
		Swal.fire({
			icon: 'error',
			title: 'Uh oh!',
			text: 'The Fizz and Buzz number should not be the same value',
			backdrop: false,
		})
	} else if (stopNumber < 2 || stopNumber > 3000) {
		// tell the user it's wrong
		Swal.fire({
			icon: 'error',
			title: 'Uh oh!',
			text: 'Please enter a valid number between 2 and 3000.',
			backdrop: false,
		})
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops! Invalid number.',
			text: 'Please enter a valid number for fizz, buzz, and the stop values.',
			backdrop: false,
		})
		
	}
}

// step 2: get all the numbers to produce the desired result
function generateFizzBuzz(fizz, buzz, stop) {
	let array = []

	for (let i = 1; i <= stop; i++) {
		if (i % fizz == 0 && i % buzz == 0) {
			array.push('FizzBuzz')
		} else if (i % fizz == 0) {
			array.push('Fizz')
		} else if (i % buzz == 0) {
			array.push('Buzz')
		} else if (i % 2 == 0) {
			array.push('Even')
		} else {
			array.push(i)
		}
	}

	return array
}

// step 3: display the result on the page
function displayFizzBuzz(values) {
	let resultsDiv = document.getElementById('fizzBuzzResults')
	resultsDiv.innerHTML = ''

	for (let index = 0; index < values.length; index++) {
		let value = values[index]
		let htmlForValue = `<div class="col ${value}">${value}</div>`

		resultsDiv.innerHTML += htmlForValue
	}
}









// JavaScript Range – How to Create an Array of Numbers with .from() in JS ES6
// source: https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/
// function getStopValue(stopValue) {
// 	return Array.from({ length: stopValue }, (value, index) => index + 1);
// }


// Creating an HTML table dynamically on MDN
// source: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

// display the numbers on the page experimental code
// function displayFizzBuzzTest(values, fizzValue, buzzValue) {
// 	// - put the HTML on the page on the element with the result id
// 	let tableResult = document.getElementById('result')
// 	// clear the results table
// 	tableResult.innerHTML = ''

// 	// for each number in the range
// 	for (let i = 0; i < values.length; i++) {
// 		let number = values[i]

// 		// creating the table data
// 		let tblData = document.createElement('td')

// 		// determine if the number is Fizz, Buzz, or FizzBuzz
// 		// by updating the content of tblData and not concatenating to it.
// 		if (number % fizzValue == 0 && number % buzzValue == 0) {
// 			tblData.textContent = 'FizzBuzz'
// 			tblData.style.backgroundColor = 'orange'
// 		} else if (number % fizzValue == 0) {
// 			tblData.textContent = 'Fizz'
// 			tblData.style.backgroundColor = 'var(--fyard-gray-core)'
// 		} else if (number % buzzValue == 0) {
// 			tblData.textContent = 'Buzz'
// 			tblData.style.backgroundColor = 'var(--fyard-gray-800)'
// 			tblData.setAttribute('class', 'text-light')
// 		} else if (number % 2 == 0) {
// 			tblData.textContent = 'Even'
// 			tblData.style.backgroundColor = 'var(--fyard-pink-100)'
// 		} else {
// 			tblData.textContent = number
// 		}

// 		// creating a new table row every 5 items
// 		if (i % 5 === 0) {
// 			let tblRow = document.createElement('tr')
// 			tableResult.appendChild(tblRow)
// 		}

// 		// Now, put the <td> at the end of the last table row
// 		let newRow = tableResult.lastChild
// 		newRow.appendChild(tblData)
// 	}
// }

