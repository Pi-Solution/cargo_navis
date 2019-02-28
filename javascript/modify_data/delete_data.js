function delete_provaiders(){
	prov_table = document.getElementsByClassName("provajderi_table_button3")

	for(var i = 0; i < prov_table.length; i++){
		prov_table[i].addEventListener("click", function(){
			var prov_db_id = this.getAttribute('data-prov_id');
			//console.log(prov_db_id);

			parametars = [];

			var data = ["provajderi", prov_db_id];
			parametars[0] = 3;
			parametars[1] = data;

			delete_data_db(2);
		});
	}
}
function delete_data_db(s1){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 	//console.log(this.responseText);
    	 	if(this.responseText == 102){	
				alert("deleted")
				load_data(s1);
    	 	}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}