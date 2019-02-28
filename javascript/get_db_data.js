//get databse data
function load_data(s1){
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
	console.log("now_load")
	get_data(s1);
}
function get_data(s1){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 		server_response = JSON.parse(this.responseText);
				//console.log(this.responseText);
				//console.log("get_data")
    	 		what_to_run(s1)
		}
	};
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(parametars));
}