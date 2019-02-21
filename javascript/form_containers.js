//get containers from user input
function get_user_input3(){
	var con_id = document.getElementsByClassName("containers_id")
	var con_type = document.getElementsByClassName("select_container_type")

	for(let i = 0;  i < con_id.length; i++){
		console.log(con_id[i].value)
		test = con_id[i].value.split(/\r?\n/);
	}
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