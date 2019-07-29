var data_for_delete;
function show_delete_form(table, index){
    var form = document.getElementById("warning_delete");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "block";
    }
    prepare_data(table, index)
}
function prepare_data(table, index){
    switch (table) {
        case "poslovi":
            data_for_delete = {
                delete:{
                    table_name: "poslovi",
                    index_name: "id",
                    index_value: s_data.nalozi[active_element].id
                }
            }
            break;
        case "provajderi":
            data_for_delete = {
                delete:{
                    table_name: "provajderi_po_poslu",
                    index_name: "id_provajdera_po_poslu",
                    index_value: s_data.provajderi_po_poslu[index].id_provajdera_po_poslu
                }
            }
            break;
        case "kontejneri":
                data_for_delete = {
                    delete:{
                        table_name: "kontejneri",
                        index_name: "id_kontejnera",
                        index_value: s_data.kontejneri_po_poslu[index].id_kontejnera
                    }
                }
                break;
        case "ulazne_fakture":
                data_for_delete = {
                    delete:{
                        table_name: "ulazne_fakture",
                        index_name: "id_ulazne_fakture",
                        index_value: s_data.ulazne_fakture[index].id_ulazne_fakture
                    }
                }
                break;
        case "izlazne_fakture":
                data_for_delete = {
                    delete:{
                        table_name: "izlazne_fakture",
                        index_name: "id_izlazne_fakture",
                        index_value: s_data.izlazne_fakture[index].id_izlazne_fakture
                    }
                }
                break;
    }
    console.log(data_for_delete);
}
function run_delete(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            //$server_response = JSON.parse(this.responseText);
            console.log(data_for_delete.delete.table_name)
            show_delete_form("null")
            switch (data_for_delete.delete.table_name) {
                case "poslovi":
                    set_select_database_par();
                    active_element = 0;
                    break;
                case "provajderi_po_poslu":
                    current_provajderi();
                    break;
                case "kontejneri":
                    current_kontejneri();
                    break;
                case "ulazne_fakture":
                    console.log("well")
                    get_ulazne_fakture();
                    break;
                case "izlazne_fakture":
                    console.log("well")
                    get_izlazne_fakture();
                    break;
            }
            data_for_delete = null;
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data_for_delete));
}