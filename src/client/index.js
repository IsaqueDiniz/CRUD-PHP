"use strict";

//////////////////////////////////////
// THE MAIN FILE TO CONTROL THE APP /
///////////////////////////////////

import Book from './js/book.js'; // Book class
import Listeners from './js/listeners.js'; // Listeners
import Validator from './js/validator.js'; // Validators
import Utils from './js/utility.js'; // Utilities
import Database from './js/database.js'; // Scope to all books

const Main = (function() {
	// Main scope
	Database.getResourcesFromDb((resources, statusCode, error) => {
		if(error) {
			alert(`Ocorreu um erro. Tente novamente mais tarde.\n\n
				Erro\n${ error.name } : ${error.message}`);
		}else {
			resources.forEach(bookProperties => {
				const book = new Book(bookProperties);
					book
						.createBook()
						.attachEditEvent()
						.attachDeleteEvent();

				Database.pushOne(book);
			});		
		}
	});

	//Listeners
	Listeners.set('newBookBTN', createBook);

	//Functions
	function createBook(evt) {
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

			Database.saveBookInDatabase(book, (response, statusCode, error) => {
				if(error) {
					alert(`Não foi possível salvar o registro no banco de dados.\n\n
						Erro\n${ error.name } : ${ error.message }`);
					Utils.removeBookRow(book.props.id);
					Utils.changeBoxMsg($msgBox, Utils.messages().databaseError, 'danger')
				}else {
					Utils.changeBoxMsg($msgBox, Utils.messages().success, 'success');
				}
			});					

			// after added new registry, close and reset the modal
				Utils.closeWithDelay('#formModal', $msgBox);
				Utils.clearInputs($inputsReference);		
		}	else {
			const $wrongInputs = Validator.wrongInputsRef(valuesState, $inputsReference); // obj with DOM reference from wrong fields
			Validator.wrongInputsManagement($wrongInputs, $msgBox);
		}
	}

})();