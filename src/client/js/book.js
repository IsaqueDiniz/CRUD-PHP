"use strict";

import Validator from './validator.js';
import Listeners from './listeners.js';
import Utils from './utility.js';
import Database from './database.js';

class Book {

	constructor({ id, livro, publicacao, autor, editora, ISBN }) {
		// properties for go to database
		this.props = {
			id : id || this.setID(),
			livro : livro,
			publicacao : publicacao,
			autor : autor,
			editora : editora,
			ISBN : ISBN 										
		};
		//take and set the dom references
		this.DOM = {
			rowID : 'bookRowId' + this.props.id,
			buttons : {
				edit_btn : `edit_${this.props.livro}`,
				delete_btn : `delete_${this.props.livro}`,
				saveEdit_btn : `'saveEdit_'${this.props.livro}`
			},
			rowFields : {
				$livro : `livro${this.props.id}`, 
				$publicacao : `publicacao${this.props.id}`,
				$autor : `autor${this.props.id}`,
				$editora : `editora${this.props.id}`,
				$ISBN : `ISBN${this.props.id}`
			}
		};
	}

	//Set event to edit method 
	attachEditEvent() {
		const { edit_btn } = this.DOM.buttons;
		const { id } = this.props;
		const _thisBook = this;

			Listeners.set(edit_btn, function attach(a_evt) {
				const $template = Book.getEditTemplate(_thisBook.props);

				Book.utilEvents();

				Listeners.set('saveEdit', evt => {
					const $msgBox = document.getElementById('editMessage');
					const valuesState = Validator.getValidsInputs('edit');

					if(Validator.validateInputs('edit', valuesState)) {
						const editedProps = Validator.defineBookProps('edit');
		
						const requestOptions = {
							headers : { 'Content-Type' : 'application/json' },
							method : 'PUT',
							body : JSON.stringify({
								id : id,
								livro : editedProps.livro,
								publicacao : editedProps.publicacao,
								autor : editedProps.autor,
								editora : editedProps.editora,
								ISBN : editedProps.ISBN 
							})
						}

						Database.requestToDatabase(requestOptions, (error, response) => {
							if(error) {
								alert(`Houve um erro na operação\n\nError\n${error.name} : ${error.message}`);
								Utils.changeBoxMsg($msgBox, Utils.messages().databaseError, 'danger');
								Utils.closeWithDelay(document.getElementById('editModal'), null, 2000);
							}else {
								Database.editBookInStage(editedProps, id);		
								Book.updateRowFields(_thisBook.getProps(), _thisBook.DOM.rowFields);													
							}
						});

						Utils.changeBoxMsg($msgBox, Utils.messages().success, 'success');
						Utils.closeWithDelay(document.getElementById('editModal'), null, 1200);

					}else {
						const $wrongInputs = Validator.wrongInputsRef(valuesState, Validator.getEditFields());
						Validator.wrongInputsManagement($wrongInputs, $msgBox);
						console.log(`Campos errados: ${ $wrongInputs }`);								
					}

				});

			});

	return this;
	}

	//Set event to delete method
	attachDeleteEvent() {
		const { delete_btn } = this.DOM.buttons;
		const { id, livro } = this.props;
		const { rowID } = this.DOM;
		const $table = document.getElementById('bodyTable');

		Listeners.set(delete_btn, function attach(a_evt) {
			const msg = `Deseja excluir ${ livro } de forma PERMANENTE? `;

			Utils.customConfirm(msg, (confirm, modal_id) => { // take the result of the user click
				if(confirm) { // manipulate the 'true' result to remove the book
					
					const requestOptions = {
						headers : { 'Content-Type' : 'application/json' },
						method : 'DELETE',
						body : `{ "id" : "${Number(id)}" }`
					}

					Database.requestToDatabase(requestOptions, (error, response) => {
						if(error){
							alert(`Não foi possível realizar essa operação.\n\nErro\n${error.name} : ${error.message}`);
							setTimeout(() => $('#confirmModal').modal('hide'), 600);
						}else {
							const $row = document.getElementById(rowID);
							$table.removeChild($row);
							Listeners.remove(a_evt.target, attach);			
							Database.deleteFromStage(id);
						}
					});
				}
			});

		});

	return this;
	}

