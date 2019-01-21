/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/book.js */ \"./src/js/book.js\");\n/* harmony import */ var _js_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/listeners.js */ \"./src/js/listeners.js\");\n/* harmony import */ var _js_validator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/validator.js */ \"./src/js/validator.js\");\n/* harmony import */ var _js_utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/utility.js */ \"./src/js/utility.js\");\n/* harmony import */ var _js_db_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/db.js */ \"./src/js/db.js\");\n/* harmony import */ var _js_server_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/server.js */ \"./src/js/server.js\");\n\n\n//////////////////////////////////////\n// THE MAIN FILE TO CONTROL THE APP /\n///////////////////////////////////\n\n // Book class\n // Listeners\n // Validators\n // Utilities\n // Scope to all books\n \n\nconst Main = (function() {\n\t// Main scope\n\t\n\t_js_server_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getResource();\t\n\n\t//Listeners\n\t_js_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('newBookBTN', newBook);\n\n\t//Functions\n\tfunction newBook(evt) {\n\t\tconst $msgBox = document.getElementById('createMessage'); // take the alert box \n\t\t\n\t\tconst valuesState = _js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getValidsInputs(); // state of the inputs\n\t\tconst $inputsReference = _js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAddFields();  // DOM reference of the inputs\n\n\t\t_js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetModalWhenClose($msgBox);\n\n\t\tif(_js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validateInputs('add', valuesState)) {\n\t\t\tconst propsValues = _js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defineBookProps('add');\n\t\t\tconst book = new _js_book_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](propsValues); // create a new book\n\t\t\t\t\t\tbook // set all configuration to the current registry\n\t\t\t\t\t\t\t.createBook()\n\t\t\t\t\t\t\t.attachEditEvent()\n\t\t\t\t\t\t\t.attachDeleteEvent(); \n\n\t\t\t_js_db_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].pushOne(book);\n\n\t\t\t// after added new registry, close and reset the modal\n\t\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearInputs($inputsReference);\t\t\n\t\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeBoxMsg($msgBox, _js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].messages().success, 'success');\n\t\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].closeWithDelay('#formModal', $msgBox);\n\n\t\t}\telse {\n\t\t\tconst $wrongInputs = _js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].wrongInputsRef(valuesState, $inputsReference); // obj with DOM reference from wrong fields\n\t\t\t_js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].wrongInputsManagement($wrongInputs, $msgBox);\n\t\t}\n\t}\n\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/book.js":
/*!************************!*\
  !*** ./src/js/book.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.js */ \"./src/js/validator.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ \"./src/js/listeners.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.js */ \"./src/js/utility.js\");\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db.js */ \"./src/js/db.js\");\n\n\n\n\n\n\n\nclass Book {\n\n\tconstructor({ livro, publicacao, autor, editora, ISBN }) {\n\t\t// properties for go to database\n\t\tthis.props = {\n\t\t\tid : this.setID(),\n\t\t\tlivro : livro,\n\t\t\tpublicacao : publicacao,\n\t\t\tautor : autor,\n\t\t\teditora : editora,\n\t\t\tISBN : ISBN \t\t\t\t\t\t\t\t\t\t\n\t\t};\n\t\t//take and set the dom references\n\t\tthis.DOM = {\n\t\t\trowID : _utility_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeWhiteSpaces(this.props.livro) + this.props.id,\n\t\t\tbuttons : {\n\t\t\t\tedit_btn : `edit_${this.props.livro}`,\n\t\t\t\tdelete_btn : `delete_${this.props.livro}`,\n\t\t\t\tsaveEdit_btn : `'saveEdit_'${this.props.livro}`\n\t\t\t},\n\t\t\trowFields : {\n\t\t\t\t$livro : `livro${this.props.id}`, \n\t\t\t\t$publicacao : `publicacao${this.props.id}`,\n\t\t\t\t$autor : `autor${this.props.id}`,\n\t\t\t\t$editora : `editora${this.props.id}`,\n\t\t\t\t$ISBN : `ISBN${this.props.id}`\n\t\t\t}\n\t\t};\n\t}\n\n\t//Set event to edit method \n\tattachEditEvent() {\n\t\tconst { edit_btn } = this.DOM.buttons;\n\t\tconst { id } = this.props;\n\t\tconst _thisBook = this;\n\n\t\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(edit_btn, function attach(a_evt) {\n\t\t\t\tconst $template = Book.getEditTemplate(_thisBook.props);\n\n\t\t\t\tBook.utilEvents();\n\n\t\t\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('saveEdit', evt => {\n\t\t\t\t\tconst $msgBox = document.getElementById('editMessage');\n\t\t\t\t\tconst valuesState = _validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getValidsInputs('edit');\n\n\t\t\t\t\tif(_validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validateInputs('edit', valuesState)) {\n\t\t\t\t\t\tconst bookEditedProps = _validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defineBookProps('edit');\n\t\t\t\t\t\t\n\t\t\t\t\t\t_db_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].editBook(bookEditedProps, id);\t\t\t\t\t\t\n\n\t\t\t\t\t\t_utility_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeBoxMsg($msgBox, _utility_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].messages().success, 'success');\n\t\t\t\t\t\t_utility_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].closeWithDelay(document.getElementById('editModal'), null, 1200);\n\n\t\t\t\t\t\tBook.updateRowFields(_thisBook.props, _thisBook.DOM.rowFields);\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t}else {\n\t\t\t\t\t\tconst $wrongInputs = _validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrongInputsRef(valuesState, _validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getEditFields());\n\t\t\t\t\t\t_validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrongInputsManagement($wrongInputs, $msgBox);\n\t\t\t\t\t\tconsole.log(`Campos errados: ${ $wrongInputs }`);\t\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\n\t\t\t\t});\n\n\t\t\t});\n\n\treturn this;\n\t}\n\n\t//Set event to delete method\n\tattachDeleteEvent() {\n\t\tconst { delete_btn } = this.DOM.buttons;\n\t\tconst { id, livro } = this.props;\n\t\tconst { rowID } = this.DOM;\n\t\tconst $table = document.getElementById('bodyTable');\n\n\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(delete_btn, function attach(a_evt) {\n\t\t\tconst msg = `Deseja excluir ${ livro } de forma PERMANENTE? `;\n\n\t\t\t_utility_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].customConfirm(msg, confirm => { // take the result of the user click\n\t\t\t\tif(confirm) { // manipulate the 'true' result to remove the book\n\t\t\t\t\tconst $row = document.getElementById(rowID);\n\t\t\t\t\t$table.removeChild($row);\n\t\t\t\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(a_evt.target, attach);\t\t\t\n\t\t\t\t\t_db_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteOne(id);\n\t\t\t\t\tconsole.log(_db_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getBooks());\n\t\t\t\t}\n\t\t\t})\n\n\t\t});\n\n\treturn this;\n\t}\n\n\tcreateBook() {\n\t\tconst { id, livro, publicacao, autor, editora, ISBN } = this.props;\n\t\t\n\t\tconst { edit_btn, delete_btn } = this.DOM.buttons;\n\t\t\n\t\tconst { rowID } = this.DOM;\n\n\t\tconst { $livro, $publicacao, $autor, $editora, $ISBN } = this.DOM.rowFields;\n\n\t\tconst $parent = document.getElementById('bodyTable');\n\t\tconst $row = document.createElement('tr');\n\t\t\t\t\t$row.id = rowID;\n\n\n\t\tconst content = `\n\t\t\t<td id=\"${ $livro }\">${ livro }</td>\n\t\t\t<td id=\"${ $publicacao }\"> ${ publicacao }</td>\n\t\t\t<td id=\"${ $autor }\">${ autor }</td>\n\t\t\t<td id=\"${ $editora }\">${ editora }</td>\n\t\t\t<td id=\"${ $ISBN }\">${ ISBN }</td>\n\t\t\t<td><button id=\"${ edit_btn }\" class=\"btn btn-sm btn-warning\" data-toggle=\"modal\" data-target=\"#editModal\">Editar</button></td>\n\t\t\t<td><button id=\"${ delete_btn }\" class=\"btn btn-sm btn-danger\" data-id=\"${ id }\">Deletar</button></td>\n\t\t`;\n\n\t\t$row.innerHTML = content;\n\t\t$parent.appendChild($row);\n\n\treturn this;\n\t}\n\n\tgetProps() {\n\t\treturn this.props;\n\t}\n\n\tsetProps(obj){\n\t\tfor(let key in obj)\n\t\t\tthis.props[key] = obj[key];\n\t}\n\n\tsetID() {\n\t\tconst id = String(Date.now()).split('').reverse().join('').slice(0, 5);\t\t\n\t\treturn id;\n\t}\t\n\n\tstatic getEditTemplate({ id, livro, publicacao, autor, editora, ISBN }) {\n\t\t// set and return a edit modal with the props off current book\n\t\tconst $template = `\n\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t<div class=\"model-header d-flex justify-content-between p-3\">\n\t\t\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Editar livro</h3>\n\t\t\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n         \t\t\t\t\t <span aria-hidden=\"true\">&times;</span>\n       \t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<form  class=\"modal-body container-fluid\">\n\t\t\t\t\t\t\t<small>\n\t   \t\t\t\t\t\t<div class=\"alert text-center alert-primary\" role=\"alert\" id=\"editMessage\">\n\t   \t\t\t\t\t\t\tEdite todos os campos abaixo com no mínimo 7 caracteres:\n\t   \t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"nome_livro\">Nome do Livro</label>\n\t\t\t\t\t\t\t\t\t<input value=\"${ livro }\"\n\t\t\t\t\t\t\t\t\t\t type=\"text\" class=\"form-control\" placeholder=\"Nome do Livro\" name=\"nome_livro\" id=\"editLivro\" required> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"data_public\">Data de Publicação</label>\n\t\t\t\t\t\t\t\t\t<input value=\"${ publicacao }\"\n\t\t\t\t\t\t\t\t\t\ttype=\"date\" class=\"form-control\" placeholder=\"Publicação\" name=\"data_public\" id=\"editPublic\" required> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"nome_autor\">Nome do Autor</label>\n\t\t\t\t\t\t\t\t\t<input value=\"${ autor }\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Autor\" name=\"nome_autor\" id=\"editAutor\" required> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"nome_editora\">Editora\t</label>\n\t\t\t\t\t\t\t\t\t<input value=\"${ editora }\" \n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"  placeholder=\"Editora\" name=\"nome_editora\" id=\"editEditora\" required> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"ISBN\">Número ISBN</label>\n\t\t\t\t\t\t\t\t\t<input value=\"${ ISBN }\" \n\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"  placeholder=\"ISBN\" name=\"ISBN\" id=\"editISBN\" required> \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t<input class=\"btn btn-secondary\" type=\"button\" id=\"clearEditFields\" value=\"Limpar\">\n\t\t\t\t\t\t\t\t<input class=\"btn btn-primary\" type=\"button\" id=\"saveEdit\" value=\"Salvar\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t`;\n\t\t// set attributes of this modal\n\t\tconst $modal = document.createElement('section');\n\t\t\t\t\t$modal.id = 'editModal';\n\t\t\t\t\t$modal.classList.add('modal', 'fade');\n\t\t\t\t\t$modal.setAttribute('tabindex', '-1');\n\t\t\t\t\t$modal.setAttribute('role', 'dialog');\n\t\t\t\t\t$modal.setAttribute('aria-labelledby', 'editionModal');\n\t\t\t\t\t$modal.setAttribute('aria-hidden', 'true');\n\n\t\t\t\t\t$modal.innerHTML = $template;\n\t\t//include in the DOMM\n\t\tdocument.body.appendChild($modal);\n\t\t$('#editModal').modal('show');\n\t\t\t\t\n\treturn $modal; \n\t}\n\n\tstatic updateRowFields(props, rowFields) {\n\t\t\n\t\tconst { $livro, $publicacao, $autor, $editora, $ISBN } = rowFields;\n\n\t\tdocument.getElementById($livro).textContent = props.livro;\n\t\tdocument.getElementById($publicacao).textContent = props.publicacao;\n\t\tdocument.getElementById($autor).textContent = props.autor;\n\t\tdocument.getElementById($editora).textContent = props.editora;\n\t\tdocument.getElementById($ISBN).textContent = props.ISBN;\n\n\t}\n\n\tstatic utilEvents() {\n\t\t// set Events for editModal\n\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('clearEditFields', (c_evt) => {\n\t\t\tconst fields = _validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getEditFields();\n\n\t\t\tfor(let propKey in fields) {\n\t\t\t\tfields[propKey].value = '';\n\t\t\t}\n\t\t});\n\n\t\t$('#editModal').on('hidden.bs.modal', evt => {\n\t\t\tdocument.body.removeChild(document.getElementById('editModal'));\n\t\t});\n\t}\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n//# sourceURL=webpack:///./src/js/book.js?");

