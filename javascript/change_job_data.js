function get_data_change_data(s1){
	switch (s1) {
		case "Paritet":
			table_name = 'paritet'
			tds("select");
			break;
		case "BL":
			table_name = 'bl'
			tds('text');
			break;
		case "BL text":
			table_name = 'bl2'
			tds('text');
			break;
		case "Luka Polazak":
			table_name = 'port_from'
			tds('text');
			break;
		case "Datum Isplovljavanja":
			table_name = 'port_from_date'
			tds('date');
			break;
		case "Luka Dolaska":
			table_name = 'port_to'
			tds('text');
			break;
		case "Datum Uplovljavanja":
			table_name = 'port_to_date'
			tds('date');
			break;
		default:
			alert('error contact sistem administrator')
			break;
	}
}
function tds(s1){
	var a = document.getElementById("change_data_form_window")
	if (s1 == 'text') {
		a.innerHTML = `
			<input type="text" name="change_data_input" id="cd_input" class="cd_input_text">
		`
	}else if (s1 == 'date') {
		a.innerHTML = `
			<input type="date" name="change_data_input" id="cd_input" class="cd_input_text">
		`
	}else if (s1 == 'select') {
		a.innerHTML = `
			<select name="change_data_input" id="cd_input" class="cd_input_text">
				<option>DAP</option>
				<option>FOB</option>
				<option>CIF</option>
				<option>CFR</option>
				<option>FAS</option>
				<option>EXW</option>
				<option>FCA</option>
				<option>CPI</option>
				<option>CIP</option>
				<option>DAT</option>
				<option>DDP</option>
				<option>drum</option>	
			</select>
		`
	}
}
function update_job(){
	var change_job_data = new Array();
	var change_job_data2 = new Array();
	change_job_data[0] = 2;
	change_job_data2[0] = 'jobs';
	change_job_data2[1] = table_name;
	change_job_data2[2] = document.getElementById("cd_input").value
	change_job_data2[3] = server_response[0][start_data].id
	change_job_data[1] = change_job_data2;
	console.log(change_job_data)
	se2(change_job_data)
}
function se2(s1){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 	//alert(this.responseText)
    	 	if(this.responseText == 101){
    	 	screen_call = true;
    	 	load_data(1);	
    	 	alert("sacuvano")
    	 	reset_form_change_data();
    	 	}
		}
	};

	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(s1));
}
function reset_form_change_data(){
	var a =	document.getElementById("change_data_select")
	var b = document.getElementById("change_data_form_window")
	a.value = "Paritet"
	table_name = 'paritet'
	tds("select");
	show_form('change_data');
}