	createBook() {
		const { id, livro, publicacao, autor, editora, ISBN } = this.props;
		
		const { edit_btn, delete_btn } = this.DOM.buttons;
		
		const { rowID } = this.DOM;

		const { $livro, $publicacao, $autor, $editora, $ISBN } = this.DOM.rowFields;

		const $parent = document.getElementById('bodyTable');
		const $row = document.createElement('tr');
					$row.id = rowID;


		const content = `
			<td id="${ $livro }">${ livro }</td>
			<td id="${ $publicacao }"> ${ publicacao }</td>
			<td id="${ $autor }">${ autor }</td>
			<td id="${ $editora }">${ editora }</td>
			<td id="${ $ISBN }">${ ISBN }</td>
			<td><button id="${ edit_btn }" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#editModal">Editar</button></td>
			<td><button id="${ delete_btn }" class="btn btn-sm btn-danger" data-id="${ id }">Deletar</button></td>
		`;

		$row.innerHTML = content;
		$parent.appendChild($row);

	return this;
	}

	getProps() {
		return this.props;
	}

	setProps(obj){
		for(let key in obj)
			this.props[key] = obj[key];
	}

	setID() { // return a random number UNIQUE, with 6 digits
		const id = 
			Math.floor(Math.random() * (999 - 100 + 1)) + 100 +
			String(Date.now()).split('').reverse().join('').slice(0, 3);		
		return id;
	}	

	static getEditTemplate({ id, livro, publicacao, autor, editora, ISBN }) {
		// set and return a edit modal with the props off current book
		const $template = `
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="model-header d-flex justify-content-between p-3">
							<h5 class="modal-title" id="exampleModalLabel">Editar livro</h3>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
         					 <span aria-hidden="true">&times;</span>
       					</button>
						</div>	
						<form  class="modal-body container-fluid">
							<small>
	   						<div class="alert text-center alert-primary" role="alert" id="editMessage">
	   							Edite todos os campos abaixo com no mínimo 7 caracteres:
	   						</div>
							</small>
								<div class="form-group">
									<label for="nome_livro">Nome do Livro</label>
									<input value="${ livro }"
										 type="text" class="form-control" placeholder="Nome do Livro" name="nome_livro" id="editLivro" required> 
								</div>
								<div class="form-group">
									<label for="data_public">Data de Publicação</label>
									<input value="${ publicacao }"
										type="date" class="form-control" placeholder="Publicação" name="data_public" id="editPublic" required> 
								</div>
								<div class="form-group">
									<label for="nome_autor">Nome do Autor</label>
									<input value="${ autor }"
										type="text" class="form-control" placeholder="Autor" name="nome_autor" id="editAutor" required> 
								</div>
								<div class="form-group">
									<label for="nome_editora">Editora	</label>
									<input value="${ editora }" 
										type="text" class="form-control"  placeholder="Editora" name="nome_editora" id="editEditora" required> 
								</div>
								<div class="form-group">
									<label for="ISBN">Número ISBN</label>
									<input value="${ ISBN }" 
										type="number" class="form-control"  placeholder="ISBN" name="ISBN" id="editISBN" required> 
								</div>
							<div class="modal-footer">
								<input class="btn btn-secondary" type="button" id="clearEditFields" value="Limpar">
								<input class="btn btn-primary" type="button" id="saveEdit" value="Salvar">
							<div>
						</form>
					</div>
				</div>				
		`;
		// set attributes of this modal
		const $modal = document.createElement('section');
					$modal.id = 'editModal';
					$modal.classList.add('modal', 'fade');
					$modal.setAttribute('tabindex', '-1');
					$modal.setAttribute('role', 'dialog');
					$modal.setAttribute('aria-labelledby', 'editionModal');
					$modal.setAttribute('aria-hidden', 'true');

					$modal.innerHTML = $template;
		//include in the DOMM
		document.body.appendChild($modal);
		$('#editModal').modal('show');
				
	return $modal; 
	}

	static updateRowFields(props, rowFields) {
		
		const { $livro, $publicacao, $autor, $editora, $ISBN } = rowFields;

		document.getElementById($livro).textContent = props.livro;
		document.getElementById($publicacao).textContent = props.publicacao;
		document.getElementById($autor).textContent = props.autor;
		document.getElementById($editora).textContent = props.editora;
		document.getElementById($ISBN).textContent = props.ISBN;

	}

	static utilEvents() {
		// set Events for editModal
		Listeners.set('clearEditFields', (c_evt) => {
			const fields = Validator.getEditFields();

			for(let propKey in fields) {
				fields[propKey].value = '';
			}
		});

		$('#editModal').on('hidden.bs.modal', evt => {
			document.body.removeChild(document.getElementById('editModal'));
		});
	}


}

export default Book;