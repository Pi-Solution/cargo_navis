<?php

	/**
	 * 
	 */
	class Updater extends Database
	{
		private $table_name;
		private $name_of_row;
		private $value;
		private $id;
		private $stmt;

		public function get_values($s1, $s2, $s3, $s4){
			$this->table_name = $s1;
			$this->name_of_row = $s2;
			$this->value = $s3;
			$this->id = $s4;
			
			$this->save_to_db();
		}
		
		private function save_to_db(){
			
			$this->set_db_parametars();
			$this->stmt = $this->connect()->prepare("UPDATE $this->table_name SET $this->name_of_row = ? WHERE id = ?");
			$this->stmt->execute([$this->value, $this->id]);

			echo "101";
		}
				function __destruct(){
        	$this->stmt = null;
    	}
	}