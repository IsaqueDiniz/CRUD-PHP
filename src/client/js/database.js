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
		Books = Books.filter(current => current.props.id !== bookId )

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
			callback(await databaseResponse.json(), databaseResponse.status, null);		
		}catch(error) {
			callback(null, null, error);
		}
	}	
}

export default dbScope;