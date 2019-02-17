//parametars
var parametars = new Array();
//data that goes in parametars
data = [];
//server response
var server_response;
//variable that
var start_data = 0;
// id of current clicked job
var current_job_id;
//
var current_factura = [0, 0];
//variable is use to deretmenate what form do we need to close in function send_data2 line 255
var current_form;
//get data on page load
function load_data(){
	var controller = 0;
	var values1 = ['jobs','*'];
	var values2 = ['provajderi','*'];
	var values3 = ['containers', '*'];
	var values4 = ['fakture_ulaz', '*'];
	var values5 = ['izlazne_fakture', '*'];

	var all_values = [values1,values2,values3,values4,values5];

	parametars = [];

	parametars.push(controller,all_values);

	//alert(JSON.stringify(parametars));
	send_data();
}
//get and send data from server
function send_data(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 		server_response = JSON.parse(this.responseText);
    	 		load_to_screen();
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}
//load all to screen
function load_to_screen(){
	var table = document.getElementById('main_table_container_child');

	table.innerHTML = '';

	for(var i = 0; i < server_response[0].length; i++){

		table.innerHTML += `
			<tr id='${i}' class="table_rows">
				<td width="15%" id=id${i} class="j_id">${server_response[0][i].id}</td>
				<td width="40%">${server_response[0][i].qkomitent}</td>
				<td width="40%">${server_response[0][i].job_date}</td>
			</tr>
		`
		v = document.getElementsByClassName("j_id")
		current_job_id = v[0].innerHTML;
	}
	add_event_table();
}
//add data to main table
function add_event_table(){
	var table = document.getElementsByClassName("table_rows")
	table[start_data].style.backgroundColor = '#dddddd';
	change_content();

	for(var i = 0; i < table.length; i++){
		table[i].addEventListener("click", function(){
			
			//change color of clicked div
			for(var b = 0; b < table.length; b++){
				table[b].style.backgroundColor = 'white'
			}
			table[this.id].style.backgroundColor = '#dddddd';

			start_data = this.id;

			//restart counter;
			current_factura.length = 0;

			current_factura = [0,0];
			//get job id
			current_job_id = document.getElementById(`id${start_data}`).innerHTML

  			change_content();
		});
	}
}
function change_content(){
	document.getElementById("paritet").innerHTML = server_response[0][start_data].paritet;
	document.getElementById("bl").innerHTML = server_response[0][start_data].bl;
	document.getElementById("port_from").innerHTML = server_response[0][start_data].port_from;
	document.getElementById("port_from_date").innerHTML = server_response[0][start_data].port_from_date;
	document.getElementById("port_to").innerHTML = server_response[0][start_data].port_to;
	document.getElementById("port_to_date").innerHTML = server_response[0][start_data].port_to_date;
	output_provajders();
}
function output_provajders(){
	
	provajderi_con = document.getElementById("con_child_provajder_table_child");

	provajderi_con.innerHTML = '';

	for(var i = 0; i < server_response[1].length; i++){
		if (server_response[1][i].jobs_id == server_response[0][start_data].id) {
			provajderi_con.innerHTML += `
				<tr>
					<td style="width: 45%">${server_response[1][i].provajeri_name}</td>
					<td style="width: 45%">${server_response[1][i].dogovorena_cijena}</td>
					<td style="width: 10%" class="provajderi_table_button">?</td>
				</tr>
			`
		}
	}
	output_containers();
}
function output_containers(){

	container_con = document.getElementById("container_table_content_child");

	container_con.innerHTML = '';

	var con_counter = 0;

	for(var i = 0; i < server_response[2].length; i++){
		if (server_response[2][i].jobs_id == server_response[0][start_data].id) {
			container_con.innerHTML +=`
				<tr>
					<td>${server_response[2][i].container_id}</td>
					<td>${server_response[2][i].container_type}</td>
				</tr>
			`
			con_counter++;
		}
	}

	//document.getElementById("con_amount").innerHTML = con_counter;

	print_ulazne_fakture();
	print_izlazne_faktura();

}
function print_ulazne_fakture(){
	//provera dali ima faktura za ovaj odredjeni posao
	var container = document.getElementById("in_f");
	var counter = 0
	var numb_of_fak = 0;

	for(let i = 0; i < server_response[3].length; i++){
		if (server_response[3][i].id_jobs == server_response[0][start_data].id) {
			numb_of_fak++;
		}
	}

	container.innerHTML = "";

	for(let i = 0; i < server_response[3].length; i++){
		if (server_response[3][i].id_jobs == server_response[0][start_data].id) {
			counter++
			container.innerHTML += `
				<div class="in_f1" id="">
						<div class="in_out_header">
							<button class="in_f_left" onclick="arrow_in_fakture(false, 'in_f1', 0);"><</button>
							<button class="in_f_right" onclick="arrow_in_fakture(true, 'in_f1', 0)">></button>
							<div class="in_out_header_child">
								<h3 style="text-align: center;">Ulaz Faktura ${counter}/${numb_of_fak}</h3>
							</div>
						</div>
						<div class="in_out_content_child">
							<p style="float: left;">Broj Fakture:</p>
							<p style="float: right;">${server_response[3][i].broj_fakture}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Datum Fakture:</p>
							<p style="float: right;">${server_response[3][i].datum_fakture}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Valuta Placanja:</p>
							<p style="float: right;">${server_response[3][i].valuta_placanja}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Iznos (EUR/USD):</p>
							<p style="float: right;">${server_response[3][i].iznos_s_val}</p>
							<div style="clear:both;"></div>

							<p style="float: left;">Iznos (KM):</p>
							<p style="float: right;">${server_response[3][i].iznos}</p>

							<button class="fakture_button" onclick="show_form('ulaz_fartura_forma');">DODAJ NOVU FAKTURU</button>
						</div>
					</div>
			`
			show_in_fakture("in_f1");
		}
	}
	if (counter == 0) {
		container.innerHTML = `
		<button id="in_f_button" onclick="show_form('ulaz_fartura_forma');">
			<strong>DODAJ ULAZNU FAKTURU</strong>
		</button>
		`
	}
}
function show_in_fakture(div_id){
	var fakture = document.getElementsByClassName(div_id);
	fakture[0].style.display = 'block';
}
function print_izlazne_faktura(){
	//provera dali ima faktura za ovaj odredjeni posao
	var container = document.getElementById("out_f");
	var counter = 0
	var numb_of_fak = 0;

	for(let i = 0; i < server_response[4].length; i++){
		if (server_response[4][i].jobs_id == server_response[0][start_data].id) {
			numb_of_fak++;
		}
	}

	container.innerHTML = "";

	for(let i = 0; i < server_response[4].length; i++){
		if (server_response[4][i].jobs_id == server_response[0][start_data].id) {
			counter++
			container.innerHTML += `
				<div class="out_f1">
					<div class="in_out_header">
						<button class="in_f_left" onclick="arrow_in_fakture(false, 'out_f1', 1);"><</button>
						<button class="in_f_right" onclick="arrow_in_fakture(true, 'out_f1', 1)">></button>
						<div class="in_out_header_child">
							<h3 style="text-align: center;">Izlaz Fakture ${counter}/${numb_of_fak}</h3>
						</div>
					</div>
					<div class="in_out_content_child">
						<p style="float: left;">Broj Fakture:</p>
						<p style="float: right;">${server_response[4][i].broj_fakture}</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Datum Fakture:</p>
						<p style="float: right;">${server_response[4][i].datum_fakture}</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Iznos (KM):</p>
						<p style="float: right;">${server_response[4][i].iznos}</p>
						<div style="clear:both;"></div>

						<p style="float: left;">RUC(KM):</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">RUC(%):</p>
						<p style="float: right;">n/a</p>

						<button class="fakture_button" onclick="show_form('izlazna_fartura_forma');">DODAJ NOVU FAKTURU</button>
					</div>
				</div>
			`
			show_in_fakture("out_f1");
		}
	}
	if (counter == 0) {
		container.innerHTML = `
		<button id="out_f_button" onclick="show_form('izlazna_fartura_forma');">
			<strong>DODAJ IZLAZNU FAKTURU</strong>
		</button>
		`
	}
}
function arrow_in_fakture(s, div_id, b){
	var fakture = document.getElementsByClassName(div_id);
	if (s == false) {
		if (current_factura[b] > 0) {
			fakture[current_factura[b]].style.display = 'none';
			current_factura[b] = current_factura[b] - 1;
			fakture[current_factura[b]].style.display = 'block';		
		}
	}else{
		if (current_factura[b] < fakture.length - 1) {
			fakture[current_factura[b]].style.display = 'none';
			current_factura[b] = current_factura[b] + 1;
			fakture[current_factura[b]].style.display = 'block'
		}
	}
}
//---------------------forms--------------------//
function show_form(form_id){
	var div = document.getElementById(`${form_id}`);
	
	if (div.style.display != 'block') {
		div.style.display = 'block';
	}else{
		div.style.display = 'none';
	}

}

