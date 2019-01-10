"use strict";

import Validator from './validator.js';
import Listener from './listeners.js';

class Book {

	constructor({ livro, publicacao, autor, editora, ISBN }) {
		// properties for go to database
		this.props = {
			id : this.setID(ISBN),
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
		const $saveEditBTN = document.getElementById('saveEdit'); 
		const { id, livro, publicacao, autor, editora, ISBN } = this.props;  // all props from the current obj
		const { edit_btn } = this.DOM.buttons;
		const { $e_livro, $e_publicacao, $e_autor, $e_editora, $e_ISBN } = Validator.getEditFields(); // get the edit fields

		Listener.set(edit_btn, evt => {
			Validator.configureEditModal(this.props);
			console.log($saveEditBTN.dataset.book_id);
		});

		return this;
	}

	//Set event to delete method
	attachDeleteEvent() {
		return this;
	}

	create() {
		const { id, livro, publicacao, autor, editora, ISBN } = this.props;
		
		const { edit_btn, delete_btn } = this.DOM.buttons;
		
		const $parent = document.getElementById('bodyTable');
		const $row = document.createElement('tr');
					$row.id = id;


		const content = `
			<td>${ livro }</td>
			<td>${ publicacao }</td>
			<td>${ autor }</td>
			<td>${ editora }</td>
			<td>${ ISBN }</td>
			<td><button id="${ edit_btn }" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#editModal">Editar</button></td>
			<td><button id="${ delete_btn }" class="btn btn-sm btn-danger">Deletar</button></td>
		`;

		$row.innerHTML = content;
		$parent.appendChild($row);

		return this;
	}

	getProps() {
		return this.props;
	}

	setID(number) {
		const preId = String(Date.now()).split('').reverse().join('').slice(0, 3);		
		const id = number + preId;
		return id;
	}	

	

}

export default Book;