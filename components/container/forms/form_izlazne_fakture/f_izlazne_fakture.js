function show_form_izlazne_fakture(){
    var form = document.getElementById("form_izlazne_fakture");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "block";
    }
}
function reset_form_izlazne_fakture(){

    document.getElementById("fif-broj_izlazne").value = ""
    document.getElementById("fif-datum_fakture").value = ""
    document.getElementById("fif-domaca_valuta").value = ""
}
function save_form_izlazne_fakture(){
    var data = {
       insert: {
            table_name: "izlazne_fakture",
            data: [
                {
                    broj_fakture: document.getElementById("fif-broj_izlazne").value,
                    id_naloga: s_data.nalozi[active_element].id,
                    datum_fakture: document.getElementById("fif-datum_fakture").value,
                    valuta_fakture: document.getElementById("fif-valuta_fakture").value,
                    iznos: document.getElementById("fif-domaca_valuta").value,
                }
            ]
        }
    }
    send_izlazne_fakture_form(data);
}
function send_izlazne_fakture_form(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if($server_response.insert.messange == 101){
                alert("Sačuvano");
                show_form_izlazne_fakture();
                reset_form_izlazne_fakture();
                get_izlazne_fakture();
            }
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}