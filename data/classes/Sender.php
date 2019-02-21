<?php
	/**
	 * 

	 */
	class Sender extends Database{
		private $collums;
		private $values;
		private $values_as_sting;
		private $table_name;
		private $input_date;
		private $server_response;

		private $g1 = "jebise";
		private $g2 = "jebi se opet";

		public function get_server_response(){
			return $this->server_response;
		}

		public function set_var($s1, $s2){
			
			$this->collums = $s1;
			$this->values = $s2;
			$this->table_name = $s2[0];
			$this->input_date = date('Y-m-d H:i:s');

			$this->prepare_for_db();
		}
		//here we prepare variables so well be able to use them in query
		private function prepare_for_db(){
			//delete first value of array(we don't need it for quey)
			array_shift($this->collums);
			array_shift($this->values);

			//push date to arrays
			array_push($this->collums, "job_date");
			array_push($this->values, $this->input_date);

			//format array to sting(prerer for query)
			$this->collums = implode(',', $this->collums);
			
			//using algoritam to format array to sting becouse we have some var that need to be reconizeble as number or date in query

			for ($i=0; $i < count($this->values); $i++) {
				if (gettype($this->values[$i]) == 'string') {
					$this->values_as_sting = $this->values_as_sting . "'".$this->values[$i]."',";
				}else{
					$this->values_as_sting = $this->values_as_sting . $this->values[$i] . ",";
				}
			}
			$this->values_as_sting = rtrim($this->values_as_sting, ",");

			//run query
			$this->save_to_db();
		}
		private function save_to_db(){
			$stmt = $this->connect()->query("INSERT INTO
				".$this->table_name."(
					".$this->collums."
				)VALUES(
					".$this->values_as_sting."
				)"
			);

			$this->server_response = 101;
			$stmt = null;

		}		
	}
