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

	static editBook(props, id) {
		Books.forEach(current => {
			if(current.props.id === id) {
			
				for(let key in current.props) {
					current.props[key] = props[key];
				}
				
				current.props.id = id;
			}
		});
	}

}

export default dbScope;