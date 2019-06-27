<?php
	/**
	 * 
	 */
	class Update extends Database
	{
        private $table_name;
        private $collums;
        private $collum_values = array();

        private $index;
        private $index_value;
		private $stmt;

        public function set_values($data){
            //print_r($data);
            $this->table_name = $data["table_name"];
            //if this var is zero no bracket bafore key
            $first = 0;
            foreach ($data["collums"] as $key => $value) {
                if ($first == 0) {
                    $this->collums = $key . " = ? ";
                    $first++;
                }else{
                    //array_push($this->collums, $key);
                    $this->collums = $this->collums . ", " . $key . " = ? ";
                }        
                array_push($this->collum_values, $value);
            }
            $this->index = $data["index"]["index_name"];
            $this->index_value = $data["index"]["index_value"];        
            //echo $this->collums;
        }
		
		public function save_to_db(){
            //echo "UPDATE $this->table_name SET $this->collums WHERE $this->index = $this->index_value";
			
			$this->set_db_parametars();
            $this->stmt = $this->connect()->prepare("UPDATE $this->table_name SET $this->collums WHERE $this->index = $this->index_value");
            //$this->stmt = $this->connect()->prepare("UPDATE $this->table_name SET $this->name_of_row = ? WHERE id = ?");
			$this->stmt->execute($this->collum_values);

            //echo $this->stmt->rowCount();

            if ($this->stmt->rowCount() < 0) {
                return "101";
            }else{
                return "102";
            }
		}
		function __destruct(){
        	$this->stmt = null;
    	}
	}