//forms data sender
function send_form_data(){
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
	parametars = [];
	parametars = [1]
	parametars[1] = [new_job];

	current_form = 'add_job_form';
	send_data2();

}
function ulaz_faktura(){
	var a = {
		table_name : 'fakture_ulaz',
		broj_fakture : `${document.getElementById("broj_fakture_ulaz").value}`,
		datum_fakture :	`${document.getElementById("datum_fakture_ulaz").value}`,
		iznos_s_val : `${document.getElementById("iznos_s_fakture_ulaz").value}`,
		valuta_placanja :`${document.getElementById("valuta_fakture_izlaz").value}`,
		iznos : `${document.getElementById("iznos_domaca_valuta").value}`,
		id_jobs : current_job_id
	}
	parametars = [];
	parametars[0] = 1;
	data1 = [a];
	parametars.push(data1);

	current_form = 'ulaz_fartura_forma';

	send_data2();
}
function izlaz_fakture(){
	var a = {
		table_name : 'izlazne_fakture',
		broj_fakture : `${document.getElementById("broj_fakture_izlaz1").value}`,
		datum_fakture : `${document.getElementById("datum_fakture_izlaz").value}`,
		iznos : `${document.getElementById("iznos_izlaz").value}`,
		jobs_id : current_job_id,
	}
	
	parametars = [];
	parametars[0] = 1;
	data1 = [a];
	parametars.push(data1);

	current_form = 'izlazna_fartura_forma';

	send_data2()
}
function send_data2(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 		server_response = this.responseText;
    	 		alert(server_response);
    	 		if (server_response == 'Sacuvano') {
    	 			load_data();
    	 			show_form(current_form);
    	 		}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}