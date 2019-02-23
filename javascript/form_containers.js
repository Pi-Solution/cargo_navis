//get containers from user input
function get_user_input3(){
	var con_id = document.getElementsByClassName("containers_id")
	var con_type = document.getElementsByClassName("select_container_type")

	parametars = [];
	parametars[0] = 1;
	var data = new Array();
	var data2 = new Array();
	var s = server_response[0].length - 1;
	var last_added_job_id = server_response[0][s].id;

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
					show_form('container_form');
					show_form('add_job_form');
					screen_call = true;
					load_data()
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
							<option>20VD</option>
							<option>20HC</option>
							<option>40VD</option>
							<option>40HC</option>
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