/***/ }),

/***/ "./src/js/db.js":
/*!**********************!*\
  !*** ./src/js/db.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/////////////////////////////////////////////////////\n// THIS MODULE SET A NAMESPACE TO CONTROL///////////\n// the stage area of the transaction with server//\n////////////////////////////////////////////////\n\nlet Books = [];\n\nclass dbScope {\n\n\tconstructor() {}\n\n \tstatic\tsetBooksFromDb(arr){\n\t\tBooks = arr;\n\t}\n\n\tstatic getBooks() {\n\t\treturn Books;\n\t}\n\n\tstatic pushOne(bookObj) {\n\t\tBooks.push(bookObj);\n\t}\n\n\tstatic deleteOne(bookId) {\n\t\tBooks = Books.filter(current => current.props.id !== bookId )\n\n\t}\n\n\tstatic editBook(props, id) {\n\t\t// take the book id, and edit that\n\t\tBooks.forEach(current => {\n\t\t\tif(current.props.id === id) {\n\t\t\t\n\t\t\t\tfor(let key in current.props) {\n\t\t\t\t\tcurrent.props[key] = props[key];\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tcurrent.props.id = id;\n\t\t\t}\n\t\t});\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbScope);\n\n//# sourceURL=webpack:///./src/js/db.js?");

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/////////////////////////////////////////////\n// A SIMPLE CLASS WITH Event Handlers methods\n\nclass Listeners {\n\n\tstatic set(ref, callback, e) {\n\t\tconst event = e || 'click';\n\n\t\tif(typeof ref === 'string'){\n\t\t\tdocument.getElementById(ref)\n\t\t\t\t.addEventListener(event, callback);\t\t\t\n\t\t}else {\n\t\t\tref.addEventListener(event, callback);\n\t\t}\n\t}\n\n\tstatic remove(ref, callback, e){\n\t\tconst event = e || 'click';\n\n\t\tif(typeof ref == 'string'){\n\t\t\tdocument.getElementById(ref)\n\t\t\t\t.removeEventListener(event, callback);\n\t\t}else{\n\t\t\tref.removeEventListener(event, callback);\n\t\t}\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Listeners);\n\n//# sourceURL=webpack:///./src/js/listeners.js?");

/***/ }),

