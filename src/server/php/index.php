<?php 
	
header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
header('Access-Control-Allow-Methdos: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methdos, Authorization, X-Requested-Width');
 	

include_once './Database.php';
define('METHOD', $_SERVER['REQUEST_METHOD']);

switch(METHOD) {
	case 'GET' : // Executes the methods to get the data
		// echo $db->selectAllRegistry()['data'];
		GET();
		break;
	case 'POST' : // Executes the methods to receive data
		POST();
		break;
	case 'PUT' : // Executes the methods to update data
		PUT();
		break;
	case 'DELETE' : // Executes the methods to delete the data
		DELETE(); 
		break;
	default : // Response with 404
		echo 'This route not exists'; 
		http_response_code(404);
		break;
}

function GET() {
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


function POST() {

}


function PUT() {
	echo 'PUT';
}


function DELETE() {
	//DELETE one registry
  if(strcasecmp($_SERVER['CONTENT_TYPE'], 'application/json') == 0) {
  	$json = file_get_contents("php://input");
  	$semiParsedJSON = str_replace("'", "", $json);
	  $db = new Database();
	 	$deleteOperation = $db->deleteRegistry($semiParsedJSON); 	 

	 	if(!isset($deleteOperation['error'])) {
	 		$queryStatus = $deleteOperation['queryOk'];
	 		if($queryStatus) {
	 			echo 'Item has been removed: ' . $json;
	 			http_response_code(200);
	 		}else {
	 			$error = json_encode($deleteOperation);
	 			echo $error;
	 			http_respnse_code(500);
	 		}
	 	}else {
	 		$error = json_encode($deleteOperation);
	 		echo $error;
	 		http_response_code(500);
	 	}
  }else {
  	echo 'Wrong Content-Type';
  	http_response_code(400);
  }
}

?>