"use strict";

import Listeners from './listeners.js'; // Listeners
import Validator from './validator.js'; // Validação

const Main = (function() {
	// Main scope
	Listeners.set('editar', (evt) => console.log(evt.target)); // edit
	Listeners.set('deletar', (evt) => console.log(evt.target)); // delete
	Listeners.set('addRegis', (evt) => console.log(evt.target)); // adicionar

	console.log('INDEX JS');

	console.log(Validator.getFields(true)); 
})();