/***/ "./src/js/server.js":
/*!**************************!*\
  !*** ./src/js/server.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Server {\n\n\tstatic async getResource() {\n\t\tfunction myPromise(time) {\n\t\t\treturn new Promise((resolve, reject) => {\n\t\t\t\tsetTimeout(() => resolve({ \"nome\" : \"Isaque\" }), time * 1000);\n\t\t\t}) \n\t\t} \n\n\t\ttry{\n\t\t\tconsole.log('Esperando resolução')\n\t\t\tconst result = await myPromise(5);\n\t\t\tconsole.log(result);\n\t\t}catch (err) {\t\n\t\t\tconsole.log(err);\n\t\t}\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Server);\n\n//# sourceURL=webpack:///./src/js/server.js?");

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n////////////////////////////////////////////////////////////\n// Set a class of methods with abastraction off utilities /\n/////////////////////////////////////////////////////////\nclass Utils {\n\n\tstatic messages() { // utilities messages\n\t\treturn {\n\t\t\twrongFields : 'Preencha os campos em vermelho corretamente:',\n\t\t\tokAlert : 'Todos os campos estão corretos!',\n\t\t\tsuccess : 'Adicionado com sucesso',\n\t\t\tdefault : 'Preencha todos os campos abaixo com no mínimo 7 caracteres'\n\t\t}\n\t}\n\n\tstatic changeBoxMsg(boxRef, text, state){\n\t\t//Take a DOM reference of a box, and change de color with 'state' attr, and set a new text;\t\t\n\t\tboxRef.textContent = text;\n\t\tboxRef.classList.remove('alert-success', 'alert-primary', 'alert-warning', 'alert-danger');\n\n\t\tswitch(state) {\n\t\t\tcase 'success':\n\t\t\t\tboxRef.classList.add('alert-success');\n\t\t\tbreak;\n\t\t\tcase 'danger':\n\t\t\t\tboxRef.classList.add('alert-danger');\n\t\t\tbreak;\n\t\t\tcase 'warning':\n\t\t\t\tboxRef.classList.add('alert-warning');\n\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tboxRef.classList.add('alert-primary');\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tstatic clearInputs(refObj) {\n\t\t//take a obj with reference from inputs and reset the fields\n\t\tfor(let key in refObj)\n\t\t\trefObj[key].value = '';\t\t\t\n\t}\n\n\tstatic changeInputColor(inputsRef, c){\n\t // change de color of the inputs\n\t\tconst color = c || '#FFE1E1'\n\n\t\tfor(let key in inputsRef) {\n\t\t\t\tinputsRef[key].style.background = color;\n\t\t}\n\t}\n\n\tstatic customConfirm(message, callback) { // create a modal confirm to manipulate the DELETE operation\n\t\tlet result; \n\n\t\tconst $template = ` \n\t\t\t\t<div class=\"modal-dialog\" role=\"document\">\n\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t<div class=\"modal-header d-flex justify-content-between p-3\"\">\n\t\t\t\t\t\t\t<h5 class=\"modal-title\">Confirmação</h4>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\">\n         \t\t\t\t <span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t${ message }\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t <button id=\"cancelBTN\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n\t\t\t         <button id=\"confirmBTN\" type=\"button\" class=\"btn btn-danger\">Confirmar</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t`;\n\n\t\t//configure the modal\n\t\tconst $modal = document.createElement('section');\n\t\t\t\t\t$modal.id = 'confirmModal';\n\t\t\t\t\t$modal.classList.add('modal', 'fade');\n\t\t\t\t\t$modal.setAttribute('tabindex', '-1');\n\t\t\t\t\t$modal.setAttribute('role', 'dialog');\n\t\t\t\t\t$modal.setAttribute('aria-labelledby', 'confirmModal');\n\t\t\t\t\t$modal.setAttribute('aria-hidden', 'true');\n\t\t\t\t\t\n\t\t\t\t\t$modal.innerHTML = $template;\n\n\t\tdocument.body.appendChild($modal);\t// add and show the modal\n\t\t$('#confirmModal').modal('show');\t\t\n\n\t\t$('#confirmModal').on('hidden.bs.modal', evt => { // operations when closes the modal\n\t\t\t$confirm.removeEventListener('click', setTrue);\n\t\t\t$cancel.removeEventListener('click', setFalse);\n\t\t\t\n\t\t\tconsole.log('Event has happened...');\n\n\t\t\tdocument.body.removeChild(document.getElementById('confirmModal'));\t\t//remove from the DOM\n\t\t})\n\n\t\tconst $confirm = document.getElementById('confirmBTN');\t\t\t\t\t\t\t\n\t\tconst $cancel = document.getElementById('cancelBTN');\n\n\t\t$confirm.addEventListener('click', setTrue);\n\t\t$cancel.addEventListener('click', setFalse);\n\n\t\tfunction setTrue(evt) { // pass true to callback\n\t\t\tcallback(true);\n\t\t\t$('#confirmModal').modal('hide');\n\t\t\tevt.stopPropagation($modal);\n\t\t}\n\n\t\tfunction setFalse(evt) { //pass false to callback\n\t\t\tcallback(false);\n\t\t\t$('#confirmModal').modal('hide');\n\t\t\tevt.stopPropagation();\n\t\t}\n\t}\n\n\tstatic closeWithDelay($reference, $box, d) {\n\t\tconst delay = d || 600 \n\t\tsetTimeout(() => { \n\t\t\t$($reference).modal('toggle');\n\t\t\t\tif($box) Utils.changeBoxMsg($box, Utils.messages().default, 'primary');\n\t\t}, 600);\t\t\n\t}\n\n\tstatic removeWhiteSpaces(str){\n\t\treturn str.replace(/\\s/g, '');\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n//# sourceURL=webpack:///./src/js/utility.js?");

/***/ }),

