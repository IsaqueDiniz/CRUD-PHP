<?php 

class Database {

	private $user = 'Isaque';
	private $password = '1234';

	public $dsn = 'mysql:host=localhost;dbname=db_BookList';

	function __construct() {
		try {
			$this->PDO = new PDO($this->dsn, $this->user, $this->password);
			// $this->query = $this->PDO->query;
		}catch (PDOExcepetion $error) {
			$this->PDO = $error->getMessage();
			die();
		}
	}

	public function insertRegistry($registry) {
		//INSERT one registry 
	}

	public function deleteRegisty($registryId) {
		//DELETE one registry 
	}

	public function updateRegistry($registry) {
		// UPDATE one registry
	}

	public function selectAllRegistry() {
		//SELECT one registry
		$sql = 'SELECT id, livro, publicacao, autor, editora, ISBN FROM Livro';
		$dataResult = $this->PDO->query($sql);

		$data = json_encode($dataResult->fetchAll(PDO::FETCH_ASSOC));

		return $data;	
	}

}