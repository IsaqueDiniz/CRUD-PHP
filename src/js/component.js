"use strict"

class Row {
	
	static writeRow(book){
		const $parent = document.getElementById('bodyTable');
		const $row = document.createElement('tr');
		const { livro, publicacao, autor, editora, ISBN } = book;

		$row.id = ISBN;

		const content = `
			<td>${ livro }</td>
			<td>${ publicacao }</td>
			<td>${ autor }</td>
			<td>${ editora }</td>
			<td>${ ISBN }</td>
			<td><button id="editar" class="btn btn-sm btn-warning" type="button" data-toggle="modal" data-target="#editModal">Editar</button></td>
			<td><button id="deletar" class="btn btn-sm btn-danger" type="button" data-toggle="modal" data-target="#deleteModal">Deletar</button></td>		
		` ;

		$row.innerHTML = content;
		$parent.appendChild($row);
	}

}

export default Row;