<?php
	/**
	 * 
	 */
	class Insert extends Database{
		private $collum_names = array();
		private $collum_values = array();
		private $table_name;
		private $stmt;

		function __construct($data){
			//prepare data db insert
			$this->table_name = $data['table_name'];
			foreach ($data['data'][0] as $key => $value) {
				//validate data
				if (!isset($key)) {
					die("Error");
				}
				if (empty($key)) {
					die('Error');
				}
				if(preg_match('/[^a-z_\-0-9]/i', $key)){
					die('Error');
				}
				//push to separated arrays
				if ($key != 'table_name') {
					array_push($this->collum_names, $key);
					//array_push($this->collum_values, $value);
				}
			}
		}
		public function prepare_data(){
			//create placeholders
			$place_holders = implode(',', array_fill(0, count($this->collum_names), '?'));
			
			//array to string
			$prepared_collum_names = implode(',', $this->collum_names);
			
			//run query
			$this->set_db_parametars();
			$this->stmt = $this->connect()->prepare("INSERT INTO $this->table_name ($prepared_collum_names) VALUES ($place_holders)");
			return "INSERT INTO $this->table_name ($prepared_collum_names) VALUES ($place_holders)";
		}
		public function set_values($data){
			$this->collum_values = [];
			foreach ($data as $key => $value) {
				array_push($this->collum_values, $value);
			}
		}
		public function insert_data(){
			try{
				$this->stmt->execute($this->collum_values);
			}catch(Exception $e) {
			  	if($e->errorInfo[1] === 1062){
			  		return 1062;
			  	}else{
					return 102;
			  	}
			}
			//echo $this->connect()->lastInsertId();

			if ($this->stmt->rowCount() > 0) {
				return 101;
			}else{
				return 103;
			}
			$stmt = null;
		}		
	}