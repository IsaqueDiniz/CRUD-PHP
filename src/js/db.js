"use strict";

let Books = [];

class dbScope {

	constructor() {}

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
		
	}
}

export default dbScope;