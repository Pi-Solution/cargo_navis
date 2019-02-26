function show_provajde(s1){
	prov_id_for_update = server_response[1][s1].id
	//console.log(server_response[1][s1].id)
	document.getElementById("prov_note_text").value = 
	`${server_response[1][s1].note}`
}
function add_event_to_text_area(){
	b = document.getElementById("prov_note_text").value
	//alert(b)
	//alert(prov_id_for_update)
	se(b);
}
function se(s1){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 	//alert(this.responseText)
    	 	if(this.responseText == 101){
    	 	screen_call = true;
    	 	load_data();	
    	 	alert("sacuvano")
    	 	}
		}
	};
	var hello = new Array();
	var hello2 = new Array();
	hello[0] = 2;
	hello2[0] = "provajderi"
	hello2[1] = "note"
	hello2[2] = s1
	hello2[3] = prov_id_for_update
	hello[1] = hello2;
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(hello));
}