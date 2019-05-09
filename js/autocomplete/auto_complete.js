var input = new Array();
function add_class_to_input_field(){
	var a = document.querySelectorAll('[data-ac_index]');
	for(let i = 0; i < a.length; i++){
		//add class to input field
		a[i].classList.add('autocomplete_input');
		//add autocomplete box
		a[i].parentElement.innerHTML += `
			<div class="autocomplete_child"></div>
		`
	}
	auto_complete_add_events();
}
function auto_complete_add_events(){
	//get input fields
	var input_fields = document.getElementsByClassName("autocomplete_input");
	//get autocomplete div
	var input_ac_div = document.getElementsByClassName("autocomplete_child");
	//add events to input fields
	for(let i = 0; i < input_fields.length; i++){

		input_fields[i].addEventListener("focus", function(){
			check_for_mach(input_fields[i], input_ac_div[i], i);
		});
		input_fields[i].addEventListener("blur", function(){
			setTimeout(function(){
				input_ac_div[i].style.display = "none";
			}, 200);
		});
		input_fields[i].addEventListener("input", function(){
			check_for_mach(input_fields[i], input_ac_div[i], i);
		});
		input_fields[i].addEventListener('keydown', function(e){
			//console.log(e.keyCode);
			if(e.keyCode == 40){
				e.preventDefault();
				marked_element(true, input_ac_div[i]);
			}else if (e.keyCode == 38) {
				e.preventDefault();
				marked_element(false, input_ac_div[i]);
			}else if (e.keyCode == 13) {
				select_marked_element(input_fields[i], input_ac_div[i]);
				input_ac_div[i].style.display = 'none';
			}
		});
	}
}
function check_for_mach(input_field, input_ac_div, for_click){
	input = [];

	if (input_field.value.length != 0) {
		//for(let i = 0; i < ser_val[input_field.dataset.ac_index].length; i++){
		for(let i = 0; i < ser_val[input_field.dataset.ac_index].length && input.length < set_ac_length; i++){
			if (ser_val[input_field.dataset.ac_index][i].search(new RegExp(input_field.value, "i")) == 0) {

				input.push(ser_val[input_field.dataset.ac_index][i]);
			}
		}
	}else{
		input = [];
	}
	//console.log(input);
	show_ac_div(input, input_field, input_ac_div, for_click);
}
function show_ac_div(input, input_field, input_ac_div, for_click){
	if (input != 0) {
		input_ac_div.style.display = 'block';
		print_to_ac_div(input, input_field, input_ac_div, for_click);
	}else{
		input_ac_div.style.display = 'none';
	}
};
function print_to_ac_div(input, input_field, input_ac_div, for_click){
	input_ac_div.innerHTML = ""
	//set autocomplete div heigth
	input_ac_div.style.height = set_ac_height * input.length + "%";
	var list_h = 100 / input.length;
	for(let i = 0; i < input.length; i++){
		//print list items to autocomplete div
		//console.log(input_field)
		input_ac_div.innerHTML += `
			<li class='ac_list' style='height:${list_h}%; top:${list_h * i}%' id='${for_click}input_field_${input[i]}' onclick='select_by_click("${for_click}input_field_${input[i]}");'>
				<div class='ac_list_al'>${input[i]}</div>
			</li>
		`
	}
}
//make keyboard arrows work list sugested elements
function marked_element(direction, input_ac_div){
	var list_elements = input_ac_div.children;
	var current_element = null;
	for(let i = 0; i < list_elements.length; i++){
		if (list_elements[i].style.background == list_elements_bgc) {
			current_element = i;
			break;
		}
	}
	if (current_element == null && direction == true) {
		list_elements[0].style.background = list_elements_bgc;
	}else if (current_element != null && direction == true  && current_element != list_elements.length-1) {
		list_elements[current_element].style.background = 'white'
		list_elements[++current_element].style.background = list_elements_bgc
	}else if (current_element != null && direction == false) {
		list_elements[current_element].style.background = 'white'
		list_elements[--current_element].style.background = list_elements_bgc
	}
}
function select_marked_element(input_fields, input_ac_div){
	var list_elements = input_ac_div.children;
	var current_element = null;
	for(let i = 0; i < list_elements.length; i++){
		if (list_elements[i].style.background == list_elements_bgc) {
			input_fields.value = list_elements[i].children[0].innerHTML;
			check_for_mach(input_fields, input_ac_div);
			break;
		}
	}
}
function select_by_click(div_id){
	document.getElementById(div_id).parentElement.parentElement.children[0].value = document.getElementById(div_id).children[0].innerHTML;
}