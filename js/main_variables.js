//this file container all main global variables

//this variable detemenate on what nalog we are currently when app load for first time it shold be set to 0 so it start whit first nalog
var current_nalog = 0;
var current_nalog_id;
//this variables contain data that we got from server
	//nalozi
	var nalozi = new Array();
	//provajder
	var provajders = new Array();
	//containers
	var containers = new Array();
	//ulazne fakture
	var ulazne_fakture = new Array();
	//izlazne fakture
	var izlanze_fakture = new Array();
//this  variables containes values for factura_arrow function so we can determenate what factura must be shown to user
var ulaz_faktura_arrow = 0;
var izlaz_faktura_arrow = 0;
var all_f_index = new Array;

var container_div_position = 1


//this variables are used in ulazne fakture calculator
var kurs = 1.95583;
var iznos = 0;

//this variables are used for delete and update function
var g_table_name;
var g_db_id;
var g_what_to_do;

//...
var g_table_name = "paritet";

//for provajderi notes function
var prov_note_id;

