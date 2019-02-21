<?php
	//include Classes
	include_once 'classes/database/Database.php';
	include_once 'classes/Sender.php';
	include_once 'classes/Receiver.php';

	header("Content-Type: application/json");

	$input = json_decode(stripslashes(file_get_contents("php://input")),true);


	//send to (recive = 0), (send = 1), (update = 2), (delete = 3)
	if ($input[0] == 0) {

		get_data($input);

	}elseif ($input[0] == 1) {
		send_data($input);
	}elseif ($input[0] == 2) {
		temp_send_data($input);
	}elseif ($input[0] == 3){
		delete_data_db($input);
	}
	//-------------------------------//

	#get data from db -------------------------------------> to reciver
	function get_data($input){
		for ($i=0; $i < count($input[1]) ; $i++) { 
			$get_data = new Receiver();
			$get_data->set_collums($input[1][$i]);
			$data_from_db[] = $get_data->get_db_data();
		}
		echo json_encode($data_from_db);
	}
	
	#save data to db --------------------------------------> to sender
	function send_data($input){
		
		//validate values and 
		for ($i=0; $i < count($input[1]); $i++) { 
			//sorting table names and values to two difrent arrays
			foreach ($input[1][$i] as $key => $value) {
				//validate data
				if (!is_array($input[1][$i])){
					die("Nepravilno uneseni podatci");
				}
				if (!isset($input[1][$i])) {
					die("don't do it");
				}
				if (empty($input[1][$i])) {
					die("Molimo unesite podatke");
				}
				if ($key[0] == 'q') {
					if (empty($value)) {
						die('Molimo vas unesite polje:' . $key);
					}
				}
				$table_name[$i][] = $key;
				$table_value[$i][] = $value;
			}
			$send = new Sender();
			$send->set_var($table_name[$i], $table_value[$i]);
		}
		//print_r(count($input[1]));
	}

	#update data to db
	function temp_send_data($input){
		echo "you want to update db";
	}

	#delete data from db
	function delete_data_db($input){
		echo "you want to delete data from db";
	}
