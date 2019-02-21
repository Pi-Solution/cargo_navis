//server response 
var server_response;
var server_response2;
//array that we use to send data to server parametars
var parametars = new Array();
//this array we use to store valuer that goes to db - this array goes in parametars array
var data = new Array();

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