function show_partneri(){
    var form = document.getElementById("form_partneri");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "block";
    }
}
function reset_partneri_form(){
    document.getElementById("fp-ime_partnera").value = ""
    document.getElementById("fp-drzava").value = ""
    document.getElementById("fp-grad").value = ""
    document.getElementById("fp-adresa").value = ""
    document.getElementById("fp-broj_telefona").value = ""
    document.getElementById("tip_suradnje").value = "Komitent"
    
}
function save_partneri_form_data(){
    //prepare some data
    var get_tip_suradnje;
    var x = document.getElementById("fp-tip_suradnje").value
    if (x == "Komitent") {
        get_tip_suradnje = 0
    }else if (x == "Provajder") {
        get_tip_suradnje = 1
    }else{
        get_tip_suradnje = 2
    }
    var data = {
        insert:{
            table_name: "partneri",
            data:[
                {
                    ime_partnera: document.getElementById("fp-ime_partnera").value,
                    drzava: document.getElementById("fp-drzava").value,
                    grad: document.getElementById("fp-grad").value,
                    adresa: document.getElementById("fp-adresa").value,
                    broj_telefona: document.getElementById("fp-broj_telefona").value,
                    tip_suradnje:  get_tip_suradnje                   
                }
            ]
        }
    }
    //console.log(data);
    if(document.getElementById("fp-ime_partnera").value.length < 1){
        alert("Molimo vas unesiti ime partnera")
    }else if(document.getElementById("fp-ime_partnera").value.length < 5 && document.getElementById("fp-ime_partnera").value.length > 0){
        alert("Ime partnera mora biti duže od 5 slova")
    }else{
        send_partneri_to_server(data);
    }
}
function send_partneri_to_server(to_server){
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
           // console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if($server_response.insert.messange == 101){
                alert("Sacuvano");
                get_partneri();
                show_partneri();
                reset_partneri_form();
            }
		}
	};
	//send data
	xhttp.open("POST", "../data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}