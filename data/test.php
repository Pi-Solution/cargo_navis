<?php
	include_once 'classes/database/Database.php';
	include_once 'classes/tester.php';
	

	//echo 'sdf';

	$input = ['id','qkomitent','paritet'];
	//print_r($input);
	$get_data = new Receiver2();
	$get_data->set_collums('jobs', $input, 5);
	$data_from_db[] = $get_data->get_db_data();

	print_r($data_from_db);