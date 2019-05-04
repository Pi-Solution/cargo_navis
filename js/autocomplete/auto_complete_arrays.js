function set_first_array(){
	var prepare_data = new Array();
	for(let i = 0; i < nalozi.length; i++){
		prepare_data.push(nalozi[i].qkomitent);
	}
	ser_val[0] = prepare_data;
}
function set_second_array(){
	var prepare_data = new Array();
	for(let i = 0; i < provajders.length; i++){
		prepare_data.push(provajders[i].provajder_name);
	}
	ser_val[1] = prepare_data;
}