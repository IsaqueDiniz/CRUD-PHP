"use strict";

import Validator from './validator.js';
import Listeners from './listeners.js';
import Utils from './utility.js';

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
		const { id, livro, publicacao, autor, editora, ISBN } = this.props;  // all props from the current obj
		const { edit_btn } = this.DOM.buttons;
		
		const $saveEdit = document.getElementById('saveEdit'); 
		const $editFields = Validator.getEditFields(); // get the edit fields

		Listeners.set(edit_btn, () => Validator.configureEditModal(this.props, $saveEdit, $editFields));
		Listeners.set($saveEdit, editThisBook);


		function editThisBook(evt) {
			const $boxMsg = document.getElementById('editMessage');
			const valuesState = Validator.getValidsInputs($editFields); 

			if(Validator.validateEditInputs(valuesState)) {
				alert('Tudo certo');
			}else {
				const $wrongInputs = Validator.wrongInputsRef(valuesState, $editFields);
				let wrongInputsCount = Object.keys($wrongInputs).length;

				Utils.changeBoxMsg($boxMsg, Utils.messages().wrongFields, 'danger');
				Utils.changeInputColor($wrongInputs);

				for(let key in $wrongInputs)
						Listeners.set($wrongInputs[key], showWrongInputs, 'focus');

				function showWrongInputs(evt) {
					//Manage the wrong inputs when clicked remove the red color
					evt.target.style.background = 'transparent';
					wrongInputsCount--;
					if(wrongInputsCount <= 0){
						wrongInputsCount = 0;
						Utils.changeBoxMsg($boxMsg, Utils.messages().default, 'primary');
					}
					Listeners.remove(evt.target, showWrongInputs, 'focus');	
				}	
			}
		}

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