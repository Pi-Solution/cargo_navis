//get databse data
function load_data(){
	var controller = 0;
	var values1 = ['jobs','*'];
	var values2 = ['provajderi','*'];
	var values3 = ['containers', '*'];
	var values4 = ['fakture_ulaz', '*'];
	var values5 = ['izlazne_fakture', '*'];

	var all_values = [values1,values2,values3,values4,values5];

	parametars.length = 0;
	parametars = [];

	parametars.push(controller,all_values);

	//alert(JSON.stringify(parametars));
	get_data();
}
function get_data(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 		server_response = JSON.parse(this.responseText);
				//console.log(this.responseText);
				if (screen_call == true) {
    	 			load_to_screen();
    	 			screen_call = false;
				}
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}