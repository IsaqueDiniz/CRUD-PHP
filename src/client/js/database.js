"use strict";
/////////////////////////////////////////////////////
// THIS MODULE SET A SCOPE TO CONTROL///////////
// the stage area of the transaction with server//
////////////////////////////////////////////////

const Stage = {
	Books : []
}

class Database {

 	static	setBooksFromDb(arr){
		Stage.Books = arr;
	}

	static getBooks() {
		return Stage.Books;
	}

	static saveInStage(bookObj) {
		Stage.Books.push(bookObj);
	}

	static deleteFromStage(bookId) {
		Stage.Books = Stage.Books.filter(current => current.props.id !== bookId );
	}

	static editBookInStage(props, id) {
		// take the book id, and edit that
		Stage.Books.forEach(current => {
			if(current.props.id === id) {
			
				for(let key in current.props) {
					current.props[key] = props[key];
				}
				
				current.props.id = id;
			}
		});
	}

	static async requestToDatabase(requestOptions, callback) {
		const URL = './src/server/php/routes.php';
		try {
			const request = await fetch(URL, requestOptions);
			const statusCode = request.status;
			let response;

			if(requestOptions.method === 'GET') response = await request.json();
			else response = await request.text();

			if(statusCode != 200) throw new Error('O banco de dados rejeitou o recurso. Tente novamente.');

			callback(null, response);
		}catch(error){
			callback(error);	
		}
	}

}

export default Database;