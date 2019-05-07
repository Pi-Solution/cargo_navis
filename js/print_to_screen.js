//run this function on load page
function on_start(){
	setTimeout(function(){
		current_nalog_id = nalozi[current_nalog].id
		change_active_nalog();
		get_data_controller(1);
		get_data_controller(5);
		get_data_controller(2);
		get_data_controller(3);
		get_data_controller(4);	
	}, 80)
}
function ts_nalozi(){
	var div = document.getElementById('nalozi_table')

	div.innerHTML = "";

	for(let i = 0; i < nalozi.length; i++){
		//var date = nalozi[i].job_date.slice(0,-9)
		//date = date.split("-").reverse().join(".");
		var date = nalozi[i].datum_ponude_uneseni.split("-").reverse().join(".");
		div.innerHTML += `
			<tr class="tr_nalozi" id="${i}" data-nalog_id="${nalozi[i].id}">
				<td width="10%">${i+1}</td>
				<td width="45%">${nalozi[i].qkomitent}</td>
				<td width="45%">${date}</td>
			</tr>
		`
		//print active nalog
		if (i == current_nalog) {
			change_active_nalog();
		}
	}
	event_nalozi();
}
function event_nalozi(){
	var div = document.getElementsByClassName("tr_nalozi")
	for(let i = 0; i < div.length; i++){
		div[i].addEventListener('click', function(){
			//console.log(this.getAttribute('data-nalog_id'))
			current_nalog = this.id
			//console.log(current_nalog);
			current_nalog_id = this.getAttribute('data-nalog_id')

			change_active_nalog();
			get_data_controller(1);
			get_data_controller(2);
			get_data_controller(3);
			get_data_controller(4);
		});
	}
}
function change_active_nalog(){
	//change style of active nalog
	change_style_active_nalog();
	//reverse data format
	var date_from = nalozi[current_nalog].port_from_date.split("-").reverse().join(".");
	var date_to = nalozi[current_nalog].port_to_date.split("-").reverse().join(".");
	//output to screen active nalog
	document.getElementById("paritet").innerHTML = nalozi[current_nalog].paritet
	document.getElementById("bl").innerHTML = nalozi[current_nalog].bl + "   " + nalozi[current_nalog].bl2
	document.getElementById("port_from").innerHTML = nalozi[current_nalog].port_from
	document.getElementById("port_from_date").innerHTML = date_from
	document.getElementById("port_to").innerHTML = nalozi[current_nalog].port_to
	document.getElementById("port_to_date").innerHTML = date_to
	document.getElementById("job_note_text").value = nalozi[current_nalog].job_note;
}
//chane color of active element in nalozi
function change_style_active_nalog(){
	divs = document.getElementsByClassName("tr_nalozi")
	//remove style of previus active element
	for(let i = 0; i < divs.length; i++){
		if (divs[i].classList.contains("nalozi_table_content_active") == true) {
			divs[i].classList.remove("nalozi_table_content_active");
		}
	}
	//add style to current active element
	divs[current_nalog].classList.add("nalozi_table_content_active");
}

//print to screen provajders
function ts_provajderi(){
	var div = document.getElementById("provajderi")

	div.innerHTML = " ";

	for(let i = 0; i < provajderi_po_poslu.length; i++){
		var this_provajder_name;
		
		for(let b = 0; b < provajders.length; b++){
			if(provajderi_po_poslu[i].provajder_id == provajders[b].id){
				this_provajder_name = provajders[b].provajder_name
			}
		}

		div.innerHTML += `
			<tr>
				<td width="35%" id="prov_name${i}" class="provajderi_collums" onmousemove="notes_div_position(event);">${this_provajder_name}</td>
				<td width="25%">${provajderi_po_poslu[i].dogovorena_cijena}</td>
				<td width="20%">${provajderi_po_poslu[i].valuta_placanja}</td>
				<td width="10%" class="con3_table_hover" onclick="show_provajderi_notes(${provajderi_po_poslu[i].id}, '${i}')"><img src="images/icons/pen.svg" height="200%;"></td>
				<td width="10%" class="con3_table_hover" onclick="show_delete_waning('provajderi_po_poslu', ${provajderi_po_poslu[i].id}, 1)"><img src="images/icons/delete.svg" height="200%;"></td>
			</tr>
		`
	}

	//add event listeners to provajters table;
	provajder_events();
	
	//provajders.length = 0;
}

