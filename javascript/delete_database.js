function get_delete(table, id){
	var div = document.getElementById("warning_parent");

	table_name = table
	row_id = id
	
	if (div.style.display != 'block') {
		div.style.display = 'block';
	}else{
		div.style.display = 'none';
	}
}
//delete data from db
function delete_form_db(){
	parametars = [];

	var data = [table_name, row_id];
	parametars[0] = 3;
	parametars[1] = data;
	delete_data();
}
function delete_data(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 	console.log(this.responseText);
    	 	if(this.responseText == 102){	
				get_delete(null, null);
				screen_call = true;	
				load_data();
    	 	}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}