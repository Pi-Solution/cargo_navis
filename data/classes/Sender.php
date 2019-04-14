<?php
	class Sender extends Database{

		private $stmt;
		private $table_name = "users";
		private $collum_names = array();
		private $collum_values = array();
		private $place_holders;

		public function set_data($table_name, $collum_names, $collum_values){
			$this->table_name = $table_name;
			$this->collum_names = $collum_names;
			$this->collum_values = $collum_values;
		}
		public function prepare_connection(){
			$this->place_holders = implode(',', array_fill(0, count($this->collum_names), '?'));
			$this->collum_names = implode(',', $this->collum_names);
			//print_r($this->collum_names);
		}
		public function opet_connection(){

			$this->set_db_parametars();
			$this->stmt = $this->connect()->prepare("INSERT INTO $this->table_name ($this->collum_names) VALUES ($this->place_holders)");
		}
		public function save_to_db(){

			try{

				$this->stmt->execute($this->collum_values);

			}catch(Exception $e) {

			  	if($e->errorInfo[1] === 1062) return 1062;
			}
			
		}
		function __destruct(){
        	$this->stmt = null;
    	}
	}