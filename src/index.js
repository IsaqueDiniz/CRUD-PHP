"use strict";

//////////////////////////////////////
// THE MAIN FILE TO CONTROL THE APP /
///////////////////////////////////

import Book from './js/book.js'; // Book class
import Listeners from './js/listeners.js'; // Listeners
import Validator from './js/validator.js'; // Validators
import Utils from './js/utility.js'; // Utilities
import dbScope from './js/db.js'; // Scope to all books
import Server  from './js/server.js'; 

const Main = (function() {
	// Main scope
	
	Server.getResource();	

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