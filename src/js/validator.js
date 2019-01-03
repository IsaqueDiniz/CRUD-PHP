"use strict";

class Validator {

	static getFields(getValues) { // return the fields or values
		const $fields = {
			livro : document.getElementById('nome_livro'),
			publicacao : document.getElementById('data_public'),
			autor : document.getElementById('nome_autor'),
			editora : document.getElementById('nome_editora'),
			ISBN : document.getElementById('ISBN')
		}
	
		const	result = {};
		
		if(!getValues){ // return DOM refs
			return $fields;
		}

		for(let key in $fields){
			result[key] = $fields[key].value;
		}

		return result; // return values of inputs
	}

}

export default Validator;