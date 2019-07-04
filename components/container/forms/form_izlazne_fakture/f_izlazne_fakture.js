var iz_f = null;
//update or insert to db
var ins_or_upd = null;
function show_form_izlazne_fakture(update_or_delete, index){
    var form = document.getElementById("form_izlazne_fakture");
    if(form.style.display == "block"){
        form.style.display = "none";
        ins_or_upd = null;
    }else{
        form.style.display = "block";
        ins_or_upd = update_or_delete;
    }
    if (update_or_delete == 2) {
        console.log(s_data.izlazne_fakture[index].datum_fakture);
        document.getElementById("fif-broj_izlazne").value = s_data.izlazne_fakture[index].broj_fakture
        document.getElementById("fif-datum_fakture").value = s_data.izlazne_fakture[index].datum_fakture
        document.getElementById("fif-valuta_fakture").value = s_data.izlazne_fakture[index].valuta_fakture
        document.getElementById("fif-domaca_valuta").value = s_data.izlazne_fakture[index].iznos
    }
}
function reset_form_izlazne_fakture(){

    document.getElementById("fif-broj_izlazne").value = ""
    document.getElementById("fif-datum_fakture").value = ""
    document.getElementById("fif-valuta_fakture").value = ""
    document.getElementById("fif-domaca_valuta").value = ""
}

function save_form_izlazne_fakture(){
    console.log(ins_or_upd);
    if (ins_or_upd == 1) {
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
                        valuta_placanja: document.getElementById("fif-koja_valuta").value,
                        cim: document.getElementById("fif-cim").checked,
                        cmr: document.getElementById("fif-cmr").checked,
                        zut: document.getElementById("fif-zut").checked,
                        cd: document.getElementById("fif-cd").checked,
                    }
                ]
            }
        }    
    }else if (ins_or_upd == 2) {
        var data = {
            update: {
                table_name: "izlazne_fakture",
                collums:{
                    broj_fakture: document.getElementById("fif-broj_izlazne").value,
                    id_naloga: s_data.nalozi[active_element].id,
                    datum_fakture: document.getElementById("fif-datum_fakture").value,
                    valuta_fakture: document.getElementById("fif-valuta_fakture").value,
                    iznos: document.getElementById("fif-domaca_valuta").value,
                    valuta_placanja: document.getElementById("fif-koja_valuta").value,
                    cim: document.getElementById("fif-cim").checked,
                    cmr: document.getElementById("fif-cmr").checked,
                    zut: document.getElementById("fif-zut").checked,
                    cd: document.getElementById("fif-cd").checked,
                },
                index: {
                    index_name: "id_izlazne_fakture",
                    index_value: iz_f
                }
            }
        }
    }
    console.log(data)
    send_izlazne_fakture_form(data);
    iz_f = null;
}
function send_izlazne_fakture_form(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            alert("Sačuvano");
            show_form_izlazne_fakture();
            reset_form_izlazne_fakture();
            get_izlazne_fakture();
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}