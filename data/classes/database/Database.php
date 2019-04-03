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
			$this->dbname = 'test2';
			$this->charset = 'utf8mb4';
		}
		protected function connect(){


			$dsn = 'mysql:host=' . $this->servername . ';dbname=' . $this->dbname . ';charset=' . $this->charset;
			
			try{
				$pdo = new PDO($dsn, $this->username, $this->password);
				$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $pdo;
			}catch (PDOException $e){
				echo 'connection error' . $e->getMessage;
			}			
		}
	}