/***/ "./src/js/validator.js":
/*!*****************************!*\
  !*** ./src/js/validator.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./src/js/utility.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ \"./src/js/listeners.js\");\n\n\n\n\n\nclass Validator {\n\n\tstatic getAddFields() {\n\t // return the fields from new newBook-modal\n\t\treturn {\n\t\t\t\t$a_livro : document.getElementById('nome_livro'),\n\t\t\t\t$a_publicacao : document.getElementById('data_public'),\n\t\t\t\t$a_autor : document.getElementById('nome_autor'),\n\t\t\t\t$a_editora : document.getElementById('nome_editora'),\n\t\t\t\t$a_ISBN : document.getElementById('ISBN')\n\t\t\t}\n\t}\n\n\tstatic getEditFields() {\n\t // return the fields from the edit-modal\n\t\treturn {\n\t\t\t$e_livro : document.getElementById('editLivro'),\n\t\t\t$e_publicacao : document.getElementById('editPublic'),\n\t\t\t$e_autor : document.getElementById('editAutor'),\n\t\t\t$e_editora : document.getElementById('editEditora'),\n\t\t\t$e_ISBN : document.getElementById('editISBN')\n\t\t}\n\t}\n\n\n\tstatic defineBookProps(operationType) {\n\t\tlet fieldsInputs;\n\n\t\tif(operationType === 'add') fieldsInputs = Validator.getAddFields();\n\t\telse fieldsInputs = Validator.getEditFields();\n\n\t\tconst key = Object.keys(fieldsInputs);\n\n\t\treturn {\n\t\t\tlivro : fieldsInputs[ key[0] ].value,  \n\t\t\tpublicacao : fieldsInputs[ key[1] ].value,\n\t\t\tautor : fieldsInputs[ key[2] ].value,\n\t\t\teditora : fieldsInputs[ key[3] ].value,\n\t\t\tISBN : fieldsInputs[ key[4] ].value\n\t\t}\n\n\t}\n\n\tstatic getValidsInputs(option) { \n\t// take the dom references of the inputs and return the state of they, if ok(true), else(false)\n\t\tfunction makeObj(refs) {\n\t\t\tconst obj = {};\n\t\t\t\n\t\t\tfor(let key in refs) {\n\t\t\t\tif(refs[key].value.length > 6)\n\t\t\t\t\tobj[key] = true;\n\t\t\t\telse\n\t\t\t\t\tobj[key] = false;\n\t\t\t}\n\n\t\t\treturn obj;\n\t\t}\n\n\t\tif(option === 'edit') {\n\t\t\tconst resultEdit = makeObj(Validator.getEditFields()); \n\t\t\treturn resultEdit;\n\t\t}else {\n\t\t\tconst resultAdd = makeObj(Validator.getAddFields());\n\t\t\treturn resultAdd;\t\n\t\t}\n\t}\n\n\tstatic validateInputs(inputType, inputs) {\n\t\tif(inputType === 'add') {\n\t\t\tconst { $a_livro , $a_publicacao, $a_autor, $a_editora, $a_ISBN } = inputs ;\n\t\t\tlet isValid = ( \n\t\t\t\t$a_livro === true && $a_publicacao === true &&\n\t\t\t\t$a_autor === true  && $a_editora === true && $a_ISBN === true\n\t\t\t);\n\t\t\t\n\t\t\treturn isValid;\n\t\t}\n\n\t\tif(inputType === 'edit') {\n\t\t\tconst { $e_livro , $e_publicacao, $e_autor, $e_editora, $e_ISBN } = inputs;\n\t\t\tlet isValid = ( \n\t\t\t\t$e_livro === true && $e_publicacao === true &&\n\t\t\t\t$e_autor === true && $e_editora === true && $e_ISBN === true\n\t\t\t);\t\n\n\t\t\treturn isValid;\n\t\t}\n\n\t}\n\n\tstatic wrongInputsRef(state, ref) {\n\t\t// return the DOM reference from wrong inputs\n\t\tconst obj = {};\n\n\t\tfor(let key in state){\n\t\t\tif(!state[key]){\n\t\t\t\tobj[key] = ref[key];\n\t\t\t}\n\t\t}\n\n\treturn obj;\n\t}\n\n\tstatic resetModalWhenClose($msgBox) {\n\t\tconst $fields = Validator.getAddFields();\n\t\t//take the modal DOM reference and set the event handler to reset that when has been closed\n\t\t$('#formModal').on('hidden.bs.modal', evt => {\n\t\t\t_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearInputs($fields);\n\t\t\t_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeBoxMsg($msgBox, _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messages().default, 'primary');\n\n\t\t\tfor(let key in $fields)\n\t\t\t\t\t$fields[key].style.background = 'transparent';\n\t\t})\n\t}\n\n\tstatic wrongInputsManagement($inputs, $msgBox) {\n\t\t//When a wrong inputs gets a user focus, the red color of that has been removed\n\t\t_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeBoxMsg($msgBox, _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messages().wrongFields, 'danger');\t\t\n\t\t_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeInputColor($inputs);\n\t\tlet wrongInputsCount = Object.keys($inputs).length;\n\n\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('newBookBTN', () => { //removed all events in the inputs \n\t\t\tfor(let key in $inputs) {\n\t\t\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove($inputs[key], attach, 'focus');\n\t\t\t}\n\t\t} , 'click');\t\t\n\n\t\tfor(let key in $inputs) {\n\t\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set($inputs[key], attach, 'focus');\n\t\t}\n\t\t\n\t\tfunction attach(evt) { //remove the red color and reset the box msg when all inputs has been clicked\n\t\t\tevt.target.style.background = 'transparent';\n\t\t\twrongInputsCount--;\n\t\t\tif(wrongInputsCount <= 0) {\n\t\t\t\twrongInputsCount = 0;\n\t\t\t\t_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeBoxMsg($msgBox, _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messages().default, 'primary');\n\t\t\t}\n\t\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(evt.target, attach, 'focus');\n\t\t}\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Validator);\n\n//# sourceURL=webpack:///./src/js/validator.js?");

/***/ })

/******/ });