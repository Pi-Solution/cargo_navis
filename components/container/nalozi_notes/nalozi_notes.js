function save_napomena(){
    var note = document.getElementById("nn-container")
    var data = {     
        update: {
            table_name: "poslovi",
            name_of_row: "napomena",
            value: note.value,
            id: s_data.nalozi[active_element].id
        }
    }
    //console.log(data)
    update_nalozi_note(data);
}
function update_nalozi_note(to_server){
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            var server_response2 = JSON.parse(this.responseText);
            //console.log(JSON.parse(this.responseText));
            if (server_response2.update.messange == 101) {
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