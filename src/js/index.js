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

		function defineObj(ref, option) {
					if(option){		
						return {
							livro : ref.$e_livro.value,
							publicacao : ref.$e_publicacao.value,
							autor : ref.$e_autor.value,
							editora : ref.$e_editora.value,
							ISBN : ref.$e_ISBN.value
						}
					}
					return {
						livro : ref.$a_livro.value,
						publicacao : ref.$a_publicacao.value,
						autor : ref.$a_autor.value,
						editora : ref.$a_editora.value,
						ISBN : ref.$a_ISBN.value
					}	
				}

		if(Validator.validateAddInputs(valuesState)) {
			const values = defineObj($addFields, false);
			const book = new Book(values);
			book
				.writeRow()
				.attachEditEvent()
				.attachDeleteEvent();
			Books.push(book);		
			// alert('Tudo ok');
			console.log(Books);
		}else {
			const $wrongInputs = Validator.wrongInputsRef(valuesState, $addFields); // obj with DOM reference from wrong fields
			let wrongInputsCount = Object.keys($wrongInputs).length;
					console.log(wrongInputsCount);

			Validator.changeBoxMsg($boxMsg, Validator.messages().wrongFields, 'danger'); 
			Validator.changeColor($wrongInputs);

			for(let key in $wrongInputs) {
				Listeners.set($wrongInputs[key], showWrongInputs, 'focus');
			}

			function showWrongInputs(evt) {
				// manage inputs to red 
				evt.target.style.background = 'transparent';
				wrongInputsCount--;
				console.log(wrongInputsCount);
				if(wrongInputsCount <= 0 ) {
					wrongInputsCount = 0;
					Validator.changeBoxMsg($boxMsg, Validator.messages().default, 'primary');
				}				
				console.log(wrongInputsCount);
				Listeners.remove(evt.target, showWrongInputs, 'focus');
			}
		}
	}

})();

