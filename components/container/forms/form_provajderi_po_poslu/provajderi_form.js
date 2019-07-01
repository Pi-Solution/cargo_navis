pfProvajder = "N/A";
//determenate will form inster or update
var prov_u_or_ins = 0;
var prov_cur_prov = "N/A";
function show_provajderi_form(wtd, index){
    var form = document.getElementById("provajderi_form");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "block";
    }
    if (wtd == 1) {
        prov_u_or_ins = 1;
        prov_cur_prov = s_data.provajderi_po_poslu[index].id_provajdera_po_poslu;
        document.getElementById("pf-provajder").value = s_data.provajderi_po_poslu[index].ime_partnera;
        document.getElementById("np-cijena").value = s_data.provajderi_po_poslu[index].cijena;
        document.getElementById("np-valuta").value = s_data.provajderi_po_poslu[index].valuta;
    }else{
        prov_u_or_ins = 0;
        prov_cur_prov = "N/A";
    }
}
function reset_provajderi_form(){
    document.getElementById("pf-provajder").value = "Izaberi"
    document.getElementById("np-cijena").value = ""
    document.getElementById("np-valuta").value = "KM"
}
function dodaj_provajdere(){
    var select = document.getElementById("pf-provajder");
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
function save_id_provajdera(){
    //get select id
    var select = document.getElementById("pf-provajder");
    //get id of ime_partneri and save id to global var
    for (let i = 0; i < s_data.partneri.length; i++) {
        if (select.value == s_data.partneri[i].ime_partnera) {
            pfProvajder = s_data.partneri[i].id_partneri;
            break;
        }else if(select.value == "Izaberi"){
            pfProvajder = "N/A";
            break;
        }
    }
}
function save_provajderi_po_poslu(){
    if (prov_u_or_ins == 0) {
        var data = {
           insert: {
                table_name: "provajderi_po_poslu",
                data: [
                    {
                        id_provajdera: pfProvajder,
                        id_naloga: s_data.nalozi[active_element].id,
                        cijena: document.getElementById("np-cijena").value,
                        valuta: document.getElementById("np-valuta").value
                    }
                ]
            }
        }  
    }else if(prov_u_or_ins == 1) {
        var data = {
            update: {
                table_name: "provajderi_po_poslu",
                collums:{
                    id_provajdera: pfProvajder,
                    cijena: document.getElementById("np-cijena").value,
                    valuta: document.getElementById("np-valuta").value
                },
                index: {
                    index_name: "id_provajdera_po_poslu",
                    index_value: prov_cur_prov
                }
            }
        }
    }
    console.log(data);
    if (pfProvajder != "N/A") {
        send_to_db_provajeri_po_poslu(data);
    }else{
        alert("Molimo vas izaberite provajdera")
    }
}
function send_to_db_provajeri_po_poslu(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
                //call function from get_data.js from global variables - get latest saved data
                alert("Sačuvano");
                show_provajderi_form();
                reset_provajderi_form();
                pfProvajder = "N/A";
                current_provajderi();
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}