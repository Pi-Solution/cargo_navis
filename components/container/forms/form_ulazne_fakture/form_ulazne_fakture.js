var kurs = 1;
var fufProvajder = "N/A";
function show_form_ulazne_fakture(){
    var form = document.getElementById("form_ulazne_fakture");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "block";
    }
}
function reset_form_ulazne_fakture(){

    fufProvajder = "N/A"
    document.getElementById("fuf-provajder").value = "Izaberi"
    document.getElementById("fuf-broj_ulazne").value = ""
    document.getElementById("fuf-datum_fakture").value = ""
    document.getElementById("fuf-valuta_fakture").value = ""
    document.getElementById("fuf-valuta").value = "KM"
    document.getElementById("fuf-s_val").value = ""
    document.getElementById("fuf-domaca_valuta").value = ""
    fakture_chose_valuta("KM")
}
function fakture_chose_valuta(valuta){
	console.log(valuta);
	if (valuta == "KM") {
		document.getElementById("fuf-kurs").disabled = true; 
		document.getElementById("fuf-kurs").style.background = "skyblue"
		document.getElementById("fuf-s_val").disabled = true; 
		document.getElementById("fuf-s_val").style.background = "skyblue"
		kurs = 1;

	}else if (valuta == "EUR") {
		document.getElementById("fuf-kurs").disabled = true; 
		document.getElementById("fuf-kurs").style.background = "skyblue"
		document.getElementById("fuf-s_val").disabled = false; 
		document.getElementById("fuf-s_val").style.background = "none"
		kurs = 1.95583;
		
	}else if (valuta == "USD") {
		document.getElementById("fuf-kurs").disabled = false; 
		document.getElementById("fuf-kurs").style.background = "none"
		document.getElementById("fuf-s_val").disabled = false; 
        document.getElementById("fuf-s_val").style.background = "none"
        kurs = 1
	}
}
function form_ulazne_fakture_calculate_kurs(direction, value){
	if (direction == true) {
		iznos = value * kurs;
		console.log(iznos)
		document.getElementById("fuf-domaca_valuta").value = iznos.toFixed(2);
	}else{
		iznos = value / kurs;
		console.log(iznos)
		document.getElementById("fuf-s_val").value = iznos.toFixed(2);
	}
}
function dodaj_ulazne_fakture_provajdere(){
    var select = document.getElementById("fuf-provajder");
    select.innerHTML = `
        <option>Izaberi</option>
    `;

    for (let index = 0; index < s_data.partneri.length; index++) {
        if (s_data.partneri[index].tip_suradnje == 1 || s_data.partneri[index].tip_suradnje == 2) {
            select.innerHTML += `
                <option>${s_data.partneri[index].ime_partnera}</option>
            `
        }
        
    }
}
function save_id_provajdera_ulazna_f(){
    //get select id
    var select = document.getElementById("fuf-provajder");
    //get id of ime_partneri and save id to global var
    for (let i = 0; i < s_data.partneri.length; i++) {
        if (select.value == s_data.partneri[i].ime_partnera) {
            fufProvajder = s_data.partneri[i].id_partneri;
            break;
        }else if(select.value == "Izaberi"){
            fufProvajder = "N/A";
            break;
        }
    }
}
function save_form_ulazne_fakture(){
    var data = {
       insert: {
            table_name: "ulazne_fakture",
            data: [
                {
                    id_provajdera: fufProvajder,
                    broj_ulazne_fakture: document.getElementById("fuf-broj_ulazne").value,
                    id_naloga: s_data.nalozi[active_element].id,
                    datum_fakture: document.getElementById("fuf-datum_fakture").value,
                    valuta_fakture: document.getElementById("fuf-valuta_fakture").value,
                    valuta_placanja: document.getElementById("fuf-valuta").value,
                    iznos_strana_valuta: document.getElementById("fuf-s_val").value,
                    iznos_domaca_valuta: document.getElementById("fuf-domaca_valuta").value
                }
            ]
        }
    }
    if (fufProvajder == "N/A") {
        alert("Molimo vas izaberite provajdera!")
    }else{
        console.log(data)
        send_ulazne_fakture_form(data);
    }
}
function send_ulazne_fakture_form(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if($server_response.insert.messange == 101){
                alert("Sačuvano");
                show_form_ulazne_fakture();
                reset_form_ulazne_fakture();
                get_ulazne_fakture();
            }
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}