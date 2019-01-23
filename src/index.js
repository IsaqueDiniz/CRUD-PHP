"use strict";

//////////////////////////////////////
// THE MAIN FILE TO CONTROL THE APP /
///////////////////////////////////

import Book from './client/js/book.js'; // Book class
import Listeners from './client/js/listeners.js'; // Listeners
import Validator from './client/js/validator.js'; // Validators
import Utils from './client/js/utility.js'; // Utilities
import dbScope from './client/js/db.js'; // Scope to all books
import Server  from './client/js/server.js'; 

const Main = (function() {
	// Main scope

	//Listeners
	Listeners.set('newBookBTN', newBook);

	//Functions
	function newBook(evt) {
		const $msgBox = document.getElementById('createMessage'); // take the alert box 
		
		const valuesState = Validator.getValidsInputs(); // state of the inputs
		const $inputsReference = Validator.getAddFields();  // DOM reference of the inputs

		Validator.resetModalWhenClose($msgBox);

		if(Validator.validateInputs('add', valuesState)) {
			const propsValues = Validator.defineBookProps('add');
			const book = new Book(propsValues); // create a new book
						book // set all configuration to the current registry
							.createBook()
							.attachEditEvent()
							.attachDeleteEvent(); 

			dbScope.pushOne(book);

			// after added new registry, close and reset the modal
				Utils.clearInputs($inputsReference);		
				Utils.changeBoxMsg($msgBox, Utils.messages().success, 'success');
				Utils.closeWithDelay('#formModal', $msgBox);

		}	else {
			const $wrongInputs = Validator.wrongInputsRef(valuesState, $inputsReference); // obj with DOM reference from wrong fields
			Validator.wrongInputsManagement($wrongInputs, $msgBox);
		}
	}

})();