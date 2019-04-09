function show_form(i){
	x = document.getElementsByClassName("universal_form_div")
	//x = document.getElementById("form_nalozi")
	if(x[i].style.display != "block"){
		x[i].style.display = "block";
	}else {
		x[i].style.display = "none";
	}
}
function nalozi_form(){
	var nalozi_form = {
		qkomitent : `${document.getElementById("nalozi_komitent").value}`,
		paritet : `${document.getElementById("nalozi_paritet").value}`,
		bl : `${document.getElementById("nalozi_bl").value}`,
		bl2 : `${document.getElementById("nalozi_bl2").value}`,
		port_from : `${document.getElementById("nalozi_luka_p").value}`,
		port_from_date : `${document.getElementById("nalozi_luka_p_d").value}`,
		port_to : `${document.getElementById("nalozi_luka_d").value}`,
		port_to_date : `${document.getElementById("nalozi_luka_d_d").value}`
	}
	var data = new Array();
	data.push(nalozi_form);

	var to_server = new Array();
	to_server[0] = 1;
	to_server[1] = "jobs";
	to_server[2] = data;

	console.log(to_server);

	send_data_nalozi(to_server);
}
function send_data_nalozi(to_server){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText)
			if(this.responseText == 101){
				alert("sacuvano")
				show_form(0);
				get_data_controller(0)
				//on_start();
				reset_naloz_form()
			}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}
function reset_naloz_form(){
	document.getElementById("nalozi_komitent").value = ""
	document.getElementById("nalozi_paritet").value = ""
	document.getElementById("nalozi_bl").value = ""
	document.getElementById("nalozi_bl2").value = ""
	document.getElementById("nalozi_luka_p").value = ""
	document.getElementById("nalozi_luka_p_d").value = ""
	document.getElementById("nalozi_luka_d").value = ""
	document.getElementById("nalozi_luka_d_d").value = ""
}
function save_provajders(){
	var name = document.getElementsByClassName("form_provajder_name");
	var price = document.getElementsByClassName("form_provajder_price");
	var valuta = document.getElementsByClassName("form_provajder_valuta");
	var data = new Array();
	var ser_val = new Array();

	for(let i = 0; i < name.length; i++){
		if (name[i].value != "") {
			a = {
				provajeri_name : `${name[i].value}`,
				dogovorena_cijena : `${price[i].value}`,
				valuta_placanja : `${valuta[i].value}`,
				jobs_id : current_nalog_id
			}
			data.push(a);
		}
	}
	ser_val[0] = 1;
	ser_val[1] = "provajderi";
	ser_val[2] = data;
	console.log(ser_val);

	send_provajders_data(ser_val);
}
function send_provajders_data(to_server){

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText)
			if(this.responseText == 101){
				alert("sacuvano")
				show_form(1);
				get_data_controller(1);

			}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}
function reset_provajder_form(){
	var name = document.getElementsByClassName("form_provajder_name");
	var price = document.getElementsByClassName("form_provajder_price");
	var valuta = document.getElementsByClassName("form_provajder_valuta");
	for(let i = 0; i < name.length; i++){
		name[i].value = ""
		price[i].value = ""
		valuta[i].value = ""
	}
}
function add_container_div(){
	var div = document.getElementById("lines_parent")
	container_div_position = container_div_position + 31;
	console.log("hello")

	div.innerHTML += `
		<div class="lines_containers" style="top: ${container_div_position}%">
			<textarea class="form_container_text"></textarea>
			<select class="form_container_type">
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
	`
}
function save_container(){
	var div = document.getElementsByClassName("lines_containers");
	var text_b = document.getElementsByClassName("form_container_text");
	var div_type = document.getElementsByClassName("form_container_type");
	var data = new Array();

	for(let i = 0; i < div.length; i++){
		var con_ar = text_b[i].value.split(/\r?\n/);
		if (text_b[i].value != "") {
			for(let b = 0; b < con_ar.length; b++){
				var a = {
					container_id : `${con_ar[b]}`,
					container_type : `${div_type[i].value}`,
					jobs_id : current_nalog_id
				}
				data.push(a);
			}
		}	
	}

	var ser_val = new Array();

	ser_val[0] = 1;
	ser_val[1] = "containers";
	ser_val[2] = data;

	//console.log(ser_val);

	send_containers_data(ser_val);
}
function send_containers_data(to_server){

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText)
			if(this.responseText == 101){
				alert("sacuvano")
				get_data_controller(2);	
				show_form(2);
				reset_container_form();
			}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}
