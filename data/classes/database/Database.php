<?php
	class Database{
		private $servername;
		private $username;
		private $password;
		private $dbname;
		private $charset;

		protected function set_db_parametars(){
			$this->hostname = 'localhost';
			$this->username = 'root';
			$this->password = '';
			$this->dbname = 'cargo_navis';
			$this->charset = 'utf8mb4';
		}
		protected function connect(){


			$dsn = 'mysql:host=' . $this->servername . ';dbname=' . $this->dbname . ';charset=' . $this->charset;

			$options = [
				PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
				PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
			];
			
			try{
				$pdo = new PDO($dsn, $this->username, $this->password);
				$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $pdo;
			}catch (PDOException $e){
				echo 'connection error' . $e->getMessage;
			}			
		}
	}