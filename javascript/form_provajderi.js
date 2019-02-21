//get provajders from user input
function get_user_input2(){
	prov_name = document.getElementsByClassName("prov_input_place");
	prov_price = document.getElementsByClassName("prov_input_place2")

	var s = server_response[0].length - 1;
	var last_added_job_id = server_response[0][s].id;
	console.log(last_added_job_id)

	for(let i = 0;  i < prov_name.length; i++){
		if (prov_name[i].value != "") {
			var a = {
				table_name : "provajderi",
				provajeri_name : `${prov_name[i].value}`,
				dogovorena_cijena : `${prov_price[i].value}`,
				jobs_id : last_added_job_id
			}
			data.push(a);
		}
	}
	show_form('form_provajder');
	show_form('container_form');
}