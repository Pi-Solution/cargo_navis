function show_delete_waning(table_name, table_id, what_to_do){
	x = document.getElementById("warning_delete")


	g_table_name = table_name;
	g_db_id = table_id;
	g_what_to_do = what_to_do;

	//x = document.getElementById("form_nalozi")
	if(x.style.display != "block"){
		x.style.display = "block";
	}else {
		x.style.display = "none";
	}
}
function delete_form_db(){
	var parametars = new Array();

	var data = [g_table_name, g_db_id];
	parametars[0] = 3;
	parametars[1] = data;
	delete_data(parametars);
}
function delete_data(parametars){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 	//console.log(this.responseText);
    	 	if(this.responseText == 102){
				console.log(g_what_to_do)
				if (g_what_to_do == 0) {
					console.log('fuck')
					current_nalog = 0;
					get_data_controller(0);
					on_start()
				}else if (g_what_to_do == 1) {
					get_data_controller(1);
				}else if (g_what_to_do == 2) {
					get_data_controller(2);
				}else if (g_what_to_do == 3) {
					get_data_controller(3);
				}else if (g_what_to_do == 4) {
					get_data_controller(4);
				}
				show_delete_waning('', '', '')
    	 	}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}
