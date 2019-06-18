<?php

	class Select extends Database{
		private $data;
		private $server_data;
		private $error_hendler;
		
		function __construct($data){
			$this->data = $data;
		}
		public function set_data(){
			$table = $this->data['table_name'];
			$select = $this->data['collums'];
			//check should we use WHERE or not
			if (array_key_exists('where', $this->data)) {
				$operation;
				switch ($this->data['where_operation']) {
					case 1:
						$operation = '=';
						break;
					case 2:
						$operation = '<';
						break;
					case 3:
						$operation = '>';
						break;
					case 4:
						$operation = '<=';
						break;
					case 5:
						$operation = '>=';
						break;
					default:
						# code...
						break;
				}
				$where = "WHERE " . $this->data['where_collum_name'] . "=". $this->data['where'];
			}else{
				$where = "";
			}
			if (array_key_exists("table_name2", $this->data)) {
				$left_join = 
				" LEFT JOIN " 
				. $this->data['table_name2'] 
				. " ON " 
				. $this->data["table_name2"] . "." . $this->data["join_columm_name2"] . "=" . $this->data["table_name"] . "." . $this->data["join_columm_name"];
				//echo $left_join;
			}else{
				$left_join= "";
			}
			$this->error_hendler = "SELECT $select FROM $table $left_join $where";
			$this->set_db_parametars();
			$this->stmt = $this->connect()->prepare("SELECT $select FROM $table $left_join $where");
			//$this->stmt = $this->connect()->prepare("SELECT * FROM poslovi LEFT JOIN partneri ON partneri.id_partneri = poslovi.id_partneri");
		}
		public function get_error(){
			return $this->error_hendler;
		}
		public function execute(){
		
			$this->stmt->execute();
			$arr = $this->stmt->fetchAll(PDO::FETCH_ASSOC);

			if (count($arr) > 0) {
				$this->server_data = $arr;
				return 101;
			}else{
				return 102;
			}
		}
		public function get_data(){
			return $this->server_data;
			$this->stmt = null;
		}
	}