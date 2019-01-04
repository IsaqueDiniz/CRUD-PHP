"use strict";

import Listeners from './listeners.js'; // Listeners
import Validator from './validator.js'; // Validação
import Row from './component.js';

const Main = (function() {
	// Main scope


	Listeners.set('addBook', evt => {
		Row.writeRow(Validator.getFields(true));
	})

	console.log('INDEX JS');

	console.log(Validator.getFields(true)); 
})();

