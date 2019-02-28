//get containers from user input
function get_user_input3(){
	var con_id = document.getElementsByClassName("containers_id")
	var con_type = document.getElementsByClassName("select_container_type")

	parametars = [];
	parametars[0] = 1;
	var data = new Array();
	var data2 = new Array();
	if(call_from_form2 == true){
		var s = server_response[0].length - 1;
		var last_added_job_id = server_response[0][s].id;
		console.log(last_added_job_id)
	}else{
		var last_added_job_id = server_response[0][start_data].id;
	}

	for(var i = 0;  i < con_id.length; i++){
		console.log(con_id[i].value)
		test = con_id[i].value.split(/\r?\n/);
		for(var b = 0; b < test.length; b++){
			a = {
				table_name : "containers",
				container_id : test[b],
				container_type : con_type[i].value,
				jobs_id : last_added_job_id
			}
			data.push(a);
		}
	}
	parametars[1] = data;
	console.table(parametars[1])

	send_data_containers()
}
function send_data_containers(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 		server_response = this.responseText;
				//console.log(this.responseText);
				if(server_response == 101){
					alert('Sacuvano')
					load_data(3)
					show_form('add_containers_form')
					reset_all_forms()
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
//this function add another textarea and container type to container form
function add_con_textbox(){
	//we add textbox to this div
	var main_div = document.getElementById("form_container_content")
	

	main_div.innerHTML +=`
	<div class="containers_info" style="top: ${container_textbox_position}%">
				<div class="containers_info_child">	
					<textarea class="containers_id"></textarea>
				</div>
				<div class="container_right">
					<div class="container_header">
						<div class="container_header_child">
							<p>Vrsta Kontejnera</p>
						</div>
					</div>
					<div class="container_type">
						<select id="select_container_type" class="select_container_type">
							<option>20DV</option>
							<option>20HC</option>
							<option>40DV</option>
							<option>40HC</option>
							<option>40PW</option>
							<option>45HC</option>
							<option>45HCPW</option>
							<option>20RF</option>
							<option>20RFHC</option>
							<option>40RF</option>
							<option>40RFHC</option>
							<option>45RF</option>
							<option>40 Flat rack container</option>
							<option>40 High Cube reefer con</option>
							<option>40 High Cube container</option>
							<option>40 Open Top container</option>
							<option>45 High Cube container</option>
							<option>20OT Open Top</option>
							<option>40OT Open Top</option>
							<option>20HT Hard Top</option>
							<option>40HT Hard Top</option>
							<option>20FR Flat Rack</option>
							<option>40FR Flat Rack</option>
							<option>20PF Platform</option>
							<option>40PF Platform</option>
							<option>Bulk Containers</option>
							<option>Vertical Containers</option>
							<option>TANK IMO 0</option>
							<option>TANK IMO 1</option>
							<option>TANK IMO 2</option>
							<option>TANK IMO 5</option>
							<option>SWAP Body TANK</option>
							<option>Food grade TANK</option>
							<option>Reefer TANK</option>
							<option>Gas TANK</option>
							<option>Silo TANK</option>
							<option>Waste skip offshore</option>
							<option>Offshore Basket</option>
							<option>Offshore TANK container</option>
							<option>Mini offshore</option>
							<option>Special offshore</option>
							<option>Offshore galvanized box</option>
							<option>Office containers</option>
							<option>Sanitary Containers</option>
							<option>Carrier</option>
							<option>Termoking</option>
						</select>
					</div>
				</div>
			</div>
	`
	container_textbox_position = container_textbox_position + 31
}
//reset containers form
function reset_containers(){
	container_textbox_position = 1;
	//we add textbox to this div
	var main_div = document.getElementById("form_container_content")

	main_div.innerHTML +=`
	<div class="containers_info" style="top: ${container_textbox_position}%">
		<div class="containers_info_child">	
			<textarea class="containers_id"></textarea>
		</div>
		<div class="container_right">
			<div class="container_header">
				<div class="container_header_child">
					<p>Vrsta Kontejnera</p>
				</div>
			</div>
			<div class="container_type">
				<select id="select_container_type" class="select_container_type">
					<option>20VD</option>
					<option>20HC</option>
					<option>40VD</option>
					<option>40HC</option>
				</select>
			</div>
		</div>
	</div>
	`
	container_textbox_position = 32;
}