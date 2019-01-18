"use strict";

import Validator from './validator.js';
import Listeners from './listeners.js';
import Utils from './utility.js';
import dbScope from './db.js';

class Book {

	constructor({ livro, publicacao, autor, editora, ISBN }) {
		// properties for go to database
		this.props = {
			id : this.setID(),
			livro : livro,
			publicacao : publicacao,
			autor : autor,
			editora : editora,
			ISBN : ISBN 										
		};
		//take and set the dom references
		this.DOM = {
			rowID : Utils.removeWhiteSpaces(this.props.livro) + this.props.id,
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
		const props = this.props;
		const _this = this;

			Listeners.set(edit_btn, function attach(a_evt) {
				const $template = Book.getEditTemplate(props);

				Listeners.set('clearEditFields', (c_evt) => {
					const fields = Validator.getEditFields();

					for(let propKey in fields) {
						fields[propKey].value = '';
					}
				})


				$('#editModal').on('hidden.bs.modal', evt => {
					document.body.removeChild(document.getElementById('editModal'));
				});

				Listeners.set('saveEdit', evt => {
					const $boxMsg = document.getElementById('editMessage');
					const valuesState = Validator.getValidsInputs('edit');

					if(Validator.validateEditInputs(valuesState)) {
						const values = Validator.defineObj(Validator.getEditFields(), true);
						


						console.log(values);						
					}else {
						const $wrongInputs = Validator.wrongInputsRef(valuesState, Validator.getEditFields());
						let wrongInputsCount = Object.keys($wrongInputs).length;

						Utils.changeBoxMsg($boxMsg, Utils.messages().wrongFields, 'danger');
						Utils.changeInputColor($wrongInputs);
						Validator.wrongInputsWhenFocus($wrongInputs, wrongInputsCount, $boxMsg);

						console.log(`Campos errados: ${$wrongInputs}`);								
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

			Utils.customConfirm(msg, confirm => { // take the result of the user click
				if(confirm) { // manipulate the 'true' result to remove the book
					const $row = document.getElementById(rowID);
					$table.removeChild($row);
					Listeners.remove(a_evt.target, attach);			
					dbScope.deleteOne(id);
					console.log(dbScope.getBooks());
				}
			})

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

	setID() {
		const id = String(Date.now()).split('').reverse().join('').slice(0, 5);		
		return id;
	}	

	static getEditTemplate({ id, livro, publicacao, autor, editora, ISBN }) {

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

		const $modal = document.createElement('section');
					$modal.id = 'editModal';
					$modal.classList.add('modal', 'fade');
					$modal.setAttribute('tabindex', '-1');
					$modal.setAttribute('role', 'dialog');
					$modal.setAttribute('aria-labelledby', 'editionModal');
					$modal.setAttribute('aria-hidden', 'true');

					$modal.innerHTML = $template;

		document.body.appendChild($modal);
		$('#editModal').modal('show');
				
	return $modal;
	}

}

export default Book;