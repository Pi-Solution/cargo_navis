<?php
	/**
	 * 
	 */
	class Deleter extends Database {
		private $table_name;
		private $id;
		private $stmt;

		public function get_values($s1, $s2){
			$this->table_name = $s1;
			$this->id = $s2;
		}

		public function delete_from_db(){

			$this->set_db_parametars();
			$this->stmt = $this->connect()->prepare("DELETE FROM $this->table_name WHERE id = ?");
			$this->stmt->execute([$this->id]);
			
			echo "102";
		}
		function __destruct(){
        	$this->stmt = null;
    	}
	}