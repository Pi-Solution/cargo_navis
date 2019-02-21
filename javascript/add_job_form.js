//get basic job info
function get_user_input(){
	var new_job = {
		table_name : 'jobs',
		qkomitent : `${document.getElementById("komitent").value}`,
		paritet : `${document.getElementById("paritet_form").value}`,
		bl : `${document.getElementById("bl_form").value}`,
		port_from : `${document.getElementById("port_from_form").value}`,
		port_to : `${document.getElementById("port_to_form").value}`,
		port_from_date : `${document.getElementById("port_from_date_form").value}`,
		port_to_date : `${document.getElementById("port_to_date_form").value}`,
		price_in : `${document.getElementById("neg_price_in").value}`,
		price_out : `${document.getElementById("neg_price_out").value}`,
	}

	data.push(new_job);	

	show_form('form_provajder');
}
//get provajders from user input
function get_user_input2(){
	prov_name = document.getElementsByClassName("prov_input_place");
	prov_price = document.getElementsByClassName("prov_input_place2")

	var s = server_response[0].length - 1;
	var last_added_job_id = server_response[0][s].id;
	console.log(last_added_job_id)

	for(let i = 0;  i < prov_name.length; i++){
		if (prov_name[i].value != "") {
			var a = {
				table_name : "provajderi",
				provajeri_name : `${prov_name[i].value}`,
				dogovorena_cijena : `${prov_price[i].value}`,
				jobs_id : last_added_job_id
			}
			data.push(a);
		}
	}
	show_form('form_provajder');
	show_form('container_form');
}
//get containers from user input
function get_user_input3(){
	var con_id = document.getElementsByClassName("containers_id")
	var con_type = document.getElementsByClassName("select_container_type")
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