"use strict";
/////////////////////////////////////////////////////
// THIS MODULE SET A NAMESPACE TO CONTROL///////////
// the stage area of the transaction with server//
////////////////////////////////////////////////

let Books = [];

class dbScope {

 	static	setBooksFromDb(arr){
		Books = arr;
	}

	static getBooks() {
		return Books;
	}

	static pushOne(bookObj) {
		Books.push(bookObj);
	}

	static deleteOne(bookId) {
		Books = Books.filter(current => current.props.id !== bookId );

	}

	static editBook(props, id) {
		// take the book id, and edit that
		Books.forEach(current => {
			if(current.props.id === id) {
			
				for(let key in current.props) {
					current.props[key] = props[key];
				}
				
				current.props.id = id;
			}
		});
	}

	static async getResourcesFromDb(callback) {
		try {
			const databaseResponse = await fetch('./src/server/php/index.php');	
			const jsonData = await databaseResponse.json();
			const statusCode = databaseResponse.status;
			const error = false;

			callback(jsonData, statusCode, error); // jsonData, statusCode, erroObject		
		}catch(error) {
			callback(null, null, error); // jsonData, statusCode, erroObject
		}
	}

	static async deleteFromDb(bookId, callback) {
		const options = {
			headers : { 'Content-Type' : 'application/json' },
			method : 'DELETE',
			body : `{ "id" : "${Number(bookId)}" }`
		}
		try {
			const deleteRequest = await fetch('./src/server/php/index.php', options);
			const response = await deleteRequest.text();
			const statusCode = deleteRequest.status;
			const error = false;

			callback(response, statusCode, error);
		}catch(error) {
			callback(null, null, error);
		}
	}

	static async saveBookInDatabase(book, callback) {
		const options = {
			headers : { 'Content-Type' : 'application/json' },
			method : 'POST',
			body : JSON.stringify(book.getProps())
		}
		try {
			const createRequest = await fetch('./src/server/php/index.php', options);
			const response = await createRequest.text();
			const statusCode = createRequest.status;
			const error = false;

			callback(response, statusCode, error);
		}catch(error) {
			callback(null, null, error);
		}
	}

}

export default dbScope;