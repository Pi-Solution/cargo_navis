//server response 
var server_response;
var server_response2;
//array that we use to send data to server parametars
var parametars = new Array();

//this variable determinate will function get_data() call for function load_to_screen() after call
// (false = no call), (true = call function)
var screen_call = true;

//this variable is uset te determinate what row we main table row we currently working on
var start_data = 0;

// id of current clicked job
var current_job_id;
//current_factura[0] for ulazne fakture, currant_factura[1] for izlazne fakture
var current_factura = [0, 0];

//position of textbox element inside container form
var container_textbox_position = 32;

//we use this variable to determinate what is the last added job so we can add provajders and containers
var last_added_job_id;

var text;

/*
function se(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 	alert(this.responseText);
		}
	};
	var hello = new Array();
	var hello2 = new Array();
	hello[0] = 2;
	hello2[0] = "provajderi"
	hello2[1] = "note"
	hello2[2] = "mislim druze da i ovo sad radi"
	hello2[3] = 89
	hello[1] = hello2;
	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(hello));
}
*/