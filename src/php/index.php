<?php 
	
	switch($_SERVER['REQUEST_METHOD']) {
		case 'GET' :
			echo 'O método é GET';
			break;
		case 'POST' :
			echo 'O método é POST';
			break;
		case 'PUT' :
			echo 'O método é PUT';
			break;
		default :
			echo 'Não é nenhum do métodos pareados';
			break;
	}

?>