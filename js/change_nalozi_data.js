//show div for changing data inside database
function show_change_nalozi_data(){
	x = document.getElementById("change_nalozi_data")
	//x = document.getElementById("form_nalozi")
	if(x.style.display != "block"){
		x.style.display = "block";
	}else {
		x.style.display = "none";
	}
}
//change type of input place
function change_input_type(value){
	console.log(value)
	x = document.getElementById("cnd-change_data_input")
	
	switch (value) {
		case "Paritet":
			g_table_name = "paritet";
			x.innerHTML = `
				<select class="cnd-select" id="cnd-input">
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
				</select>`
			break;

		case "B/L":
			g_table_name = "bl";
			x.innerHTML = `
				<input type="text" name="bl" class="cnd-input_field" id="cnd-input">
				`
			break;

		case "B/L 2":
			g_table_name = "bl2";
			x.innerHTML = `
				<input type="number" name="bl2" class="cnd-input_field" id="cnd-input">
				`
			break;

		case "Luka Polazak":
			g_table_name = "port_from";
			x.innerHTML = `
				<input type="text" name="port_from" class="cnd-input_field" id="cnd-input">
				`
			break;

		case "Luka Dolazak":
			g_table_name = "port_to";
			x.innerHTML = `
				<input type="text" name="port_to" class="cnd-input_field" id="cnd-input">
				`
			break;

		case "Datum Isplovljavanja":
			g_table_name = "port_from_date";
			x.innerHTML = `
				<input type="date" name="port_from_d" class="cnd-input_field" id="cnd-input">
				`
			break;

		case "Datum Uplovljavanja":
			g_table_name = "port_to_date";
			x.innerHTML = `
				<input type="date" name="port_to_d" class="cnd-input_field" id="cnd-input">
				`
			break;
		default:
			// statements_def
			break;
	}
}
function save_changes_to_nalozi(){

	var change_job_data = new Array();
	var change_job_data2 = new Array();
	
	change_job_data[0] = 2;
	change_job_data2[0] = 'jobs';
	change_job_data2[1] = g_table_name;
	change_job_data2[2] = document.getElementById("cnd-input").value
	change_job_data2[3] = current_nalog_id
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
    	 		get_data_controller(0);
    	 		show_change_nalozi_data();
    	 		reset_change_nalozi_data()
    	 	}
		}
	};

	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(s1));
}
function reset_change_nalozi_data(){
	x = document.getElementById("cnd-change_data_input")
	b = document.getElementById("cnd-select")

	g_table_name = "paritet";

	b.value = 'paritet'

	x.innerHTML = `
		<select class="cnd-select" id="cnd-input"
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