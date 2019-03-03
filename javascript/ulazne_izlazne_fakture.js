function ulaz_faktura(){
	var a = {
		table_name : 'fakture_ulaz',
		ulaz_provajder : `${document.getElementById("ulaz_provajder").value}`,
		broj_fakture : `${document.getElementById("broj_fakture_ulaz").value}`,
		datum_fakture :	`${document.getElementById("datum_fakture_ulaz").value}`,
		iznos_s_val : `${document.getElementById("iznos_s_fakture_ulaz").value}`,
		valuta_placanja :`${document.getElementById("valuta_fakture_izlaz").value}`,
		iznos : `${document.getElementById("iznos_domaca_valuta").value}`,
		id_jobs : server_response[0][start_data].id
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
		jobs_id : server_response[0][start_data].id
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
    	 		if (server_response == '101') {
    	 			alert("Sacuvano")
    	 			load_data(0);
    	 			show_form(current_form);
    	 			reset_ulazna_faktura_form()
    	 			reset_izlazna_faktura_form()
    	 		}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}
//caclucal valuta in ulazna faktura
function change_valute(){
	var valuta = document.getElementById("valuta_fakture_izlaz").value
	if (valuta == 'EUR') {
		kurs = 1.95583;
		document.getElementById("ul_f_5").style.display = "none"

	}else if(valuta == 'USD'){
		document.getElementById("ul_f_5").style.display = "block"
		kurs = document.getElementById("kurs").value
	}else{
		kurs = 1;
		if (document.getElementById("ul_f_5").style.display == "block") {
			document.getElementById("ul_f_5").style.display = "none";
		}
	}
	valuta_global = valuta;
	calculate_domaca_valuta(true);
}
function calculate_domaca_valuta(s1){
	console.log(valuta_global)
	if (valuta_global != 'KM'){
		var a = document.getElementById("iznos_s_fakture_ulaz")
		var b = document.getElementById("iznos_domaca_valuta")
		if (s1 == true) {
			var c = b.innerHTML = a.value * kurs
			console.log(a.value * kurs)
			document.getElementById("iznos_domaca_valuta").value = c.toFixed(2);
		}else{
			var c = b.value /kurs
			console.log(b.value / kurs)
			document.getElementById("iznos_s_fakture_ulaz").value = c.toFixed(2);
		}
	}
}