function current_nalog(){
    document.getElementById("nc-paritet").innerHTML = s_data.nalozi[active_element].paritent
    document.getElementById("nc-bl").innerHTML = s_data.nalozi[active_element].bl2 + "   " + s_data.nalozi[active_element].bl
    document.getElementById("nc-luka_polazak").innerHTML = s_data.nalozi[active_element].luka_polazka
    document.getElementById("nc-datum_polaska").innerHTML = s_data.nalozi[active_element].datum_polaska.split("-").reverse().join(".")
    document.getElementById("nc-luka_dolaska").innerHTML = s_data.nalozi[active_element].luka_dolaska
    document.getElementById("nc-datum_dolaska").innerHTML = s_data.nalozi[active_element].datum_dolaska.split("-").reverse().join(".")
    document.getElementById("nn-container").value = s_data.nalozi[active_element].napomena
}
function current_provajderi(){
    var data = {
        select: {
            collums: 'id_provajdera_po_poslu, id_provajdera, id_naloga, cijena, valuta, ime_partnera',  //deside what collums you want to select
            table_name: "provajderi_po_poslu",			//table name
            join_columm_name: "id_provajdera",
            where_collum_name: 'id_naloga',		//WHERE collum name
            where_operation: 1,				// [1 = '='], [2 = '<'], [3 = '>'], [4 = '<='], [5 = '>=']
            where: s_data.nalozi[active_element].id,				//WHERE collum value
            table_name2: "partneri",         //second table for join
            join_columm_name2: "id_partneri"
        }
    }
    get_provajderi(data);
}
function get_provajderi(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            var server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if(server_response.select.message == 101){
                s_data.provajderi_po_poslu = server_response.select.data
                //console.log(s_data.provajderi_po_poslu)
            }else{
                s_data.provajderi_po_poslu = null;
            }
            outprint_provajderi();
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}
function outprint_provajderi(){
    var table = document.getElementById('provajderi_po_poslu_table');
    table.innerHTML = ""

    if (s_data.provajderi_po_poslu != null) {
        for (let index = 0; index < s_data.provajderi_po_poslu.length; index++) {
            table.innerHTML += `
                <tr class="nc-p-tr">
                    <td class="nc-p-td" width="40%">${s_data.provajderi_po_poslu[index].ime_partnera}</td>
                    <td class="nc-p-td" width="20%">${s_data.provajderi_po_poslu[index].cijena}</td>
                    <td class="nc-p-td" width="20%">${s_data.provajderi_po_poslu[index].valuta}</td>
                    <td class="nc-p-td" width="10%"></td>
                    <td class="nc-p-td" width="10%"></td>
                </tr>
            `
            
        }       
    }
}
function current_kontejneri(){
    var data = {
        select: {
            collums: '*',  //deside what collums you want to select
            table_name: "kontejneri",			//table name
            where_collum_name: 'id_naloga',		//WHERE collum name
            where_operation: 1,				// [1 = '='], [2 = '<'], [3 = '>'], [4 = '<='], [5 = '>=']
            where: s_data.nalozi[active_element].id			//WHERE collum value
            //join_columm_name: "kontejneri",
            //table_name2: "partneri",         //second table for join
            //join_columm_name2: "id_partneri"
        }
    }
    get_kontejreti(data);
}
function get_kontejreti(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            var server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if(server_response.select.message == 101){
                s_data.kontejneri_po_poslu = server_response.select.data
                console.log(s_data)
            }else{
                s_data.kontejneri_po_poslu = null;
            }
            outprint_kontejneri()
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}
function outprint_kontejneri(){
    var table = document.getElementById('table-kontejneri_po_poslu')

    table.innerHTML = ""
    if (s_data.kontejneri_po_poslu != null) {
        for (let index = 0; index < s_data.kontejneri_po_poslu.length; index++) {
            table.innerHTML += `
                <tr class="nc-p-tr">
                    <td class="nc-p-td" width="45%">${s_data.kontejneri_po_poslu[index].broj_kontejnera}</td>
                    <td class="nc-p-td" width="45%">${s_data.kontejneri_po_poslu[index].vrsta_kontejnera}</td>
                    <td class="nc-p-td" width="10%">X</td>
                </tr>
            `    
        }
        document.getElementById("kontejneri_kolicina").innerHTML = s_data.kontejneri_po_poslu.length  
    }else{
        document.getElementById("kontejneri_kolicina").innerHTML = 0;
    }

}