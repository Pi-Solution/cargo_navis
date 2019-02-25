<?php
	/**
	 * 
	 */
	class Deleter extends Database {
		private $table_name;
		private $id;

		public function get_values($s1, $s2){
			$this->table_name = $s1;
			$this->id = $s2;
		}

		public function delete_from_db(){
			$stmt = $this->connect()->query("
					DELETE FROM ". $this->table_name ." 
					WHERE id =". $this->id ."
					LIMIT 1
				"
			);
			echo "102";
		}
	}