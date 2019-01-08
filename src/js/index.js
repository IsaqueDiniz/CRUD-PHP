"use strict";

import Book from './book.js'; // Book class
import Listeners from './listeners.js'; // Listeners
import Validator from './validator.js'; // Validators

const Main = (function() {
	// Main scope
	const Books = [];

	//Listeners
	Listeners.set('newBookBTN', newBook);

	//Functions
	function newBook(evt) {
		const $boxMsg = document.getElementById('messageValidator'); // take the alert box 
		const $addFields = Validator.getAddFields(); // take the inputs
		const valuesState = Validator.getValidsInputs($addFields); // state of the inputs


		if(Validator.validateAddInputs(valuesState)) {
			const values = Validator.defineObj($addFields, false);
			const book = new Book(values);
						book.writeRow().attachEditEvent().attachDeleteEvent();
			Books.push(book);

			Validator.clearInputs($addFields);		
			Validator.changeBoxMsg($boxMsg, Validator.messages().addedSuccessful, 'success');

			setTimeout(() => {
				$('#formModal').modal('toggle');
				Validator.changeBoxMsg($boxMsg, Validator.messages().default, 'primary');
			}, 1000);	

		}	else {
			const $wrongInputs = Validator.wrongInputsRef(valuesState, $addFields); // obj with DOM reference from wrong fields
			let wrongInputsCount = Object.keys($wrongInputs).length;
					console.log(wrongInputsCount);

			Validator.changeBoxMsg($boxMsg, Validator.messages().wrongFields, 'danger'); 
			Validator.changeColor($wrongInputs);

			for(let key in $wrongInputs) {
				Listeners.set($wrongInputs[key], showWrongInputs, 'focus');
			}

			function showWrongInputs(evt) {
				//Manage the wrong inputs when when clicked remove the red color
				evt.target.style.background = 'transparent';
				wrongInputsCount--;
				if(wrongInputsCount <= 0 ) {
					wrongInputsCount = 0;
					Validator.changeBoxMsg($boxMsg, Validator.messages().default, 'primary');
				}				
				Listeners.remove(evt.target, showWrongInputs, 'focus');
			}
		}
	}

})();