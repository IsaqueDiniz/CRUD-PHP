"use strict";

class Utils {

	static messages() { // utilities messages
		return {
			wrongFields : 'Preencha os campos em vermelho corretamente:',
			okAlert : 'Todos os campos estão corretos!',
			addedSuccessful : 'Adicionado com sucesso',
			default : 'Preencha todos os campos abaixo com no mínimo 7 caracteres'
		}
	}

	static changeBoxMsg(boxRef, text, state){
		//Take a DOM reference of a box, and change de color with 'state' attr, and set a new text;		
		boxRef.textContent = text;
		boxRef.classList.remove('alert-success', 'alert-primary', 'alert-warning', 'alert-danger');

		switch(state) {
			case 'success':
				boxRef.classList.add('alert-success');
			break;
			case 'danger':
				boxRef.classList.add('alert-danger');
			break;
			case 'warning':
				boxRef.classList.add('alert-warning');
			break;
			default:
				boxRef.classList.add('alert-primary');
			break;
		}
	}

	static clearInputs(refObj) {
		//take a obj with reference from inputs and reset the fields
		for(let key in refObj)
			refObj[key].value = '';			
	}

	// static removeWhiteSpaces(_string){
	// 	while ()
	// 	return value
	// }

	static changeInputColor(inputsRef, c){
	 // change de color of the inputs
		const color = c || '#FFE1E1'

		for(let key in inputsRef) {
				inputsRef[key].style.background = color;
		}
	}

}

export default Utils;