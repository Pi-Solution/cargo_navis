//
var active_element = 0;
//var used to store id of previus stiled div
var table_tr_active = 0;
function outprint_table_data(){
    //get table id
    var table = document.getElementById("table_content");
    //clear table
    table.innerHTML = "";
    //outprint table data
    for (let i = 0; i < s_data.nalozi.length; i++) {
        //set style for first div
        if (i == active_element) {
            table.innerHTML += `
            <tr class="table_tr t-tr_active">
            <td width="10%" class="table_tr_bor_right">${i + 1}</td>
            <td width="45%" class="table_tr_bor_right">${s_data.nalozi[i].ime_partnera}</td>
            <td width="45%">${s_data.nalozi[i].datum_ponude.split("-").reverse().join(".")}</td>
            </tr>
            `  
            onstart_nalozi();
        }else{
            table.innerHTML += `
            <tr class="table_tr">
            <td width="10%" class="table_tr_bor_right">${i + 1}</td>
            <td width="45%" class="table_tr_bor_right">${s_data.nalozi[i].ime_partnera}</td>
            <td width="45%">${s_data.nalozi[i].datum_ponude.split("-").reverse().join(".")}</td>
            </tr>
            ` 
        }
    }
    //add click event to table element
    add_click_event_to_table();
}
function add_click_event_to_table(){
    var table_tr = document.getElementsByClassName("table_tr");
    //add click event to every table element
    for (let i = 0; i < table_tr.length; i++) {
       table_tr[i].addEventListener("click", function(){
           
            change_style_of_active_element(table_tr, i);
       })       
    }
}
//change active 
function change_style_of_active_element(element, index){
    if (index != active_element) {
        element[index].classList.add("t-tr_active");
        element[active_element].classList.remove("t-tr_active");
        active_element = index;     
        
        current_nalog();
        current_provajderi();
        current_kontejneri();
        get_ulazne_fakture();
        get_izlazne_fakture();
    }
}
function onstart_nalozi(){
    current_nalog();
    current_provajderi();
    current_kontejneri();
    get_ulazne_fakture();
    get_izlazne_fakture();
}