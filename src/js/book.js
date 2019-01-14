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
			rowID : this.props.id,
			buttons : {
				edit_btn : `edit_${this.props.livro}`,
				delete_btn : `delete_${this.props.livro}`,
				saveEdit_btn : `'saveEdit_'${this.props.livro}`
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

				document.body.appendChild($template);
				$('#editModal').modal('show');

				$('#editModal').on('hidden.bs.modal', evt => {
					document.body.removeChild(document.getElementById('editModal'));
				});

				Listeners.set('saveEdit', evt => {
					alert('Edição salva!');
				})


			})


		return this;
	}

	//Set event to delete method
	attachDeleteEvent() {
		const { delete_btn } = this.DOM.buttons;
		const { id, livro } = this.props;
		const $table = document.getElementById('bodyTable');

		Listeners.set(delete_btn, function attach(a_evt) {
			const msg = `Deseje excluir ${ livro } permanentemente? `;

			Utils.customConfirm(msg, result => {
				if(result) {
					const $row = document.getElementById(id);
					$table.removeChild($row);
					Listeners.remove(a_evt.target, attach);			
				}
			})

		});

		return this;
	}

	create() {
		const { id, livro, publicacao, autor, editora, ISBN } = this.props;
		
		const { edit_btn, delete_btn } = this.DOM.buttons;
		
		const $parent = document.getElementById('bodyTable');
		const $row = document.createElement('tr');
					$row.id = id;


		const content = `
			<td id="e_Livro${ id }">${ livro }</td>
			<td id="e_publicacao${ id }"> ${ publicacao }</td>
			<td id="e_autor${ id }">${ autor }</td>
			<td id="e_editora${ id }">${ editora }</td>
			<td id="e_ISBN${ id }">${ ISBN }</td>
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

	static getEditTemplate(valuesObj) {

		const { id, livro, publicacao, autor, editora, ISBN } = valuesObj;

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
								<div class="form-group">
									<label for="nome_livro">Nome do Livro</label>
									<input value="${ livro }"
										 type="text" class="form-control" placeholder="Nome do Livro" name="nome_livro" id="editLivro" required disabled> 
								</div>
								<div class="form-group">
									<label for="data_public">Data de Publicação</label>
									<input value="${ publicacao }"
										type="date" class="form-control" placeholder="Publicação" name="data_public" id="editPublic" required disabled> 
								</div>
								<div class="form-group">
									<label for="nome_autor">Nome do Autor</label>
									<input value="${ autor }"
										type="text" class="form-control" placeholder="Autor" name="nome_autor" id="editAutor" required disabled> 
								</div>
								<div class="form-group">
									<label for="nome_editora">Editora	</label>
									<input value="${ editora }" 
										type="text" class="form-control"  placeholder="Editora" name="nome_editora" id="editEditora" required disabled> 
								</div>
								<div class="form-group">
									<label for="ISBN">Número ISBN</label>
									<input value="${ ISBN }" 
										type="number" class="form-control"  placeholder="ISBN" name="ISBN" id="editISBN" required disabled> 
								</div>
							<div class="modal-footer">
								<input class="btn btn-secondary" type="reset" value="Limpar">
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
					
		return $modal;
	}

}

export default Book;