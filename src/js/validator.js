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

	static getEditFields(){
	 // return the fields from the edit-modal
		return {
			$e_livro : document.getElementById('editLivro'),
			$e_publicacao : document.getElementById('editPublic'),
			$e_autor : document.getElementById('editAutor'),
			$e_editora : document.getElementById('editEditora'),
			$e_ISBN : document.getElementById('editISBN')
		}
	}

	static defineObj(ref, option) { // define a object with the values of the inputs
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

	static validateEditInputs({ $e_livro , $e_publicacao, $e_autor, $e_editora, $e_ISBN }) { 
		// return true if all of the fields in the edit modal its ok
		let result = false;

		if($e_livro === true && $e_publicacao === true &&
			 $e_autor === true && $e_editora === true && $e_ISBN === true)
			result = true;

	return result;
	}	

	static validateAddInputs({ $a_livro , $a_publicacao, $a_autor, $a_editora, $a_ISBN }) { 
		// return true if all of the fields in the add form its ok
		let result = false;

		if($a_livro === true && $a_publicacao === true &&
			 $a_autor === true && $a_editora === true && $a_ISBN === true)
			result = true;

	return result;
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

	static configureEditModal(props, $saveBTN, fields) {
		const { $e_livro, $e_publicacao, $e_autor, $e_editora, $e_ISBN } = fields;

		$e_livro.value = props.livro;
		$e_publicacao.value = props.publicacao;
		$e_autor.value = props.autor;
		$e_editora.value = props.editora;
		$e_ISBN.value = props.ISBN;

		$saveBTN.dataset.id_book = props.id;

		Utils.changeInputColor(fields, 'transparent');
		Utils.changeBoxMsg(
			document.getElementById('editMessage'),
			Utils.messages().default,
			'primary'
		);
	}

	static resetModalWhenClose($modal, $msgBox, $fields) {

		$($modal).on('hidden.bs.modal', evt => {
			Utils.clearInputs($fields);
			Utils.changeBoxMsg($msgBox, Utils.messages().default, 'primary');

			for(let key in $fields)
					$fields[key].style.background = 'transparent';
		})
	}

	static wrongInputsWhenFocus($inputs, c, $msgBox) {
		let count = c;

		for(let propKey in $inputs) {
			Listeners.set($inputs[propKey],
				function attach(evt) {
					evt.target.style.background = 'transparent';
					count--;

					if(count <= 0) {
						count = 0;
						Utils.changeBoxMsg($msgBox, Utils.messages().default, 'primary');
					}
					Listeners.remove(evt.target, attach, 'focus');
				}				
			,'focus');
		}
	}

}

export default Validator;