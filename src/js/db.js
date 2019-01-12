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

	static pushOne(one) {
		Books.push(one);
	}

	static editOne(one, id) {
		Books.forEach(element => console.log(element));
	}

}

export default dbScope;