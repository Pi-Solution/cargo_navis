function get_data_controller(controller){
	switch (controller) {
		case 0:
			get_data('jobs', false)
			break;
        case 5:
            get_data('provajderi', false)
            break;
		case 1:
			var db_var = "jobs_id = "
			get_data('provajderi_po_poslu', db_var)
			break;
		case 2:
			var db_var = "jobs_id = "
			get_data('containers', db_var)
			break;
		case 3:
			var db_var = "id_jobs = "
			get_data('fakture_ulaz', db_var)
			break;
		case 4:
			var db_var = "jobs_id = "
			get_data('izlazne_fakture' ,db_var)
			break;
	}
}
function get_data(table_name, where_fun){

	var parametars = new Array();
	parametars[0] = 0;
	parametars[1] = table_name;
	parametars[2] = 0;
	parametars[3] = where_fun;
	parametars[4] = current_nalog_id;
	//console.log(parametars);	

	run_ajax(parametars, table_name)
}
function run_ajax(parametars, table_name){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 		//console.log(this.responseText);
    	 		//console.log(JSON.parse(this.responseText))
    	 		switch (table_name) {
    	 			case 'jobs':
    	 				if (JSON.parse(this.responseText) != "110") {
    	 					var prep_var = JSON.parse(this.responseText);
	    	 				nalozi = prep_var;
	    	 				ts_nalozi();
                            set_first_array();
    	 				}else{
    	 					nalozi.length = 0;
    	 					ts_nalozi();
    	 				}
    	 				break;
    	 			case 'provajderi_po_poslu':
    	 				if (JSON.parse(this.responseText) != "110") {
    	 					var prep_var = JSON.parse(this.responseText);
	    	 				provajderi_po_poslu = prep_var;
                            get_data_controller(5);
                            setTimeout(set_second_array(), 200);
                            setTimeout(set_3_array(), 200);
    	 				}else{
    	 					provajderi_po_poslu.length = 0;
                            get_data_controller(5);
                            setTimeout(set_second_array(), 200);
                            setTimeout(set_3_array(), 200);
    	 				}
                        case 'provajderi':
                        if (JSON.parse(this.responseText) != "110") {
                            var prep_var = JSON.parse(this.responseText);
                            provajders = prep_var;
                            ts_provajderi();
                        }else{
                            provajders.length = 0;
                            ts_provajderi();
                        }
    	 				break;
    	 			case 'containers':
    	 				if (JSON.parse(this.responseText) != "110") {
    	 					var prep_var = JSON.parse(this.responseText);
	    	 				containers = prep_var;
	    	 				ts_containers();
    	 				}else{
    	 					containers.length = 0;
    	 					ts_containers();
    	 				}
    	 				break;
    	 			case 'fakture_ulaz':
    	 				if (JSON.parse(this.responseText) != "110") {
    	 					var prep_var = JSON.parse(this.responseText);
	    	 				ulazne_fakture = prep_var;
	    	 				ts_ulazne_fakture();
    	 				}else{
    	 					ulazne_fakture.length = 0;
    	 					ts_ulazne_fakture();
    	 				}
    	 				break;
    	 			case 'izlazne_fakture':
    	 				if (JSON.parse(this.responseText) != "110") {
    	 					var prep_var = JSON.parse(this.responseText);
    	 					izlanze_fakture = prep_var;
    	 					ts_izlazne_fakture();
    	 				}else{
    	 					izlanze_fakture.length = 0;
    	 					ts_izlazne_fakture();
    	 				}
    	 				break;
    	 					
    	 		}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}