function reset_container_form(){
	var div = document.getElementById("lines_parent")
	container_div_position = 1;	
	
	div.innerHTML = `
		<div class="lines_containers" style="top: 1%">
			<textarea class="form_container_text"></textarea>
			<select class="form_container_type">
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
	`
}
//ulazne fakture blanking inputs for caclulator
function fakture_chose_valuta(valuta){
	console.log(valuta);
	if (valuta == "KM") {
		document.getElementById("uf_kurs").disabled = true; 
		document.getElementById("uf_kurs").style.background = "gray"
		document.getElementById("uf_s_val").disabled = true; 
		document.getElementById("uf_s_val").style.background = "gray"
		kurs = 1;

	}else if (valuta == "EUR") {
		document.getElementById("uf_kurs").disabled = true; 
		document.getElementById("uf_kurs").style.background = "gray"
		document.getElementById("uf_s_val").disabled = false; 
		document.getElementById("uf_s_val").style.background = "none"
		kurs = 1.95583;
		
	}else if (valuta == "USD") {
		document.getElementById("uf_kurs").disabled = false; 
		document.getElementById("uf_kurs").style.background = "none"
		document.getElementById("uf_s_val").disabled = false; 
		document.getElementById("uf_s_val").style.background = "none"
	}
}
function ul_f_calculator(direction, value){
	if (direction == true) {
		iznos = value * kurs;
		console.log(iznos)
		document.getElementById("uf_domaca_valuta").value = iznos.toFixed(2);
	}else{
		iznos = value / kurs;
		console.log(iznos)
		document.getElementById("uf_s_val").value = iznos.toFixed(2);
	}
}
function change_kurs(value){
	kurs = value;
	document.getElementById("uf_domaca_valuta").value = ""
	document.getElementById("uf_s_val").value = "";
}

function reset_ul_faktura(){
	document.getElementById("form_ul_provajder").value = "";
	document.getElementById("ul_f_broj_fakture").value = "";
	document.getElementById("ul_f_f_datum").value = "";
	document.getElementById("uf_s_val").value = "";
	document.getElementById("uf_domaca_valuta").value = ""
}
//sacuvaj ulazne fakture u bazu
function save_ul_faktura(){
	
	var data = new Array();
	var ser_val = new Array();

	var a = {
		ulaz_provajder : `${document.getElementById("form_ul_provajder").value}`,
		broj_fakture : `${document.getElementById("ul_f_broj_fakture").value}`,
		datum_fakture : `${document.getElementById("ul_f_f_datum").value}`,
		valuta_placanja : `${document.getElementById("form_ulf_valuta").value}`,
		iznos_s_val : `${document.getElementById("uf_s_val").value}`,
		iznos : `${document.getElementById("uf_domaca_valuta").value}`,
		id_jobs : current_nalog_id
	}

	data.push(a)
	ser_val[0] = 1;
	ser_val[1] = "fakture_ulaz";
	ser_val[2] = data
	//console.log(ser_val);
	send_ulazne_f_data(ser_val);
}
function send_ulazne_f_data(to_server){

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText)
			if(this.responseText == 101){
				alert("sacuvano")
				show_form(3);
				get_data_controller(3);
				reset_ul_faktura()
			}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}
//sacuvaj izlazne fakture u bazu
function save_iz_faktura(){
	
	var data = new Array();
	var ser_val = new Array();

	var a = {
		broj_fakture : `${document.getElementById("broj_iz_fakture_form").value}`,
		datum_fakture : `${document.getElementById("datum_iz_f").value}`,
		iznos : `${document.getElementById("iznos_iz_f_form").value}`,
		jobs_id : current_nalog_id
	}

	data.push(a)
	ser_val[0] = 1;
	ser_val[1] = "izlazne_fakture";
	ser_val[2] = data
	console.log(ser_val);
	send_izlazne_f_data(ser_val);
}
function send_izlazne_f_data(to_server){

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText)
			if(this.responseText == 101){
				alert("sacuvano")
				show_form(4);
				get_data_controller(4);
				reset_izlazne_fakture()
			}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}
function reset_izlazne_fakture(){
	document.getElementById("broj_iz_fakture_form").value = ""
	document.getElementById("datum_iz_f").value = ""
	document.getElementById("iznos_iz_f_form").value = ""
}