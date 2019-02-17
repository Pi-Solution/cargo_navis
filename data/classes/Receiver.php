<?php
	/**
	 * 
	 */
	class Receiver extends Database{
		
		private $collums;
		private $table_name;

		function set_collums($s){
			$this->collums = $s;
			$this->table_name = $s[0];
			
			$this->prepare_var();
		}
		function prepare_var(){

			array_shift($this->collums);

			$this->collums = implode(',', $this->collums);

		}
		function get_db_data(){
			$stmt = $this->connect()->query("
					SELECT
						".$this->collums."
					FROM 
						".$this->table_name."
					ORDER BY 
						id
					");

			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				$result[] = $row;
			}
			return $result;
		}		
	}