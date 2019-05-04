<?php
	//include Classes
	include_once 'classes/database/Database.php';
	include_once 'classes/Sender.php';
	include_once 'classes/Receiver.php';
	include_once 'classes/Updater.php';
	include_once 'classes/Deleter.php';

	header("Content-Type: application/json");

	//$input = json_decode(stripslashes(file_get_contents("php://input")),true);

	$input = json_decode(file_get_contents("php://input"),true);

	//input[0] controll what database should do
		#input[0]: (0 = select), (1 = send), (2 = update), (3 = delete)
	//input[1] setup for table names and controll for way data will be stored to database
		#input[1][0]: (0 = single table(for standard queries) 1 = (for many to many));
		#input[1][1]: (table name);
	//input[2]: array of data that we send to db

	if ($input[0] == 0) {
		get_data($input);
	}elseif ($input[0] == 1) {
		//print_r($input);
		send_data($input);
	}elseif ($input[0] == 2) {
		update_data($input);
	}elseif ($input[0] == 3){
		delete_data_db($input);
	}
	//-------------------------------//

	#get data from db -------------------------------------> to reciver
	function get_data($input){
		if(preg_match('/[^a-z_\-0-9]/i', $input[1]) && preg_match('/[^a-z_\-0-9]/i', $input[3]) ){
			echo "$input[2]";
			die('Error');
		}
		$get_from_db = new Receiver();
		$get_from_db->set_data($input[1], $input[3], $input[4]);
		$result = $get_from_db->select_from_db();

		echo json_encode($result);
	}
	
	#save data to db --------------------------------------> to sender
	function send_data($input){

		$get_id;

		for ($i=0; $i < count($input[2]); $i++) { 

			$db_table = $input[2][$i][0];

			for ($b=0; $b < count($input[2][$i][1]) ; $b++) { 

				$collum_name = array();
				$collum_value = array();

				foreach ($input[2][$i][1][$b] as $key => $value) {
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

				if ($input[1] == 0) {				

					$save_to_db = new Sender();
					$save_to_db->set_data($input[2][$i][0], $collum_name, $collum_value);
					$save_to_db->prepare_connection();
					$save_to_db->opet_connection();
					$save_to_db->save_to_db();

				}elseif ($input[1] == 1) {
					if ($i == 0) {
						$save_to_db = new Sender();
						$save_to_db->set_data($input[2][$i][0], $collum_name, $collum_value);
						$save_to_db->prepare_connection();
						$save_to_db->opet_connection();
						$save_to_db->save_to_db();


						$get_data = new Receiver();
						$get_data->set_data2($input[2][$i][0], $collum_name[0], $collum_value[0]);
						$get_db_data = $get_data->select_from_db();

						$prepare_id = $get_db_data[0];
						$get_id = $prepare_id['id'];
						//print_r($input);

					}else{

						$collum_value[0] = $get_id;					

						$save_to_db = new Sender();
						$save_to_db->set_data($input[2][$i][0], $collum_name, $collum_value);
						$save_to_db->prepare_connection();
						$save_to_db->opet_connection();
						$save_to_db->save_to_db();
					}
				}
			}
		}
		echo "101";
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
			$res = $delete->delete_from_db();
			echo $res;
	}
