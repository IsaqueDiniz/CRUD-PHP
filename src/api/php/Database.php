<?php 

class Database {

	private $user = 'Isaque';
	private $password = '1234';

	public $dsn = 'mysql:host=localhost;dbname=db_BookList';

	function __construct() {
		try {
			$this->PDO = new PDO($this->dsn, $this->user, $this->password);
			$this->PDO->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
		}catch (PDOExcepetion $error) {
			$this->PDO = $error->getMessage();
			die();
		}
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

	public function updateRegistry($registry) {
		// UPDATE one registry
	}

	public function selectAllRegistry() {
		//SELECT all 
		$sql = 'SELECT id, livro, publicacao, autor, editora, ISBN FROM Livro';
		$dataResult = $this->PDO->query($sql);
		$data = json_encode($dataResult->fetchAll());
		return $data;	
	}

}

// '{"id":"1234567","livro":"Nome do livro","publicacao":"2019-01-25","autor":"Nome do Autor","editora":"Editora","ISBN":"1234567"}'

$db = new Database();

// $db->insertRegistry('{"id":"4157897","livro":"OutroLivro","publicacao":"2019-01-25","autor":"Nome do Autor","editora":"Editora","ISBN":"1234567"}');

// $result = $db->selectAllRegistry();

$db->deleteRegisty('{"id" : 4157897}');

	// print_r(json_decode($result));