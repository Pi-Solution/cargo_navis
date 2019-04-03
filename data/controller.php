<?php
	//include Classes
	include_once 'classes/database/Database.php';
	include_once 'classes/Sender.php';
	include_once 'classes/Receiver.php';
	include_once 'classes/Updater.php';
	include_once 'classes/Deleter.php';

	header("Content-Type: application/json");

	$input = json_decode(stripslashes(file_get_contents("php://input")),true);

	//send to (recive = 0), (send = 1), (update = 2), (delete = 3)
	if ($input[0] == 0) {
		get_data($input);
	}elseif ($input[0] == 1) {
		send_data($input);
	}elseif ($input[0] == 2) {
		update_data($input);
	}elseif ($input[0] == 3){
		delete_data_db($input);
	}
	//-------------------------------//

	#get data from db -------------------------------------> to reciver
	function get_data($input){
		for ($i=0; $i < count($input[1]) ; $i++) { 
			$get_data = new Receiver();
			$get_data->set_collums($input[1][$i], $input[2]);
			$data_from_db[] = $get_data->get_db_data();
		}
		echo json_encode($data_from_db);
	}
	
	#save data to db --------------------------------------> to sender
	function send_data($input){
		
		//validate values and 
		for ($i=0; $i < count($input[2]) ; $i++) { 
			
			$collum_name = array();
			$collum_value = array();
			
			foreach ($input[2][$i] as $key => $value) {
				if (!isset($key)) {
					die("Error");
				}
				if (empty($key)) {
					die('Error');
				}
				if(preg_match('/[^a-z_\-0-9]/i', $key)){
					die('Error');
				}

				array_push($collum_name, $key);
				array_push($collum_value, $value);
			}
			//push time collum and value
			array_push($collum_name, 'job_date');
			array_push($collum_value, date("Y-m-d h:i:sa"));

			$save_to_db = new Sender();
			$save_to_db->set_data($input[1], $collum_name, $collum_value);
			$save_to_db->prepare_connection();
			$save_to_db->opet_connection();
			$save_to_db->save_to_db();
		}
	}

	#update data to db
	function update_data($input){
		$update = new Updater();
		$update->get_values($input[1][0], $input[1][1], $input[1][2], $input[1][3]);
	}

	#delete data from db
	function delete_data_db($input){
		$delete = new Deleter();
		$delete->get_values($input[1][0], $input[1][1]);
		$delete->delete_from_db();
	}
