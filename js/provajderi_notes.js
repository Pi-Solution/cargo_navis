function show_provajderi_notes(id, provajder_id){
	x = document.getElementById("provajderi_notes")

	//x = document.getElementById("form_nalozi")
	if(x.style.display != "block"){
		x.style.display = "block";
		console.log(id);
		prov_note_id = id;
		document.getElementById("provajdera_notes_textarea").value = provajderi_po_poslu[provajder_id].note;
	}else {
		x.style.display = "none";
	}
}
function update_provajder_notes(){
	console.log(document.getElementById("provajdera_notes_textarea").innerHTML);
	var data = new Array();
	var ser_val = new Array();
	ser_val[0] = 2;
	data[0] = 'provajderi_po_poslu'
	data[1] = 'note';
	data[2] = document.getElementById('provajdera_notes_textarea').value;
	data[3] = prov_note_id;
	ser_val[1] = data;

	save_provajderi_notes(ser_val);
} 
function save_provajderi_notes(parametars){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 	console.log(this.responseText);
    	 	//alert(this.responseText)
    	 	if(this.responseText == 101){
    	 		get_data_controller(1);
    	 		show_provajderi_notes('null');
    	 	}
		}
	};
	//alert(JSON.stringify(parametars));
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}