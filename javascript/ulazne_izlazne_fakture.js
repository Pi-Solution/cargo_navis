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
    	 		alert(server_response2);
    	 		if (server_response2 == 'Sacuvano') {
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