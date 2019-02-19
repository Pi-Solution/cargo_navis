//when this function is called it shows form whit id that is passed to this function 
function show_form(form_id){
	var div = document.getElementById(`${form_id}`);
	
	if (div.style.display != 'block') {
		div.style.display = 'block';
	}else{
		div.style.display = 'none';
		parametars = [];
	}

}