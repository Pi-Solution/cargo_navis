<?php
	/**
	 * 
	 */
	class Receiver extends Database{
		
		private $stmt;
		private $table_name;
		private $collum_name;
		private $id;
		
		public function set_data($table_name, $collum_name, $id){
			$this->table_name = $table_name;
			if ($collum_name != false) {
				$this->collum_name = "WHERE " . $collum_name . "?";
				$this->id = $id;
			}
		}
		public function set_data2($table_name, $collum_name, $id){
			$this->table_name = $table_name;
			if ($collum_name != false) {
				$this->collum_name = "WHERE " . $collum_name . "= ?";
				$this->id = $id;
			}
		}

		public function select_from_db(){
			$this->set_db_parametars();
			$this->stmt = $this->connect()->prepare("SELECT * FROM $this->table_name $this->collum_name");
			$this->stmt->execute([$this->id]);
			$arr = $this->stmt->fetchAll(PDO::FETCH_ASSOC);

			return $arr;
		}
		function __destruct(){
        	$this->stmt = null;
    	}		
	}