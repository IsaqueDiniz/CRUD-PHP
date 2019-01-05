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

	static validsInputs(values) { // return the valids inputs
		const validsInputs = {};

		for(let key in values){
			if(values[key].length > 6) {
				validsInputs[key] = true
			}else {
				validsInputs[key] = false;
			}
		}

	return validsInputs;
	}

	static allOk({ livro, publicacao, autor, editora, ISBN }) { // check if the all inputs is correct
		let result = false;

		if(livro === true && publicacao === true &&
			 autor === true && editora === true && ISBN === true)
			result = true;

	return result;
	}	

	static messages() { // utilities messages
		return {
			wrongsFields : 'Preencha os campos em vermelho corretamente:',
			default : 'Preencha todos os campos abaixo!',
			allOkAlert : 'Todos os campos estão corretos!',
			successfulRegister : 'Adicionado com sucesso',
			initial : 'Preencha todos os campos abaixo com no mínimo 7 caracteres'
		}
	}

	static wrongInputsColor(inputsRef, c){ // change de color of the inputs
		const color = c || '#FFE1E1'
		for(let key in inputsRef){
			inputsRef[key].style.background = color;
		}
	}

	static resetInputs(inputs) { // take the inputs references and clear the values of that
		for(let key in inputs){
			inputs[key].value = '';
		}
	}

	static changeBoxMsg(boxRef, text, state){
		if(state === 'danger') {
			boxRef.textContent = text;
			boxRef.classList.remove('alert-primary')
			boxRef.classList.remove('alert-warning')
			boxRef.classList.add('alert-danger')
		}
		if(state === 'primary') {
			boxRef.textContent = text;
			boxRef.classList.remove('alert-danger');
			boxRef.classList.remove('alert-warning')
			boxRef.classList.add('alert-primary');
		}
		if(state === 'warning') {
			boxRef.textContent = text;
			boxRef.classList.remove('alert-danger');
			boxRef.classList.remove('alert-primary')
			boxRef.classList.add('alert-warning');
		}
	}

}


export default Validator;