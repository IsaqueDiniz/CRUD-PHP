"use strict";

import Book from './js/book.js'; // Book class
import Listeners from './js/listeners.js'; // Listeners
import Validator from './js/validator.js'; // Validators
import Utils from './js/utility.js' // Utilities

const Main = (function() {
	// Main scope
	const Books = [];

	//Listeners
	Listeners.set('newBookBTN', newBook);
	console.log('teste');

	//Functions
	function newBook(evt) {
		const $boxMsg = document.getElementById('messageValidator'); // take the alert box 
		const $addFields = Validator.getAddFields(); // take the inputs
		const valuesState = Validator.getValidsInputs($addFields); // state of the inputs


		if(Validator.validateAddInputs(valuesState)) {
			const values = Validator.defineObj($addFields, false);
			const book = new Book(values);
						book.create().attachEditEvent().attachDeleteEvent();
			Books.push(book);

			Utils.clearInputs($addFields);		
			Utils.changeBoxMsg($boxMsg, Utils.messages().addedSuccessful, 'success');

			setTimeout(() => {
				$('#formModal').modal('toggle');
					Utils.changeBoxMsg($boxMsg, Utils.messages().default, 'primary');
			}, 750);	

		}	else {
			const $wrongInputs = Validator.wrongInputsRef(valuesState, $addFields); // obj with DOM reference from wrong fields
			let wrongInputsCount = Object.keys($wrongInputs).length; // number of wrong inputs

			Utils.changeBoxMsg($boxMsg, Utils.messages().wrongFields, 'danger'); 
			Utils.changeInputColor($wrongInputs);

			for(let key in $wrongInputs) {
				Listeners.set($wrongInputs[key], showWrongInputs, 'focus');
			}

			function showWrongInputs(evt) {
				//Manage the wrong inputs when when clicked remove the red color
				evt.target.style.background = 'transparent';
				wrongInputsCount--;
				if(wrongInputsCount <= 0 ) {
					wrongInputsCount = 0;
					Utils.changeBoxMsg($boxMsg, Utils.messages().default, 'primary');
				}				
				Listeners.remove(evt.target, showWrongInputs, 'focus');
			}

			$('#formModal').on('hidden.bs.modal', evt => {
			//reset the form when hidden event dispared
				Utils.clearInputs($addFields);
				Utils.changeBoxMsg($boxMsg, Utils.messages().default, 'primary');
				wrongInputsCount = 0;
				for(let key in $addFields)
					$addFields[key].style.background = 'transparent';								
			});
		}
	}

})();