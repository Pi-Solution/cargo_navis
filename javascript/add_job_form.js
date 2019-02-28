//get basic job info
function get_user_input(){

	//reset parametars and data
	parametars = [];

	var new_job = {
		table_name : 'jobs',
		qkomitent : `${document.getElementById("komitent").value}`,
		paritet : `${document.getElementById("paritet_form").value}`,
		bl : `${document.getElementById("bl_form").value}`,
		bl2 : `${document.getElementById("bl_form2").value}`,
		port_from : `${document.getElementById("port_from_form").value}`,
		port_to : `${document.getElementById("port_to_form").value}`,
		port_from_date : `${document.getElementById("port_from_date_form").value}`,
		port_to_date : `${document.getElementById("port_to_date_form").value}`
	}

	var data = new Array();

	data.push(new_job);

	//prepare for db
	parametars[0] = 1;
	parametars[1] = data;	

	send_data_job()
}

function send_data_job(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 		server_response = this.responseText;
				//console.log(this.responseText);
				if(server_response == 101){
					alert('Sacuvano')
					call_from_form = true;
					show_form('form_provajder');
					load_data(false)
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