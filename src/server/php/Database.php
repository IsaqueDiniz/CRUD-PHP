<?php 

final class Database {

	private static $user = 'Isaque';
	private static $password = '1234';
	private static $dsn = 'mysql:host=127.0.0.1;dbname=db_BookList';

	private static function getConnection() { // return a connection with MySql
		try {
			$PDO = new PDO(self::$dsn, self::$user, self::$password);

			$PDO->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
			$PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		}catch(PDOException $error) {
			return array( // error array with information about that
				'error' => true,
				'code' => $error->getCode(),
				'message' => $error->getMessage(),
				'type' => 'Connection Error: [FUNCTION] getConnection'
			);
		}

		return array(
			'error' => false,
			'connection' => $PDO // PDO connection
		);
	}


	public function insertRegistry($encondedRegistry) {
		//INSERT one registry 
		$PDO = Database::getConnection(); // connect

		if($PDO['error'])	return $PDO; // error

		$registry = json_decode($encondedRegistry);
		foreach ($registry as $key => $value) {
			$$key = $value;				
		}

		$connection = $PDO['connection']; // take the PDO object
		$SQL = 'INSERT INTO Livro (id, livro, publicacao, autor, editora, ISBN)
						VALUES (:id, :livro, :publicacao, :autor, :editora, :ISBN)';

		try {
			$statement = $connection->prepare($SQL);
			$statement->execute([
				'id' => $id,
				'livro' => $livro,
				'publicacao' => $publicacao,
				'autor' => $autor,
				'editora' => $editora,
				'ISBN' => $ISBN				
			]);

		}catch(PDOException $error) { // return a error array with information of a fail query
			return array(
				'queryOk' => false,
				'code' => $error->getCode(),
				'message' => $error->getMessage(),
				'type' => 'Query error: INSERT INTO'
			);
		}				

		return array('queryOk' => true);
	}


	public function deleteRegisty($encondedId) {
		//DELETE one registry 
		$PDO = Database::getConnection();

		if($PDO['error']) return $PDO;

		$id = json_decode($encondedId)->id or json_decode($encondedId['id']);

			$connection = $PDO['connection'];
			$SQL = 'DELETE FROM Livro WHERE id = :id';

			try {
				$statement = $connection->prepare($SQL);
				$statement->execute(['id' => $id]); 

			}catch(PDOException $error) { //return a error array with information of a fail query
				return array(
					'queryOk' => false,
					'code' => $error->getCode(),
					'message' => $error->getMessage(),
					'type' => 'Query error: DELETE'
				);
			}

		return array('queryOk' => true);
	}


	public function updateRegistry($jsonRegistry) {
		// UPDATE one registry
		$PDO = Database::getConnection();

		if($PDO['error']) return $PDO;

		$connection = $PDO['connection'];		

		$registry = json_decode($jsonRegistry);
		foreach ($registry as $key => $value) {
			$$key = $value;	
		}

		$SQL = 'UPDATE Livro 
						SET livro = :livro, publicacao = :publicacao, autor = :autor, editora = :editora, ISBN = :ISBN
						WHERE id = :id';

		try {
			$statement = $connection->prepare($SQL);
			$statement->execute([
				'id' => $id,
				'livro' => $livro,
				'publicacao' => $publicacao,
				'autor' => $autor,
				'editora' => $editora,
				'ISBN' => $ISBN	
			]);

		}catch(PDOException $error) { //return a error array with information of a fail query
			return array(
				'queryOk' => false,
				'code' => $error->getCode(),
				'message' => $error->getMessage(),
				'type' => 'Query error: UPDATE'
			);
		}

		return array('queryOk' => true);				
	}


	public function getResources() {
		//SELECT all 
		$PDO = Database::getConnection();

		if($PDO['error']) return $PDO;

		$connection = $PDO['connection'];
		$SQL = 'SELECT id, livro, publicacao, autor, editora, ISBN FROM Livro';
		
		try {
			$dataResult = $connection->query($SQL);
			$data = json_encode($dataResult->fetchAll());

		}catch(PDOException $error) { //return a error array with information of a fail query
		  return array(
				'queryOk' => false,
				'code' => $error->getCode(),
				'message' => $error->getMessage(),
				'type' => 'Query error: SELECT'
			);
		}

		return array('queryOk' => true, 'data' => $data);
	}

}
?>