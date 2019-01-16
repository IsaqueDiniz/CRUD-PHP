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
		Books = Books.filter(current => current.props.id !== bookId )

	}
}

export default dbScope;