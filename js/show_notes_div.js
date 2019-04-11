//show provajderi notes div
function show_notes_div(control, prov_id){

	x = document.getElementById("flying_div");
	var note_div = document.getElementById("fd-content_child2");
	//x = document.getElementById("form_nalozi")
	if(control == true){
		if (provajders[prov_id].note === null || provajders[prov_id].note.match(/^ *$/) !== null) {
			x.style.display = "none";
		}else {
			x.style.display = "block";
			//console.log(provajders[prov_id].note);
			console.log(note_div.style.width);

			note_div.innerHTML = "<label id='fucking_label'>" + provajders[prov_id].note.replace(new RegExp('\r?\n','g'), '<br />'); + "</label>"
			var kurac = document.getElementById("fucking_label").style.height;
			console.log(kurac);
		}
	}else if(control == false){
		x.style.display = "none";
		//console.log('no')
	}
}
function notes_div_position(event){
  var x = event.clientX;
  var y = event.clientY;
  var div_width = document.getElementById("flying_div").clientHeight / 2;

  //console.log(div_width)
  //console.log(x + "  " + y)
  document.getElementById("flying_div").style.top = y - div_width + 25 + 'px';
}
//add scroll event listener to flying div
function add_event_fd(){
	
	console.log("scrolled")
	/*
	var elmnt = document.getElementById("content");
	var elmnt2 = document.getElementById("ruler");

	elmnt2.scrollLeft = elmnt.scrollTop;
	*/
}