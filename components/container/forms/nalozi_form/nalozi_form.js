//variable used insede save_id_partnera
var nfKomitent = "N/A";

function show_nalozi_form(){
    var form = document.getElementById("nalozi_form");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "block";
    }
}
//reset nalozi form
function reset_nalozi_form(){
    document.getElementById("nf-komitenti").value = "Izaberi"
    document.getElementById("nf-paritet").value = "DAP"
    document.getElementById("nf-bl").value = ""
    document.getElementById("nf-bl2").value = ""
    document.getElementById("nf-luka_polaska").value = ""
    document.getElementById("nf-luka_dolaska").value = ""
    document.getElementById("nf-datum_polaska").value = ""
    document.getElementById("nf-datum_dolaska").value = ""
    document.getElementById("nf-datum_ponude").value = ""
}
//function used to add kometents to seletc tag inside html "nalozi_form"
function dodaj_komitente(){
    var select = document.getElementById("nf-komitenti");
    select.innerHTML = `
        <option>Izaberi</option>
    `;
    //console.log(s_data.partneri.length);
    for (let index = 0; index < s_data.partneri.length; index++) {
        if (s_data.partneri[index].tip_suradnje == 0 || s_data.partneri[index].tip_suradnje == 2) {
            select.innerHTML += `
                <option>${s_data.partneri[index].ime_partnera}</option>
            `
        }
        
    }
}
//save id_partneri to nfKomitent var so we can use it in show_nalozi_form()
function save_id_partnera(){
    //get select id
    var select = document.getElementById("nf-komitenti");
    //get id of ime_partneri and save id to global var
    for (let i = 0; i < s_data.partneri.length; i++) {
        if (select.value == s_data.partneri[i].ime_partnera) {
            nfKomitent = s_data.partneri[i].id_partneri;
            break;
        }else if(select.value == "Izaberi"){
            nfKomitent = "N/A";
            break;
        }
    }
}
function save_nalog_to_db(){
    var data = {
        insert:{
            table_name: "poslovi",
            data: [
                {
                    id_partneri: nfKomitent,
                    paritent: document.getElementById("nf-paritet").value,
                    bl: document.getElementById("nf-bl").value,
                    bl2: document.getElementById("nf-bl2").value,
                    luka_polazka: document.getElementById("nf-luka_polaska").value,
                    luka_dolaska: document.getElementById("nf-luka_dolaska").value,
                    datum_polaska: document.getElementById("nf-datum_polaska").value,
                    datum_dolaska: document.getElementById("nf-datum_dolaska").value,
                    datum_ponude: document.getElementById("nf-datum_ponude").value,
                }
            ]
        }
    }
    //console.log(data)
    if (nfKomitent != "N/A") {
        save_nalog_to_db_aj(data);
    }else{
        alert("Molimo vas izaberite Komitenta");
    }
}
function save_nalog_to_db_aj(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if($server_response.insert.messange == 101){
                //call function from get_data.js from global variables - get latest saved data
                alert("Sačuvano");
                set_select_database_par();
                show_nalozi_form();
                reset_nalozi_form();
            }
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}