<?php 

class Database {

	private $user = 'Isaque';
	private $password = '1234';
	private $dsn = 'mysql:host=localhost;dbname=db_BookList';

	function __construct() {
		try {
			$this->PDO = new PDO($this->dsn, $this->user, $this->password);
		
			$this->PDO->setAttribute(
				PDO::ATTR_DEFAULT_FETCH_MODE,
				PDO::FETCH_ASSOC
			);
			$this->PDO->setAttribute(
				PDO::ATTR_ERRMODE,
				PDO::ERRMODE_EXCEPETION
			);

		}catch (PDOExcepetion $e) {
			$this->PDO = $e->getMessage();
			exit('Ocorreu um erro'. $this->PDO);
		}
	}

	static function getStatusOperation($ok, $statusCode, $message) {
		return array(
			'OK' => $ok,
			'statusCode' => $statusCode,
			'message' => $message
		);
	}

	public function insertRegistry($jsonRegistry) {
		//INSERT one registry 
		$registry = json_decode($jsonRegistry);
		foreach ($registry as $key => $value) {
			$$key = $value;				
		}

		$sql = 'INSERT INTO Livro (id, livro, publicacao, autor, editora, ISBN)
						VALUES (:id, :livro, :publicacao, :autor, :editora, :ISBN)';

		$statement = $this->PDO->prepare($sql);
		$statement->execute([
			'id' => $id,
			'livro' => $livro,
			'publicacao' => $publicacao,	
			'autor' => $autor,
			'editora' => $editora,
			'ISBN' => $ISBN
		]); 	
	}

	public function deleteRegisty($registryId) {
		//DELETE one registry 
		$id = json_decode($registryId)->id;

		$sql = 'DELETE FROM Livro WHERE id = :id';

		$statement = $this->PDO->prepare($sql);
		$statement->execute(['id' => $id]);
	}


	public function updateRegistry($jsonRegistry) {
		// UPDATE one registry
		$registry = json_decode($jsonRegistry);
		foreach ($registry as $key => $value) {
			$$key = $value;	
		}

		$sql = 'UPDATE Livro SET
						livro = :livro,
						publicacao = :publicacao,
						autor = :autor,
						editora = :editora,
						ISBN = :ISBN
						WHERE id = :id';

		$statement = $this->PDO->prepare($sql);
		$statement->execute([
			'id' => $id,
			'livro' => $livro,
			'publicacao' => $publicacao,
			'autor' => $autor,
			'editora' => $editora,
			'ISBN' => $ISBN
		]);							
	}

	public function selectAllRegistry() {
		//SELECT all 
		$sql = 'SELECT id, livro, publicacao, autor, editora, ISBN FROM Liavro';
		
		try {
			$dataResult = $this->PDO->query($sql);
			$data = json_encode($dataResult->fetchAll());
			return $data;	
		}catch(PDOExcepetion $error) {
			// $errorObject = Database::getStatusOperation(false, $error->getCode(), $erros->getMessage()); 
			$teste = $error->getCode();
			echo $teste;
			// print_r($error);
		}
	}

}

$db = new Database();

// print_r($db->selectAllRegistry());

$db->selectAllRegistry();