<?php 
	
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: text/plain');
	header('Access-Control-Allow-Methdos: GET, POST, PUT, DELETE');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methdos, Authorization, X-Requested-Width');
 	
	switch($_SERVER['REQUEST_METHOD']) {
		case 'GET' :
			// Executes the methods to get the data
			break;
		case 'POST' :
			// Executes the methods to receive data
			break;
		case 'PUT' :
			// Executes the methods to update data
			break;
		case 'DELETE' :
			// Executes the methods to delete the data
		default :
			// Response with 404
			break;
	}

?>