"use strict";

import Book from './js/book.js'; // Book class
import Listeners from './js/listeners.js'; // Listeners
import Validator from './js/validator.js'; // Validators
import Utils from './js/utility.js'; // Utilities
import dbScope from './js/db.js'; // Scope to all books

const Main = (function() {
	// Main scope

	//Listeners
	Listeners.set('newBookBTN', newBook);

	//Functions
	function newBook(evt) {
		const $msgBox = document.getElementById('createMessage'); // take the alert box 
		
		const valuesState = Validator.getValidsInputs(); // state of the inputs
		const $addFieldsRef = Validator.getAddFields();  // DOM reference of the inputs

		Validator.resetModalWhenClose('#formModal', $msgBox, $addFieldsRef);

		if(Validator.validateAddInputs(valuesState)) {
			const values = Validator.defineObj($addFieldsRef, false);
			const book = new Book(values);

			book // set all configuration to the current registry
				.createBook()
				.attachEditEvent()
				.attachDeleteEvent(); 

			dbScope.pushOne(book);
			console.log(dbScope.getBooks());

			// after added new registry, close and reset the modal
				Utils.clearInputs($addFieldsRef);		
				Utils.changeBoxMsg($msgBox, Utils.messages().addedSuccessful, 'success');
				Utils.closeWithDelay('#formModal', $msgBox);

		}	else {
			const $wrongInputs = Validator.wrongInputsRef(valuesState, $addFieldsRef); // obj with DOM reference from wrong fields
			let wrongInputsCount = Object.keys($wrongInputs).length; // number of wrong inputs

			Utils.changeBoxMsg($msgBox, Utils.messages().wrongFields, 'danger'); 
			Utils.changeInputColor($wrongInputs);
			Validator.wrongInputsWhenFocus($wrongInputs, wrongInputsCount, $msgBox);

		}
	}

})();