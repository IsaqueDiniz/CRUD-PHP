"use strict";

import Utils from './utility.js';
import Listeners from './listeners.js';

class Validator {

	static getAddFields() {
	 // return the fields from new newBook-modal
		return {
				$a_livro : document.getElementById('nome_livro'),
				$a_publicacao : document.getElementById('data_public'),
				$a_autor : document.getElementById('nome_autor'),
				$a_editora : document.getElementById('nome_editora'),
				$a_ISBN : document.getElementById('ISBN')
		}
	}

	static getEditFields() {
	 // return the fields from the edit-modal
		return {
			$e_livro : document.getElementById('editLivro'),
			$e_publicacao : document.getElementById('editPublic'),
			$e_autor : document.getElementById('editAutor'),
			$e_editora : document.getElementById('editEditora'),
			$e_ISBN : document.getElementById('editISBN')
		}
	}


	static defineBookProps(operationType) {
		let fieldsInputs;

		if(operationType === 'add') fieldsInputs = Validator.getAddFields();
		else fieldsInputs = Validator.getEditFields();

		const key = Object.keys(fieldsInputs);

		return {
			livro : fieldsInputs[key[0]].value,  
			publicacao : fieldsInputs[key[1]].value,
			autor : fieldsInputs[key[2]].value,
			editora : fieldsInputs[key[3]].value,
			ISBN : fieldsInputs[key[4]].value
		}

	}

	static getValidsInputs(option) { 
	// take the dom references of the inputs and return the state of they, if ok(true), else(false)
		function makeObj(refs) {
			const obj = {};
			
			for(let key in refs) {
				if(refs[key].value.length > 6)
					obj[key] = true;
				else
					obj[key] = false;
			}

			return obj;
		}

		if(option === 'edit') {
			const resultEdit = makeObj(Validator.getEditFields()); 
			return resultEdit;
		}else {
			const resultAdd = makeObj(Validator.getAddFields());
			return resultAdd;	
		}
	}

	static validateInputs(inputType, inputs) {
		if(inputType === 'add') {
			const { $a_livro , $a_publicacao, $a_autor, $a_editora, $a_ISBN } = inputs ;
			let isValid = ( 
				$a_livro === true && $a_publicacao === true &&
				$a_autor === true  && $a_editora === true && $a_ISBN === true
			);
			
			return isValid;
		}

		if(inputType === 'edit') {
			const { $e_livro , $e_publicacao, $e_autor, $e_editora, $e_ISBN } = inputs;
			let isValid = ( 
				$e_livro === true && $e_publicacao === true &&
				$e_autor === true && $e_editora === true && $e_ISBN === true
			);	

			return isValid;
		}

	}

	static wrongInputsRef(state, ref) {
		// return the DOM reference from wrong inputs
		const obj = {};

		for(let key in state){
			if(!state[key]){
				obj[key] = ref[key];
			}
		}

	return obj;
	}

	static resetModalWhenClose($msgBox) {
		const $fields = Validator.getAddFields();
		//take the modal DOM reference and set the event handler to reset that when has been closed
		$('#formModal').on('hidden.bs.modal', evt => {
			Utils.clearInputs($fields);
			Utils.changeBoxMsg($msgBox, Utils.messages().default, 'primary');

			for(let key in $fields)
					$fields[key].style.background = 'transparent';
		})
	}

	static wrongInputsManagement($inputs, $msgBox) {
		//When a wrong inputs gets a user focus, the red color of that has been removed
		Utils.changeBoxMsg($msgBox, Utils.messages().wrongFields, 'danger');		
		Utils.changeInputColor($inputs);
		let wrongInputsCount = Object.keys($inputs).length;

		Listeners.set('newBookBTN', () => { //removed all events in the inputs 
			for(let key in $inputs) {
				Listeners.remove($inputs[key], attach, 'focus');
			}
		} , 'click');		

		for(let key in $inputs) {
			Listeners.set($inputs[key], attach, 'focus');
		}
		
		function attach(evt) { //remove the red color and reset the box msg when all inputs has been clicked
			evt.target.style.background = 'transparent';
			wrongInputsCount--;
			if(wrongInputsCount <= 0) {
				wrongInputsCount = 0;
				Utils.changeBoxMsg($msgBox, Utils.messages().default, 'primary');
			}
			Listeners.remove(evt.target, attach, 'focus');
		}
	}

}

export default Validator;