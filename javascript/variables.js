//server response 
var server_response;
var server_response2;
//array that we use to send data to server parametars
var parametars = new Array();

//this variable determinate will function get_data() call for function load_to_screen() after call
// (false = no call), (true = call function)

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

var kurs = 1.95583;

//for warning screen
var table_name;
var row_id;

var prov_id_for_update

//determenate is provajders and containers called from job form or directly
//(false = directly), (true = from job form)
var call_from_form = false;
var call_from_form2 = false;