function set_first_array(){
	var prepare_data = new Array();
	for(let i = 0; i < nalozi.length; i++){
		for(let b = 0; b < prepare_data.length; b++){
			var existence = false;
			if (prepare_data[b] == nalozi[i].qkomitent) {
				existence = true;
				break;
			}
		}
		if (existence == false) {
			prepare_data.push(nalozi[i].qkomitent);
		}else{
			existence = false;
		}
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
function set_3_array(){
	var prepare_data = new Array();
	for(let i = 0; i < provajders.length; i++){
		prepare_data.push(provajders[i].provajder_name);
	}
	ser_val[2] = prepare_data;
}