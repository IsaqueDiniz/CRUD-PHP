<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methdos: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methdos, Authorization, X-Requested-Width');


include_once './Database.php';
define('METHOD', $_SERVER['REQUEST_METHOD']);

switch(METHOD) {
	case 'GET' : // Executes the methods to get the data
		getRequest();
		break;
	case 'POST' : // Executes the methods to receive data
		receiveData(METHOD);
		break;
	case 'PUT' : // Executes the methods to update data
		receiveData(METHOD);
		break;
	case 'DELETE' : // Executes the methods to delete the data
		receiveData(METHOD); 
		break;
	default : // Response with 404
		echo 'This route not exists'; 
		http_response_code(404);
		break;
}

function getRequest() {
	//send the json data
	$db = new Database();
	$operationResources = $db->getResources();

	if(!isset($operationResources['error'])) {
		$queryStatus = $operationResources['queryOk']; 
		if($queryStatus) {
			echo $operationResources['data'];
			http_response_code(200);
		}else {
			$error = json_encode($operationResources);
			http_response_code(500);
			echo $error;
		}
	}else {
		$error = json_encode($operationResources);
		echo $error;
		http_response_code(500);
	}
}

function receiveData($method) {
	if(strcasecmp($_SERVER['CONTENT_TYPE'], 'application/json') == 0) {
		$json = file_get_contents("php://input");
		$semiParsedJSON = str_replace("'", "", $json);
		$db = new Database();

		if($method == 'POST'){
			$databaseManipulation = $db->insertRegistry($semiParsedJSON);
			$responseMsg = 'Item has been created';
		}else if($method == 'PUT') {
			$databaseManipulation = $db->updateRegistry($semiParsedJSON);
			$responseMsg = 'Item has been edited';
		}else {
			$databaseManipulation = $db->deleteRegistry($semiParsedJSON);
			$responseMsg = 'Item has been deleted';
		}

		if(!isset($databaseManipulation['error'])) {
			$queryStatus = $databaseManipulation['queryOk'];

			if($queryStatus) {
				echo $responseMsg . $json;
				http_response_code(200);
			}else {
				$error = json_encode($databaseManipulation);
				echo $error;
				http_response_code(500);
			}
		}else {
			$error = json_encode($databaseManipulation);
			echo $error;
			http_response_code(500);
		}

	}else {
		echo 'Wrong Content-Type';
		http_response_code(400);
	}
}