//print containers to screen
function ts_containers(){
	div = document.getElementById("containers")
	var some_div = document.getElementById('kolicina_con').innerHTML = containers.length;

	div.innerHTML = " ";

	for(let i = 0; i < containers.length; i++){
		div.innerHTML += `
			<tr>
				<td width="45%">${containers[i].container_id}</td>
				<td width="45%">${containers[i].container_type}</td>
				<td width="10%" class="con3_table_hover" onclick="show_delete_waning('containers', ${containers[i].id}, 2)"><img src="images/icons/delete.svg" height="200%;"></td>
			</tr>
		`
	}

}
// print ulazna faktura to screen
function ts_ulazne_fakture(){
	var div = document.getElementById("ulazne_fakture")
	div.innerHTML = "";

	//we first check if we have any "ulazne fakture"
	if (ulazne_fakture.length == 0) {
		div.style.display = 'none';
	}else {
		div.style.display = 'block';

		for(let i = 0; i < ulazne_fakture.length; i++){
			var date = ulazne_fakture[i].datum_fakture.split("-").reverse().join(".");
			div.innerHTML += `
				<div class="ulaz_fakture">
					<div class="con4_header">
						<div class="fakture_left_arrow" onclick="fakture_arrows(0, false, 0, 'ulaz_fakture')">
							<div class="fakture_header_al"><</div>
						</div>

						<div class="fakture_header_al2">
							<strong>Izlazne Fakture ${i+1}/${ulazne_fakture.length}</strong>
						</div>

						<div class="fakture_rigth_arrow" onclick="fakture_arrows(0, true, 0, 'ulaz_fakture')">
							<div class="fakture_header_al">></div>
						</div>
					</div>
					<div class="con4_con">
						<div class="con4_con_left">
							<div class="con4_con_child" style="top: 0px;">
								<div class="con4_div_al">
									<p>Provajder:</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 16.66%">
								<div class="con4_div_al">
									<p>Broj Fakture:</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 33.32%">
								<div class="con4_div_al">
									<p>Datum Fakture:</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 50%">
								<div class="con4_div_al">
									<p>Valuta Placanja:</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 66.66%">
								<div class="con4_div_al">
									<p>Iznos (Ino Valuta):</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 83.32%">
								<div class="con4_div_al">
									<p>Iznos:</p>
								</div>
							</div>
						</div>
						<div class="con4_con_right">
							<div class="con4_con_child" style="top: 0px;">
								<div class="con4_div_al">
									<p>${ulazne_fakture[i].ulaz_provajder}</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 16.66%">
								<div class="con4_div_al">
									<p>${ulazne_fakture[i].broj_fakture}</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 33.32%">
								<div class="con4_div_al">
									<p>${date}</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 50%">
								<div class="con4_div_al">
									<p>${ulazne_fakture[i].valuta_placanja}</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 66.66%">
								<div class="con4_div_al">
									<p>${ulazne_fakture[i].iznos_s_val} ${ulazne_fakture[i].valuta_placanja}</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 83.32%">
								<div class="con4_div_al">
									<p>${ulazne_fakture[i].iznos} KM</p>
								</div>
							</div>
						</div>
					</div>
					<div class="con4_buttons_div">
						<button class="con4_add_f_but con4_but_hover" onclick="show_form(3);"><strong>DODAJ NOVU FAKTURU</strong></button>
						<button class="con4_add_delete_but con4_but_hover" onclick="show_delete_waning('fakture_ulaz', ${ulazne_fakture[i].id}, 3)"><img src="images/icons/trash_w.svg" width="30%;"></button>
					</div>
				</div>
			`
		}
		ulaz_faktura_arrow = 0;
		all_f_index = [ulaz_faktura_arrow, izlaz_faktura_arrow];
		show_fakture(0, "ulaz_fakture", "ulazne_fakture")
	}
}
function ts_izlazne_fakture(){
	var div = document.getElementById("izlazne_fakture")
	div.innerHTML = "";

	//console.log(izlanze_fakture.length)
	//we first check if we have any "ulazne fakture"
	if (izlanze_fakture.length == 0) {
		div.style.display = 'none';
	}else {
		div.style.display = 'block';

		for(let i = 0; i < izlanze_fakture.length; i++){
			var date = izlanze_fakture[i].datum_fakture.split("-").reverse().join(".");
			div.innerHTML += `
				<div class="izlaz_fakture">
					<div class="con4_header">
						<div class="fakture_left_arrow" onclick="fakture_arrows(1, false, 1, 'izlaz_fakture')">
							<div class="fakture_header_al"><</div>
						</div>

						<div class="fakture_header_al2">
							<strong>Izlazne Fakture ${i+1}/${izlanze_fakture.length}</strong>
						</div>

						<div class="fakture_rigth_arrow" onclick="fakture_arrows(1, true, 1, 'izlaz_fakture')">
							<div class="fakture_header_al">></div>
						</div>
					</div>
					<div class="con4_con">
						<div class="con4_con_left">
							<div class="con4_con_child" style="top: 0px;">
								<div class="con4_div_al">
									<p>Provajder:</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 16.66%">
								<div class="con4_div_al">
									<p>Broj Fakture:</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 33.32%">
								<div class="con4_div_al">
									<p>Datum Fakture:</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 50%">
								<div class="con4_div_al">
									<p>Iznos:</p>
								</div>
							</div>
							
						</div>
						<div class="con4_con_right">
							<div class="con4_con_child" style="top: 0px;">
								<div class="con4_div_al">
									<p>Cargo Navis</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 16.66%">
								<div class="con4_div_al">
									<p>${izlanze_fakture[i].broj_fakture}</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 33.32%">
								<div class="con4_div_al">
									<p>${date}</p>
								</div>
							</div>
							<div class="con4_con_child" style="top: 50%">
								<div class="con4_div_al">
									<p>${izlanze_fakture[i].iznos} KM</p>
								</div>
							</div>
						</div>
					</div>
					<div class="con4_buttons_div">
						<button class="con4_add_f_but con4_but_hover" onclick="show_form(4);"><strong>DODAJ NOVU FAKTURU</strong></button>
						<button class="con4_add_delete_but con4_but_hover" onclick="show_delete_waning('izlazne_fakture', ${izlanze_fakture[i].id}, 4)"><img src="images/icons/trash_w.svg" width="30%;"></button>
					</div>
				</div>
			`
		}
	}
	izlaz_faktura_arrow = 0;
	all_f_index = [ulaz_faktura_arrow, izlaz_faktura_arrow];
	show_fakture(1, "izlaz_fakture", "izlazne_fakture")
}
function show_fakture(s0, s1, s2){
	var main_div = document.getElementById(s2)
	var div = document.getElementsByClassName(s1);

	var all_faktura = [ulazne_fakture, izlanze_fakture];

	if (all_faktura[s0].length > 0) {
		main_div.style.display = "block"
		div[0].style.display = "block";
	}else{
		main_div.style.display = "none"
		div[0].style.display = "none";
	}

}
//we are using this variable to make arrow in facture change which faktura is shown
function fakture_arrows(index, operation, working_array, div_class){
	
	var div = document.getElementsByClassName(div_class)
	var faktura_am = [ulazne_fakture, izlanze_fakture]
	//sub
	if (operation == true) {
		if (all_f_index[index] < faktura_am[working_array].length-1) {
			div[all_f_index[index]].style.display = "none";
			all_f_index[index]++
			div[all_f_index[index]].style.display = "block";
			//console.log(all_f_index[index])
		}
	}else{
		if (all_f_index[index] > 0) {
			div[all_f_index[index]].style.display = "none";
			all_f_index[index]--
			div[all_f_index[index]].style.display = "block";
			//console.log(all_f_index[index])
		}
	}
} 