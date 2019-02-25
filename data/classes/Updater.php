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

		public function get_values($s1, $s2, $s3, $s4){
			$this->table_name = $s1;
			$this->name_of_row = $s2;
			$this->value = $s3;
			$this->id = $s4;
			
			$this->save_to_db();
		}
		
		private function save_to_db(){
			$stmt = $this->connect()->query("
						UPDATE " . $this->table_name ." 
						SET ". $this->name_of_row ." = '". $this->value ."' 
						WHERE id=". $this->id .""
			);
			echo "101";
		}
	}