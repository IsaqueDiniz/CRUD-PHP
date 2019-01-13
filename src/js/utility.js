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

	static changeInputColor(inputsRef, c){
	 // change de color of the inputs
		const color = c || '#FFE1E1'

		for(let key in inputsRef) {
				inputsRef[key].style.background = color;
		}
	}

	static customConfirm(message, callback) {
		let result; 

		const $template = `
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header d-flex justify-content-between p-3"">
							<h5 class="modal-title">Confirmação</h4>
								<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
         				 <span aria-hidden="true">&times;</span>
							  </button>
						</div>
						<div class="modal-header">
							${ message }				
						</div>
						<div class="modal-footer">
							 <button id="cancelBTN" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
			         <button id="confirmBTN" type="button" class="btn btn-danger">Confirmar</button>
						</div>
					</div>
				</div>
		`;

		const $modal = document.createElement('section');
					$modal.id = 'confirmModal';
					$modal.classList.add('modal', 'fade');
					$modal.setAttribute('tabindex', '-1');
					$modal.setAttribute('role', 'dialog');
					$modal.setAttribute('aria-labelledby', 'confirmModal');
					$modal.setAttribute('aria-hidden', 'true');
					
					$modal.innerHTML = $template;

		document.body.appendChild($modal);	
		$('#confirmModal').modal('show');		

		$('#confirmModal').on('hidden.bs.modal', () => {
			$confirm.removeEventListener('click', setTrue);
			$cancel.removeEventListener('click', setFalse);
			
			console.log('Event has happened...');

			document.body.removeChild(document.getElementById('confirmModal'));		
		})

		const $confirm = document.getElementById('confirmBTN');							
		const $cancel = document.getElementById('cancelBTN');

		$confirm.addEventListener('click', setTrue);
		$cancel.addEventListener('click', setFalse);

		function setTrue(evt) {
			callback(true);
			$('#confirmModal').modal('hide');
			evt.stopPropagation($modal);
		}

		function setFalse(evt) {
			callback(false);
			$('#confirmModal').modal('hide');
			evt.stopPropagation();
		}
	}

}

export default Utils;