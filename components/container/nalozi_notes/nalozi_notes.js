function save_napomena(){
    var a = {
        update: {
            table_name: "poslovi",
            collums:{
                napomena: document.getElementById("nn-container").value
            },
            index: {
                index_name: "id",
                index_value: s_data.nalozi[active_element].id
            }
        }
    }
    //console.log(a);
    update_nalozi_note(a);
}
function update_nalozi_note(to_server){
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            var server_response2 = JSON.parse(this.responseText);
            //console.log(JSON.parse(this.responseText));
            if (server_response2.update.messange == 101 || server_response2.update.messange == 102) {
                alert("Sačuvano");
                set_select_database_par();
            }
		}
	};
	//send data
	xhttp.open("POST", "../data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}