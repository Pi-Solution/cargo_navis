function save_job_note(){
	var a = document.getElementById("job_note_text").value
	//console.log(a)
	var change_job_data = new Array();
	var change_job_data2 = new Array();
	change_job_data[0] = 2;
	change_job_data2[0] = 'jobs';
	change_job_data2[1] = "job_note";
	change_job_data2[2] = a;
	change_job_data2[3] = current_nalog_id
	change_job_data[1] = change_job_data2;
	console.log(change_job_data)
	save_job_note_ajax(change_job_data)
}
function save_job_note_ajax(s1){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    	 	//console.log(this.responseText)
    	 	if(this.responseText == 101){
				get_data_controller(0);
    	 	}
		}
	};

	//send data
	xhttp.open("POST", "data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(s1));
}