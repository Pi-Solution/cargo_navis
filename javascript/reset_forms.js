//this file contains all function uset to reset felds insed forms


function reset_jobs(){
	document.getElementById("komitent").value = ""
	document.getElementById("paritet_form").value = ""
	document.getElementById("bl_form").value = ""
	document.getElementById("bl_form2").value = ""
	document.getElementById("port_from_form").value = ""
	document.getElementById("port_to_form").value = ""
	document.getElementById("port_from_date_form").value = ""
	document.getElementById("port_to_date_form").value = ""
}
function reset_provajders(){
	prov_name = document.getElementsByClassName("prov_input_place");
	prov_price = document.getElementsByClassName("prov_input_place2");

	for(let i = 0; i < prov_name.length; i++){
		prov_name[i].value = "";
		prov_price[i].value = "";
	}
}
function reset_containers(){
	//we add textbox to this div
	var main_div = document.getElementById("form_container_content")
	

	main_div.innerHTML =`
	<div class="containers_info" style="top:0px">
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
}
//reset all forms inside job form 
function reset_all_forms(){
	reset_jobs()
	reset_provajders()
	reset_containers()
}

function reset_ulazna_faktura_form(){
	document.getElementById("broj_fakture_ulaz").value = "";
	document.getElementById("datum_fakture_ulaz").value = "";
	document.getElementById("iznos_s_fakture_ulaz").value = "";
	document.getElementById("valuta_fakture_izlaz").value = "";
	document.getElementById("iznos_domaca_valuta").value = "";
}
function reset_izlazna_faktura_form(){
	document.getElementById("broj_fakture_izlaz1").value = "";
	document.getElementById("datum_fakture_izlaz").value = "";
	document.getElementById("iznos_izlaz").value = "";
}