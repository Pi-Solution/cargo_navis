<?php
    include_once 'classes/database/Database.php';
	include_once 'classes/Select.php';
	include_once 'classes/Insert.php';
	include_once 'classes/Update.php';
	include_once 'classes/Delete.php';

	header("Content-Type: application/json");

	$browser_data = json_decode(file_get_contents("php://input"),true);
	//print_r($browser_data);
	//create global array so we can use it later for server response
	$server_response = array();
	
	#check for array keys and decide what to do
	
    //select
    if (array_key_exists('select', $browser_data)) {
		//validate data from browser
			foreach ($browser_data['select'] as $key => $value) {
				if(preg_match('/[^a-z_\-0-9]/i', $value) && preg_match('/[^a-z_\-0-9]/i', $key) ){
					$server_response['select']['message'] = 'Error';
					die();
				}
			}
			//send data to class
			$get_data = new Select($browser_data['select']);
			//prepare data query
			$get_data->set_data();
			//execute query and get results
			$server_response['select']['message'] = $get_data->execute();
			//check results and sent them to browser
			if ($server_response['select']['message'] == 101) {
				$server_response['select']['data'] = $get_data->get_data();
			}
			$server_response['select']['error'] = $get_data->get_error();
		}
    if (array_key_exists('insert', $browser_data)){
		//create new Insert and pass data
		$save_to_db = new Insert($browser_data['insert']);
		$save_to_db->prepare_data();
		for ($i=0; $i < count($browser_data['insert']['data']) ; $i++) {
			$save_to_db->set_values($browser_data['insert']['data'][$i]);
			$db_insert_message = $save_to_db->insert_data();
			$server_response['insert']['messange'] = $db_insert_message;
		}
	}
	if (array_key_exists('update', $browser_data)){
		$update = new Update();
		$update->set_values($browser_data["update"]);
		$server_response["update"]["messange"] = $update->save_to_db();
	}
	echo json_encode($server_response);