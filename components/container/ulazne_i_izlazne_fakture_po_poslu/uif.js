function get_ulazne_fakture(){
    var data = {
        select: {
            collums: '*',  //deside what collums you want to select
            table_name: "ulazne_fakture",			//table name
            where_collum_name: 'id_naloga',		//WHERE collum name
            where_operation: 1,				// [1 = '='], [2 = '<'], [3 = '>'], [4 = '<='], [5 = '>=']
            where: s_data.nalozi[active_element].id,					//WHERE collum value
            join_columm_name: "id_provajdera",
            table_name2: "partneri",         //second table for join
            join_columm_name2: "id_partneri"
        }
    }
    get_ulazne_fakture_po_poslu(data)
}
function get_ulazne_fakture_po_poslu(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            console.log($server_response);
            if($server_response.select.message == 101){
                s_data.ulazne_fakture = $server_response.select.data;
                printout_ulazne_fakture_po_poslu();
            }else{
                s_data.ulazne_fakture = null;
                printout_ulazne_fakture_po_poslu();
            }
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}
function printout_ulazne_fakture_po_poslu(){
    var container = document.getElementById('uif-ulazne_fakture_container')
    if(s_data.ulazne_fakture == null){
        console.log("radi");
        container.innerHTML = `<button class="uif-ulaz_button uif-ulaz_b" onclick="show_form_ulazne_fakture(1, null);">DODAJ ULAZNU FAKTURU</button>`
    }else{
        var f_class
        container.innerHTML = ""
        for (let index = 0; index < s_data.ulazne_fakture.length; index++) {
            if (index == 0) {
                f_class = "active_faktura"
            }else{
                f_class = "";
            }
            container.innerHTML += `
            <div class="uif-faktura uif-ulaz ${f_class}">
                <div class="uif-faktura_header">
                    <div class="uif-h-align">
                        <p>Ulazne Fakture ${1 + index + "/" + s_data.ulazne_fakture.length}</p>
                    </div>
                    <button class="uif-left_arrow" onclick="change_faktura('uif-ulaz', ${index}, false)"><</button>
                    <button class="uif-right_arrow" onclick="change_faktura('uif-ulaz', ${index}, true)">></button>
                </div>
                <div class="uif-faktura_content">

                    <div class="uif-c-text">
                        <div class="uif-c-text-align">
                            <div class="uif-ct-left">
                               <p>Provajder:</p>
                            </div>
                        <div class="uif-ct-right">${s_data.ulazne_fakture[index].ime_partnera}</div>
                    </div>
                </div>
                
                <div class="uif-c-text uift2">
                    <div class="uif-c-text-align">
                        <div class="uif-ct-left">
                            <p>Broj Fakture:</p>
                        </div>
                        <div class="uif-ct-right">${s_data.ulazne_fakture[index].broj_ulazne_fakture}</div>
                    </div>
                </div>

                <div class="uif-c-text uift3">
                    <div class="uif-c-text-align">
                        <div class="uif-ct-left">
                            <p>Datum Fakture:</p>
                        </div>
                        <div class="uif-ct-right">${s_data.ulazne_fakture[index].datum_fakture}</div>
                    </div>
                </div>
                
                <div class="uif-c-text uift4">
                    <div class="uif-c-text-align">
                        <div class="uif-ct-left">
                            <p>Valuta Fakture:</p>
                        </div>
                        <div class="uif-ct-right">${s_data.ulazne_fakture[index].valuta_fakture}</div>
                    </div>
                </div>

                <div class="uif-c-text uift5">
                    <div class="uif-c-text-align">
                        <div class="uif-ct-left">
                            <p>Iznos (Ino Valuta):</p>
                        </div>
                        <div class="uif-ct-right">${s_data.ulazne_fakture[index].iznos_strana_valuta}</div>
                    </div>
                </div>

                <div class="uif-c-text uift6">
                    <div class="uif-c-text-align">
                        <div class="uif-ct-left">
                            <p>Iznos:</p>
                        </div>
                        <div class="uif-ct-right">${s_data.ulazne_fakture[index].iznos_domaca_valuta}</div>
                    </div>
                </div>

                <div class="uift7">
                    <button class="uift7-buttons uift-hover1" onclick="show_form_ulazne_fakture(1, ${index});">Dodaj Fakturu</button>
                    <button class="uift7-buttons uift7-2 uift-hover2" onclick="show_form_ulazne_fakture(2, ${index});">Izmjeni Fakturu</button>
                    <button class="uift7-buttons uift7-3 uift-hover3" onclick="show_delete_form('ulazne_fakture', ${index})">Obriši Fakturu</button>
                </div>

            </div>
        </div>
            `
        }
    }   
}
function change_faktura(faktura, index, operacija){
    var t_fak = document.getElementsByClassName(faktura);
    console.log(index)
    if (operacija == false){
        if (index > 0) {
            t_fak[index].classList.remove("active_faktura");
            var cur_fak = index - 1;       
            t_fak[cur_fak].classList.add("active_faktura");          
        }
    }else{
        if (index < t_fak.length - 1) {
            t_fak[index].classList.remove("active_faktura");
            var cur_fak = index + 1;
            t_fak[cur_fak].classList.add("active_faktura");           
        }
    }
}
function get_izlazne_fakture(){
    var data = {
        select: {
            collums: '*',  //deside what collums you want to select
            table_name: "izlazne_fakture",			//table name
            where_collum_name: 'id_naloga',		//WHERE collum name
            where_operation: 1,				// [1 = '='], [2 = '<'], [3 = '>'], [4 = '<='], [5 = '>=']
            where: s_data.nalozi[active_element].id,					//WHERE collum value
        }
    }
    get_izlazne_fakture_po_poslu(data)
}
function get_izlazne_fakture_po_poslu(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if($server_response.select.message == 101){
                s_data.izlazne_fakture = $server_response.select.data;
                printout_izlazne_fakture_po_poslu();
            }else{
                s_data.izlazne_fakture = null;
                printout_izlazne_fakture_po_poslu();
            }
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}
function printout_izlazne_fakture_po_poslu(){
    var container = document.getElementById('uif-izlazne_fakture_container')
    if(s_data.izlazne_fakture == null){
        console.log("radi");
        container.innerHTML = `<button class="uif-izlaz_button uif-izlaz_b" onclick="show_form_izlazne_fakture(1, null);">DODAJ IZLAZNU FAKTURU</button>`
    }else{
        var f_class
        container.innerHTML = ""
        //alert(s_data.izlazne_fakture.length);
        for (let index = 0; index < s_data.izlazne_fakture.length; index++) {
            if (index == 0) {
                f_class = "active_faktura"
            }else{
                f_class = "";
            }
            //console.log(s_data.izlazne_fakture[index].broj_fakture)
            container.innerHTML += `
            <div class="uif-faktura uif-izlaz ${f_class}">
                <div class="uif-faktura_header">
                    <div class="uif-h-align">
                        <p>Izlazne Fakture ${1 + index + "/" + s_data.izlazne_fakture.length}</p>
                    </div>
                    <button class="uif-left_arrow" onclick="change_faktura('uif-izlaz', ${index}, false)"><</button>
                    <button class="uif-right_arrow" onclick="change_faktura('uif-izlaz', ${index}, true)">></button>
                </div>
                <div class="uif-faktura_content">
    
                    <div class="uif-c-text">
                        <div class="uif-c-text-align">
                            <div class="uif-ct-left">
                                <p>Provajder:</p>
                            </div>
                            <div class="uif-ct-right">Cargo Navis</div>
                        </div>
                    </div>
                    
                    <div class="uif-c-text uift2">
                        <div class="uif-c-text-align">
                            <div class="uif-ct-left">
                                <p>Broj Fakture:</p>
                            </div>
                            <div class="uif-ct-right">${s_data.izlazne_fakture[index].broj_fakture}</div>
                        </div>
                    </div>
    
                    <div class="uif-c-text uift3">
                        <div class="uif-c-text-align">
                            <div class="uif-ct-left">
                                <p>Datum Fakture:</p>
                            </div>
                            <div class="uif-ct-right">${s_data.izlazne_fakture[index].datum_fakture}</div>
                        </div>
                    </div>
                    
                    <div class="uif-c-text uift4">
                        <div class="uif-c-text-align">
                            <div class="uif-ct-left">
                                <p>Valuta Fakture:</p>
                            </div>
                            <div class="uif-ct-right">${s_data.izlazne_fakture[index].valuta_fakture}</div>
                        </div>
                    </div>
    
                    <div class="uif-c-text uift5">
                        <div class="uif-c-text-align">
                            <div class="uif-ct-left">
                                <p>Iznos:</p>
                            </div>
                            <div class="uif-ct-right">${s_data.izlazne_fakture[index].iznos} ${s_data.izlazne_fakture[index].valuta_placanja}</div>
                        </div>
                    </div>
                    <div class="uif-c-text uift6">
                        <label>CIM</label>
                        <input id="uif-cim" type="checkbox" ${return_bool2(parseInt(s_data.izlazne_fakture[index].cim))}>
                        <label>CMR</label>
                        <input id="uif-cmr" type="checkbox" ${return_bool2(parseInt(s_data.izlazne_fakture[index].cmr))}>
                        <label>ZUT</label>
                        <input id="uif-zut" type="checkbox" ${return_bool2(parseInt(s_data.izlazne_fakture[index].zut))}>
                        <label>CD</label>
                        <input id="uif-cd" type="checkbox" ${return_bool2(parseInt(s_data.izlazne_fakture[index].cd))}>
                    </div>
    
                    <div class="uift7">
                        <button class="uift7-buttons uift-hover1" onclick="show_form_izlazne_fakture(1, ${index})">Dodaj Fakturu</button>
                        <button class="uift7-buttons uift7-2 uift-hover2" onclick="show_form_izlazne_fakture(2, ${index}); iz_f = ${s_data.izlazne_fakture[index].id_izlazne_fakture}">Izmjeni Fakturu</button>
                        <button class="uift7-buttons uift7-3 uift-hover3" onclick="show_delete_form('izlazne_fakture', ${index})"">Obriši Fakturu</button>
                    </div>
                </div>
            </div>
            `

            document.getElementById(`uif-cim`).checked = parseInt(s_data.izlazne_fakture[index].cim)
            document.getElementById(`uif-cmr`).checked = parseInt(s_data.izlazne_fakture[index].cmr)
            document.getElementById(`uif-zut`).checked = parseInt(s_data.izlazne_fakture[index].zut)
            document.getElementById(`uif-cd`).checked = parseInt(s_data.izlazne_fakture[index].cd)
            

        }
    }  
}
function return_bool2(data){
    if(data == 0){
        return "";
    }else{
        return "checked";
    }
}