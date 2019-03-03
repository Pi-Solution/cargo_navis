//get provajders from user input
function get_user_input2(){
	prov_name = document.getElementsByClassName("prov_input_place");
	prov_price = document.getElementsByClassName("prov_input_place2")
	prov_valuta = document.getElementsByClassName("prov_valuta_select")

	parametars = [];
	var data = new Array();

	if(call_from_form == true){
		var s = server_response[0].length - 1;
		var last_added_job_id = server_response[0][s].id;
		console.log(last_added_job_id)
	}else{
		var last_added_job_id = server_response[0][start_data].id;
	}

	for(let i = 0;  i < prov_name.length; i++){
		if (prov_name[i].value != "") {
			var a = {
				table_name : "provajderi",
				provajeri_name : `${prov_name[i].value}`,
				dogovorena_cijena : `${prov_price[i].value}`,
				valuta_placanja : `${prov_valuta[i].value}`,
				jobs_id : last_added_job_id
			}
			data.push(a);
		}
	}


	parametars[0] = 1;
	parametars[1] = data;
	console.log(data)

	send_data_provajderi();
}
function send_data_provajderi(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 		server_response = this.responseText;
				//console.log(this.responseText);
				if(server_response == 101){
					alert('Sacuvano')
					reset_provajders()
					show_form('add_provajders_form')
					load_data(2)
				}else{
					alert(this.responseText);
				}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}