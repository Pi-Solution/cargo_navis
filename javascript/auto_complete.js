var results = new Array();
var marked_element = 0;

//put this function to your HTML document on input tag 
/*example: <input type="text" name="username" id="input_place" autocomplete="off" 
													onfocus="load_autoComplete()" 
													oninput="load_autoComplete()" 
													onblur="hide_autoComplete()">
*/
function load_autoComplete(s1, s2, s3){
	marked_element = 0;
	//id of input element goes here
	a = document.getElementById(s1)
	//autocomplete container
	autoC = document.getElementById(s3)
	//check input
	if (a.value.length > 0 ) {
		//if there is typed something in input container is shown
		autoC.style.display = "block";
		get_mach_results(autoC, s1, s2)
	}else{
		//hide input if there is noting typed
		autoC.style.display = "none";
	}
}
function get_mach_results(autoC, s1, s2){
	//id of input element goes here
	a = document.getElementById(s1)
	//this array is uset to store values that match whit input
	results = [];
	//check input values and runs for loop to check for maches
	for(let i = 0; i <	ser_val[s2].length; i++){
		if (ser_val[s2][i].search(a.value) == 0) {
			//console.log(ser_val[i]);
			//push maches to array
			results.push(ser_val[s2][i]);	
		}
	}
	//if there is no mached result auto complete div display is set to none
	if (results.length > 0) {
		autoC.style.display = "block";
		//if there is mached elements we run function that print out maches to auto complete div
		con_height(results, autoC);
	}else{
		autoC.style.display = "none";
	}
}
function con_height(results, autoC){
	//get all elements of auto complete results
	con_elements = document.getElementsByClassName("autocomplete_con_element");
	//clear auto complete from last use
	autoC.innerHTML = "";
	//load elements to screen
	for(let i = 0; i < results.length;i++){
		autoC.innerHTML += `
			<div class="autocomplete_con_element">
				<p class="autocomplete_con_element_p">${results[i]}</p>
			</div>
		`
	}
	//determenates elements position form top
	var div_position
	//if you want bigger or smaller div for auto complete change number in line 63 
	if (results.length < 6) {

		a = results.length * 100;
		//auto complete container height
		autoC.style.height = a + "%";
		//auto complete elements height
		con_elements_heigth = 100 / results.length;

		//apply height and position to auto complete elements
		for(let i = 0; i < con_elements.length; i++){

			con_elements[i].style.height = con_elements_heigth + "%";

			div_position = div_position + con_elements_heigth

			con_elements[i].style.top = div_position + "%"
		}

	}else{
		autoC.style.height = "600%";
	}
}
function add_event_autoComplete(){
	a = document.getElementsByClassName("input_place")
	for(let i = 0; i < a.length ;i++){
		
		a[i].addEventListener('keydown', function(e){
			//console.log(e.keyCode)
			if(e.keyCode == 40 ){
				//e.ctrlKey
				e.preventDefault();
				if(marked_element < results.length){
					marked_element++
					//console.log(marked_element)	
					//console.log('resutls: ' + results.length)
					mark_element();
				}
			}
			else if (e.keyCode == 38){
				e.preventDefault();
				if (marked_element > 0) {
					marked_element--
					mark_element();
				}
				//console.log(marked_element)
			}else if (e.keyCode == 13) {
				autoC_elements = document.getElementsByClassName("autocomplete_con_element_p");
				document.getElementById(this.id).value = autoC_elements[marked_element - 1].innerHTML
			}
			
		});
	}
}
function mark_element(){
	autoC_elements = document.getElementsByClassName("autocomplete_con_element")
	//console.log(autoC_elements.length)
	for(let i = 0; i <= autoC_elements.length; i++){
		if (i == 0) {
			autoC_elements[i].style.background = "white";
		}else{
			if (i == marked_element) {
				var b = i - 1;
				//console.log("i= " + i)
				//console.log("b= " + b)
				autoC_elements[b].style.background = "#eaeaea";
			}else{
				var b = i - 1;
				autoC_elements[b].style.background = "white";
			}
		}
	}
}

function hide_autoComplete(s1){
	autoC = document.getElementById(s1);
	if (autoC.style.display == "block") {
		autoC.style.display = "none";
	}
}