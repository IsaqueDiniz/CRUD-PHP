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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/book.js */ \"./src/js/book.js\");\n/* harmony import */ var _js_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/listeners.js */ \"./src/js/listeners.js\");\n/* harmony import */ var _js_validator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/validator.js */ \"./src/js/validator.js\");\n/* harmony import */ var _js_utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/utility.js */ \"./src/js/utility.js\");\n\n\n // Book class\n // Listeners\n // Validators\n // Utilities\n\nconst Main = (function() {\n\t// Main scope\n\tconst Books = [];\n\n\t//Listeners\n\t_js_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('newBookBTN', newBook);\n\tconsole.log('Valor alterado');\n\n\t//Functions\n\tfunction newBook(evt) {\n\t\tconst $boxMsg = document.getElementById('messageValidator'); // take the alert box \n\t\tconst $addFields = _js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAddFields(); // take the inputs\n\t\tconst valuesState = _js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getValidsInputs($addFields); // state of the inputs\n\n\n\t\tif(_js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].validateAddInputs(valuesState)) {\n\t\t\tconst values = _js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defineObj($addFields, false);\n\t\t\tconst book = new _js_book_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](values);\n\t\t\t\t\t\tbook.create().attachEditEvent().attachDeleteEvent();\n\t\t\tBooks.push(book);\n\n\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearInputs($addFields);\t\t\n\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeBoxMsg($boxMsg, _js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].messages().addedSuccessful, 'success');\n\n\t\t\tsetTimeout(() => {\n\t\t\t\t$('#formModal').modal('toggle');\n\t\t\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeBoxMsg($boxMsg, _js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].messages().default, 'primary');\n\t\t\t}, 750);\t\n\n\t\t}\telse {\n\t\t\tconst $wrongInputs = _js_validator_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].wrongInputsRef(valuesState, $addFields); // obj with DOM reference from wrong fields\n\t\t\tlet wrongInputsCount = Object.keys($wrongInputs).length; // number of wrong inputs\n\n\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeBoxMsg($boxMsg, _js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].messages().wrongFields, 'danger'); \n\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeInputColor($wrongInputs);\n\n\t\t\tfor(let key in $wrongInputs) {\n\t\t\t\t_js_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set($wrongInputs[key], showWrongInputs, 'focus');\n\t\t\t}\n\n\t\t\tfunction showWrongInputs(evt) {\n\t\t\t\t//Manage the wrong inputs when when clicked remove the red color\n\t\t\t\tevt.target.style.background = 'transparent';\n\t\t\t\twrongInputsCount--;\n\t\t\t\tif(wrongInputsCount <= 0 ) {\n\t\t\t\t\twrongInputsCount = 0;\n\t\t\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeBoxMsg($boxMsg, _js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].messages().default, 'primary');\n\t\t\t\t}\t\t\t\t\n\t\t\t\t_js_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(evt.target, showWrongInputs, 'focus');\n\t\t\t}\n\n\t\t\t$('#formModal').on('hidden.bs.modal', evt => {\n\t\t\t//reset the form when hidden event dispared\n\t\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearInputs($addFields);\n\t\t\t\t_js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].changeBoxMsg($boxMsg, _js_utility_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].messages().default, 'primary');\n\t\t\t\twrongInputsCount = 0;\n\t\t\t\tfor(let key in $addFields)\n\t\t\t\t\t$addFields[key].style.background = 'transparent';\t\t\t\t\t\t\t\t\n\t\t\t});\n\t\t}\n\t}\n\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/book.js":
/*!************************!*\
  !*** ./src/js/book.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.js */ \"./src/js/validator.js\");\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ \"./src/js/listeners.js\");\n\n\n\n\n\nclass Book {\n\n\tconstructor({ livro, publicacao, autor, editora, ISBN }) {\n\t\t// properties for go to database\n\t\tthis.props = {\n\t\t\tid : this.setID(ISBN),\n\t\t\tlivro : livro,\n\t\t\tpublicacao : publicacao,\n\t\t\tautor : autor,\n\t\t\teditora : editora,\n\t\t\tISBN : ISBN \t\t\t\t\t\t\t\t\t\t\n\t\t};\n\t\t//take and set the dom references\n\t\tthis.DOM = {\n\t\t\trowID : this.props.id,\n\t\t\tbuttons : {\n\t\t\t\tedit_btn : `edit_${this.props.livro}`,\n\t\t\t\tdelete_btn : `delete_${this.props.livro}`,\n\t\t\t\tsaveEdit_btn : `'saveEdit_'${this.props.livro}`\n\t\t\t}\n\t\t};\n\t}\n\n\t//Set event to edit method \n\tattachEditEvent() {\n\t\tconst $saveEditBTN = document.getElementById('saveEdit'); \n\t\tconst { id, livro, publicacao, autor, editora, ISBN } = this.props;  // all props from the current obj\n\t\tconst { edit_btn } = this.DOM.buttons;\n\t\tconst { $e_livro, $e_publicacao, $e_autor, $e_editora, $e_ISBN } = _validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getEditFields(); // get the edit fields\n\n\t\t_listeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(edit_btn, evt => {\n\t\t\t_validator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].configureEditModal(this.props);\n\t\t\tconsole.log($saveEditBTN.dataset.book_id);\n\t\t});\n\n\t\treturn this;\n\t}\n\n\t//Set event to delete method\n\tattachDeleteEvent() {\n\t\treturn this;\n\t}\n\n\tcreate() {\n\t\tconst { id, livro, publicacao, autor, editora, ISBN } = this.props;\n\t\t\n\t\tconst { edit_btn, delete_btn } = this.DOM.buttons;\n\t\t\n\t\tconst $parent = document.getElementById('bodyTable');\n\t\tconst $row = document.createElement('tr');\n\t\t\t\t\t$row.id = id;\n\n\n\t\tconst content = `\n\t\t\t<td>${ livro }</td>\n\t\t\t<td>${ publicacao }</td>\n\t\t\t<td>${ autor }</td>\n\t\t\t<td>${ editora }</td>\n\t\t\t<td>${ ISBN }</td>\n\t\t\t<td><button id=\"${ edit_btn }\" class=\"btn btn-sm btn-warning\" data-toggle=\"modal\" data-target=\"#editModal\">Editar</button></td>\n\t\t\t<td><button id=\"${ delete_btn }\" class=\"btn btn-sm btn-danger\">Deletar</button></td>\n\t\t`;\n\n\t\t$row.innerHTML = content;\n\t\t$parent.appendChild($row);\n\n\t\treturn this;\n\t}\n\n\tgetProps() {\n\t\treturn this.props;\n\t}\n\n\tsetID(number) {\n\t\tconst preId = String(Date.now()).split('').reverse().join('').slice(0, 3);\t\t\n\t\tconst id = number + preId;\n\t\treturn id;\n\t}\t\n\n\t\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n//# sourceURL=webpack:///./src/js/book.js?");

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Listeners {\n\n\tstatic set(ref, callback, e) {\n\t\tconst event = e || 'click';\n\n\t\tif(typeof ref === 'string'){\n\t\t\tdocument.getElementById(ref)\n\t\t\t\t.addEventListener(event, callback);\t\t\t\n\t\t}else {\n\t\t\tref.addEventListener(event, callback);\n\t\t}\n\t}\n\n\tstatic remove(ref, callback, e){\n\t\tconst event = e || 'click';\n\n\t\tif(typeof ref == 'string'){\n\t\t\tdocument.getElementById(ref)\n\t\t\t\t.removeEventListener(event, callback);\n\t\t}else{\n\t\t\tref.removeEventListener(event, callback);\n\t\t}\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Listeners);\n\n//# sourceURL=webpack:///./src/js/listeners.js?");

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Utils {\n\n\tstatic messages() { // utilities messages\n\t\treturn {\n\t\t\twrongFields : 'Preencha os campos em vermelho corretamente:',\n\t\t\tokAlert : 'Todos os campos estão corretos!',\n\t\t\taddedSuccessful : 'Adicionado com sucesso',\n\t\t\tdefault : 'Preencha todos os campos abaixo com no mínimo 7 caracteres'\n\t\t}\n\t}\n\n\tstatic changeBoxMsg(boxRef, text, state){\n\t\t//Take a DOM reference of a box, and change de color with 'state' attr, and set a new text;\t\t\n\t\tboxRef.textContent = text;\n\t\tboxRef.classList.remove('alert-success', 'alert-primary', 'alert-warning', 'alert-danger');\n\n\t\tswitch(state) {\n\t\t\tcase 'success':\n\t\t\t\tboxRef.classList.add('alert-success');\n\t\t\tbreak;\n\t\t\tcase 'danger':\n\t\t\t\tboxRef.classList.add('alert-danger');\n\t\t\tbreak;\n\t\t\tcase 'warning':\n\t\t\t\tboxRef.classList.add('alert-warning');\n\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tboxRef.classList.add('alert-primary');\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tstatic clearInputs(refObj) {\n\t\t//take a obj with reference from inputs and reset the fields\n\t\tfor(let key in refObj)\n\t\t\trefObj[key].value = '';\t\t\t\n\t}\n\n\t// static removeWhiteSpaces(_string){\n\t// \twhile ()\n\t// \treturn value\n\t// }\n\n\tstatic changeInputColor(inputsRef, c){\n\t // change de color of the inputs\n\t\tconst color = c || '#FFE1E1'\n\n\t\tfor(let key in inputsRef) {\n\t\t\t\tinputsRef[key].style.background = color;\n\t\t}\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n//# sourceURL=webpack:///./src/js/utility.js?");

/***/ }),

/***/ "./src/js/validator.js":
/*!*****************************!*\
  !*** ./src/js/validator.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Validator {\n\n\tstatic getAddFields() {\n\t // return the fields from new newBook-modal\n\t\treturn {\n\t\t\t\t$a_livro : document.getElementById('nome_livro'),\n\t\t\t\t$a_publicacao : document.getElementById('data_public'),\n\t\t\t\t$a_autor : document.getElementById('nome_autor'),\n\t\t\t\t$a_editora : document.getElementById('nome_editora'),\n\t\t\t\t$a_ISBN : document.getElementById('ISBN')\n\t\t\t}\n\t}\n\n\tstatic getEditFields(){\n\t // return the fields from the edit-modal\n\t\treturn {\n\t\t\t$e_livro : document.getElementById('editLivro'),\n\t\t\t$e_publicacao : document.getElementById('editPublic'),\n\t\t\t$e_autor : document.getElementById('editAutor'),\n\t\t\t$e_editora : document.getElementById('editEditora'),\n\t\t\t$e_ISBN : document.getElementById('editISBN')\n\t\t}\n\t}\n\n\tstatic defineObj(ref, option) {\n\t\tif(option){\t\t\n\t\t\treturn {\n\t\t\t\tlivro : ref.$e_livro.value,\n\t\t\t\tpublicacao : ref.$e_publicacao.value,\n\t\t\t\tautor : ref.$e_autor.value,\n\t\t\t\teditora : ref.$e_editora.value,\n\t\t\t\tISBN : ref.$e_ISBN.value\n\t\t\t}\n\t\t}\n\t\treturn {\n\t\t\tlivro : ref.$a_livro.value,\n\t\t\tpublicacao : ref.$a_publicacao.value,\n\t\t\tautor : ref.$a_autor.value,\n\t\t\teditora : ref.$a_editora.value,\n\t\t\tISBN : ref.$a_ISBN.value\n\t\t}\t\n\t}\n\n\tstatic getValidsInputs(inputs) { \n\t// take the dom references of the inputs and return the state of they, if ok(true), else(false)\n\t\tconst valids = {};\n\n\t\tfor(let key in inputs){\n\t\t\tif(inputs[key].value.length > 6) {\n\t\t\t\tvalids[key] = true\n\t\t\t}else {\n\t\t\t\tvalids[key] = false;\n\t\t\t}\n\t\t}\n\n\treturn valids;\n\t}\n\n\tstatic validateEditInputs({ $e_livro , $e_publicacao, $e_autor, $e_editora, $e_ISBN }) { \n\t\t// return true if all of the fields in the edit modal its ok\n\t\tlet result = false;\n\n\t\tif($e_livro === true && $e_publicacao === true &&\n\t\t\t $e_autor === true && $e_editora === true && $e_ISBN === true)\n\t\t\tresult = true;\n\n\treturn result;\n\t}\t\n\n\tstatic validateAddInputs({ $a_livro , $a_publicacao, $a_autor, $a_editora, $a_ISBN }) { \n\t\t// return true if all of the fields in the add form its ok\n\t\tlet result = false;\n\n\t\tif($a_livro === true && $a_publicacao === true &&\n\t\t\t $a_autor === true && $a_editora === true && $a_ISBN === true)\n\t\t\tresult = true;\n\n\t\treturn result;\n\t}\n\n\tstatic wrongInputsRef(state, ref) {\n\t\t// return the DOM reference from wrong inputs\n\t\tconst obj = {};\n\n\t\tfor(let key in state){\n\t\t\tif(!state[key]){\n\t\t\t\tobj[key] = ref[key];\n\t\t\t}\n\t\t}\n\n\t\treturn obj;\n\t}\n\n\tstatic configureEditModal(props) {\n\t\tconst { $e_livro, $e_publicacao, $e_autor, $e_editora, $e_ISBN } = Validator.getEditFields();\n\n\t\t$e_livro.value = props.livro;\n\t\t$e_publicacao.value = props.publicacao;\n\t\t$e_autor.value = props.autor;\n\t\t$e_editora.value = props.editora;\n\t\t$e_ISBN.value = props.ISBN;\n\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Validator);\n\n//# sourceURL=webpack:///./src/js/validator.js?");

/***/ })

/******/ });