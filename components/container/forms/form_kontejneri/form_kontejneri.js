function show_form_containeri(){
    var form = document.getElementById("form_kontejneri");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "block";
    }
}
function reset_form_containeri(){
    document.getElementById("fkc-input").value = ""

    document.getElementById("fkc-select").value = "Izaberi"
}
function save_form_kontejner(){
    //get textarea
    var textarea = document.getElementById("fkc-input");
    //get select
    var select_ar = document.getElementById("fkc-select");

    var containers = new Array();

    if (select_ar.value == "Izaberi") {
        alert("Molimo vas izaberite tip kontejnera");
    }else{
        //split string to array
        var con_ar = textarea.value.split(/\r?\n/);
        //save every value to object
        for (let index = 0; index < con_ar.length; index++) {
            if (con_ar[index] != "") {
                containers.push({
                    broj_kontejnera: con_ar[index],
                    vrsta_kontejnera: select_ar.value,
                    id_naloga: s_data.nalozi[active_element].id
                })
            }
        }

        var data = {
            insert: {
                table_name: "kontejneri",
                data: containers
            }
        }
        console.log(data);
        send_kontejnere(data);
    }

}
function send_kontejnere(to_server){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            var server_response2 = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            if (server_response2.insert.messange == 101) {
                alert("Sačuvano");
                show_form_containeri();
                reset_form_containeri();
            }
		}
	};
	//send data
	xhttp.open("POST", "../data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}