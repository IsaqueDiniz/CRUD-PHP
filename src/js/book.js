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
			<td id="e_Livro${ id }">${ livro }</td>
			<td id="e_publicacao${ id }"> ${ publicacao }</td>
			<td id="e_autor${ id }">${ autor }</td>
			<td id="e_editora${ id }">${ editora }</td>
			<td id="e_ISBN${ id }">${ ISBN }</td>
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

	setProps(obj){
		for(let key in obj)
			this.props[key] = obj[key];
	}

	setID(number) {
		const id = String(Date.now()).split('').reverse().join('').slice(0, 5);		
		return id;
	}	

}

export default Book;